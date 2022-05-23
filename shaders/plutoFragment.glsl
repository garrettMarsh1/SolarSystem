uniform sampler2D plutoTexture;
varying vec2 vertexUV;
varying vec3 vertexNormal; 

void main() {
  float intensity = 1.05 - dot(vertexNormal,
vec3(0.3725, 0.4039, 0.4118));
     vec3 pluto = vec3(0.6157, 0.6275, 0.6392)
      * pow(intensity, 1.5);


    gl_FragColor = vec4(pluto + texture2D(plutoTexture,
     vertexUV).xyz, 1.0);

}