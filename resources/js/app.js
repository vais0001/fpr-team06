import './bootstrap';

import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'

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
document.body.appendChild(renderer.domElement)

const controls = new OrbitControls(camera, renderer.domElement)
controls.enableDamping = true
controls.target.set(0, 1, 0)
controls.minDistance = 2500;
controls.maxDistance = 4500;
controls.minPolarAngle = 0;
controls.maxPolarAngle =  Math.PI * 0.35;

const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();


//const material = new THREE.MeshNormalMaterial()

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
    console.log(scene.children.length)
    console.log(scene)
    delete3DOBJ('LoadedFloor'); // deletes all loaded floor objects
    changeCameraDistance(this.value);
    changeCameraAngle(this.value);
    loadIcons(this.value)
    fbxLoader.load( // loads a new object
        `3D-models/${this.value}_floor.fbx`,
        (object) => {
            scene.add(object)
            object.name = 'LoadedFloor'
        },
        (xhr) => {
            console.log((xhr.loaded / xhr.total) * 100 + '% loaded')
        },
        (error) => {
            console.log(error)
        },
    )
}

// Temperature icons
const normalTemp = new THREE.TextureLoader().load( 'images/temperature-normal.png' );
const hotTemp = new THREE.TextureLoader().load( 'images/temperature-hot.png' );
const coldTemp = new THREE.TextureLoader().load( 'images/temperature-cold.png' );

const normalMaterial = new THREE.SpriteMaterial( { map: normalTemp, color: 0xffffff } );
const hotMaterial = new THREE.SpriteMaterial( { map: hotTemp, color: 0xffffff } );
const coldMaterial = new THREE.SpriteMaterial( { map: coldTemp, color: 0xffffff } );

let rooms = []

function loadIcons (floor) {
    deleteRooms(rooms.length); // empties the rooms from the scene array
    rooms = [] //empties the array for new floor icons to be added
    if (floor == 'ground') { //loads temperature icons for the ground floor
        const RC021 = new THREE.Sprite( hotMaterial )
        RC021.scale.set(100, 200, 1)
        RC021.position.set(-1300, 400, -170)
        RC021.customIndex = 'RC021'
        RC021.name = 'room'
        rooms.push( RC021 )
        scene.add( RC021 )

        const RC020 = new THREE.Sprite( normalMaterial )
        RC020.scale.set(100, 200, 1)
        RC020.position.set(-1000, 400, -1500)
        RC020.customIndex = 'RC020'
        RC020.name = 'room'
        rooms.push( RC020 )
        scene.add( RC020 )

        const RC017 = new THREE.Sprite( normalMaterial )
        RC017.scale.set(100, 200, 1)
        RC017.position.set(100, 400, -1300)
        RC017.customIndex = 'RC017'
        RC017.name = 'room'
        rooms.push( RC017 )
        scene.add( RC017 )

        const RC023 = new THREE.Sprite( normalMaterial )
        RC023.scale.set(100, 200, 1)
        RC023.position.set(400, 400, -600)
        RC023.customIndex = 'RC023'
        RC023.name = 'room'
        rooms.push( RC023 )
        scene.add( RC023 )

        const RC016 = new THREE.Sprite(normalMaterial)
        RC016.scale.set(100, 200, 1)
        RC016.position.set(1250, 400, -1000)
        RC016.customIndex = 'RC016'
        RC016.name = 'room'
        rooms.push( RC016 )
        scene.add( RC016 )

        const RC011 = new THREE.Sprite( normalMaterial )
        RC011.scale.set(100, 200, 1)
        RC011.position.set(1250, 400, 750)
        RC011.customIndex = 'RC011';
        RC011.name = 'room'
        rooms.push( RC011 )
        scene.add( RC011 )
    }
    if (floor == 1) {
        const RC102 = new THREE.Sprite(normalMaterial)
        RC102.scale.set(100, 200, 1)
        RC102.position.set(500, 850, 1700)
        RC102.customIndex = 'RC102'
        RC102.name = 'room'
        rooms.push( RC102 )
        scene.add( RC102 )

        const RC103 = new THREE.Sprite(normalMaterial)
        RC103.scale.set(100, 200, 1)
        RC103.position.set(1250, 850, 1500)
        RC103.customIndex = 'RC103'
        RC103.name = 'room'
        rooms.push( RC103 )
        scene.add( RC103 )

        const RC104 = new THREE.Sprite(normalMaterial)
        RC104.scale.set(100, 200, 1)
        RC104.position.set(1250, 850, 500)
        RC104.customIndex = 'RC104'
        RC104.name = 'room'
        rooms.push( RC104 )
        scene.add( RC104 )

        const RC108 = new THREE.Sprite(normalMaterial)
        RC108.scale.set(100, 200, 1)
        RC108.position.set(-50, 850, -600)
        RC108.customIndex = 'RC108'
        RC108.name = 'room'
        rooms.push( RC108 )
        scene.add( RC108 )
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

function changeCameraDistance (floor) {
    if (floor == 'ground') {
        camera.position.set(-2500, 2000, 1500)
        camera.updateProjectionMatrix()
    }
    if (floor == 1) {
        camera.position.set(-2000, 2500, 1500)
        camera.updateProjectionMatrix()
    }
    if (floor == 2) {
        camera.position.set(-2000, 3000, 1500)
        camera.updateProjectionMatrix()
    }
    if (floor == 3) {
        camera.position.set(-3000, 3000, 1500)
        camera.updateProjectionMatrix()
    }
}

function changeCameraAngle (floor) {
    if (floor == 'ground') {
        controls.minDistance = 2500;
        controls.maxDistance = 4000;
        controls.minPolarAngle = 0;
        controls.maxPolarAngle =  Math.PI * 0.35;
    }
    if (floor == 1) {
        controls.minDistance = 3000;
        controls.maxDistance = 4500;
        controls.minPolarAngle = 0;
        controls.maxPolarAngle =  Math.PI * 0.35;
    }
    if (floor == 2) {
        controls.minDistance = 3500;
        controls.maxDistance = 5000;
        controls.minPolarAngle = 0;
        controls.maxPolarAngle =  Math.PI * 0.35;
    }
    if (floor == 3) {
        controls.minDistance = 3500;
        controls.maxDistance = 5000;
        controls.minPolarAngle = 0;
        controls.maxPolarAngle =  Math.PI * 0.3;
    }
}


function delete3DOBJ(objName){
    let selectedObject = scene.getObjectByName(objName);
    scene.remove( selectedObject );
    animate();
}

function deleteRooms(length){
    let count = 0;
    while (count <= length) {
        let selectedObject = scene.getObjectByName('room');
        scene.remove( selectedObject );
        animate();
        count++;
    }
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
