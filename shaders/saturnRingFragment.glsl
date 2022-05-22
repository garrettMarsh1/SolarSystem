uniform sampler2D saturnRingTexture;
varying vec2 vertexUV;
varying vec3 vertexNormal; 

void main() {
  float intensity = 1.05 - dot(vertexNormal,
vec3(0.2196, 0.2196, 0.7922));
     vec3 saturnRing = vec3(0.5608, 0.5725, 0.3608)
      * pow(intensity, 1.5);


    gl_FragColor = vec4(saturnRing + texture2D(saturnRingTexture,
     vertexUV).xyz, 1.0);

}