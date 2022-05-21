uniform sampler2D neptuneTexture;
varying vec2 vertexUV;
varying vec3 vertexNormal; 

void main() {
  float intensity = 1.05 - dot(vertexNormal,
vec3(0.2353, 0.2353, 0.6588));
     vec3 neptune = vec3(0.5412, 0.6275, 0.7412)
      * pow(intensity, 1.5);


    gl_FragColor = vec4(neptune + texture2D(neptuneTexture,
     vertexUV).xyz, 1.0);

}