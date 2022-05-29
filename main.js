import './style.css';
import gsap from 'gsap';
import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';
import vertexShader from './shaders/vertex.glsl';
import fragmentShader from './shaders/fragment.glsl';
import atmospherevertexShader from './shaders/atmosphereVertex.glsl';
import atmospherefragmentShader from './shaders/atmosphereFragment.glsl';
import moonVertexShader from './shaders/moonVertex.glsl';
import moonFragmentShader from './shaders/moonFragment.glsl';
import sunVertexShader from './shaders/sunVertex.glsl';
import sunFragmentShader from './shaders/sunFragment.glsl';
import mercuryVertexShader from './shaders/mercuryVertex.glsl';
import mercuryFragmentShader from './shaders/mercuryFragment.glsl';
import venusVertexShader from './shaders/venusVertex.glsl';
import venusFragmentShader from './shaders/venusFragment.glsl';
import marsVertexShader from './shaders/marsVertex.glsl';
import marsFragmentShader from './shaders/marsFragment.glsl';
import jupiterVertexShader from './shaders/jupiterVertex.glsl';
import jupiterFragmentShader from './shaders/jupiterFragment.glsl';
import saturnVertexShader from './shaders/saturnVertex.glsl';
import saturnFragmentShader from './shaders/saturnFragment.glsl';
import saturnRingVertexShader from './shaders/saturnRingVertex.glsl';
import uranusVertexShader from './shaders/uranusVertex.glsl';
import uranusFragmentShader from './shaders/uranusFragment.glsl';
import neptuneVertexShader from './shaders/neptuneVertex.glsl';
import neptuneFragmentShader from './shaders/neptuneFragment.glsl';
import plutoVertexShader from './shaders/plutoVertex.glsl';
import plutoFragmentShader from './shaders/plutoFragment.glsl';
import { Float32BufferAttribute } from 'three';
import { RingBufferGeometry } from 'three';
import { Plane } from 'three';
import { DoubleSide } from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';






const scene = new THREE.Scene()
const camera = new THREE.
PerspectiveCamera(
  75,
  innerWidth / innerHeight,
  0.1,
  4000
)

