import{M as m,I as p,d as c,a9 as i,r as l,N as e,l as u}from"./entry.yqGg7Rc9.js";import{u as d}from"./asyncData.-qEpjq8a.js";import f from"./Ellipsis.JcQIHpFU.js";import y from"./ComponentPlaygroundData.8vjPRAvz.js";import"./TabsHeader.LDC0jgEP.js";import"./ComponentPlaygroundProps.bxlJCCHg.js";import"./ProseH4.8RaXRogY.js";import"./ProseCodeInline.TD1Jrgj3.js";import"./Badge.7ZhNY5Aa.js";import"./MDCSlot.kiSdPEdr.js";import"./slot.h_E4CX1Z.js";import"./ProseP.EKH6SJWg.js";import"./index.eUE03TJ4.js";import"./ComponentPlaygroundSlots.vue.O13w0ugU.js";import"./ComponentPlaygroundTokens.vue.8HUvZVYh.js";async function g(o){const t=m(o);{const{data:n}=await d(`nuxt-component-meta${t?`-${t}`:""}`,()=>$fetch(`/api/component-meta${t?`/${t}`:""}`));return p(()=>n.value)}}const h=c({props:{component:{type:String,required:!0},props:{type:Object,required:!1,default:()=>({})}},async setup(o){const t=p(()=>i(o.component)),n=l({...o.props}),r=await g(o.component);return{as:t,formProps:n,componentData:r}},render(o){const t=Object.entries(this.$slots).reduce((n,[r,a])=>{if(r.startsWith("component-")){const s=r.replace("component-","");n[s]=a}return n},{});return e("div",{class:"component-playground"},[e("div",{class:"component-playground-wrapper"},[e(f,{class:"component-playground-ellipsis",blur:"5vw",height:"100%",width:"100%"}),e(o.as,{...o.formProps,class:"component-playground-component"},{...t})]),e(y,{modelValue:o.formProps,componentData:o.componentData,"onUpdate:modelValue":n=>o.formProps=n})])}}),V=u(h,[["__scopeId","data-v-af8cd031"]]);export{V as default};
