import{K as o}from"./index-C1DIXLxY.js";const r="oitBackBlendPixelShader",a=`precision highp float;uniform sampler2D uBackColor;void main() {glFragColor=texelFetch(uBackColor,ivec2(gl_FragCoord.xy),0);if (glFragColor.a==0.0) { 
discard;}}`;o.ShadersStore[r]||(o.ShadersStore[r]=a);
