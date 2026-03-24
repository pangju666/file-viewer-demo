import{K as e}from"./index-C1DIXLxY.js";import"./helperFunctions-B6l7xjR4-CjIG-iT8.js";import"./hdrFilteringFunctions-B3vQOwiv-C7tDpBl7.js";import"./pbrBRDFFunctions-Cb792Mwu-8DbqBE2F.js";const r="hdrFilteringPixelShader",n=`#include<helperFunctions>
#include<importanceSampling>
#include<pbrBRDFFunctions>
#include<hdrFilteringFunctions>
uniform alphaG: f32;var inputTextureSampler: sampler;var inputTexture: texture_cube<f32>;uniform vFilteringInfo: vec2f;uniform hdrScale: f32;varying direction: vec3f;@fragment
fn main(input: FragmentInputs)->FragmentOutputs {var color: vec3f=radiance(uniforms.alphaG,inputTexture,inputTextureSampler,input.direction,uniforms.vFilteringInfo);fragmentOutputs.color= vec4f(color*uniforms.hdrScale,1.0);}`;e.ShadersStoreWGSL[r]||(e.ShadersStoreWGSL[r]=n);const o={name:r,shader:n};export{o as hdrFilteringPixelShaderWGSL};
