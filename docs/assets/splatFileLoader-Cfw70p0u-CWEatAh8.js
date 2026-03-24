import{bj as ze,J as fe,aG as Le,o as Nt,U as ae,B as E,as as q,bk as Lt,bl as Wt,T as ue,ad as Q,bm as Gt,q as G,a0 as Ie,F as Me,bn as Re,bo as Oe,bp as jt,r as Z,bq as Xt,S as kt,Z as Y,a3 as ye,av as he,br as re,e as Zt,bc as Yt,aQ as $t,aR as Kt,aS as qt,aW as Jt,a$ as Qt,b0 as es,b5 as ts,b7 as ss,b9 as rs,i as xt,E as as,a9 as is,bs as os,bf as ns,bt as mt,k as ls,bu as cs,K as B,w as hs,aj as us}from"./index-C1DIXLxY.js";import{ShaderMaterial as vt}from"./shaderMaterial-keWvu2N1-DV0ioYTI.js";import"./clipPlaneFragment-Cy-2F7Yo-DXicw56a.js";import"./logDepthDeclaration-CFvD74xO-61r-J6fn.js";import"./fogFragment-D5EHfUup-BdY8b7B3.js";import"./sceneUboDeclaration-D9SIaQVE-Bv4ERrDx.js";import"./meshUboDeclaration-Ng_ry5TO-CBE4zNM7.js";import"./clipPlaneVertex-WYRoVSO5-CFTSThZO.js";import"./logDepthVertex-CrevizxT-uWqumRty.js";import"./helperFunctions-B2nzyfKQ-Oq-IgWCq.js";import"./clipPlaneFragment-BbjyvtpD-CMdPXjn3.js";import"./logDepthDeclaration-DwHpG6dq-vIdes4Kg.js";import"./fogFragment-DSkk09WQ-Bj9YJwgv.js";import"./sceneUboDeclaration-CTXf_6oV-DqtnHAnJ.js";import"./meshUboDeclaration-CbkhzssF-ZhotboNn.js";import"./helperFunctions-B6l7xjR4-CjIG-iT8.js";import"./clipPlaneVertex-CubA94Dj-ChSQeJsl.js";import"./logDepthVertex-BMD-XJqU-BAwmhPP7.js";import{f as we}from"./rawTexture-CIe472bo-RPpKcB4d.js";import"./thinInstanceMesh-DRsckpMV-gsnjkNQF.js";import{F as ps}from"./assetContainer-B3PaKfNM-BlroJIxs.js";import{Ray as ds}from"./ray-BTwMWnPb-Bq5q1_0R.js";import{s as fs}from"./standardMaterial-CNgLUMGR-DqC05Gb1.js";class _s{constructor(){this.mm=new Map}get(e,t){const s=this.mm.get(e);if(s!==void 0)return s.get(t)}set(e,t,s){let a=this.mm.get(e);a===void 0&&this.mm.set(e,a=new Map),a.set(t,s)}}class xs{get standalone(){return this._options?.standalone??!1}get baseMaterial(){return this._baseMaterial}get doNotInjectCode(){return this._options?.doNotInjectCode??!1}constructor(e,t,s){this._baseMaterial=e,this._scene=t??Me.LastCreatedScene,this._options=s,this._subMeshToEffect=new Map,this._subMeshToDepthWrapper=new _s,this._meshes=new Map,this._onEffectCreatedObserver=this._baseMaterial.onEffectCreatedObservable.add(a=>{const r=a.subMesh?.getMesh();r&&!this._meshes.has(r)&&this._meshes.set(r,r.onDisposeObservable.add(o=>{const n=this._subMeshToEffect.keys();for(let u=n.next();u.done!==!0;u=n.next()){const l=u.value;l?.getMesh()===o&&(this._subMeshToEffect.delete(l),this._deleteDepthWrapperEffect(l))}})),this._subMeshToEffect.get(a.subMesh)?.[0]!==a.effect&&(this._subMeshToEffect.set(a.subMesh,[a.effect,this._scene.getEngine().currentRenderPassId]),this._deleteDepthWrapperEffect(a.subMesh))})}_deleteDepthWrapperEffect(e){const t=this._subMeshToDepthWrapper.mm.get(e);t&&(t.forEach(s=>{s.mainDrawWrapper.effect?.dispose()}),this._subMeshToDepthWrapper.mm.delete(e))}getEffect(e,t,s){const a=this._subMeshToDepthWrapper.mm.get(e)?.get(t);if(!a)return null;let r=a.drawWrapper[s];return r||(r=a.drawWrapper[s]=new mt(this._scene.getEngine()),r.setEffect(a.mainDrawWrapper.effect,a.mainDrawWrapper.defines)),r}isReadyForSubMesh(e,t,s,a,r){return this.standalone&&!this._baseMaterial.isReadyForSubMesh(e.getMesh(),e,a)?!1:this._makeEffect(e,t,s,r)?.isReady()??!1}dispose(){this._baseMaterial.onEffectCreatedObservable.remove(this._onEffectCreatedObserver),this._onEffectCreatedObserver=null;const e=this._meshes.entries();for(let t=e.next();t.done!==!0;t=e.next()){const[s,a]=t.value;s.onDisposeObservable.remove(a)}}_makeEffect(e,t,s,a){const r=this._scene.getEngine(),o=this._subMeshToEffect.get(e);if(!o)return null;const[n,u]=o;if(!n.isReady())return null;let l=this._subMeshToDepthWrapper.get(e,s);if(!l){const c=new mt(r);c.defines=e._getDrawWrapper(u)?.defines??null,l={drawWrapper:[],mainDrawWrapper:c,depthDefines:"",token:ls()},l.drawWrapper[a]=c,this._subMeshToDepthWrapper.set(e,s,l)}const f=t.join(`
`);if(l.mainDrawWrapper.effect&&f===l.depthDefines)return l.mainDrawWrapper.effect;l.depthDefines=f;const m=n.getUniformNames().slice();let h=n.vertexSourceCodeBeforeMigration,d=n.fragmentSourceCodeBeforeMigration;if(!h&&!d)return null;if(!this.doNotInjectCode){const c=this._options&&this._options.remappedVariables?`#include<shadowMapVertexNormalBias>(${this._options.remappedVariables.join(",")})`:"#include<shadowMapVertexNormalBias>",_=this._options&&this._options.remappedVariables?`#include<shadowMapVertexMetric>(${this._options.remappedVariables.join(",")})`:"#include<shadowMapVertexMetric>",I=this._options&&this._options.remappedVariables?`#include<shadowMapFragmentSoftTransparentShadow>(${this._options.remappedVariables.join(",")})`:"#include<shadowMapFragmentSoftTransparentShadow>",p="#include<shadowMapFragment>",v="#include<shadowMapVertexExtraDeclaration>";n.shaderLanguage===0?h=h.replace(/void\s+?main/g,`
${v}
void main`):h=h.replace(/@vertex/g,`
${v}
@vertex`),h=h.replace(/#define SHADOWDEPTH_NORMALBIAS|#define CUSTOM_VERTEX_UPDATE_WORLDPOS/g,c),h.indexOf("#define SHADOWDEPTH_METRIC")!==-1?h=h.replace(/#define SHADOWDEPTH_METRIC/g,_):h=h.replace(/}\s*$/g,_+`
}`),h=h.replace(/#define SHADER_NAME.*?\n|out vec4 glFragColor;\n/g,"");const g=d.indexOf("#define SHADOWDEPTH_SOFTTRANSPARENTSHADOW")>=0||d.indexOf("#define CUSTOM_FRAGMENT_BEFORE_FOG")>=0,M=d.indexOf("#define SHADOWDEPTH_FRAGMENT")!==-1;let y="";g?d=d.replace(/#define SHADOWDEPTH_SOFTTRANSPARENTSHADOW|#define CUSTOM_FRAGMENT_BEFORE_FOG/g,I):y=I+`
`,d=d.replace(/void\s+?main/g,cs.IncludesShadersStore.shadowMapFragmentExtraDeclaration+`
void main`),M?d=d.replace(/#define SHADOWDEPTH_FRAGMENT/g,p):y+=p+`
`,y&&(d=d.replace(/}\s*$/g,y+"}")),m.push("biasAndScaleSM","depthValuesSM","lightDataSM","softTransparentShadowSM")}l.mainDrawWrapper.effect=r.createEffect({vertexSource:h,fragmentSource:d,vertexToken:l.token,fragmentToken:l.token},{attributes:n.getAttributesNames(),uniformsNames:m,uniformBuffersNames:n.getUniformBuffersNames(),samplers:n.getSamplers(),defines:f+`
`+n.defines.replace("#define SHADOWS","").replace(/#define SHADOW\d/g,""),indexParameters:n.getIndexParameters(),shaderLanguage:n.shaderLanguage},r);for(let c=0;c<l.drawWrapper.length;++c)c!==a&&l.drawWrapper[c]?.setEffect(l.mainDrawWrapper.effect,l.mainDrawWrapper.defines);return l.mainDrawWrapper.effect}}const gt="gaussianSplattingFragmentDeclaration",ms=`vec4 gaussianColor(vec4 inColor)
{float A=-dot(vPosition,vPosition);if (A<-4.0) discard;float B=exp(A)*inColor.a;
#include<logDepthFragment>
vec3 color=inColor.rgb;
#ifdef FOG
#include<fogFragment>
#endif
return vec4(color,B);}
`;B.IncludesShadersStore[gt]||(B.IncludesShadersStore[gt]=ms);const He="gaussianSplattingPixelShader",Ht=`#include<clipPlaneFragmentDeclaration>
#include<logDepthDeclaration>
#include<fogFragmentDeclaration>
varying vec4 vColor;varying vec2 vPosition;
#define CUSTOM_FRAGMENT_DEFINITIONS
#include<gaussianSplattingFragmentDeclaration>
void main () {
#define CUSTOM_FRAGMENT_MAIN_BEGIN
#include<clipPlaneFragment>
vec4 finalColor=gaussianColor(vColor);
#define CUSTOM_FRAGMENT_BEFORE_FRAGCOLOR
gl_FragColor=finalColor;
#define CUSTOM_FRAGMENT_MAIN_END
}
`;B.ShadersStore[He]||(B.ShadersStore[He]=Ht);const vs={name:He,shader:Ht},gs=Object.freeze(Object.defineProperty({__proto__:null,gaussianSplattingPixelShader:vs},Symbol.toStringTag,{value:"Module"})),St="gaussianSplattingVertexDeclaration",Ss="attribute vec3 position;attribute vec4 splatIndex0;attribute vec4 splatIndex1;attribute vec4 splatIndex2;attribute vec4 splatIndex3;uniform mat4 view;uniform mat4 projection;uniform mat4 world;uniform vec4 vEyePosition;";B.IncludesShadersStore[St]||(B.IncludesShadersStore[St]=Ss);const yt="gaussianSplattingUboDeclaration",ys=`#include<sceneUboDeclaration>
#include<meshUboDeclaration>
attribute vec3 position;attribute vec4 splatIndex0;attribute vec4 splatIndex1;attribute vec4 splatIndex2;attribute vec4 splatIndex3;
`;B.IncludesShadersStore[yt]||(B.IncludesShadersStore[yt]=ys);const wt="gaussianSplatting",ws=`#if !defined(WEBGL2) && !defined(WEBGPU) && !defined(NATIVE)
mat3 transpose(mat3 matrix) {return mat3(matrix[0][0],matrix[1][0],matrix[2][0],
matrix[0][1],matrix[1][1],matrix[2][1],
matrix[0][2],matrix[1][2],matrix[2][2]);}
#endif
vec2 getDataUV(float index,vec2 textureSize) {float y=floor(index/textureSize.x);float x=index-y*textureSize.x;return vec2((x+0.5)/textureSize.x,(y+0.5)/textureSize.y);}
#if SH_DEGREE>0 || IS_COMPOUND
ivec2 getDataUVint(float index,vec2 textureSize) {float y=floor(index/textureSize.x);float x=index-y*textureSize.x;return ivec2(uint(x+0.5),uint(y+0.5));}
#endif
struct Splat {vec4 center;vec4 color;vec4 covA;vec4 covB;
#if SH_DEGREE>0
uvec4 sh0; 
#endif
#if SH_DEGREE>1
uvec4 sh1;
#endif
#if SH_DEGREE>2
uvec4 sh2;
#endif
#if IS_COMPOUND
uint partIndex;
#endif
};float getSplatIndex(int localIndex)
{float splatIndex;switch (localIndex)
{case 0: splatIndex=splatIndex0.x; break;case 1: splatIndex=splatIndex0.y; break;case 2: splatIndex=splatIndex0.z; break;case 3: splatIndex=splatIndex0.w; break;case 4: splatIndex=splatIndex1.x; break;case 5: splatIndex=splatIndex1.y; break;case 6: splatIndex=splatIndex1.z; break;case 7: splatIndex=splatIndex1.w; break;case 8: splatIndex=splatIndex2.x; break;case 9: splatIndex=splatIndex2.y; break;case 10: splatIndex=splatIndex2.z; break;case 11: splatIndex=splatIndex2.w; break;case 12: splatIndex=splatIndex3.x; break;case 13: splatIndex=splatIndex3.y; break;case 14: splatIndex=splatIndex3.z; break;case 15: splatIndex=splatIndex3.w; break;}
return splatIndex;}
Splat readSplat(float splatIndex)
{Splat splat;vec2 splatUV=getDataUV(splatIndex,dataTextureSize);splat.center=texture2D(centersTexture,splatUV);splat.color=texture2D(colorsTexture,splatUV);splat.covA=texture2D(covariancesATexture,splatUV)*splat.center.w;splat.covB=texture2D(covariancesBTexture,splatUV)*splat.center.w;
#if SH_DEGREE>0 || IS_COMPOUND
ivec2 splatUVint=getDataUVint(splatIndex,dataTextureSize);
#endif
#if SH_DEGREE>0
splat.sh0=texelFetch(shTexture0,splatUVint,0);
#endif
#if SH_DEGREE>1
splat.sh1=texelFetch(shTexture1,splatUVint,0);
#endif
#if SH_DEGREE>2
splat.sh2=texelFetch(shTexture2,splatUVint,0);
#endif
#if IS_COMPOUND
splat.partIndex=uint(texture2D(partIndicesTexture,splatUV).r*255.0+0.5);
#endif
return splat;}
#if defined(WEBGL2) || defined(WEBGPU) || defined(NATIVE)
vec3 computeColorFromSHDegree(vec3 dir,const vec3 sh[16])
{const float SH_C0=0.28209479;const float SH_C1=0.48860251;float SH_C2[5];SH_C2[0]=1.092548430;SH_C2[1]=-1.09254843;SH_C2[2]=0.315391565;SH_C2[3]=-1.09254843;SH_C2[4]=0.546274215;float SH_C3[7];SH_C3[0]=-0.59004358;SH_C3[1]=2.890611442;SH_C3[2]=-0.45704579;SH_C3[3]=0.373176332;SH_C3[4]=-0.45704579;SH_C3[5]=1.445305721;SH_C3[6]=-0.59004358;vec3 result=/*SH_C0**/sh[0];
#if SH_DEGREE>0
float x=dir.x;float y=dir.y;float z=dir.z;result+=- SH_C1*y*sh[1]+SH_C1*z*sh[2]-SH_C1*x*sh[3];
#if SH_DEGREE>1
float xx=x*x,yy=y*y,zz=z*z;float xy=x*y,yz=y*z,xz=x*z;result+=
SH_C2[0]*xy*sh[4] +
SH_C2[1]*yz*sh[5] +
SH_C2[2]*(2.0*zz-xx-yy)*sh[6] +
SH_C2[3]*xz*sh[7] +
SH_C2[4]*(xx-yy)*sh[8];
#if SH_DEGREE>2
result+=
SH_C3[0]*y*(3.0*xx-yy)*sh[9] +
SH_C3[1]*xy*z*sh[10] +
SH_C3[2]*y*(4.0*zz-xx-yy)*sh[11] +
SH_C3[3]*z*(2.0*zz-3.0*xx-3.0*yy)*sh[12] +
SH_C3[4]*x*(4.0*zz-xx-yy)*sh[13] +
SH_C3[5]*z*(xx-yy)*sh[14] +
SH_C3[6]*x*(xx-3.0*yy)*sh[15];
#endif
#endif
#endif
return result;}
vec4 decompose(uint value)
{vec4 components=vec4(
float((value ) & 255u),
float((value>>uint( 8)) & 255u),
float((value>>uint(16)) & 255u),
float((value>>uint(24)) & 255u));return components*vec4(2./255.)-vec4(1.);}
vec3 computeSH(Splat splat,vec3 dir)
{vec3 sh[16];sh[0]=vec3(0.,0.,0.);
#if SH_DEGREE>0
vec4 sh00=decompose(splat.sh0.x);vec4 sh01=decompose(splat.sh0.y);vec4 sh02=decompose(splat.sh0.z);sh[1]=vec3(sh00.x,sh00.y,sh00.z);sh[2]=vec3(sh00.w,sh01.x,sh01.y);sh[3]=vec3(sh01.z,sh01.w,sh02.x);
#endif
#if SH_DEGREE>1
vec4 sh03=decompose(splat.sh0.w);vec4 sh04=decompose(splat.sh1.x);vec4 sh05=decompose(splat.sh1.y);sh[4]=vec3(sh02.y,sh02.z,sh02.w);sh[5]=vec3(sh03.x,sh03.y,sh03.z);sh[6]=vec3(sh03.w,sh04.x,sh04.y);sh[7]=vec3(sh04.z,sh04.w,sh05.x);sh[8]=vec3(sh05.y,sh05.z,sh05.w);
#endif
#if SH_DEGREE>2
vec4 sh06=decompose(splat.sh1.z);vec4 sh07=decompose(splat.sh1.w);vec4 sh08=decompose(splat.sh2.x);vec4 sh09=decompose(splat.sh2.y);vec4 sh10=decompose(splat.sh2.z);vec4 sh11=decompose(splat.sh2.w);sh[9]=vec3(sh06.x,sh06.y,sh06.z);sh[10]=vec3(sh06.w,sh07.x,sh07.y);sh[11]=vec3(sh07.z,sh07.w,sh08.x);sh[12]=vec3(sh08.y,sh08.z,sh08.w);sh[13]=vec3(sh09.x,sh09.y,sh09.z);sh[14]=vec3(sh09.w,sh10.x,sh10.y);sh[15]=vec3(sh10.z,sh10.w,sh11.x); 
#endif
return computeColorFromSHDegree(dir,sh);}
#else
vec3 computeSH(Splat splat,vec3 dir)
{return vec3(0.,0.,0.);}
#endif
vec4 gaussianSplatting(vec2 meshPos,vec3 worldPos,vec2 scale,vec3 covA,vec3 covB,mat4 worldMatrix,mat4 viewMatrix,mat4 projectionMatrix)
{mat4 modelView=viewMatrix*worldMatrix;vec4 camspace=viewMatrix*vec4(worldPos,1.);vec4 pos2d=projectionMatrix*camspace;float bounds=1.2*pos2d.w;if (pos2d.z<-pos2d.w || pos2d.x<-bounds || pos2d.x>bounds
|| pos2d.y<-bounds || pos2d.y>bounds) {return vec4(0.0,0.0,2.0,1.0);}
mat3 Vrk=mat3(
covA.x,covA.y,covA.z,
covA.y,covB.x,covB.y,
covA.z,covB.y,covB.z
);bool isOrtho=abs(projectionMatrix[3][3]-1.0)<0.001;mat3 J;if (isOrtho) {J=mat3(
focal.x,0.,0.,
0.,focal.y,0.,
0.,0.,0.
);} else {J=mat3(
focal.x/camspace.z,0.,-(focal.x*camspace.x)/(camspace.z*camspace.z),
0.,focal.y/camspace.z,-(focal.y*camspace.y)/(camspace.z*camspace.z),
0.,0.,0.
);}
mat3 T=transpose(mat3(modelView))*J;mat3 cov2d=transpose(T)*Vrk*T;
#if COMPENSATION
float c00=cov2d[0][0];float c11=cov2d[1][1];float c01=cov2d[0][1];float detOrig=c00*c11-c01*c01;
#endif
cov2d[0][0]+=kernelSize;cov2d[1][1]+=kernelSize;
#if COMPENSATION
vec3 c2d=vec3(cov2d[0][0],c01,cov2d[1][1]);float detBlur=c2d.x*c2d.z-c2d.y*c2d.y;float compensation=sqrt(max(0.,detOrig/detBlur));vColor.w*=compensation;
#endif
float mid=(cov2d[0][0]+cov2d[1][1])/2.0;float radius=length(vec2((cov2d[0][0]-cov2d[1][1])/2.0,cov2d[0][1]));float epsilon=0.0001;float lambda1=mid+radius+epsilon,lambda2=mid-radius+epsilon;if (lambda2<0.0)
{return vec4(0.0,0.0,2.0,1.0);}
vec2 diagonalVector=normalize(vec2(cov2d[0][1],lambda1-cov2d[0][0]));vec2 majorAxis=min(sqrt(2.0*lambda1),1024.0)*diagonalVector;vec2 minorAxis=min(sqrt(2.0*lambda2),1024.0)*vec2(diagonalVector.y,-diagonalVector.x);vec2 vCenter=vec2(pos2d);float scaleFactor=isOrtho ? 1.0 : pos2d.w;return vec4(
vCenter 
+ ((meshPos.x*majorAxis
+ meshPos.y*minorAxis)*invViewport*scaleFactor)*scale,pos2d.zw);}
#if IS_COMPOUND
mat4 getPartWorld(uint partIndex) {return partWorld[partIndex];}
#endif
`;B.IncludesShadersStore[wt]||(B.IncludesShadersStore[wt]=ws);const Ve="gaussianSplattingVertexShader",Vt=`#include<__decl__gaussianSplattingVertex>
#ifdef LOGARITHMICDEPTH
#extension GL_EXT_frag_depth : enable
#endif
#include<clipPlaneVertexDeclaration>
#include<fogVertexDeclaration>
#include<logDepthDeclaration>
#include<helperFunctions>
uniform vec2 invViewport;uniform vec2 dataTextureSize;uniform vec2 focal;uniform float kernelSize;uniform vec3 eyePosition;uniform float alpha;
#if IS_COMPOUND
uniform mat4 partWorld[MAX_PART_COUNT];uniform float partVisibility[MAX_PART_COUNT];
#endif
uniform sampler2D covariancesATexture;uniform sampler2D covariancesBTexture;uniform sampler2D centersTexture;uniform sampler2D colorsTexture;
#if SH_DEGREE>0
uniform highp usampler2D shTexture0;
#endif
#if SH_DEGREE>1
uniform highp usampler2D shTexture1;
#endif
#if SH_DEGREE>2
uniform highp usampler2D shTexture2;
#endif
#if IS_COMPOUND
uniform sampler2D partIndicesTexture;
#endif
varying vec4 vColor;varying vec2 vPosition;
#define CUSTOM_VERTEX_DEFINITIONS
#include<gaussianSplatting>
void main () {
#define CUSTOM_VERTEX_MAIN_BEGIN
float splatIndex=getSplatIndex(int(position.z+0.5));Splat splat=readSplat(splatIndex);vec3 covA=splat.covA.xyz;vec3 covB=vec3(splat.covA.w,splat.covB.xy);
#if IS_COMPOUND
mat4 splatWorld=getPartWorld(splat.partIndex);
#else
mat4 splatWorld=world;
#endif
vec4 worldPos=splatWorld*vec4(splat.center.xyz,1.0);vColor=splat.color;vPosition=position.xy;
#if SH_DEGREE>0
mat3 worldRot=mat3(splatWorld);mat3 normWorldRot=inverseMat3(worldRot);vec3 eyeToSplatLocalSpace=normalize(normWorldRot*(worldPos.xyz-eyePosition));vColor.xyz=splat.color.xyz+computeSH(splat,eyeToSplatLocalSpace);
#endif
vColor.w*=alpha;
#if IS_COMPOUND
vColor.w*=partVisibility[splat.partIndex];
#endif
vec2 scale=vec2(1.,1.);
#define CUSTOM_VERTEX_UPDATE
gl_Position=gaussianSplatting(position.xy,worldPos.xyz,scale,covA,covB,splatWorld,view,projection);
#include<clipPlaneVertex>
#include<fogVertex>
#include<logDepthVertex>
#define CUSTOM_VERTEX_MAIN_END
}
`;B.ShadersStore[Ve]||(B.ShadersStore[Ve]=Vt);const Is={name:Ve,shader:Vt},Ms=Object.freeze(Object.defineProperty({__proto__:null,gaussianSplattingVertexShader:Is},Symbol.toStringTag,{value:"Module"})),It="gaussianSplattingFragmentDeclaration",Cs=`fn gaussianColor(inColor: vec4f,inPosition: vec2f)->vec4f
{var A : f32=-dot(inPosition,inPosition);if (A>-4.0)
{var B: f32=exp(A)*inColor.a;
#include<logDepthFragment>
var color: vec3f=inColor.rgb;
#ifdef FOG
#include<fogFragment>
#endif
return vec4f(color,B);} else {return vec4f(0.0);}}
`;B.IncludesShadersStoreWGSL[It]||(B.IncludesShadersStoreWGSL[It]=Cs);const Fe="gaussianSplattingPixelShader",Ft=`#include<clipPlaneFragmentDeclaration>
#include<logDepthDeclaration>
#include<fogFragmentDeclaration>
varying vColor: vec4f;varying vPosition: vec2f;
#define CUSTOM_FRAGMENT_DEFINITIONS
#include<gaussianSplattingFragmentDeclaration>
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {
#define CUSTOM_FRAGMENT_MAIN_BEGIN
#include<clipPlaneFragment>
var finalColor: vec4f=gaussianColor(input.vColor,input.vPosition);
#define CUSTOM_FRAGMENT_BEFORE_FRAGCOLOR
fragmentOutputs.color=finalColor;
#define CUSTOM_FRAGMENT_MAIN_END
}
`;B.ShadersStoreWGSL[Fe]||(B.ShadersStoreWGSL[Fe]=Ft);const bs={name:Fe,shader:Ft},Ts=Object.freeze(Object.defineProperty({__proto__:null,gaussianSplattingPixelShaderWGSL:bs},Symbol.toStringTag,{value:"Module"})),Mt="gaussianSplatting",Es=`fn getDataUV(index: f32,dataTextureSize: vec2f)->vec2<f32> {let y: f32=floor(index/dataTextureSize.x);let x: f32=index-y*dataTextureSize.x;return vec2f((x+0.5),(y+0.5));}
struct Splat {center: vec4f,
color: vec4f,
covA: vec4f,
covB: vec4f,
#if SH_DEGREE>0
sh0: vec4<u32>,
#endif
#if SH_DEGREE>1
sh1: vec4<u32>,
#endif
#if SH_DEGREE>2
sh2: vec4<u32>,
#endif
#if IS_COMPOUND
partIndex: u32,
#endif
};fn getSplatIndex(localIndex: i32,splatIndex0: vec4f,splatIndex1: vec4f,splatIndex2: vec4f,splatIndex3: vec4f)->f32 {var splatIndex: f32;switch (localIndex)
{case 0:
{splatIndex=splatIndex0.x;break;}
case 1:
{splatIndex=splatIndex0.y;break;}
case 2:
{splatIndex=splatIndex0.z;break;}
case 3:
{splatIndex=splatIndex0.w;break;}
case 4:
{splatIndex=splatIndex1.x;break;}
case 5:
{splatIndex=splatIndex1.y;break;}
case 6:
{splatIndex=splatIndex1.z;break;}
case 7:
{splatIndex=splatIndex1.w;break;}
case 8:
{splatIndex=splatIndex2.x;break;}
case 9:
{splatIndex=splatIndex2.y;break;}
case 10:
{splatIndex=splatIndex2.z;break;}
case 11:
{splatIndex=splatIndex2.w;break;}
case 12:
{splatIndex=splatIndex3.x;break;}
case 13:
{splatIndex=splatIndex3.y;break;}
case 14:
{splatIndex=splatIndex3.z;break;}
default:
{splatIndex=splatIndex3.w;break;}}
return splatIndex;}
fn readSplat(splatIndex: f32,dataTextureSize: vec2f)->Splat {var splat: Splat;let splatUV=getDataUV(splatIndex,dataTextureSize);let splatUVi32=vec2<i32>(i32(splatUV.x),i32(splatUV.y));splat.center=textureLoad(centersTexture,splatUVi32,0);splat.color=textureLoad(colorsTexture,splatUVi32,0);splat.covA=textureLoad(covariancesATexture,splatUVi32,0)*splat.center.w;splat.covB=textureLoad(covariancesBTexture,splatUVi32,0)*splat.center.w;
#if SH_DEGREE>0
splat.sh0=textureLoad(shTexture0,splatUVi32,0);
#endif
#if SH_DEGREE>1
splat.sh1=textureLoad(shTexture1,splatUVi32,0);
#endif
#if SH_DEGREE>2
splat.sh2=textureLoad(shTexture2,splatUVi32,0);
#endif
#if IS_COMPOUND
splat.partIndex=u32(textureLoad(partIndicesTexture,splatUVi32,0).r*255.0+0.5);
#endif
return splat;}
fn computeColorFromSHDegree(dir: vec3f,sh: array<vec3<f32>,16>)->vec3f
{let SH_C0: f32=0.28209479;let SH_C1: f32=0.48860251;var SH_C2: array<f32,5>=array<f32,5>(
1.092548430,
-1.09254843,
0.315391565,
-1.09254843,
0.546274215
);var SH_C3: array<f32,7>=array<f32,7>(
-0.59004358,
2.890611442,
-0.45704579,
0.373176332,
-0.45704579,
1.445305721,
-0.59004358
);var result: vec3f=/*SH_C0**/sh[0];
#if SH_DEGREE>0
let x: f32=dir.x;let y: f32=dir.y;let z: f32=dir.z;result+=-SH_C1*y*sh[1]+SH_C1*z*sh[2]-SH_C1*x*sh[3];
#if SH_DEGREE>1
let xx: f32=x*x;let yy: f32=y*y;let zz: f32=z*z;let xy: f32=x*y;let yz: f32=y*z;let xz: f32=x*z;result+=
SH_C2[0]*xy*sh[4] +
SH_C2[1]*yz*sh[5] +
SH_C2[2]*(2.0f*zz-xx-yy)*sh[6] +
SH_C2[3]*xz*sh[7] +
SH_C2[4]*(xx-yy)*sh[8];
#if SH_DEGREE>2
result+=
SH_C3[0]*y*(3.0f*xx-yy)*sh[9] +
SH_C3[1]*xy*z*sh[10] +
SH_C3[2]*y*(4.0f*zz-xx-yy)*sh[11] +
SH_C3[3]*z*(2.0f*zz-3.0f*xx-3.0f*yy)*sh[12] +
SH_C3[4]*x*(4.0f*zz-xx-yy)*sh[13] +
SH_C3[5]*z*(xx-yy)*sh[14] +
SH_C3[6]*x*(xx-3.0f*yy)*sh[15];
#endif
#endif
#endif
return result;}
fn decompose(value: u32)->vec4f
{let components : vec4f=vec4f(
f32((value ) & 255u),
f32((value>>u32( 8)) & 255u),
f32((value>>u32(16)) & 255u),
f32((value>>u32(24)) & 255u));return components*vec4f(2./255.)-vec4f(1.);}
fn computeSH(splat: Splat,dir: vec3f)->vec3f
{var sh: array<vec3<f32>,16>;sh[0]=vec3f(0.,0.,0.);
#if SH_DEGREE>0
let sh00: vec4f=decompose(splat.sh0.x);let sh01: vec4f=decompose(splat.sh0.y);let sh02: vec4f=decompose(splat.sh0.z);sh[1]=vec3f(sh00.x,sh00.y,sh00.z);sh[2]=vec3f(sh00.w,sh01.x,sh01.y);sh[3]=vec3f(sh01.z,sh01.w,sh02.x);
#endif
#if SH_DEGREE>1
let sh03: vec4f=decompose(splat.sh0.w);let sh04: vec4f=decompose(splat.sh1.x);let sh05: vec4f=decompose(splat.sh1.y);sh[4]=vec3f(sh02.y,sh02.z,sh02.w);sh[5]=vec3f(sh03.x,sh03.y,sh03.z);sh[6]=vec3f(sh03.w,sh04.x,sh04.y);sh[7]=vec3f(sh04.z,sh04.w,sh05.x);sh[8]=vec3f(sh05.y,sh05.z,sh05.w);
#endif
#if SH_DEGREE>2
let sh06: vec4f=decompose(splat.sh1.z);let sh07: vec4f=decompose(splat.sh1.w);let sh08: vec4f=decompose(splat.sh2.x);let sh09: vec4f=decompose(splat.sh2.y);let sh10: vec4f=decompose(splat.sh2.z);let sh11: vec4f=decompose(splat.sh2.w);sh[9]=vec3f(sh06.x,sh06.y,sh06.z);sh[10]=vec3f(sh06.w,sh07.x,sh07.y);sh[11]=vec3f(sh07.z,sh07.w,sh08.x);sh[12]=vec3f(sh08.y,sh08.z,sh08.w);sh[13]=vec3f(sh09.x,sh09.y,sh09.z);sh[14]=vec3f(sh09.w,sh10.x,sh10.y);sh[15]=vec3f(sh10.z,sh10.w,sh11.x); 
#endif
return computeColorFromSHDegree(dir,sh);}
fn gaussianSplatting(
meshPos: vec2<f32>,
worldPos: vec3<f32>,
scale: vec2<f32>,
covA: vec3<f32>,
covB: vec3<f32>,
worldMatrix: mat4x4<f32>,
viewMatrix: mat4x4<f32>,
projectionMatrix: mat4x4<f32>,
focal: vec2f,
invViewport: vec2f,
kernelSize: f32
)->vec4f {let modelView=viewMatrix*worldMatrix;let camspace=viewMatrix*vec4f(worldPos,1.0);let pos2d=projectionMatrix*camspace;let bounds=1.2*pos2d.w;if (pos2d.z<0. || pos2d.x<-bounds || pos2d.x>bounds || pos2d.y<-bounds || pos2d.y>bounds) {return vec4f(0.0,0.0,2.0,1.0);}
let Vrk=mat3x3<f32>(
covA.x,covA.y,covA.z,
covA.y,covB.x,covB.y,
covA.z,covB.y,covB.z
);let isOrtho=abs(projectionMatrix[3][3]-1.0)<0.001;var J: mat3x3<f32>;if (isOrtho) {J=mat3x3<f32>(
focal.x,0.0,0.0,
0.0,focal.y,0.0,
0.0,0.0,0.0
);} else {J=mat3x3<f32>(
focal.x/camspace.z,0.0,-(focal.x*camspace.x)/(camspace.z*camspace.z),
0.0,focal.y/camspace.z,-(focal.y*camspace.y)/(camspace.z*camspace.z),
0.0,0.0,0.0
);}
let T=transpose(mat3x3<f32>(
modelView[0].xyz,
modelView[1].xyz,
modelView[2].xyz))*J;var cov2d=transpose(T)*Vrk*T;
#if COMPENSATION
let c00: f32=cov2d[0][0];let c11: f32=cov2d[1][1];let c01: f32=cov2d[0][1];let detOrig: f32=c00*c11-c01*c01;
#endif
cov2d[0][0]+=kernelSize;cov2d[1][1]+=kernelSize;
#if COMPENSATION
let c2d: vec3f=vec3f(cov2d[0][0],c01,cov2d[1][1]);let detBlur: f32=c2d.x*c2d.z-c2d.y*c2d.y;let compensation: f32=sqrt(max(0.,detOrig/detBlur));vertexOutputs.vColor.w*=compensation;
#endif
let mid=(cov2d[0][0]+cov2d[1][1])/2.0;let radius=length(vec2<f32>((cov2d[0][0]-cov2d[1][1])/2.0,cov2d[0][1]));let lambda1=mid+radius;let lambda2=mid-radius;if (lambda2<0.0) {return vec4f(0.0,0.0,2.0,1.0);}
let diagonalVector=normalize(vec2<f32>(cov2d[0][1],lambda1-cov2d[0][0]));let majorAxis=min(sqrt(2.0*lambda1),1024.0)*diagonalVector;let minorAxis=min(sqrt(2.0*lambda2),1024.0)*vec2<f32>(diagonalVector.y,-diagonalVector.x);let vCenter=vec2<f32>(pos2d.x,pos2d.y);let scaleFactor=select(pos2d.w,1.0,isOrtho);return vec4f(
vCenter+((meshPos.x*majorAxis+meshPos.y*minorAxis)*invViewport*scaleFactor)*scale,
pos2d.z,
pos2d.w
);}
#if IS_COMPOUND
fn getPartWorld(partIndex: u32)->mat4x4<f32> {return uniforms.partWorld[partIndex];}
#endif
`;B.IncludesShadersStoreWGSL[Mt]||(B.IncludesShadersStoreWGSL[Mt]=Es);const Be="gaussianSplattingVertexShader",Bt=`#include<sceneUboDeclaration>
#include<meshUboDeclaration>
#include<helperFunctions>
#include<clipPlaneVertexDeclaration>
#include<fogVertexDeclaration>
#include<logDepthDeclaration>
attribute splatIndex0: vec4f;attribute splatIndex1: vec4f;attribute splatIndex2: vec4f;attribute splatIndex3: vec4f;attribute position: vec3f;uniform invViewport: vec2f;uniform dataTextureSize: vec2f;uniform focal: vec2f;uniform kernelSize: f32;uniform eyePosition: vec3f;uniform alpha: f32;
#if IS_COMPOUND
uniform partWorld: array<mat4x4<f32>,MAX_PART_COUNT>;uniform partVisibility: array<f32,MAX_PART_COUNT>;
#endif
var covariancesATexture: texture_2d<f32>;var covariancesBTexture: texture_2d<f32>;var centersTexture: texture_2d<f32>;var colorsTexture: texture_2d<f32>;
#if SH_DEGREE>0
var shTexture0: texture_2d<u32>;
#endif
#if SH_DEGREE>1
var shTexture1: texture_2d<u32>;
#endif
#if SH_DEGREE>2
var shTexture2: texture_2d<u32>;
#endif
#if IS_COMPOUND
var partIndicesTexture: texture_2d<f32>;
#endif
varying vColor: vec4f;varying vPosition: vec2f;
#define CUSTOM_VERTEX_DEFINITIONS
#include<gaussianSplatting>
@vertex
fn main(input : VertexInputs)->FragmentInputs {
#define CUSTOM_VERTEX_MAIN_BEGIN
let splatIndex: f32=getSplatIndex(i32(vertexInputs.position.z+0.5),vertexInputs.splatIndex0,vertexInputs.splatIndex1,vertexInputs.splatIndex2,vertexInputs.splatIndex3);var splat: Splat=readSplat(splatIndex,uniforms.dataTextureSize);var covA: vec3f=splat.covA.xyz;var covB: vec3f=vec3f(splat.covA.w,splat.covB.xy);
#if IS_COMPOUND
let splatWorld: mat4x4f=getPartWorld(splat.partIndex);
#else
let splatWorld: mat4x4f=mesh.world;
#endif
let worldPos: vec4f=splatWorld*vec4f(splat.center.xyz,1.0);vertexOutputs.vPosition=vertexInputs.position.xy;
#if SH_DEGREE>0
let worldRot: mat3x3f= mat3x3f(splatWorld[0].xyz,splatWorld[1].xyz,splatWorld[2].xyz);let normWorldRot: mat3x3f=inverseMat3(worldRot);var eyeToSplatLocalSpace: vec3f=normalize(normWorldRot*(worldPos.xyz-uniforms.eyePosition.xyz));vertexOutputs.vColor=vec4f(splat.color.xyz+computeSH(splat,eyeToSplatLocalSpace),splat.color.w*uniforms.alpha);
#else
vertexOutputs.vColor=vec4f(splat.color.xyz,splat.color.w*uniforms.alpha);
#endif
#if IS_COMPOUND
vertexOutputs.vColor.w*=uniforms.partVisibility[splat.partIndex];
#endif
let scale: vec2f=vec2f(1.,1.);
#define CUSTOM_VERTEX_UPDATE
vertexOutputs.position=gaussianSplatting(vertexInputs.position.xy,worldPos.xyz,scale,covA,covB,splatWorld,scene.view,scene.projection,uniforms.focal,uniforms.invViewport,uniforms.kernelSize);
#include<clipPlaneVertex>
#include<fogVertex>
#include<logDepthVertex>
#define CUSTOM_VERTEX_MAIN_END
}
`;B.ShadersStoreWGSL[Be]||(B.ShadersStoreWGSL[Be]=Bt);const As={name:Be,shader:Bt},Ps=Object.freeze(Object.defineProperty({__proto__:null,gaussianSplattingVertexShaderWGSL:As},Symbol.toStringTag,{value:"Module"})),Ct="gaussianSplattingDepthPixelShader",Ds=`precision highp float;varying vec2 vPosition;varying vec4 vColor;
#ifdef DEPTH_RENDER
varying float vDepthMetric;
#endif
void main(void) {float A=-dot(vPosition,vPosition);
#if (defined(SM_SOFTTRANSPARENTSHADOW) && SM_SOFTTRANSPARENTSHADOW==1) || (defined(DEPTH_RENDER) && defined(ALPHA_BLENDED_DEPTH))
float alpha=exp(A)*vColor.a;if (A<-4.)
discard;
#else
if (A<-vColor.a)
discard;
#endif
#ifdef DEPTH_RENDER
float opacity=1.0;
#ifdef ALPHA_BLENDED_DEPTH
opacity=alpha;
#endif
gl_FragColor=vec4(vDepthMetric,0.0,0.0,opacity);
#endif
}`;B.ShadersStore[Ct]||(B.ShadersStore[Ct]=Ds);const bt="gaussianSplattingDepthVertexShader",zs=`#include<__decl__gaussianSplattingVertex>
uniform vec2 invViewport;uniform vec2 dataTextureSize;uniform vec2 focal;uniform float kernelSize;uniform float alpha;uniform sampler2D covariancesATexture;uniform sampler2D covariancesBTexture;uniform sampler2D centersTexture;uniform sampler2D colorsTexture;
#if IS_COMPOUND
uniform mat4 partWorld[MAX_PART_COUNT];uniform float partVisibility[MAX_PART_COUNT];uniform sampler2D partIndicesTexture;
#endif
varying vec2 vPosition;varying vec4 vColor;
#include<gaussianSplatting>
#ifdef DEPTH_RENDER
uniform vec2 depthValues;varying float vDepthMetric;
#endif
void main(void) {float splatIndex=getSplatIndex(int(position.z+0.5));Splat splat=readSplat(splatIndex);vec3 covA=splat.covA.xyz;vec3 covB=vec3(splat.covA.w,splat.covB.xy);
#if IS_COMPOUND
mat4 splatWorld=getPartWorld(splat.partIndex);
#else
mat4 splatWorld=world;
#endif
vec4 worldPosGS=splatWorld*vec4(splat.center.xyz,1.0);vPosition=position.xy;vColor=splat.color;vColor.w*=alpha;
#if IS_COMPOUND
vColor.w*=partVisibility[splat.partIndex];
#endif
gl_Position=gaussianSplatting(position.xy,worldPosGS.xyz,vec2(1.,1.),covA,covB,splatWorld,view,projection);
#ifdef DEPTH_RENDER
#ifdef USE_REVERSE_DEPTHBUFFER
vDepthMetric=((-gl_Position.z+depthValues.x)/(depthValues.y));
#else
vDepthMetric=((gl_Position.z+depthValues.x)/(depthValues.y));
#endif
#endif
}`;B.ShadersStore[bt]||(B.ShadersStore[bt]=zs);const Tt="gaussianSplattingDepthPixelShader",Rs=`#include<gaussianSplattingFragmentDeclaration>
varying vPosition: vec2f;varying vColor: vec4f;
#ifdef DEPTH_RENDER
varying vDepthMetric: f32;
#endif
fn checkDiscard(inPosition: vec2f,inColor: vec4f)->vec4f {var A : f32=-dot(inPosition,inPosition);var alpha : f32=exp(A)*inColor.a;
#if (defined(SM_SOFTTRANSPARENTSHADOW) && SM_SOFTTRANSPARENTSHADOW==1) || (defined(DEPTH_RENDER) && defined(ALPHA_BLENDED_DEPTH))
if (A<-4.) {discard;}
#else
if (A<-inColor.a) {discard;}
#endif
#ifdef DEPTH_RENDER
var opacity : f32=1.0;
#ifdef ALPHA_BLENDED_DEPTH
opacity=alpha;
#endif
return vec4f(fragmentInputs.vDepthMetric,0.0,0.0,opacity);
#else
return vec4f(inColor.rgb,alpha);
#endif
}
#define CUSTOM_FRAGMENT_DEFINITIONS
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {fragmentOutputs.color=checkDiscard(fragmentInputs.vPosition,fragmentInputs.vColor);
#if (defined(SM_SOFTTRANSPARENTSHADOW) && SM_SOFTTRANSPARENTSHADOW==1) || (defined(DEPTH_RENDER) && defined(ALPHA_BLENDED_DEPTH))
var alpha : f32=fragmentOutputs.color.a;
#endif
}
`;B.ShadersStoreWGSL[Tt]||(B.ShadersStoreWGSL[Tt]=Rs);const Et="gaussianSplattingDepthVertexShader",Os=`#include<sceneUboDeclaration>
#include<meshUboDeclaration>
attribute splatIndex0: vec4f;attribute splatIndex1: vec4f;attribute splatIndex2: vec4f;attribute splatIndex3: vec4f;attribute position: vec3f;uniform invViewport: vec2f;uniform dataTextureSize: vec2f;uniform focal: vec2f;uniform kernelSize: f32;uniform alpha: f32;var covariancesATexture: texture_2d<f32>;var covariancesBTexture: texture_2d<f32>;var centersTexture: texture_2d<f32>;var colorsTexture: texture_2d<f32>;
#if IS_COMPOUND
uniform partWorld: array<mat4x4<f32>,MAX_PART_COUNT>;uniform partVisibility: array<f32,MAX_PART_COUNT>;var partIndicesTexture: texture_2d<f32>;
#endif
varying vPosition: vec2f;varying vColor: vec4f;
#ifdef DEPTH_RENDER
uniform depthValues: vec2f;varying vDepthMetric: f32;
#endif
#include<gaussianSplatting>
@vertex
fn main(input : VertexInputs)->FragmentInputs {let splatIndex: f32=getSplatIndex(i32(vertexInputs.position.z+0.5),vertexInputs.splatIndex0,vertexInputs.splatIndex1,vertexInputs.splatIndex2,vertexInputs.splatIndex3);var splat: Splat=readSplat(splatIndex,uniforms.dataTextureSize);var covA: vec3f=splat.covA.xyz;var covB: vec3f=vec3f(splat.covA.w,splat.covB.xy);
#if IS_COMPOUND
let splatWorld: mat4x4f=getPartWorld(splat.partIndex);
#else
let splatWorld: mat4x4f=mesh.world;
#endif
let worldPos: vec4f=splatWorld*vec4f(splat.center.xyz,1.0);vertexOutputs.vPosition=vertexInputs.position.xy;vertexOutputs.vColor=splat.color;vertexOutputs.vColor.w*=uniforms.alpha;
#if IS_COMPOUND
vertexOutputs.vColor.w*=uniforms.partVisibility[splat.partIndex];
#endif
vertexOutputs.position=gaussianSplatting(vertexInputs.position.xy,worldPos.xyz,vec2f(1.0,1.0),covA,covB,splatWorld,scene.view,scene.projection,uniforms.focal,uniforms.invViewport,uniforms.kernelSize);
#ifdef DEPTH_RENDER
#ifdef USE_REVERSE_DEPTHBUFFER
vertexOutputs.vDepthMetric=((-vertexOutputs.position.z+uniforms.depthValues.x)/(uniforms.depthValues.y));
#else
vertexOutputs.vDepthMetric=((vertexOutputs.position.z+uniforms.depthValues.x)/(uniforms.depthValues.y));
#endif
#endif
}`;B.ShadersStoreWGSL[Et]||(B.ShadersStoreWGSL[Et]=Os);const Ce=128;class Us extends ns{constructor(e){super(e),this.FOG=!1,this.THIN_INSTANCES=!0,this.LOGARITHMICDEPTH=!1,this.CLIPPLANE=!1,this.CLIPPLANE2=!1,this.CLIPPLANE3=!1,this.CLIPPLANE4=!1,this.CLIPPLANE5=!1,this.CLIPPLANE6=!1,this.SH_DEGREE=0,this.COMPENSATION=!1,this.IS_COMPOUND=!1,this.MAX_PART_COUNT=Ce,this.rebuild()}}class D extends Yt{constructor(e,t){super(e,t),this.kernelSize=D.KernelSize,this._compensation=D.Compensation,this._isDirty=!1,this._sourceMesh=null,this.backFaceCulling=!1,this.shadowDepthWrapper=D._MakeGaussianSplattingShadowDepthWrapper(t,this.shaderLanguage)}set compensation(e){this._isDirty=this._isDirty!=e,this._compensation=e}get compensation(){return this._compensation}get hasRenderTargetTextures(){return!1}needAlphaTesting(){return!1}needAlphaBlending(){return!0}isReadyForSubMesh(e,t){const s=t._drawWrapper;let a=t.materialDefines;if(a&&this._isDirty&&a.markAsUnprocessed(),s.effect&&this.isFrozen&&s._wasPreviouslyReady&&s._wasPreviouslyUsingInstances===!0)return!0;t.materialDefines||(this._callbackPluginEventGeneric(4,this._eventInfo),a=t.materialDefines=new Us(this._eventInfo.defineNames));const r=this.getScene();if(this._isReadyForSubMesh(t))return!0;if(this._eventInfo.isReadyForSubMesh=!0,this._eventInfo.defines=a,this._eventInfo.subMesh=t,this._callbackPluginEventIsReadyForSubMesh(this._eventInfo),!this._eventInfo.isReadyForSubMesh||!this._sourceMesh)return!1;const o=r.getEngine(),n=this._sourceMesh;$t(e,r,this._useLogarithmicDepth,this.pointsCloud,this.fogEnabled,!1,a,void 0,void 0,void 0,this._isVertexOutputInvariant),Kt(r,o,this,a,!0,null,!0),qt(e,a,!1,!1),(o.version>1||o.isWebGPU)&&(a.SH_DEGREE=n.shDegree),a.IS_COMPOUND=n.isCompound;const u=n.material;if(a.COMPENSATION=u&&u.compensation?u.compensation:D.Compensation,a.isDirty){a.markAsProcessed(),r.resetCachedMaterial(),Jt(D._Attribs,a);const l=D._Attribs.slice(),f=D._Uniforms.slice(),m=D._Samplers.slice(),h=D._UniformBuffers.slice();Qt({uniformsNames:f,uniformBuffersNames:h,samplers:m,defines:a}),es(f),this._uniformBufferLayoutBuilt||this.buildUniformLayout(),this._eventInfo.fallbackRank=0,this._eventInfo.defines=a,this._eventInfo.attributes=l,this._eventInfo.uniforms=f,this._eventInfo.samplers=m,this._eventInfo.uniformBuffersNames=h,this._eventInfo.customCode=void 0,this._eventInfo.mesh=e,this._callbackPluginEventGeneric(128,this._eventInfo);const d=a.toString(),c=r.getEngine().createEffect("gaussianSplatting",{attributes:l,uniformsNames:f,uniformBuffersNames:h,samplers:m,defines:d,onCompiled:this.onCompiled,onError:this.onError,indexParameters:{},processCodeAfterIncludes:this._eventInfo.customCode,shaderLanguage:this._shaderLanguage,extraInitializationsAsync:async()=>{this._shaderLanguage===1?await Promise.all([Promise.resolve().then(()=>Ts),Promise.resolve().then(()=>Ps)]):await Promise.all([Promise.resolve().then(()=>gs),Promise.resolve().then(()=>Ms)])}},o);t.setEffect(c,a,this._materialContext)}return!t.effect||!t.effect.isReady()?!1:(a._renderId=r.getRenderId(),s._wasPreviouslyReady=!0,s._wasPreviouslyUsingInstances=!0,this._isDirty=!1,!0)}setSourceMesh(e){this._sourceMesh=e}static BindEffect(e,t,s){const a=s.getEngine(),r=s.activeCamera,o=a.getRenderWidth()*r.viewport.width,n=a.getRenderHeight()*r.viewport.height,u=e.material;if(!u._sourceMesh)return;const l=u._sourceMesh,f=r?.rigParent?.rigCameras.length||1;t.setFloat2("invViewport",1/(o/f),1/n);let m=1e3;if(r){const h=r.getProjectionMatrix().m[5];r.fovMode==Ie.FOVMODE_VERTICAL_FIXED?m=n*h/2:m=o*h/2}if(t.setFloat2("focal",m,m),t.setFloat("kernelSize",u&&u.kernelSize?u.kernelSize:D.KernelSize),t.setFloat("alpha",u.alpha),s.bindEyePosition(t,"eyePosition",!0),l.covariancesATexture){const h=l.covariancesATexture.getSize();if(t.setFloat2("dataTextureSize",h.width,h.height),t.setTexture("covariancesATexture",l.covariancesATexture),t.setTexture("covariancesBTexture",l.covariancesBTexture),t.setTexture("centersTexture",l.centersTexture),t.setTexture("colorsTexture",l.colorsTexture),l.shTextures)for(let d=0;d<l.shTextures?.length;d++)t.setTexture(`shTexture${d}`,l.shTextures[d]);if(l.partIndicesTexture){t.setTexture("partIndicesTexture",l.partIndicesTexture);const d=new Float32Array(l.partCount*16);for(let _=0;_<l.partCount;_++)l.getWorldMatrixForPart(_).toArray(d,_*16);t.setMatrices("partWorld",d);const c=[];for(let _=0;_<l.partCount;_++)c.push(l.partVisibility[_]??1);t.setArray("partVisibility",c)}}}bindForSubMesh(e,t,s){const a=this.getScene(),r=s.materialDefines;if(!r)return;const o=s.effect;o&&(this._activeEffect=o,t.getMeshUniformBuffer().bindToEffect(o,"Mesh"),t.transferToEffect(e),this._mustRebind(a,o,s,t.visibility)?(this.bindView(o),this.bindViewProjection(o),D.BindEffect(t,this._activeEffect,a),ts(o,this,a)):a.getEngine()._features.needToAlwaysBindUniformBuffers&&(this._needToBindSceneUbo=!0),ss(a,t,o),this.useLogarithmicDepth&&rs(r,o,a),this._eventInfo.subMesh=s,this._callbackPluginEventBindForSubMesh(this._eventInfo),this._afterBind(t,this._activeEffect,s))}static _BindEffectUniforms(e,t,s,a){const r=a.getEngine(),o=s.getEffect(),n=a.activeCamera;if(!n)return;e.getMeshUniformBuffer().bindToEffect(o,"Mesh"),s.bindView(o),s.bindViewProjection(o);const u=r.getRenderWidth()*n.viewport.width,l=r.getRenderHeight()*n.viewport.height;o.setFloat2("invViewport",1/u,1/l);let f=1e3;if(n){const d=n.getProjectionMatrix().m[5];n.fovMode==Ie.FOVMODE_VERTICAL_FIXED?f=l*d/2:f=u*d/2}o.setFloat2("focal",f,f),o.setFloat("kernelSize",t&&t.kernelSize?t.kernelSize:D.KernelSize),o.setFloat("alpha",t.alpha);let m,h;if(n.mode===Ie.ORTHOGRAPHIC_CAMERA?(m=!r.useReverseDepthBuffer&&r.isNDCHalfZRange?0:1,h=r.useReverseDepthBuffer&&r.isNDCHalfZRange?0:1):(m=r.useReverseDepthBuffer&&r.isNDCHalfZRange?n.minZ:r.isNDCHalfZRange?0:n.minZ,h=r.useReverseDepthBuffer&&r.isNDCHalfZRange?0:n.maxZ),o.setFloat2("depthValues",m,m+h),e.covariancesATexture){const d=e.covariancesATexture.getSize();if(o.setFloat2("dataTextureSize",d.width,d.height),o.setTexture("covariancesATexture",e.covariancesATexture),o.setTexture("covariancesBTexture",e.covariancesBTexture),o.setTexture("centersTexture",e.centersTexture),o.setTexture("colorsTexture",e.colorsTexture),e.partIndicesTexture){o.setTexture("partIndicesTexture",e.partIndicesTexture);const c=new Float32Array(e.partCount*16);for(let I=0;I<e.partCount;I++)e.getWorldMatrixForPart(I).toArray(c,I*16);o.setMatrices("partWorld",c);const _=[];for(let I=0;I<e.partCount;I++)_.push(e.partVisibility[I]??1);o.setArray("partVisibility",_)}}}makeDepthRenderingMaterial(e,t,s=!1,a=!1){const r=["#define DEPTH_RENDER"];s&&r.push("#define ALPHA_BLENDED_DEPTH"),a&&(r.push("#define IS_COMPOUND"),r.push(`#define MAX_PART_COUNT ${Ce}`));const o=new vt("gaussianSplattingDepthRender",e,{vertex:"gaussianSplattingDepth",fragment:"gaussianSplattingDepth"},{attributes:D._Attribs,uniforms:D._Uniforms,samplers:D._Samplers,uniformBuffers:D._UniformBuffers,shaderLanguage:t,defines:r,needAlphaBlending:s});return o.onBindObservable.add(n=>{const u=n.material,l=n;D._BindEffectUniforms(l,u,o,e)}),o}static _MakeGaussianSplattingShadowDepthWrapper(e,t){const s=new vt("gaussianSplattingDepth",e,{vertex:"gaussianSplattingDepth",fragment:"gaussianSplattingDepth"},{attributes:D._Attribs,uniforms:D._Uniforms,samplers:D._Samplers,uniformBuffers:D._UniformBuffers,shaderLanguage:t}),a=new xs(s,e,{standalone:!0});return s.onBindObservable.add(r=>{const o=r.material,n=r;D._BindEffectUniforms(n,o,s,e)}),a}clone(e){const t=xt.Clone(()=>new D(e,this.getScene()),this);return t.id=e,t.name=e,this._clonePlugins(t,""),t}serialize(){const e=super.serialize();return e.customType="BABYLON.GaussianSplattingMaterial",e}getClassName(){return"GaussianSplattingMaterial"}static Parse(e,t,s){const a=xt.Parse(()=>new D(e.name,t),e,t,s);return as._ParsePlugins(e,a,t,s),a}}D.KernelSize=.3;D.Compensation=!1;D._Attribs=[Y.PositionKind,"splatIndex0","splatIndex1","splatIndex2","splatIndex3"];D._Samplers=["covariancesATexture","covariancesBTexture","centersTexture","colorsTexture","shTexture0","shTexture1","shTexture2","partIndicesTexture"];D._UniformBuffers=["Scene","Mesh"];D._Uniforms=["world","view","projection","vFogInfos","vFogColor","logarithmicDepthConstant","invViewport","dataTextureSize","focal","eyePosition","kernelSize","alpha","depthValues","partWorld","partVisibility"];hs("BABYLON.GaussianSplattingMaterial",D);const ks=Wt,j={...Lt,TwoPi:Math.PI*2,Sign:Math.sign,Log2:Math.log2,HCF:ks};class Hs extends fe{get partIndex(){return this._partIndex}constructor(e,t,s,a,r){super(e,t),this.proxiedMesh=a,this._partIndex=r,this.compoundSplatMesh=s,this.updateBoundingInfoFromProxiedMesh(),this.compoundSplatMesh.setWorldMatrixForPart(this.partIndex,this.getWorldMatrix()),this.onAfterWorldMatrixUpdateObservable.add(()=>{this.compoundSplatMesh.setWorldMatrixForPart(this.partIndex,this.getWorldMatrix()),this.updateBoundingInfoFromProxiedMesh()})}updateBoundingInfoFromProxiedMesh(){const e=this.proxiedMesh.getBoundingInfo();this.setBoundingInfo(new is(e.minimum.clone(),e.maximum.clone()))}getClassName(){return"GaussianSplattingPartProxyMesh"}updatePartIndex(e){this._partIndex=e}get isVisible(){return this.compoundSplatMesh.getPartVisibility(this.partIndex)>0}set isVisible(e){this.compoundSplatMesh.setPartVisibility(this.partIndex,e?1:0)}get visibility(){return this.compoundSplatMesh.getPartVisibility(this.partIndex)}set visibility(e){this.compoundSplatMesh.setPartVisibility(this.partIndex,e)}intersects(e){const t=new os,s=this.getBoundingInfo();return!s||!e.intersectsSphere(s.boundingSphere)||!e.intersectsBox(s.boundingBox)||(t.hit=!0,t.pickedMesh=this,t.distance=E.Distance(e.origin,s.boundingSphere.center),t.subMeshId=0),t}}const Ne=typeof _native<"u",Ue=Ne?_native:null,K=(i,e)=>{const t=(1<<e)-1;return(i&t)/t},At=(i,e)=>{e.x=K(i>>>21,11),e.y=K(i>>>11,10),e.z=K(i,11)},Vs=(i,e)=>{e[0]=K(i>>>24,8)*255,e[1]=K(i>>>16,8)*255,e[2]=K(i>>>8,8)*255,e[3]=K(i,8)*255},Fs=(i,e)=>{const t=1/(Math.sqrt(2)*.5),s=(K(i>>>20,10)-.5)*t,a=(K(i>>>10,10)-.5)*t,r=(K(i,10)-.5)*t,o=Math.sqrt(1-(s*s+a*a+r*r));switch(i>>>30){case 0:e.set(o,s,a,r);break;case 1:e.set(s,o,a,r);break;case 2:e.set(s,a,o,r);break;case 3:e.set(s,a,r,o);break}};var Pt;(function(i){i[i.FLOAT=0]="FLOAT",i[i.INT=1]="INT",i[i.UINT=2]="UINT",i[i.DOUBLE=3]="DOUBLE",i[i.UCHAR=4]="UCHAR",i[i.UNDEFINED=5]="UNDEFINED"})(Pt||(Pt={}));var Dt;(function(i){i[i.MIN_X=0]="MIN_X",i[i.MIN_Y=1]="MIN_Y",i[i.MIN_Z=2]="MIN_Z",i[i.MAX_X=3]="MAX_X",i[i.MAX_Y=4]="MAX_Y",i[i.MAX_Z=5]="MAX_Z",i[i.MIN_SCALE_X=6]="MIN_SCALE_X",i[i.MIN_SCALE_Y=7]="MIN_SCALE_Y",i[i.MIN_SCALE_Z=8]="MIN_SCALE_Z",i[i.MAX_SCALE_X=9]="MAX_SCALE_X",i[i.MAX_SCALE_Y=10]="MAX_SCALE_Y",i[i.MAX_SCALE_Z=11]="MAX_SCALE_Z",i[i.PACKED_POSITION=12]="PACKED_POSITION",i[i.PACKED_ROTATION=13]="PACKED_ROTATION",i[i.PACKED_SCALE=14]="PACKED_SCALE",i[i.PACKED_COLOR=15]="PACKED_COLOR",i[i.X=16]="X",i[i.Y=17]="Y",i[i.Z=18]="Z",i[i.SCALE_0=19]="SCALE_0",i[i.SCALE_1=20]="SCALE_1",i[i.SCALE_2=21]="SCALE_2",i[i.DIFFUSE_RED=22]="DIFFUSE_RED",i[i.DIFFUSE_GREEN=23]="DIFFUSE_GREEN",i[i.DIFFUSE_BLUE=24]="DIFFUSE_BLUE",i[i.OPACITY=25]="OPACITY",i[i.F_DC_0=26]="F_DC_0",i[i.F_DC_1=27]="F_DC_1",i[i.F_DC_2=28]="F_DC_2",i[i.F_DC_3=29]="F_DC_3",i[i.ROT_0=30]="ROT_0",i[i.ROT_1=31]="ROT_1",i[i.ROT_2=32]="ROT_2",i[i.ROT_3=33]="ROT_3",i[i.MIN_COLOR_R=34]="MIN_COLOR_R",i[i.MIN_COLOR_G=35]="MIN_COLOR_G",i[i.MIN_COLOR_B=36]="MIN_COLOR_B",i[i.MAX_COLOR_R=37]="MAX_COLOR_R",i[i.MAX_COLOR_G=38]="MAX_COLOR_G",i[i.MAX_COLOR_B=39]="MAX_COLOR_B",i[i.SH_0=40]="SH_0",i[i.SH_1=41]="SH_1",i[i.SH_2=42]="SH_2",i[i.SH_3=43]="SH_3",i[i.SH_4=44]="SH_4",i[i.SH_5=45]="SH_5",i[i.SH_6=46]="SH_6",i[i.SH_7=47]="SH_7",i[i.SH_8=48]="SH_8",i[i.SH_9=49]="SH_9",i[i.SH_10=50]="SH_10",i[i.SH_11=51]="SH_11",i[i.SH_12=52]="SH_12",i[i.SH_13=53]="SH_13",i[i.SH_14=54]="SH_14",i[i.SH_15=55]="SH_15",i[i.SH_16=56]="SH_16",i[i.SH_17=57]="SH_17",i[i.SH_18=58]="SH_18",i[i.SH_19=59]="SH_19",i[i.SH_20=60]="SH_20",i[i.SH_21=61]="SH_21",i[i.SH_22=62]="SH_22",i[i.SH_23=63]="SH_23",i[i.SH_24=64]="SH_24",i[i.SH_25=65]="SH_25",i[i.SH_26=66]="SH_26",i[i.SH_27=67]="SH_27",i[i.SH_28=68]="SH_28",i[i.SH_29=69]="SH_29",i[i.SH_30=70]="SH_30",i[i.SH_31=71]="SH_31",i[i.SH_32=72]="SH_32",i[i.SH_33=73]="SH_33",i[i.SH_34=74]="SH_34",i[i.SH_35=75]="SH_35",i[i.SH_36=76]="SH_36",i[i.SH_37=77]="SH_37",i[i.SH_38=78]="SH_38",i[i.SH_39=79]="SH_39",i[i.SH_40=80]="SH_40",i[i.SH_41=81]="SH_41",i[i.SH_42=82]="SH_42",i[i.SH_43=83]="SH_43",i[i.SH_44=84]="SH_44",i[i.UNDEFINED=85]="UNDEFINED"})(Dt||(Dt={}));class A extends fe{get disableDepthSort(){return this._disableDepthSort}set disableDepthSort(e){!this._disableDepthSort&&e?(this._worker?.terminate(),this._worker=null,this._disableDepthSort=!0):this._disableDepthSort&&!e&&(this._disableDepthSort=!1,this._sortIsDirty=!0,this._instanciateWorker())}get viewDirectionFactor(){return E.OneReadOnly}get shDegree(){return this._shDegree}get splatCount(){return this._splatIndex?.length}get splatsData(){return this._splatsData}get shData(){return this._shData}get isCompound(){return this._partMatrices.length>0}get partIndices(){return this._partIndices}get partIndicesTexture(){return this._partIndicesTexture}get partVisibility(){return this._partVisibility}get covariancesATexture(){return this._covariancesATexture}get covariancesBTexture(){return this._covariancesBTexture}get centersTexture(){return this._centersTexture}get colorsTexture(){return this._colorsTexture}get shTextures(){return this._shTextures}get kernelSize(){return this._material instanceof D?this._material.kernelSize:0}get compensation(){return this._material instanceof D?this._material.compensation:!1}set material(e){this._material=e,this._material.backFaceCulling=!1,this._material.cullBackFaces=!1,e.resetDrawCache()}get material(){return this._material}static _MakeSplatGeometryForMesh(e){const t=new Le,s=[-2,-2,0,2,-2,0,2,2,0,-2,2,0],a=[0,1,2,0,2,3],r=[],o=[];for(let n=0;n<A._BatchSize;n++){for(let u=0;u<12;u++)u==2||u==5||u==8||u==11?r.push(n):r.push(s[u]);o.push(a.map(u=>u+n*4))}t.positions=r,t.indices=o.flat(),t.applyToMesh(e)}constructor(e,t=null,s=null,a=!1){super(e,s),this._vertexCount=0,this._worker=null,this._modelViewProjectionMatrix=ue.Identity(),this._viewProjectionMatrix=ue.Identity(),this._canPostToWorker=!0,this._readyToDisplay=!1,this._covariancesATexture=null,this._covariancesBTexture=null,this._centersTexture=null,this._colorsTexture=null,this._splatPositions=null,this._splatIndex=null,this._shTextures=null,this._splatsData=null,this._shData=null,this._partIndicesTexture=null,this._partIndices=null,this._partMatrices=[],this._partVisibility=[],this._partProxies=new Map,this._textureSize=new Q(0,0),this._keepInRam=!1,this._delayedTextureUpdate=null,this._useRGBACovariants=!1,this._material=null,this._tmpCovariances=[0,0,0,0,0,0],this._sortIsDirty=!1,this._shDegree=0,this._cameraViewInfos=new Map,this.viewUpdateThreshold=A._DefaultViewUpdateThreshold,this._disableDepthSort=!1,this._loadingPromise=null,this.subMeshes=[],new Gt(0,0,4*A._BatchSize,0,6*A._BatchSize,this),this.setEnabled(!1),this._useRGBACovariants=!this.getEngine().isWebGPU&&this.getEngine().version===1,this._keepInRam=a,t&&(this._loadingPromise=this.loadFileAsync(t));const r=new D(this.name+"_material",this._scene);r.setSourceMesh(this),this._material=r,this._scene.onCameraRemovedObservable.add(o=>{const n=o.uniqueId;this._cameraViewInfos.has(n)&&(this._cameraViewInfos.get(n)?.mesh.dispose(),this._cameraViewInfos.delete(n))})}getLoadingPromise(){return this._loadingPromise}getClassName(){return"GaussianSplattingMesh"}getTotalVertices(){return this._vertexCount}isReady(e=!1){return super.isReady(e,!0)?this._readyToDisplay?!0:(this._postToWorker(!0),!1):!1}_getCameraDirection(e){const t=e.getViewMatrix(),s=e.getProjectionMatrix(),a=G.Matrix[0];t.multiplyToRef(s,a),this._viewProjectionMatrix.copyFrom(a);const r=G.Matrix[1];this.getWorldMatrix().multiplyToRef(t,r),r.multiplyToRef(s,this._modelViewProjectionMatrix);const o=G.Vector3[1];return o.set(r.m[2],r.m[6],r.m[10]),o.normalize(),o}_postToWorker(e=!1){const t=this._scene.getFrameId();let s=!1;this._cameraViewInfos.forEach(n=>{n.frameIdLastUpdate!==t&&(s=!0)});const a=this._scene.activeCameras?.length?this._scene.activeCameras:[this._scene.activeCamera],r=[];a.forEach(n=>{if(!n)return;const u=n.uniqueId,l=this._cameraViewInfos.get(u);if(l)r.push(l);else{const f=new fe(this.name+"_cameraMesh_"+u,this._scene);f.reservedDataStore={hidden:!0},f.setEnabled(!1),f.material=this.material,A._MakeSplatGeometryForMesh(f);const m={camera:n,cameraDirection:new E(0,0,0),mesh:f,frameIdLastUpdate:t,splatIndexBufferSet:!1};r.push(m),this._cameraViewInfos.set(u,m)}}),r.sort((n,u)=>n.frameIdLastUpdate-u.frameIdLastUpdate);const o=this._worker||Ue?.sortSplats||this._disableDepthSort;(e||s)&&o&&(this._scene.activeCameras?.length||this._scene.activeCamera)&&this._canPostToWorker?r.forEach(n=>{const u=n.camera,l=this._getCameraDirection(u),f=n.cameraDirection,m=E.Dot(l,f);(e||Math.abs(m-1)>=this.viewUpdateThreshold)&&this._canPostToWorker&&(n.cameraDirection.copyFrom(l),n.frameIdLastUpdate=t,this._canPostToWorker=!1,this._worker?this._worker.postMessage({modelViewProjection:this._modelViewProjectionMatrix.m,viewProjection:this._viewProjectionMatrix.m,depthMix:this._depthMix,cameraId:u.uniqueId,depthScale:u.mode===Ie.ORTHOGRAPHIC_CAMERA?(u.maxZ-u.minZ)/2:1},[this._depthMix.buffer]):Ue?.sortSplats&&(Ue.sortSplats(this._modelViewProjectionMatrix,this._splatPositions,this._splatIndex,this._scene.useRightHandedSystem),n.splatIndexBufferSet?n.mesh.thinInstanceBufferUpdated("splatIndex"):(n.mesh.thinInstanceSetBuffer("splatIndex",this._splatIndex,16,!1),n.splatIndexBufferSet=!0),this._canPostToWorker=!0,this._readyToDisplay=!0))}):this._disableDepthSort&&(r.forEach(n=>{n.splatIndexBufferSet||(n.mesh.thinInstanceSetBuffer("splatIndex",this._splatIndex,16,!1),n.splatIndexBufferSet=!0)}),this._canPostToWorker=!0,this._readyToDisplay=!0)}render(e,t,s){this._postToWorker(),!this._geometry&&this._cameraViewInfos.size&&(this._geometry=this._cameraViewInfos.values().next().value.mesh.geometry);const a=this._scene.activeCamera.uniqueId,r=this._cameraViewInfos.get(a);if(!r||!r.splatIndexBufferSet)return this;this.onBeforeRenderObservable&&this.onBeforeRenderObservable.notifyObservers(this);const o=r.mesh;o.getWorldMatrix().copyFrom(this.getWorldMatrix());const n=this._scene.getEngine().currentRenderPassId,u=this.getMaterialForRenderPass(n);u&&o.setMaterialForRenderPass(n,u);const l=o.render(e,t,s);return u&&o.setMaterialForRenderPass(n,void 0),this.onAfterRenderObservable&&this.onAfterRenderObservable.notifyObservers(this),l}static _TypeNameToEnum(e){switch(e){case"float":return 0;case"int":return 1;case"uint":return 2;case"double":return 3;case"uchar":return 4}return 5}static _ValueNameToEnum(e){switch(e){case"min_x":return 0;case"min_y":return 1;case"min_z":return 2;case"max_x":return 3;case"max_y":return 4;case"max_z":return 5;case"min_scale_x":return 6;case"min_scale_y":return 7;case"min_scale_z":return 8;case"max_scale_x":return 9;case"max_scale_y":return 10;case"max_scale_z":return 11;case"packed_position":return 12;case"packed_rotation":return 13;case"packed_scale":return 14;case"packed_color":return 15;case"x":return 16;case"y":return 17;case"z":return 18;case"scale_0":return 19;case"scale_1":return 20;case"scale_2":return 21;case"diffuse_red":case"red":return 22;case"diffuse_green":case"green":return 23;case"diffuse_blue":case"blue":return 24;case"f_dc_0":return 26;case"f_dc_1":return 27;case"f_dc_2":return 28;case"f_dc_3":return 29;case"opacity":return 25;case"rot_0":return 30;case"rot_1":return 31;case"rot_2":return 32;case"rot_3":return 33;case"min_r":return 34;case"min_g":return 35;case"min_b":return 36;case"max_r":return 37;case"max_g":return 38;case"max_b":return 39;case"f_rest_0":return 40;case"f_rest_1":return 41;case"f_rest_2":return 42;case"f_rest_3":return 43;case"f_rest_4":return 44;case"f_rest_5":return 45;case"f_rest_6":return 46;case"f_rest_7":return 47;case"f_rest_8":return 48;case"f_rest_9":return 49;case"f_rest_10":return 50;case"f_rest_11":return 51;case"f_rest_12":return 52;case"f_rest_13":return 53;case"f_rest_14":return 54;case"f_rest_15":return 55;case"f_rest_16":return 56;case"f_rest_17":return 57;case"f_rest_18":return 58;case"f_rest_19":return 59;case"f_rest_20":return 60;case"f_rest_21":return 61;case"f_rest_22":return 62;case"f_rest_23":return 63;case"f_rest_24":return 64;case"f_rest_25":return 65;case"f_rest_26":return 66;case"f_rest_27":return 67;case"f_rest_28":return 68;case"f_rest_29":return 69;case"f_rest_30":return 70;case"f_rest_31":return 71;case"f_rest_32":return 72;case"f_rest_33":return 73;case"f_rest_34":return 74;case"f_rest_35":return 75;case"f_rest_36":return 76;case"f_rest_37":return 77;case"f_rest_38":return 78;case"f_rest_39":return 79;case"f_rest_40":return 80;case"f_rest_41":return 81;case"f_rest_42":return 82;case"f_rest_43":return 83;case"f_rest_44":return 84}return 85}static ParseHeader(e){const t=new Uint8Array(e),s=new TextDecoder().decode(t.slice(0,1024*10)),a=`end_header
`,r=s.indexOf(a);if(r<0||!s)return null;const o=parseInt(/element vertex (\d+)\n/.exec(s)[1]),n=/element chunk (\d+)\n/.exec(s);let u=0;n&&(u=parseInt(n[1]));let l=0,f=0;const m={double:8,int:4,uint:4,float:4,short:2,ushort:2,uchar:1,list:0};let h;(function(w){w[w.Vertex=0]="Vertex",w[w.Chunk=1]="Chunk",w[w.SH=2]="SH",w[w.Unused=3]="Unused"})(h||(h={}));let d=1;const c=[],_=[],I=s.slice(0,r).split(`
`);let p=0;for(const w of I)if(w.startsWith("property ")){const[,x,S]=w.split(" "),T=A._ValueNameToEnum(S);T!=85&&(T>=84?p=3:T>=64?p=Math.max(p,2):T>=48&&(p=Math.max(p,1)));const z=A._TypeNameToEnum(x);d==1?(_.push({value:T,type:z,offset:f}),f+=m[x]):d==0?(c.push({value:T,type:z,offset:l}),l+=m[x]):d==2&&c.push({value:T,type:z,offset:l}),m[x]||ae.Warn(`Unsupported property type: ${x}.`)}else if(w.startsWith("element ")){const[,x]=w.split(" ");x=="chunk"?d=1:x=="vertex"?d=0:x=="sh"?d=2:d=3}const v=new DataView(e,r+a.length),g=new ArrayBuffer(A._RowOutputLength*o);let M=null,y=0;return p&&(y=((p+1)*(p+1)-1)*3,M=new ArrayBuffer(y*o)),{vertexCount:o,chunkCount:u,rowVertexLength:l,rowChunkLength:f,vertexProperties:c,chunkProperties:_,dataView:v,buffer:g,shDegree:p,shCoefficientCount:y,shBuffer:M}}static _GetCompressedChunks(e,t){if(!e.chunkCount)return null;const s=e.dataView,a=new Array(e.chunkCount);for(let r=0;r<e.chunkCount;r++){const o={min:new E,max:new E,minScale:new E,maxScale:new E,minColor:new E(0,0,0),maxColor:new E(1,1,1)};a[r]=o;for(let n=0;n<e.chunkProperties.length;n++){const u=e.chunkProperties[n];let l;if(u.type===0)l=s.getFloat32(u.offset+t.value,!0);else continue;switch(u.value){case 0:o.min.x=l;break;case 1:o.min.y=l;break;case 2:o.min.z=l;break;case 3:o.max.x=l;break;case 4:o.max.y=l;break;case 5:o.max.z=l;break;case 6:o.minScale.x=l;break;case 7:o.minScale.y=l;break;case 8:o.minScale.z=l;break;case 9:o.maxScale.x=l;break;case 10:o.maxScale.y=l;break;case 11:o.maxScale.z=l;break;case 34:o.minColor.x=l;break;case 35:o.minColor.y=l;break;case 36:o.minColor.z=l;break;case 37:o.maxColor.x=l;break;case 38:o.maxColor.y=l;break;case 39:o.maxColor.z=l;break}}t.value+=e.rowChunkLength}return a}static _GetSplat(e,t,s,a){const r=G.Quaternion[0],o=G.Vector3[0],n=A._RowOutputLength,u=e.buffer,l=e.dataView,f=new Float32Array(u,t*n,3),m=new Float32Array(u,t*n+12,3),h=new Uint8ClampedArray(u,t*n+24,4),d=new Uint8ClampedArray(u,t*n+28,4);let c=null;e.shBuffer&&(c=new Uint8ClampedArray(e.shBuffer,t*e.shCoefficientCount,e.shCoefficientCount));const _=t>>8;let I=255,p=0,v=0,g=0;const M=[];for(let y=0;y<e.vertexProperties.length;y++){const w=e.vertexProperties[y];let x;switch(w.type){case 0:x=l.getFloat32(a.value+w.offset,!0);break;case 1:x=l.getInt32(a.value+w.offset,!0);break;case 2:x=l.getUint32(a.value+w.offset,!0);break;case 3:x=l.getFloat64(a.value+w.offset,!0);break;case 4:x=l.getUint8(a.value+w.offset);break;default:continue}switch(w.value){case 12:{const S=s[_];At(x,o),f[0]=j.Lerp(S.min.x,S.max.x,o.x),f[1]=j.Lerp(S.min.y,S.max.y,o.y),f[2]=j.Lerp(S.min.z,S.max.z,o.z)}break;case 13:Fs(x,r),I=r.x,p=r.y,v=r.z,g=r.w;break;case 14:{const S=s[_];At(x,o),m[0]=Math.exp(j.Lerp(S.minScale.x,S.maxScale.x,o.x)),m[1]=Math.exp(j.Lerp(S.minScale.y,S.maxScale.y,o.y)),m[2]=Math.exp(j.Lerp(S.minScale.z,S.maxScale.z,o.z))}break;case 15:{const S=s[_];Vs(x,h),h[0]=j.Lerp(S.minColor.x,S.maxColor.x,h[0]/255)*255,h[1]=j.Lerp(S.minColor.y,S.maxColor.y,h[1]/255)*255,h[2]=j.Lerp(S.minColor.z,S.maxColor.z,h[2]/255)*255}break;case 16:f[0]=x;break;case 17:f[1]=x;break;case 18:f[2]=x;break;case 19:m[0]=Math.exp(x);break;case 20:m[1]=Math.exp(x);break;case 21:m[2]=Math.exp(x);break;case 22:h[0]=x;break;case 23:h[1]=x;break;case 24:h[2]=x;break;case 26:h[0]=(.5+A._SH_C0*x)*255;break;case 27:h[1]=(.5+A._SH_C0*x)*255;break;case 28:h[2]=(.5+A._SH_C0*x)*255;break;case 29:h[3]=(.5+A._SH_C0*x)*255;break;case 25:h[3]=1/(1+Math.exp(-x))*255;break;case 30:I=x;break;case 31:p=x;break;case 32:v=x;break;case 33:g=x;break}if(c&&w.value>=40&&w.value<=84){const S=w.value-40;if(w.type==4&&e.chunkCount){const T=l.getUint8(e.rowChunkLength*e.chunkCount+e.vertexCount*e.rowVertexLength+t*e.shCoefficientCount+S);M[S]=(T*(8/255)-4)*127.5+127.5}else{const T=j.Clamp(x*127.5+127.5,0,255);M[S]=T}}}if(c){const y=e.shDegree==1?3:e.shDegree==2?8:15;for(let w=0;w<y;w++)c[w*3+0]=M[w],c[w*3+1]=M[w+y],c[w*3+2]=M[w+y*2]}r.set(p,v,g,I),r.normalize(),d[0]=r.w*127.5+127.5,d[1]=r.x*127.5+127.5,d[2]=r.y*127.5+127.5,d[3]=r.z*127.5+127.5,a.value+=e.rowVertexLength}static*ConvertPLYWithSHToSplat(e,t=!1){const s=A.ParseHeader(e);if(!s)return{buffer:e};const a={value:0},r=A._GetCompressedChunks(s,a);for(let n=0;n<s.vertexCount;n++)A._GetSplat(s,n,r,a),n%A._PlyConversionBatchSize===0&&t&&(yield);let o=null;if(s.shDegree&&s.shBuffer){const n=Math.ceil(s.shCoefficientCount/16);let u=0;const l=new Uint8Array(s.shBuffer);o=[];const f=s.vertexCount,m=Me.LastCreatedEngine;if(m){const h=m.getCaps().maxTextureSize,d=Math.ceil(f/h);for(let c=0;c<n;c++){const _=new Uint8Array(d*h*4*4);o.push(_)}for(let c=0;c<f;c++)for(let _=0;_<s.shCoefficientCount;_++){const I=l[u++],p=Math.floor(_/16),v=o[p],g=_%16,M=c*16;v[g+M]=I}}}return{buffer:s.buffer,sh:o}}static*ConvertPLYToSplat(e,t=!1){const s=A.ParseHeader(e);if(!s)return e;const a={value:0},r=A._GetCompressedChunks(s,a);for(let o=0;o<s.vertexCount;o++)A._GetSplat(s,o,r,a),o%A._PlyConversionBatchSize===0&&t&&(yield);return s.buffer}static async ConvertPLYToSplatAsync(e){return await Re(A.ConvertPLYToSplat(e,!0),Oe())}static async ConvertPLYWithSHToSplatAsync(e){return await Re(A.ConvertPLYWithSHToSplat(e,!0),Oe())}async loadDataAsync(e){return await this.updateDataAsync(e)}async loadFileAsync(e,t){await jt(e,t||Me.LastCreatedScene,{pluginOptions:{splat:{gaussianSplattingMesh:this}}})}dispose(e){if(this._covariancesATexture?.dispose(),this._covariancesBTexture?.dispose(),this._centersTexture?.dispose(),this._colorsTexture?.dispose(),this._shTextures)for(const t of this._shTextures)t.dispose();this._partIndicesTexture&&this._partIndicesTexture.dispose(),this._covariancesATexture=null,this._covariancesBTexture=null,this._centersTexture=null,this._colorsTexture=null,this._shTextures=null,this._partIndicesTexture=null,this._partMatrices=[],this._worker?.terminate(),this._worker=null,this._cameraViewInfos.forEach(t=>{t.mesh.dispose()}),this._partProxies.forEach(t=>{t.dispose()}),this._partProxies.clear(),super.dispose(e,!0)}_copyTextures(e){if(this._covariancesATexture=e.covariancesATexture?.clone(),this._covariancesBTexture=e.covariancesBTexture?.clone(),this._centersTexture=e.centersTexture?.clone(),this._colorsTexture=e.colorsTexture?.clone(),this._partIndicesTexture=e._partIndicesTexture?.clone(),e._shTextures){this._shTextures=[];for(const t of e._shTextures)this._shTextures?.push(t.clone())}}clone(e=""){const t=new A(e,void 0,this.getScene());t._copySource(this),t.makeGeometryUnique(),t._vertexCount=this._vertexCount,t._copyTextures(this),t._modelViewProjectionMatrix=ue.Identity(),t._viewProjectionMatrix=ue.Identity(),t._splatPositions=this._splatPositions,t._readyToDisplay=!1,t._disableDepthSort=this._disableDepthSort,t._partMatrices=this._partMatrices.map(a=>a.clone()),t._instanciateWorker();const s=this.getBoundingInfo();return t.getBoundingInfo().reConstruct(s.minimum,s.maximum,this.getWorldMatrix()),t.forcedInstanceCount=this.forcedInstanceCount,t.setEnabled(!0),t}_makeEmptySplat(e,t,s,a){const r=this._useRGBACovariants?4:2;this._splatPositions[4*e+0]=0,this._splatPositions[4*e+1]=0,this._splatPositions[4*e+2]=0,t[e*4+0]=Z(0),t[e*4+1]=Z(0),t[e*4+2]=Z(0),t[e*4+3]=Z(0),s[e*r+0]=Z(0),s[e*r+1]=Z(0),a[e*4+3]=0}_makeSplat(e,t,s,a,r,o,n,u,l){const f=G.Matrix[0],m=G.Matrix[1],h=G.Quaternion[0],d=this._useRGBACovariants?4:2,c=t[8*e+0],_=t[8*e+1]*(l.flipY?-1:1),I=t[8*e+2];this._splatPositions[4*e+0]=c,this._splatPositions[4*e+1]=_,this._splatPositions[4*e+2]=I,n.minimizeInPlaceFromFloats(c,_,I),u.maximizeInPlaceFromFloats(c,_,I),h.set((s[32*e+28+1]-127.5)/127.5,(s[32*e+28+2]-127.5)/127.5,(s[32*e+28+3]-127.5)/127.5,-(s[32*e+28+0]-127.5)/127.5),h.normalize(),h.toRotationMatrix(f),ue.ScalingToRef(t[8*e+3+0]*2,t[8*e+3+1]*2,t[8*e+3+2]*2,m);const p=f.multiplyToRef(m,G.Matrix[0]).m,v=this._tmpCovariances;v[0]=p[0]*p[0]+p[1]*p[1]+p[2]*p[2],v[1]=p[0]*p[4]+p[1]*p[5]+p[2]*p[6],v[2]=p[0]*p[8]+p[1]*p[9]+p[2]*p[10],v[3]=p[4]*p[4]+p[5]*p[5]+p[6]*p[6],v[4]=p[4]*p[8]+p[5]*p[9]+p[6]*p[10],v[5]=p[8]*p[8]+p[9]*p[9]+p[10]*p[10];let g=-1e4;for(let y=0;y<6;y++)g=Math.max(g,Math.abs(v[y]));this._splatPositions[4*e+3]=g;const M=g;a[e*4+0]=Z(v[0]/M),a[e*4+1]=Z(v[1]/M),a[e*4+2]=Z(v[2]/M),a[e*4+3]=Z(v[3]/M),r[e*d+0]=Z(v[4]/M),r[e*d+1]=Z(v[5]/M),o[e*4+0]=s[32*e+24+0],o[e*4+1]=s[32*e+24+1],o[e*4+2]=s[32*e+24+2],o[e*4+3]=s[32*e+24+3]}_updateTextures(e,t,s,a,r){const o=this._getTextureSize(this._vertexCount),n=(d,c,_,I)=>new we(d,c,_,I,this._scene,!1,!1,2,1),u=(d,c,_,I)=>new we(d,c,_,I,this._scene,!1,!1,2,0),l=(d,c,_,I)=>new we(d,c,_,I,this._scene,!1,!1,1,7),f=(d,c,_,I)=>new we(d,c,_,I,this._scene,!1,!1,2,2),m=this._covariancesATexture===null,h=this._textureSize.y!=o.y;if(!m&&!h){this._delayedTextureUpdate={covA:e,covB:t,colors:s,centers:this._splatPositions,sh:a,partIndices:r};const d=Float32Array.from(this._splatPositions),c=this._vertexCount;if(this._worker&&this._worker.postMessage({positions:d,vertexCount:c},[d.buffer]),a&&!this._shTextures){this._shTextures=[];for(const _ of a){const I=new Uint32Array(_.buffer),p=l(I,o.x,o.y,11);p.wrapU=0,p.wrapV=0,this._shTextures.push(p)}}if(r&&!this._partIndicesTexture){const _=new Uint8Array(r);this._partIndicesTexture=u(_,o.x,o.y,6),this._partIndicesTexture.wrapU=0,this._partIndicesTexture.wrapV=0}this._worker&&this._worker.postMessage({partIndices:r??null}),this._postToWorker(!0)}else{if(this._textureSize=o,this._covariancesATexture=f(e,o.x,o.y,5),this._covariancesBTexture=f(t,o.x,o.y,this._useRGBACovariants?5:7),this._centersTexture=n(this._splatPositions,o.x,o.y,5),this._colorsTexture=u(s,o.x,o.y,5),a){this._shTextures=[];for(const d of a){const c=new Uint32Array(d.buffer),_=l(c,o.x,o.y,11);_.wrapU=0,_.wrapV=0,this._shTextures.push(_)}}if(r){const d=new Uint8Array(r);this._partIndicesTexture=u(d,o.x,o.y,6),this._partIndicesTexture.wrapU=0,this._partIndicesTexture.wrapV=0}if(m)this._instanciateWorker();else{if(this._worker){const d=Float32Array.from(this._splatPositions),c=this._vertexCount;this._worker.postMessage({positions:d,vertexCount:c},[d.buffer]),this._worker.postMessage({partIndices:r??null})}this._postToWorker(!0)}}}*_updateData(e,t,s,a,r={flipY:!1}){this._covariancesATexture||(this._readyToDisplay=!1);const o=new Uint8Array(e),n=new Float32Array(o.buffer);this._keepInRam&&(this._splatsData=e,this._shData=s?s.map(v=>new Uint8Array(v)):null);const u=o.length/A._RowOutputLength;u!=this._vertexCount&&this._updateSplatIndexBuffer(u),this._vertexCount=u,this._shDegree=s?s.length:0;const l=this._getTextureSize(u),f=l.x*l.y,m=A.ProgressiveUpdateAmount??l.y,h=l.x*m;this._splatPositions=new Float32Array(4*f);const d=new Uint16Array(f*4),c=new Uint16Array((this._useRGBACovariants?4:2)*f),_=new Uint8Array(f*4);if(a){this._partIndices=new Uint8Array(f),this._partIndices.set(a);let v=-1;for(let g=0;g<a.length;g++)v=Math.max(v,a[g]);this._ensureMinimumPartMatricesLength(v+1)}const I=new E(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),p=new E(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);if(A.ProgressiveUpdateAmount){this._updateTextures(d,c,_,s,this._partIndices?this._partIndices:void 0),this.setEnabled(!0);const v=Math.ceil(l.y/m);for(let y=0;y<v;y++){const w=y*m,x=w*l.x;for(let S=0;S<h;S++)this._makeSplat(x+S,n,o,d,c,_,I,p,r);this._updateSubTextures(this._splatPositions,d,c,_,w,Math.min(m,l.y-w)),this.getBoundingInfo().reConstruct(I,p,this.getWorldMatrix()),t&&(yield)}const g=Float32Array.from(this._splatPositions),M=this._vertexCount;this._worker&&(this._worker.postMessage({positions:g,vertexCount:M},[g.buffer]),this._worker.postMessage({partIndices:a})),this._sortIsDirty=!0}else{const v=u+15&-16;for(let g=0;g<u;g++)this._makeSplat(g,n,o,d,c,_,I,p,r),t&&g%A._SplatBatchSize===0&&(yield);for(let g=u;g<v;g++)this._makeEmptySplat(g,d,c,_);this._updateTextures(d,c,_,s,this._partIndices?this._partIndices:void 0),this.getBoundingInfo().reConstruct(I,p,this.getWorldMatrix()),this.setEnabled(!0),this._sortIsDirty=!0}this._postToWorker(!0)}async updateDataAsync(e,t,s){return await Re(this._updateData(e,!0,t,s),Oe())}updateData(e,t,s={flipY:!0},a){Xt(this._updateData(e,!1,t,a,s))}refreshBoundingInfo(){return this.thinInstanceRefreshBoundingInfo(!1),this}_updateSplatIndexBuffer(e){const t=e+15&-16;if(!this._splatIndex||e!=this._splatIndex.length){this._splatIndex=new Float32Array(t);for(let s=0;s<t;s++)this._splatIndex[s]=s;this._cameraViewInfos.forEach(s=>{s.mesh.thinInstanceSetBuffer("splatIndex",this._splatIndex,16,!1)})}(!this._depthMix||e!=this._depthMix.length)&&!Ne&&(this._depthMix=new BigInt64Array(t)),this.forcedInstanceCount=Math.max(t>>4,1)}_updateSubTextures(e,t,s,a,r,o,n,u){const l=(v,g,M,y,w)=>{this.getEngine().updateTextureData(v.getInternalTexture(),g,0,y,M,w,0,0,!1)},f=this._getTextureSize(this._vertexCount),m=this._useRGBACovariants?4:2,h=r*f.x,d=o*f.x,c=new Uint16Array(t.buffer,h*4*Uint16Array.BYTES_PER_ELEMENT,d*4),_=new Uint16Array(s.buffer,h*m*Uint16Array.BYTES_PER_ELEMENT,d*m),I=new Uint8Array(a.buffer,h*4,d*4),p=new Float32Array(e.buffer,h*4*Float32Array.BYTES_PER_ELEMENT,d*4);if(l(this._covariancesATexture,c,f.x,r,o),l(this._covariancesBTexture,_,f.x,r,o),l(this._centersTexture,p,f.x,r,o),l(this._colorsTexture,I,f.x,r,o),n)for(let v=0;v<n.length;v++){const g=new Uint32Array(n[v].buffer,h*4*4,d*4);l(this._shTextures[v],g,f.x,r,o)}if(u&&this._partIndicesTexture){const v=new Uint8Array(u.buffer,h,d);l(this._partIndicesTexture,v,f.x,r,o)}}_instanciateWorker(){if(!this._vertexCount||this._disableDepthSort||(this._updateSplatIndexBuffer(this._vertexCount),Ne))return;this._worker?.terminate(),this._worker=new Worker(URL.createObjectURL(new Blob(["(",A._CreateWorker.toString(),")(self)"],{type:"application/javascript"})));const e=Float32Array.from(this._splatPositions),t=this._partIndices?new Uint8Array(this._partIndices):null,s=this._partMatrices.map(a=>new Float32Array(a.m));this._worker.postMessage({positions:e},[e.buffer]),this._worker.postMessage({partIndices:t}),this._worker.postMessage({partMatrices:s}),this._worker.onmessage=a=>{const r=this._vertexCount+15&-16;if(a.data.depthMix.length!=r){this._canPostToWorker=!0,this._postToWorker(!0),this._sortIsDirty=!1;return}this._depthMix=a.data.depthMix;const o=a.data.cameraId,n=new Uint32Array(a.data.depthMix.buffer);if(this._splatIndex)for(let l=0;l<r;l++)this._splatIndex[l]=n[2*l];if(this._delayedTextureUpdate){const l=this._getTextureSize(r);this._updateSubTextures(this._delayedTextureUpdate.centers,this._delayedTextureUpdate.covA,this._delayedTextureUpdate.covB,this._delayedTextureUpdate.colors,0,l.y,this._delayedTextureUpdate.sh,this._delayedTextureUpdate.partIndices),this._delayedTextureUpdate=null}const u=this._cameraViewInfos.get(o);u&&(u.splatIndexBufferSet?u.mesh.thinInstanceBufferUpdated("splatIndex"):(u.mesh.thinInstanceSetBuffer("splatIndex",this._splatIndex,16,!1),u.splatIndexBufferSet=!0)),this._canPostToWorker=!0,this._readyToDisplay=!0,this._sortIsDirty&&(this._postToWorker(!0),this._sortIsDirty=!1)}}_getTextureSize(e){const t=this._scene.getEngine(),s=t.getCaps().maxTextureSize;let a=1;if(t.version===1&&!t.isWebGPU)for(;s*a<e;)a*=2;else a=Math.ceil(e/s);return a>s&&(ae.Error("GaussianSplatting texture size: ("+s+", "+a+"), maxTextureSize: "+s),a=s),new Q(s,a)}get partCount(){return this._partMatrices.length}setWorldMatrixForPart(e,t){this._partMatrices[e].copyFrom(t),this._worker&&this._worker.postMessage({partMatrices:this._partMatrices.map(s=>new Float32Array(s.m))}),this._postToWorker(!0)}getWorldMatrixForPart(e){return this._partMatrices[e]??this.getWorldMatrix()}getPartVisibility(e){return this._partVisibility[e]??1}setPartVisibility(e,t){this._partVisibility[e]=Math.max(0,Math.min(1,t))}_ensureMinimumPartMatricesLength(e){this._partMatrices.length<e&&this._resizePartMatrices(e)}_resizePartMatrices(e){if(this._partMatrices.length!=e){if(this._partMatrices.length>e)this._partMatrices=this._partMatrices.slice(0,e),this._partVisibility=this._partVisibility.slice(0,e);else{this.computeWorldMatrix(!0);const t=this.getWorldMatrix();for(;this._partMatrices.length<e;)this._partMatrices.push(t.clone()),this._partVisibility.push(1)}this._worker&&this._worker.postMessage({partMatrices:this._partMatrices.map(t=>new Float32Array(t.m))}),this._postToWorker(!0)}}addPart(e,t=!0){if(this.partCount>=Ce)throw new Error(`Cannot add part, as the maximum part count (${Ce}) has been reached`);const s=this._vertexCount,a=s==0?new ArrayBuffer(0):this.splatsData,r=this.shData,o=e._vertexCount,n=e.splatsData,u=e.shData,l=Math.max(r?.length||0,u?.length||0),f=r!==null&&u!==null;if(!a)throw new Error("To call addPart(), the current mesh must be loaded with keepInRam: true");const m=s*A._RowOutputLength;if(a.byteLength!==m)throw new Error(`splatsDataA size (${a.byteLength}) does not match expected size (${m})`);if(!n)throw new Error("To call addPart(), the other mesh must be loaded with keepInRam: true");const h=o*A._RowOutputLength;if(n.byteLength!==h)throw new Error(`splatsDataB size (${n.byteLength}) does not match expected size (${h})`);if(e.partIndices)throw new Error("To call addPart(), the other mesh must not be a compound");const d=new Uint8Array(a.byteLength+n.byteLength);d.set(new Uint8Array(a),0),d.set(new Uint8Array(n),a.byteLength);let c;if(f){const w=s+o;c=[];for(let x=0;x<l;x++){const S=new Uint8Array(w*16);if(x<(r?.length??0)&&S.set(r[x],0),x<(u?.length??0)){const T=16*s;S.set(u[x],T)}c.push(S)}}let _=this.partCount,I=this.partIndices;if(I||(I=new Uint8Array(s),_=s>0?1:0),I.length<s)throw new Error(`partIndices length (${I.length}) should be at least vertexCount (${s}) in the current mesh`);const p=new Uint8Array(o).fill(_),v=new Uint8Array(s+o);v.set(I.slice(0,s),0),v.set(p,s),this.updateData(d.buffer,c,{flipY:!1},v);const g=e.getWorldMatrix();this.setWorldMatrixForPart(_,g);const M=new Hs(e.name,this.getScene(),this,e,_);t&&e.dispose();const y=new kt;return g.decompose(M.scaling,y,M.position),M.rotationQuaternion=y,M.computeWorldMatrix(!0),this._partProxies.set(_,M),M}removePart(e){if(e<0||e>=this.partCount)throw new Error(`Part index ${e} is out of range [0, ${this.partCount})`);const t=this.splatsData,s=this.shData,a=this.partIndices;if(!t||!a)throw new Error("Cannot remove part from a non-compound mesh or mesh without keepInRam");const r=this._vertexCount,o=A._RowOutputLength;let n=0;for(let c=0;c<r;c++)a[c]!==e&&n++;const u=new Uint8Array(n*o),l=new Uint8Array(n);let f;if(s){f=[];for(let c=0;c<s.length;c++)f.push(new Uint8Array(n*16))}let m=0;for(let c=0;c<r;c++){const _=a[c];if(_===e)continue;const I=c*o,p=m*o;if(u.set(new Uint8Array(t,I,o),p),l[m]=_>e?_-1:_,s&&f)for(let v=0;v<s.length;v++){const g=c*16,M=m*16;f[v].set(new Uint8Array(s[v].buffer,g,16),M)}m++}this._partMatrices.splice(e,1),this._partVisibility.splice(e,1),this._worker&&this._worker.postMessage({partMatrices:this._partMatrices.map(c=>new Float32Array(c.m))}),this.updateData(u.buffer,f,{flipY:!1},l);const h=this._partProxies.get(e);h&&(h.dispose(),this._partProxies.delete(e));const d=[];this._partProxies.forEach((c,_)=>{_>e&&d.push([_,c])});for(const[c,_]of d)this._partProxies.delete(c),_.updatePartIndex(c-1),this._partProxies.set(c-1,_)}bakeTransformIntoVertices(e){const t=this.splatsData;if(!t)return ae.Error("Cannot bake transform into vertices if splatsData is not kept in RAM"),this;const s=e.m,a=Math.sqrt(s[0]*s[0]+s[1]*s[1]+s[2]*s[2]),r=Math.sqrt(s[4]*s[4]+s[5]*s[5]+s[6]*s[6]),o=Math.sqrt(s[8]*s[8]+s[9]*s[9]+s[10]*s[10]),n=.001;if(Math.abs(a-r)>n||Math.abs(a-o)>n)return ae.Error("Gaussian Splatting bakeTransformIntoVertices does not support non-uniform scaling"),this;const u=new Uint8Array(t),l=new Float32Array(t),f=G.Vector3[0];let m;const h=G.Quaternion[0],d=G.Quaternion[1];for(e.decompose(f,d,f),m=0;m<this._vertexCount;m++){const c=m*8;E.TransformCoordinatesFromFloatsToRef(l[c],l[c+1],l[c+2],e,f),l[c]=f.x,l[c+1]=f.y,l[c+2]=f.z,l[c+3]*=a,l[c+4]*=a,l[c+5]*=a,h.set((u[32*m+28+1]-127.5)/127.5,(u[32*m+28+2]-127.5)/127.5,(u[32*m+28+3]-127.5)/127.5,(u[32*m+28+0]-127.5)/127.5),h.normalize(),this.scaling.x<0&&(h.x=-h.x,h.w=-h.w),this.scaling.y<0&&(h.y=-h.y,h.w=-h.w),this.scaling.z<0&&(h.z=-h.z,h.w=-h.w),d.multiplyToRef(h,h),h.normalize(),u[32*m+28+0]=Math.round(h.w*127.5+127.5),u[32*m+28+1]=Math.round(h.x*127.5+127.5),u[32*m+28+2]=Math.round(h.y*127.5+127.5),u[32*m+28+3]=Math.round(h.z*127.5+127.5)}return this.updateData(t,this.shData??void 0,{flipY:!1}),this}}A._RowOutputLength=32;A._SH_C0=.28209479177387814;A._SplatBatchSize=327680;A._PlyConversionBatchSize=32768;A._BatchSize=16;A._DefaultViewUpdateThreshold=1e-4;A.ProgressiveUpdateAmount=0;A._CreateWorker=function(i){let e,t,s,a,r,o;function n(u,l){const f=new Float32Array(16);for(let m=0;m<4;m++)for(let h=0;h<4;h++)for(let d=0;d<4;d++)f[h*4+m]+=u[d*4+m]*l[h*4+d];return f}i.onmessage=u=>{if(u.data.positions)e=u.data.positions;else if(u.data.partMatrices)o=u.data.partMatrices;else if(u.data.partIndices!==void 0)r=u.data.partIndices;else{const l=u.data.cameraId,f=u.data.modelViewProjection,m=u.data.viewProjection,h=e.length/4+15&-16;if(!e||!f)throw new Error("positions or modelViewProjection matrix is not defined!");t=u.data.depthMix,s=new Uint32Array(t.buffer),a=new Float32Array(t.buffer);for(let c=0;c<h;c++)s[2*c]=c;const d=u.data.depthScale;if(o&&r){const c=o.map(I=>n(m,I)),_=r.length;for(let I=0;I<h;I++){const p=r[Math.min(I,_-1)],v=c[p];a[2*I+1]=1e4-(v[2]*e[4*I+0]+v[6]*e[4*I+1]+v[10]*e[4*I+2]+v[14])*d}}else{const c=f;for(let _=0;_<h;_++)a[2*_+1]=1e4-(c[2]*e[4*_+0]+c[6]*e[4*_+1]+c[10]*e[4*_+2]+c[14])*d}t.sort(),i.postMessage({depthMix:t,cameraId:l},[t.buffer])}}};class Bs{constructor(e,t,s,a,r){this.idx=0,this.color=new q(1,1,1,1),this.position=E.Zero(),this.rotation=E.Zero(),this.uv=new Q(0,0),this.velocity=E.Zero(),this.pivot=E.Zero(),this.translateFromPivot=!1,this._pos=0,this._ind=0,this.groupId=0,this.idxInGroup=0,this._stillInvisible=!1,this._rotationMatrix=[1,0,0,0,1,0,0,0,1],this.parentId=null,this._globalPosition=E.Zero(),this.idx=e,this._group=t,this.groupId=s,this.idxInGroup=a,this._pcs=r}get size(){return this.size}set size(e){this.size=e}get quaternion(){return this.rotationQuaternion}set quaternion(e){this.rotationQuaternion=e}intersectsMesh(e,t){if(!e.hasBoundingInfo)return!1;if(!this._pcs.mesh)throw new Error("Point Cloud System doesnt contain the Mesh");if(t)return e.getBoundingInfo().boundingSphere.intersectsPoint(this.position.add(this._pcs.mesh.position));const s=e.getBoundingInfo().boundingBox,a=s.maximumWorld.x,r=s.minimumWorld.x,o=s.maximumWorld.y,n=s.minimumWorld.y,u=s.maximumWorld.z,l=s.minimumWorld.z,f=this.position.x+this._pcs.mesh.position.x,m=this.position.y+this._pcs.mesh.position.y,h=this.position.z+this._pcs.mesh.position.z;return r<=f&&f<=a&&n<=m&&m<=o&&l<=h&&h<=u}getRotationMatrix(e){let t;if(this.rotationQuaternion)t=this.rotationQuaternion;else{t=G.Quaternion[0];const s=this.rotation;kt.RotationYawPitchRollToRef(s.y,s.x,s.z,t)}t.toRotationMatrix(e)}}class ke{get groupID(){return this.groupId}set groupID(e){this.groupId=e}constructor(e,t){this.groupId=e,this._positionFunction=t}}var zt;(function(i){i[i.Color=2]="Color",i[i.UV=1]="UV",i[i.Random=0]="Random",i[i.Stated=3]="Stated"})(zt||(zt={}));class Ns{get positions(){return this._positions32}get colors(){return this._colors32}get uvs(){return this._uvs32}constructor(e,t,s,a){this.particles=new Array,this.nbParticles=0,this.counter=0,this.vars={},this._promises=[],this._positions=new Array,this._indices=new Array,this._normals=new Array,this._colors=new Array,this._uvs=new Array,this._updatable=!0,this._isVisibilityBoxLocked=!1,this._alwaysVisible=!1,this._groups=new Array,this._groupCounter=0,this._computeParticleColor=!0,this._computeParticleTexture=!0,this._computeParticleRotation=!0,this._computeBoundingBox=!1,this._isReady=!1,this.name=e,this._size=t,this._scene=s||Me.LastCreatedScene,a&&a.updatable!==void 0?this._updatable=a.updatable:this._updatable=!0}async buildMeshAsync(e){return await Promise.all(this._promises),this._isReady=!0,await this._buildMeshAsync(e)}async _buildMeshAsync(e){this.nbParticles===0&&this.addPoints(1),this._positions32=new Float32Array(this._positions),this._uvs32=new Float32Array(this._uvs),this._colors32=new Float32Array(this._colors);const t=new Le;t.set(this._positions32,Y.PositionKind),this._uvs32.length>0&&t.set(this._uvs32,Y.UVKind);let s=0;this._colors32.length>0&&(s=1,t.set(this._colors32,Y.ColorKind));const a=new fe(this.name,this._scene);t.applyToMesh(a,this._updatable),this.mesh=a,this._positions=null,this._uvs=null,this._colors=null,this._updatable||(this.particles.length=0);let r=e;return r||(r=new fs("point cloud material",this._scene),r.emissiveColor=new ye(s,s,s),r.disableLighting=!0,r.pointsCloud=!0,r.pointSize=this._size),a.material=r,a}_addParticle(e,t,s,a){const r=new Bs(e,t,s,a,this);return this.particles.push(r),r}_randomUnitVector(e){e.position=new E(Math.random(),Math.random(),Math.random()),e.color=new q(1,1,1,1)}_getColorIndicesForCoord(e,t,s,a){const r=e._groupImageData,o=s*(a*4)+t*4,n=[o,o+1,o+2,o+3],u=n[0],l=n[1],f=n[2],m=n[3],h=r[u],d=r[l],c=r[f],_=r[m];return new q(h/255,d/255,c/255,_)}_setPointsColorOrUV(e,t,s,a,r,o,n,u){u=u??0,s&&e.updateFacetData();const l=2*e.getBoundingInfo().boundingSphere.radius;let f=e.getVerticesData(Y.PositionKind);const m=e.getIndices(),h=e.getVerticesData(Y.UVKind+(u?u+1:"")),d=e.getVerticesData(Y.ColorKind),c=E.Zero();e.computeWorldMatrix();const _=e.getWorldMatrix();if(!_.isIdentity()){f=f.slice(0);for(let W=0;W<f.length/3;W++)E.TransformCoordinatesFromFloatsToRef(f[3*W],f[3*W+1],f[3*W+2],_,c),f[3*W]=c.x,f[3*W+1]=c.y,f[3*W+2]=c.z}let I=0,p=0,v=0,g=0,M=0,y=0,w=0,x=0,S=0,T=0,z=0,P=0,b=0;const R=E.Zero(),k=E.Zero(),O=E.Zero(),N=E.Zero(),L=E.Zero();let U=0,H=0,C=0,$=0,J=0,ie=0;const te=Q.Zero(),V=Q.Zero(),We=Q.Zero(),Ge=Q.Zero(),je=Q.Zero();let Xe=0,Ze=0,Ye=0,$e=0,Ke=0,qe=0,Je=0,Qe=0,et=0,tt=0,st=0,rt=0;const pe=he.Zero(),be=he.Zero(),at=he.Zero(),it=he.Zero(),ot=he.Zero();let se=0,_e=0;n=n||0;let de,xe,F=new he(0,0,0,1),Te=E.Zero(),Ee=E.Zero(),nt=E.Zero(),oe=0,lt=E.Zero(),ct=0,ht=0;const me=new ds(E.Zero(),new E(1,0,0));let Ae,ve=E.Zero();for(let W=0;W<m.length/3;W++){p=m[3*W],v=m[3*W+1],g=m[3*W+2],M=f[3*p],y=f[3*p+1],w=f[3*p+2],x=f[3*v],S=f[3*v+1],T=f[3*v+2],z=f[3*g],P=f[3*g+1],b=f[3*g+2],R.set(M,y,w),k.set(x,S,T),O.set(z,P,b),k.subtractToRef(R,N),O.subtractToRef(k,L),h&&(U=h[2*p],H=h[2*p+1],C=h[2*v],$=h[2*v+1],J=h[2*g],ie=h[2*g+1],te.set(U,H),V.set(C,$),We.set(J,ie),V.subtractToRef(te,Ge),We.subtractToRef(V,je)),d&&a&&(Xe=d[4*p],Ze=d[4*p+1],Ye=d[4*p+2],$e=d[4*p+3],Ke=d[4*v],qe=d[4*v+1],Je=d[4*v+2],Qe=d[4*v+3],et=d[4*g],tt=d[4*g+1],st=d[4*g+2],rt=d[4*g+3],pe.set(Xe,Ze,Ye,$e),be.set(Ke,qe,Je,Qe),at.set(et,tt,st,rt),be.subtractToRef(pe,it),at.subtractToRef(be,ot));let Pe,ut,pt,dt,ft,ne,le,ge;const _t=new ye(0,0,0),Se=new ye(0,0,0);let ce,X;for(let De=0;De<t._groupDensity[W];De++)I=this.particles.length,this._addParticle(I,t,this._groupCounter,W+De),X=this.particles[I],se=Math.sqrt(re(0,1)),_e=re(0,1),de=R.add(N.scale(se)).add(L.scale(se*_e)),s&&(Te=e.getFacetNormal(W).normalize().scale(-1),Ee=N.clone().normalize(),nt=E.Cross(Te,Ee),oe=re(0,2*Math.PI),lt=Ee.scale(Math.cos(oe)).add(nt.scale(Math.sin(oe))),oe=re(.1,Math.PI/2),ve=lt.scale(Math.cos(oe)).add(Te.scale(Math.sin(oe))),me.origin=de.add(ve.scale(1e-5)),me.direction=ve,me.length=l,Ae=me.intersectsMesh(e),Ae.hit&&(ht=Ae.pickedPoint.subtract(de).length(),ct=re(0,1)*ht,de.addInPlace(ve.scale(ct)))),X.position=de.clone(),this._positions.push(X.position.x,X.position.y,X.position.z),a!==void 0?h&&(xe=te.add(Ge.scale(se)).add(je.scale(se*_e)),a?r&&t._groupImageData!==null?(Pe=t._groupImgWidth,ut=t._groupImgHeight,ce=this._getColorIndicesForCoord(t,Math.round(xe.x*Pe),Math.round(xe.y*ut),Pe),X.color=ce,this._colors.push(ce.r,ce.g,ce.b,ce.a)):d?(F=pe.add(it.scale(se)).add(ot.scale(se*_e)),X.color=new q(F.x,F.y,F.z,F.w),this._colors.push(F.x,F.y,F.z,F.w)):(F=pe.set(Math.random(),Math.random(),Math.random(),1),X.color=new q(F.x,F.y,F.z,F.w),this._colors.push(F.x,F.y,F.z,F.w)):(X.uv=xe.clone(),this._uvs.push(X.uv.x,X.uv.y))):(o?(_t.set(o.r,o.g,o.b),pt=re(-n,n),dt=re(-n,n),ge=_t.toHSV(),ft=ge.r,ne=ge.g+pt,le=ge.b+dt,ne<0&&(ne=0),ne>1&&(ne=1),le<0&&(le=0),le>1&&(le=1),ye.HSVtoRGBToRef(ft,ne,le,Se),F.set(Se.r,Se.g,Se.b,1)):F=pe.set(Math.random(),Math.random(),Math.random(),1),X.color=new q(F.x,F.y,F.z,F.w),this._colors.push(F.x,F.y,F.z,F.w))}}_colorFromTexture(e,t,s){if(e.material===null){ae.Warn(e.name+"has no material."),t._groupImageData=null,this._setPointsColorOrUV(e,t,s,!0,!1);return}const a=e.material.getActiveTextures();if(a.length===0){ae.Warn(e.name+"has no usable texture."),t._groupImageData=null,this._setPointsColorOrUV(e,t,s,!0,!1);return}const r=e.clone();r.setEnabled(!1),this._promises.push(new Promise(o=>{Zt.WhenAllReady(a,()=>{let n=t._textureNb;n<0&&(n=0),n>a.length-1&&(n=a.length-1);const u=()=>{t._groupImgWidth=a[n].getSize().width,t._groupImgHeight=a[n].getSize().height,this._setPointsColorOrUV(r,t,s,!0,!0,void 0,void 0,a[n].coordinatesIndex),r.dispose(),o()};t._groupImageData=null;const l=a[n].readPixels();l?l.then(f=>{t._groupImageData=f,u()}):u()})}))}_calculateDensity(e,t,s){let a,r,o,n,u,l,f,m,h,d,c,_;const I=E.Zero(),p=E.Zero(),v=E.Zero(),g=E.Zero(),M=E.Zero(),y=E.Zero();let w;const x=[];let S=0;const T=s.length/3;for(let b=0;b<T;b++)a=s[3*b],r=s[3*b+1],o=s[3*b+2],n=t[3*a],u=t[3*a+1],l=t[3*a+2],f=t[3*r],m=t[3*r+1],h=t[3*r+2],d=t[3*o],c=t[3*o+1],_=t[3*o+2],I.set(n,u,l),p.set(f,m,h),v.set(d,c,_),p.subtractToRef(I,g),v.subtractToRef(p,M),E.CrossToRef(g,M,y),w=.5*y.length(),S+=w,x[b]=S;const z=new Array(T);let P=e;for(let b=T-1;b>0;b--){const R=x[b];if(R===0)z[b]=0;else{const k=(R-x[b-1])/R*P,O=Math.floor(k),N=k-O,L=+(Math.random()<N),U=O+L;z[b]=U,P-=U}}return z[0]=P,z}addPoints(e,t=this._randomUnitVector){const s=new ke(this._groupCounter,t);let a,r=this.nbParticles;for(let o=0;o<e;o++)a=this._addParticle(r,s,this._groupCounter,o),s&&s._positionFunction&&s._positionFunction(a,r,o),this._positions.push(a.position.x,a.position.y,a.position.z),a.color&&this._colors.push(a.color.r,a.color.g,a.color.b,a.color.a),a.uv&&this._uvs.push(a.uv.x,a.uv.y),r++;return this.nbParticles+=e,this._groupCounter++,this._groupCounter}addSurfacePoints(e,t,s,a,r){let o=s||0;(isNaN(o)||o<0||o>3)&&(o=0);const n=e.getVerticesData(Y.PositionKind),u=e.getIndices();this._groups.push(this._groupCounter);const l=new ke(this._groupCounter,null);switch(l._groupDensity=this._calculateDensity(t,n,u),o===2?l._textureNb=a||0:a=a||new q(1,1,1,1),o){case 2:this._colorFromTexture(e,l,!1);break;case 1:this._setPointsColorOrUV(e,l,!1,!1,!1);break;case 0:this._setPointsColorOrUV(e,l,!1);break;case 3:this._setPointsColorOrUV(e,l,!1,void 0,void 0,a,r);break}return this.nbParticles+=t,this._groupCounter++,this._groupCounter-1}addVolumePoints(e,t,s,a,r){let o=s||0;(isNaN(o)||o<0||o>3)&&(o=0);const n=e.getVerticesData(Y.PositionKind),u=e.getIndices();this._groups.push(this._groupCounter);const l=new ke(this._groupCounter,null);switch(l._groupDensity=this._calculateDensity(t,n,u),o===2?l._textureNb=a||0:a=a||new q(1,1,1,1),o){case 2:this._colorFromTexture(e,l,!0);break;case 1:this._setPointsColorOrUV(e,l,!0,!1,!1);break;case 0:this._setPointsColorOrUV(e,l,!0);break;case 3:this._setPointsColorOrUV(e,l,!0,void 0,void 0,a,r);break}return this.nbParticles+=t,this._groupCounter++,this._groupCounter-1}setParticles(e=0,t=this.nbParticles-1,s=!0){if(!this._updatable||!this._isReady)return this;this.beforeUpdateParticles(e,t,s);const a=G.Matrix[0],r=this.mesh,o=this._colors32,n=this._positions32,u=this._uvs32,l=G.Vector3,f=l[5].copyFromFloats(1,0,0),m=l[6].copyFromFloats(0,1,0),h=l[7].copyFromFloats(0,0,1),d=l[8].setAll(Number.MAX_VALUE),c=l[9].setAll(-Number.MAX_VALUE);ue.IdentityToRef(a);let _=0;if(this.mesh?.isFacetDataEnabled&&(this._computeBoundingBox=!0),t=t>=this.nbParticles?this.nbParticles-1:t,this._computeBoundingBox&&(e!=0||t!=this.nbParticles-1)){const g=this.mesh?.getBoundingInfo();g&&(d.copyFrom(g.minimum),c.copyFrom(g.maximum))}_=0;let I=0,p=0,v=0;for(let g=e;g<=t;g++){const M=this.particles[g];_=M.idx,I=3*_,p=4*_,v=2*_,this.updateParticle(M);const y=M._rotationMatrix,w=M.position,x=M._globalPosition;if(this._computeParticleRotation&&M.getRotationMatrix(a),M.parentId!==null){const H=this.particles[M.parentId],C=H._rotationMatrix,$=H._globalPosition,J=w.x*C[1]+w.y*C[4]+w.z*C[7],ie=w.x*C[0]+w.y*C[3]+w.z*C[6],te=w.x*C[2]+w.y*C[5]+w.z*C[8];if(x.x=$.x+ie,x.y=$.y+J,x.z=$.z+te,this._computeParticleRotation){const V=a.m;y[0]=V[0]*C[0]+V[1]*C[3]+V[2]*C[6],y[1]=V[0]*C[1]+V[1]*C[4]+V[2]*C[7],y[2]=V[0]*C[2]+V[1]*C[5]+V[2]*C[8],y[3]=V[4]*C[0]+V[5]*C[3]+V[6]*C[6],y[4]=V[4]*C[1]+V[5]*C[4]+V[6]*C[7],y[5]=V[4]*C[2]+V[5]*C[5]+V[6]*C[8],y[6]=V[8]*C[0]+V[9]*C[3]+V[10]*C[6],y[7]=V[8]*C[1]+V[9]*C[4]+V[10]*C[7],y[8]=V[8]*C[2]+V[9]*C[5]+V[10]*C[8]}}else if(x.x=0,x.y=0,x.z=0,this._computeParticleRotation){const H=a.m;y[0]=H[0],y[1]=H[1],y[2]=H[2],y[3]=H[4],y[4]=H[5],y[5]=H[6],y[6]=H[8],y[7]=H[9],y[8]=H[10]}const S=l[11];M.translateFromPivot?S.setAll(0):S.copyFrom(M.pivot);const T=l[0];T.copyFrom(M.position);const z=T.x-M.pivot.x,P=T.y-M.pivot.y,b=T.z-M.pivot.z;let R=z*y[0]+P*y[3]+b*y[6],k=z*y[1]+P*y[4]+b*y[7],O=z*y[2]+P*y[5]+b*y[8];R+=S.x,k+=S.y,O+=S.z;const N=n[I]=x.x+f.x*R+m.x*k+h.x*O,L=n[I+1]=x.y+f.y*R+m.y*k+h.y*O,U=n[I+2]=x.z+f.z*R+m.z*k+h.z*O;if(this._computeBoundingBox&&(d.minimizeInPlaceFromFloats(N,L,U),c.maximizeInPlaceFromFloats(N,L,U)),this._computeParticleColor&&M.color){const H=M.color,C=this._colors32;C[p]=H.r,C[p+1]=H.g,C[p+2]=H.b,C[p+3]=H.a}if(this._computeParticleTexture&&M.uv){const H=M.uv,C=this._uvs32;C[v]=H.x,C[v+1]=H.y}}return r&&(s&&(this._computeParticleColor&&r.updateVerticesData(Y.ColorKind,o,!1,!1),this._computeParticleTexture&&r.updateVerticesData(Y.UVKind,u,!1,!1),r.updateVerticesData(Y.PositionKind,n,!1,!1)),this._computeBoundingBox&&(r.hasBoundingInfo?r.getBoundingInfo().reConstruct(d,c,r._worldMatrix):r.buildBoundingInfo(d,c,r._worldMatrix))),this.afterUpdateParticles(e,t,s),this}dispose(){this.mesh?.dispose(),this.vars=null,this._positions=null,this._indices=null,this._normals=null,this._uvs=null,this._colors=null,this._indices32=null,this._positions32=null,this._uvs32=null,this._colors32=null}refreshVisibleSize(){return this._isVisibilityBoxLocked||this.mesh?.refreshBoundingInfo(),this}setVisibilityBox(e){if(!this.mesh)return;const t=e/2;this.mesh.buildBoundingInfo(new E(-t,-t,-t),new E(t,t,t))}get isAlwaysVisible(){return this._alwaysVisible}set isAlwaysVisible(e){this.mesh&&(this._alwaysVisible=e,this.mesh.alwaysSelectAsActiveMesh=e)}set computeParticleRotation(e){this._computeParticleRotation=e}set computeParticleColor(e){this._computeParticleColor=e}set computeParticleTexture(e){this._computeParticleTexture=e}get computeParticleColor(){return this._computeParticleColor}get computeParticleTexture(){return this._computeParticleTexture}set computeBoundingBox(e){this._computeBoundingBox=e}get computeBoundingBox(){return this._computeBoundingBox}initParticles(){}recycleParticle(e){return e}updateParticle(e){return e}beforeUpdateParticles(e,t,s){}afterUpdateParticles(e,t,s){}}function Ls(i,e,t){const s=new Uint8Array(i),a=new Uint32Array(i.slice(0,12)),r=a[2],o=s[12],n=s[13],u=s[14],l=s[15],f=a[1];if(l||a[0]!=1347635022||f!=2&&f!=3)return new Promise(x=>{x({mode:3,data:h,hasVertexColors:!1})});const m=32,h=new ArrayBuffer(m*r),d=1/(1<<n),c=new Int32Array(1),_=new Uint8Array(c.buffer),I=function(x,S){return _[0]=x[S+0],_[1]=x[S+1],_[2]=x[S+2],_[3]=x[S+2]&128?255:0,c[0]*d};let p=16;const v=new Float32Array(h),g=new Float32Array(h),M=new Uint8ClampedArray(h),y=new Uint8ClampedArray(h);for(let x=0;x<r;x++)v[x*8+0]=I(s,p+0),v[x*8+1]=I(s,p+3),v[x*8+2]=I(s,p+6),p+=9;const w=.282;for(let x=0;x<r;x++){for(let S=0;S<3;S++){const T=(s[p+r+x*3+S]-127.5)/38.25;M[x*32+24+S]=j.Clamp((.5+w*T)*255,0,255)}M[x*32+24+3]=s[p+x]}p+=r*4;for(let x=0;x<r;x++)g[x*8+3+0]=Math.exp(s[p+0]/16-10),g[x*8+3+1]=Math.exp(s[p+1]/16-10),g[x*8+3+2]=Math.exp(s[p+2]/16-10),p+=3;if(f>=3){const x=Math.SQRT1_2;for(let S=0;S<r;S++){const T=[s[p+0],s[p+1],s[p+2],s[p+3]],z=T[0]+(T[1]<<8)+(T[2]<<16)+(T[3]<<24),P=511,b=[],R=z>>>30;let k=z,O=0;for(let U=3;U>=0;--U)if(U!==R){const H=k&P,C=k>>>9&1;k=k>>>10,b[U]=x*(H/P),C===1&&(b[U]=-b[U]),O+=b[U]*b[U]}const N=1-O;b[R]=Math.sqrt(Math.max(N,0));const L=[3,0,1,2];for(let U=0;U<4;U++)y[S*32+28+U]=Math.round(127.5+b[L[U]]*127.5);p+=4}}else for(let x=0;x<r;x++){const S=s[p+0],T=s[p+1],z=s[p+2],P=S/127.5-1,b=T/127.5-1,R=z/127.5-1;y[x*32+28+1]=S,y[x*32+28+2]=T,y[x*32+28+3]=z;const k=1-(P*P+b*b+R*R);y[x*32+28+0]=127.5+Math.sqrt(k<0?0:k)*127.5,p+=3}if(o){const x=((o+1)*(o+1)-1)*3,S=Math.ceil(x/16);let T=p;const z=[],P=e.getEngine().getCaps().maxTextureSize,b=Math.ceil(r/P);for(let R=0;R<S;R++){const k=new Uint8Array(b*P*4*4);z.push(k)}for(let R=0;R<r;R++)for(let k=0;k<x;k++){const O=s[T++],N=Math.floor(k/16),L=z[N],U=k%16,H=R*16;L[U+H]=O}return new Promise(R=>{R({mode:0,data:h,hasVertexColors:!1,sh:z,trainedWithAntialiasing:!!u})})}return new Promise(x=>{x({mode:0,data:h,hasVertexColors:!1,trainedWithAntialiasing:!!u})})}const Rt=.28209479177387814;async function Ot(i,e,t){return await new Promise((s,a)=>{const r=t.createCanvasImage();if(!r)throw new Error("Failed to create ImageBitmap");r.onload=()=>{try{const n=t.createCanvas(r.width,r.height);if(!n)throw new Error("Failed to create canvas");const u=n.getContext("2d");if(!u)throw new Error("Failed to get 2D context");u.drawImage(r,0,0);const l=u.getImageData(0,0,n.width,n.height);s({bits:new Uint8Array(l.data.buffer),width:l.width})}catch(n){a(`Error loading image ${r.src} with exception: ${n}`)}},r.onerror=n=>{a(`Error loading image ${r.src} with exception: ${n}`)},r.crossOrigin="anonymous";let o;if(typeof i=="string"){if(!e)throw new Error("filename is required when using a URL");r.src=i+e}else{const n=new Blob([i],{type:"image/webp"});o=URL.createObjectURL(n),r.src=o}})}async function Ws(i,e,t){const s=i.count?i.count:i.means.shape[0],a=32,r=new ArrayBuffer(a*s),o=new Float32Array(r),n=new Float32Array(r),u=new Uint8ClampedArray(r),l=new Uint8ClampedArray(r),f=p=>Math.sign(p)*(Math.exp(Math.abs(p))-1),m=e[0].bits,h=e[1].bits;if(!Array.isArray(i.means.mins)||!Array.isArray(i.means.maxs))throw new Error("Missing arrays in SOG data.");for(let p=0;p<s;p++){const v=p*4;for(let g=0;g<3;g++){const M=i.means.mins[g],y=i.means.maxs[g],w=h[v+g],x=m[v+g],S=w<<8|x,T=j.Lerp(M,y,S/65535);o[p*8+g]=f(T)}}const d=e[2].bits;if(i.version===2){if(!i.scales.codebook)throw new Error("Missing codebook in SOG version 2 scales data.");for(let p=0;p<s;p++){const v=p*4;for(let g=0;g<3;g++){const M=i.scales.codebook[d[v+g]],y=Math.exp(M);n[p*8+3+g]=y}}}else{if(!Array.isArray(i.scales.mins)||!Array.isArray(i.scales.maxs))throw new Error("Missing arrays in SOG scales data.");for(let p=0;p<s;p++){const v=p*4;for(let g=0;g<3;g++){const M=d[v+g],y=j.Lerp(i.scales.mins[g],i.scales.maxs[g],M/255),w=Math.exp(y);n[p*8+3+g]=w}}}const c=e[4].bits;if(i.version===2){if(!i.sh0.codebook)throw new Error("Missing codebook in SOG version 2 sh0 data.");for(let p=0;p<s;p++){const v=p*4;for(let g=0;g<3;g++){const M=.5+i.sh0.codebook[c[v+g]]*Rt;u[p*32+24+g]=Math.max(0,Math.min(255,Math.round(255*M)))}u[p*32+24+3]=c[v+3]}}else{if(!Array.isArray(i.sh0.mins)||!Array.isArray(i.sh0.maxs))throw new Error("Missing arrays in SOG sh0 data.");for(let p=0;p<s;p++){const v=p*4;for(let g=0;g<4;g++){const M=i.sh0.mins[g],y=i.sh0.maxs[g],w=c[v+g],x=j.Lerp(M,y,w/255);let S;g<3?S=.5+x*Rt:S=1/(1+Math.exp(-x)),u[p*32+24+g]=Math.max(0,Math.min(255,Math.round(255*S)))}}}const _=p=>(p/255-.5)*2/Math.SQRT2,I=e[3].bits;for(let p=0;p<s;p++){const v=I[p*4+0],g=I[p*4+1],M=I[p*4+2],y=I[p*4+3],w=_(v),x=_(g),S=_(M),T=y-252,z=w*w+x*x+S*S,P=Math.sqrt(Math.max(0,1-z));let b;switch(T){case 0:b=[P,w,x,S];break;case 1:b=[w,P,x,S];break;case 2:b=[w,x,P,S];break;case 3:b=[w,x,S,P];break;default:throw new Error("Invalid quaternion mode")}l[p*32+28+0]=b[0]*127.5+127.5,l[p*32+28+1]=b[1]*127.5+127.5,l[p*32+28+2]=b[2]*127.5+127.5,l[p*32+28+3]=b[3]*127.5+127.5}if(i.shN){const p=[0,3,8,15],v=i.shN.bands?p[i.shN.bands]:i.shN.shape[1]/3,g=e[5].bits,M=e[6].bits,y=e[5].width,w=v*3,x=Math.ceil(w/16),S=[],T=t.getEngine().getCaps().maxTextureSize,z=Math.ceil(s/T);for(let P=0;P<x;P++){const b=new Uint8Array(z*T*4*4);S.push(b)}if(i.version===2){if(!i.shN.codebook)throw new Error("Missing codebook in SOG version 2 shN data.");for(let P=0;P<s;P++){const b=M[P*4+0]+(M[P*4+1]<<8),R=b%64*v,k=Math.floor(b/64);for(let O=0;O<v;O++)for(let N=0;N<3;N++){const L=O*3+N,U=Math.floor(L/16),H=S[U],C=L%16,$=P*16,J=i.shN.codebook[g[(R+O)*4+N+k*y*4]]*127.5+127.5;H[C+$]=Math.max(0,Math.min(255,J))}}}else for(let P=0;P<s;P++){const b=M[P*4+0]+(M[P*4+1]<<8),R=b%64*v,k=Math.floor(b/64),O=i.shN.mins,N=i.shN.maxs;for(let L=0;L<3;L++)for(let U=0;U<v/3;U++){const H=U*3+L,C=Math.floor(H/16),$=S[C],J=H%16,ie=P*16,te=j.Lerp(O,N,g[(R+U)*4+L+k*y*4]/255)*127.5+127.5;$[J+ie]=Math.max(0,Math.min(255,te))}}return await new Promise(P=>{P({mode:0,data:r,hasVertexColors:!1,sh:S})})}return await new Promise(p=>{p({mode:0,data:r,hasVertexColors:!1})})}async function Ut(i,e,t){let s,a;if(i instanceof Map){a=i;const n=a.get("meta.json");if(!n)throw new Error("meta.json not found in files Map");s=JSON.parse(new TextDecoder().decode(n))}else s=i;const r=[...s.means.files,...s.scales.files,...s.quats.files,...s.sh0.files];s.shN&&r.push(...s.shN.files);const o=await Promise.all(r.map(async n=>{if(a&&a.has(n)){const u=a.get(n);return await Ot(u,n,t.getEngine())}else return await Ot(e,n,t.getEngine())}));return await Ws(s,o,t)}class ee{constructor(e=ee._DefaultLoadingOptions){this.name=ze.name,this._assetContainer=null,this.extensions=ze.extensions,this._loadingOptions=e}createPlugin(e){return new ee(e[ze.name])}async importMeshAsync(e,t,s,a,r,o){return await this._parseAsync(e,t,s,a).then(n=>({meshes:n,particleSystems:[],skeletons:[],animationGroups:[],transformNodes:[],geometries:[],lights:[],spriteManagers:[]}))}static _BuildPointCloud(e,t){if(!t.byteLength)return!1;const s=new Uint8Array(t),a=new Float32Array(t),r=32,o=s.length/r,n=function(u,l){const f=a[8*l+0],m=a[8*l+1],h=a[8*l+2];u.position=new E(f,m,h);const d=s[r*l+24+0]/255,c=s[r*l+24+1]/255,_=s[r*l+24+2]/255;u.color=new q(d,c,_,1)};return e.addPoints(o,n),!0}static _BuildMesh(e,t){const s=new fe("PLYMesh",e),a=new Uint8Array(t.data),r=new Float32Array(t.data),o=32,n=a.length/o,u=[],l=new Le;for(let f=0;f<n;f++){const m=r[8*f+0],h=r[8*f+1],d=r[8*f+2];u.push(m,h,d)}if(t.hasVertexColors){const f=new Float32Array(n*4);for(let m=0;m<n;m++){const h=a[o*m+24+0]/255,d=a[o*m+24+1]/255,c=a[o*m+24+2]/255;f[m*4+0]=h,f[m*4+1]=d,f[m*4+2]=c,f[m*4+3]=1}l.colors=f}return l.positions=u,l.indices=t.faces,l.applyToMesh(s),s}async _unzipWithFFlateAsync(e){let t=this._loadingOptions.fflate;t||(typeof window.fflate>"u"&&await Nt.LoadScriptAsync(this._loadingOptions.deflateURL??"https://unpkg.com/fflate/umd/index.js"),t=window.fflate);const{unzipSync:s}=t,a=s(e),r=new Map;for(const[o,n]of Object.entries(a))r.set(o,n);return r}_parseAsync(e,t,s,a){const r=[],o=h=>{t._blockEntityCollection=!!this._assetContainer;const d=this._loadingOptions.gaussianSplattingMesh??new A("GaussianSplatting",null,t,this._loadingOptions.keepInRam);d._parentContainer=this._assetContainer,r.push(d),d.updateData(h.data,h.sh,{flipY:!1}),d.scaling.y*=-1,d.computeWorldMatrix(!0),t._blockEntityCollection=!1};if(typeof s=="string"){const h=JSON.parse(s);if(h&&h.means&&h.scales&&h.quats&&h.sh0)return new Promise(d=>{Ut(h,a,t).then(c=>{o(c),d(r)}).catch(()=>{throw new Error("Failed to parse SOG data.")})})}const n=s instanceof ArrayBuffer?new Uint8Array(s):s;if(n[0]===80&&n[1]===75)return new Promise(h=>{this._unzipWithFFlateAsync(n).then(d=>{Ut(d,a,t).then(c=>{o(c),h(r)}).catch(()=>{throw new Error("Failed to parse SOG zip data.")})})});const u=h=>{ee._ConvertPLYToSplat(s).then(async d=>{switch(t._blockEntityCollection=!!this._assetContainer,d.mode){case 0:{const c=this._loadingOptions.gaussianSplattingMesh??new A("GaussianSplatting",null,t,this._loadingOptions.keepInRam);switch(c._parentContainer=this._assetContainer,r.push(c),c.updateData(d.data,d.sh,{flipY:!1}),c.scaling.y*=-1,d.chirality==="RightHanded"&&(c.scaling.y*=-1),d.upAxis){case"X":c.rotation=new E(0,0,Math.PI/2);break;case"Y":c.rotation=new E(0,0,Math.PI);break;case"Z":c.rotation=new E(-Math.PI/2,Math.PI,0);break}c.computeWorldMatrix(!0)}break;case 1:{const c=new Ns("PointCloud",1,t);ee._BuildPointCloud(c,d.data)?await c.buildMeshAsync().then(_=>{r.push(_)}):c.dispose()}break;case 2:if(d.faces)r.push(ee._BuildMesh(t,d));else throw new Error("PLY mesh doesn't contain face informations.");break;default:throw new Error("Unsupported Splat mode")}t._blockEntityCollection=!1,this.applyAutoCameraLimits(d,t),h(r)})};if(n[0]!==31||n[1]!==139)return new Promise(h=>{u(h)});const l=new ReadableStream({start(h){h.enqueue(new Uint8Array(s)),h.close()}}),f=new DecompressionStream("gzip"),m=l.pipeThrough(f);return new Promise(h=>{new Response(m).arrayBuffer().then(d=>{Ls(d,t,this._loadingOptions).then(c=>{t._blockEntityCollection=!!this._assetContainer;const _=this._loadingOptions.gaussianSplattingMesh??new A("GaussianSplatting",null,t,this._loadingOptions.keepInRam);if(c.trainedWithAntialiasing){const I=_.material;I.kernelSize=.1,I.compensation=!0}_._parentContainer=this._assetContainer,r.push(_),_.updateData(c.data,c.sh,{flipY:!1}),this._loadingOptions.flipY||(_.scaling.y*=-1,_.computeWorldMatrix(!0)),t._blockEntityCollection=!1,this.applyAutoCameraLimits(c,t),h(r)})}).catch(()=>{u(h)})})}applyAutoCameraLimits(e,t){if(!this._loadingOptions.disableAutoCameraLimits&&(e.safeOrbitCameraRadiusMin!==void 0||e.safeOrbitCameraElevationMinMax!==void 0)&&t.activeCamera?.getClassName()==="ArcRotateCamera"){const s=t.activeCamera;e.safeOrbitCameraElevationMinMax&&(s.lowerBetaLimit=Math.PI*.5-e.safeOrbitCameraElevationMinMax[1],s.upperBetaLimit=Math.PI*.5-e.safeOrbitCameraElevationMinMax[0]),e.safeOrbitCameraRadiusMin&&(s.lowerRadiusLimit=e.safeOrbitCameraRadiusMin)}}loadAssetContainerAsync(e,t,s){const a=new ps(e);return this._assetContainer=a,this.importMeshAsync(null,e,t,s).then(r=>{for(const o of r.meshes)a.meshes.push(o);return this._assetContainer=null,a}).catch(r=>{throw this._assetContainer=null,r})}loadAsync(e,t,s){return this.importMeshAsync(null,e,t,s).then(()=>{})}static _ConvertPLYToSplat(e){const t=new Uint8Array(e),s=new TextDecoder().decode(t.slice(0,1024*10)),a=`end_header
`,r=s.indexOf(a);if(r<0||!s)return new Promise(y=>{y({mode:0,data:e,rawSplat:!0})});const o=parseInt(/element vertex (\d+)\n/.exec(s)[1]),n=/element face (\d+)\n/.exec(s);let u=0;n&&(u=parseInt(n[1]));const l=/element chunk (\d+)\n/.exec(s);let f=0;l&&(f=parseInt(l[1]));let m=0,h=0;const d={double:8,int:4,uint:4,float:4,short:2,ushort:2,uchar:1,list:0},c={Vertex:0,Chunk:1,SH:2,Float_Tuple:3,Float:4,Uchar:5};let _=c.Chunk;const I=[],p=s.slice(0,r).split(`
`),v={};for(const y of p)if(y.startsWith("property ")){const[,w,x]=y.split(" ");if(_==c.Chunk)h+=d[w];else if(_==c.Vertex)I.push({name:x,type:w,offset:m}),m+=d[w];else if(_==c.SH)I.push({name:x,type:w,offset:m});else if(_==c.Float_Tuple){const S=new DataView(e,h,d.float*2);v.safeOrbitCameraElevationMinMax=[S.getFloat32(0,!0),S.getFloat32(4,!0)]}else if(_==c.Float){const S=new DataView(e,h,d.float);v.safeOrbitCameraRadiusMin=S.getFloat32(0,!0)}else if(_==c.Uchar){const S=new DataView(e,h,d.uchar);x=="up_axis"?v.upAxis=S.getUint8(0)==0?"X":S.getUint8(0)==1?"Y":"Z":x=="chirality"&&(v.chirality=S.getUint8(0)==0?"LeftHanded":"RightHanded")}d[w]||ae.Warn(`Unsupported property type: ${w}.`)}else if(y.startsWith("element ")){const[,w]=y.split(" ");w=="chunk"?_=c.Chunk:w=="vertex"?_=c.Vertex:w=="sh"?_=c.SH:w=="safe_orbit_camera_elevation_min_max_radians"?_=c.Float_Tuple:w=="safe_orbit_camera_radius_min"?_=c.Float:(w=="up_axis"||w=="chirality")&&(_=c.Uchar)}const g=m,M=h;return A.ConvertPLYWithSHToSplatAsync(e).then(async y=>{const w=new DataView(e,r+a.length);let x=M*f+g*o;const S=[];if(u)for(let O=0;O<u;O++){const N=w.getUint8(x);if(N==3){x+=1;for(let L=0;L<N;L++){const U=w.getUint32(x+(2-L)*4,!0);S.push(U)}x+=12}}if(f)return await new Promise(O=>{O({mode:0,data:y.buffer,sh:y.sh,faces:S,hasVertexColors:!1,compressed:!0,rawSplat:!1})});let T=0,z=0;const P=["x","y","z","scale_0","scale_1","scale_2","opacity","rot_0","rot_1","rot_2","rot_3"],b=["red","green","blue","f_dc_0","f_dc_1","f_dc_2"];for(let O=0;O<I.length;O++){const N=I[O];P.includes(N.name)&&T++,b.includes(N.name)&&z++}const R=T==P.length&&z==3,k=u?2:R?0:1;return await new Promise(O=>{O({...v,mode:k,data:y.buffer,sh:y.sh,faces:S,hasVertexColors:!!z,compressed:!1,rawSplat:!1})})})}}ee._DefaultLoadingOptions={keepInRam:!1,flipY:!1};us(new ee);export{ee as SPLATFileLoader};
