import{K as o}from"./index-C1DIXLxY.js";const r="oitFinalSimpleBlendPixelShader",e=`precision highp float;uniform sampler2D uFrontColor;void main() {ivec2 fragCoord=ivec2(gl_FragCoord.xy);vec4 frontColor=texelFetch(uFrontColor,fragCoord,0);glFragColor=frontColor;}
`;o.ShadersStore[r]||(o.ShadersStore[r]=e);
