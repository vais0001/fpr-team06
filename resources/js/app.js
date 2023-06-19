import './bootstrap';

import Alpine from 'alpinejs';
import {data} from "autoprefixer";

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
        console.log(document.getElementById('checkbox').checked);
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
console.log(myCookieValue);

window.onload = function () {
    const url = window.location.href;
    if(url.includes('rooms')) {
        loadRoomsImport();
        console.log(myCookieValue);
    }
    if(url.includes('model')) {
        runModel();
        console.log('test');
    }
    if(url.includes('dashboard')) {
        console.log(myCookieValue);
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

document.getElementById('model').appendChild(renderer.domElement)

function loadRoomsImport() {
    const rooms = JSON.parse(document.getElementById('world-map').dataset.maps);

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
                roomNameTable.innerHTML = rooms[event.target.parentNode.id-1].name;

                let result = '';
                rooms[event.target.parentNode.id-1]['room_time'].forEach(room => {
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
}

document.querySelectorAll('.addContainer').forEach(addContainer => {
    addContainer.addEventListener('click', function() {
        document.location.href = `/rooms/create?floor=${event.target.id}`;
    });
});

import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'


function runModel() {
    let roomData = null; // Global variable for the room temperature data

    $.ajax({
        url: '/model-data',
        type: 'GET'
    }).done(function(data) {
        roomData = data;
    });

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

    const fbxLoader = new FBXLoader()
    fbxLoader.load(
        '3D-models/ground_floor.fbx',
        (object) => {
            // object.traverse(function (child) {
            //     if ((child as THREE.Mesh).isMesh) {
            //         // (child as THREE.Mesh).material = material
            //         if ((child as THREE.Mesh).material) {
            //             ((child as THREE.Mesh).material as THREE.MeshBasicMaterial).transparent = false
            //         }
            //     }
            // })
            // object.scale.set(.01, .01, .01)
            scene.add(object)
            changeCameraDistance('ground');
            changeCameraAngle('ground');
            loadIcons('ground'); // loads temperature icons for the ground floor
            object.name = 'LoadedFloor'
        },
        (xhr) => {
            console.log((xhr.loaded / xhr.total) * 100 + '% loaded')
        },
        (error) => {
            console.log(error)
        }
    )

    //to get the value of a button
    const buttons = document.querySelectorAll('.button');

    buttons.forEach(button => {
        button.addEventListener('click', loadModel, false);
    });

    function loadModel() {
        delete3DOBJ('LoadedFloor'); // deletes all loaded floor objects
        changeCameraDistance(this.value);
        changeCameraAngle(this.value);
        loadIcons(this.value)
        fbxLoader.load( // loads a new object
            `3D-models/${this.value}_floor.fbx`,
            (object) => {
                // object.traverse(function (child) {
                //     if ((child as THREE.Mesh).isMesh) {
                //         // (child as THREE.Mesh).material = material
                //         if ((child as THREE.Mesh).material) {
                //             ((child as THREE.Mesh).material as THREE.MeshBasicMaterial).transparent = false
                //         }
                //     }
                // })
                // object.scale.set(.01, .01, .01)
                scene.add(object)
                object.name = 'LoadedFloor'
            },
            (xhr) => {
                //console.log((xhr.loaded / xhr.total) * 100 + '% loaded')
            },
            (error) => {
                console.log(error)
            }
        )
    }

    let rooms = []

    function loadIcons (floor) {
        deleteRooms(rooms.length); // empties the rooms from the scene array
        rooms = [] //empties the array for new floor icons to be added
        if (floor == 'ground') { //loads temperature icons for the ground floor
            createRoom('RC021', -1300, 400, -170)

            createRoom('RC020', -1000, 400, -1500)

            createRoom('RC017', 100, 400, -1300)

            createRoom('RC023', 400, 400, -600)

            createRoom('RC016', 1250, 400, -1000)

            createRoom('RC011', 1250, 400, 750)
        }
        if (floor == 1) {
            createRoom('RC102', 500, 850, 1700)

            createRoom('RC103', 1250, 850, 1500)

            createRoom('RC104', 1250, 850, 500)

            createRoom('RC108', -50, 850, -600)
        }
        if (floor == 2) {
            createRoom('RC213', -700, 1300, 50)

            createRoom('RC214', -850, 1300, 800)

            createRoom('RC201', -1000, 1300, 1700)

            createRoom('RC202', 250, 1300, 1900)

            createRoom('RC203', 975, 1300, 1900)

            createRoom('RC204', 1350, 1300, 1900)

            createRoom('RC205', 1700, 1300, 1900)

            createRoom('RC211', -150, 1300, -1100)

            createRoom('RC210', 800, 1300, -1100)
        }
        if (floor == 3) {
            createRoom('RC301', -1100, 1700, 1800)

            createRoom('RC304', 250, 1700, 1800)

            createRoom('RC305', 1300, 1700, 1800)

            createRoom('RC318', -900, 1700, 1150)

            createRoom('RC317', -650, 1700, 650)

            createRoom('RC316', -650, 1700, 100)

            createRoom('RC315', -550, 1700, -250)

            createRoom('RC309', 650, 1700, -1050)
        }
    }

    let myChart = null;

    function onMouseClick(event) {
        // Calculate mouse position in normalized device coordinates (-1 to +1) for both components
        mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

        // Update the picking ray with the camera and mouse position
        raycaster.setFromCamera(mouse, camera);

        // Calculate objects intersecting the picking ray
        let intersects = raycaster.intersectObjects(Object.values(rooms));

        // Inside your intersect loop
        for (let i = 0; i < intersects.length; i++) {
            if (myChart) { // If a chart already exists
                myChart.destroy(); // Destroy it before creating a new one
            }

            let roomID = intersects[i].object.customIndex;
            let temperatures = 0;
            let co2s = 0;
            let times = 0;


            for (let i = 0; i < roomData.length; i++) {
                if (roomData[i].name == roomID) {
                    temperatures = roomData[i].temperatures; //adds all of the temperatures recorder for the room
                    co2s = roomData[i].co2s; //adds all of the co2 levels recorder for the room
                    times = roomData[i].times; //adds all of the time longs for the room
                }
            }

            // Generate your chart here using roomDataForCurrentRoom
            const ctx = document.getElementById('myChartTemp');

            //create the chart
            myChart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: times,
                    datasets: [
                        {
                            label: 'Room Temp',
                            data: temperatures,
                            borderWidth: 1,
                            yAxisID: 'y',
                        },
                        {
                            label: 'Room CO2',
                            data: co2s,
                            borderWidth: 1,
                            yAxisID: 'y1',
                        }
                    ],
                },
                options: {
                    scales: {
                        x: {
                            type: 'time',
                            time: {
                                unit: 'day',
                            },
                        },
                        y: {
                            display: true,
                            position: 'right',
                            beginAtZero: true,
                            min: 14,
                            max: 28,
                            ticks: {
                                stepSize: 2,
                            },
                        },
                        y1: {
                            display: true,
                            position: 'left',
                            beginAtZero: true,
                            min: 200,
                            max: 900,
                            ticks: {
                                stepSize: 100,
                            },
                        },
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

            $('#myModal').modal('show');
        }

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
        } else {
            // When the mouse isn't hovering over the object, revert the cursor
            document.body.style.cursor = 'auto';
        }
    }

    window.addEventListener('click', onMouseClick, false); //Used to click on the temperature icon
    window.addEventListener('mousemove', onMouseMove, false); //Used to make the cursor a pointer when hovering over a temperature icon

    function changeCameraDistance(floor) {
        if (floor == 'ground') {
            camera.position.set(-2500, 2500, 1500)
            camera.updateProjectionMatrix()
        }
        if (floor == 1) {
            camera.position.set(-2000, 4000, 1500)
            camera.updateProjectionMatrix()
        }
        if (floor == 2) {
            camera.position.set(-2500, 4000, 3500)
            camera.updateProjectionMatrix()
        }
        if (floor == 3) {
            camera.position.set(-3000, 5000, 1500)
            camera.updateProjectionMatrix()
        }
    }

    function changeCameraAngle(floor) {
        if (floor == 'ground') {
            controls.minDistance = 2500;
            controls.maxDistance = 4000;
            controls.minPolarAngle = 0;
            controls.maxPolarAngle = Math.PI * 0.35;
        }
        if (floor == 1) {
            controls.minDistance = 3000;
            controls.maxDistance = 4500;
            controls.minPolarAngle = 0;
            controls.maxPolarAngle = Math.PI * 0.35;
        }
        if (floor == 2) {
            controls.minDistance = 3500;
            controls.maxDistance = 5000;
            controls.minPolarAngle = 0;
            controls.maxPolarAngle = Math.PI * 0.35;
        }
        if (floor == 3) {
            controls.minDistance = 3500;
            controls.maxDistance = 5000;
            controls.minPolarAngle = 0;
            controls.maxPolarAngle = Math.PI * 0.3;
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
    const hotTemp = new THREE.TextureLoader().load('images/temperature-hot.png');
    const coldTemp = new THREE.TextureLoader().load('images/temperature-cold.png');

    const normalMaterial = new THREE.SpriteMaterial({map: normalTemp, color: 0xffffff});
    const hotMaterial = new THREE.SpriteMaterial({map: hotTemp, color: 0xffffff});
    const coldMaterial = new THREE.SpriteMaterial({map: coldTemp, color: 0xffffff});

    function createRoom(roomId, xPosition, yPosition, zPosition) {
        let temperature;
        let index;
        let temperatureIcon;
        for (let i = 0; i < roomData.length; i++) {
            if (roomData[i].name == roomId) {
                temperature = roomData[i].latestTemperature;
                index = i;
            }
        }

        if (temperature >= 18.5 && temperature <= 19.5 || temperature == null) {
            temperatureIcon = normalMaterial; //If the temperature is around 19 degrees and if there is no temperature assigned to a room
        }

        if (temperature > 19.5) {
            temperatureIcon = hotMaterial; //if the temperature is higher than 19 degrees
        }

        if (temperature < 18.5 && temperature != null) {
            temperatureIcon = coldMaterial; //if the temperature is below 19 degrees
        }
        const room = new THREE.Sprite( temperatureIcon )
        room.scale.set(100, 200, 1)
        room.position.set(xPosition, yPosition, zPosition)
        room.customIndex = roomId
        room.name = 'room'
        room.index = index;
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

    animate()
}
