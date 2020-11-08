const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(480, window.innerWidth / window.innerHeight);
const renderer = new THREE.WebGLRenderer();
const geometry = new THREE.CylinderGeometry(25, 25, 2, 40);

const texture1 = new THREE.TextureLoader().load('img/10p-head.png');
const texture2 = new THREE.TextureLoader().load('img/10p-tail.png');
const texture3 = new THREE.TextureLoader().load('img/edge.png');

const material1 = new THREE.MeshBasicMaterial({ map: texture1});
const material2 = new THREE.MeshBasicMaterial({ map: texture2});
const material3 = new THREE.MeshBasicMaterial({ map: texture3});
const materials = [material3, material2, material1];

const mesh = new THREE.Mesh(geometry, materials);

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

scene.add(mesh);

camera.position.set(0,0,50)

const animate = function () {
    requestAnimationFrame(animate);
    mesh.rotation.x += 0.01;

    renderer.render(scene, camera);
};

animate();
