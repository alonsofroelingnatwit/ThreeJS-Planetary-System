// import * as THREE from "three";
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

/*
 * Scene
 */
// const scene = new THREE.Scene();
// scene.background = new THREE.Color(0x000000);

/*
 * Camera
 */
// const camera = new THREE.PerspectiveCamera(
//   75,
//   window.innerWidth / window.innerHeight,
//   0.1,
//   1000
// );
// function moveCamera() {
//   const t = document.body.getBoundingClientRect().top;
//   camera.position.z = t * -0.01;
//   camera.position.x = t * -0.0002;
//   camera.position.y = t * -0.0002;
// }

// document.body.onscroll = moveCamera;

/*
 * Render
 */
// const renderer = new THREE.WebGLRenderer({
//   canvas: document.querySelector("#bg"),
// });

// renderer.setPixelRatio(window.devicePixelRatio);
// renderer.setSize(window.innerWidth, window.innerHeight);
// camera.position.setZ(30);
// renderer.render(scene, camera);

/*
 * Lights
 */
// const ambientLight = new THREE.AmbientLight(0xffffff);
// const pointLight = new THREE.PointLight(0xffffff);
// pointLight.position.set(5, 5, 5);
/*
 * Scene
 */
// scene.add(pointLight, ambientLight);

/*
 * Text
 */
// textMesh = new THREE.Mesh(tGeometry, [
//   new THREE.MeshPhongMaterial({ color: 0xff0000, flatShading: true }),
// ]);

// const controls = new OrbitControls(camera, renderer.domElement);

// function addStar() {
//   const geometry = new THREE.SphereGeometry(0.25, 24, 24);
//   const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
//   const star = new THREE.Mesh(geometry, material);

//   const [x, y, z] = Array(3)
//     .fill()
//     .map(() => THREE.MathUtils.randFloatSpread(200));

//   star.position.set(x, y, z);
//   scene.add(star);
// }

// function animate() {
//   requestAnimationFrame(animate);

//   controls.update();

//   renderer.render(scene, camera);
// }

// animate();
// Array(400).fill().forEach(addStar);
