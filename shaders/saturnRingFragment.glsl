uniform sampler2D saturnRingTexture;
varying vec2 vertexUV;
varying vec3 vertexNormal; 

void main() {
  float intensity = 1.05 - dot(vertexNormal,
vec3(0.7569, 0.7569, 0.8588));
     vec3 saturnRing = vec3(0.5412, 0.6275, 0.7412)
      * pow(intensity, 1.5);


    gl_FragColor = vec4(saturnRing + texture2D(saturnRingTexture,
     vertexUV).xyz, 1.0);

}