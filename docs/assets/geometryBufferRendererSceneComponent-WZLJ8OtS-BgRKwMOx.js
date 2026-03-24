const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/geometry.vertex-Drdqw5Qt-sFDfN2GK.js","assets/index-C1DIXLxY.js","assets/index-GmquEiWI.css","assets/bonesDeclaration-D1vSzym6-GveEh5fU.js","assets/instancesVertex-BL1w9kVE-BQuN41vh.js","assets/morphTargetsVertexDeclaration-B5Nw_ILv-oSNTMTtN.js","assets/instancesDeclaration-BTgECuSH-CbpcM6hO.js","assets/sceneUboDeclaration-CTXf_6oV-DqtnHAnJ.js","assets/clipPlaneVertex-CubA94Dj-ChSQeJsl.js","assets/morphTargetsVertex-DTTId_Ez-DAUiIbDV.js","assets/bonesVertex-CCfA-zLG-BnScAgde.js","assets/bakedVertexAnimation-sJ1Ta8E7-Blnt7GjA.js","assets/bumpVertex-BAZS96sf-DRENJmN2.js","assets/geometry.fragment-jYPfRAys-E8vJH7I5.js","assets/clipPlaneFragment-BbjyvtpD-CMdPXjn3.js","assets/bumpFragment-BHWRsv3d-BaTtDVVd.js","assets/samplerFragmentDeclaration-CmX6jXUj-BeVFicyo.js","assets/helperFunctions-B6l7xjR4-CjIG-iT8.js"])))=>i.map(i=>d[i]);
import{as as W,_ as Y,Z as _,ba as X,bw as q,bv as J,bx as Z,bH as Q,x as w,T as ee,by as te,E as N,b5 as ie,b8 as re,aC as A,K as v,b0 as se,aA as ne,aB as F}from"./index-C1DIXLxY.js";import"./clipPlaneFragment-Cy-2F7Yo-DXicw56a.js";import"./bumpFragment-CYeL8iFP-Bc7SKiC0.js";import"./helperFunctions-B2nzyfKQ-Oq-IgWCq.js";import"./bakedVertexAnimation-CQYAgYPV-DiSGPy44.js";import"./morphTargetsVertex-BXVP_bFj-Dlysjcg4.js";import"./instancesDeclaration-DTOapQS5-BMhNXaT1.js";import"./sceneUboDeclaration-D9SIaQVE-Bv4ERrDx.js";import"./clipPlaneVertex-WYRoVSO5-CFTSThZO.js";import"./bumpVertex-Cn1Y6SqM-CfGLcAsF.js";const G="mrtFragmentDeclaration",ae=`#if defined(WEBGL2) || defined(WEBGPU) || defined(NATIVE)
layout(location=0) out vec4 glFragData[{X}];
#endif
`;v.IncludesShadersStore[G]||(v.IncludesShadersStore[G]=ae);const D="geometryPixelShader",z=`#extension GL_EXT_draw_buffers : require
#if defined(BUMP) || !defined(NORMAL)
#extension GL_OES_standard_derivatives : enable
#endif
precision highp float;
#ifdef BUMP
varying mat4 vWorldView;varying vec3 vNormalW;
#else
varying vec3 vNormalV;
#endif
varying vec4 vViewPos;
#if defined(POSITION) || defined(BUMP)
varying vec3 vPositionW;
#endif
#if defined(VELOCITY) || defined(VELOCITY_LINEAR)
varying vec4 vCurrentPosition;varying vec4 vPreviousPosition;
#endif
#ifdef NEED_UV
varying vec2 vUV;
#endif
#ifdef BUMP
uniform vec3 vBumpInfos;uniform vec2 vTangentSpaceParams;
#endif
#if defined(REFLECTIVITY)
#if defined(ORMTEXTURE) || defined(SPECULARGLOSSINESSTEXTURE) || defined(REFLECTIVITYTEXTURE)
uniform sampler2D reflectivitySampler;varying vec2 vReflectivityUV;
#else
#ifdef METALLIC_TEXTURE
uniform sampler2D metallicSampler;varying vec2 vMetallicUV;
#endif
#ifdef ROUGHNESS_TEXTURE
uniform sampler2D roughnessSampler;varying vec2 vRoughnessUV;
#endif
#endif
#ifdef ALBEDOTEXTURE
varying vec2 vAlbedoUV;uniform sampler2D albedoSampler;
#endif
#ifdef REFLECTIVITYCOLOR
uniform vec3 reflectivityColor;
#endif
#ifdef ALBEDOCOLOR
uniform vec3 albedoColor;
#endif
#ifdef METALLIC
uniform float metallic;
#endif
#if defined(ROUGHNESS) || defined(GLOSSINESS)
uniform float glossiness;
#endif
#endif
#if defined(ALPHATEST) && defined(NEED_UV)
uniform sampler2D diffuseSampler;
#endif
#include<clipPlaneFragmentDeclaration>
#include<mrtFragmentDeclaration>[SCENE_MRT_COUNT]
#include<bumpFragmentMainFunctions>
#include<bumpFragmentFunctions>
#include<helperFunctions>
void main() {
#include<clipPlaneFragment>
#ifdef ALPHATEST
if (texture2D(diffuseSampler,vUV).a<0.4)
discard;
#endif
vec3 normalOutput;
#ifdef BUMP
vec3 normalW=normalize(vNormalW);
#include<bumpFragment>
#ifdef NORMAL_WORLDSPACE
normalOutput=normalW;
#else
normalOutput=normalize(vec3(vWorldView*vec4(normalW,0.0)));
#endif
#elif defined(HAS_NORMAL_ATTRIBUTE)
normalOutput=normalize(vNormalV);
#elif defined(POSITION)
normalOutput=normalize(-cross(dFdx(vPositionW),dFdy(vPositionW)));
#endif
#ifdef ENCODE_NORMAL
normalOutput=normalOutput*0.5+0.5;
#endif
#ifdef DEPTH
gl_FragData[DEPTH_INDEX]=vec4(vViewPos.z/vViewPos.w,0.0,0.0,1.0);
#endif
#ifdef NORMAL
gl_FragData[NORMAL_INDEX]=vec4(normalOutput,1.0);
#endif
#ifdef SCREENSPACE_DEPTH
gl_FragData[SCREENSPACE_DEPTH_INDEX]=vec4(gl_FragCoord.z,0.0,0.0,1.0);
#endif
#ifdef POSITION
gl_FragData[POSITION_INDEX]=vec4(vPositionW,1.0);
#endif
#ifdef VELOCITY
vec2 a=(vCurrentPosition.xy/vCurrentPosition.w)*0.5+0.5;vec2 b=(vPreviousPosition.xy/vPreviousPosition.w)*0.5+0.5;vec2 velocity=abs(a-b);velocity=vec2(pow(velocity.x,1.0/3.0),pow(velocity.y,1.0/3.0))*sign(a-b)*0.5+0.5;gl_FragData[VELOCITY_INDEX]=vec4(velocity,0.0,1.0);
#endif
#ifdef VELOCITY_LINEAR
vec2 velocity=vec2(0.5)*((vPreviousPosition.xy/vPreviousPosition.w) -
(vCurrentPosition.xy/vCurrentPosition.w));gl_FragData[VELOCITY_LINEAR_INDEX]=vec4(velocity,0.0,1.0);
#endif
#ifdef REFLECTIVITY
vec4 reflectivity=vec4(0.0,0.0,0.0,1.0);
#ifdef METALLICWORKFLOW
float metal=1.0;float roughness=1.0;
#ifdef ORMTEXTURE
metal*=texture2D(reflectivitySampler,vReflectivityUV).b;roughness*=texture2D(reflectivitySampler,vReflectivityUV).g;
#else
#ifdef METALLIC_TEXTURE
metal*=texture2D(metallicSampler,vMetallicUV).r;
#endif
#ifdef ROUGHNESS_TEXTURE
roughness*=texture2D(roughnessSampler,vRoughnessUV).r;
#endif
#endif
#ifdef METALLIC
metal*=metallic;
#endif
#ifdef ROUGHNESS
roughness*=(1.0-glossiness); 
#endif
reflectivity.a-=roughness;vec3 color=vec3(1.0);
#ifdef ALBEDOTEXTURE
color=texture2D(albedoSampler,vAlbedoUV).rgb;
#ifdef GAMMAALBEDO
color=toLinearSpace(color);
#endif
#endif
#ifdef ALBEDOCOLOR
color*=albedoColor.xyz;
#endif
reflectivity.rgb=mix(vec3(0.04),color,metal);
#else
#if defined(SPECULARGLOSSINESSTEXTURE) || defined(REFLECTIVITYTEXTURE)
reflectivity=texture2D(reflectivitySampler,vReflectivityUV);
#ifdef GAMMAREFLECTIVITYTEXTURE
reflectivity.rgb=toLinearSpace(reflectivity.rgb);
#endif
#else 
#ifdef REFLECTIVITYCOLOR
reflectivity.rgb=toLinearSpace(reflectivityColor.xyz);reflectivity.a=1.0;
#endif
#endif
#ifdef GLOSSINESSS
reflectivity.a*=glossiness; 
#endif
#endif
gl_FragData[REFLECTIVITY_INDEX]=reflectivity;
#endif
}
`;v.ShadersStore[D]||(v.ShadersStore[D]=z);const oe={name:D,shader:z},le=Object.freeze(Object.defineProperty({__proto__:null,geometryPixelShader:oe},Symbol.toStringTag,{value:"Module"})),H="geometryVertexDeclaration",de="uniform mat4 viewProjection;uniform mat4 view;";v.IncludesShadersStore[H]||(v.IncludesShadersStore[H]=de);const k="geometryUboDeclaration",ue=`#include<sceneUboDeclaration>
`;v.IncludesShadersStore[k]||(v.IncludesShadersStore[k]=ue);const B="geometryVertexShader",j=`precision highp float;
#include<bonesDeclaration>
#include<bakedVertexAnimationDeclaration>
#include<morphTargetsVertexGlobalDeclaration>
#include<morphTargetsVertexDeclaration>[0..maxSimultaneousMorphTargets]
#include<instancesDeclaration>
#include<__decl__geometryVertex>
#include<clipPlaneVertexDeclaration>
attribute vec3 position;
#ifdef HAS_NORMAL_ATTRIBUTE
attribute vec3 normal;
#endif
#ifdef NEED_UV
varying vec2 vUV;
#ifdef ALPHATEST
uniform mat4 diffuseMatrix;
#endif
#ifdef BUMP
uniform mat4 bumpMatrix;varying vec2 vBumpUV;
#endif
#ifdef REFLECTIVITY
uniform mat4 reflectivityMatrix;uniform mat4 albedoMatrix;varying vec2 vReflectivityUV;varying vec2 vAlbedoUV;
#endif
#ifdef METALLIC_TEXTURE
varying vec2 vMetallicUV;uniform mat4 metallicMatrix;
#endif
#ifdef ROUGHNESS_TEXTURE
varying vec2 vRoughnessUV;uniform mat4 roughnessMatrix;
#endif
#ifdef UV1
attribute vec2 uv;
#endif
#ifdef UV2
attribute vec2 uv2;
#endif
#endif
#ifdef BUMP
varying mat4 vWorldView;
#endif
#ifdef BUMP
varying vec3 vNormalW;
#else
varying vec3 vNormalV;
#endif
varying vec4 vViewPos;
#if defined(POSITION) || defined(BUMP)
varying vec3 vPositionW;
#endif
#if defined(VELOCITY) || defined(VELOCITY_LINEAR)
uniform mat4 previousViewProjection;varying vec4 vCurrentPosition;varying vec4 vPreviousPosition;
#endif
#define CUSTOM_VERTEX_DEFINITIONS
void main(void)
{vec3 positionUpdated=position;
#ifdef HAS_NORMAL_ATTRIBUTE
vec3 normalUpdated=normal;
#else
vec3 normalUpdated=vec3(0.0,0.0,0.0);
#endif
#ifdef UV1
vec2 uvUpdated=uv;
#endif
#ifdef UV2
vec2 uv2Updated=uv2;
#endif
#include<morphTargetsVertexGlobal>
#include<morphTargetsVertex>[0..maxSimultaneousMorphTargets]
#include<instancesVertex>
#if (defined(VELOCITY) || defined(VELOCITY_LINEAR)) && !defined(BONES_VELOCITY_ENABLED)
vCurrentPosition=viewProjection*finalWorld*vec4(positionUpdated,1.0);vPreviousPosition=previousViewProjection*finalPreviousWorld*vec4(positionUpdated,1.0);
#endif
#include<bonesVertex>
#include<bakedVertexAnimation>
vec4 worldPos=vec4(finalWorld*vec4(positionUpdated,1.0));
#ifdef BUMP
vWorldView=view*finalWorld;mat3 normalWorld=mat3(finalWorld);vNormalW=normalize(normalWorld*normalUpdated);
#else
#ifdef NORMAL_WORLDSPACE
vNormalV=normalize(vec3(finalWorld*vec4(normalUpdated,0.0)));
#else
vNormalV=normalize(vec3((view*finalWorld)*vec4(normalUpdated,0.0)));
#endif
#endif
vViewPos=view*worldPos;
#if (defined(VELOCITY) || defined(VELOCITY_LINEAR)) && defined(BONES_VELOCITY_ENABLED)
vCurrentPosition=viewProjection*finalWorld*vec4(positionUpdated,1.0);
#if NUM_BONE_INFLUENCERS>0
mat4 previousInfluence;previousInfluence=mPreviousBones[int(matricesIndices[0])]*matricesWeights[0];
#if NUM_BONE_INFLUENCERS>1
previousInfluence+=mPreviousBones[int(matricesIndices[1])]*matricesWeights[1];
#endif
#if NUM_BONE_INFLUENCERS>2
previousInfluence+=mPreviousBones[int(matricesIndices[2])]*matricesWeights[2];
#endif
#if NUM_BONE_INFLUENCERS>3
previousInfluence+=mPreviousBones[int(matricesIndices[3])]*matricesWeights[3];
#endif
#if NUM_BONE_INFLUENCERS>4
previousInfluence+=mPreviousBones[int(matricesIndicesExtra[0])]*matricesWeightsExtra[0];
#endif
#if NUM_BONE_INFLUENCERS>5
previousInfluence+=mPreviousBones[int(matricesIndicesExtra[1])]*matricesWeightsExtra[1];
#endif
#if NUM_BONE_INFLUENCERS>6
previousInfluence+=mPreviousBones[int(matricesIndicesExtra[2])]*matricesWeightsExtra[2];
#endif
#if NUM_BONE_INFLUENCERS>7
previousInfluence+=mPreviousBones[int(matricesIndicesExtra[3])]*matricesWeightsExtra[3];
#endif
vPreviousPosition=previousViewProjection*finalPreviousWorld*previousInfluence*vec4(positionUpdated,1.0);
#else
vPreviousPosition=previousViewProjection*finalPreviousWorld*vec4(positionUpdated,1.0);
#endif
#endif
#if defined(POSITION) || defined(BUMP)
vPositionW=worldPos.xyz/worldPos.w;
#endif
gl_Position=viewProjection*finalWorld*vec4(positionUpdated,1.0);
#include<clipPlaneVertex>
#ifdef NEED_UV
#ifdef UV1
#if defined(ALPHATEST) && defined(ALPHATEST_UV1)
vUV=vec2(diffuseMatrix*vec4(uvUpdated,1.0,0.0));
#else
vUV=uvUpdated;
#endif
#ifdef BUMP_UV1
vBumpUV=vec2(bumpMatrix*vec4(uvUpdated,1.0,0.0));
#endif
#ifdef REFLECTIVITY_UV1
vReflectivityUV=vec2(reflectivityMatrix*vec4(uvUpdated,1.0,0.0));
#else
#ifdef METALLIC_UV1
vMetallicUV=vec2(metallicMatrix*vec4(uvUpdated,1.0,0.0));
#endif
#ifdef ROUGHNESS_UV1
vRoughnessUV=vec2(roughnessMatrix*vec4(uvUpdated,1.0,0.0));
#endif
#endif
#ifdef ALBEDO_UV1
vAlbedoUV=vec2(albedoMatrix*vec4(uvUpdated,1.0,0.0));
#endif
#endif
#ifdef UV2
#if defined(ALPHATEST) && defined(ALPHATEST_UV2)
vUV=vec2(diffuseMatrix*vec4(uv2Updated,1.0,0.0));
#else
vUV=uv2Updated;
#endif
#ifdef BUMP_UV2
vBumpUV=vec2(bumpMatrix*vec4(uv2Updated,1.0,0.0));
#endif
#ifdef REFLECTIVITY_UV2
vReflectivityUV=vec2(reflectivityMatrix*vec4(uv2Updated,1.0,0.0));
#else
#ifdef METALLIC_UV2
vMetallicUV=vec2(metallicMatrix*vec4(uv2Updated,1.0,0.0));
#endif
#ifdef ROUGHNESS_UV2
vRoughnessUV=vec2(roughnessMatrix*vec4(uv2Updated,1.0,0.0));
#endif
#endif
#ifdef ALBEDO_UV2
vAlbedoUV=vec2(albedoMatrix*vec4(uv2Updated,1.0,0.0));
#endif
#endif
#endif
#include<bumpVertex>
}
`;v.ShadersStore[B]||(v.ShadersStore[B]=j);const fe={name:B,shader:j},ce=Object.freeze(Object.defineProperty({__proto__:null,geometryVertexShader:fe},Symbol.toStringTag,{value:"Module"})),K=["world","mBones","viewProjection","diffuseMatrix","view","previousWorld","previousViewProjection","mPreviousBones","bumpMatrix","reflectivityMatrix","albedoMatrix","reflectivityColor","albedoColor","metallic","glossiness","vTangentSpaceParams","vBumpInfos","morphTargetInfluences","morphTargetCount","morphTargetTextureInfo","morphTargetTextureIndices","boneTextureWidth"];se(K);let m=class u{get normalsAreUnsigned(){return this._normalsAreUnsigned}_linkPrePassRenderer(t){this._linkedWithPrePass=!0,this._prePassRenderer=t,this._multiRenderTarget&&(this._multiRenderTarget.onClearObservable.clear(),this._multiRenderTarget.onClearObservable.add(()=>{}))}_unlinkPrePassRenderer(){this._linkedWithPrePass=!1,this._createRenderTargets()}_resetLayout(){this._enableDepth=!0,this._enableNormal=!0,this._enablePosition=!1,this._enableReflectivity=!1,this._enableVelocity=!1,this._enableVelocityLinear=!1,this._enableScreenspaceDepth=!1,this._attachmentsFromPrePass=[]}_forceTextureType(t,l){t===u.POSITION_TEXTURE_TYPE?(this._positionIndex=l,this._enablePosition=!0):t===u.VELOCITY_TEXTURE_TYPE?(this._velocityIndex=l,this._enableVelocity=!0):t===u.VELOCITY_LINEAR_TEXTURE_TYPE?(this._velocityLinearIndex=l,this._enableVelocityLinear=!0):t===u.REFLECTIVITY_TEXTURE_TYPE?(this._reflectivityIndex=l,this._enableReflectivity=!0):t===u.DEPTH_TEXTURE_TYPE?(this._depthIndex=l,this._enableDepth=!0):t===u.NORMAL_TEXTURE_TYPE?(this._normalIndex=l,this._enableNormal=!0):t===u.SCREENSPACE_DEPTH_TEXTURE_TYPE&&(this._screenspaceDepthIndex=l,this._enableScreenspaceDepth=!0)}_setAttachments(t){this._attachmentsFromPrePass=t}_linkInternalTexture(t){this._multiRenderTarget.setInternalTexture(t,0,!1)}get renderList(){return this._multiRenderTarget.renderList}set renderList(t){this._multiRenderTarget.renderList=t}get isSupported(){return this._multiRenderTarget.isSupported}getTextureIndex(t){switch(t){case u.POSITION_TEXTURE_TYPE:return this._positionIndex;case u.VELOCITY_TEXTURE_TYPE:return this._velocityIndex;case u.VELOCITY_LINEAR_TEXTURE_TYPE:return this._velocityLinearIndex;case u.REFLECTIVITY_TEXTURE_TYPE:return this._reflectivityIndex;case u.DEPTH_TEXTURE_TYPE:return this._depthIndex;case u.NORMAL_TEXTURE_TYPE:return this._normalIndex;case u.SCREENSPACE_DEPTH_TEXTURE_TYPE:return this._screenspaceDepthIndex;default:return-1}}get enableDepth(){return this._enableDepth}set enableDepth(t){this._enableDepth=t,this._linkedWithPrePass||(this.dispose(),this._createRenderTargets())}get enableNormal(){return this._enableNormal}set enableNormal(t){this._enableNormal=t,this._linkedWithPrePass||(this.dispose(),this._createRenderTargets())}get enablePosition(){return this._enablePosition}set enablePosition(t){this._enablePosition=t,this._linkedWithPrePass||(this.dispose(),this._createRenderTargets())}get enableVelocity(){return this._enableVelocity}set enableVelocity(t){this._enableVelocity=t,t||(this._previousTransformationMatrices={}),this._linkedWithPrePass||(this.dispose(),this._createRenderTargets()),this._scene.needsPreviousWorldMatrices=t}get enableVelocityLinear(){return this._enableVelocityLinear}set enableVelocityLinear(t){this._enableVelocityLinear=t,this._linkedWithPrePass||(this.dispose(),this._createRenderTargets())}get enableReflectivity(){return this._enableReflectivity}set enableReflectivity(t){this._enableReflectivity=t,this._linkedWithPrePass||(this.dispose(),this._createRenderTargets())}get enableScreenspaceDepth(){return this._enableScreenspaceDepth}set enableScreenspaceDepth(t){this._enableScreenspaceDepth=t,this._linkedWithPrePass||(this.dispose(),this._createRenderTargets())}get scene(){return this._scene}get ratio(){return typeof this._ratioOrDimensions=="object"?1:this._ratioOrDimensions}get shaderLanguage(){return this._shaderLanguage}constructor(t,l=1,i=15,e){this._previousTransformationMatrices={},this._previousBonesTransformationMatrices={},this.excludedSkinnedMeshesFromVelocity=[],this.renderTransparentMeshes=!0,this.generateNormalsInWorldSpace=!1,this._normalsAreUnsigned=!1,this._resizeObserver=null,this._enableDepth=!0,this._enableNormal=!0,this._enablePosition=!1,this._enableVelocity=!1,this._enableVelocityLinear=!1,this._enableReflectivity=!1,this._enableScreenspaceDepth=!1,this._clearColor=new W(0,0,0,0),this._clearDepthColor=new W(0,0,0,1),this._positionIndex=-1,this._velocityIndex=-1,this._velocityLinearIndex=-1,this._reflectivityIndex=-1,this._depthIndex=-1,this._normalIndex=-1,this._screenspaceDepthIndex=-1,this._linkedWithPrePass=!1,this.useSpecificClearForDepthTexture=!1,this._shaderLanguage=0,this._shadersLoaded=!1,this._scene=t,this._ratioOrDimensions=l,this._useUbo=t.getEngine().supportsUniformBuffers,this._depthFormat=i,this._textureTypesAndFormats=e||{},this._initShaderSourceAsync(),u._SceneComponentInitialization(this._scene),this._createRenderTargets()}async _initShaderSourceAsync(){this._scene.getEngine().isWebGPU&&!u.ForceGLSL?(this._shaderLanguage=1,await Promise.all([Y(()=>import("./geometry.vertex-Drdqw5Qt-sFDfN2GK.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12])),Y(()=>import("./geometry.fragment-jYPfRAys-E8vJH7I5.js"),__vite__mapDeps([13,1,2,14,15,16,17]))])):await Promise.all([Promise.resolve().then(()=>ce),Promise.resolve().then(()=>le)]),this._shadersLoaded=!0}isReady(t,l){if(!this._shadersLoaded)return!1;const i=t.getMaterial();if(i&&i.disableDepthWrite)return!1;const e=[],T=[_.PositionKind],c=t.getMesh();c.isVerticesDataPresent(_.NormalKind)&&(e.push("#define HAS_NORMAL_ATTRIBUTE"),T.push(_.NormalKind));let g=!1,x=!1;const U=!1;if(i){let f=!1;if(i.needAlphaTestingForMesh(c)&&i.getAlphaTestTexture()&&(e.push("#define ALPHATEST"),e.push(`#define ALPHATEST_UV${i.getAlphaTestTexture().coordinatesIndex+1}`),f=!0),(i.bumpTexture||i.normalTexture||i.geometryNormalTexture)&&X.BumpTextureEnabled){const n=i.bumpTexture||i.normalTexture||i.geometryNormalTexture;e.push("#define BUMP"),e.push(`#define BUMP_UV${n.coordinatesIndex+1}`),f=!0}if(this._enableReflectivity){let n=!1;if(i.getClassName()==="PBRMetallicRoughnessMaterial")i.metallicRoughnessTexture&&(e.push("#define ORMTEXTURE"),e.push(`#define REFLECTIVITY_UV${i.metallicRoughnessTexture.coordinatesIndex+1}`),e.push("#define METALLICWORKFLOW"),f=!0,n=!0),i.metallic!=null&&(e.push("#define METALLIC"),e.push("#define METALLICWORKFLOW"),n=!0),i.roughness!=null&&(e.push("#define ROUGHNESS"),e.push("#define METALLICWORKFLOW"),n=!0),n&&(i.baseTexture&&(e.push("#define ALBEDOTEXTURE"),e.push(`#define ALBEDO_UV${i.baseTexture.coordinatesIndex+1}`),i.baseTexture.gammaSpace&&e.push("#define GAMMAALBEDO"),f=!0),i.baseColor&&e.push("#define ALBEDOCOLOR"));else if(i.getClassName()==="PBRSpecularGlossinessMaterial")i.specularGlossinessTexture?(e.push("#define SPECULARGLOSSINESSTEXTURE"),e.push(`#define REFLECTIVITY_UV${i.specularGlossinessTexture.coordinatesIndex+1}`),f=!0,i.specularGlossinessTexture.gammaSpace&&e.push("#define GAMMAREFLECTIVITYTEXTURE")):i.specularColor&&e.push("#define REFLECTIVITYCOLOR"),i.glossiness!=null&&e.push("#define GLOSSINESS");else if(i.getClassName()==="PBRMaterial")i.metallicTexture&&(e.push("#define ORMTEXTURE"),e.push(`#define REFLECTIVITY_UV${i.metallicTexture.coordinatesIndex+1}`),e.push("#define METALLICWORKFLOW"),f=!0,n=!0),i.metallic!=null&&(e.push("#define METALLIC"),e.push("#define METALLICWORKFLOW"),n=!0),i.roughness!=null&&(e.push("#define ROUGHNESS"),e.push("#define METALLICWORKFLOW"),n=!0),n?(i.albedoTexture&&(e.push("#define ALBEDOTEXTURE"),e.push(`#define ALBEDO_UV${i.albedoTexture.coordinatesIndex+1}`),i.albedoTexture.gammaSpace&&e.push("#define GAMMAALBEDO"),f=!0),i.albedoColor&&e.push("#define ALBEDOCOLOR")):(i.reflectivityTexture?(e.push("#define SPECULARGLOSSINESSTEXTURE"),e.push(`#define REFLECTIVITY_UV${i.reflectivityTexture.coordinatesIndex+1}`),i.reflectivityTexture.gammaSpace&&e.push("#define GAMMAREFLECTIVITYTEXTURE"),f=!0):i.reflectivityColor&&e.push("#define REFLECTIVITYCOLOR"),i.microSurface!=null&&e.push("#define GLOSSINESS"));else if(i.getClassName()==="StandardMaterial")i.specularTexture&&(e.push("#define REFLECTIVITYTEXTURE"),e.push(`#define REFLECTIVITY_UV${i.specularTexture.coordinatesIndex+1}`),i.specularTexture.gammaSpace&&e.push("#define GAMMAREFLECTIVITYTEXTURE"),f=!0),i.specularColor&&e.push("#define REFLECTIVITYCOLOR");else if(i.getClassName()==="OpenPBRMaterial"){const a=i;e.push("#define METALLICWORKFLOW"),n=!0,e.push("#define METALLIC"),e.push("#define ROUGHNESS"),a._useRoughnessFromMetallicTextureGreen&&a.baseMetalnessTexture?(e.push("#define ORMTEXTURE"),e.push(`#define REFLECTIVITY_UV${a.baseMetalnessTexture.coordinatesIndex+1}`),f=!0):a.baseMetalnessTexture?(e.push("#define METALLIC_TEXTURE"),e.push(`#define METALLIC_UV${a.baseMetalnessTexture.coordinatesIndex+1}`),f=!0):a.specularRoughnessTexture&&(e.push("#define ROUGHNESS_TEXTURE"),e.push(`#define ROUGHNESS_UV${a.specularRoughnessTexture.coordinatesIndex+1}`),f=!0),a.baseColorTexture&&(e.push("#define ALBEDOTEXTURE"),e.push(`#define ALBEDO_UV${a.baseColorTexture.coordinatesIndex+1}`),a.baseColorTexture.gammaSpace&&e.push("#define GAMMAALBEDO"),f=!0),a.baseColor&&e.push("#define ALBEDOCOLOR")}}f&&(e.push("#define NEED_UV"),c.isVerticesDataPresent(_.UVKind)&&(T.push(_.UVKind),e.push("#define UV1"),g=!0),c.isVerticesDataPresent(_.UV2Kind)&&(T.push(_.UV2Kind),e.push("#define UV2"),x=!0))}this._enableDepth&&(e.push("#define DEPTH"),e.push("#define DEPTH_INDEX "+this._depthIndex)),this._enableNormal&&(e.push("#define NORMAL"),e.push("#define NORMAL_INDEX "+this._normalIndex)),this._enablePosition&&(e.push("#define POSITION"),e.push("#define POSITION_INDEX "+this._positionIndex)),this._enableVelocity&&(e.push("#define VELOCITY"),e.push("#define VELOCITY_INDEX "+this._velocityIndex),this.excludedSkinnedMeshesFromVelocity.indexOf(c)===-1&&e.push("#define BONES_VELOCITY_ENABLED")),this._enableVelocityLinear&&(e.push("#define VELOCITY_LINEAR"),e.push("#define VELOCITY_LINEAR_INDEX "+this._velocityLinearIndex),this.excludedSkinnedMeshesFromVelocity.indexOf(c)===-1&&e.push("#define BONES_VELOCITY_ENABLED")),this._enableReflectivity&&(e.push("#define REFLECTIVITY"),e.push("#define REFLECTIVITY_INDEX "+this._reflectivityIndex)),this._enableScreenspaceDepth&&this._screenspaceDepthIndex!==-1&&(e.push("#define SCREENSPACE_DEPTH_INDEX "+this._screenspaceDepthIndex),e.push("#define SCREENSPACE_DEPTH")),this.generateNormalsInWorldSpace&&e.push("#define NORMAL_WORLDSPACE"),this._normalsAreUnsigned&&e.push("#define ENCODE_NORMAL"),c.useBones&&c.computeBonesUsingShaders&&c.skeleton?(T.push(_.MatricesIndicesKind),T.push(_.MatricesWeightsKind),c.numBoneInfluencers>4&&(T.push(_.MatricesIndicesExtraKind),T.push(_.MatricesWeightsExtraKind)),e.push("#define NUM_BONE_INFLUENCERS "+c.numBoneInfluencers),e.push("#define BONETEXTURE "+c.skeleton.isUsingTextureForMatrices),e.push("#define BonesPerMesh "+(c.skeleton.bones.length+1))):(e.push("#define NUM_BONE_INFLUENCERS 0"),e.push("#define BONETEXTURE false"),e.push("#define BonesPerMesh 0"));const O=c.morphTargetManager?q(c.morphTargetManager,e,T,c,!0,!0,!1,g,x,U):0;l&&(e.push("#define INSTANCES"),J(T,this._enableVelocity||this._enableVelocityLinear),t.getRenderingMesh().hasThinInstances&&e.push("#define THIN_INSTANCES")),this._linkedWithPrePass?e.push("#define SCENE_MRT_COUNT "+this._attachmentsFromPrePass.length):e.push("#define SCENE_MRT_COUNT "+this._multiRenderTarget.textures.length),Z(i,this._scene,e);const L=this._scene.getEngine(),I=t._getDrawWrapper(void 0,!0),y=I.defines,P=e.join(`
`);return y!==P&&I.setEffect(L.createEffect("geometry",{attributes:T,uniformsNames:K,samplers:["diffuseSampler","bumpSampler","reflectivitySampler","albedoSampler","morphTargets","boneSampler"],defines:P,onCompiled:null,fallbacks:null,onError:null,uniformBuffersNames:["Scene"],indexParameters:{buffersCount:this._multiRenderTarget.textures.length-1,maxSimultaneousMorphTargets:O},shaderLanguage:this.shaderLanguage},L),P),I.effect.isReady()}getGBuffer(){return this._multiRenderTarget}get samples(){return this._multiRenderTarget.samples}set samples(t){this._multiRenderTarget.samples=t}dispose(){this._resizeObserver&&(this._scene.getEngine().onResizeObservable.remove(this._resizeObserver),this._resizeObserver=null),this._multiRenderTarget?.renderTarget&&this.scene.getEngine()._currentRenderTarget===this._multiRenderTarget.renderTarget&&this.scene.getEngine().unBindFramebuffer(this._multiRenderTarget?.renderTarget),this.getGBuffer().dispose()}_assignRenderTargetIndices(){const t=[],l=[];let i=0;return this._enableDepth&&(this._depthIndex=i,i++,t.push("gBuffer_Depth"),l.push(this._textureTypesAndFormats[u.DEPTH_TEXTURE_TYPE])),this._enableNormal&&(this._normalIndex=i,i++,t.push("gBuffer_Normal"),l.push(this._textureTypesAndFormats[u.NORMAL_TEXTURE_TYPE])),this._enablePosition&&(this._positionIndex=i,i++,t.push("gBuffer_Position"),l.push(this._textureTypesAndFormats[u.POSITION_TEXTURE_TYPE])),this._enableVelocity&&(this._velocityIndex=i,i++,t.push("gBuffer_Velocity"),l.push(this._textureTypesAndFormats[u.VELOCITY_TEXTURE_TYPE])),this._enableVelocityLinear&&(this._velocityLinearIndex=i,i++,t.push("gBuffer_VelocityLinear"),l.push(this._textureTypesAndFormats[u.VELOCITY_LINEAR_TEXTURE_TYPE])),this._enableReflectivity&&(this._reflectivityIndex=i,i++,t.push("gBuffer_Reflectivity"),l.push(this._textureTypesAndFormats[u.REFLECTIVITY_TEXTURE_TYPE])),this._enableScreenspaceDepth&&(this._screenspaceDepthIndex=i,i++,t.push("gBuffer_ScreenspaceDepth"),l.push(this._textureTypesAndFormats[u.SCREENSPACE_DEPTH_TEXTURE_TYPE])),[i,t,l]}_createRenderTargets(){const t=this._scene.getEngine(),[l,i,e]=this._assignRenderTargetIndices();let T=0;t._caps.textureFloat&&t._caps.textureFloatLinearFiltering?T=1:t._caps.textureHalfFloat&&t._caps.textureHalfFloatLinearFiltering&&(T=2);const c=this._ratioOrDimensions.width!==void 0?this._ratioOrDimensions:{width:t.getRenderWidth()*this._ratioOrDimensions,height:t.getRenderHeight()*this._ratioOrDimensions},g=[],x=[];for(const n of e)n?(g.push(n.textureType),x.push(n.textureFormat)):(g.push(T),x.push(5));if(this._normalsAreUnsigned=g[u.NORMAL_TEXTURE_TYPE]===11||g[u.NORMAL_TEXTURE_TYPE]===13,this._multiRenderTarget=new Q("gBuffer",c,l,this._scene,{generateMipMaps:!1,generateDepthTexture:!0,types:g,formats:x,depthTextureFormat:this._depthFormat},i.concat("gBuffer_DepthBuffer")),!this.isSupported)return;this._multiRenderTarget.wrapU=w.CLAMP_ADDRESSMODE,this._multiRenderTarget.wrapV=w.CLAMP_ADDRESSMODE,this._multiRenderTarget.refreshRate=1,this._multiRenderTarget.renderParticles=!1,this._multiRenderTarget.renderList=null;const U=[!0],O=[!1],L=[!0];for(let n=1;n<l;++n)U.push(!0),L.push(!1),O.push(!0);const I=t.buildTextureLayout(U),y=t.buildTextureLayout(O),P=t.buildTextureLayout(L);this._multiRenderTarget.onClearObservable.add(n=>{n.bindAttachments(this.useSpecificClearForDepthTexture?y:I),n.clear(this._clearColor,!0,!0,!0),this.useSpecificClearForDepthTexture&&(n.bindAttachments(P),n.clear(this._clearDepthColor,!0,!0,!0)),n.bindAttachments(I)}),this._resizeObserver=t.onResizeObservable.add(()=>{if(this._multiRenderTarget){const n=this._ratioOrDimensions.width!==void 0?this._ratioOrDimensions:{width:t.getRenderWidth()*this._ratioOrDimensions,height:t.getRenderHeight()*this._ratioOrDimensions};this._multiRenderTarget.resize(n)}});const f=n=>{const a=n.getRenderingMesh(),h=n.getEffectiveMesh(),E=this._scene,d=E.getEngine(),r=n.getMaterial();if(!r)return;if(h._internalAbstractMeshDataInfo._isActiveIntermediate=!1,(this._enableVelocity||this._enableVelocityLinear)&&!this._previousTransformationMatrices[h.uniqueId]&&(this._previousTransformationMatrices[h.uniqueId]={world:ee.Identity(),viewProjection:E.getTransformMatrix()},a.skeleton)){const R=a.skeleton.getTransformMatrices(a);this._previousBonesTransformationMatrices[a.uniqueId]=this._copyBonesTransformationMatrices(R,new Float32Array(R.length))}const M=a._getInstancesRenderList(n._id,!!n.getReplacementMesh());if(M.mustReturn)return;const S=d.getCaps().instancedArrays&&(M.visibleInstances[n._id]!==null||a.hasThinInstances),C=h.getWorldMatrix();if(this.isReady(n,S)){const R=n._getDrawWrapper();if(!R)return;const s=R.effect;d.enableEffect(R),S||a._bind(n,s,r.fillMode),this._useUbo?(te(s,this._scene.getSceneUniformBuffer()),this._scene.finalizeSceneUbo()):(s.setMatrix("viewProjection",E.getTransformMatrix()),s.setMatrix("view",E.getViewMatrix()));let b;if(!a._instanceDataStorage.isFrozen&&(r.backFaceCulling||r.sideOrientation!==null)){const o=h._getWorldMatrixDeterminant();b=r._getEffectiveOrientation(a),o<0&&(b=b===N.ClockWiseSideOrientation?N.CounterClockWiseSideOrientation:N.ClockWiseSideOrientation)}else b=a._effectiveSideOrientation;if(r._preBind(R,b),r.needAlphaTestingForMesh(h)){const o=r.getAlphaTestTexture();o&&(s.setTexture("diffuseSampler",o),s.setMatrix("diffuseMatrix",o.getTextureMatrix()))}if((r.bumpTexture||r.normalTexture||r.geometryNormalTexture)&&E.getEngine().getCaps().standardDerivatives&&X.BumpTextureEnabled){const o=r.bumpTexture||r.normalTexture||r.geometryNormalTexture;s.setFloat3("vBumpInfos",o.coordinatesIndex,1/o.level,r.parallaxScaleBias),s.setMatrix("bumpMatrix",o.getTextureMatrix()),s.setTexture("bumpSampler",o),s.setFloat2("vTangentSpaceParams",r.invertNormalMapX?-1:1,r.invertNormalMapY?-1:1)}if(this._enableReflectivity){if(r.getClassName()==="PBRMetallicRoughnessMaterial")r.metallicRoughnessTexture!==null&&(s.setTexture("reflectivitySampler",r.metallicRoughnessTexture),s.setMatrix("reflectivityMatrix",r.metallicRoughnessTexture.getTextureMatrix())),r.metallic!==null&&s.setFloat("metallic",r.metallic),r.roughness!==null&&s.setFloat("glossiness",1-r.roughness),r.baseTexture!==null&&(s.setTexture("albedoSampler",r.baseTexture),s.setMatrix("albedoMatrix",r.baseTexture.getTextureMatrix())),r.baseColor!==null&&s.setColor3("albedoColor",r.baseColor);else if(r.getClassName()==="PBRSpecularGlossinessMaterial")r.specularGlossinessTexture!==null?(s.setTexture("reflectivitySampler",r.specularGlossinessTexture),s.setMatrix("reflectivityMatrix",r.specularGlossinessTexture.getTextureMatrix())):r.specularColor!==null&&s.setColor3("reflectivityColor",r.specularColor),r.glossiness!==null&&s.setFloat("glossiness",r.glossiness);else if(r.getClassName()==="PBRMaterial")r.metallicTexture!==null&&(s.setTexture("reflectivitySampler",r.metallicTexture),s.setMatrix("reflectivityMatrix",r.metallicTexture.getTextureMatrix())),r.metallic!==null&&s.setFloat("metallic",r.metallic),r.roughness!==null&&s.setFloat("glossiness",1-r.roughness),r.roughness!==null||r.metallic!==null||r.metallicTexture!==null?(r.albedoTexture!==null&&(s.setTexture("albedoSampler",r.albedoTexture),s.setMatrix("albedoMatrix",r.albedoTexture.getTextureMatrix())),r.albedoColor!==null&&s.setColor3("albedoColor",r.albedoColor)):(r.reflectivityTexture!==null?(s.setTexture("reflectivitySampler",r.reflectivityTexture),s.setMatrix("reflectivityMatrix",r.reflectivityTexture.getTextureMatrix())):r.reflectivityColor!==null&&s.setColor3("reflectivityColor",r.reflectivityColor),r.microSurface!==null&&s.setFloat("glossiness",r.microSurface));else if(r.getClassName()==="StandardMaterial")r.specularTexture!==null&&(s.setTexture("reflectivitySampler",r.specularTexture),s.setMatrix("reflectivityMatrix",r.specularTexture.getTextureMatrix())),r.specularColor!==null&&s.setColor3("reflectivityColor",r.specularColor);else if(r.getClassName()==="OpenPBRMaterial"){const o=r;o._useRoughnessFromMetallicTextureGreen&&o.baseMetalnessTexture?(s.setTexture("reflectivitySampler",o.baseMetalnessTexture),s.setMatrix("reflectivityMatrix",o.baseMetalnessTexture.getTextureMatrix())):o.baseMetalnessTexture?(s.setTexture("metallicSampler",o.baseMetalnessTexture),s.setMatrix("metallicMatrix",o.baseMetalnessTexture.getTextureMatrix())):o.specularRoughnessTexture&&(s.setTexture("roughnessSampler",o.specularRoughnessTexture),s.setMatrix("roughnessMatrix",o.specularRoughnessTexture.getTextureMatrix())),s.setFloat("metallic",o.baseMetalness),s.setFloat("glossiness",1-o.specularRoughness),o.baseColorTexture!==null&&(s.setTexture("albedoSampler",o.baseColorTexture),s.setMatrix("albedoMatrix",o.baseColorTexture.getTextureMatrix())),o.baseColor!==null&&s.setColor3("albedoColor",o.baseColor)}}if(ie(s,r,this._scene),a.useBones&&a.computeBonesUsingShaders&&a.skeleton){const o=a.skeleton;if(o.isUsingTextureForMatrices&&s.getUniformIndex("boneTextureWidth")>-1){const V=o.getTransformMatrixTexture(a);s.setTexture("boneSampler",V),s.setFloat("boneTextureWidth",4*(o.bones.length+1))}else s.setMatrices("mBones",a.skeleton.getTransformMatrices(a));(this._enableVelocity||this._enableVelocityLinear)&&s.setMatrices("mPreviousBones",this._previousBonesTransformationMatrices[a.uniqueId])}re(a,s),a.morphTargetManager&&a.morphTargetManager.isUsingTextureForTargets&&a.morphTargetManager._bind(s),(this._enableVelocity||this._enableVelocityLinear)&&(s.setMatrix("previousWorld",this._previousTransformationMatrices[h.uniqueId].world),s.setMatrix("previousViewProjection",this._previousTransformationMatrices[h.uniqueId].viewProjection)),S&&a.hasThinInstances&&s.setMatrix("world",C),a._processRendering(h,n,s,r.fillMode,M,S,(o,V)=>{o||s.setMatrix("world",V)})}(this._enableVelocity||this._enableVelocityLinear)&&(this._previousTransformationMatrices[h.uniqueId].world=C.clone(),this._previousTransformationMatrices[h.uniqueId].viewProjection=this._scene.getTransformMatrix().clone(),a.skeleton&&this._copyBonesTransformationMatrices(a.skeleton.getTransformMatrices(a),this._previousBonesTransformationMatrices[h.uniqueId]))};this._multiRenderTarget.customIsReadyFunction=(n,a,h)=>{if((h||a===0)&&n.subMeshes)for(let E=0;E<n.subMeshes.length;++E){const d=n.subMeshes[E],r=d.getMaterial(),M=d.getRenderingMesh();if(!r)continue;const S=M._getInstancesRenderList(d._id,!!d.getReplacementMesh()),C=t.getCaps().instancedArrays&&(S.visibleInstances[d._id]!==null||M.hasThinInstances);if(!this.isReady(d,C))return!1}return!0},this._multiRenderTarget.customRenderFunction=(n,a,h,E)=>{let d;if(this._linkedWithPrePass){if(!this._prePassRenderer.enabled)return;this._scene.getEngine().bindAttachments(this._attachmentsFromPrePass)}if(E.length){for(t.setColorWrite(!1),d=0;d<E.length;d++)f(E.data[d]);t.setColorWrite(!0)}for(d=0;d<n.length;d++)f(n.data[d]);for(t.setDepthWrite(!1),d=0;d<a.length;d++)f(a.data[d]);if(this.renderTransparentMeshes)for(d=0;d<h.length;d++)f(h.data[d]);t.setDepthWrite(!0)}}_copyBonesTransformationMatrices(t,l){for(let i=0;i<t.length;i++)l[i]=t[i];return l}};m.ForceGLSL=!1;m.DEPTH_TEXTURE_TYPE=0;m.NORMAL_TEXTURE_TYPE=1;m.POSITION_TEXTURE_TYPE=2;m.VELOCITY_TEXTURE_TYPE=3;m.REFLECTIVITY_TEXTURE_TYPE=4;m.SCREENSPACE_DEPTH_TEXTURE_TYPE=5;m.VELOCITY_LINEAR_TEXTURE_TYPE=6;m._SceneComponentInitialization=p=>{throw ne("GeometryBufferRendererSceneComponent")};Object.defineProperty(F.prototype,"geometryBufferRenderer",{get:function(){return this._geometryBufferRenderer},set:function(p){p&&p.isSupported&&(this._geometryBufferRenderer=p)},enumerable:!0,configurable:!0});F.prototype.enableGeometryBufferRenderer=function(p=1,t=15,l){return this._geometryBufferRenderer?this._geometryBufferRenderer:(this._geometryBufferRenderer=new m(this,p,t,l),this._geometryBufferRenderer.isSupported||(this._geometryBufferRenderer=null),this._geometryBufferRenderer)};F.prototype.disableGeometryBufferRenderer=function(){this._geometryBufferRenderer&&(this._geometryBufferRenderer.dispose(),this._geometryBufferRenderer=null)};class ${constructor(t){this.name=A.NAME_GEOMETRYBUFFERRENDERER,this.scene=t}register(){this.scene._gatherRenderTargetsStage.registerStep(A.STEP_GATHERRENDERTARGETS_GEOMETRYBUFFERRENDERER,this,this._gatherRenderTargets)}rebuild(){}dispose(){}_gatherRenderTargets(t){this.scene._geometryBufferRenderer&&t.push(this.scene._geometryBufferRenderer.getGBuffer())}}m._SceneComponentInitialization=p=>{let t=p._getComponent(A.NAME_GEOMETRYBUFFERRENDERER);t||(t=new $(p),p._addComponent(t))};const Ie=Object.freeze(Object.defineProperty({__proto__:null,GeometryBufferRendererSceneComponent:$},Symbol.toStringTag,{value:"Module"}));export{m as G,Ie as g};
