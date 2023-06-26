import './bootstrap';

import Alpine from 'alpinejs';
import * as THREE from 'three'
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'
import {FBXLoader} from 'three/examples/jsm/loaders/FBXLoader'
import {color} from "three/nodes";

window.Alpine = Alpine;

Alpine.start();

/**
 * Makes a cookie to save the dark mode value
 * @param cvalue dark mode value can be 'Dark' or 'Light'
 */
function setCookie(cvalue) {
    document.cookie = "mode=" + cvalue;
}

const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.setClearColor("#A3ABBD");
function setRenderColor(color) {
    renderer.setClearColor(color);
}

/**
 * Handles the dark mode switch
 */
function darkMode() {
    if (myCookieValue === "dark") {
        document.getElementById('checkbox').checked = true;
        }
    document.querySelector('.check').addEventListener('click', () => {
        if (!document.getElementById('checkbox').checked) {
            setCookie("dark");
            turnDark();
        } else {
            setCookie("light");
            turnLight();
        }
    });
}
/**
 * changes the css classes to dark mode and sets a new cookie value
 */
function turnDark() {
    document.documentElement.classList.add("dark");
    document.getElementById('jrczImage').src = 'images/jrcz-transparent-white.png';
    document.getElementById('button-light1').className = "button-dark";
    document.getElementById('button-light2').className = "button-dark";
    document.getElementById('button-light3').className = "button-dark";
    document.getElementById('button-light4').className = "button-dark";
    document.querySelector('.widget-light').className = "widget-dark";
    document.querySelector('.weather-status').style.color = '#fff';
    document.querySelector('.tooltip-light').className = "tooltip-dark";
    setRenderColor("#0E1A2B");
}
/**
 * changes the css classes to light mode and sets a new cookie value
 */
function turnLight() {
    document.documentElement.classList.remove("dark");
    document.getElementById('jrczImage').src = 'images/jrcz-transparent.png';
    document.getElementById('button-light1').className = "button-light";
    document.getElementById('button-light2').className = "button-light";
    document.getElementById('button-light3').className = "button-light";
    document.getElementById('button-light4').className = "button-light";
    document.querySelector('.widget-dark').className = "widget-light";
    document.querySelector('.weather-status').style.color = 'black';
    document.querySelector('.tooltip-dark').className = "tooltip-light";
    setRenderColor("#A3ABBD");
}
/**
 * Gets the current value of the dark mode cookie
 * @param cname dark mode value
 * @returns {string}
 */
function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

const myCookieValue = getCookie("mode");

window.onload = function () {
    const url = window.location.href;
    if (url.endsWith('rooms')) {
        loadRoomsImport();
    }
    if(url.includes('create')) {
        console.log(myCookieValue);
    }
    if(url.includes('model')) {
        runModel();
        co2warning();
    }
    getCookie("mode");
    darkMode();
    if (myCookieValue === "dark") {
        document.documentElement.classList.add("dark");
        turnDark();
    } else {
        document.documentElement.classList.remove("dark");
        turnLight();
    }
}

