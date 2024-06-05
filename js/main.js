import * as THREE from "./three.js";

// Crear una escena
const scene = new THREE.Scene();
// Crear una cámara
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setAnimationLoop(animate);
// Crea el doc html para visualizar la escena 3D
document.body.appendChild(renderer.domElement);

// Dibuja un cuboide
const geometry = new THREE.BoxGeometry(1, 1, 1);

const material = new THREE.MeshBasicMaterial({ color: 0x2596be });

// Junta todas las mallas y le crea un material y geometría
const cube = new THREE.Mesh(geometry, material);

// Le añadimos el cubo a nuestra escenas
scene.add(cube);

// Posición en el eje z de la cámara desde el origen de nuestro cubo
camera.position.z = 5;

//
function animate() {
  // eje horizontal
  cube.rotation.x += 0.01;
  // eje vertical
  cube.rotation.y += 0.01;
  cube.rotation.y += 0.01;

  renderer.render(scene, camera);
}
