scene = new THREE.Scene();
scene.fog = new THREE.FogExp2(0x11111f, 0.002);

camera = new THREE.PerspectiveCamera(60,window.innerWidth / window.innerHeight,1,1000);
camera.position.z = 1;
camera.rotation.x = 1.16;
camera.rotation.y = -0.12;
camera.rotation.z = 0.27;

renderer = new THREE.WebGLRenderer();
renderer.setClearColor(scene.fog.color);
renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild( renderer.domElement);

ambient = new THREE.AmbientLight(0x555555);
scene.add(ambient);

directionalLight = new THREE.DirectionalLight(0xffeedd);
directionalLight.position.set(0,0,1);
scene.add(directionalLight);

flash = new THREE.PointLight(0x062d89, 30, 500, 1.7);
flash.position.set(200,300, 100);
scene.add(flash);

rainCount=9500;
cloudParticles=[];
rainGeo = new THREE.Geometry();
for(let i=0; i<rainCount; i++) {
  rainDrop = new THREE.Vector3(
    Math.random()*400-200,
    Math.random()*500-250,
    Math.random()*400-200
  )
  rainDrop.velocity = {};
  rainDrop.velocity = 0;
  rainGeo.vertices.push(rainDrop);
}

rainMaterial = new THREE.PointsMaterial({
  color: 0xaaaaaa,
  size: 0.1,
  transparent: true
})

rain = new THREE.Points(rainGeo, rainMaterial);
scene.add(rain)

let loader = new THREE.TextureLoader();
loader.load("./assets/media/smoke.png", function(texture) {
  cloudGeo = new THREE.PlaneBufferGeometry(500,500);
  cloudMaterial = new THREE.MeshLambertMaterial({
    map:texture,
    transparent: true
  });

  for(let p=0; p<25; p++) {
    let cloud = new THREE.Mesh(cloudGeo, cloudMaterial);
    cloud.position.set(
      Math.random()*800 -400,
      500,
      Math.random()*500-500
    );
    cloud.rotation.x = 1.16;
    cloud.rotation.y = -0.12;
    cloud.rotation.z = Math.random()*2*Math.PI;
    cloud.material.opacity = 0.55;
    cloudParticles.push(cloud);
    scene.add(cloud);
  }
});

function render() {
  renderer.render(scene, camera);
  requestAnimationFrame(render);

  cloudParticles.forEach(p => {
    p.rotation.z -= 0.002;
  })

  rainGeo.vertices.forEach(p => {
    p.velocity -= 3*Math.random()*1;
    p.y += p.velocity;
    if(p.y < -100){
      p.y = 100;
      p.velocity = 0;
    }
  })
  rainGeo.verticesNeedUpdate = true;
  rain.rotation.y += 0.002;

  if(Math.random() > 0.96 || flash.power > 100) {
    if(flash.power<100) {
      flash.position.set(
        Math.random()*400,
        300+Math.random()*200,
        100
      );
    }
    flash.power = 50 + Math.random() * 500;
  }
}
function hideOverlay() {
    document.getElementById('overlay').classList.add('hide');
    render();
    const listener = new THREE.AudioListener();
		camera.add(listener);
		const sound = new THREE.Audio(listener);
		const audioLoader = new THREE.AudioLoader();
		audioLoader.load('./assets/media/rain.mp3', function(buffer) {
			sound.setBuffer(buffer);
			sound.setLoop(true);
			sound.setVolume(0.5);
			sound.play();
		});
}

window.addEventListener( 'resize', function () {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize( window.innerWidth, window.innerHeight );
}, false );