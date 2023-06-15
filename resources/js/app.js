import './bootstrap';

import Alpine from 'alpinejs';
import {data} from "autoprefixer";

window.Alpine = Alpine;

Alpine.start();

window.onload = function () {
    const url = window.location.href;
    if(url.includes('rooms')) {
        loadRoomsImport();
    }
    if(url.includes('model')) {
        runModel();
        console.log('test');
    }
}
function loadRoomsImport() {
    const tableBody = document.getElementById('tableBody');

    const rooms = JSON.parse(document.getElementById('world-map').dataset.maps);
    console.log(rooms);
    document.querySelectorAll('.roomContainer').forEach(roomSpecificContainer => {
        roomSpecificContainer.addEventListener('click', function() {

            if(roomSpecificContainer.lastChild.id === 'roomButtonsContainer'){
                roomSpecificContainer.lastChild.remove();
            }
            tableBody.innerHTML = '';
            console.log(event.target.id);
            console.log(rooms[event.target.parentNode.id-1]);
            if(event.target.id === 'roomName'){

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
                document.getElementById('importForm').submit();
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

    const renderer = new THREE.WebGLRenderer()
    renderer.setSize(window.innerWidth, window.innerHeight)
    document.getElementById('model').appendChild(renderer.domElement)

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
    const buttons = document.querySelectorAll('button');

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

    // Temperature icons
    const normalTemp = new THREE.TextureLoader().load('images/temperature-normal.png');
    const hotTemp = new THREE.TextureLoader().load('images/temperature-hot.png');
    const coldTemp = new THREE.TextureLoader().load('images/temperature-cold.png');

    const normalMaterial = new THREE.SpriteMaterial({map: normalTemp, color: 0xffffff});
    const hotMaterial = new THREE.SpriteMaterial({map: hotTemp, color: 0xffffff});
    const coldMaterial = new THREE.SpriteMaterial({map: coldTemp, color: 0xffffff});

    let rooms = []

    function loadIcons (floor) {
        deleteRooms(rooms.length); // empties the rooms from the scene array
        rooms = [] //empties the array for new floor icons to be added
        if (floor == 'ground') { //loads temperature icons for the ground floor
            createRoom('RC021', hotMaterial, -1300, 400, -170)

            createRoom('RC020', normalMaterial, -1000, 400, -1500)

            createRoom('RC017', normalMaterial, 100, 400, -1300)

            createRoom('RC023', normalMaterial, 400, 400, -600)

            createRoom('RC016', normalMaterial, 1250, 400, -1000)

            createRoom('RC011', normalMaterial, 1250, 400, 750)
        }
        if (floor == 1) {
            createRoom('RC102', normalMaterial, 500, 850, 1700)

            createRoom('RC103', normalMaterial, 1250, 850, 1500)

            createRoom('RC104', normalMaterial, 1250, 850, 500)

            createRoom('RC108', normalMaterial, -50, 850, -600)
        }
        if (floor == 2) {
            createRoom('RC213', normalMaterial, -700, 1300, 50)

            createRoom('RC214', normalMaterial, -850, 1300, 800)

            createRoom('RC201', normalMaterial, -1000, 1300, 1700)

            createRoom('RC202', normalMaterial, 250, 1300, 1900)

            createRoom('RC203', normalMaterial, 975, 1300, 1900)

            createRoom('RC204', normalMaterial, 1350, 1300, 1900)

            createRoom('RC205', normalMaterial, 1700, 1300, 1900)

            createRoom('RC211', normalMaterial, -150, 1300, -1100)

            createRoom('RC210', normalMaterial, 800, 1300, -1100)
        }
        if (floor == 3) {
            createRoom('RC301', normalMaterial, -1100, 1700, 1800)

            createRoom('RC304', normalMaterial, 250, 1700, 1800)

            createRoom('RC305', normalMaterial, 1300, 1700, 1800)

            createRoom('RC318', normalMaterial, -900, 1700, 1150)

            createRoom('RC317', normalMaterial, -650, 1700, 650)

            createRoom('RC316', normalMaterial, -650, 1700, 100)

            createRoom('RC315', normalMaterial, -550, 1700, -250)

            createRoom('RC309', normalMaterial, 650, 1700, -1050)
        }
    }

    function onMouseClick(event) {
        // Calculate mouse position in normalized device coordinates (-1 to +1) for both components
        mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

        // Update the picking ray with the camera and mouse position
        raycaster.setFromCamera(mouse, camera);

        // Calculate objects intersecting the picking ray
        let intersects = raycaster.intersectObjects(Object.values(rooms));

        for (let i = 0; i < intersects.length; i++) {
            console.log(intersects[i].object.customIndex);
        }
    }

    window.addEventListener('click', onMouseClick, false);

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

    function createRoom(roomId, roomStatus, xPosition, yPosition, zPosition) {
        const room = new THREE.Sprite( roomStatus )
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

    animate()
}
