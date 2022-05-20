uniform sampler2D jupiterTexture;
varying vec2 vertexUV;
varying vec3 vertexNormal; 

void main() {
  float intensity = 1.05 - dot(vertexNormal,
vec3(0.4314, 0.4314, 0.4314));
     vec3 jupiter = vec3(0.3333, 0.3333, 0.3333)
      * pow(intensity, 1.5);


    gl_FragColor = vec4(jupiter + texture2D(jupiterTexture,
     vertexUV).xyz, 1.0);

}