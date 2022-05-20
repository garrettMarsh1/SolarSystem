varying vec3 vertexNormal; 
void main() {
    float intensity = pow(0.5 - dot(vertexNormal, vec3(0, 0, 1.0)),
    2.0);
    gl_FragColor = vec4(0.1922, 0.5255, 0.9608, 1.0) * intensity;
}