const renderer = new THREE.WebGLRenderer({
  antialias: true
})
renderer.setSize(innerWidth, innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
document.body.appendChild(renderer.
  domElement);



const progressBar = document.getElementById('progress-bar')
const loadingManager = new THREE.LoadingManager();
const progressBarContainer = document.
querySelector('.progress-bar-container');
loadingManager.onProgress = function (url, loaded, total) {
  progressBar.value = (loaded / total) * 100;
  };
loadingManager.onLoad = function() {
  progressBarContainer.style.display = 'none';
  };
  

  var model;
  const modelParent = new THREE.Object3D(loadingManager);
  var loader = new GLTFLoader(loadingManager);
  loader.load(
      'Assets/Planets/gassyBoy.gltf',
      ( gltf ) => {
          // called when the resource is loaded
          //model = gltf.scene;
          //model.position.set(300, 0, 0);
          //scene.add( model );
          //scene.add( modelParent );
          //modelParent.add( model );
      },
      //model = gltf.scene,
      ( xhr ) => {
          // called while loading is progressing
          console.log( `${( xhr.loaded / xhr.total * 100
           )}% loaded` );
      },
     
  );


  const controls = new OrbitControls(camera,
    renderer.domElement);

  const pointLight = new THREE.PointLight(0xffffff)
  pointLight.position.set(100, 10, 10)
  
  const ambientLight = new THREE.AmbientLight(0xffffff, 3);
  scene.add(pointLight, ambientLight)


 
//creating sun sphere geo + adding texturing
const sun = new THREE.Mesh(new
  THREE.SphereGeometry(40, 90, 90 ),
 new THREE.ShaderMaterial({
   vertexShader: sunVertexShader,
   fragmentShader: sunFragmentShader,
   uniforms: {
     sunTexture: {
       value: new THREE.TextureLoader().
       load('/images/sun.jpeg') 
     }
   }
   
}))
scene.add(sun)


//creating mercury sphere geo + adding texture
const mercuryParent = new THREE.Object3D();
const mercury = new THREE.Mesh(new
  THREE.SphereGeometry(2, 50, 50 ),
 new THREE.ShaderMaterial({
   vertexShader: mercuryVertexShader,
   fragmentShader: mercuryFragmentShader,
   uniforms: {
     mercuryTexture: {
       value: new THREE.TextureLoader().
       load('./images/mercury.jpeg') 
     }
   }
   
}))
scene.add(mercury)
scene.add(mercuryParent)
mercuryParent.add(mercury)


//creating venus sphere geo
const venusParent = new THREE.Object3D();
const venus = new THREE.Mesh(new
  THREE.SphereGeometry(4, 20, 20),
 new THREE.ShaderMaterial({
   vertexShader: venusVertexShader,
   fragmentShader: venusFragmentShader,
   uniforms: {
     venusTexture: {
       value: new THREE.TextureLoader().
       load('./images/venus.jpeg') 
     }
   }
   
}))
scene.add(venus)
scene.add(venusParent)
venusParent.add(venus)



  //creating Earth sphere geo
const earthParent = new THREE.Object3D();
const sphere_Earth = new THREE.Mesh(new
   THREE.SphereGeometry(5, 50, 50 ),
  new THREE.ShaderMaterial({
    vertexShader,
    fragmentShader,
    uniforms: {
      globeTexture: {
        value: new THREE.TextureLoader().
        load('./images/earth_UV.jpeg') 
      }
    }
    
}))
scene.add(sphere_Earth)
scene.add(earthParent)
earthParent.add(sphere_Earth)


//creating moon sphere geo
const moon = new THREE.Mesh(new
  THREE.SphereGeometry(1, 10, 10 ),
 new THREE.ShaderMaterial({
  vertexShader: moonVertexShader,
  fragmentShader: moonFragmentShader,
   uniforms: {
     moonTexture: {
       value: new THREE.TextureLoader().
       load('./images/moon.jpeg') 
     } 
   }
   
}))
// scene.add(moon)
// sphere_Earth.add(moon)



//creating mars sphere geo
const marsParent = new THREE.Object3D();
const mars = new THREE.Mesh(new
  THREE.SphereGeometry(3.5, 20, 20 ),
 new THREE.ShaderMaterial({
   vertexShader: marsVertexShader,
   fragmentShader: marsFragmentShader,
   uniforms: {
     marsTexture: {
       value: new THREE.TextureLoader().
       load('./images/mars.jpeg') 
     }
   }
   
}))
scene.add(mars)
scene.add(marsParent)
marsParent.add(mars)


//creating jupiter sphere geo + adding texture
const jupiterParent = new THREE.Object3D();
const jupiter = new THREE.Mesh(new
  THREE.SphereGeometry(15, 50, 50 ),
 new THREE.ShaderMaterial({
   vertexShader: jupiterVertexShader,
   fragmentShader: jupiterFragmentShader,
   uniforms: {
     jupiterTexture: {
       value: new THREE.TextureLoader().
       load('./images/jupiter.jpeg') 
     }
   }
   
}))
scene.add(jupiter)
scene.add(jupiterParent)
jupiterParent.add(jupiter)




// const saturnParent = new THREE.Object3D();
// const saturn = new THREE.Mesh(
//   new THREE.SphereGeometry(11, 50, 50 ),
//   new THREE.MeshStandardMaterial({
//     map: saturnTexture
//   })
// );
// scene.add(saturn);
// scene.add(saturnParent)
// saturnParent.add(saturn)





const saturnTexture = new THREE.TextureLoader().
load('images/saturn.jpeg');
const saturnParent = new THREE.Object3D();
const saturn = new THREE.Mesh(
  new THREE.SphereGeometry(11, 50, 50 ),
  new THREE.MeshStandardMaterial({
    map: saturnTexture
  })
);
scene.add(saturn);
scene.add(saturnParent)
saturnParent.add(saturn)


const saturnRingTexture = new THREE.TextureLoader().
load('images/saturnRing.jpeg');
const saturnRing = new THREE.Mesh(
  new THREE.RingGeometry(19, 30, 30 ).
  rotateX(-Math.PI * 0.5),
new THREE.MeshStandardMaterial({
  map: saturnRingTexture,
  side: DoubleSide,
  
    }
  ),
  
);

saturnParent.add(saturnRing);



//creating uranus sphere geo + adding texture
const uranusParent = new THREE.Object3D();
const uranus = new THREE.Mesh(new
  THREE.SphereGeometry(9, 50, 50 ).rotateX(Math.PI * 0.6),
 new THREE.ShaderMaterial({
   vertexShader: uranusVertexShader,
   fragmentShader: uranusFragmentShader,
   uniforms: {
     uranusTexture: {
       value: new THREE.TextureLoader().
       load('./images/uranus.jpeg') 
     }
   }
   
}))
scene.add(uranus)
scene.add(uranusParent)
uranusParent.add(uranus)

//creating neptune sphere geo + adding texture
const neptuneParent = new THREE.Object3D();
const neptune = new THREE.Mesh(new
  THREE.SphereGeometry(9, 20, 20 ),
 new THREE.ShaderMaterial({
   vertexShader: neptuneVertexShader,
   fragmentShader: neptuneFragmentShader,
   uniforms: {
     neptuneTexture: {
       value: new THREE.TextureLoader().
       load('./images/neptune.jpeg') 
     }
   }
   
}))
scene.add(neptune)
scene.add(neptuneParent)
neptuneParent.add(neptune)


// //creating neptune sphere geo + adding texture
const plutoTexture = new THREE.TextureLoader().
load('images/pluto.jpeg')
const plutoParent = new THREE.Object3D();
const pluto = new THREE.Mesh(new
  THREE.SphereGeometry(2, 20, 20 ),
 new THREE.MeshBasicMaterial({
  map: plutoTexture
   })
   )
scene.add(pluto)
scene.add(plutoParent)
plutoParent.add(pluto)



//create atmosphere
const atmosphereParent = new THREE.Object3D();
const atmosphere = new THREE.Mesh(new
  THREE.SphereGeometry(5, 50, 50 ),
 new THREE.ShaderMaterial({
   vertexShader: atmospherevertexShader,
   fragmentShader: atmospherefragmentShader,
   blending: THREE.AdditiveBlending,
   side: THREE.BackSide
  })
)
atmosphere.scale.set(1.1, 1.1, 1.1)
scene.add(atmosphere)
atmosphereParent.add(atmosphere)






//Object placements


mercury.position.x = 60
mercuryParent.position.x = 0
venus.position.x = 120
venusParent.position.x = 0
sphere_Earth.position.x = 200
earthParent.position.x = 0
atmosphere.position.x = 200
atmosphereParent.position.x = 0 
moon.position.x = 0
mars.position.x = 300
marsParent.position.x = 0
jupiter.position.x = 700
jupiterParent.position.x = 0
saturn.position.x = 950
saturnRing.position.x = 950
saturnParent.position.x = 0
uranus.position.x = 1150
uranusParent.position.x = 0
neptune.position.x = 1400
neptuneParent.position.x = 0
pluto.position.x = 1700
plutoParent.position.x = 0






camera.position.z = 400



/**
 * Below are the background elements.
 * Stars, plus a temp background image.
 */

// //temp space background
// const spaceTexture = new THREE.TextureLoader().
//load('images/stars.jpeg')
// scene.background = spaceTexture;

// const light = new THREE.HemisphereLight
//( 0xffffbb, 0x080820, 5 );
// scene.add( light );

const directionalLight = new THREE.DirectionalLight
( 0xffffff, 5,)
scene.add( directionalLight );

//creating stars
const starVertices = []
for (let i = 0; i < 10000; i++){
  const x = (Math.random() - 0.5) * 10000
  const y = (Math.random() - 0.5) * 10000
  const z = -Math.random()* 10000
  starVertices.push(x, y, z)
}
const starGeometry = new THREE.BufferGeometry(2, 50, 50)
const starMaterial = new THREE.PointsMaterial({
  color: 0xfff504,
  
})

//placing stars
const stars = new THREE.Points(starGeometry, starMaterial)
starGeometry.setAttribute('position', 
new THREE.Float32BufferAttribute(
  starVertices, 3))
  scene.add(stars)


//creating stars
const starVertices2 = []
for (let i = 0; i < 10000; i++){
  const x = (Math.random() - 0.5) * 10000
  const y = (Math.random() - 0.5) * 10000
  const z = -Math.random() * -10000
  starVertices2.push(x, y, z)
}
const starGeometry2 = new THREE.BufferGeometry(2, 50, 50)
const starMaterial2 = new THREE.PointsMaterial({
  color: 0x00ffff,
 
})

//placing stars
const stars2 = new THREE.Points(starGeometry2, starMaterial2)
starGeometry2.setAttribute('position', 
new THREE.Float32BufferAttribute(
  starVertices2, 3))
  scene.add(stars2)

// //////////////////////////////
  const starVertices3 = []
  for (let i = 0; i < 10000; i++){
    const x = (Math.random() - 0.5) * 10000
    const y = (Math.random() - 0.5) * 10000
    const z = -Math.random()* 10000
    starVertices3.push(x, y, z)
  }
  const starGeometry3 = new THREE.BufferGeometry(4, 50, 50)
  const starMaterial3 = new THREE.PointsMaterial({
    color: 0xffffff,
    
  })
  
  //placing stars
  const stars3 = new THREE.Points(starGeometry3, starMaterial3)
  starGeometry3.setAttribute('position', 
  new THREE.Float32BufferAttribute(
    starVertices3, 3))
    scene.add(stars3)
  
  
  //creating stars
  const starVertices4 = []
  for (let i = 0; i < 10000; i++){
    const x = (Math.random() - 0.5) * 10000
    const y = (Math.random() - 0.5) * 10000
    const z = -Math.random() * 10000
    starVertices2.push(x, y, z)
  }
  const starGeometry4 = new THREE.BufferGeometry(2, 50, 50)
  const starMaterial4 = new THREE.PointsMaterial({
    color: 0x00ffff,
   
  })
  
  //placing stars
  const stars4 = new THREE.Points(starGeometry4, starMaterial4)
  starGeometry4.setAttribute('position', 
  new THREE.Float32BufferAttribute(
    starVertices4, 3))
    scene.add(stars4)





  

//animation loop function
function animate() {
  requestAnimationFrame(animate)
  renderer.render(scene, camera)


//   if (model){
//     model.rotateY(-0.01);
//     //model.rotateZ(0.01);
//     modelParent.rotateY(-0.01);
    
// }
  //gassyBoy.rotation.y += -0.001 / 2
  
   sun.rotation.y += -0.0034676436 / 2
   mercury.rotation.y += -0.007 / 2
   mercuryParent.rotation.y += -0.01 / 2
  venus.rotation.y += -0.03 / 2
  venusParent.rotation.y += -0.0071523452345243 / 2
  sphere_Earth.rotation.y += -0.0027 / 2 
  earthParent.rotation.y += -0.00534532545246274563 /2
  //moon.rotateY(0.003);
  mars.rotation.y += -0.003 / 2
  marsParent.rotation.y += -0.00373456373456342345 / 2
  jupiter.rotation.y += -0.009 / 2
  jupiterParent.rotation.y += -0.0023745673474563 / 2
  saturn.rotation.y += -0.005745 / 2
  //saturnRing.rotateY(10)
  saturnParent.rotation.y += -0.001642347534824254734583054873 / 2
  uranus.rotation.y += -0.003
  uranusParent.rotation.y += -0.00166661443365476435437453 / 2
  neptune.rotation.y += -0.007
  neptuneParent.rotation.y += -0.00182543456734563756725 / 2
  pluto.rotation.y += -0.001
  plutoParent.rotation.y += -0.0016032957349583947 / 2
 
  controls.update();
}

animate()




