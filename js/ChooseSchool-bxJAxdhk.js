import{_ as m}from"./location-DdOy27Nh.js";import{u as h,m as p}from"./other-BcbpZaxM.js";import{S as _,_ as k}from"./common-BPL3o-FS.js";import"./vendor-DEYvKW2P.js";const c=n=>(Vue.pushScopeId("data-v-7c152760"),n=n(),Vue.popScopeId(),n),N={class:"choose-school"},B=c(()=>Vue.createElementVNode("span",{class:"f16"},"添加学校",-1)),y={class:"content"},S={key:0,class:"nearby"},v=c(()=>Vue.createElementVNode("div",{class:"title"},[Vue.createElementVNode("img",{src:m,alt:""}),Vue.createElementVNode("span",null,"离我最近")],-1)),E=["onClick"],f={key:1,class:"item"},g=c(()=>Vue.createElementVNode("div",{class:"line",style:{width:"calc(100% - 40rem)","margin-left":"20rem"}},null,-1)),C={key:1,class:"schools"},b=["onClick"],x={key:2},w=["onClick"],D={key:0},$={style:{color:"#f50"}},I={key:1},F={key:1,class:"empty"},L=c(()=>Vue.createElementVNode("img",{src:p,alt:""},null,-1)),O=c(()=>Vue.createElementVNode("div",{class:"title"},"搜索结果为空",-1)),H=c(()=>Vue.createElementVNode("div",{class:"sub-title"},"没有搜索到相关的内容",-1)),R=Vue.defineComponent({name:"ChooseSchool",__name:"ChooseSchool",setup(n){const i=VueRouter.useRouter(),a=h(),e=Vue.reactive({isSearch:!1,nearby:[],schools:[],searchSchools:[],schoolName:""});Vue.onMounted(()=>{for(let s=0;s<20;s++)e.nearby.push("附近大学"+s),e.schools.push("所有大学"+s)});function r(s){localStorage.setItem("changeSchool",s),i.back()}function V(){if(!e.schoolName.length)return e.isSearch=!1;e.isSearch=!0;let s=e.nearby.concat(e.schools);e.searchSchools=s.filter(t=>t.includes(e.schoolName))}return(s,t)=>{const d=Vue.resolveComponent("BaseHeader");return Vue.openBlock(),Vue.createElementBlock("div",N,[Vue.createVNode(d,null,{center:Vue.withCtx(()=>[B]),right:Vue.withCtx(()=>[Vue.createElementVNode("span",{class:"f14",onClick:t[0]||(t[0]=o=>Vue.unref(a)("/me/declare-school",{type:1}))},"没有找到?")]),bottom:Vue.withCtx(()=>[Vue.createVNode(_,{class:"mt1r mb1r ml2r mr2r",placeholder:"搜索大学名称",modelValue:e.schoolName,"onUpdate:modelValue":t[1]||(t[1]=o=>e.schoolName=o),onClear:t[2]||(t[2]=o=>e.isSearch=!1),"is-show-right-text":!0,onNotice:V},null,8,["modelValue"])]),_:1}),Vue.createElementVNode("div",y,[e.isSearch?Vue.createCommentVNode("",!0):(Vue.openBlock(),Vue.createElementBlock("div",S,[v,e.nearby.length?(Vue.openBlock(!0),Vue.createElementBlock(Vue.Fragment,{key:0},Vue.renderList(e.nearby,(o,l)=>(Vue.openBlock(),Vue.createElementBlock("div",{class:"item",key:l,onClick:u=>r(o)},Vue.toDisplayString(o),9,E))),128)):(Vue.openBlock(),Vue.createElementBlock("div",f,"无法获取"))])),g,e.isSearch?Vue.createCommentVNode("",!0):(Vue.openBlock(),Vue.createElementBlock("div",C,[(Vue.openBlock(!0),Vue.createElementBlock(Vue.Fragment,null,Vue.renderList(e.schools,(o,l)=>(Vue.openBlock(),Vue.createElementBlock("div",{class:"item",key:l,onClick:u=>r(o)},Vue.toDisplayString(o),9,b))),128))])),e.isSearch?(Vue.openBlock(),Vue.createElementBlock("div",x,[e.searchSchools.length?(Vue.openBlock(!0),Vue.createElementBlock(Vue.Fragment,{key:0},Vue.renderList(e.searchSchools,(o,l)=>(Vue.openBlock(),Vue.createElementBlock("div",{class:"item",key:l,onClick:u=>r(o)},[o.indexOf(e.schoolName)>-1?(Vue.openBlock(),Vue.createElementBlock("span",D,[Vue.createTextVNode(Vue.toDisplayString(o.substr(0,o.indexOf(e.schoolName)))+" ",1),Vue.createElementVNode("span",$,Vue.toDisplayString(e.schoolName),1),Vue.createTextVNode(" "+Vue.toDisplayString(o.substr(o.indexOf(e.schoolName)+e.schoolName.length)),1)])):(Vue.openBlock(),Vue.createElementBlock("span",I,Vue.toDisplayString(o),1))],8,w))),128)):(Vue.openBlock(),Vue.createElementBlock("div",F,[L,O,H,Vue.createElementVNode("div",{class:"btn",onClick:t[3]||(t[3]=o=>Vue.unref(a)("/me/declare-school"))},"没有学校信息？去申报")]))])):Vue.createCommentVNode("",!0)])])}}}),q=k(R,[["__scopeId","data-v-7c152760"]]);export{q as default};
