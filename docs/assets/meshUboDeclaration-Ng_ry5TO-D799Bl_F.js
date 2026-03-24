import{K as i}from"./index-D0uYf7q_.js";const o="meshUboDeclaration",e=`#ifdef WEBGL2
uniform mat4 world;uniform float visibility;
#else
layout(std140,column_major) uniform;uniform Mesh
{mat4 world;float visibility;};
#endif
#define WORLD_UBO
`;i.IncludesShadersStore[o]||(i.IncludesShadersStore[o]=e);
