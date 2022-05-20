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
import saturnRingFragmentShader from './shaders/saturnRingFragment.glsl';
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





const scene = new THREE.Scene()
const camera = new THREE.
PerspectiveCamera(
  75,
  innerWidth / innerHeight,
  0.1,
  1000
)

const renderer = new THREE.WebGLRenderer({
  antialias: true
})
renderer.setSize(innerWidth, innerHeight)
renderer.setPixelRatio(window.devicePixelRatio)
document.body.appendChild(renderer.
  domElement)

  const controls = new OrbitControls(camera, renderer.domElement);
  OrbitControls.enableDamping = true
  OrbitControls.minDistance = 5
  OrbitControls.maxDistance = 15
  OrbitControls.enablePan = false
  OrbitControls.maxPolarAngle = Math.PI /2 - 0.05
  OrbitControls.update()



//creating sun sphere geo + adding texturing
const sun = new THREE.Mesh(new
  THREE.SphereGeometry(40, 90, 90 ),
 new THREE.ShaderMaterial({
   vertexShader: sunVertexShader,
   fragmentShader: sunFragmentShader,
   uniforms: {
     sunTexture: {
       value: new THREE.TextureLoader().load('/images/sun.jpeg') 
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
       value: new THREE.TextureLoader().load('./images/mercury.jpeg') 
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
       value: new THREE.TextureLoader().load('./images/venus.jpeg') 
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
        value: new THREE.TextureLoader().load('./images/earth_UV.jpeg') 
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
       value: new THREE.TextureLoader().load('./images/moon.jpeg') 
     } 
   }
   
}))
scene.add(moon)
sphere_Earth.add(moon)



//creating mars sphere geo
const marsParent = new THREE.Object3D();
const mars = new THREE.Mesh(new
  THREE.SphereGeometry(3.5, 20, 20 ),
 new THREE.ShaderMaterial({
   vertexShader: marsVertexShader,
   fragmentShader: marsFragmentShader,
   uniforms: {
     marsTexture: {
       value: new THREE.TextureLoader().load('./images/mars.jpeg') 
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
       value: new THREE.TextureLoader().load('./images/jupiter.jpeg') 
     }
   }
   
}))
scene.add(jupiter)
scene.add(jupiterParent)
jupiterParent.add(jupiter)






//creating saturn sphere geo + adding texture
const saturnParent = new THREE.Object3D();
const saturn = new THREE.Mesh(new
  THREE.SphereGeometry(12, 50, 50 ),
 new THREE.ShaderMaterial({
   vertexShader: saturnVertexShader,
   fragmentShader: saturnFragmentShader,
   uniforms: {
     saturnTexture: {
       value: new THREE.TextureLoader().load('./images/saturn.jpeg') 
     }
   }
   
}))
scene.add(saturn)
scene.add(saturnParent)
saturnParent.add(saturn)


//creating saturn ring geo + adding texture

const saturnRing = new THREE.Mesh(new
  THREE.RingGeometry(19, 30, 32 ),
 new THREE.ShaderMaterial({
   vertexShader: saturnRingVertexShader,
   fragmentShader: saturnRingFragmentShader,
   uniforms: {
     saturnTexture: {
       value: new THREE.TextureLoader().load('images/saturnRing.jpeg'),
       side: THREE.DoubleSide
       
     }
   }
}))


saturnParent.add(saturnRing);



//creating uranus sphere geo + adding texture
const uranusParent = new THREE.Object3D();
const uranus = new THREE.Mesh(new
  THREE.SphereGeometry(9, 50, 50 ),
 new THREE.ShaderMaterial({
   vertexShader: uranusVertexShader,
   fragmentShader: uranusFragmentShader,
   uniforms: {
     uranusTexture: {
       value: new THREE.TextureLoader().load('./images/uranus.jpeg') 
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
       value: new THREE.TextureLoader().load('./images/neptune.jpeg') 
     }
   }
   
}))
scene.add(neptune)
scene.add(neptuneParent)
neptuneParent.add(neptune)


// //creating neptune sphere geo + adding texture
const plutoParent = new THREE.Object3D();
const pluto = new THREE.Mesh(new
  THREE.SphereGeometry(2, 20, 20 ),
 new THREE.ShaderMaterial({
   vertexShader: plutoVertexShader,
   fragmentShader: plutoFragmentShader,
   uniforms: {
     plutoTexutre: {
       value: new THREE.TextureLoader().load('./images/pluto.jpeg') 
     }
   }
   
}))
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

sun.position.x = 0
mercury.position.x = 60
mercuryParent.position.x = 0
venus.position.x = 90
venusParent.position.x = 0
sphere_Earth.position.x = 110
earthParent.position.x = 0
atmosphere.position.x = 110
atmosphereParent.position.x = 0 
moon.position.x = 0
mars.position.x = 130
marsParent.position.x = 0
jupiter.position.x = 200
jupiterParent.position.x = 0
saturn.position.x = 270
saturnRing.position.x = 270
saturnParent.position.x = 0
uranus.position.x = 310
uranusParent.position.x = 0
neptune.position.x = 340
neptuneParent.position.x = 0
pluto.position.x = 370
plutoParent.position.x = 0






camera.position.z = 100



/**
 * Below are the background elements.
 * Stars, plus a temp background image.
 */

//temp space background
const spaceTexture = new THREE.TextureLoader().load('images/space.jpeg')
scene.background = spaceTexture;

//creating stars
const starVertices = []
for (let i = 0; i < 10000; i++){
  const x = (Math.random() - 0.5) * 2000
  const y = (Math.random() - 0.5) * 2000
  const z = -Math.random()* 1000
  starVertices.push(x, y, z)
}
const starGeometry = new THREE.BufferGeometry()
const starMaterial = new THREE.PointsMaterial({
  color: 0xffffff
})

//placing stars
const stars = new THREE.Points(starGeometry, starMaterial)
starGeometry.setAttribute('position', 
new THREE.Float32BufferAttribute(
  starVertices, 3))
  scene.add(stars)







//animation loop function
function animate() {
  requestAnimationFrame(animate)
  renderer.render(scene, camera)

  sun.rotation.y += 0.005
  mercury.rotation.y += 0.01
  mercuryParent.rotation.y += 0.01
  venus.rotation.y += 0.06
  venusParent.rotation.y += 0.009
  sphere_Earth.rotation.y += 0.0027
  earthParent.rotation.y += 0.008
  moon.rotateY(0.003);
  mars.rotation.y += 0.003
  marsParent.rotation.y += 0.007
  jupiter.rotation.y += 0.009
  jupiterParent.rotation.y += 0.01
  saturn.rotation.y += 0.005745
  saturnParent.rotation.y += 0.007
  uranus.rotation.y += 0.003
  uranusParent.rotation.y += 0.0015
  neptune.rotation.y += 0.007
  neptuneParent.rotation.y += 0.0013
  pluto.rotation.y += 0.004
  plutoParent.rotation.y += 0.001
 
  controls.update();
}

animate()




