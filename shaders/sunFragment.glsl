uniform sampler2D sunTexture;
varying vec2 vertexUV;
varying vec3 vertexNormal; 

void main() {
  float intensity = 1.05 - dot(vertexNormal,
vec3(0.7608, 0.4549, 0.0549));
     vec3 sun = vec3(0.8118, 0.4392, 0.0941)
      * pow(intensity, 1.5);


    gl_FragColor = vec4(sun + texture2D(sunTexture,
     vertexUV).xyz, 1.0);

}