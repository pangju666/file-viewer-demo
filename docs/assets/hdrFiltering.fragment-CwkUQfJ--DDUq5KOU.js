import{K as e}from"./index-D0uYf7q_.js";import"./helperFunctions-B6l7xjR4-yj_HLqfG.js";import"./hdrFilteringFunctions-B3vQOwiv-CrG4XGu-.js";import"./pbrBRDFFunctions-Cb792Mwu-BwsqqJWp.js";const r="hdrFilteringPixelShader",n=`#include<helperFunctions>
#include<importanceSampling>
#include<pbrBRDFFunctions>
#include<hdrFilteringFunctions>
uniform alphaG: f32;var inputTextureSampler: sampler;var inputTexture: texture_cube<f32>;uniform vFilteringInfo: vec2f;uniform hdrScale: f32;varying direction: vec3f;@fragment
fn main(input: FragmentInputs)->FragmentOutputs {var color: vec3f=radiance(uniforms.alphaG,inputTexture,inputTextureSampler,input.direction,uniforms.vFilteringInfo);fragmentOutputs.color= vec4f(color*uniforms.hdrScale,1.0);}`;e.ShadersStoreWGSL[r]||(e.ShadersStoreWGSL[r]=n);const o={name:r,shader:n};export{o as hdrFilteringPixelShaderWGSL};
