uniform sampler2D saturnTexture;
varying vec2 vertexUV;
varying vec3 vertexNormal; 

void main() {
  float intensity = 1.05 - dot(vertexNormal,
vec3(0.4314, 0.4314, 0.4314));
     vec3 saturn = vec3(0.4314, 0.4314, 0.4314)
      * pow(intensity, 1.5);


    gl_FragColor = vec4(saturn + texture2D(saturnTexture,
     vertexUV).xyz, 1.0);

}