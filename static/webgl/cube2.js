var example = (function(){
	"use strict";
	
	var	scene = new THREE.Scene(),
		renderer = new THREE.WebGLRenderer(),
		light,
		camera,
		box, manualGeometry;
		
		
		
	var material = new THREE.MeshPhongMaterial({
		color: 0xff00aa,
		emissive: 0x0088bb,
		specular: 0x002211,
		shininess: 10
	});
	
	
	function initScene(){
		
		renderer.setSize( window.innerWidth, window.innerHeight );
		document.getElementById("webgl-container").appendChild(renderer.domElement);
		
		
		
		//light = new THREE.AmbientLight(0xffffff);
		light = new THREE.PointLight({
				color: 0xff0000,
				intensity: 1,
				distance: 1
		});
		
		
		scene.add(light); 
		
		camera = new THREE.PerspectiveCamera(
			35,
			window.innerWidth / window.innerHeight,
			1,
			1000
			);
			
		camera.position.z = 100;
		scene.add( camera );
		
		
		// Add a box
		box = new THREE.Mesh(
			new THREE.BoxGeometry(20, 20, 20),
			material
		);
		box.name = "box";
		scene.add(box);
		
		
		render();
		
	};
	
	
	function render(){
		
		var rotationObject = box;
		//rotationObject.rotation.x += 0.1;
		rotationObject.rotation.y += 0.01;
		//rotationObject.rotation.z += 0.05;
		
		renderer.render(scene, camera);
		requestAnimationFrame(render);
	};
	
	window.onload = initScene();
	
	return {
		scene: scene
	};
	
})();
