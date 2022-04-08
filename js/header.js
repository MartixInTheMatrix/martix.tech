
const scene = new THREE.Scene({fog: true});
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer();
console.log(THREE)
renderer.setSize( window.innerWidth/2, window.innerHeight/2 );

document.getElementById('cworld').appendChild( renderer.domElement );
renderer.domElement.className = 'matrix'

const world = new THREE.Mesh(new THREE.SphereGeometry(2), mat(true))

//first ring
const circle1 = new THREE.Mesh(new THREE.RingGeometry(2.28, 2.3, 35), mat(false))
const circle1Clone = new THREE.Mesh(new THREE.RingGeometry(2.27, 2.3, 35, 8, 0, 0.4), new THREE.MeshBasicMaterial({ wireframe: false, color: '#000000'}))
const circle1Clone2 = new THREE.Mesh(new THREE.RingGeometry(2.27, 2.3, 35, 8, 0, 0.4), new THREE.MeshBasicMaterial({ wireframe: false, color: '#000000'}))

const circle2 = new THREE.Mesh(new THREE.RingGeometry(2.49, 2.5, 35), mat(false))
const circle2Clone = new THREE.Mesh(new THREE.RingGeometry(2.47, 2.5, 35, 8, 0, 0.4), new THREE.MeshBasicMaterial({ wireframe: false, color: '#000000'}))
const circle2Clone2 = new THREE.Mesh(new THREE.RingGeometry(2.47, 2.5, 35, 8, 0, 0.5), new THREE.MeshBasicMaterial({ wireframe: false, color: '#000000'}))

scene.add( world, circle1, circle2, circle1Clone, circle1Clone2, circle2Clone, circle2Clone2 );

camera.position.z = 5;

function animation() {
	requestAnimationFrame( animation );
	world.rotation.y += 0.003;
	circle1.rotation.z += 0.005;
	circle1Clone.rotation.z += 0.01;
	circle1Clone2.rotation.z += 0.025;
	circle2.rotation.z -= 0.010;
	circle2Clone.rotation.z += 0.005;
	circle2Clone2.rotation.z += 0.04;
	renderer.render( scene, camera );
};

animation();


function mat(wireframe){
	return new THREE.MeshBasicMaterial({ wireframe: wireframe, color: '#008F11'})
}

window.addEventListener( 'resize', onWindowResize, false );

function onWindowResize(){

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth/2, window.innerHeight/2 );

}