function loadRoomsImport() {
    let rooms = null;

    $.ajax({
        url: '/import-data',
        type: 'GET'
    }).done(function(data) {
        rooms = data;

        const tableBody = document.getElementById('tableBody');

        document.querySelectorAll('.roomContainer').forEach(roomSpecificContainer => {
            roomSpecificContainer.addEventListener('click', function() {
                if(roomSpecificContainer.lastChild.id === 'roomButtonsContainer'){
                    roomSpecificContainer.lastChild.remove();
                }

                tableBody.innerHTML = '';
                if(event.target.id === 'roomName'){

                    const roomNameTable = document.getElementById('roomNameTable');
                    roomNameTable.className = 'text-2xl text-white font-bold dark:hover:text-white visible';
                    roomNameTable.innerHTML = event.target.innerHTML.toString().replace(/\s/g, "");

                    if(rooms[event.target.parentNode.id] !== undefined) {
                        let result = '';
                        rooms[event.target.parentNode.id].forEach(room => {
                            result += `<tr>
                                 <td>${room.id}</td>
                                 <td>${room.time}</td>
                                 <td>${room.co2}</td>
                                 <td>${room.temperature}</td>
                                 <td>${room.outside_temperature}</td>
                                 <td>${room.booked}</td>
                                 </tr>`;
                        });

                        tableBody.innerHTML = result;
                    }
                }

                const roomButtonsContainer = document.createElement('div');
                roomButtonsContainer.id = 'roomButtonsContainer';
                roomButtonsContainer.className = 'flex flex-row justify-center absolute';
                roomButtonsContainer.style.marginLeft = '-65px';
                roomSpecificContainer.appendChild(roomButtonsContainer);

                const editButton = document.createElement('button');
                editButton.id = 'editButton';
                editButton.className = 'hover:bg-red-700 text-white font-bold py-2 px-4 rounded';
                editButton.innerHTML = 'Edit';
                editButton.type = 'submit';

                roomButtonsContainer.appendChild(editButton);

                editButton.addEventListener('click', function () {
                    const form = document.getElementById('editForm');
                    form.action = `/rooms/${event.target.parentNode.parentNode.id}/edit`;
                    form.submit();
                });

                const revertButton = document.createElement('button');
                revertButton.id = 'revertButton';
                revertButton.className = 'hover:bg-red-700 text-white font-bold py-2 px-4 rounded';
                revertButton.innerHTML = 'Revert';
                revertButton.type = 'submit';

                roomButtonsContainer.appendChild(revertButton);

                revertButton.addEventListener('click', function () {
                    document.getElementById('set_room_destroy').value = event.target.parentNode.parentNode.id
                    document.getElementById('destroyForm').submit();
                });

                const importButton = document.createElement('button');
                importButton.id = 'importButton';
                importButton.className = 'hover:bg-blue-700 text-white font-bold py-2 px-4 rounded';
                importButton.innerHTML = 'Import';
                importButton.type = 'submit';

                importButton.addEventListener('click', function () {
                    document.getElementById('set_room').value = event.target.parentNode.parentNode.id
                    if(document.getElementById('room_times').value !== '') {
                        document.getElementById('importForm').submit();
                    } else{
                        const errorContainer = document.getElementById('errorContainer');
                        errorContainer.innerHTML = '';
                        const error = document.createElement('p');
                        error.className = 'text-red-600';
                        error.innerHTML = '* Please select a file';
                        errorContainer.appendChild(error);
                    }
                });
                roomButtonsContainer.appendChild(importButton);

                roomSpecificContainer.addEventListener('mouseleave', function() {
                    importButton.remove();
                    revertButton.remove();
                    editButton.remove();
                    roomSpecificContainer.firstChild.className = 'text-2xl text-gray-500 font-bold dark:hover:text-white';
                });
            });
        });

        document.querySelectorAll('.addContainer').forEach(addContainer => {
            addContainer.addEventListener('click', function() {
                document.location.href = `/rooms/create?floor=${event.target.id}`;
            });
        });
    });
}


