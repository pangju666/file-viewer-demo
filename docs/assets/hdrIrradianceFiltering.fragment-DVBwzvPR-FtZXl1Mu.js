import{K as i}from"./index-C1DIXLxY.js";import"./helperFunctions-B2nzyfKQ-Oq-IgWCq.js";import"./hdrFilteringFunctions-BU9scQXL-BDTKKXCc.js";import"./pbrBRDFFunctions-Bg2CTZTy-CqgriNJ7.js";const e="hdrIrradianceFilteringPixelShader",r=`#include<helperFunctions>
#include<importanceSampling>
#include<pbrBRDFFunctions>
#include<hdrFilteringFunctions>
uniform samplerCube inputTexture;
#ifdef IBL_CDF_FILTERING
uniform sampler2D icdfTexture;
#endif
uniform vec2 vFilteringInfo;uniform float hdrScale;varying vec3 direction;void main() {vec3 color=irradiance(inputTexture,direction,vFilteringInfo,0.0,vec3(1.0),direction
#ifdef IBL_CDF_FILTERING
,icdfTexture
#endif
);gl_FragColor=vec4(color*hdrScale,1.0);}`;i.ShadersStore[e]||(i.ShadersStore[e]=r);const c={name:e,shader:r};export{c as hdrIrradianceFilteringPixelShader};
