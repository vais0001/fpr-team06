import './bootstrap';

import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'
import Stats from 'three/examples/jsm/libs/stats.module'

const scene = new THREE.Scene()
scene.add(new THREE.AxesHelper(5))

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
        object.name = 'LoadedFloor'
    },
    (xhr) => {
        console.log((xhr.loaded / xhr.total) * 100 + '% loaded')
    },
    (error) => {
        console.log(error)
    }
)

const map = new THREE.TextureLoader().load( 'images/temperature-green.png' );
const material = new THREE.SpriteMaterial( { map: map, color: 0xffffff } );

const sprite = new THREE.Sprite( material );
sprite.scale.set(100, 200, 1)
sprite.position.set(-800, 1200, 800)
scene.add( sprite );

//to get the value of a button
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', loadModel, false);
});

function loadModel() {
    delete3DOBJ('LoadedFloor'); // deletes all loaded objects
    changeCameraDistance(this.value);
    changeCameraAngle(this.value);
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