function runModel() {
    document.getElementById('model').appendChild(renderer.domElement)

    const scene = new THREE.Scene()

    const light = new THREE.PointLight()
    light.position.set(0.8, 2000, 1.0)
    scene.add(light)

    const ambientLight = new THREE.AmbientLight()
    scene.add(ambientLight)

    const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        8000,
    );
    camera.position.set(-2500, 2000, 1500)
    camera.updateProjectionMatrix()


    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true
    controls.target.set(0, 1, 0)
    controls.minDistance = 2500;
    controls.maxDistance = 4500;
    controls.minPolarAngle = 0;
    controls.maxPolarAngle = Math.PI * 0.35;

    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    let errorDiv = null;

    const fbxLoader = new FBXLoader()
    fbxLoader.load(
        '3D-models/0_floor.fbx',
        (object) => {
            scene.add(object);
            changeCameraDistance(0);
            changeCameraAngle(0);
            loadIcons(0); // loads temperature icons for the ground floor
            object.name = 'LoadedFloor';

            // Remove the error message if it exists
            if (errorDiv) {
                errorDiv.remove();
                errorDiv = null;
            }
        },
        undefined,
        (error) => {
            // Only create a new errorDiv if it doesn't already exist
            if (!errorDiv) {
                errorDiv = document.createElement('div');
                errorDiv.style.position = 'absolute';
                errorDiv.style.left = '50%';
                errorDiv.style.top = '50%';
                errorDiv.style.transform = 'translate(-50%, -50%)';
                errorDiv.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
                errorDiv.style.color = '#fff';
                errorDiv.style.padding = '10px';
                errorDiv.style.borderRadius = '5px';
                errorDiv.style.textAlign = 'center';
                document.body.appendChild(errorDiv);
            }

            // Set or update the error message
            errorDiv.textContent = 'There has been an error while trying to load the building model. Try refreshing the website.';
        }
    );


    //to get the value of a button
    const buttons = document.querySelectorAll('.button');

    buttons.forEach(button => {
        button.addEventListener('click', loadModel, false);
    });

    function loadModel() {
        delete3DOBJ('LoadedFloor'); // deletes all loaded floor objects
        changeCameraDistance(parseInt(this.value));
        changeCameraAngle(parseInt(this.value));
        loadIcons(parseInt(this.value));
        fbxLoader.load( // loads a new object
            `3D-models/${this.value}_floor.fbx`,
            (object) => {
                scene.add(object)
                object.name = 'LoadedFloor'

                // Remove the error message if it exists
                if (errorDiv) {
                    errorDiv.remove();
                    errorDiv = null;
                }
            },
            undefined,
            (error) => {
                // Only create a new errorDiv if it doesn't already exist
                if (!errorDiv) {
                    errorDiv = document.createElement('div');
                    errorDiv.style.position = 'absolute';
                    errorDiv.style.left = '50%';
                    errorDiv.style.top = '50%';
                    errorDiv.style.transform = 'translate(-50%, -50%)';
                    errorDiv.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
                    errorDiv.style.color = '#fff';
                    errorDiv.style.padding = '10px';
                    errorDiv.style.borderRadius = '5px';
                    errorDiv.style.textAlign = 'center';
                    document.body.appendChild(errorDiv);
                }

                // Set or update the error message
                errorDiv.textContent = 'There has been an error while trying to load the building model. Try refreshing the website.';
            }
        )
    }

    let rooms = []

    function loadIcons(floor) {
        deleteRooms(rooms.length); // empties the rooms from the scene array
        rooms = []; // empties the array for new floor icons to be added

        switch (floor) {
            case 0:
                createRoom('RC021', -1300, 400, -170);
                createRoom('RC020', -1000, 400, -1500);
                createRoom('RC017', 100, 400, -1300);
                createRoom('RC023', 400, 400, -600);
                createRoom('RC016', 1250, 400, -1000);
                createRoom('RC011', 1250, 400, 750);
                break;
            case 1:
                createRoom('RC102', 500, 850, 1700);
                createRoom('RC103', 1250, 850, 1500);
                createRoom('RC104', 1250, 850, 500);
                createRoom('RC108', -50, 850, -600);
                break;
            case 2:
                createRoom('RC213', -700, 1300, 50);
                createRoom('RC214', -850, 1300, 800);
                createRoom('RC201', -1000, 1300, 1700);
                createRoom('RC202', 250, 1300, 1900);
                createRoom('RC203', 975, 1300, 1900);
                createRoom('RC204', 1350, 1300, 1900);
                createRoom('RC205', 1700, 1300, 1900);
                createRoom('RC211', -150, 1300, -1100);
                createRoom('RC210', 800, 1300, -1100);
                break;
            case 3:
                createRoom('RC301', -1100, 1700, 1800);
                createRoom('RC304', 250, 1700, 1800);
                createRoom('RC305', 1300, 1700, 1800);
                createRoom('RC318', -900, 1700, 1150);
                createRoom('RC317', -650, 1700, 650);
                createRoom('RC316', -650, 1700, 100);
                createRoom('RC315', -550, 1700, -250);
                createRoom('RC309', 650, 1700, -1050);
                break;
            default:
                break;
        }
    }

    let myChart = null;

    function onMouseClick(event) {
        let roomData = null; // Global variable for the room temperature data

        // Calculate mouse position in normalized device coordinates (-1 to +1) for both components
        mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

        // Update the picking ray with the camera and mouse position
        raycaster.setFromCamera(mouse, camera);

        // Calculate objects intersecting the picking ray
        let intersects = raycaster.intersectObjects(Object.values(rooms));

        let temperatureReversed = [];
        let co2Reversed = [];
        let timeReversed = [];
        let outsideTempReversed = [];
        let bookingReversed = [];

        let timeIndex = 0;
        let traverseMode = 'day';
        let traverse = 288;

        if (intersects.length > 0) {
            // Inside your intersect loop
            $.ajax({
                url: '/model-data/' + intersects[0].object.customIndex,
                type: 'GET'
            }).done(function(data) {
                roomData = data;

                let roomID = intersects[0].object.customIndex;
                let temperatures = [];
                let co2s = [];
                let times = [];
                let outsideTemps = [];
                let bookings = [];
                if(roomData !== null) {
                    for (let i = 0; i < roomData.length; i++) {
                        if (roomData[i].name === roomID) {
                            temperatures.push(roomData[i].temperature); //adds all of the temperatures recorded for the room
                            co2s.push(roomData[i].co2); //adds all of the co2 levels recorded for the room
                            times.push(roomData[i].time); //adds all of the time longs for the room
                            outsideTemps.push(roomData[i].outside_temperature); //adds all of the outside temperatures recorded for the room
                            if(roomData[i].booked === 0 || roomData[i].booked === null){
                                bookings.push(null);
                            }else{
                                bookings.push(roomData[i].booked); //adds all of the booking data for the room
                            }
                        }
                    }
                }
                temperatureReversed = temperatures.reverse();
                co2Reversed = co2s.reverse();
                timeReversed = times.reverse();
                outsideTempReversed = outsideTemps.reverse();
                bookingReversed = bookings.reverse();

                createChart(timeIndex, traverse, temperatureReversed,co2Reversed, timeReversed, outsideTempReversed, bookingReversed);

                $('#myModal').modal('show');
            });

            document.getElementById('myModalLabel').innerHTML = intersects[0].object.customIndex;

            document.getElementById('weekButton').addEventListener('click', function() {
                traverseMode = 'week';
                traverse = 2016;
                timeIndex = 0;
                createChart(timeIndex, traverse, temperatureReversed,co2Reversed, timeReversed, outsideTempReversed, bookingReversed);
            });
            document.getElementById('dayButton').addEventListener('click', function() {
                traverseMode = 'day';
                traverse = 288;
                timeIndex = 0;
                createChart(timeIndex, traverse, temperatureReversed,co2Reversed, timeReversed, outsideTempReversed, bookingReversed);
            });
            document.getElementById('hourButton').addEventListener('click', function() {
                traverseMode = 'hour';
                traverse = 12;
                timeIndex = 0;
                createChart(timeIndex, traverse, temperatureReversed,co2Reversed, timeReversed, outsideTempReversed, bookingReversed);
            });

            document.getElementById('backData').addEventListener('click', function() {
                switch (traverseMode){
                    case 'week':
                        timeIndex += 2016;
                        traverse = timeIndex + 2016;
                        break;
                    case 'day':
                        timeIndex += 288;
                        traverse = timeIndex + 288;
                        break;
                    case 'hour':
                        timeIndex += 12;
                        traverse = timeIndex + 12;
                        break;
                    default:
                        break;
                }
                createChart(timeIndex, traverse, temperatureReversed,co2Reversed, timeReversed, outsideTempReversed, bookingReversed);
            });

            document.getElementById('nextData').addEventListener('click', function() {
                switch (traverseMode){
                    case 'week':
                        timeIndex -= 2016;
                        traverse = timeIndex + 2016;
                        break;
                    case 'day':
                        timeIndex -= 288;
                        traverse = timeIndex + 288;
                        break;
                    case 'hour':
                        timeIndex -= 12;
                        traverse = timeIndex + 12;
                        break;
                    default:
                        break;
                }
                createChart(timeIndex, traverse, temperatureReversed,co2Reversed, timeReversed, outsideTempReversed, bookingReversed);
            });
        }
    }

    function createChart(timeIndex, traverse, temperatureReversed, co2Reversed, timeReversed, outsideTempReversed, bookingReversed) {
        let temperatureReversedSliced = temperatureReversed.slice(timeIndex, traverse);
        let co2ReversedSliced = co2Reversed.slice(timeIndex, traverse);
        let timeReversedSliced = timeReversed.slice(timeIndex, traverse);
        let outsideTempReversedSliced = outsideTempReversed.slice(timeIndex, traverse);
        let bookingReversedSliced = bookingReversed.slice(timeIndex, traverse);
        let chartUnit = '';


        let temperatureSliced = temperatureReversedSliced.reverse();
        let co2Sliced = co2ReversedSliced.reverse();
        let timeSliced = timeReversedSliced.reverse();
        let outsideTempSliced = outsideTempReversedSliced.reverse();
        let bookingSliced = bookingReversedSliced.reverse();

        document.getElementById('highTemp').innerHTML = Math.max(...temperatureReversedSliced).toString();
        document.getElementById('lowTemp').innerHTML = Math.min(...temperatureReversedSliced).toString();
        document.getElementById('highCo2').innerHTML = Math.max(...co2ReversedSliced).toString();
        document.getElementById('lowCo2').innerHTML = Math.min(...co2ReversedSliced).toString();

        const roomsContainer = document.getElementById('roomsContainer');
        roomsContainer.innerHTML = '';
        if (temperatureReversedSliced.length === 0) {
            document.getElementById('errorData').innerHTML = 'No data available';
        }else{
            document.getElementById('errorData').innerHTML = '';
            for (let i = 0; i < temperatureSliced.length; i+= 12) {
                if ((temperatureSliced[i] - outsideTempSliced[i] > 3 || temperatureSliced[i] >= 21) && bookingSliced[i] === null && co2Sliced[i] < 450) {
                    const roomContainer = document.createElement('div');
                    roomContainer.id = 'roomContainer';
                    roomContainer.className = 'bg-red-600 rounded p-1';
                    roomsContainer.appendChild(roomContainer);

                    const roomTime = document.createElement('div');
                    roomTime.id = 'roomTime';
                    roomTime.className = 'text-white';
                    roomTime.innerHTML = new Date(timeSliced[i]).toLocaleString('en-US', {
                        month: 'long',
                        day: 'numeric',
                        hour: 'numeric',
                        minute: 'numeric'
                    });
                    roomContainer.appendChild(roomTime);
                }
            }
        }

        switch (traverse){
            case 2016:
                chartUnit = 'day';
                break;
            case 288:
                chartUnit = 'hour';
                break;
            case 12:
                chartUnit = 'minute';
                break;
            default:
                break;
        }

        if (myChart) { // If a chart already exists
            myChart.destroy(); // Destroy it before creating a new one
        }

        // Generate your chart here using roomDataForCurrentRoom
        const ctx = document.getElementById('myChartTemp');

        //create the chart
        myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: timeSliced,
                datasets: [
                    {
                        label: 'Room Temp',
                        data: temperatureSliced,
                        borderWidth: 1,
                        yAxisID: 'y',
                        borderColor: 'rgb(60,83,255)',
                        backgroundColor: 'rgba(0,33,255,0.1)',
                    },
                    {
                        label: 'Room CO2',
                        data: co2Sliced,
                        borderWidth: 1,
                        yAxisID: 'y1',
                        borderColor: 'rgb(255,173,0)',
                        backgroundColor: 'rgba(255,173,0,0.1)',
                    },
                    {
                        label: 'Outside Temp',
                        data: outsideTempSliced,
                        borderWidth: 1,
                        yAxisID: 'y',
                        borderColor: 'rgb(47,196,83)',
                        backgroundColor: 'rgb(47,196,83,0.1)',
                    },
                    {
                        label: 'Bookings',
                        data: bookingSliced,
                        borderWidth: 1,
                        yAxisID: 'y3',
                        borderColor: 'rgb(243,86,2)',
                        backgroundColor: 'rgb(243,86,2,0.1)',
                    }
                ],
            },
            options: {
                responsive: true,
                scales: {
                    x: {
                        grid: {
                            color: '#7c7c7c',
                            drawBorder: false,
                            borderDash: [6, 4],
                        },
                        type: 'time',
                        time: {
                            unit: chartUnit,
                            displayFormats: {
                                hour: 'MMMM dd HH:mm',
                                minute: 'MMMM dd HH:mm',
                                day: 'MMMM dd HH:mm',
                            }
                        },
                        ticks: {
                            source: 'labels',
                        }
                    },
                    y: {
                        grid: {
                            color: '#7c7c7c',
                            drawBorder: false,
                            borderDash: [6, 4],
                        },
                        display: true,
                        position: 'right',
                        beginAtZero: true,
                        min: 0,
                        max: 35,
                        ticks: {
                            stepSize: 2,
                            color: '#7c7c7c',
                        },
                    },
                    y1: {
                        grid: {
                            color: '#7c7c7c',
                            drawBorder: false,
                            borderDash: [6, 4],
                        },
                        display: true,
                        position: 'left',
                        beginAtZero: true,
                        min: 200,
                        max: 900,
                        ticks: {
                            stepSize: 100,
                            color: '#7c7c7c',
                        },
                    },
                    y3: {
                        grid: {
                            color: '#7c7c7c',
                            drawBorder: false,
                            borderDash: [6, 4],
                        },
                        display: false,
                        position: 'left',
                        beginAtZero: true,
                        min: -10,
                        max: 10,
                        ticks: {
                            stepSize: 1,
                            color: '#7c7c7c',
                        }
                    }
                },
                plugins: {
                    zoom: {
                        zoom: {
                            wheel: {
                                enabled: true,
                            },
                            pinch: {
                                enabled: true,
                            },
                            pan: {
                                enabled: true,
                                mode: 'xy',
                            },
                            mode: 'xy',
                        },
                        limits: {
                            x: { min: 'original', max: 'original' },
                            y: { min: 'original', max: 'original' },
                        },
                    },
                },
            },
        });
    }

    function onMouseMove(event) {
        // Normalized device coordinates range from -1 to +1
        mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

        raycaster.setFromCamera(mouse, camera);
        let intersects = raycaster.intersectObjects(Object.values(rooms));

        if (intersects.length > 0) {
            // If the mouse hovers over the 3D object, change cursor to pointer
            document.body.style.cursor = 'pointer';

            let tooltip = document.getElementById('tooltip');
            tooltip.style.display = 'block';
            tooltip.style.left = (event.clientX + 10) + 'px';
            tooltip.style.top = (event.clientY + 20) + 'px';
            tooltip.textContent = intersects[0].object.customIndex;
        } else {
            // When the mouse isn't hovering over the object, revert the cursor
            document.body.style.cursor = 'auto';
            document.getElementById('tooltip').style.display = 'none';
        }
    }

    window.addEventListener('click', onMouseClick, false); //Used to click on the temperature icon
    window.addEventListener('mousemove', onMouseMove, false); //Used to make the cursor a pointer when hovering over a temperature icon

    function changeCameraDistance(floor) {
        switch (floor) {
            case 0:
                camera.position.set(-2500, 2500, 1500);
                camera.updateProjectionMatrix();
                break;
            case 1:
                camera.position.set(-2000, 4000, 1500);
                camera.updateProjectionMatrix();
                break;
            case 2:
                camera.position.set(-2500, 4000, 3500);
                camera.updateProjectionMatrix();
                break;
            case 3:
                camera.position.set(-3000, 5000, 1500);
                camera.updateProjectionMatrix();
                break;
            default:
                break;
        }
    }

    function changeCameraAngle(floor) {
        switch (floor) {
            case 0:
                controls.minDistance = 2500;
                controls.maxDistance = 4000;
                controls.minPolarAngle = 0;
                controls.maxPolarAngle = Math.PI * 0.35;
                break;
            case 1:
                controls.minDistance = 3000;
                controls.maxDistance = 4500;
                controls.minPolarAngle = 0;
                controls.maxPolarAngle = Math.PI * 0.35;
                break;
            case 2:
                controls.minDistance = 3500;
                controls.maxDistance = 5000;
                controls.minPolarAngle = 0;
                controls.maxPolarAngle = Math.PI * 0.35;
                break;
            case 3:
                controls.minDistance = 3500;
                controls.maxDistance = 5000;
                controls.minPolarAngle = 0;
                controls.maxPolarAngle = Math.PI * 0.3;
                break;
            default:
                break;
        }
    }

    function delete3DOBJ(objName){
        let selectedObject = scene.getObjectByName(objName);
        scene.remove( selectedObject );
        render();
    }

    function deleteRooms(length){
        let count = 0;
        while (count <= length) {
            let selectedObject = scene.getObjectByName('room');
            scene.remove( selectedObject );
            render();
            count++;
        }
    }

    // Temperature icons
    const normalTemp = new THREE.TextureLoader().load('images/temperature-normal.png');
    // const hotTemp = new THREE.TextureLoader().load('images/temperature-hot.png');
    // const coldTemp = new THREE.TextureLoader().load('images/temperature-cold.png');

    const normalMaterial = new THREE.SpriteMaterial({map: normalTemp, color: 0xffffff});
    // const hotMaterial = new THREE.SpriteMaterial({map: hotTemp, color: 0xffffff});
    // const coldMaterial = new THREE.SpriteMaterial({map: coldTemp, color: 0xffffff});

    function createRoom(roomId, xPosition, yPosition, zPosition) {
        const room = new THREE.Sprite( normalMaterial )
        room.scale.set(100, 200, 1)
        room.position.set(xPosition, yPosition, zPosition)
        room.customIndex = roomId
        room.name = 'room'
        rooms.push( room )
        scene.add( room )
    }

    window.addEventListener('resize', onWindowResize, false)
    function onWindowResize() {
        camera.aspect = window.innerWidth / window.innerHeight
        camera.updateProjectionMatrix()
        renderer.setSize(window.innerWidth, window.innerHeight)
        render()
    }

    function animate() {
        requestAnimationFrame(animate)

        controls.update()

        render()
    }

    function render() {
        renderer.render(scene, camera)
    }

    animate();
}

function co2warning () {
    let co2data = null;
    $.ajax({
        url: '/model-co2/',
        type: 'GET'
    }).done(function(data) {
        co2data = data

        const co2container = document.getElementById('co2-danger');
        for (let i = 0; i < co2data.length; i++) {
            if (co2data[i].co2 > 800) {
                const dangerRoom = document.createElement('div');
                dangerRoom.className = 'bg-orange-600 text-white p-2 rounded-lg mb-2';
                dangerRoom.innerHTML = `${co2data[i].room_name} - ${co2data[i].co2} ppm`;
                co2container.appendChild(dangerRoom);
            }
        }
    });
}
