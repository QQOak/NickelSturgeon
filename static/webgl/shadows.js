var demo = (function() {
	"use strict"

	var	scene = new THREE.Scene(),
		renderer = new THREE.WebGLRenderer(),
		light,
		camera,
		cube,
		plane;
		
	
	function initScene(){
		
		renderer.setSize( window.innerWidth, window.innerHeight );
		renderer.shadowMap.Enabled;
		document.getElementById("webgl-container").appendChild(renderer.domElement);
		
		
		// Camera
		camera = new THREE.PerspectiveCamera(
			35,
			window.innerWidth / window.innerHeight,
			1,
			1000
			);
		camera.position.z = 200;
		camera.position.y = 20;
		scene.add( camera );
		
		
		// Plane
		plane = new THREE.Mesh(
			new THREE.PlaneGeometry(200, 200),
			new THREE.MeshPhongMaterial({
				color: 0x0088aa,
				emissive: 0x0088aa,
				specular: 0x003344,
				shininess: 100,
				shading: THREE.FlatShading,
				side: THREE.DoubleSide
			})
		);
		plane.rotation.x = 90 * (Math.PI / 180);
		plane.position.y = -10;
		plane.name = "plane";
		plane.receiveShadow = true;
		scene.add( plane );
		
		
		// Lighting
		light = new THREE.DirectionalLight(new THREE.Color("#ff0000") );
		light.position.set(0, 50, 0);
		light.castShadow = true;
		//scene.add(light); 
		
		var light2 = new THREE.DirectionalLight(new THREE.Color("#00ff00") );
		light2.position.set(50, 0, 0);
		light2.castShadow = true;
		//scene.add(light2); 

		var light3 = new THREE.DirectionalLight(new THREE.Color("#0000ff") );
		light3.position.set(0, 0, 50);
		light3.castShadow = true;
		//scene.add(light3);
				
		cube = new THREE.Mesh(new THREE.BoxGeometry(20, 20, 20),
			new THREE.MeshLambertMaterial({
				color: '#ffffff'
		}));
		cube.position.y = 10;
		cube.name = "cube";
		cube.castShadow = true;
		scene.add( cube );

		
		render();
		
	};
	
	
	function render(){
		
		var rotationObject = cube;
		rotationObject.rotation.x += 0.01;
		rotationObject.rotation.y += 0.01;
		rotationObject.rotation.z += 0.01;
		
		renderer.render(scene, camera);
		requestAnimationFrame(render);
	};
	
	window.onload = initScene();
	
	return {
		scene: scene
	};
	
	

})();
