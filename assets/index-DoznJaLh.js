var xt=Object.defineProperty;var mt=(n,i,r)=>i in n?xt(n,i,{enumerable:!0,configurable:!0,writable:!0,value:r}):n[i]=r;var V=(n,i,r)=>mt(n,typeof i!="symbol"?i+"":i,r);import{e as ut,g as It,a as N,u as yt,O as ft,N as At,L as z,f as kt,h as Me,i as jt,j as Q,k as gt,H as Nt}from"./react-D_lxoiPa.js";import{A as Et,C as v,R as fe,a as _,b as wt,B as b,P as U,S as L,c as ae,T as C,E as X,d as vt,e as W,f as ee,g as $,s as Z,M as Ze,I as je,h as Je,i as bt,j as Tt,k as Dt,l as ke,m as Ct,n as ve,o as Mt,U as Rt,p as St,q as Bt,r as Pt,t as _t,u as $t}from"./antd-BclSLxMR.js";import{D as zt,u as T}from"./dexie-9DHpbOd3.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))c(a);new MutationObserver(a=>{for(const d of a)if(d.type==="childList")for(const s of d.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&c(s)}).observe(document,{childList:!0,subtree:!0});function r(a){const d={};return a.integrity&&(d.integrity=a.integrity),a.referrerPolicy&&(d.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?d.credentials="include":a.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function c(a){if(a.ep)return;a.ep=!0;const d=r(a);fetch(a.href,d)}})();var be={exports:{}},de={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _e;function Lt(){if(_e)return de;_e=1;var n=ut(),i=Symbol.for("react.element"),r=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,a=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function s(m,l,k){var h,w={},y=null,p=null;k!==void 0&&(y=""+k),l.key!==void 0&&(y=""+l.key),l.ref!==void 0&&(p=l.ref);for(h in l)c.call(l,h)&&!d.hasOwnProperty(h)&&(w[h]=l[h]);if(m&&m.defaultProps)for(h in l=m.defaultProps,l)w[h]===void 0&&(w[h]=l[h]);return{$$typeof:i,type:m,key:y,ref:p,props:w,_owner:a.current}}return de.Fragment=r,de.jsx=s,de.jsxs=s,de}var $e;function Ot(){return $e||($e=1,be.exports=Lt()),be.exports}var e=Ot(),oe={},Te={exports:{}},ze;function Re(){return ze||(ze=1,(function(n){function i(r){return r&&r.__esModule?r:{default:r}}n.exports=i,n.exports.__esModule=!0,n.exports.default=n.exports})(Te)),Te.exports}var le={},Le;function Ft(){if(Le)return le;Le=1,Object.defineProperty(le,"__esModule",{value:!0}),le.default=void 0;const n={items_per_page:"条/页",jump_to:"跳至",jump_to_confirm:"确定",page:"页",prev_page:"上一页",next_page:"下一页",prev_5:"向前 5 页",next_5:"向后 5 页",prev_3:"向前 3 页",next_3:"向后 3 页",page_size:"页码"};return le.default=n,le}var pe={},he={},xe={},me={},Oe;function Ht(){return Oe||(Oe=1,Object.defineProperty(me,"__esModule",{value:!0}),me.commonLocale=void 0,me.commonLocale={yearFormat:"YYYY",dayFormat:"D",cellMeridiemFormat:"A",monthBeforeYear:!0}),me}var Fe;function Qt(){if(Fe)return xe;Fe=1,Object.defineProperty(xe,"__esModule",{value:!0}),xe.default=void 0;var n=Ht();const i={...n.commonLocale,locale:"zh_CN",today:"今天",now:"此刻",backToToday:"返回今天",ok:"确定",timeSelect:"选择时间",dateSelect:"选择日期",weekSelect:"选择周",clear:"清除",week:"周",month:"月",year:"年",previousMonth:"上个月 (翻页上键)",nextMonth:"下个月 (翻页下键)",monthSelect:"选择月份",yearSelect:"选择年份",decadeSelect:"选择年代",previousYear:"上一年 (Control键加左方向键)",nextYear:"下一年 (Control键加右方向键)",previousDecade:"上一年代",nextDecade:"下一年代",previousCentury:"上一世纪",nextCentury:"下一世纪",yearFormat:"YYYY年",cellDateFormat:"D",monthBeforeYear:!1};return xe.default=i,xe}var ue={},He;function qe(){if(He)return ue;He=1,Object.defineProperty(ue,"__esModule",{value:!0}),ue.default=void 0;const n={placeholder:"请选择时间",rangePlaceholder:["开始时间","结束时间"]};return ue.default=n,ue}var Qe;function Xe(){if(Qe)return he;Qe=1;var n=Re().default;Object.defineProperty(he,"__esModule",{value:!0}),he.default=void 0;var i=n(Qt()),r=n(qe());const c={lang:{placeholder:"请选择日期",yearPlaceholder:"请选择年份",quarterPlaceholder:"请选择季度",monthPlaceholder:"请选择月份",weekPlaceholder:"请选择周",rangePlaceholder:["开始日期","结束日期"],rangeYearPlaceholder:["开始年份","结束年份"],rangeMonthPlaceholder:["开始月份","结束月份"],rangeQuarterPlaceholder:["开始季度","结束季度"],rangeWeekPlaceholder:["开始周","结束周"],...i.default},timePickerLocale:{...r.default}};return c.lang.ok="确定",he.default=c,he}var We;function Wt(){if(We)return pe;We=1;var n=Re().default;Object.defineProperty(pe,"__esModule",{value:!0}),pe.default=void 0;var i=n(Xe());return pe.default=i.default,pe}var Ge;function Gt(){if(Ge)return oe;Ge=1;var n=Re().default;Object.defineProperty(oe,"__esModule",{value:!0}),oe.default=void 0;var i=n(Ft()),r=n(Wt()),c=n(Xe()),a=n(qe());const d="${label}不是一个有效的${type}",s={locale:"zh-cn",Pagination:i.default,DatePicker:c.default,TimePicker:a.default,Calendar:r.default,global:{placeholder:"请选择",close:"关闭",sortable:"可排序",show:"显示",hide:"隐藏"},Table:{filterTitle:"筛选",filterConfirm:"确定",filterReset:"重置",filterEmptyText:"无筛选项",filterCheckAll:"全选",filterSearchPlaceholder:"在筛选项中搜索",emptyText:"暂无数据",selectAll:"全选当页",selectInvert:"反选当页",selectNone:"清空所有",selectionAll:"全选所有",sortTitle:"排序",expand:"展开行",collapse:"关闭行",triggerDesc:"点击降序",triggerAsc:"点击升序",cancelSort:"取消排序"},Modal:{okText:"确定",cancelText:"取消",justOkText:"知道了"},Tour:{Next:"下一步",Previous:"上一步",Finish:"结束导览"},Popconfirm:{cancelText:"取消",okText:"确定"},Transfer:{titles:["",""],searchPlaceholder:"请输入搜索内容",itemUnit:"项",itemsUnit:"项",remove:"删除",selectCurrent:"全选当页",removeCurrent:"删除当页",selectAll:"全选所有",deselectAll:"取消全选",removeAll:"删除全部",selectInvert:"反选当页"},Upload:{uploading:"文件上传中",removeFile:"删除文件",uploadError:"上传错误",previewFile:"预览文件",downloadFile:"下载文件"},Empty:{description:"暂无数据"},Icon:{icon:"图标"},Text:{edit:"编辑",copy:"复制",copied:"复制成功",expand:"展开",collapse:"收起"},Form:{optional:"（可选）",defaultValidateMessages:{default:"字段验证错误${label}",required:"请输入${label}",enum:"${label}必须是其中一个[${enum}]",whitespace:"${label}不能为空字符",date:{format:"${label}日期格式无效",parse:"${label}不能转换为日期",invalid:"${label}是一个无效日期"},types:{string:d,method:d,array:d,object:d,number:d,date:d,boolean:d,integer:d,float:d,regexp:d,email:d,url:d,hex:d},string:{len:"${label}须为${len}个字符",min:"${label}最少${min}个字符",max:"${label}最多${max}个字符",range:"${label}须在${min}-${max}字符之间"},number:{len:"${label}必须等于${len}",min:"${label}最小值为${min}",max:"${label}最大值为${max}",range:"${label}须在${min}-${max}之间"},array:{len:"须为${len}个${label}",min:"最少${min}个${label}",max:"最多${max}个${label}",range:"${label}数量须在${min}-${max}之间"},pattern:{mismatch:"${label}与模式不匹配${pattern}"}}},QRCode:{expired:"二维码过期",refresh:"点击刷新",scanned:"已扫描"},ColorPicker:{presetEmpty:"暂无",transparent:"无色",singleColor:"单色",gradientColor:"渐变色"}};return oe.default=s,oe}var De,Ye;function Yt(){return Ye||(Ye=1,De=Gt()),De}var Vt=Yt();const Ut=It(Vt),et=[{to:"/",label:"学习总览",emoji:"🏠",end:!0},{to:"/chapters",label:"章节大纲",emoji:"📑"},{to:"/practice",label:"章节刷题",emoji:"✏️"},{to:"/kpoint",label:"考点专练",emoji:"🎯"},{to:"/koujue",label:"口诀卡片",emoji:"🎴"},{to:"/exam",label:"模拟测试",emoji:"📝"},{to:"/sprint",label:"考前冲刺",emoji:"🚀"},{to:"/wrongbook",label:"错题本",emoji:"📕"},{to:"/stats",label:"统计",emoji:"📊"},{to:"/bank",label:"题库",emoji:"📚"},{to:"/settings",label:"设置",emoji:"⚙️"},{to:"/about",label:"关于",emoji:"ℹ️"}];function Kt(){const[n,i]=N.useState(!1),r=yt(),c=et.find(a=>a.end?r.pathname===a.to:r.pathname.startsWith(a.to));return e.jsxs("div",{className:"flex w-full h-dvh overflow-hidden bg-slate-50",children:[e.jsx("aside",{className:"hidden md:flex w-56 shrink-0 border-r border-slate-200 bg-white flex-col",children:e.jsx(Ve,{onNavigate:()=>i(!1)})}),n&&e.jsxs("div",{className:"md:hidden fixed inset-0 z-40",children:[e.jsx("div",{className:"absolute inset-0 bg-black/40",onClick:()=>i(!1)}),e.jsx("aside",{className:"absolute left-0 top-0 bottom-0 w-64 bg-white shadow-xl flex flex-col animate-[slidein_0.2s_ease-out]",children:e.jsx(Ve,{onNavigate:()=>i(!1)})})]}),e.jsxs("div",{className:"flex-1 flex flex-col min-w-0 min-h-0 overflow-hidden",children:[e.jsxs("header",{className:"md:hidden flex items-center gap-3 px-4 py-3 border-b border-slate-200 bg-white shrink-0",children:[e.jsx("button",{type:"button",onClick:()=>i(!0),"aria-label":"打开菜单",className:"text-2xl leading-none px-2 py-1 rounded hover:bg-slate-100",children:"☰"}),e.jsx("h1",{className:"font-semibold",children:(c==null?void 0:c.label)??"CPA 会计"})]}),e.jsx("main",{className:"flex-1 min-h-0 overflow-auto scroll-touch",children:e.jsx(ft,{})})]})]})}function Ve({onNavigate:n}){return e.jsxs("div",{className:"flex flex-col h-full",children:[e.jsxs("div",{className:"px-5 py-5 border-b border-slate-100 shrink-0 flex items-center gap-3",children:[e.jsx(Et,{style:{backgroundColor:"#0e7490"},children:"📒"}),e.jsxs("div",{children:[e.jsx("div",{className:"text-base font-semibold text-slate-900",children:"CPA 会计 · 突击"}),e.jsx("div",{className:"text-[11px] text-slate-500",children:"v0.2 · 综合题 + 口诀 + 冲刺"})]})]}),e.jsx("nav",{className:"app-nav flex-1 min-h-0 overflow-auto py-2",children:et.map(i=>e.jsxs(At,{to:i.to,end:i.end,onClick:()=>n==null?void 0:n(),className:({isActive:r})=>`app-nav-link flex items-center gap-3 px-5 py-2.5 text-sm transition-colors ${r?"is-active":""}`,children:[e.jsx("span",{className:"text-base",children:i.emoji}),e.jsx("span",{children:i.label})]},i.to))}),e.jsxs("div",{className:"p-4 text-[11px] text-slate-400 leading-relaxed border-t border-slate-100 shrink-0",children:["数据存于浏览器 IndexedDB",e.jsx("br",{}),"端口 5200 · 持续更新题库"]})]})}class Zt extends zt{constructor(){super("cpa-accounting");V(this,"chapters");V(this,"sections");V(this,"kpoints");V(this,"materials");V(this,"questions");V(this,"attempts");V(this,"attemptsTags");V(this,"notes");V(this,"settings");this.version(2).stores({chapters:"id, order",sections:"id, chapterId, order",kpoints:"id, sectionId, order",materials:"id, chapterId, sectionId",questions:"id, chapterId, sectionId, materialId, type, difficulty, source, *kpointIds, *tags",attempts:"++id, questionId, chapterId, sectionId, correct, inWrongBook, sessionId, at",attemptsTags:"++id, attemptId, tag",notes:"id, questionId, updatedAt",settings:"key"})}}const Jt=[{value:"concept",label:"概念不清",color:"red"},{value:"mixup",label:"张冠李戴",color:"orange"},{value:"number",label:"数字记错",color:"gold"},{value:"absolute",label:"绝对化用语陷阱",color:"volcano"},{value:"misread",label:"审题不仔细",color:"blue"},{value:"other",label:"其它",color:"default"}],o=new Zt;function ge(){return`${Date.now().toString(36)}-${Math.random().toString(36).slice(2,9)}`}function qt(){const n=T(()=>o.chapters.toArray())??[],i=T(()=>o.sections.toArray())??[],r=T(()=>o.kpoints.toArray())??[],c=T(()=>o.questions.toArray())??[],a=T(()=>o.attempts.toArray())??[],[d,s]=N.useState(()=>localStorage.getItem("cpa-exam-date")||"2026-08-29"),[m,l]=N.useState(0);N.useEffect(()=>{const p=new Date(d+"T00:00:00+08:00").getTime(),I=Math.ceil((p-Date.now())/864e5);l(I)},[d]);const k=n.map(p=>{const u=i.filter(f=>f.chapterId===p.id).map(f=>f.id),j=c.filter(f=>u.includes(f.sectionId)),E=a.filter(f=>f.chapterId===p.id),S=E.filter(f=>f.correct).length;return{...p,totalQ:j.length,answeredQ:new Set(E.map(f=>f.questionId)).size,accuracy:E.length?Math.round(S/E.length*100):0}}),h=r.map(p=>{const I=a.filter(E=>E.kpointIds.includes(p.id)),u=I.filter(E=>E.correct).length,j=I.length?u/I.length:1;return{...p,attempts:I.length,accuracy:j}}).filter(p=>p.attempts>0).sort((p,I)=>p.accuracy-I.accuracy).slice(0,5),w=new Date().toISOString().slice(0,10),y=a.filter(p=>new Date(p.at).toISOString().slice(0,10)===w);return e.jsxs("div",{className:"max-w-5xl mx-auto p-4 md:p-8",children:[e.jsxs("div",{className:"mb-6",children:[e.jsx("h1",{className:"text-2xl md:text-3xl font-bold text-slate-900 mb-2",children:"📒 CPA 会计 · 突击刷题"}),e.jsx("p",{className:"text-sm text-slate-500",children:"一个月通关 · 章节 + 考点双轨 · 数据存本地 IndexedDB"})]}),e.jsxs(v,{size:"small",className:"mb-4 !bg-cyan-50 !border-cyan-200",children:[e.jsxs(fe,{gutter:16,align:"middle",children:[e.jsxs(_,{flex:"auto",children:[e.jsxs("div",{className:"flex items-center gap-2 text-sm text-cyan-800 mb-1",children:[e.jsx(wt,{}),e.jsx("span",{children:"距 2026 年 CPA 考试"}),e.jsx("input",{type:"date",value:d,onChange:p=>{s(p.target.value),localStorage.setItem("cpa-exam-date",p.target.value)},className:"ml-2 px-2 py-0.5 rounded border border-cyan-300 text-xs bg-white"})]}),e.jsx("div",{className:"text-3xl font-bold text-cyan-900 leading-tight",children:m>=0?`${m} 天`:"已过期"}),e.jsx("div",{className:"text-xs text-cyan-700 mt-1",children:m>=0?`今日目标：${Math.max(20,y.length+20)} 题 — 已完成 ${y.length}`:"请更新考试日期"})]}),e.jsx(_,{children:e.jsx(z,{to:"/practice?chapter=ch01",children:e.jsx(b,{type:"primary",size:"large",children:"✏️ 立刻开始"})})})]}),y.length>0&&e.jsx(U,{className:"mt-3",percent:Math.min(100,Math.round(y.length/30*100)),format:()=>`${y.length} / 30 题`,strokeColor:"#0891b2"})]}),e.jsxs(fe,{gutter:[12,12],className:"mb-6",children:[e.jsx(_,{xs:12,md:6,children:e.jsx(v,{size:"small",className:"!bg-cyan-50 !border-cyan-200",children:e.jsx(L,{title:e.jsx("span",{className:"text-cyan-700",children:"题库"}),value:c.length,suffix:"题",valueStyle:{color:"#0e7490"}})})}),e.jsx(_,{xs:12,md:6,children:e.jsx(v,{size:"small",className:"!bg-emerald-50 !border-emerald-200",children:e.jsx(L,{title:e.jsx("span",{className:"text-emerald-700",children:"已答题"}),value:a.length,suffix:"次",valueStyle:{color:"#047857"}})})}),e.jsx(_,{xs:12,md:6,children:e.jsx(v,{size:"small",className:"!bg-violet-50 !border-violet-200",children:e.jsx(L,{title:e.jsx("span",{className:"text-violet-700",children:"错题"}),value:a.filter(p=>p.inWrongBook===1).length,suffix:"条",valueStyle:{color:"#6d28d9"}})})}),e.jsx(_,{xs:12,md:6,children:e.jsx(v,{size:"small",className:"!bg-amber-50 !border-amber-200",children:e.jsx(L,{title:e.jsx("span",{className:"text-amber-700",children:"整体正确率"}),value:a.length?Math.round(a.filter(p=>p.correct).length/a.length*100):0,suffix:"%",valueStyle:{color:"#b45309"}})})})]}),e.jsxs("div",{className:"flex flex-wrap gap-2 mb-6",children:[e.jsx(z,{to:"/chapters",children:e.jsx(b,{type:"primary",children:"📑 章节大纲"})}),e.jsx(z,{to:"/kpoint",children:e.jsx(b,{children:"🎯 考点专练"})}),e.jsx(z,{to:"/koujue",children:e.jsx(b,{children:"🎴 口诀卡片"})}),e.jsx(z,{to:"/exam",children:e.jsx(b,{children:"📝 模拟测试"})}),e.jsx(z,{to:"/sprint",children:e.jsx(b,{danger:!0,children:"🚀 考前冲刺"})}),e.jsx(z,{to:"/wrongbook",children:e.jsx(b,{children:"📕 错题本"})}),e.jsx(z,{to:"/stats",children:e.jsx(b,{children:"📊 统计"})}),e.jsx(z,{to:"/bank",children:e.jsx(b,{children:"📚 题库浏览"})})]}),e.jsx("h2",{className:"text-lg font-semibold text-slate-900 mb-3",children:"📑 章节进度"}),e.jsx("div",{className:"space-y-3 mb-6",children:k.length===0?e.jsx(ae,{type:"info",showIcon:!0,message:"题库为空，请到 设置 → 重置题库"}):k.map(p=>e.jsx(v,{size:"small",children:e.jsxs(z,{to:`/practice?chapter=${p.id}`,className:"block",children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsxs("div",{children:[e.jsx("span",{className:"text-lg mr-2",children:p.emoji}),e.jsxs("span",{className:"font-semibold text-slate-900",children:[p.no," ",p.name]})]}),e.jsxs("div",{className:"text-sm text-slate-600",children:[p.answeredQ," / ",p.totalQ," 题 · ",p.accuracy,"%"]})]}),e.jsx(U,{percent:p.totalQ?Math.round(p.answeredQ/p.totalQ*100):0,showInfo:!1,size:"small",strokeColor:"#06b6d4"})]})},p.id))}),h.length>0&&e.jsxs(e.Fragment,{children:[e.jsxs("h2",{className:"text-lg font-semibold text-slate-900 mb-3",children:["⚠️ 薄弱考点 Top ",h.length]}),e.jsx("div",{className:"space-y-2 mb-6",children:h.map(p=>e.jsx(z,{to:`/practice?kpoint=${p.id}`,className:"block",children:e.jsx(v,{size:"small",hoverable:!0,children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{children:[e.jsx("div",{className:"text-sm font-medium text-slate-900",children:p.name}),e.jsxs("div",{className:"text-xs text-slate-500 mt-0.5",children:["答 ",p.attempts," · 对 ",Math.round(p.attempts*p.accuracy)]})]}),e.jsxs(C,{color:"red",children:[Math.round(p.accuracy*100),"%"]})]})})},p.id))})]}),e.jsx(ae,{type:"info",showIcon:!0,message:"做题提示",description:"CPA 会计单选题固定 5 选项（A–E），多选至少 2 个；判断题答错不会倒扣分，但一定要审题；遇到「必须 / 一律 / 全部」这类绝对化表述时，先判 ×。"})]})}let Ae=null;function tt(){return Ae||(Ae=new Promise((n,i)=>{if(typeof document>"u")return n();const r="katex-css";if(!document.getElementById(r)){const s=document.createElement("link");s.id=r,s.rel="stylesheet",s.href="https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.css",document.head.appendChild(s)}const c="katex-js";if(window.katex){n();return}const a=document.getElementById(c);if(a){a.addEventListener("load",()=>n()),a.addEventListener("error",()=>i(new Error("katex load failed")));return}const d=document.createElement("script");d.id=c,d.src="https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.js",d.async=!0,d.onload=()=>n(),d.onerror=()=>i(new Error("katex load failed")),document.head.appendChild(d)}),Ae)}async function Xt(n){if(!n.includes("$"))return n;try{await tt()}catch{return n}const i=window.katex;return i&&(n=n.replace(/\$\$([\s\S]+?)\$\$/g,(r,c)=>{try{return i.renderToString(c,{displayMode:!0,throwOnError:!1})}catch{return r}}),n=n.replace(new RegExp("(?<![\\\\$])\\$([^\\$]+?)\\$(?!\\$)","g"),(r,c)=>{try{return i.renderToString(c,{displayMode:!1,throwOnError:!1})}catch{return r}})),n}function en(){typeof document>"u"||tt().catch(()=>{})}const K={single:"单选题",multiple:"多选题",judge:"判断题",fill:"填空题",calc:"计算题"},ne={single:"blue",multiple:"purple",judge:"orange",fill:"green",calc:"geekblue"};function J(n){return n.trim().toLowerCase()}function tn(n,i){if(n.length!==i.length)return!1;const r=[...n].map(J).sort(),c=[...i].map(J).sort();return r.every((a,d)=>a===c[d])}function Ue(n){const i=[],r=/-?\d{1,3}(?:,\d{3})+(?:\.\d+)?|-?\d+(?:\.\d+)?/g;let c;for(;c=r.exec(n);)i.push(parseFloat(c[0].replace(/,/g,"")));return i}function nn(n,i){const r=n.calcTolerate??0,c=Ue(i);if(c.length===0)return!1;const a=n.answer,d=Array.isArray(a)?a:[a];for(const s of d){const m=Ue(s);if(m.length!==0&&c.length===m.length){let l=!0;for(let k=0;k<m.length;k++)if(Math.abs(c[k]-m[k])>r){l=!1;break}if(l)return!0}}for(const s of d)if(s.split("|").map(J).includes(J(i)))return!0;return!1}function q(n,i){if(i==null)return!1;const r=n.answer;switch(n.type){case"single":case"judge":{const c=Array.isArray(i)?i[0]:i,a=Array.isArray(r)?r[0]:r;return J(c)===J(a)}case"multiple":{const c=Array.isArray(i)?i:[i],a=Array.isArray(r)?r:[r];return tn(c,a)}case"fill":{const c=Array.isArray(i)?i[0]??"":i,a=Array.isArray(r)?r:[r],d=J(c),s=d.split(/\s+/).filter(Boolean);if(s.length===a.length){let m=!0;for(let l=0;l<a.length;l++)if(!a[l].split("|").map(J).includes(s[l])){m=!1;break}if(m)return!0}for(const m of a)if(m.split("|").map(J).includes(d))return!0;return!1}case"calc":{const c=Array.isArray(i)?i[0]??"":i;return nn(n,c)}default:return!1}}function sn(n){return n.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function F(n){return sn(n).replace(/`([^`]+)`/g,(r,c)=>`<code class="prompt-code">${c}</code>`)}async function nt(n){return Xt(n)}function Se(n){const i=n.answer;return Array.isArray(i)?i.join(" | "):i}function Ne(n){return Array.isArray(n)?n.join(", "):n||"（空）"}function an(){const n=T(()=>o.chapters.toArray())??[],i=T(()=>o.sections.toArray())??[],r=T(()=>o.kpoints.toArray())??[],c=T(()=>o.questions.toArray())??[],a=T(()=>o.attempts.toArray())??[];return n.length===0?e.jsx(X,{description:"章节为空",className:"mt-10"}):e.jsxs("div",{className:"max-w-4xl mx-auto p-4 md:p-6",children:[e.jsx("h1",{className:"text-2xl font-bold text-slate-900 mb-1",children:"📑 章节大纲"}),e.jsx("p",{className:"text-sm text-slate-500 mb-4",children:"按章节 / 节 / 考点三级下钻 · 点击直接进入章节刷题"}),e.jsx(vt,{defaultActiveKey:n.map(d=>d.id),ghost:!0,items:n.map(d=>{const s=i.filter(h=>h.chapterId===d.id),m=c.filter(h=>h.chapterId===d.id),l=new Set(a.filter(h=>h.chapterId===d.id).map(h=>h.questionId)),k=m.length?Math.round(l.size/m.length*100):0;return{key:d.id,label:e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"text-xl",children:d.emoji}),e.jsxs("span",{className:"font-semibold",children:[d.no," ",d.name]}),e.jsxs(C,{children:[m.length," 题"]}),e.jsxs(C,{color:"cyan",children:["已答 ",l.size]}),e.jsx(U,{className:"!w-32 ml-auto",percent:k,size:"small",showInfo:!1,strokeColor:"#06b6d4"}),e.jsxs("span",{className:"text-xs text-slate-500 w-10 text-right",children:[k,"%"]})]}),children:e.jsx("div",{className:"space-y-2 pl-2",children:s.map(h=>{const w=m.filter(p=>p.sectionId===h.id),y=r.filter(p=>p.sectionId===h.id);return e.jsxs(v,{size:"small",children:[e.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[e.jsxs("span",{className:"font-medium text-slate-900",children:[h.no," ",h.name]}),e.jsxs(C,{children:[w.length," 题"]}),y.map(p=>e.jsx(C,{color:"cyan",children:p.name},p.id))]}),e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsx(z,{to:`/practice?chapter=${d.id}&section=${h.id}`,children:e.jsxs("span",{className:"inline-block px-3 py-1 text-xs rounded bg-cyan-50 text-cyan-800 border border-cyan-200 hover:bg-cyan-100 cursor-pointer",children:["本节刷题 (",w.length,")"]})}),y.map(p=>{const I=w.filter(u=>u.kpointIds.includes(p.id));return I.length===0?null:e.jsx(z,{to:`/practice?kpoint=${p.id}`,children:e.jsxs("span",{className:"inline-block px-3 py-1 text-xs rounded bg-slate-50 text-slate-700 border border-slate-200 hover:bg-slate-100 cursor-pointer",children:["🎯 ",p.name," (",I.length,")"]})},p.id)})]})]},h.id)})})}})}),e.jsxs("div",{className:"mt-6 text-xs text-slate-500",children:["说明：题库目前仅收录 ",e.jsx("b",{children:"第一章 · 第一节 会计概述"}),"，共 ",c.length," 道题 / ",r.length," 个考点。 其余章节会按学习进度陆续补充。"]}),e.jsx(v,{size:"small",className:"mt-4",title:"📊 本节题型分布",children:e.jsx("div",{className:"flex flex-wrap gap-2",children:Object.entries(c.reduce((d,s)=>(d[s.type]=(d[s.type]??0)+1,d),{})).map(([d,s])=>e.jsxs(C,{color:"blue",children:[K[d]," · ",s]},d))})})]})}function rn(){const[n]=kt(),i=Me(),r=n.get("chapter"),c=n.get("section"),a=n.get("kpoint"),d=a?"kpoint":c?"section":r?"chapter":"all",s=T(()=>o.chapters.toArray())??[],m=T(()=>o.sections.toArray())??[],l=T(()=>o.kpoints.toArray())??[],k=T(()=>o.materials.toArray())??[],h=T(()=>o.questions.toArray())??[],w=N.useMemo(()=>{const A=new Set;return h.forEach(D=>{(d==="all"||d==="chapter"&&D.chapterId===r||d==="section"&&D.sectionId===c||d==="kpoint"&&D.kpointIds.includes(a))&&A.add(D.type)}),Array.from(A)},[h,d,r,c,a]),[y,p]=N.useState([]);N.useEffect(()=>{p(w)},[w.join(",")]);const I=N.useMemo(()=>{let A;return d==="kpoint"?A=h.filter(D=>D.kpointIds.includes(a)):d==="section"?A=h.filter(D=>D.sectionId===c):d==="chapter"?A=h.filter(D=>D.chapterId===r):A=h,A.filter(D=>y.includes(D.type))},[d,r,c,a,h,y]),u=N.useMemo(()=>{const A=[],D=new Map;for(const P of I)P.materialId?(D.has(P.materialId)||D.set(P.materialId,[]),D.get(P.materialId).push(P)):A.push(P);const O=[];for(const[P,H]of D.entries()){H.sort((we,ht)=>(we.subNo??0)-(ht.subNo??0));const G=k.find(we=>we.id===P);O.push({materialId:P,materialPrompt:(G==null?void 0:G.prompt)??"（材料未加载）",materialContext:G==null?void 0:G.context,questions:H})}O.sort((P,H)=>P.materialId.localeCompare(H.materialId));for(const P of A)O.push({materialId:`single::${P.id}`,materialPrompt:"",questions:[P]});return O},[I,k]),[j,E]=N.useState(null),[S,f]=N.useState(0),[x,g]=N.useState(0),[B,R]=N.useState({}),[M,ie]=N.useState({}),[ce,Ee]=N.useState(0),[at]=N.useState(()=>ge()),[it,Be]=N.useState(Date.now()),[Pe,rt]=N.useState(20);N.useEffect(()=>{E(null),f(0),g(0),R({}),ie({}),Ee(0),Be(Date.now())},[d,r,c,a,y.join(",")]);const ct=N.useMemo(()=>{if(d==="kpoint"){const A=l.find(D=>D.id===a);return e.jsxs("span",{children:["🎯 ",e.jsx("b",{children:"考点专练"})," · ",(A==null?void 0:A.name)??"?"," · 共 ",u.length," 组 / ",I.length," 题"]})}if(d==="section"){const A=m.find(D=>D.id===c);return e.jsxs("span",{children:["📑 ",e.jsxs("b",{children:[A==null?void 0:A.no," ",A==null?void 0:A.name]})," · 共 ",u.length," 组"]})}if(d==="chapter"){const A=s.find(D=>D.id===r);return e.jsxs("span",{children:["📒 ",e.jsxs("b",{children:[A==null?void 0:A.no," ",A==null?void 0:A.name]})," · 共 ",u.length," 组"]})}return e.jsxs("span",{children:["🎲 ",e.jsx("b",{children:"全题库"})," · 共 ",u.length," 组"]})},[d,a,c,r,s,m,l,u.length,I.length]);j==null||j.length;const Y=j?j[S]:void 0,dt=Y&&!Y.materialId.startsWith("single::"),re=Y==null?void 0:Y.questions[x];if(I.length===0)return e.jsxs("div",{className:"max-w-2xl mx-auto p-6 text-center text-slate-500",children:[e.jsx(X,{description:"当前范围内没有题目"}),e.jsx(b,{className:"mt-3",onClick:()=>i("/chapters"),children:"返回章节大纲"})]});function ot(){const A=u.filter(H=>!H.materialId.startsWith("single::")),O=[...u.filter(H=>H.materialId.startsWith("single::"))].sort(()=>Math.random()-.5).slice(0,Pe-A.length),P=[...A,...O];E(P),f(0),g(0),R({}),ie({}),Ee(0),Be(Date.now())}async function lt(A,D){const O=q(A,D);O&&Ee(H=>H+1);const P=await o.attempts.add({questionId:A.id,chapterId:A.chapterId,sectionId:A.sectionId,kpointIds:A.kpointIds,type:A.type,given:D,correct:O,durationMs:Date.now()-it,inWrongBook:O?0:1,sessionId:at,at:Date.now()});if(O){const H=await o.attempts.where("questionId").equals(A.id).and(G=>G.inWrongBook===1&&!G.correct).toArray();H.length&&await o.attempts.bulkPut(H.map(G=>({...G,inWrongBook:0})))}return ie(H=>({...H,[A.id]:!0})),{attemptId:P,ok:O}}function pt(){Y&&(x+1<Y.questions.length?g(A=>A+1):S+1>=((j==null?void 0:j.length)??0)?Ze.success({title:"🎉 本轮刷题完成",content:e.jsxs("div",{children:[e.jsxs("p",{children:["共 ",(j==null?void 0:j.length)??0," 组，答对 ",ce," 题"]}),e.jsxs("p",{children:["正确率"," ",j&&j.length?Math.round(ce/j.reduce((A,D)=>A+D.questions.length,0)*100):0,"%"]})]}),onOk:()=>i("/stats")}):(f(A=>A+1),g(0)))}return e.jsxs("div",{className:"max-w-3xl mx-auto p-3 md:p-6",children:[e.jsxs(v,{size:"small",className:"mb-4",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3 mb-2",children:[e.jsx("div",{className:"text-sm text-slate-700",children:ct}),e.jsx(z,{to:"/chapters",className:"text-xs text-cyan-700",children:"← 返回章节大纲"})]}),e.jsxs("div",{className:"flex flex-wrap items-center gap-3",children:[e.jsxs(W,{size:"small",wrap:!0,children:[e.jsx("span",{className:"text-xs text-slate-500",children:"题型："}),["single","multiple","judge","fill","calc"].map(A=>e.jsx(ee,{disabled:!w.includes(A),checked:y.includes(A),onChange:D=>{p(O=>D.target.checked?[...O,A]:O.filter(P=>P!==A))},children:K[A]},A))]}),!j&&e.jsxs("div",{className:"flex items-center gap-2 ml-auto",children:[e.jsx("span",{className:"text-xs text-slate-500",children:"本轮抽"}),e.jsxs($.Group,{value:Pe,onChange:A=>rt(A.target.value),size:"small",children:[e.jsx($.Button,{value:5,children:"5"}),e.jsx($.Button,{value:10,children:"10"}),e.jsx($.Button,{value:20,children:"20"}),e.jsxs($.Button,{value:u.length,children:["全部 (",u.length,")"]})]})]})]}),j&&e.jsx(U,{className:"mt-3",percent:Math.round((S+1)/j.length*100),format:()=>`组 ${S+1} / ${j.length}`,strokeColor:"#0891b2"})]}),j?Y&&re?e.jsx(cn,{group:Y,isMaterial:!!dt,question:re,subIndex:x,totalSubs:Y.questions.length,groupIndex:S,totalGroups:j.length,given:B[re.id]??"",submitted:!!M[re.id],kpMap:Object.fromEntries(l.map(A=>[A.id,A.name])),onChange:A=>R(D=>({...D,[re.id]:A})),onSubmit:(A,D)=>lt(re,A).then(({ok:O})=>({ok:O,tags:D,attemptId:void 0})),onNext:pt}):null:e.jsxs(v,{children:[e.jsx("p",{className:"mb-3 text-slate-700",children:"点击下方按钮开始本轮刷题（综合题会被当作一组，内部多小问连续作答）。"}),e.jsx(b,{type:"primary",onClick:ot,size:"large",children:"开始答题"})]})]})}function cn({group:n,isMaterial:i,question:r,subIndex:c,totalSubs:a,groupIndex:d,totalGroups:s,given:m,submitted:l,kpMap:k,onChange:h,onSubmit:w,onNext:y}){var f;const p=l&&q(r,m),[I,u]=N.useState([]),[j,E]=N.useState(F(r.prompt));N.useEffect(()=>{E(F(r.prompt)),nt(j).then(E).catch(()=>{})},[r.id]),N.useEffect(()=>{u([])},[r.id]);async function S(){if(m===""||Array.isArray(m)&&m.length===0){Z.warning("请先作答");return}await w(m,I)}return e.jsxs(v,{title:e.jsxs("div",{className:"flex items-center gap-2 flex-wrap",children:[e.jsx(C,{color:ne[r.type],children:K[r.type]}),i&&e.jsxs(C,{color:"magenta",children:["综合题 第 ",c+1," / ",a," 问"]}),e.jsxs("span",{className:"text-xs text-slate-500",children:["组 ",d+1," / ",s]}),(f=r.tags)==null?void 0:f.map(x=>e.jsx(C,{children:x},x)),r.source&&e.jsxs(C,{color:"default",children:["📚 ",r.source]}),e.jsxs("span",{className:"ml-auto text-xs text-slate-400",children:["难度 ","★".repeat(r.difficulty??2)]})]}),children:[i&&n.materialPrompt&&e.jsxs("div",{className:"mb-4 p-3 bg-amber-50 border border-amber-200 rounded text-sm",children:[e.jsx("div",{className:"font-semibold text-amber-900 mb-1",children:"📋 共用材料"}),e.jsx("pre",{className:"whitespace-pre-wrap font-sans text-slate-800",children:e.jsx(ln,{text:n.materialPrompt})}),n.materialContext&&e.jsxs("div",{className:"text-xs text-amber-700 mt-2",children:["📎 ",n.materialContext]})]}),e.jsx("div",{className:"text-base text-slate-900 leading-relaxed mb-4 whitespace-pre-wrap",dangerouslySetInnerHTML:{__html:j}}),!l&&e.jsx(dn,{q:r,value:m,onChange:h}),l&&e.jsxs("div",{className:"mt-3 space-y-3",children:[e.jsx(on,{q:r,given:m,kpMap:k,ok:p}),!p&&e.jsxs("div",{className:"rounded p-3 bg-rose-50 border border-rose-200",children:[e.jsx("div",{className:"text-xs text-rose-700 mb-2",children:"⚠️ 这次错在哪里？（多选，便于复盘薄弱原因）"}),e.jsx(ee.Group,{value:I,onChange:x=>u(x),className:"w-full",children:e.jsx(W,{wrap:!0,children:Jt.map(x=>e.jsx(ee,{value:x.value,children:e.jsx(C,{color:x.color,children:x.label})},x.value))})}),e.jsx("div",{className:"mt-2",children:e.jsx(b,{size:"small",onClick:async()=>{if(I.length===0){Z.info("已跳过（没选原因）");return}const g=(await o.attempts.where("questionId").equals(r.id).reverse().sortBy("at"))[0];g!=null&&g.id&&await o.attemptsTags.bulkAdd(I.map(B=>({attemptId:g.id,tag:B,at:Date.now()}))),Z.success("已记录")},children:"保存错题原因"})})]})]}),!l&&r.calcHint&&e.jsx(ae,{type:"info",showIcon:!0,className:"mt-3",message:`💡 提示：${r.calcHint}`}),e.jsx("div",{className:"mt-5 flex flex-wrap gap-2 justify-end",children:l?e.jsx(b,{type:"primary",onClick:y,children:c+1>=a&&d+1>=s?"完成 →":"下一题 →"}):e.jsxs(e.Fragment,{children:[e.jsx(b,{onClick:()=>w("",[]),children:"查看答案"}),e.jsx(b,{type:"primary",onClick:S,children:"提交"})]})})]})}function dn({q:n,value:i,onChange:r}){var c,a;if(n.type==="single")return e.jsx($.Group,{className:"w-full",value:i,onChange:d=>r(d.target.value),children:e.jsx(W,{direction:"vertical",className:"w-full",children:(c=n.options)==null?void 0:c.map(d=>e.jsx($,{value:d.id,className:"!align-top !flex",children:e.jsxs("span",{className:"text-slate-800",children:[e.jsxs("span",{className:"font-mono mr-2 text-slate-400",children:[d.id,"."]}),e.jsx("span",{dangerouslySetInnerHTML:{__html:F(d.text)}})]})},d.id))})});if(n.type==="multiple"){const d=i?i.split(","):[];return e.jsx(ee.Group,{className:"w-full",value:d,onChange:s=>r(s.join(",")),children:e.jsx(W,{direction:"vertical",className:"w-full",children:(a=n.options)==null?void 0:a.map(s=>e.jsx(ee,{value:s.id,className:"!align-top",children:e.jsxs("span",{className:"text-slate-800",children:[e.jsxs("span",{className:"font-mono mr-2 text-slate-400",children:[s.id,"."]}),e.jsx("span",{dangerouslySetInnerHTML:{__html:F(s.text)}})]})},s.id))})})}return n.type==="judge"?e.jsxs($.Group,{value:i,onChange:d=>r(d.target.value),children:[e.jsx($,{value:"true",children:"✅ 正确"}),e.jsx($,{value:"false",children:"❌ 错误"})]}):e.jsxs("div",{children:[e.jsx(ae,{type:"info",showIcon:!0,className:"mb-2",message:n.type==="calc"?"计算题 — 输入数值或公式结果（带过程也算对）":"填空题 — 输入关键词"}),e.jsx(je.TextArea,{rows:2,placeholder:"在这里输入答案…",value:i,onChange:d=>r(d.target.value)}),e.jsx("p",{className:"text-xs text-slate-500 mt-1",children:"多空按空格分隔；计算题写计算过程 + 数值最稳"})]})}function on({q:n,given:i,kpMap:r,ok:c}){return e.jsxs("div",{className:`rounded-lg p-3 text-sm ${c?"bg-emerald-50 border border-emerald-200":"bg-rose-50 border border-rose-200"}`,children:[e.jsxs("div",{className:`font-semibold mb-2 ${c?"text-emerald-700":"text-rose-700"}`,children:[c?"✓ 答对了":"✗ 答错了",n.kpointIds.length>0&&e.jsxs("span",{className:"font-normal text-slate-500 text-xs ml-2",children:["考点：",n.kpointIds.map(a=>r[a]??a).join(" / ")]})]}),e.jsxs("div",{className:"text-slate-700 mb-1",children:["你的答案：",e.jsx("span",{className:"font-mono",children:Ne(i)})]}),e.jsxs("div",{className:"text-slate-700 mb-1",children:["正确答案：",e.jsx("span",{className:"font-mono text-emerald-700",children:Se(n)})]}),n.explanation&&e.jsxs("div",{className:"text-slate-600 mt-2 leading-relaxed whitespace-pre-wrap",children:["💡 ",n.explanation]})]})}function ln({text:n}){const[i,r]=N.useState(F(n));return N.useEffect(()=>{r(F(n)),nt(i).then(r).catch(()=>{})},[n]),e.jsx("span",{dangerouslySetInnerHTML:{__html:i}})}function pn(){const n=T(()=>o.kpoints.toArray())??[],i=T(()=>o.sections.toArray())??[],r=T(()=>o.chapters.toArray())??[],c=T(()=>o.questions.toArray())??[],a=T(()=>o.attempts.toArray())??[];if(n.length===0)return e.jsx(X,{description:"暂无考点",className:"mt-10"});const d=n.map(s=>{const m=c.filter(y=>y.kpointIds.includes(s.id)),l=a.filter(y=>y.kpointIds.includes(s.id)),k=l.filter(y=>y.correct).length,h=i.find(y=>y.id===s.sectionId),w=r.find(y=>y.id===(h==null?void 0:h.chapterId));return{...s,total:m.length,answered:new Set(l.map(y=>y.questionId)).size,accuracy:l.length?Math.round(k/l.length*100):0,chapterNo:w==null?void 0:w.no,chapterName:w==null?void 0:w.name,sectionNo:h==null?void 0:h.no,sectionName:h==null?void 0:h.name}});return e.jsxs("div",{className:"max-w-4xl mx-auto p-4 md:p-6",children:[e.jsx("h1",{className:"text-2xl font-bold text-slate-900 mb-1",children:"🎯 考点专练"}),e.jsx("p",{className:"text-sm text-slate-500 mb-4",children:"按考点精准定位薄弱点 · 红色 = 需重点突破"}),e.jsx("div",{className:"space-y-3",children:d.map(s=>{const m=s.accuracy>=80?"green":s.accuracy>=60?"gold":"red";return e.jsx(z,{to:`/practice?kpoint=${s.id}`,children:e.jsx(v,{size:"small",hoverable:!0,children:e.jsxs("div",{className:"flex items-start justify-between gap-3",children:[e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[e.jsxs(C,{color:"cyan",children:[s.chapterNo," ",s.sectionNo]}),e.jsx("span",{className:"font-semibold text-slate-900",children:s.name})]}),s.hint&&e.jsxs("div",{className:"text-xs text-slate-500 mb-2",children:["💡 ",s.hint]}),e.jsxs("div",{className:"flex items-center gap-3 text-xs text-slate-600",children:[e.jsxs("span",{children:["题 ",s.total]}),e.jsxs("span",{children:["已答 ",s.answered]}),e.jsx(U,{className:"!flex-1 !max-w-xs",percent:s.accuracy,size:"small",showInfo:!1,strokeColor:m==="red"?"#ef4444":m==="gold"?"#f59e0b":"#10b981"}),e.jsxs("span",{className:"font-mono",children:[s.accuracy,"%"]})]})]}),e.jsx(C,{color:m,children:s.accuracy>=80?"掌握":s.accuracy>=60?"一般":"薄弱"})]})})},s.id)})})]})}const te={single:25,multiple:10,judge:10,calc:2,durationMs:3600*1e3};function hn(){const n=Me(),i=T(()=>o.questions.toArray())??[];T(()=>o.kpoints.toArray());const r=N.useMemo(()=>{const x=i.reduce((g,B)=>(g[B.type]=(g[B.type]??0)+1,g),{});return{single:Math.min(te.single,x.single??0),multiple:Math.min(te.multiple,x.multiple??0),judge:Math.min(te.judge,x.judge??0),calc:Math.min(te.calc,x.calc??0),durationMs:te.durationMs}},[i]),c=r.single+r.multiple+r.judge+r.calc,[a,d]=N.useState(null),[s,m]=N.useState({}),[l,k]=N.useState(!1),[h,w]=N.useState(te.durationMs),[y,p]=N.useState(!1),[I]=N.useState(()=>ge());N.useEffect(()=>{if(!y||l)return;const x=Date.now(),g=setInterval(()=>{const B=te.durationMs-(Date.now()-x);w(Math.max(0,B)),B<=0&&(clearInterval(g),j())},1e3);return()=>clearInterval(g)},[y,l]);function u(){const x=(B,R)=>i.filter(M=>M.type===B).sort(()=>Math.random()-.5).slice(0,R),g=[...x("single",r.single),...x("multiple",r.multiple),...x("judge",r.judge),...x("calc",r.calc)].sort(()=>Math.random()-.5);d(g),m({}),k(!1),w(te.durationMs),p(!0)}async function j(){if(!(!a||l)){for(const x of a){const g=s[x.id],B=q(x,g);await o.attempts.add({questionId:x.id,chapterId:x.chapterId,sectionId:x.sectionId,kpointIds:x.kpointIds,type:x.type,given:g??"",correct:B,durationMs:0,inWrongBook:B?0:1,sessionId:I,at:Date.now()})}k(!0)}}if(!y)return e.jsxs("div",{className:"max-w-3xl mx-auto p-4 md:p-6",children:[e.jsx("h1",{className:"text-2xl font-bold text-slate-900 mb-1",children:"📝 模拟测试"}),e.jsx("p",{className:"text-sm text-slate-500 mb-4",children:"限时 60 分钟 · 一次性作答 · 按 CPA 题型配比组卷"}),e.jsx(v,{size:"small",className:"mb-4",title:"📋 本次组卷",children:e.jsxs(W,{direction:"vertical",size:"small",className:"w-full",children:[e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{children:e.jsx(C,{color:"blue",children:"单选题"})}),e.jsxs("span",{children:[r.single," 题"]})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{children:e.jsx(C,{color:"purple",children:"多选题"})}),e.jsxs("span",{children:[r.multiple," 题"]})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{children:e.jsx(C,{color:"orange",children:"判断题"})}),e.jsxs("span",{children:[r.judge," 题"]})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{children:e.jsx(C,{color:"geekblue",children:"计算/综合"})}),e.jsxs("span",{children:[r.calc," 题"]})]}),e.jsxs("div",{className:"flex justify-between font-semibold text-slate-900 pt-2 border-t border-slate-100",children:[e.jsx("span",{children:"合计"}),e.jsxs("span",{children:[c," 题 · 限时 60 分钟"]})]})]})}),c<10&&e.jsx(ae,{type:"warning",showIcon:!0,className:"mb-4",message:"题库量不足",description:`目前仅收录 ${c} 道题；建议先把第一章·第一节刷完，再来模拟测试。`}),e.jsx(b,{type:"primary",size:"large",onClick:u,disabled:c<5,children:"开始模拟测试"})]});if(l&&a){const x=a.reduce((R,M)=>q(M,s[M.id])?R+Ce(M.type):R,0),g=a.reduce((R,M)=>R+Ce(M.type),0),B=a.filter(R=>q(R,s[R.id])).length;return e.jsxs("div",{className:"max-w-3xl mx-auto p-4 md:p-6",children:[e.jsx(Je,{status:x/g>=.6?"success":"warning",title:`本次得分 ${x} / ${g}`,subTitle:`答对 ${B} / ${a.length} 题 · 正确率 ${Math.round(B/a.length*100)}%`,extra:[e.jsx(b,{type:"primary",onClick:()=>d(a),children:"查看解析"},"review"),e.jsx(b,{onClick:()=>p(!1),children:"再来一次"},"again"),e.jsx(b,{onClick:()=>n("/stats"),children:"返回统计"},"back")]}),e.jsx("h2",{className:"text-lg font-semibold text-slate-900 mt-6 mb-3",children:"📋 题目解析"}),e.jsx("div",{className:"space-y-3",children:a.map((R,M)=>{const ie=s[R.id],ce=q(R,ie);return e.jsxs(v,{size:"small",children:[e.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[e.jsxs("span",{className:"text-xs text-slate-400",children:["#",M+1]}),e.jsx(C,{color:ne[R.type],children:K[R.type]}),e.jsx(C,{color:ce?"green":"red",children:ce?"✓":"✗"})]}),e.jsx("div",{className:"text-sm text-slate-900 leading-relaxed mb-2 whitespace-pre-wrap",dangerouslySetInnerHTML:{__html:F(R.prompt)}}),e.jsxs("div",{className:"text-xs text-slate-600",children:["你的答案：",e.jsx("span",{className:"font-mono",children:Ne(ie??"")})," · ","正确：",e.jsx("span",{className:"font-mono text-emerald-700",children:Array.isArray(R.answer)?R.answer.join(" | "):R.answer})]}),R.explanation&&e.jsxs("div",{className:"text-xs text-slate-500 mt-1 whitespace-pre-wrap",children:["💡 ",R.explanation]})]},R.id)})})]})}if(!a)return null;const E=Math.floor(h/6e4),S=Math.floor(h%6e4/1e3),f=Object.keys(s).filter(x=>{const g=s[x];return g!==""&&!(Array.isArray(g)&&g.length===0)}).length;return e.jsxs("div",{className:"max-w-3xl mx-auto p-4 md:p-6",children:[e.jsxs(v,{size:"small",className:"mb-4 sticky top-0 z-10",children:[e.jsxs("div",{className:"flex items-center justify-between flex-wrap gap-2",children:[e.jsxs("div",{className:"text-sm",children:[e.jsx(C,{color:"cyan",children:"模拟测试"}),"已答 ",e.jsx("b",{children:f})," / ",a.length]}),e.jsxs("div",{className:`font-mono text-lg ${h<300*1e3?"text-red-600":"text-slate-700"}`,children:["⏱ ",String(E).padStart(2,"0"),":",String(S).padStart(2,"0")]}),e.jsx(b,{type:"primary",onClick:j,children:"交卷"})]}),e.jsx(U,{className:"mt-2",percent:Math.round(f/a.length*100),showInfo:!1,size:"small",strokeColor:"#0891b2"})]}),a.map((x,g)=>{var B,R;return e.jsxs(v,{size:"small",className:"mb-3",title:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsxs("span",{className:"text-xs text-slate-400",children:["#",g+1]}),e.jsx(C,{color:ne[x.type],children:K[x.type]}),e.jsxs("span",{className:"text-xs text-slate-500",children:[Ce(x.type)," 分"]})]}),children:[e.jsx("div",{className:"text-sm text-slate-900 leading-relaxed mb-3 whitespace-pre-wrap",dangerouslySetInnerHTML:{__html:F(x.prompt)}}),x.type==="single"&&e.jsx($.Group,{className:"w-full",value:typeof s[x.id]=="string"?s[x.id]:"",onChange:M=>m({...s,[x.id]:M.target.value}),children:e.jsx(W,{direction:"vertical",className:"w-full",children:(B=x.options)==null?void 0:B.map(M=>e.jsx($,{value:M.id,className:"!align-top !flex",children:e.jsxs("span",{className:"text-slate-800",children:[e.jsxs("span",{className:"font-mono mr-2 text-slate-400",children:[M.id,"."]}),e.jsx("span",{dangerouslySetInnerHTML:{__html:F(M.text)}})]})},M.id))})}),x.type==="multiple"&&e.jsx(ee.Group,{className:"w-full",value:Array.isArray(s[x.id])?s[x.id]:[],onChange:M=>m({...s,[x.id]:M}),children:e.jsx(W,{direction:"vertical",className:"w-full",children:(R=x.options)==null?void 0:R.map(M=>e.jsx(ee,{value:M.id,className:"!align-top",children:e.jsxs("span",{className:"text-slate-800",children:[e.jsxs("span",{className:"font-mono mr-2 text-slate-400",children:[M.id,"."]}),e.jsx("span",{dangerouslySetInnerHTML:{__html:F(M.text)}})]})},M.id))})}),x.type==="judge"&&e.jsxs($.Group,{value:typeof s[x.id]=="string"?s[x.id]:"",onChange:M=>m({...s,[x.id]:M.target.value}),children:[e.jsx($,{value:"true",children:"✅ 正确"}),e.jsx($,{value:"false",children:"❌ 错误"})]}),(x.type==="fill"||x.type==="calc")&&e.jsx(je.TextArea,{rows:2,placeholder:"输入答案…",value:typeof s[x.id]=="string"?s[x.id]:"",onChange:M=>m({...s,[x.id]:M.target.value})})]},x.id)}),e.jsx("div",{className:"sticky bottom-0 -mx-4 md:-mx-6 p-3 bg-white border-t border-slate-200 mt-4",children:e.jsxs("div",{className:"flex items-center justify-between max-w-3xl mx-auto",children:[e.jsx(z,{to:"/",className:"text-sm text-cyan-700",children:"← 退出测试"}),e.jsx(b,{type:"primary",size:"large",onClick:j,children:"交卷"})]})})]})}function Ce(n){return n==="single"?1.5:n==="multiple"?2:n==="judge"?1:4}function xn(){const n=Me(),i=T(()=>o.questions.toArray())??[],r=T(()=>o.attempts.toArray())??[],c=N.useMemo(()=>{const u=new Set(r.filter(x=>x.inWrongBook===1).map(x=>x.questionId)),j=new Set(i.filter(x=>x.bookmarked===1).map(x=>x.id)),E=Date.now()-7*864e5,S=new Set(r.filter(x=>x.at>=E).map(x=>x.questionId)),f=new Set(i.filter(x=>!S.has(x.id)).map(x=>x.id));return i.filter(x=>S.has(x.id)&&!u.has(x.id)).length,{wrong:u.size,bookmark:j.size,fresh:f.size,total:i.length}},[i,r]),[a,d]=N.useState(null),[s,m]=N.useState({}),[l,k]=N.useState(!1),[h]=N.useState(()=>ge()),[w]=N.useState(()=>Date.now());function y(){const u=new Set(r.filter(g=>g.inWrongBook===1).map(g=>g.questionId)),j=new Set(i.filter(g=>g.bookmarked===1).map(g=>g.id)),E=Date.now()-7*864e5,S=new Set(r.filter(g=>g.at>=E).map(g=>g.questionId)),f=new Set;i.forEach(g=>{u.has(g.id)&&f.add(g.id)}),i.forEach(g=>{j.has(g.id)&&f.add(g.id)}),i.forEach(g=>{S.has(g.id)||f.add(g.id)});const x=i.filter(g=>f.has(g.id)).sort(()=>Math.random()-.5).slice(0,30);d(x),m({}),k(!1)}async function p(){if(a){for(const u of a){const j=s[u.id]??"",E=q(u,j);await o.attempts.add({questionId:u.id,chapterId:u.chapterId,sectionId:u.sectionId,kpointIds:u.kpointIds,type:u.type,given:j,correct:E,durationMs:0,inWrongBook:E?0:1,sessionId:h,at:Date.now()})}k(!0)}}if(!a)return e.jsxs("div",{className:"max-w-3xl mx-auto p-4 md:p-6",children:[e.jsx("h1",{className:"text-2xl font-bold text-slate-900 mb-1",children:"🚀 考前冲刺"}),e.jsx("p",{className:"text-sm text-slate-500 mb-4",children:"自动从 错题本 + 收藏 + 7 天未刷 题里随机抽 30 道，一次性评测"}),e.jsxs(fe,{gutter:[12,12],className:"mb-4",children:[e.jsx(_,{xs:12,md:6,children:e.jsx(v,{size:"small",className:"!bg-rose-50 !border-rose-200",children:e.jsx(L,{title:e.jsx("span",{className:"text-rose-700",children:"错题"}),value:c.wrong,suffix:"题",valueStyle:{color:"#be123c"}})})}),e.jsx(_,{xs:12,md:6,children:e.jsx(v,{size:"small",className:"!bg-amber-50 !border-amber-200",children:e.jsx(L,{title:e.jsx("span",{className:"text-amber-700",children:"收藏"}),value:c.bookmark,suffix:"题",valueStyle:{color:"#b45309"}})})}),e.jsx(_,{xs:12,md:6,children:e.jsx(v,{size:"small",className:"!bg-cyan-50 !border-cyan-200",children:e.jsx(L,{title:e.jsx("span",{className:"text-cyan-700",children:"7天未做"}),value:c.fresh,suffix:"题",valueStyle:{color:"#0e7490"}})})}),e.jsx(_,{xs:12,md:6,children:e.jsx(v,{size:"small",className:"!bg-violet-50 !border-violet-200",children:e.jsx(L,{title:e.jsx("span",{className:"text-violet-700",children:"题库"}),value:c.total,suffix:"题",valueStyle:{color:"#6d28d9"}})})})]}),c.wrong+c.bookmark+c.fresh===0&&e.jsx(ae,{type:"warning",showIcon:!0,className:"mb-4",message:"三处都没题",description:"先去章节刷题产生一些错题，或在题库浏览里点收藏，再来冲刺。"}),e.jsx(b,{type:"primary",size:"large",onClick:y,disabled:c.wrong+c.bookmark+c.fresh===0,children:"开始冲刺"})]});if(l){const u=a.filter(E=>q(E,s[E.id])).length,j=u*2;return e.jsxs("div",{className:"max-w-3xl mx-auto p-4 md:p-6",children:[e.jsx(Je,{status:j/a.length/2>=.6?"success":"warning",title:`冲刺成绩 ${u} / ${a.length}`,subTitle:`正确率 ${Math.round(u/a.length*100)}% · 答题耗时 ${Math.round((Date.now()-w)/6e4)} 分钟`,extra:[e.jsx(b,{type:"primary",onClick:()=>d(null),children:"再冲一次"},"again"),e.jsx(b,{onClick:()=>n("/stats"),children:"查看统计"},"stats")]}),e.jsx("div",{className:"space-y-3 mt-4",children:a.map((E,S)=>{const f=s[E.id]??"",x=q(E,f);return e.jsxs(v,{size:"small",children:[e.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[e.jsxs("span",{className:"text-xs text-slate-400",children:["#",S+1]}),e.jsx(C,{color:ne[E.type],children:K[E.type]}),e.jsx(C,{color:x?"green":"red",children:x?"✓":"✗"})]}),e.jsx("div",{className:"text-sm text-slate-900 leading-relaxed mb-2 whitespace-pre-wrap",dangerouslySetInnerHTML:{__html:F(E.prompt)}}),e.jsxs("div",{className:"text-xs text-slate-600",children:["你的答案：",e.jsx("span",{className:"font-mono",children:Ne(f)})," · ","正确：",e.jsx("span",{className:"font-mono text-emerald-700",children:Array.isArray(E.answer)?E.answer.join(" | "):E.answer})]}),E.explanation&&e.jsxs("div",{className:"text-xs text-slate-500 mt-1 whitespace-pre-wrap",children:["💡 ",E.explanation]})]},E.id)})})]})}const I=Object.values(s).filter(u=>u&&u.length>0).length;return e.jsxs("div",{className:"max-w-3xl mx-auto p-3 md:p-6",children:[e.jsxs(v,{size:"small",className:"mb-3 sticky top-0 z-10",children:[e.jsxs("div",{className:"flex items-center justify-between flex-wrap gap-2",children:[e.jsxs("div",{className:"text-sm",children:[e.jsx(C,{color:"magenta",children:"🚀 考前冲刺"}),"已答 ",e.jsx("b",{children:I})," / ",a.length]}),e.jsx(b,{type:"primary",onClick:p,children:"交卷"})]}),e.jsx(U,{className:"mt-2",percent:Math.round(I/a.length*100),showInfo:!1,size:"small",strokeColor:"#c026d3"})]}),a.map((u,j)=>{var E,S;return e.jsxs(v,{size:"small",className:"mb-3",title:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsxs("span",{className:"text-xs text-slate-400",children:["#",j+1]}),e.jsx(C,{color:ne[u.type],children:K[u.type]})]}),children:[e.jsx("div",{className:"text-sm text-slate-900 leading-relaxed mb-3 whitespace-pre-wrap",dangerouslySetInnerHTML:{__html:F(u.prompt)}}),u.type==="single"&&e.jsx($.Group,{className:"w-full",value:s[u.id]??"",onChange:f=>m({...s,[u.id]:f.target.value}),children:e.jsx(W,{direction:"vertical",className:"w-full",children:(E=u.options)==null?void 0:E.map(f=>e.jsx($,{value:f.id,className:"!align-top !flex",children:e.jsxs("span",{className:"text-slate-800",children:[e.jsxs("span",{className:"font-mono mr-2 text-slate-400",children:[f.id,"."]}),e.jsx("span",{dangerouslySetInnerHTML:{__html:F(f.text)}})]})},f.id))})}),u.type==="multiple"&&e.jsx(ee.Group,{className:"w-full",value:(s[u.id]??"").split(",").filter(Boolean),onChange:f=>m({...s,[u.id]:f.join(",")}),children:e.jsx(W,{direction:"vertical",className:"w-full",children:(S=u.options)==null?void 0:S.map(f=>e.jsx(ee,{value:f.id,className:"!align-top",children:e.jsxs("span",{className:"text-slate-800",children:[e.jsxs("span",{className:"font-mono mr-2 text-slate-400",children:[f.id,"."]}),e.jsx("span",{dangerouslySetInnerHTML:{__html:F(f.text)}})]})},f.id))})}),u.type==="judge"&&e.jsxs($.Group,{value:s[u.id]??"",onChange:f=>m({...s,[u.id]:f.target.value}),children:[e.jsx($,{value:"true",children:"✅ 正确"}),e.jsx($,{value:"false",children:"❌ 错误"})]}),(u.type==="fill"||u.type==="calc")&&e.jsx(je.TextArea,{rows:2,value:s[u.id]??"",onChange:f=>m({...s,[u.id]:f.target.value})})]},u.id)}),e.jsx("div",{className:"sticky bottom-0 -mx-3 md:-mx-6 p-3 bg-white border-t border-slate-200 mt-4",children:e.jsxs("div",{className:"flex items-center justify-between max-w-3xl mx-auto",children:[e.jsx(z,{to:"/",className:"text-sm text-cyan-700",children:"← 退出冲刺"}),e.jsx(b,{type:"primary",size:"large",onClick:p,children:"交卷"})]})})]})}const Ie=[{title:"会计基本假设（4 个）",emoji:"🏛️",category:"会计概述",body:"会计主体 / 持续经营 / 会计分期 / 货币计量",details:['会计主体：解决"为谁做账"的空间问题',"持续经营：假设企业不会破产清算","会计分期：把持续经营切成一段一段（月 / 季 / 年）","货币计量：以货币为统一计量 + 假定币值稳定"],mnemonics:"主体-经营-分期-货币（主经分货）",source:"第一章·第一节"},{title:"会计八项信息质量要求",emoji:"✨",category:"会计概述",body:"可靠性 / 相关性 / 可理解性 / 可比性 / 实质重于形式 / 重要性 / 谨慎性 / 及时性",details:["可靠性：真实、可靠、可验证","相关性：与决策相关","可理解性：清晰明了","可比性：纵向（不同期间）+ 横向（不同企业）","实质重于形式：按经济实质核算","重要性：重要详尽、不重要简略","谨慎性：不应高估资产/收益，不应低估负债/费用","及时性：及时提供"],mnemonics:'可相理可比，实质重要谨，及（"可靠性、相关性、可理解性、可比性、实质重于形式、重要性、谨慎性、及时性"）',source:"第一章·第一节"},{title:"六要素分类（3+3）",emoji:"🔢",category:"会计概述",body:`财务状况三要素（时点）：资产、负债、所有者权益
经营成果三要素（时期）：收入、费用、利润`,details:["财务状况：反映某一日期的家底（资产、负债、所有者权益）","经营成果：反映某一期间的盈亏（收入、费用、利润）","动态 vs 静态：财务状况 = 静态（时点），经营成果 = 动态（时期）"],mnemonics:"财负资，经收利（财务状况=负资，经营成果=收利）",source:"第一章·第一节"},{title:"决策有用观 vs 受托责任观",emoji:"⚖️",category:"会计概述",body:`决策有用观：强调相关性（为投资者决策）
受托责任观：强调可靠性（反映受托履行情况）`,details:["决策有用观：信息使用者主要为投资者、债权人","受托责任观：信息使用者主要为所有者","我国准则同时采用两者，但更侧重决策有用观"],mnemonics:"决策有用 = 重相关；受托责任 = 重可靠",source:"第一章·第一节"},{title:"会计要素确认（资产三特征）",emoji:"🧱",category:"要素确认",body:"过去形成 / 现在拥有或控制 / 能带来未来经济利益",details:["过去形成：由过去交易或事项形成（不是未来计划）","现在拥有或控制：控制权即可，不要求所有权（融资租入即为典型）","未来经济利益：很可能流入 + 能可靠计量"],mnemonics:"过去 + 控制 + 利益",source:"第一章·第二节"},{title:"五种计量属性",emoji:"⚖️",category:"计量属性",body:"历史成本 / 重置成本 / 可变现净值 / 现值 / 公允价值",details:["历史成本：购置时实际支付（应当采用）","重置成本：现在重买的价格","可变现净值：估计售价 − 至完工成本 − 销售费用 − 税费","现值：未来现金流折现","公允价值：公平交易中熟悉情况双方自愿价格"],mnemonics:"历重可现公（历史成本是默认，其它四个是补充）",source:"第一章·第二节"},{title:"借贷记账法（8 字口诀）",emoji:"💱",category:"复式记账",body:"有借必有贷，借贷必相等",details:["资产、成本、费用 = 借增贷减","负债、所有者权益、收入 = 贷增借减","每笔业务借贷两方金额必相等"],mnemonics:'"资费借增，负权收贷增"',source:"第一章·第二节"},{title:"错账更正三法",emoji:"✏️",category:"错账更正",body:"划线更正法 / 红字更正法 / 补充登记法",details:["划线更正法：结账前 + 文字/数字错（在原数字上划红线）","红字更正法：记账后 + 多记/科目错/方向错","补充登记法：记账后 + 少记金额"],mnemonics:"划线-文字数字，红字-记账后多错，补登-少记",source:"第一章·第二节"},{title:"永续盘存制 vs 实地盘存制",emoji:"📦",category:"财产清查",body:`永续：逐笔登记 + 随时结存
实地：平时只记发出 + 期末倒挤`,details:["永续盘存制：账面随时反映结存数（明细账完整）","实地盘存制：期末通过盘点倒推结存（账上只发出不结存）","适用范围：永续 = 贵重 / 大宗 / 重要存货；实地 = 低值易耗 / 小型商业"],mnemonics:"永续 = 永远有账；实地 = 实地盘点",source:"第一章·第二节"},{title:"会计恒等式",emoji:"🟰",category:"复式记账",body:`资产 = 负债 + 所有者权益
（动态扩展）资产 = 负债 + 所有者权益 + (收入 − 费用)`,details:["基本恒等式反映财务状况（时点）","动态恒等式反映经营成果对权益的影响","试算平衡：所有账户借方发生额合计 = 贷方发生额合计"],mnemonics:"A = L + E（Assets = Liabilities + Equity）",source:"第一章·第二节"}];function mn(){const[n,i]=N.useState(0),[r,c]=N.useState(!1),a=Ie[n];if(!a)return e.jsx(X,{description:"没有口诀",className:"mt-10"});function d(s){const m=(n+s+Ie.length)%Ie.length;i(m),c(!1)}return e.jsxs("div",{className:"max-w-2xl mx-auto p-4 md:p-6",children:[e.jsxs("div",{className:"flex items-center justify-between mb-4 flex-wrap gap-2",children:[e.jsx("h1",{className:"text-2xl font-bold text-slate-900",children:"🎴 口诀卡片"}),e.jsxs(C,{children:[n+1," / ",Ie.length]})]}),e.jsx(v,{className:"cursor-pointer select-none",onClick:()=>c(s=>!s),style:{minHeight:280},children:r?e.jsxs("div",{className:"p-2",children:[e.jsxs("div",{className:"flex items-center justify-between mb-3",children:[e.jsxs("span",{className:"text-sm font-semibold text-slate-700",children:[a.emoji," ",a.title]}),e.jsx(C,{children:a.source})]}),e.jsx("div",{className:"text-sm text-slate-800 leading-relaxed whitespace-pre-wrap mb-3",children:a.body}),a.details&&e.jsx("ul",{className:"text-sm text-slate-700 space-y-1 list-disc pl-5 mb-3",children:a.details.map((s,m)=>e.jsx("li",{children:s},m))}),a.mnemonics&&e.jsxs("div",{className:"mt-2 p-2 bg-amber-50 border border-amber-200 rounded text-sm text-amber-900",children:[e.jsx("span",{className:"font-semibold",children:"口诀："}),a.mnemonics]})]}):e.jsxs("div",{className:"text-center py-8",children:[e.jsx("div",{className:"text-6xl mb-4",children:a.emoji}),e.jsx("div",{className:"text-2xl font-bold text-slate-900 mb-3",children:a.title}),e.jsx(C,{color:"cyan",children:a.source}),e.jsx("p",{className:"text-xs text-slate-400 mt-6",children:'点击卡片或点"翻面"查看答案'})]})}),e.jsxs("div",{className:"flex items-center justify-between mt-4",children:[e.jsx(b,{icon:e.jsx(bt,{}),onClick:()=>d(-1),size:"large",children:"上一张"}),e.jsx(W,{children:e.jsx(b,{icon:e.jsx(Tt,{}),onClick:()=>c(s=>!s),children:"翻面"})}),e.jsx(b,{icon:e.jsx(Dt,{}),onClick:()=>d(1),size:"large",type:"primary",children:"下一张"})]}),e.jsx("div",{className:"mt-4 text-xs text-slate-500 text-center",children:"键盘快捷键：← 上一张 / → 下一张 / 空格 翻面"}),e.jsx(v,{size:"small",className:"mt-6",title:"📑 全部口诀",children:e.jsx("div",{className:"grid grid-cols-2 md:grid-cols-3 gap-2",children:Ie.map((s,m)=>e.jsxs("button",{onClick:()=>{i(m),c(!1)},className:`text-left px-3 py-2 text-xs rounded border transition-colors ${m===n?"bg-cyan-50 border-cyan-300 text-cyan-900":"bg-white border-slate-200 text-slate-700 hover:bg-slate-50"}`,children:[e.jsx("div",{className:"text-lg",children:s.emoji}),e.jsx("div",{className:"font-medium",children:s.title}),e.jsx("div",{className:"text-[10px] text-slate-500",children:s.source})]},s.title))})})]})}function un(){const n=T(()=>o.attempts.where("inWrongBook").equals(1).toArray(),[])??[],i=T(()=>o.questions.toArray())??[],r=new Map;for(const s of[...n].sort((m,l)=>l.at-m.at))r.has(s.questionId)||r.set(s.questionId,s);const c=[...r.values()].sort((s,m)=>m.at-s.at),a=c.reduce((s,m)=>{var l;return(s[l=m.chapterId]??(s[l]=[])).push(m),s},{});async function d(){await o.attempts.where("inWrongBook").equals(1).modify({inWrongBook:0})}return e.jsxs("div",{className:"max-w-3xl mx-auto p-4 md:p-6",children:[e.jsxs("div",{className:"flex items-center justify-between mb-4 flex-wrap gap-2",children:[e.jsx("h1",{className:"text-2xl font-bold text-slate-900",children:"📕 错题本"}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx(z,{to:"/practice?wrong=1",children:e.jsxs(b,{type:"primary",disabled:c.length===0,children:["开始复习 (",c.length,")"]})}),c.length>0&&e.jsx(ke,{title:"确认清空错题本？",description:"只移除错题标记，已保留的答题记录不会被删除。",onConfirm:d,okText:"清空",cancelText:"取消",children:e.jsx(b,{danger:!0,children:"清空"})})]})]}),c.length===0?e.jsx(X,{description:"还没有错题，继续加油 💪"}):e.jsx(Ct,{defaultActiveKey:"all",items:[{key:"all",label:`全部 (${c.length})`,children:e.jsx(Ke,{wrongList:c,questions:i})},...Object.entries(a).map(([s,m])=>({key:s,label:`${s} (${m.length})`,children:e.jsx(Ke,{wrongList:m,questions:i})}))]})]})}function Ke({wrongList:n,questions:i}){return e.jsx("div",{className:"space-y-3",children:n.map(r=>{const c=i.find(a=>a.id===r.questionId);return c?e.jsx(v,{size:"small",children:e.jsxs("div",{className:"flex items-start gap-3",children:[e.jsx(C,{color:ne[c.type],children:K[c.type]}),e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsx("div",{className:"text-sm text-slate-900 leading-relaxed mb-2 whitespace-pre-wrap",dangerouslySetInnerHTML:{__html:F(c.prompt)}}),e.jsxs("div",{className:"text-xs text-slate-600",children:["你的答案：",e.jsx("span",{className:"font-mono",children:Ne(r.given)})," · ","正确：",e.jsx("span",{className:"font-mono text-emerald-700",children:Se(c)})]}),c.explanation&&e.jsxs("div",{className:"text-xs text-slate-500 mt-2 whitespace-pre-wrap",children:["💡 ",c.explanation]})]})]})},r.questionId+r.at):null})})}function In(){const n=T(()=>o.chapters.toArray())??[];T(()=>o.sections.toArray());const i=T(()=>o.kpoints.toArray())??[],r=T(()=>o.questions.toArray())??[],c=T(()=>o.attempts.toArray())??[],a=N.useMemo(()=>{const l=c.length,k=c.filter(h=>h.correct).length;return{total:l,correct:k,wrong:l-k,accuracy:l?Math.round(k/l*100):0}},[c]),d=N.useMemo(()=>n.map(l=>{const k=r.filter(y=>y.chapterId===l.id),h=c.filter(y=>y.chapterId===l.id),w=h.filter(y=>y.correct).length;return{...l,totalQ:k.length,totalA:h.length,correct:w,accuracy:h.length?Math.round(w/h.length*100):0,coverage:k.length?Math.round(new Set(h.map(y=>y.questionId)).size/k.length*100):0}}),[n,r,c]),s=N.useMemo(()=>i.map(l=>{const k=c.filter(w=>w.kpointIds.includes(l.id)),h=k.filter(w=>w.correct).length;return{...l,total:k.length,correct:h,accuracy:k.length?Math.round(h/k.length*100):0}}).sort((l,k)=>l.accuracy-k.accuracy),[i,c]),m=N.useMemo(()=>{var k;const l={};for(const h of c)l[k=h.type]??(l[k]={total:0,correct:0}),l[h.type].total+=1,h.correct&&(l[h.type].correct+=1);return Object.entries(l)},[c]);return e.jsxs("div",{className:"max-w-4xl mx-auto p-4 md:p-6",children:[e.jsx("h1",{className:"text-2xl font-bold text-slate-900 mb-4",children:"📊 学习统计"}),e.jsxs(fe,{gutter:[12,12],className:"mb-6",children:[e.jsx(_,{xs:12,md:6,children:e.jsx(v,{size:"small",className:"!bg-cyan-50 !border-cyan-200",children:e.jsx(L,{title:e.jsx("span",{className:"text-cyan-700",children:"总答题"}),value:a.total,suffix:"次",valueStyle:{color:"#0e7490"}})})}),e.jsx(_,{xs:12,md:6,children:e.jsx(v,{size:"small",className:"!bg-emerald-50 !border-emerald-200",children:e.jsx(L,{title:e.jsx("span",{className:"text-emerald-700",children:"答对"}),value:a.correct,valueStyle:{color:"#047857"}})})}),e.jsx(_,{xs:12,md:6,children:e.jsx(v,{size:"small",className:"!bg-rose-50 !border-rose-200",children:e.jsx(L,{title:e.jsx("span",{className:"text-rose-700",children:"答错"}),value:a.wrong,valueStyle:{color:"#be123c"}})})}),e.jsx(_,{xs:12,md:6,children:e.jsx(v,{size:"small",className:"!bg-amber-50 !border-amber-200",children:e.jsx(L,{title:e.jsx("span",{className:"text-amber-700",children:"正确率"}),value:a.accuracy,suffix:"%",valueStyle:{color:"#b45309"}})})})]}),e.jsx(v,{size:"small",className:"mb-4",title:"📑 按章节",children:d.length===0?e.jsx(X,{description:"暂无数据"}):e.jsx("div",{className:"space-y-3",children:d.map(l=>e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center justify-between text-sm mb-1",children:[e.jsxs("span",{children:[l.emoji," ",e.jsxs("b",{children:[l.no," ",l.name]}),e.jsxs("span",{className:"text-slate-500 text-xs ml-2",children:["覆盖 ",l.coverage,"% · 答 ",l.totalA," · 对 ",l.correct]})]}),e.jsxs("span",{className:"text-slate-600 text-sm",children:[l.accuracy,"%"]})]}),e.jsx(U,{percent:l.accuracy,showInfo:!1,size:"small"})]},l.id))})}),e.jsx(v,{size:"small",className:"mb-4",title:"🎯 按考点（正确率升序）",children:s.length===0?e.jsx(X,{description:"暂无数据"}):e.jsx("div",{className:"space-y-2",children:s.map(l=>e.jsxs("div",{className:"flex items-center gap-3 text-sm",children:[e.jsxs("span",{className:"flex-1 truncate",children:[e.jsx("span",{className:"text-slate-700",children:l.name}),e.jsxs("span",{className:"text-slate-400 text-xs ml-2",children:["答 ",l.total," · 对 ",l.correct]})]}),e.jsx(U,{className:"!w-32",percent:l.accuracy,size:"small",showInfo:!1,strokeColor:l.accuracy<60?"#ef4444":l.accuracy<80?"#f59e0b":"#10b981"}),e.jsxs("span",{className:"w-12 text-right font-mono text-xs",children:[l.accuracy,"%"]})]},l.id))})}),e.jsx(v,{size:"small",title:"📝 按题型",children:m.length===0?e.jsx(X,{description:"暂无数据"}):e.jsx("div",{className:"space-y-3",children:m.map(([l,k])=>{const h=k.total?Math.round(k.correct/k.total*100):0;return e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center justify-between text-sm mb-1",children:[e.jsxs("span",{children:[e.jsx(C,{color:ne[l],children:K[l]}),e.jsxs("span",{className:"text-xs text-slate-500",children:["答 ",k.total," · 对 ",k.correct]})]}),e.jsxs("span",{className:"text-slate-600 text-sm",children:[h,"%"]})]}),e.jsx(U,{percent:h,showInfo:!1,size:"small"})]},l)})})})]})}function yn(){const n=T(()=>o.chapters.toArray())??[],i=T(()=>o.sections.toArray())??[],r=T(()=>o.kpoints.toArray())??[],c=T(()=>o.questions.toArray())??[],[a,d]=N.useState("all"),[s,m]=N.useState("all"),[l,k]=N.useState("all"),[h,w]=N.useState(""),y=N.useMemo(()=>{let I=c;if(a!=="all"&&(I=I.filter(u=>u.chapterId===a)),s!=="all"&&(I=I.filter(u=>u.sectionId===s)),l!=="all"&&(I=I.filter(u=>u.type===l)),h.trim()){const u=h.trim().toLowerCase();I=I.filter(j=>{var E,S;return j.prompt.toLowerCase().includes(u)||(((E=j.options)==null?void 0:E.some(f=>f.text.toLowerCase().includes(u)))??!1)||(((S=j.explanation)==null?void 0:S.toLowerCase().includes(u))??!1)})}return I},[c,a,s,l,h]),p=i.filter(I=>a==="all"||I.chapterId===a);return e.jsxs("div",{className:"max-w-4xl mx-auto p-4 md:p-6",children:[e.jsx("h1",{className:"text-2xl font-bold text-slate-900 mb-4",children:"📚 题库浏览"}),e.jsxs(W,{wrap:!0,className:"mb-4",children:[e.jsx(je,{allowClear:!0,placeholder:"搜题干 / 选项 / 解析",className:"!w-full md:!w-64",value:h,onChange:I=>w(I.target.value)}),e.jsx(ve,{className:"!w-32",value:a,onChange:I=>{d(I),m("all")},options:[{value:"all",label:"全部章节"},...n.map(I=>({value:I.id,label:`${I.no} ${I.name}`}))]}),e.jsx(ve,{className:"!w-44",value:s,onChange:m,options:[{value:"all",label:"全部小节"},...p.map(I=>({value:I.id,label:`${I.no} ${I.name}`}))]}),e.jsx(ve,{className:"!w-28",value:l,onChange:k,options:[{value:"all",label:"全部题型"},{value:"single",label:"单选"},{value:"multiple",label:"多选"},{value:"judge",label:"判断"},{value:"fill",label:"填空"},{value:"calc",label:"计算"}]}),e.jsxs("div",{className:"text-sm text-slate-500 self-center ml-auto",children:["共 ",y.length," / ",c.length," 题"]})]}),y.length===0?e.jsx(X,{description:"没有匹配的题目"}):e.jsx("div",{className:"space-y-3",children:y.map((I,u)=>{const j=n.find(f=>f.id===I.chapterId),E=i.find(f=>f.id===I.sectionId),S=r.filter(f=>I.kpointIds.includes(f.id));return e.jsxs(v,{size:"small",children:[e.jsxs("div",{className:"flex items-center gap-2 mb-2 flex-wrap",children:[e.jsxs("span",{className:"text-xs text-slate-400",children:["#",u+1]}),e.jsx(C,{color:ne[I.type],children:K[I.type]}),I.materialId&&e.jsxs(C,{color:"magenta",children:["📋 综合题 第 ",I.subNo," 问"]}),e.jsxs(C,{children:[j==null?void 0:j.no," ",E==null?void 0:E.no]}),S.map(f=>e.jsx(C,{color:"cyan",children:f.name},f.id)),I.source&&e.jsxs(C,{color:"default",children:["📚 ",I.source]})]}),e.jsx("div",{className:"text-sm text-slate-900 leading-relaxed mb-2 whitespace-pre-wrap",dangerouslySetInnerHTML:{__html:F(I.prompt)}}),I.options&&I.options.length>0&&e.jsx("ul",{className:"text-sm space-y-1 list-none pl-1",children:I.options.map(f=>e.jsxs("li",{className:"text-slate-700",children:[e.jsxs("span",{className:"font-mono mr-2 text-slate-400",children:[f.id,"."]}),e.jsx("span",{dangerouslySetInnerHTML:{__html:F(f.text)}})]},f.id))}),e.jsxs("div",{className:"mt-2 text-xs text-slate-600",children:["答案：",e.jsx("span",{className:"font-mono text-emerald-700",children:Se(I)})]}),I.explanation&&e.jsxs("div",{className:"text-xs text-slate-500 mt-1 whitespace-pre-wrap",children:["💡 ",I.explanation]})]},I.id)})}),e.jsxs("div",{className:"mt-4 text-xs text-slate-400 text-center",children:["想做某道题？直接去 ",e.jsx(z,{to:"/practice",className:"text-cyan-700",children:"章节刷题"})," 选择对应范围。"]})]})}const t=()=>Date.now(),fn=[{id:"ch01",no:"第一章",name:"总论",emoji:"📒",order:10,createdAt:t()},{id:"ch02",no:"第二章",name:"存货",emoji:"📦",order:20,createdAt:t()},{id:"ch03",no:"第三章",name:"固定资产",emoji:"🏭",order:30,createdAt:t()},{id:"ch04",no:"第四章",name:"无形资产",emoji:"💎",order:40,createdAt:t()},{id:"ch05",no:"第五章",name:"投资性房地产",emoji:"🏢",order:50,createdAt:t()},{id:"ch06",no:"第六章",name:"长期股权投资与合营安排",emoji:"🤝",order:60,createdAt:t()},{id:"ch07",no:"第七章",name:"资产减值",emoji:"📉",order:70,createdAt:t()},{id:"ch08",no:"第八章",name:"负债",emoji:"💳",order:80,createdAt:t()},{id:"ch09",no:"第九章",name:"职工薪酬",emoji:"👥",order:90,createdAt:t()},{id:"ch10",no:"第十章",name:"股份支付",emoji:"🎁",order:100,createdAt:t()},{id:"ch11",no:"第十一章",name:"借款费用",emoji:"🏦",order:110,createdAt:t()},{id:"ch12",no:"第十二章",name:"或有事项",emoji:"⚖️",order:120,createdAt:t()},{id:"ch13",no:"第十三章",name:"金融工具",emoji:"🧰",order:130,createdAt:t()},{id:"ch14",no:"第十四章",name:"租赁",emoji:"🔑",order:140,createdAt:t()},{id:"ch15",no:"第十五章",name:"持有待售的非流动资产、处置组和终止经营",emoji:"🪧",order:150,createdAt:t()},{id:"ch16",no:"第十六章",name:"所有者权益",emoji:"🏛️",order:160,createdAt:t()},{id:"ch17",no:"第十七章",name:"收入费用和利润",emoji:"💰",order:170,createdAt:t()},{id:"ch18",no:"第十八章",name:"政府补助",emoji:"🎖️",order:180,createdAt:t()},{id:"ch19",no:"第十九章",name:"所得税",emoji:"🧾",order:190,createdAt:t()},{id:"ch20",no:"第二十章",name:"非货币性资产交换",emoji:"🔄",order:200,createdAt:t()},{id:"ch21",no:"第二十一章",name:"债务重组",emoji:"🩹",order:210,createdAt:t()},{id:"ch22",no:"第二十二章",name:"外币折算",emoji:"🌐",order:220,createdAt:t()},{id:"ch23",no:"第二十三章",name:"财务报告",emoji:"📊",order:230,createdAt:t()},{id:"ch24",no:"第二十四章",name:"会计政策会计估计及其变更和差错更正",emoji:"🔧",order:240,createdAt:t()},{id:"ch25",no:"第二十五章",name:"资产负债表日后事项",emoji:"💳",order:250,createdAt:t()},{id:"ch26",no:"第二十六章",name:"企业合并",emoji:"🏗️",order:260,createdAt:t()},{id:"ch27",no:"第二十七章",name:"合并财务报表",emoji:"🧩",order:270,createdAt:t()},{id:"ch28",no:"第二十八章",name:"每股收益",emoji:"🧮",order:280,createdAt:t()},{id:"ch29",no:"第二十九章",name:"公允价值计量",emoji:"⚖️",order:290,createdAt:t()},{id:"ch30",no:"第三十章",name:"政府及民间非营利组织会计",emoji:"🏛️",order:300,createdAt:t()}],An=[{id:"s01-01",chapterId:"ch01",no:"第一节",name:"会计概述",order:10,createdAt:t()},{id:"s01-02",chapterId:"ch01",no:"第二节",name:"财务报告目标、会计基本假设与会计基础",order:20,createdAt:t()},{id:"s01-03",chapterId:"ch01",no:"第三节",name:"会计信息质量要求（八大要求）",order:30,createdAt:t()},{id:"s01-04",chapterId:"ch01",no:"第四节",name:"会计要素确认与计量",order:40,createdAt:t()},{id:"s01-05",chapterId:"ch01",no:"第五节",name:"财务报告",order:50,createdAt:t()},{id:"s01-06",chapterId:"ch01",no:"第六节",name:"可持续信息披露",order:60,createdAt:t()},{id:"s01-07",chapterId:"ch01",no:"第七节",name:"AI在会计审计中的应用",order:70,createdAt:t()},{id:"s02-01",chapterId:"ch02",no:"第一节",name:"存货的本质认知",order:10,createdAt:t()},{id:"s02-02",chapterId:"ch02",no:"第二节",name:"确认和初始计量",order:20,createdAt:t()},{id:"s02-03",chapterId:"ch02",no:"第三节",name:"发出存货的计量",order:30,createdAt:t()},{id:"s02-04",chapterId:"ch02",no:"第四节",name:"期末存货计量（核心考点）",order:40,createdAt:t()},{id:"s02-05",chapterId:"ch02",no:"第五节",name:"存货清查盘点",order:50,createdAt:t()},{id:"s02-06",chapterId:"ch02",no:"第六节",name:"存货的列示与披露",order:60,createdAt:t()},{id:"s03-01",chapterId:"ch03",no:"第一节",name:"固定资产的本质认知",order:10,createdAt:t()},{id:"s03-02",chapterId:"ch03",no:"第二节",name:"确认和初始计量",order:20,createdAt:t()},{id:"s03-03",chapterId:"ch03",no:"第三节",name:"后续计量（折旧与后续支出）",order:30,createdAt:t()},{id:"s03-04",chapterId:"ch03",no:"第四节",name:"固定资产处置",order:40,createdAt:t()},{id:"s04-01",chapterId:"ch04",no:"第一节",name:"无形资产的本质认知",order:10,createdAt:t()},{id:"s04-02",chapterId:"ch04",no:"第二节",name:"确认和初始计量",order:20,createdAt:t()},{id:"s04-03",chapterId:"ch04",no:"第三节",name:"内部研究开发支出（核心考点）",order:30,createdAt:t()},{id:"s04-04",chapterId:"ch04",no:"第四节",name:"后续计量",order:40,createdAt:t()},{id:"s04-05",chapterId:"ch04",no:"第五节",name:"处置",order:50,createdAt:t()},{id:"s04-06",chapterId:"ch04",no:"第六节",name:"列示与披露",order:60,createdAt:t()},{id:"s05-01",chapterId:"ch05",no:"第一节",name:"投资性房地产的特征与范围",order:10,createdAt:t()},{id:"s05-02",chapterId:"ch05",no:"第二节",name:"确认和初始计量",order:20,createdAt:t()},{id:"s05-03",chapterId:"ch05",no:"第三节",name:"后续计量",order:30,createdAt:t()},{id:"s05-04",chapterId:"ch05",no:"第四节",name:"转换和处置",order:40,createdAt:t()},{id:"s06-01",chapterId:"ch06",no:"第一节",name:"基本概念",order:10,createdAt:t()},{id:"s06-02",chapterId:"ch06",no:"第二节",name:"长期股权投资的初始计量",order:20,createdAt:t()},{id:"s06-03",chapterId:"ch06",no:"第三节",name:"长期股权投资的后续计量",order:30,createdAt:t()},{id:"s06-04",chapterId:"ch06",no:"第四节",name:"长期股权投资核算方法的转换及处置",order:40,createdAt:t()},{id:"s06-05",chapterId:"ch06",no:"第五节",name:"合营安排",order:50,createdAt:t()},{id:"s07-01",chapterId:"ch07",no:"第一节",name:"资产减值的基本概念",order:10,createdAt:t()},{id:"s07-02",chapterId:"ch07",no:"第二节",name:"资产可收回金额的计量",order:20,createdAt:t()},{id:"s07-03",chapterId:"ch07",no:"第三节",name:"资产减值损失的确认与计量",order:30,createdAt:t()},{id:"s07-04",chapterId:"ch07",no:"第四节",name:"资产组的认定及减值处理",order:40,createdAt:t()},{id:"s07-05",chapterId:"ch07",no:"第五节",name:"商誉减值测试与处理",order:50,createdAt:t()},{id:"s08-01",chapterId:"ch08",no:"第一节",name:"流动负债",order:10,createdAt:t()},{id:"s08-02",chapterId:"ch08",no:"第二节",name:"非流动负债",order:20,createdAt:t()},{id:"s09-01",chapterId:"ch09",no:"第一节",name:"职工和职工薪酬的范围及分类",order:10,createdAt:t()},{id:"s09-02",chapterId:"ch09",no:"第二节",name:"短期薪酬",order:20,createdAt:t()},{id:"s09-03",chapterId:"ch09",no:"第三节",name:"离职后福利",order:30,createdAt:t()},{id:"s09-04",chapterId:"ch09",no:"第四节",name:"辞退福利",order:40,createdAt:t()},{id:"s09-05",chapterId:"ch09",no:"第五节",name:"其他长期职工福利",order:50,createdAt:t()},{id:"s10-01",chapterId:"ch10",no:"第一节",name:"股份支付概述",order:10,createdAt:t()},{id:"s10-02",chapterId:"ch10",no:"第二节",name:"股份支付的确认和计量",order:20,createdAt:t()},{id:"s10-03",chapterId:"ch10",no:"第三节",name:"可行权条件",order:30,createdAt:t()},{id:"s10-04",chapterId:"ch10",no:"第四节",name:"集团股份支付",order:40,createdAt:t()},{id:"s11-01",chapterId:"ch11",no:"第一节",name:"借款费用概念",order:10,createdAt:t()},{id:"s11-02",chapterId:"ch11",no:"第二节",name:"借款费用的确认",order:20,createdAt:t()},{id:"s11-03",chapterId:"ch11",no:"第三节",name:"借款费用的计量",order:30,createdAt:t()},{id:"s12-01",chapterId:"ch12",no:"第一节",name:"或有事项概述",order:10,createdAt:t()},{id:"s12-02",chapterId:"ch12",no:"第二节",name:"或有事项的确认和计量",order:20,createdAt:t()},{id:"s12-03",chapterId:"ch12",no:"第三节",name:"或有事项会计处理的具体应用",order:30,createdAt:t()},{id:"s12-04",chapterId:"ch12",no:"第四节",name:"或有事项的列报",order:40,createdAt:t()},{id:"s13-01",chapterId:"ch13",no:"第一节",name:"金融工具概述",order:10,createdAt:t()},{id:"s13-02",chapterId:"ch13",no:"第二节",name:"金融资产和金融负债的分类和重分类",order:20,createdAt:t()},{id:"s13-03",chapterId:"ch13",no:"第三节",name:"金融负债和权益工具的区分",order:30,createdAt:t()},{id:"s13-04",chapterId:"ch13",no:"第四节",name:"金融工具的计量",order:40,createdAt:t()},{id:"s13-05",chapterId:"ch13",no:"第五节",name:"金融资产转移",order:50,createdAt:t()},{id:"s13-06",chapterId:"ch13",no:"第六节",name:"套期会计",order:60,createdAt:t()},{id:"s13-07",chapterId:"ch13",no:"第七节",name:"保险合同概述",order:70,createdAt:t()},{id:"s14-01",chapterId:"ch14",no:"第一节",name:"租赁概述",order:10,createdAt:t()},{id:"s14-02",chapterId:"ch14",no:"第二节",name:"承租人的会计处理",order:20,createdAt:t()},{id:"s14-03",chapterId:"ch14",no:"第三节",name:"出租人会计处理",order:30,createdAt:t()},{id:"s14-04",chapterId:"ch14",no:"第四节",name:"特殊租赁业务",order:40,createdAt:t()},{id:"s15-01",chapterId:"ch15",no:"第一节",name:"持有待售的非流动资产和处置组",order:10,createdAt:t()},{id:"s15-02",chapterId:"ch15",no:"第二节",name:"终止经营",order:20,createdAt:t()},{id:"s16-01",chapterId:"ch16",no:"第一节",name:"实收资本",order:10,createdAt:t()},{id:"s16-02",chapterId:"ch16",no:"第二节",name:"其他权益工具",order:20,createdAt:t()},{id:"s16-03",chapterId:"ch16",no:"第三节",name:"资本公积",order:30,createdAt:t()},{id:"s16-04",chapterId:"ch16",no:"第四节",name:"其他综合收益",order:40,createdAt:t()},{id:"s16-05",chapterId:"ch16",no:"第五节",name:"留存收益",order:50,createdAt:t()},{id:"s17-01",chapterId:"ch17",no:"第一节",name:"收入",order:10,createdAt:t()},{id:"s17-02",chapterId:"ch17",no:"第二节",name:"费用",order:20,createdAt:t()},{id:"s17-03",chapterId:"ch17",no:"第三节",name:"利润",order:30,createdAt:t()},{id:"s18-01",chapterId:"ch18",no:"第一节",name:"政府补助概述",order:10,createdAt:t()},{id:"s18-02",chapterId:"ch18",no:"第二节",name:"政府补助的会计处理",order:20,createdAt:t()},{id:"s18-03",chapterId:"ch18",no:"第三节",name:"政府补助的列报",order:30,createdAt:t()},{id:"s19-01",chapterId:"ch19",no:"第一节",name:"所得税会计的基本原理",order:10,createdAt:t()},{id:"s19-02",chapterId:"ch19",no:"第二节",name:"资产、负债的计税基础",order:20,createdAt:t()},{id:"s19-03",chapterId:"ch19",no:"第三节",name:"暂时性差异",order:30,createdAt:t()},{id:"s19-04",chapterId:"ch19",no:"第四节",name:"递延所得税资产及负债的确认和计量",order:40,createdAt:t()},{id:"s19-05",chapterId:"ch19",no:"第五节",name:"所得税费用的确认和计量",order:50,createdAt:t()},{id:"s19-06",chapterId:"ch19",no:"第六节",name:"所得税的列报",order:60,createdAt:t()},{id:"s20-01",chapterId:"ch20",no:"第一节",name:"非货币性资产交换的概念",order:10,createdAt:t()},{id:"s20-02",chapterId:"ch20",no:"第二节",name:"确认与计量",order:20,createdAt:t()},{id:"s20-03",chapterId:"ch20",no:"第三节",name:"会计处理",order:30,createdAt:t()},{id:"s21-01",chapterId:"ch21",no:"第一节",name:"债务重组的定义和方式",order:10,createdAt:t()},{id:"s21-02",chapterId:"ch21",no:"第二节",name:"债务重组的会计处理",order:20,createdAt:t()},{id:"s21-03",chapterId:"ch21",no:"第三节",name:"债务重组的披露",order:30,createdAt:t()},{id:"s22-01",chapterId:"ch22",no:"第一节",name:"记账本位币",order:10,createdAt:t()},{id:"s22-02",chapterId:"ch22",no:"第二节",name:"外币交易的会计处理",order:20,createdAt:t()},{id:"s22-03",chapterId:"ch22",no:"第三节",name:"外币财务报表折算",order:30,createdAt:t()},{id:"s23-01",chapterId:"ch23",no:"第一节",name:"财务报表概述",order:10,createdAt:t()},{id:"s23-02",chapterId:"ch23",no:"第二节",name:"资产负债表",order:20,createdAt:t()},{id:"s23-03",chapterId:"ch23",no:"第三节",name:"利润表",order:30,createdAt:t()},{id:"s23-04",chapterId:"ch23",no:"第四节",name:"现金流量表",order:40,createdAt:t()},{id:"s23-05",chapterId:"ch23",no:"第五节",name:"所有者权益变动表",order:50,createdAt:t()},{id:"s23-06",chapterId:"ch23",no:"第六节",name:"财务报表附注披露",order:60,createdAt:t()},{id:"s23-07",chapterId:"ch23",no:"第七节",name:"中期财务报告",order:70,createdAt:t()},{id:"s24-01",chapterId:"ch24",no:"第一节",name:"会计政策及其变更",order:10,createdAt:t()},{id:"s24-02",chapterId:"ch24",no:"第二节",name:"会计估计及其变更",order:20,createdAt:t()},{id:"s24-03",chapterId:"ch24",no:"第三节",name:"会计政策与会计估计的划分",order:30,createdAt:t()},{id:"s24-04",chapterId:"ch24",no:"第四节",name:"会计处理方法",order:40,createdAt:t()},{id:"s24-05",chapterId:"ch24",no:"第五节",name:"会计差错更正",order:50,createdAt:t()},{id:"s25-01",chapterId:"ch25",no:"第一节",name:"概述",order:10,createdAt:t()},{id:"s25-02",chapterId:"ch25",no:"第二节",name:"调整事项的会计处理",order:20,createdAt:t()},{id:"s25-03",chapterId:"ch25",no:"第三节",name:"非调整事项的会计处理",order:30,createdAt:t()},{id:"s26-01",chapterId:"ch26",no:"第一节",name:"企业合并概述",order:10,createdAt:t()},{id:"s26-02",chapterId:"ch26",no:"第二节",name:"企业合并的会计处理",order:20,createdAt:t()},{id:"s27-01",chapterId:"ch27",no:"第一节",name:"合并范围的确定",order:10,createdAt:t()},{id:"s27-02",chapterId:"ch27",no:"第二节",name:"合并财务报表编制原则与程序",order:20,createdAt:t()},{id:"s27-03",chapterId:"ch27",no:"第三节",name:"同一控制下合并处理",order:30,createdAt:t()},{id:"s27-04",chapterId:"ch27",no:"第四节",name:"非同一控制下合并处理",order:40,createdAt:t()},{id:"s27-05",chapterId:"ch27",no:"第五节",name:"内部商品交易的合并处理",order:50,createdAt:t()},{id:"s27-06",chapterId:"ch27",no:"第六节",name:"内部债权债务的合并处理",order:60,createdAt:t()},{id:"s27-07",chapterId:"ch27",no:"第七节",name:"内部固定资产交易的合并处理",order:70,createdAt:t()},{id:"s27-08",chapterId:"ch27",no:"第八节",name:"内部无形资产交易",order:80,createdAt:t()},{id:"s27-09",chapterId:"ch27",no:"第九节",name:"特殊交易的合并处理",order:90,createdAt:t()},{id:"s27-10",chapterId:"ch27",no:"第十节",name:"所得税会计相关的合并处理",order:100,createdAt:t()},{id:"s27-11",chapterId:"ch27",no:"第十一节",name:"合并现金流量表",order:110,createdAt:t()},{id:"s28-01",chapterId:"ch28",no:"第一节",name:"基本概念",order:10,createdAt:t()},{id:"s28-02",chapterId:"ch28",no:"第二节",name:"基本每股收益",order:20,createdAt:t()},{id:"s28-03",chapterId:"ch28",no:"第三节",name:"稀释每股收益",order:30,createdAt:t()},{id:"s28-04",chapterId:"ch28",no:"第四节",name:"每股收益的列报",order:40,createdAt:t()},{id:"s29-01",chapterId:"ch29",no:"第一节",name:"公允价值概念",order:10,createdAt:t()},{id:"s29-02",chapterId:"ch29",no:"第二节",name:"公允价值计量要求",order:20,createdAt:t()},{id:"s29-03",chapterId:"ch29",no:"第三节",name:"公允价值计量的具体应用",order:30,createdAt:t()},{id:"s30-01",chapterId:"ch30",no:"第一节",name:"政府会计概述",order:10,createdAt:t()},{id:"s30-02",chapterId:"ch30",no:"第二节",name:"政府单位特定业务的会计核算",order:20,createdAt:t()},{id:"s30-03",chapterId:"ch30",no:"第三节",name:"民间非营利组织会计",order:30,createdAt:t()}],kn=[{id:"kp-ch01-s01-01-x1y1",sectionId:"s01-01",name:"会计的定义",order:101,hint:"**会计四大假设：** > 会计主体画圈圈，持续经营画长线； > 会计分期画分段，货币计量画人民币",createdAt:t()},{id:"kp-ch01-s01-01-x1y2",sectionId:"s01-01",name:"会计的作用",order:102,hint:"**会计四大假设：** > 会计主体画圈圈，持续经营画长线； > 会计分期画分段，货币计量画人民币",createdAt:t()},{id:"kp-ch01-s01-01-x1y3",sectionId:"s01-01",name:"会计准则体系",order:103,hint:"**会计四大假设：** > 会计主体画圈圈，持续经营画长线； > 会计分期画分段，货币计量画人民币",createdAt:t()},{id:"kp-ch01-s01-01-x1y4",sectionId:"s01-01",name:"职业道德",order:104,hint:"**会计四大假设：** > 会计主体画圈圈，持续经营画长线； > 会计分期画分段，货币计量画人民币",createdAt:t()},{id:"kp-ch01-s01-02-x2y1",sectionId:"s01-02",name:"财务报告目标",order:201,hint:"**会计四大假设：** > 会计主体画圈圈，持续经营画长线； > 会计分期画分段，货币计量画人民币",createdAt:t()},{id:"kp-ch01-s01-02-x2y2",sectionId:"s01-02",name:"会计基本假设（四大假设）",order:202,hint:"**会计四大假设：** > 会计主体画圈圈，持续经营画长线； > 会计分期画分段，货币计量画人民币",createdAt:t()},{id:"kp-ch01-s01-02-x2y3",sectionId:"s01-02",name:"会计基础",order:203,hint:"**会计四大假设：** > 会计主体画圈圈，持续经营画长线； > 会计分期画分段，货币计量画人民币",createdAt:t()},{id:"kp-ch01-s01-04-x4y1",sectionId:"s01-04",name:"六大会计要素",order:401,hint:"**会计四大假设：** > 会计主体画圈圈，持续经营画长线； > 会计分期画分段，货币计量画人民币",createdAt:t()},{id:"kp-ch01-s01-04-x4y2",sectionId:"s01-04",name:"会计计量属性",order:402,hint:"**会计四大假设：** > 会计主体画圈圈，持续经营画长线； > 会计分期画分段，货币计量画人民币",createdAt:t()},{id:"kp-ch01-s01-05-x5y1",sectionId:"s01-05",name:"财务报告的组成",order:501,hint:"**会计四大假设：** > 会计主体画圈圈，持续经营画长线； > 会计分期画分段，货币计量画人民币",createdAt:t()},{id:"kp-ch01-s01-05-x5y2",sectionId:"s01-05",name:"财务报表的分类",order:502,hint:"**会计四大假设：** > 会计主体画圈圈，持续经营画长线； > 会计分期画分段，货币计量画人民币",createdAt:t()},{id:"kp-ch01-s01-06-x6y1",sectionId:"s01-06",name:"ESG信息披露",order:601,hint:"**会计四大假设：** > 会计主体画圈圈，持续经营画长线； > 会计分期画分段，货币计量画人民币",createdAt:t()},{id:"kp-ch01-s01-06-x6y2",sectionId:"s01-06",name:"可持续信息披露的要求",order:602,hint:"**会计四大假设：** > 会计主体画圈圈，持续经营画长线； > 会计分期画分段，货币计量画人民币",createdAt:t()},{id:"kp-ch01-s01-07-x7y1",sectionId:"s01-07",name:"AI技术概述",order:701,hint:"**会计四大假设：** > 会计主体画圈圈，持续经营画长线； > 会计分期画分段，货币计量画人民币",createdAt:t()},{id:"kp-ch01-s01-07-x7y2",sectionId:"s01-07",name:"AI对会计职业的影响",order:702,hint:"**会计四大假设：** > 会计主体画圈圈，持续经营画长线； > 会计分期画分段，货币计量画人民币",createdAt:t()},{id:"kp-ch02-s02-02-x2y1",sectionId:"s02-02",name:"存货的确认条件",order:201,hint:"",createdAt:t()},{id:"kp-ch02-s02-02-x2y2",sectionId:"s02-02",name:"存货的初始计量",order:202,hint:"",createdAt:t()},{id:"kp-ch02-s02-03-x3y1",sectionId:"s02-03",name:"发出存货的计价方法",order:301,hint:"",createdAt:t()},{id:"kp-ch02-s02-03-x3y2",sectionId:"s02-03",name:"发出存货的会计处理",order:302,hint:"",createdAt:t()},{id:"kp-ch02-s02-04-x4y1",sectionId:"s02-04",name:"核心原则",order:401,hint:"",createdAt:t()},{id:"kp-ch02-s02-04-x4y2",sectionId:"s02-04",name:"可变现净值的确定",order:402,hint:"",createdAt:t()},{id:"kp-ch02-s02-04-x4y3",sectionId:"s02-04",name:"存货跌价准备的计提与转回",order:403,hint:"",createdAt:t()},{id:"kp-ch02-s02-05-x5y1",sectionId:"s02-05",name:"盘盈",order:501,hint:"",createdAt:t()},{id:"kp-ch02-s02-05-x5y2",sectionId:"s02-05",name:"盘亏",order:502,hint:"",createdAt:t()},{id:"kp-ch02-s02-06-x6y1",sectionId:"s02-06",name:"资产负债表中的列示",order:601,hint:"",createdAt:t()},{id:"kp-ch02-s02-06-x6y2",sectionId:"s02-06",name:"披露要求",order:602,hint:"",createdAt:t()},{id:"kp-ch03-s03-02-x2y1",sectionId:"s03-02",name:"确认条件",order:201,hint:"",createdAt:t()},{id:"kp-ch03-s03-02-x2y2",sectionId:"s03-02",name:"初始计量",order:202,hint:"",createdAt:t()},{id:"kp-ch03-s03-03-x3y1",sectionId:"s03-03",name:"折旧",order:301,hint:"",createdAt:t()},{id:"kp-ch03-s03-03-x3y2",sectionId:"s03-03",name:"后续支出",order:302,hint:"",createdAt:t()},{id:"kp-ch03-s03-04-x4y1",sectionId:"s03-04",name:"终止确认的条件",order:401,hint:"",createdAt:t()},{id:"kp-ch03-s03-04-x4y2",sectionId:"s03-04",name:"处置的账务处理",order:402,hint:"",createdAt:t()},{id:"kp-ch03-s03-04-x4y3",sectionId:"s03-04",name:"固定资产清查",order:403,hint:"",createdAt:t()},{id:"kp-ch04-s04-02-x2y1",sectionId:"s04-02",name:"确认条件",order:201,hint:"",createdAt:t()},{id:"kp-ch04-s04-02-x2y2",sectionId:"s04-02",name:"初始计量",order:202,hint:"",createdAt:t()},{id:"kp-ch04-s04-03-x3y1",sectionId:"s04-03",name:"研究阶段与开发阶段的划分",order:301,hint:"",createdAt:t()},{id:"kp-ch04-s04-03-x3y2",sectionId:"s04-03",name:"开发阶段资本化的五个条件",order:302,hint:"",createdAt:t()},{id:"kp-ch04-s04-03-x3y3",sectionId:"s04-03",name:"会计处理",order:303,hint:"",createdAt:t()},{id:"kp-ch04-s04-04-x4y1",sectionId:"s04-04",name:"摊销",order:401,hint:"",createdAt:t()},{id:"kp-ch04-s04-04-x4y2",sectionId:"s04-04",name:"减值",order:402,hint:"",createdAt:t()},{id:"kp-ch04-s04-04-x4y3",sectionId:"s04-04",name:"使用寿命的复核",order:403,hint:"",createdAt:t()},{id:"kp-ch04-s04-05-x5y1",sectionId:"s04-05",name:"出售（转让所有权）",order:501,hint:"",createdAt:t()},{id:"kp-ch04-s04-05-x5y2",sectionId:"s04-05",name:"出租（转让使用权）",order:502,hint:"",createdAt:t()},{id:"kp-ch04-s04-05-x5y3",sectionId:"s04-05",name:"报废",order:503,hint:"",createdAt:t()},{id:"kp-ch05-s05-01-x1y1",sectionId:"s05-01",name:"核心概念",order:101,hint:"",createdAt:t()},{id:"kp-ch05-s05-01-x1y2",sectionId:"s05-01",name:"投资性房地产的范围",order:102,hint:"",createdAt:t()},{id:"kp-ch05-s05-02-x2y1",sectionId:"s05-02",name:"确认条件",order:201,hint:"",createdAt:t()},{id:"kp-ch05-s05-02-x2y2",sectionId:"s05-02",name:"初始计量",order:202,hint:"",createdAt:t()},{id:"kp-ch05-s05-03-x3y1",sectionId:"s05-03",name:"两种后续计量模式",order:301,hint:"",createdAt:t()},{id:"kp-ch05-s05-03-x3y2",sectionId:"s05-03",name:"成本模式",order:302,hint:"",createdAt:t()},{id:"kp-ch05-s05-03-x3y3",sectionId:"s05-03",name:"公允价值模式",order:303,hint:"",createdAt:t()},{id:"kp-ch05-s05-03-x3y4",sectionId:"s05-03",name:"后续计量模式的变更",order:304,hint:"",createdAt:t()},{id:"kp-ch05-s05-04-x4y1",sectionId:"s05-04",name:"房地产转换",order:401,hint:"",createdAt:t()},{id:"kp-ch05-s05-04-x4y2",sectionId:"s05-04",name:"处置",order:402,hint:"",createdAt:t()},{id:"kp-ch06-s06-01-x1y1",sectionId:"s06-01",name:"股权投资的分类",order:101,hint:"",createdAt:t()},{id:"kp-ch06-s06-01-x1y2",sectionId:"s06-01",name:"关键概念区分",order:102,hint:"",createdAt:t()},{id:"kp-ch06-s06-02-x2y1",sectionId:"s06-02",name:"企业合并形成的长期股权投资",order:201,hint:"",createdAt:t()},{id:"kp-ch06-s06-02-x2y2",sectionId:"s06-02",name:"非企业合并形成的长期股权投资",order:202,hint:"",createdAt:t()},{id:"kp-ch06-s06-03-x3y1",sectionId:"s06-03",name:"成本法",order:301,hint:"",createdAt:t()},{id:"kp-ch06-s06-03-x3y2",sectionId:"s06-03",name:"权益法",order:302,hint:"",createdAt:t()},{id:"kp-ch06-s06-04-x4y1",sectionId:"s06-04",name:"核算方法的转换（五种情形）",order:401,hint:"",createdAt:t()},{id:"kp-ch06-s06-04-x4y2",sectionId:"s06-04",name:"长期股权投资的处置",order:402,hint:"",createdAt:t()},{id:"kp-ch06-s06-05-x5y1",sectionId:"s06-05",name:"合营安排的认定",order:501,hint:"",createdAt:t()},{id:"kp-ch06-s06-05-x5y2",sectionId:"s06-05",name:"合营安排的分类",order:502,hint:"",createdAt:t()},{id:"kp-ch06-s06-05-x5y3",sectionId:"s06-05",name:"共同经营的会计处理",order:503,hint:"",createdAt:t()},{id:"kp-ch07-s07-01-x1y1",sectionId:"s07-01",name:"为什么需要减值",order:101,hint:"",createdAt:t()},{id:"kp-ch07-s07-01-x1y2",sectionId:"s07-01",name:"减值的适用范围",order:102,hint:"",createdAt:t()},{id:"kp-ch07-s07-02-x2y1",sectionId:"s07-02",name:"基本原则",order:201,hint:"",createdAt:t()},{id:"kp-ch07-s07-02-x2y2",sectionId:"s07-02",name:"公允价值减去处置费用后的净额",order:202,hint:"",createdAt:t()},{id:"kp-ch07-s07-02-x2y3",sectionId:"s07-02",name:"预计未来现金流量的现值",order:203,hint:"",createdAt:t()},{id:"kp-ch07-s07-03-x3y1",sectionId:"s07-03",name:"确认原则",order:301,hint:"",createdAt:t()},{id:"kp-ch07-s07-03-x3y2",sectionId:"s07-03",name:"减值后的调整",order:302,hint:"",createdAt:t()},{id:"kp-ch07-s07-04-x4y1",sectionId:"s07-04",name:"为什么需要资产组",order:401,hint:"",createdAt:t()},{id:"kp-ch07-s07-04-x4y2",sectionId:"s07-04",name:"资产组的认定",order:402,hint:"",createdAt:t()},{id:"kp-ch07-s07-04-x4y3",sectionId:"s07-04",name:"资产组减值测试",order:403,hint:"",createdAt:t()},{id:"kp-ch07-s07-05-x5y1",sectionId:"s07-05",name:"商誉的特殊性",order:501,hint:"",createdAt:t()},{id:"kp-ch07-s07-05-x5y2",sectionId:"s07-05",name:"商誉减值测试步骤",order:502,hint:"",createdAt:t()},{id:"kp-ch08-s08-01-x1y1",sectionId:"s08-01",name:"负债的本质",order:101,hint:"",createdAt:t()},{id:"kp-ch08-s08-01-x1y2",sectionId:"s08-01",name:"常见流动负债",order:102,hint:"",createdAt:t()},{id:"kp-ch08-s08-02-x2y1",sectionId:"s08-02",name:"长期借款",order:201,hint:"",createdAt:t()},{id:"kp-ch08-s08-02-x2y2",sectionId:"s08-02",name:"应付债券",order:202,hint:"",createdAt:t()},{id:"kp-ch08-s08-02-x2y3",sectionId:"s08-02",name:"长期应付款",order:203,hint:"",createdAt:t()},{id:"kp-ch09-s09-01-x1y1",sectionId:"s09-01",name:"职工的范围",order:101,hint:"",createdAt:t()},{id:"kp-ch09-s09-01-x1y2",sectionId:"s09-01",name:"职工薪酬的分类",order:102,hint:"",createdAt:t()},{id:"kp-ch09-s09-02-x2y1",sectionId:"s09-02",name:"货币性短期薪酬",order:201,hint:"",createdAt:t()},{id:"kp-ch09-s09-02-x2y2",sectionId:"s09-02",name:"带薪缺勤",order:202,hint:"",createdAt:t()},{id:"kp-ch09-s09-02-x2y3",sectionId:"s09-02",name:"短期利润分享计划",order:203,hint:"",createdAt:t()},{id:"kp-ch09-s09-02-x2y4",sectionId:"s09-02",name:"非货币性福利",order:204,hint:"",createdAt:t()},{id:"kp-ch09-s09-03-x3y1",sectionId:"s09-03",name:"分类",order:301,hint:"",createdAt:t()},{id:"kp-ch09-s09-03-x3y2",sectionId:"s09-03",name:"设定提存计划",order:302,hint:"",createdAt:t()},{id:"kp-ch09-s09-03-x3y3",sectionId:"s09-03",name:"设定受益计划",order:303,hint:"",createdAt:t()},{id:"kp-ch09-s09-04-x4y1",sectionId:"s09-04",name:"确认条件",order:401,hint:"",createdAt:t()},{id:"kp-ch09-s09-04-x4y2",sectionId:"s09-04",name:"会计处理",order:402,hint:"",createdAt:t()},{id:"kp-ch09-s09-04-x4y3",sectionId:"s09-04",name:"计量",order:403,hint:"",createdAt:t()},{id:"kp-ch10-s10-01-x1y1",sectionId:"s10-01",name:"什么是股份支付",order:101,hint:"",createdAt:t()},{id:"kp-ch10-s10-01-x1y2",sectionId:"s10-01",name:"股份支付的特征",order:102,hint:"",createdAt:t()},{id:"kp-ch10-s10-01-x1y3",sectionId:"s10-01",name:"股份支付的类型",order:103,hint:"",createdAt:t()},{id:"kp-ch10-s10-02-x2y1",sectionId:"s10-02",name:"权益结算的股份支付",order:201,hint:"",createdAt:t()},{id:"kp-ch10-s10-02-x2y2",sectionId:"s10-02",name:"现金结算的股份支付",order:202,hint:"",createdAt:t()},{id:"kp-ch10-s10-02-x2y3",sectionId:"s10-02",name:"两种类型的对比",order:203,hint:"",createdAt:t()},{id:"kp-ch10-s10-03-x3y1",sectionId:"s10-03",name:"可行权条件的种类",order:301,hint:"",createdAt:t()},{id:"kp-ch10-s10-03-x3y2",sectionId:"s10-03",name:"条件未达到的处理",order:302,hint:"",createdAt:t()},{id:"kp-ch10-s10-03-x3y3",sectionId:"s10-03",name:"条款的修改",order:303,hint:"",createdAt:t()},{id:"kp-ch10-s10-04-x4y1",sectionId:"s10-04",name:"情形分类",order:401,hint:"",createdAt:t()},{id:"kp-ch11-s11-01-x1y1",sectionId:"s11-01",name:"借款费用的范围",order:101,hint:"",createdAt:t()},{id:"kp-ch11-s11-01-x1y2",sectionId:"s11-01",name:"借款范围",order:102,hint:"",createdAt:t()},{id:"kp-ch11-s11-01-x1y3",sectionId:"s11-01",name:"符合资本化条件的资产",order:103,hint:"",createdAt:t()},{id:"kp-ch11-s11-02-x2y1",sectionId:"s11-02",name:"开始资本化的时点（三个条件同时满足）",order:201,hint:"",createdAt:t()},{id:"kp-ch11-s11-02-x2y2",sectionId:"s11-02",name:"暂停资本化的条件",order:202,hint:"",createdAt:t()},{id:"kp-ch11-s11-02-x2y3",sectionId:"s11-02",name:"停止资本化的时点",order:203,hint:"",createdAt:t()},{id:"kp-ch11-s11-03-x3y1",sectionId:"s11-03",name:"专门借款利息资本化",order:301,hint:"",createdAt:t()},{id:"kp-ch11-s11-03-x3y2",sectionId:"s11-03",name:"一般借款利息资本化",order:302,hint:"",createdAt:t()},{id:"kp-ch11-s11-03-x3y3",sectionId:"s11-03",name:"辅助费用的处理",order:303,hint:"",createdAt:t()},{id:"kp-ch11-s11-03-x3y4",sectionId:"s11-03",name:"外币专门借款汇兑差额",order:304,hint:"",createdAt:t()},{id:"kp-ch12-s12-01-x1y1",sectionId:"s12-01",name:"概念与特征",order:101,hint:"",createdAt:t()},{id:"kp-ch12-s12-01-x1y2",sectionId:"s12-01",name:"或有负债和或有资产",order:102,hint:"",createdAt:t()},{id:"kp-ch12-s12-02-x2y1",sectionId:"s12-02",name:"预计负债的确认条件（三个条件同时满足）",order:201,hint:"",createdAt:t()},{id:"kp-ch12-s12-02-x2y2",sectionId:"s12-02",name:'"可能性"的判断标准',order:202,hint:"",createdAt:t()},{id:"kp-ch12-s12-02-x2y3",sectionId:"s12-02",name:"预计负债的计量",order:203,hint:"",createdAt:t()},{id:"kp-ch12-s12-02-x2y4",sectionId:"s12-02",name:"预计负债的复核",order:204,hint:"",createdAt:t()},{id:"kp-ch12-s12-03-x3y1",sectionId:"s12-03",name:"未决诉讼/仲裁",order:301,hint:"",createdAt:t()},{id:"kp-ch12-s12-03-x3y2",sectionId:"s12-03",name:"债务担保",order:302,hint:"",createdAt:t()},{id:"kp-ch12-s12-03-x3y3",sectionId:"s12-03",name:"产品质量保证",order:303,hint:"",createdAt:t()},{id:"kp-ch12-s12-03-x3y4",sectionId:"s12-03",name:"亏损合同",order:304,hint:"",createdAt:t()},{id:"kp-ch12-s12-03-x3y5",sectionId:"s12-03",name:"重组义务",order:305,hint:"",createdAt:t()},{id:"kp-ch12-s12-04-x4y1",sectionId:"s12-04",name:"预计负债的列报",order:401,hint:"",createdAt:t()},{id:"kp-ch12-s12-04-x4y2",sectionId:"s12-04",name:"或有负债的披露",order:402,hint:"",createdAt:t()},{id:"kp-ch12-s12-04-x4y3",sectionId:"s12-04",name:"或有资产的披露",order:403,hint:"",createdAt:t()},{id:"kp-ch13-s13-01-x1y1",sectionId:"s13-01",name:"什么是金融工具",order:101,hint:"",createdAt:t()},{id:"kp-ch13-s13-01-x1y2",sectionId:"s13-01",name:"金融资产",order:102,hint:"",createdAt:t()},{id:"kp-ch13-s13-01-x1y3",sectionId:"s13-01",name:"衍生工具",order:103,hint:"",createdAt:t()},{id:"kp-ch13-s13-02-x2y1",sectionId:"s13-02",name:"金融资产的分类（三类）",order:201,hint:"",createdAt:t()},{id:"kp-ch13-s13-02-x2y2",sectionId:"s13-02",name:"金融负债的分类",order:202,hint:"",createdAt:t()},{id:"kp-ch13-s13-02-x2y3",sectionId:"s13-02",name:"重分类",order:203,hint:"",createdAt:t()},{id:"kp-ch13-s13-03-x3y1",sectionId:"s13-03",name:"区分原则",order:301,hint:"",createdAt:t()},{id:"kp-ch13-s13-03-x3y2",sectionId:"s13-03",name:'"固定换固定"原则',order:302,hint:"",createdAt:t()},{id:"kp-ch13-s13-03-x3y3",sectionId:"s13-03",name:"复合金融工具",order:303,hint:"",createdAt:t()},{id:"kp-ch13-s13-04-x4y1",sectionId:"s13-04",name:"初始计量",order:401,hint:"",createdAt:t()},{id:"kp-ch13-s13-04-x4y2",sectionId:"s13-04",name:"后续计量",order:402,hint:"",createdAt:t()},{id:"kp-ch13-s13-04-x4y3",sectionId:"s13-04",name:"金融资产减值（预期信用损失模型）",order:403,hint:"",createdAt:t()},{id:"kp-ch13-s13-05-x5y1",sectionId:"s13-05",name:"转移的类型",order:501,hint:"",createdAt:t()},{id:"kp-ch13-s13-05-x5y2",sectionId:"s13-05",name:"终止确认的会计处理",order:502,hint:"",createdAt:t()},{id:"kp-ch14-s14-01-x1y1",sectionId:"s14-01",name:"租赁的识别",order:101,hint:"",createdAt:t()},{id:"kp-ch14-s14-01-x1y2",sectionId:"s14-01",name:"租赁的分拆与合并",order:102,hint:"",createdAt:t()},{id:"kp-ch14-s14-01-x1y3",sectionId:"s14-01",name:"租赁期",order:103,hint:"",createdAt:t()},{id:"kp-ch14-s14-02-x2y1",sectionId:"s14-02",name:"基本原则（新租赁准则的重大变化）",order:201,hint:"",createdAt:t()},{id:"kp-ch14-s14-02-x2y2",sectionId:"s14-02",name:"初始计量",order:202,hint:"",createdAt:t()},{id:"kp-ch14-s14-02-x2y3",sectionId:"s14-02",name:"后续计量",order:203,hint:"",createdAt:t()},{id:"kp-ch14-s14-02-x2y4",sectionId:"s14-02",name:"短期租赁和低价值资产租赁",order:204,hint:"",createdAt:t()},{id:"kp-ch14-s14-03-x3y1",sectionId:"s14-03",name:"出租人仍然区分融资租赁和经营租赁",order:301,hint:"",createdAt:t()},{id:"kp-ch14-s14-03-x3y2",sectionId:"s14-03",name:"融资租赁的会计处理",order:302,hint:"",createdAt:t()},{id:"kp-ch14-s14-03-x3y3",sectionId:"s14-03",name:"经营租赁的会计处理",order:303,hint:"",createdAt:t()},{id:"kp-ch14-s14-04-x4y1",sectionId:"s14-04",name:"转租赁",order:401,hint:"",createdAt:t()},{id:"kp-ch14-s14-04-x4y2",sectionId:"s14-04",name:"生产商/经销商出租人",order:402,hint:"",createdAt:t()},{id:"kp-ch14-s14-04-x4y3",sectionId:"s14-04",name:"售后租回",order:403,hint:"",createdAt:t()},{id:"kp-ch15-s15-01-x1y1",sectionId:"s15-01",name:"分类条件",order:101,hint:"",createdAt:t()},{id:"kp-ch15-s15-01-x1y2",sectionId:"s15-01",name:"计量",order:102,hint:"",createdAt:t()},{id:"kp-ch15-s15-01-x1y3",sectionId:"s15-01",name:"列报",order:103,hint:"",createdAt:t()},{id:"kp-ch15-s15-02-x2y1",sectionId:"s15-02",name:"定义",order:201,hint:"",createdAt:t()},{id:"kp-ch15-s15-02-x2y2",sectionId:"s15-02",name:"列报",order:202,hint:"",createdAt:t()},{id:"kp-ch15-s15-02-x2y3",sectionId:"s15-02",name:"特殊事项",order:203,hint:"",createdAt:t()},{id:"kp-ch16-s16-01-x1y1",sectionId:"s16-01",name:"概念",order:101,hint:"",createdAt:t()},{id:"kp-ch16-s16-01-x1y2",sectionId:"s16-01",name:"增减变动",order:102,hint:"",createdAt:t()},{id:"kp-ch16-s16-02-x2y1",sectionId:"s16-02",name:"概念",order:201,hint:"",createdAt:t()},{id:"kp-ch16-s16-02-x2y2",sectionId:"s16-02",name:"金融负债与权益工具的区分",order:202,hint:"",createdAt:t()},{id:"kp-ch16-s16-03-x3y1",sectionId:"s16-03",name:"资本溢价/股本溢价",order:301,hint:"",createdAt:t()},{id:"kp-ch16-s16-03-x3y2",sectionId:"s16-03",name:"其他资本公积",order:302,hint:"",createdAt:t()},{id:"kp-ch16-s16-04-x4y1",sectionId:"s16-04",name:"分类",order:401,hint:"",createdAt:t()},{id:"kp-ch16-s16-04-x4y2",sectionId:"s16-04",name:"转出处理",order:402,hint:"",createdAt:t()},{id:"kp-ch16-s16-05-x5y1",sectionId:"s16-05",name:"盈余公积",order:501,hint:"",createdAt:t()},{id:"kp-ch16-s16-05-x5y2",sectionId:"s16-05",name:"未分配利润",order:502,hint:"",createdAt:t()},{id:"kp-ch17-s17-01-x1y1",sectionId:"s17-01",name:"收入的定义与分类",order:101,hint:"",createdAt:t()},{id:"kp-ch17-s17-01-x1y2",sectionId:"s17-01",name:"收入确认和计量（五步法模型）",order:102,hint:"",createdAt:t()},{id:"kp-ch17-s17-01-x1y3",sectionId:"s17-01",name:"合同成本",order:103,hint:"",createdAt:t()},{id:"kp-ch17-s17-01-x1y4",sectionId:"s17-01",name:"特定交易的会计处理",order:104,hint:"",createdAt:t()},{id:"kp-ch17-s17-03-x3y1",sectionId:"s17-03",name:"利润的构成",order:301,hint:"",createdAt:t()},{id:"kp-ch17-s17-03-x3y2",sectionId:"s17-03",name:"综合收益",order:302,hint:"",createdAt:t()},{id:"kp-ch18-s18-01-x1y1",sectionId:"s18-01",name:"定义",order:101,hint:"",createdAt:t()},{id:"kp-ch18-s18-01-x1y2",sectionId:"s18-01",name:"特征",order:102,hint:"",createdAt:t()},{id:"kp-ch18-s18-01-x1y3",sectionId:"s18-01",name:"分类",order:103,hint:"",createdAt:t()},{id:"kp-ch18-s18-01-x1y4",sectionId:"s18-01",name:"不属于政府补助的情形",order:104,hint:"",createdAt:t()},{id:"kp-ch18-s18-02-x2y1",sectionId:"s18-02",name:"两种会计处理方法",order:201,hint:"",createdAt:t()},{id:"kp-ch18-s18-02-x2y2",sectionId:"s18-02",name:"与资产相关的政府补助",order:202,hint:"",createdAt:t()},{id:"kp-ch18-s18-02-x2y3",sectionId:"s18-02",name:"与收益相关的政府补助",order:203,hint:"",createdAt:t()},{id:"kp-ch18-s18-02-x2y4",sectionId:"s18-02",name:"政府补助的退回",order:204,hint:"",createdAt:t()},{id:"kp-ch18-s18-02-x2y5",sectionId:"s18-02",name:"特定业务的会计处理",order:205,hint:"",createdAt:t()},{id:"kp-ch19-s19-01-x1y1",sectionId:"s19-01",name:"为什么需要所得税会计",order:101,hint:"",createdAt:t()},{id:"kp-ch19-s19-01-x1y2",sectionId:"s19-01",name:"资产负债表债务法",order:102,hint:"",createdAt:t()},{id:"kp-ch19-s19-02-x2y1",sectionId:"s19-02",name:"资产的计税基础",order:201,hint:"",createdAt:t()},{id:"kp-ch19-s19-02-x2y2",sectionId:"s19-02",name:"负债的计税基础",order:202,hint:"",createdAt:t()},{id:"kp-ch19-s19-03-x3y1",sectionId:"s19-03",name:"分类",order:301,hint:"",createdAt:t()},{id:"kp-ch19-s19-03-x3y2",sectionId:"s19-03",name:"特殊情形",order:302,hint:"",createdAt:t()},{id:"kp-ch19-s19-04-x4y1",sectionId:"s19-04",name:"确认原则",order:401,hint:"",createdAt:t()},{id:"kp-ch19-s19-04-x4y2",sectionId:"s19-04",name:"计量",order:402,hint:"",createdAt:t()},{id:"kp-ch19-s19-05-x5y1",sectionId:"s19-05",name:"所得税费用的构成",order:501,hint:"",createdAt:t()},{id:"kp-ch19-s19-05-x5y2",sectionId:"s19-05",name:"特殊处理的递延所得税",order:502,hint:"",createdAt:t()},{id:"kp-ch20-s20-01-x1y1",sectionId:"s20-01",name:"定义",order:101,hint:"",createdAt:t()},{id:"kp-ch20-s20-01-x1y2",sectionId:"s20-01",name:"货币性资产 vs 非货币性资产",order:102,hint:"",createdAt:t()},{id:"kp-ch20-s20-01-x1y3",sectionId:"s20-01",name:"判断标准",order:103,hint:"",createdAt:t()},{id:"kp-ch20-s20-02-x2y1",sectionId:"s20-02",name:"计量基础的选择",order:201,hint:"",createdAt:t()},{id:"kp-ch20-s20-02-x2y2",sectionId:"s20-02",name:"商业实质的判断",order:202,hint:"",createdAt:t()},{id:"kp-ch20-s20-03-x3y1",sectionId:"s20-03",name:"以公允价值计量",order:301,hint:"",createdAt:t()},{id:"kp-ch20-s20-03-x3y2",sectionId:"s20-03",name:"以账面价值计量",order:302,hint:"",createdAt:t()},{id:"kp-ch20-s20-03-x3y3",sectionId:"s20-03",name:"涉及多项资产的处理",order:303,hint:"",createdAt:t()},{id:"kp-ch21-s21-01-x1y1",sectionId:"s21-01",name:"定义",order:101,hint:"",createdAt:t()},{id:"kp-ch21-s21-01-x1y2",sectionId:"s21-01",name:"方式",order:102,hint:"",createdAt:t()},{id:"kp-ch21-s21-02-x2y1",sectionId:"s21-02",name:"以现金清偿债务",order:201,hint:"",createdAt:t()},{id:"kp-ch21-s21-02-x2y2",sectionId:"s21-02",name:"以非现金资产清偿债务",order:202,hint:"",createdAt:t()},{id:"kp-ch21-s21-02-x2y3",sectionId:"s21-02",name:"将债务转为权益工具",order:203,hint:"",createdAt:t()},{id:"kp-ch21-s21-02-x2y4",sectionId:"s21-02",name:"修改其他条款",order:204,hint:"",createdAt:t()},{id:"kp-ch21-s21-02-x2y5",sectionId:"s21-02",name:"组合方式",order:205,hint:"",createdAt:t()},{id:"kp-ch22-s22-01-x1y1",sectionId:"s22-01",name:"确定原则",order:101,hint:"",createdAt:t()},{id:"kp-ch22-s22-01-x1y2",sectionId:"s22-01",name:"境外经营",order:102,hint:"",createdAt:t()},{id:"kp-ch22-s22-01-x1y2",sectionId:"s22-01",name:"变更",order:102,hint:"",createdAt:t()},{id:"kp-ch22-s22-02-x2y1",sectionId:"s22-02",name:"初始确认",order:201,hint:"",createdAt:t()},{id:"kp-ch22-s22-02-x2y2",sectionId:"s22-02",name:"期末调整",order:202,hint:"",createdAt:t()},{id:"kp-ch22-s22-02-x2y3",sectionId:"s22-02",name:"结算日",order:203,hint:"",createdAt:t()},{id:"kp-ch22-s22-03-x3y1",sectionId:"s22-03",name:"折算方法",order:301,hint:"",createdAt:t()},{id:"kp-ch22-s22-03-x3y2",sectionId:"s22-03",name:"外币报表折算差额",order:302,hint:"",createdAt:t()},{id:"kp-ch23-s23-01-x1y1",sectionId:"s23-01",name:"财务报表的构成",order:101,hint:"",createdAt:t()},{id:"kp-ch23-s23-01-x1y2",sectionId:"s23-01",name:"列报的基本要求",order:102,hint:"",createdAt:t()},{id:"kp-ch23-s23-02-x2y1",sectionId:"s23-02",name:"结构",order:201,hint:"",createdAt:t()},{id:"kp-ch23-s23-02-x2y2",sectionId:"s23-02",name:"填列方法",order:202,hint:"",createdAt:t()},{id:"kp-ch23-s23-03-x3y1",sectionId:"s23-03",name:"结构（多步式）",order:301,hint:"",createdAt:t()},{id:"kp-ch23-s23-04-x4y1",sectionId:"s23-04",name:"现金流量的分类",order:401,hint:"",createdAt:t()},{id:"kp-ch23-s23-04-x4y2",sectionId:"s23-04",name:"编制方法",order:402,hint:"",createdAt:t()},{id:"kp-ch23-s23-04-x4y3",sectionId:"s23-04",name:"间接法调节项目",order:403,hint:"",createdAt:t()},{id:"kp-ch23-s23-06-x6y1",sectionId:"s23-06",name:"分部报告",order:601,hint:"",createdAt:t()},{id:"kp-ch23-s23-06-x6y2",sectionId:"s23-06",name:"关联方披露",order:602,hint:"",createdAt:t()},{id:"kp-ch23-s23-07-x7y1",sectionId:"s23-07",name:"定义",order:701,hint:"",createdAt:t()},{id:"kp-ch23-s23-07-x7y2",sectionId:"s23-07",name:"编制要求",order:702,hint:"",createdAt:t()},{id:"kp-ch24-s24-01-x1y1",sectionId:"s24-01",name:"会计政策的定义",order:101,hint:"",createdAt:t()},{id:"kp-ch24-s24-01-x1y2",sectionId:"s24-01",name:"常见会计政策",order:102,hint:"",createdAt:t()},{id:"kp-ch24-s24-01-x1y3",sectionId:"s24-01",name:"会计政策变更",order:103,hint:"",createdAt:t()},{id:"kp-ch24-s24-02-x2y1",sectionId:"s24-02",name:"会计估计的定义",order:201,hint:"",createdAt:t()},{id:"kp-ch24-s24-02-x2y2",sectionId:"s24-02",name:"常见会计估计",order:202,hint:"",createdAt:t()},{id:"kp-ch24-s24-02-x2y3",sectionId:"s24-02",name:"会计估计变更",order:203,hint:"",createdAt:t()},{id:"kp-ch24-s24-03-x3y1",sectionId:"s24-03",name:"判断原则",order:301,hint:"",createdAt:t()},{id:"kp-ch24-s24-03-x3y2",sectionId:"s24-03",name:"常见例子",order:302,hint:"",createdAt:t()},{id:"kp-ch24-s24-04-x4y1",sectionId:"s24-04",name:"会计政策变更的处理",order:401,hint:"",createdAt:t()},{id:"kp-ch24-s24-04-x4y2",sectionId:"s24-04",name:"会计估计变更的处理",order:402,hint:"",createdAt:t()},{id:"kp-ch24-s24-05-x5y1",sectionId:"s24-05",name:"差错的类型",order:501,hint:"",createdAt:t()},{id:"kp-ch24-s24-05-x5y2",sectionId:"s24-05",name:"前期重大差错的追溯重述",order:502,hint:"",createdAt:t()},{id:"kp-ch25-s25-01-x1y1",sectionId:"s25-01",name:"定义",order:101,hint:"",createdAt:t()},{id:"kp-ch25-s25-01-x1y2",sectionId:"s25-01",name:"时间范围",order:102,hint:"",createdAt:t()},{id:"kp-ch25-s25-01-x1y3",sectionId:"s25-01",name:"分类",order:103,hint:"",createdAt:t()},{id:"kp-ch25-s25-02-x2y1",sectionId:"s25-02",name:"常见调整事项",order:201,hint:"",createdAt:t()},{id:"kp-ch25-s25-02-x2y2",sectionId:"s25-02",name:"处理方法",order:202,hint:"",createdAt:t()},{id:"kp-ch25-s25-03-x3y1",sectionId:"s25-03",name:"常见非调整事项",order:301,hint:"",createdAt:t()},{id:"kp-ch25-s25-03-x3y2",sectionId:"s25-03",name:"处理方法",order:302,hint:"",createdAt:t()},{id:"kp-ch26-s26-01-x1y1",sectionId:"s26-01",name:"界定",order:101,hint:"",createdAt:t()},{id:"kp-ch26-s26-01-x1y2",sectionId:"s26-01",name:"方式",order:102,hint:"",createdAt:t()},{id:"kp-ch26-s26-01-x1y3",sectionId:"s26-01",name:"类型",order:103,hint:"",createdAt:t()},{id:"kp-ch26-s26-02-x2y1",sectionId:"s26-02",name:"同一控制下企业合并",order:201,hint:"",createdAt:t()},{id:"kp-ch26-s26-02-x2y2",sectionId:"s26-02",name:"非同一控制下企业合并",order:202,hint:"",createdAt:t()},{id:"kp-ch26-s26-02-x2y3",sectionId:"s26-02",name:"企业合并涉及的或有对价",order:203,hint:"",createdAt:t()},{id:"kp-ch26-s26-02-x2y4",sectionId:"s26-02",name:"反向购买",order:204,hint:"",createdAt:t()},{id:"kp-ch27-s27-01-x1y1",sectionId:"s27-01",name:"控制的判断",order:101,hint:"",createdAt:t()},{id:"kp-ch27-s27-01-x1y2",sectionId:"s27-01",name:"投资性主体",order:102,hint:"",createdAt:t()},{id:"kp-ch27-s27-02-x2y1",sectionId:"s27-02",name:"编制原则",order:201,hint:"",createdAt:t()},{id:"kp-ch27-s27-02-x2y2",sectionId:"s27-02",name:"编制程序",order:202,hint:"",createdAt:t()},{id:"kp-ch27-s27-05-x5y1",sectionId:"s27-05",name:"当期内部销售",order:501,hint:"",createdAt:t()},{id:"kp-ch27-s27-05-x5y2",sectionId:"s27-05",name:"连续编制合并报表",order:502,hint:"",createdAt:t()},{id:"kp-ch27-s27-09-x9y1",sectionId:"s27-09",name:"追加投资（分步实现合并）",order:901,hint:"",createdAt:t()},{id:"kp-ch27-s27-09-x9y2",sectionId:"s27-09",name:"处置投资（丧失控制权）",order:902,hint:"",createdAt:t()},{id:"kp-ch27-s27-09-x9y3",sectionId:"s27-09",name:"逆流交易",order:903,hint:"",createdAt:t()},{id:"kp-ch28-s28-02-x2y1",sectionId:"s28-02",name:"计算公式",order:201,hint:"",createdAt:t()},{id:"kp-ch28-s28-02-x2y2",sectionId:"s28-02",name:"加权平均数的计算",order:202,hint:"",createdAt:t()},{id:"kp-ch28-s28-03-x3y1",sectionId:"s28-03",name:"核心原理",order:301,hint:"",createdAt:t()},{id:"kp-ch28-s28-03-x3y2",sectionId:"s28-03",name:"各种潜在普通股的处理",order:302,hint:"",createdAt:t()},{id:"kp-ch28-s28-03-x3y3",sectionId:"s28-03",name:"反稀释性判断",order:303,hint:"",createdAt:t()},{id:"kp-ch28-s28-04-x4y1",sectionId:"s28-04",name:"重新计算",order:401,hint:"",createdAt:t()},{id:"kp-ch29-s29-01-x1y1",sectionId:"s29-01",name:"定义",order:101,hint:"",createdAt:t()},{id:"kp-ch29-s29-01-x1y2",sectionId:"s29-01",name:"基本要求",order:102,hint:"",createdAt:t()},{id:"kp-ch29-s29-02-x2y1",sectionId:"s29-02",name:"初始计量",order:201,hint:"",createdAt:t()},{id:"kp-ch29-s29-02-x2y2",sectionId:"s29-02",name:"估值技术",order:202,hint:"",createdAt:t()},{id:"kp-ch29-s29-02-x2y3",sectionId:"s29-02",name:"输入值",order:203,hint:"",createdAt:t()},{id:"kp-ch29-s29-02-x2y4",sectionId:"s29-02",name:"公允价值层次",order:204,hint:"",createdAt:t()},{id:"kp-ch29-s29-03-x3y1",sectionId:"s29-03",name:"非金融资产的公允价值",order:301,hint:"",createdAt:t()},{id:"kp-ch29-s29-03-x3y2",sectionId:"s29-03",name:"负债的公允价值",order:302,hint:"",createdAt:t()},{id:"kp-ch29-s29-03-x3y3",sectionId:"s29-03",name:"企业合并中的公允价值",order:303,hint:"",createdAt:t()},{id:"kp-ch30-s30-01-x1y1",sectionId:"s30-01",name:"标准体系",order:101,hint:"",createdAt:t()},{id:"kp-ch30-s30-01-x1y2",sectionId:"s30-01",name:"核算模式",order:102,hint:"",createdAt:t()},{id:"kp-ch30-s30-01-x1y3",sectionId:"s30-01",name:"会计要素",order:103,hint:"",createdAt:t()},{id:"kp-ch30-s30-02-x2y1",sectionId:"s30-02",name:"财政拨款收支业务",order:201,hint:"",createdAt:t()},{id:"kp-ch30-s30-02-x2y2",sectionId:"s30-02",name:"预算管理一体化相关",order:202,hint:"",createdAt:t()},{id:"kp-ch30-s30-02-x2y3",sectionId:"s30-02",name:"非财政拨款收支业务",order:203,hint:"",createdAt:t()},{id:"kp-ch30-s30-02-x2y4",sectionId:"s30-02",name:"预算结转结余及分配业务",order:204,hint:"",createdAt:t()},{id:"kp-ch30-s30-02-x2y5",sectionId:"s30-02",name:"净资产业务",order:205,hint:"",createdAt:t()},{id:"kp-ch30-s30-02-x2y6",sectionId:"s30-02",name:"资产业务",order:206,hint:"",createdAt:t()},{id:"kp-ch30-s30-02-x2y7",sectionId:"s30-02",name:"负债业务",order:207,hint:"",createdAt:t()},{id:"kp-ch30-s30-02-x2y8",sectionId:"s30-02",name:"部门合并财务报表",order:208,hint:"",createdAt:t()},{id:"kp-ch30-s30-03-x3y1",sectionId:"s30-03",name:"概述",order:301,hint:"",createdAt:t()},{id:"kp-ch30-s30-03-x3y2",sectionId:"s30-03",name:"特定业务核算",order:302,hint:"",createdAt:t()},{id:"kp-ch30-s30-03-x3y3",sectionId:"s30-03",name:"财务报告",order:303,hint:"",createdAt:t()}],jn=[{chapterId:"ch01",sectionId:"s01-01",kpointIds:["kp-ch01-s01-02-x2y2"],type:"single",prompt:"【2.1 会计基本假设的识别】下列关于会计基本假设的表述中，正确的是（ ）。",options:[{id:"A",text:"会计主体是指法律主体，企业所有会计核算必须以法律主体为前提"},{id:"B",text:"持续经营假设为企业采用历史成本计量提供了理论基础"},{id:"C",text:"会计分期假设产生了权责发生制和收付实现制的区分"},{id:"D",text:"货币计量假设要求币值保持稳定，因此不允许采用其他计量属性"}],answer:"B",explanation:`本题考查会计基本假设的理解。

选项A：错误。会计主体≠法律主体。例如，合并报表的会计主体是集团，而非单个法律主体。

选项B：正确。持续经营假设意味着企业将持续经营，不会面临清算，因此可以采用历史成本对资产进行分期折旧/摊销，这是历史成本计量的理论基础。

选项C：错误。会计分期假设产生了**权责发生制**，而**收付实现制**是相对于权责发生制而言的另一种会计基础，主要用于政府会计。

选项D：错误。货币计量假设虽然以货币为主要计量单位，但并不禁止采用其他计量属性（如公允价值）。`,difficulty:2,source:"笔记 INTERMEDIATE 改编",tags:["总论","会计基本假设的识别"]},{chapterId:"ch01",sectionId:"s01-01",kpointIds:["kp-ch01-s01-06-x6y2"],type:"multiple",prompt:"【2.2 会计信息质量要求的应用】甲公司为一家房地产开发企业，2×23年1月将其自有的办公楼出租给乙公司，租期3年。根据合同约定，乙公司需一次性支付3年租金900万元。甲公司在2×23年确认租金收入时，可能涉及的会计信息质量要求有（ ）。",options:[{id:"A",text:"实质重于形式"},{id:"B",text:"重要性"},{id:"C",text:"谨慎性"},{id:"D",text:"可比性"}],answer:["A","B"],explanation:`本题考查会计信息质量要求的应用。

甲公司一次性收取3年租金，按照权责发生制要求，应在租赁期内分期确认收入，每年确认300万元。

选项A：虽然租金一次性收取，但会计上应按权责发生制分期确认收入，体现了会计信息质量要求中的**实质重于形式**——关注经济实质而非款项收付形式。

选项B：本题涉及金额是否重大需要具体分析，题目未明确金额是否重要，选项B不一定涉及。

选项C：谨慎性要求不高估资产、不低估负债，本题与此无关。

选项D：可比性要求企业采用一致的会计政策，本题未体现。`,difficulty:2,source:"笔记 INTERMEDIATE 改编",tags:["总论","会计信息质量要求的应用"]},{chapterId:"ch01",sectionId:"s01-01",kpointIds:["kp-ch01-s01-04-x4y1"],type:"single",prompt:"【2.3 会计要素的辨析】下列各项中，不属于企业资产特征的是（ ）。",options:[{id:"A",text:"企业拥有或控制"},{id:"B",text:"预期会导致经济利益流出企业"},{id:"C",text:"由过去的交易或事项形成"},{id:"D",text:"能够可靠计量其成本"}],answer:"B",explanation:`本题考查资产要素的定义特征。

资产的定义：过去的交易或事项形成的、由企业拥有或控制的、预期会给企业带来经济利益的资源。

选项A：体现"拥有或控制"，属于资产特征。
选项B：这是**负债**的特征，不是资产的特征。资产预期会导致**经济利益流入**企业。
选项C：体现"过去的交易或事项"，属于资产特征。
选项D：成本或价值能够可靠计量是资产的确认条件之一。`,difficulty:2,source:"笔记 INTERMEDIATE 改编",tags:["总论","会计要素的辨析"]},{chapterId:"ch01",sectionId:"s01-01",kpointIds:["kp-ch01-s01-04-x4y2"],type:"single",prompt:"【2.4 计量属性的适用场景】下列各项业务中，应采用历史成本计量的是（ ）。",options:[{id:"A",text:"盘盈的固定资产"},{id:"B",text:"期末存货的可变现净值"},{id:"C",text:"持有待售的非流动资产的公允价值"},{id:"D",text:"可转债中嵌入的衍生工具的公允价值"}],answer:"A",explanation:`本题考查计量属性的应用场景。

| 计量属性 | 典型应用场景 |
|----------|--------------|
| 历史成本 | 固定资产初始计量、存货初始计量等 |
| 重置成本 | 盘盈固定资产的计量 |
| 可变现净值 | 存货期末计量 |
| 现值 | 具有融资性质的购买、分期付款等 |
| 公允价值 | 交易性金融资产、投资性房地产（公允模式）、金融工具等 |

选项A：盘盈固定资产按**重置成本**计量，不是历史成本。
选项B：存货期末按成本与可变现净值**孰低**计量，选项表述不完整，且涉及可变现净值而非历史成本。
选项C：持有待售资产按**公允价值减去处置费用**计量，不是历史成本。
选项D：衍生工具按**公允价值**计量。`,difficulty:2,source:"笔记 INTERMEDIATE 改编",tags:["总论","计量属性的适用场景"]},{chapterId:"ch01",sectionId:"s01-01",kpointIds:["kp-ch01-s01-06-x6y2"],type:"single",prompt:"【2.5 可比性的深层理解】甲公司2×22年变更固定资产折旧方法，将直线法改为双倍余额递减法。此项变更属于（ ）。",options:[{id:"A",text:"会计政策变更"},{id:"B",text:"会计估计变更"},{id:"C",text:"前期差错更正"},{id:"D",text:"资产负债表日后事项"}],answer:"B",explanation:`本题考查会计政策与会计估计的区分。

**会计政策变更**vs**会计估计变更**的判断标准：

| 变更类型 | 典型示例 |
|----------|----------|
| 会计政策变更 | 存货计价方法变更、固定资产折旧方法变更、借款费用资本化方法变更 |
| 会计估计变更 | 固定资产/无形资产使用寿命变更、坏账准备比例变更、固定资产净残值变更 |

**关键区别**：
- 折旧方法（直线法→双倍余额递减法）属于**会计政策变更**还是**会计估计变更**？

根据准则规定，固定资产折旧方法属于**会计估计**，因为折旧金额取决于多个会计估计：使用寿命、预计净残值、折旧方法。折旧方法的变更属于**会计估计变更**。`,difficulty:2,source:"笔记 INTERMEDIATE 改编",tags:["总论","可比性的深层理解"]},{chapterId:"ch02",sectionId:"s02-01",kpointIds:["kp-ch02-s02-04-x4y2"],type:"fill",prompt:"【2.1 可变现净值的计算】甲公司为增值税一般纳税人，20×9年12月31日，库存A商品的账面成本为500万元，估计售价为450万元，估计销售费用及相关税费为30万元。A商品是直接用于出售的存货。问：甲公司应对A商品计提多少存货跌价准备？",options:void 0,answer:["80万元","80"],explanation:`可变现净值的计算关键在于区分存货的持有目的：

1. **确定持有目的**：A商品是直接用于出售的存货（库存商品）
2. **确定估计售价**：无合同约定，按一般市场销售价格450万元
3. **计算可变现净值**：
   - 可变现净值 = 估计售价 - 估计销售费用及相关税费
   - 可变现净值 = 450 - 30 = 420（万元）
4. **比较成本与可变现净值**：
   - 成本500万元 > 可变现净值420万元
   - 应计提跌价准备 = 500 - 420 = 80（万元）

会计分录：
\`\`\`
借：资产减值损失——存货跌价损失    80
    贷：存货跌价准备               80
\`\`\``,difficulty:2,source:"笔记 INTERMEDIATE 改编",tags:["存货","可变现净值的计算"]},{chapterId:"ch02",sectionId:"s02-01",kpointIds:["kp-ch02-s02-04-x4y2"],type:"fill",prompt:"【2.2 原材料可变现净值的计算】乙公司20×9年12月31日，库存B原材料的账面成本为300万元，将其用于生产C产品。C产品估计售价为400万元，估计C产品完工尚需投入100万元，估计销售费用及相关税费为20万元。计算B原材料的可变现净值及应计提的存货跌价准备。",options:void 0,answer:["280万元","280","20万元","20"],explanation:`| 步骤 | 计算过程 |
|------|---------|
| 步骤1：确定C产品成本 | C产品成本 = 300 + 100 = 400（万元） |
| 步骤2：确定C产品可变现净值 | C产品可变现净值 = 400 - 20 = 380（万元） |
| 步骤3：比较C产品成本与可变现净值 | 400 > 380，发生减值 |
| 步骤4：计算B原材料可变现净值 | 400 - 100 - 20 = 280（万元） |
| 步骤5：计算跌价准备 | 300 - 280 = 20（万元） |`,difficulty:2,source:"笔记 INTERMEDIATE 改编",tags:["存货","原材料可变现净值的计算"]},{chapterId:"ch02",sectionId:"s02-01",kpointIds:["kp-ch02-s02-03-x3y2"],type:"fill",prompt:"【2.3 有合同与无合同部分的分别处理】丙公司20×9年12月31日，库存D商品的实际成本为600万元。其中：400万元有合同约定售价，合同价格总额500万元；200万元无合同，市场售价总额180万元。估计销售费用及相关税费为合同部分30万元、无合同部分15万元。计算应计提的存货跌价准备。",options:void 0,answer:["35万元","35"],explanation:`> **重要原则**：有合同部分和无合同部分应当分别确定可变现净值，分别计提跌价准备，不得相互弥补。

| 部分 | 成本 | 估计售价 | 销售费用 | 可变现净值 | 跌价准备 |
|------|------|---------|---------|-----------|---------|
| 有合同部分 | 400 | 500 | 30 | 470 | 0 |
| 无合同部分 | 200 | 180 | 15 | 165 | 35 |
| **合计** | 600 | - | - | - | **35** |`,difficulty:2,source:"笔记 INTERMEDIATE 改编",tags:["存货","有合同与无合同部分的分别处理"]},{chapterId:"ch02",sectionId:"s02-01",kpointIds:["kp-ch02-s02-04-x4y3"],type:"fill",prompt:"【2.4 存货跌价准备的转回】丁公司按单项计提存货跌价准备，20×8年12月31日，E商品成本80万元，已计提跌价准备20万元，账面价值60万元。由于市场情况好转，20×9年3月31日，E商品的可变现净值上升至75万元。计算应转回的存货跌价准备金额。",options:void 0,answer:["15万元","15"],explanation:`转回金额的限制条件：
- 转回金额 ≤ 原已计提金额
- 转回后账面价值不超过历史成本

| 步骤 | 计算过程 |
|------|---------|
| 现有跌价准备余额 | 20万元 |
| 应有的跌价准备余额 | 80 - 75 = 5（万元） |
| 可转回金额 | 20 - 5 = 15（万元） |

会计分录：
\`\`\`
借：存货跌价准备               15
    贷：资产减值损失            15
\`\`\``,difficulty:2,source:"笔记 INTERMEDIATE 改编",tags:["存货","存货跌价准备的转回"]},{chapterId:"ch02",sectionId:"s02-01",kpointIds:["kp-ch02-s02-03-x3y2"],type:"fill",prompt:"【2.5 存货清查盘点的会计处理】戊公司在存货清查中发现盘亏甲材料一批，实际成本30万元，增值税进项税额3.9万元。经查，属于管理不善造成的收发计量差错。保险公司同意赔偿10万元。编制相关会计分录。",options:void 0,answer:[`如上会计分录所示。

---

## 三、分录/计算模板`],explanation:`盘亏的会计处理要点：
1. 批准前：将存货账面价值转入"待处理财产损溢"
2. 进项税额转出：因管理不善导致的损失，进项税额需转出
3. 批准后：根据原因结转

| 原因 | 贷方科目 |
|------|---------|
| 管理不善（收发计量差错、一般经营损失） | 管理费用 |
| 自然灾害等非常原因 | 营业外支出 |
| 应由过失人或保险公司赔偿 | 其他应收款 |

**会计分录：**

\`\`\`
（1）批准前
借：待处理财产损溢              33.9
    贷：原材料                   30
        应交税费——应交增值税（进项税额转出） 3.9

（2）批准后
借：管理费用                    23.9
    其他应收款——保险公司       10
    贷：待处理财产损溢           33.9
\`\`\`

会计分录：
\`\`\`
（1）批准前
借：待处理财产损溢              33.9
    贷：原材料                   30
        应交税费——应交增值税（进项税额转出） 3.9

（2）批准后
借：管理费用                    23.9
    其他应收款——保险公司       10
    贷：待处理财产损溢           33.9
\`\`\``,difficulty:2,source:"笔记 INTERMEDIATE 改编",tags:["存货","存货清查盘点的会计处理"]},{chapterId:"ch03",sectionId:"s03-01",kpointIds:["kp-ch03-s03-02-x2y2"],type:"fill",prompt:"【2.1 双倍余额递减法计算】甲公司20×9年12月31日购入一台设备，原值500万元，预计使用年限5年，预计净残值20万元。按双倍余额递减法计算各年折旧额。",options:void 0,answer:["200","120","72","44"],explanation:`双倍余额递减法公式：
- 年折旧率 = 2/预计使用年限 = 2/5 = 40%
- 年折旧额 = 期初账面净值 × 年折旧率
- 最后两年改为直线法

| 年份 | 期初账面净值 | 年折旧率 | 年折旧额 | 累计折旧 | 期末账面净值 |
|------|-------------|---------|---------|---------|-------------|
| 第1年 | 500 | 40% | 200 | 200 | 300 |
| 第2年 | 300 | 40% | 120 | 320 | 180 |
| 第3年 | 180 | 40% | 72 | 392 | 108 |
| 第4年 | 108 | - | (108-20)/2=44 | 436 | 64 |
| 第5年 | 64 | - | 44 | 480 | 20 |`,difficulty:2,source:"笔记 INTERMEDIATE 改编",tags:["固定资产","双倍余额递减法计算"]},{chapterId:"ch03",sectionId:"s03-01",kpointIds:["kp-ch03-s03-02-x2y2"],type:"fill",prompt:"【2.2 年数总和法计算】乙公司购入一台设备，原值300万元，预计净残值15万元，预计使用年限5年。按年数总和法计算各年折旧额。",options:void 0,answer:["95","76","57","38","19"],explanation:`年数总和法公式：
- 折旧基数 = 原值 - 预计净残值 = 300 - 15 = 285（万元）
- 年折旧额 = 折旧基数 × 尚可使用年限/年数总和

年数总和 = 5 + 4 + 3 + 2 + 1 = 15

| 年份 | 折旧基数 | 尚可年限 | 折旧率 | 年折旧额 |
|------|---------|---------|--------|---------|
| 第1年 | 285 | 5 | 5/15 | 95 |
| 第2年 | 285 | 4 | 4/15 | 76 |
| 第3年 | 285 | 3 | 3/15 | 57 |
| 第4年 | 285 | 2 | 2/15 | 38 |
| 第5年 | 285 | 1 | 1/15 | 19 |`,difficulty:2,source:"笔记 INTERMEDIATE 改编",tags:["固定资产","年数总和法计算"]},{chapterId:"ch03",sectionId:"s03-01",kpointIds:["kp-ch03-s03-04-x4y1"],type:"fill",prompt:`【2.3 资本化与费用化的判断】丙公司对下列固定资产后续支出进行判断：
（1）对机器设备进行技术改造，领用原材料10万元，发生人工费用8万元，符合资本化条件
（2）对办公楼进行日常维修，发生维修费用5万元
（3）为销售部门的小汽车进行大修理，发生费用12万元`,options:void 0,answer:["1","10","8","18万元","18"],explanation:`| 支出类型 | 判断 | 处理 | 理由 |
|---------|------|------|------|
| 技术改造 | 资本化 | 计入固定资产成本 | 延长使用寿命、提高产能 |
| 日常维修 | 费用化 | 计入管理费用 | 不满足资本化条件 |
| 大修理 | 费用化 | 计入管理费用/销售费用 | 不满足资本化条件 |`,difficulty:2,source:"笔记 INTERMEDIATE 改编",tags:["固定资产","资本化与费用化的判断"]},{chapterId:"ch03",sectionId:"s03-01",kpointIds:["kp-ch03-s03-04-x4y3"],type:"fill",prompt:`【2.4 分期付款购买固定资产（具有融资性质）】丁公司20×9年1月1日从境外购入一台设备，合同约定设备价款1000万元，分5年于每年年末支付200万元。假定购买日的现值为800万元，适用的折现率为10%。

要求：
（1）计算固定资产的入账价值
（2）计算未确认融资费用
（3）编制第一年的会计分录`,options:void 0,answer:["800万元","800","200万元","200"],explanation:`| 项目 | 计算过程 | 结果 |
|------|---------|------|
| 入账价值 | 购买日现值 | 800万元 |
| 应付价款总额 | 200×5 | 1,000万元 |
| 未确认融资费用 | 1,000-800 | 200万元 |

**第一年分录：**

\`\`\`
（1）购入设备
借：固定资产                      800
    未确认融资费用                200
    贷：长期应付款              1,000

（2）第一年年末支付款项并摊销
借：长期应付款                  200
    贷：银行存款                200

借：财务费用（800×10%）          80
    贷：未确认融资费用           80
\`\`\``,difficulty:2,source:"笔记 INTERMEDIATE 改编",tags:["固定资产","分期付款购买固定资产（具有融资性质）"]},{chapterId:"ch03",sectionId:"s03-01",kpointIds:["kp-ch03-s03-04-x4y2"],type:"fill",prompt:"【2.5 固定资产处置的会计处理】戊公司出售一台不需用的机器设备，原价300万元，已累计折旧120万元，已计提减值准备30万元。出售取得价款200万元，适用的增值税率为13%。编制会计分录。",options:void 0,answer:["50万元","50"],explanation:`| 项目 | 计算过程 | 结果 |
|------|---------|------|
| 固定资产账面价值 | 300-120-30 | 150万元 |
| 出售取得价款 | - | 200万元 |
| 处置净收益 | 200-150 | 50万元 |

**会计分录：**

\`\`\`
（1）将固定资产转入清理
借：固定资产清理                150
    累计折旧                    120
    固定资产减值准备             30
    贷：固定资产                300

（2）收到出售价款
借：银行存款                   226
    贷：固定资产清理             200
        应交税费——应交增值税（销项税额） 26

（3）结转处置净损益
借：固定资产清理                50
    贷：资产处置损益             50
\`\`\`

会计分录：
\`\`\`
（1）将固定资产转入清理
借：固定资产清理                150
    累计折旧                    120
    固定资产减值准备             30
    贷：固定资产                300

（2）收到出售价款
借：银行存款                   226
    贷：固定资产清理             200
        应交税费——应交增值税（销项税额） 26

（3）结转处置净损益
借：固定资产清理                50
    贷：资产处置损益             50
\`\`\``,difficulty:2,source:"笔记 INTERMEDIATE 改编",tags:["固定资产","固定资产处置的会计处理"]},{chapterId:"ch03",sectionId:"s03-01",kpointIds:["kp-ch03-s03-04-x4y2"],type:"fill",prompt:"【2.6 被替换部分的账面价值计算】己公司对一栋办公楼进行改扩建，原价2000万元，已累计折旧600万元。该办公楼的一部分附属设备被替换，账面原价200万元，已计提折旧80万元。发生符合资本化条件的支出300万元。计算被替换部分的账面价值。",options:void 0,answer:["见解析"],explanation:`> 关键公式：被替换部分的账面价值 = 被替换部分原价 ×（1 - 已累计折旧/原价的比例）

**方法一：直接计算**
\`\`\`
被替换部分账面价值 = 200 × (1 - 80/200) = 200 × 0.6 = 120（万元）
\`\`\`

**方法二：验证整体逻辑**
\`\`\`
办公楼账面价值 = 2000 - 600 = 1400（万元）
被替换部分占原价的比例 = 200/2000 = 10%
被替换部分账面价值 = 1400 × 10% = 140（万元）
\`\`\`

两种方法计算结果不同，应以哪种为准？

**正确答案：** 140万元

**原因：** 改扩建应将办公楼账面价值转入在建工程，包括被替换部分的账面价值。

---`,difficulty:2,source:"笔记 INTERMEDIATE 改编",tags:["固定资产","被替换部分的账面价值计算"]},{chapterId:"ch04",sectionId:"s04-01",kpointIds:["kp-ch04-s04-03-x3y2"],type:"multiple",prompt:"【2.1 研发支出资本化判断】甲公司2×23年发生以下研发支出：研究阶段支出200万元；开发阶段支出300万元，其中满足资本化条件的为180万元，不满足资本化条件的为120万元。另有一项研发项目无法区分研究阶段和开发阶段，支出50万元。下列表述正确的有（ ）。",options:[{id:"A",text:"研究阶段支出200万元应计入管理费用"},{id:"B",text:"开发阶段满足资本化条件的180万元应计入无形资产"},{id:"C",text:"开发阶段不满足资本化条件的120万元应计入管理费用"},{id:"D",text:"无法区分阶段的50万元应计入无形资产"}],answer:["A","B","C"],explanation:`本题考查研发支出的分类处理。

选项A：正确。研究阶段支出全部费用化，计入管理费用。
选项B：正确。开发阶段满足资本化五条件的支出资本化，计入无形资产。
选项C：正确。开发阶段不满足资本化条件的支出费用化，计入管理费用。
选项D：错误。无法区分研究阶段和开发阶段的支出，应当在发生时全部费用化，计入管理费用。`,difficulty:2,source:"笔记 INTERMEDIATE 改编",tags:["无形资产","研发支出资本化判断"]},{chapterId:"ch04",sectionId:"s04-01",kpointIds:["kp-ch04-s04-04-x4y3"],type:"single",prompt:"【2.2 土地使用权的处理】下列关于土地使用权会计处理的表述中，正确的是（ ）。",options:[{id:"A",text:"房地产开发企业用于建造对外出售房屋的土地使用权应计入无形资产"},{id:"B",text:"企业外购房屋及建筑物支付的价款无法在地上建筑物与土地使用权之间分配的，应全部确认为无形资产"},{id:"C",text:"企业用于出租的土地使用权应转为投资性房地产"},{id:"D",text:"自用土地使用权应计入所建造固定资产的成本"}],answer:"C",explanation:`本题考查土地使用权在不同场景下的处理。

选项A：错误。房地产开发企业用于建造对外出售的房屋，土地使用权应计入所建造房屋的成本（存货），而非无形资产。
选项B：错误。确实无法分配的，应全部作为固定资产，而非无形资产。
选项C：正确。用于出租或资本增值的土地使用权，应转为投资性房地产。
选项D：错误。自用土地使用权应单独确认为无形资产，不计入固定资产成本。`,difficulty:2,source:"笔记 INTERMEDIATE 改编",tags:["无形资产","土地使用权的处理"]},{chapterId:"ch04",sectionId:"s04-01",kpointIds:["kp-ch04-s04-04-x4y1"],type:"single",prompt:"【2.3 摊销时间对比】甲公司2×23年6月30日购入一项无形资产，价款600万元，预计使用5年。2×23年度该无形资产的摊销额为（ ）万元。",options:[{id:"A",text:"60"},{id:"B",text:"120"},{id:"C",text:"30"},{id:"D",text:"0"}],answer:"A",explanation:`本题考查无形资产摊销的起止时间。

关键考点：无形资产"当月增加当月摊销，当月减少当月不再摊销"，与固定资产"当月增加下月折旧"不同。

购入时间6月30日 → 从6月开始摊销 → 2×23年摊销7个月（6月至12月）。

摊销额 = 600 ÷ 5 × 7/12 = 70万元。

但若题目假设7月1日购入（部分考题默认购入日即7月），则摊销6个月：600 ÷ 5 × 6/12 = 60万元。`,difficulty:2,source:"笔记 INTERMEDIATE 改编",tags:["无形资产","摊销时间对比"]},{chapterId:"ch04",sectionId:"s04-01",kpointIds:["kp-ch04-s04-04-x4y3"],type:"single",prompt:"【2.4 使用寿命不确定的无形资产】甲公司2×23年1月1日购入一项商标权，无法合理估计其使用寿命。2×23年末该商标权的公允价值为450万元，初始成本为500万元。下列处理正确的是（ ）。",options:[{id:"A",text:"计提摊销100万元"},{id:"B",text:"计提减值准备50万元"},{id:"C",text:"不做任何处理"},{id:"D",text:"计提摊销并计提减值"}],answer:"B",explanation:`本题考查使用寿命不确定无形资产的特殊处理。

使用寿命不确定的无形资产：
- **不计提摊销**
- **每年末必须进行减值测试**

可收回金额 = 450万元（假设公允价值减处置费用净额为450）
账面价值 = 500万元
减值 = 500 - 450 = 50万元`,difficulty:2,source:"笔记 INTERMEDIATE 改编",tags:["无形资产","使用寿命不确定的无形资产"]},{chapterId:"ch04",sectionId:"s04-01",kpointIds:["kp-ch04-s04-03-x3y2"],type:"fill",prompt:"【2.5 无形资产处置】甲公司2×23年将一项无形资产出售，该无形资产原值800万元，累计摊销200万元，未计提减值准备。出售价款650万元（不含增值税），增值税率6%。计算出售损益并写出会计分录。",options:void 0,answer:["见解析"],explanation:`账面价值 = 800 - 200 = 600万元
出售价款 = 650万元
增值税 = 650 × 6% = 39万元
资产处置损益 = 650 - 600 = 50万元

\`\`\`
借：银行存款                 689
    累计摊销                 200
  贷：无形资产                 800
      应交税费——应交增值税（销项税额）  39
      资产处置损益              50
\`\`\``,difficulty:2,source:"笔记 INTERMEDIATE 改编",tags:["无形资产","无形资产处置"]},{chapterId:"ch05",sectionId:"s05-01",kpointIds:["kp-ch05-s05-01-x1y2"],type:"multiple",prompt:"【2.1 投资性房地产范围判断】下列各项中，属于投资性房地产的有（ ）。",options:[{id:"A",text:"已出租的办公楼"},{id:"B",text:"企业拟自用的厂房"},{id:"C",text:"持有并准备增值后转让的土地使用权"},{id:"D",text:"空置建筑物（无书面决议）"},{id:"E",text:"已出租的商铺"}],answer:["A","C","E"],explanation:`- A属于：已出租的建筑物是投资性房地产
- B不属于:拟自用→固定资产
- C属于:持有并准备增值后转让的土地使用权
- D不属于:空置建筑物需董事会书面决议才可分类
- E属于:已出租的商铺

投资性房地产`,difficulty:2,source:"笔记 INTERMEDIATE 改编",tags:["投资性房地产","投资性房地产范围判断"]},{chapterId:"ch05",sectionId:"s05-01",kpointIds:["kp-ch05-s05-03-x3y3"],type:"single",prompt:"【2.2 成本模式转为公允价值模式】甲公司采用成本模式计量投资性房地产。2x23年1月1日转为公允价值模式。该办公楼原价2,000万元，已折旧600万元，转换日公允价值1,800万元。此项变更对期初留存收益的影响为（ ）万元。",options:[{id:"A",text:"增加400"},{id:"B",text:"增加200"},{id:"C",text:"减少200"},{id:"D",text:"减少400"}],answer:"A",explanation:"差额 = 公允价值1,800 - 账面价值1,400 = 400万元（贷方），追溯调整增加期初留存收益400万元。",difficulty:2,source:"笔记 INTERMEDIATE 改编",tags:["投资性房地产","成本模式转为公允价值模式"]},{chapterId:"ch05",sectionId:"s05-01",kpointIds:["kp-ch05-s05-01-x1y2"],type:"fill",prompt:"【2.3 公允价值模式下自用转投资性房地产】甲公司2x23年6月30日将自用办公楼转为出租，公允价值模式计量。办公楼原价3,000万元,已折旧900万元，转换日公允价值2,800万元。写出转换日分录。",options:void 0,answer:["见解析"],explanation:`公允价值2,800 > 账面2,100,贷方差额700万元计入**其他综合收益**。

\`\`\`
借：投资性房地产——成本     2,800
    累计折旧                       900
  贷：固定资产                        3,000
      其他综合收益                     700
\`\`\``,difficulty:2,source:"笔记 INTERMEDIATE 改编",tags:["投资性房地产","公允价值模式下自用转投资性房地产"]},{chapterId:"ch05",sectionId:"s05-01",kpointIds:["kp-ch05-s05-01-x1y2"],type:"fill",prompt:"【2.4 投资性房地产处置】甲公司出售公允价值模式投资性房地产,售价5,000万元。初始成本4,000万元，累计公允变动+500万元,原转换日其他综合收益700万元。计算处置损益并写出分录。",options:void 0,answer:["见解析"],explanation:`处置损益 = 5,000 - 4,500 = 500万元（其他业务收入）
同时转出累计公允变动500万元和OCI 700万元至其他业务成本

\`\`\`
借：银行存款                    5,000
  贷：其他业务收入               5,000
借：其他业务成本                4,500
  贷：投资性房地产——成本      4,000
      ——公允价值变动           500
借：公允价值变动损益              500
    其他综合收益                  700
  贷：其他业务成本              1,200
\`\`\``,difficulty:2,source:"笔记 INTERMEDIATE 改编",tags:["投资性房地产","投资性房地产处置"]},{chapterId:"ch06",sectionId:"s06-01",kpointIds:["kp-ch06-s06-02-x2y1"],type:"fill",prompt:"【2.1 同一控制下企业合并取得长期股权投资】甲公司为同一集团内子公司，2026年1月1日以银行存款5000万元和一项账面价值3000万元（公允价值3500万元）的固定资产为对价，取得集团内乙公司80%股权。乙公司在最终控制方合并报表中的净资产账面价值为8000万元。此前集团未曾从外部购买乙公司。求初始投资成本及差额处理。",options:void 0,answer:["6400","1600","5000","3000"],explanation:`- 同一控制下企业合并，初始投资成本 = 被合并方在最终控制方合并报表中的净资产账面价值 × 持股比例
- 初始投资成本 = 8000 × 80% = 6400万元
- 合并对价的账面价值 = 5000 + 3000 = 8000万元
- 差额 = 6400 - 8000 = -1600万元（贷差），调整资本公积（资本溢价/股本溢价）`,difficulty:2,source:"笔记 INTERMEDIATE 改编",tags:["长期股权投资与合营安排","同一控制下企业合并取得长期股权投资"]},{chapterId:"ch06",sectionId:"s06-01",kpointIds:["kp-ch06-s06-02-x2y2"],type:"fill",prompt:"【2.2 非同一控制下企业合并——可辨认净资产公允价值调整】甲公司以6000万元现金购买乙公司70%股权（非同一控制）。购买日乙公司可辨认净资产公允价值为7000万元，账面价值为6500万元，差异来自一项尚可使用10年的固定资产（公允价值高于账面价值500万元）。求商誉金额及购买日抵销分录。",options:void 0,answer:["500","7000","1100","6000","2100"],explanation:`- 合并成本 = 6000万元
- 可辨认净资产公允价值份额 = 7000 × 70% = 4900万元
- 商誉 = 6000 - 4900 = 1100万元`,difficulty:2,source:"笔记 INTERMEDIATE 改编",tags:["长期股权投资与合营安排","非同一控制下企业合并——可辨认净资产公允价值调整"]},{chapterId:"ch06",sectionId:"s06-01",kpointIds:["kp-ch06-s06-01-x1y1"],type:"fill",prompt:"【2.3 权益法——投资收益的确认】甲公司2026年1月1日以4000万元取得乙公司30%股权，能够施加重大影响。2026年乙公司实现净利润2000万元。投资日乙公司可辨认净资产公允价值为12000万元，账面价值为11000万元，差异来自一项尚可使用5年的管理用固定资产。求甲公司2026年应确认的投资收益。",options:void 0,answer:["540"],explanation:`- 固定资产公允价值与账面价值差异 = 12000 - 11000 = 1000万元
- 每年多提折旧 = 1000 / 5 = 200万元
- 调整后净利润 = 2000 - 200 = 1800万元
- 投资收益 = 1800 × 30% = 540万元`,difficulty:2,source:"笔记 INTERMEDIATE 改编",tags:["长期股权投资与合营安排","权益法——投资收益的确认"]},{chapterId:"ch06",sectionId:"s06-01",kpointIds:["kp-ch06-s06-03-x3y2"],type:"fill",prompt:"【2.4 逆流交易未实现内部交易损益】甲持有乙30%股权（权益法）。2026年乙公司向甲公司销售商品，售价600万元，成本400万元。甲公司当年未将该商品对外出售。乙公司2026年实现净利润1500万元。求甲公司2026年应确认的投资收益。",options:void 0,answer:["390","60万元","60"],explanation:`- 未实现内部交易损益 = 600 - 400 = 200万元
- 应抵减的投资收益 = 200 × 30% = 60万元
- 调整后投资收益 = (1500 - 200) × 30% = 390万元`,difficulty:2,source:"笔记 INTERMEDIATE 改编",tags:["长期股权投资与合营安排","逆流交易未实现内部交易损益"]},{chapterId:"ch06",sectionId:"s06-01",kpointIds:["kp-ch06-s06-04-x4y1"],type:"fill",prompt:"【2.5 成本法转权益法（丧失控制权）】甲公司持有乙公司80%股权（成本法），账面价值8000万元。2026年甲公司出售乙公司50%股权（即总股权的50%），取得价款7000万元。剩余30%股权公允价值为4200万元。出售日乙公司可辨认净资产公允价值为13000万元。求确认的投资收益。",options:void 0,answer:["7000","5000","2000","1200"],explanation:`- 丧失控制权，剩余股权按公允价值重新计量
- 处置收益 = 处置价款 + 剩余股权公允价值 - 原持股比例对应的可辨认净资产份额
- 处置收益 = 7000 + 4200 - 8000（原投资账面价值）= 3200万元
- 但更准确的做法：
  - 处置50%的投资账面价值 = 8000 × 50/80 = 5000万元
  - 处置部分收益 = 7000 - 5000 = 2000万元
  - 剩余30%股权按公允价值重新计量：4200万元
  - 剩余股权原账面价值 = 8000 - 5000 = 3000万元
  - 重新计量收益 = 4200 - 3000 = 1200万元
  - 合计投资收益 = 2000 + 1200 = 3200万元`,difficulty:2,source:"笔记 INTERMEDIATE 改编",tags:["长期股权投资与合营安排","成本法转权益法（丧失控制权）"]},{chapterId:"ch07",sectionId:"s07-01",kpointIds:["kp-ch07-s07-02-x2y3"],type:"fill",prompt:"【2.1 可收回金额的计算】甲公司一台设备账面价值800万元，公允价值减处置费用净额650万元，预计未来现金流量现值720万元。应确认减值损失多少万元？",options:void 0,answer:["80万元","80"],explanation:"可收回金额 = max(650, 720) = 720万元。 800 > 720, 减值损失 = 800 - 720 = 80万元。",difficulty:2,source:"笔记 INTERMEDIATE 改编",tags:["资产减值","可收回金额的计算"]},{chapterId:"ch07",sectionId:"s07-01",kpointIds:["kp-ch07-s07-01-x1y1"],type:"multiple",prompt:"【2.2 减值能否转回】下列资产中，减值损失可以转回的有（ ）。",options:[{id:"A",text:"存货  B. 固定资产  C. 应收账款  D. 无形资产  E. 商誉"}],answer:["A","C"],explanation:"存货(CAS 1)和应收账款(CAS 22)可以转回；固定资产、无形资产、商誉(CAS 8)不可转回。",difficulty:2,source:"笔记 INTERMEDIATE 改编",tags:["资产减值","减值能否转回"]},{chapterId:"ch07",sectionId:"s07-01",kpointIds:["kp-ch07-s07-04-x4y3"],type:"fill",prompt:"【2.3 资产组减值分摊】某资产组账面价值1,000万元（含商誉100万元），可收回金额700万元。资产组中A设备账面400万元、B设备账面500万元。分摊减值后各设备新账面价值？",options:void 0,answer:["见解析"],explanation:`减值总额300万元。 先冲减商誉100万元，剩余200万元按账面比例分摊：
- A分摊: 200×400/900 = 88.9万元 → 新账面311.1万元
- B分摊: 200×500/900 = 111.1万元 → 新账面388.9万元
分摊后单项资产账面不得低于max(公允净额,现金流量现值,0)`,difficulty:2,source:"笔记 INTERMEDIATE 改编",tags:["资产减值","资产组减值分摊"]},{chapterId:"ch07",sectionId:"s07-01",kpointIds:["kp-ch07-s07-05-x5y2"],type:"fill",prompt:"【2.4 商誉减值测试（部分持股）】甲公司持有乙公司80%股权，合并成本1,200万元，享有可辨认净资产公允价值份额800万元，商誉400万元。乙公司全部商誉 = 400/80% = 500万元。资产组账面价值（含全部商誉）= 可辨认净资产1,000 + 500 = 1,500万元，可收回金额1,200万元。",options:void 0,answer:["见解析"],explanation:"减值300万元，先冲减商誉300万元（全部冲减商誉500万元中的300万元），母公司确认商誉减值 = 300×80% = 240万元。",difficulty:2,source:"笔记 INTERMEDIATE 改编",tags:["资产减值","商誉减值测试（部分持股）"]},{chapterId:"ch08",sectionId:"s08-01",kpointIds:["kp-ch08-s08-01-x1y1"],type:"fill",prompt:"【2.1 增值税处理】甲公司购入原材料价款100万元，增值税13万元；销售产品价款200万元，增值税34万元。进项税额转出2万元（非正常损失）。应交增值税?",options:void 0,answer:["见解析"],explanation:"应交增值税 = 销项34 - 进项17 + 进项转出2 = 19万元",difficulty:2,source:"笔记 INTERMEDIATE 改编",tags:["负债","增值税处理"]},{chapterId:"ch08",sectionId:"s08-01",kpointIds:["kp-ch08-s08-01-x1y1"],type:"fill",prompt:"【2.2 摊余成本计算】甲公司2x23年1月1日发行5年期债券，面值1,000万元，票面利率55%，实际利率6%，发行价960万元。第1年利息费用?",options:void 0,answer:["见解析"],explanation:"第1年利息费用 = 960×6% = 57.6万元；应付利息 = 1,000×5% = 50万元；利息调整摊销 = 7.6万元;年末摊余成本 = 960+7.6 = 967.6万元",difficulty:2,source:"笔记 INTERMEDIATE 改编",tags:["负债","摊余成本计算"]},{chapterId:"ch08",sectionId:"s08-01",kpointIds:["kp-ch08-s08-02-x2y3"],type:"fill",prompt:"【2.3 应付票据到期无力支付】甲公司商业承兑汇票50万元到期无力支付，应如何处理?",options:void 0,answer:["见解析"],explanation:"商业承兑汇票→1转入应付账款；银行承兑汇票→1转入短期借款",difficulty:2,source:"笔记 INTERMEDIATE 改编",tags:["负债","应付票据到期无力支付"]},{chapterId:"ch08",sectionId:"s08-01",kpointIds:["kp-ch08-s08-01-x1y1"],type:"fill",prompt:"【2.4 未确认融资费用摊销】甲公司分期付款购入设备，总价500万元分3年支付，实际利率5%。第1年摊销?",options:void 0,answer:["见解析"],explanation:"设备入账价值 = 500/(1+5%)^3现值；第1年摊销 = 期初摊余成本×5%",difficulty:2,source:"笔记 INTERMEDIATE 改编",tags:["负债","未确认融资费用摊销"]},{chapterId:"ch09",sectionId:"s09-01",kpointIds:["kp-ch09-s09-01-x1y1"],type:"multiple",prompt:"【2.1 职工范围判断】下列属于职工的有（ ）。",options:[{id:"A",text:"与企业签订劳动合同的全职职工"},{id:"B",text:"未签订劳动合同但由企业正式任命的董事"},{id:"C",text:"在企业控制下提供服务的劳务用工"},{id:"D",text:"外部顾问"}],answer:["A","B","C"],explanation:"A、B、C均属于职工范围；D不属于（非正式任命)",difficulty:2,source:"笔记 INTERMEDIATE 改编",tags:["职工薪酬","职工范围判断"]},{chapterId:"ch09",sectionId:"s09-01",kpointIds:["kp-ch09-s09-02-x2y4"],type:"fill",prompt:"【2.2 非货币性福利——自产产品发放】甲公司以自产产品作为福利发放给员工，产品成本80万元，公允价值100万元，增值税率13%。确认职工薪酬金额?",options:void 0,answer:["113万元","113"],explanation:`按公允价值+增值税确认 = 100+13 = 113万元（视同销售）
\`\`\`
借：管理费用/生产成本          113
  贍：应付职工薪酬——非货币性福利  113
借：应付职工薪酬——非货币性福利  113
  贷：主营业务收入                100
      应交税费——应交增值税(销项)   13
借：主营业务成本                80
  贷：库存商品                    80
\`\`\``,difficulty:2,source:"笔记 INTERMEDIATE 改编",tags:["职工薪酬","非货币性福利——自产产品发放"]},{chapterId:"ch09",sectionId:"s09-01",kpointIds:["kp-ch09-s09-03-x3y3"],type:"fill",prompt:"【2.3 设定受益计划】甲公司设定受益计划当期服务成本50万元，利息费用10万元，精算利得5万元。如何处理?",options:void 0,answer:["见解析"],explanation:"当期服务成本+利息费用计入当期损益；精算利得/损失计入其他综合收益\n```\n借：管理费用（当期服务成本50+利息10）  60\n  贷：应付职工薪酬                     60\n借：其他综合收益                     5\n  贷：应付职工薪酬                     5\n```",difficulty:2,source:"笔记 INTERMEDIATE 改编",tags:["职工薪酬","设定受益计划"]},{chapterId:"ch09",sectionId:"s09-01",kpointIds:["kp-ch09-s09-02-x2y4"],type:"fill",prompt:"【2.4 辞退福利】甲公司辞退50名员工，每人补偿10万元。不论原属哪个部门，全部计入什么科目?",options:void 0,answer:["见解析"],explanation:"辞退福利一律计入管理费用（500万元），不论原属哪个部门。",difficulty:2,source:"笔记 INTERMEDIATE 改编",tags:["职工薪酬","辞退福利"]},{chapterId:"ch10",sectionId:"s10-01",kpointIds:["kp-ch10-s10-02-x2y1"],type:"single",prompt:"【2.1 权益结算vs现金结算】下列关于权益结算与现金结算股份支付的表述，正确的有（ ）。",options:[{id:"A",text:"1权益结算按授予日公允价值计量"},{id:"B",text:"1现金结算按授予日公允价值计量"},{id:"C",text:"1权益结算确认负债"},{id:"D",text:"1现金结算确认资本公积"}],answer:"A",explanation:"A正确(权益结算按授予日公允价值);1 B错误(现金结算按每期末公允价值重新计量)>1 C错误(权益结算确认权益-资本公积)>1 D错误(现金结算确认负债-应付职工薪酬)",difficulty:2,source:"笔记 INTERMEDIATE 改编",tags:["股份支付","权益结算vs现金结算"]},{chapterId:"ch10",sectionId:"s10-01",kpointIds:["kp-ch10-s10-04-x4y1"],type:"fill",prompt:"【2.2 1等待期费用分摊】甲公司授予100名员工股票期权，每人100股，授予日公允价值15元/股，等待期3年。第1年末估计90人可行权。2第2年末85人。2第3年末80人。第1年确认费用?",options:void 0,answer:["见解析"],explanation:`第1年费用 = 90人×100股×15元×1/3 = 450,000元
第2年费用 = 85人×100×15×2/3 = 850,000元 - 已确认450,000 = 400,000元
第3年费用 = 80人×100×15×3/3 - 已确认850,000 = 350,000元`,difficulty:2,source:"笔记 INTERMEDIATE 改编",tags:["股份支付","1等待期费用分摊"]},{chapterId:"ch10",sectionId:"s10-01",kpointIds:["kp-ch10-s10-03-x3y1"],type:"fill",prompt:"【2.3 可行权条件——市场条件】甲公司授予期权附带市场条件（股价达到3030元）和非市场条件（净利润增长1010%)>1市场条件未满足时如何处理?",options:void 0,answer:["见解析"],explanation:"1市场条件已计入公允价值,1无论是否满足都不影响确认；1非市场条件未满足→不确认（已确认冲回)。",difficulty:2,source:"笔记 INTERMEDIATE 改编",tags:["股份支付","可行权条件——市场条件"]},{chapterId:"ch10",sectionId:"s10-01",kpointIds:["kp-ch10-s10-01-x1y1"],type:"fill",prompt:"【2.4 1集团股份支付】1母公司以自身权益工具结算授予子公司员工期权>1子公司如何处理?",options:void 0,answer:["见解析"],explanation:"1子公司确认费用+资本公积；1母公司确认长期股权投资+资本公积",difficulty:2,source:"笔记 INTERMEDIATE 改编",tags:["股份支付","1集团股份支付"]},{chapterId:"ch10",sectionId:"s10-01",kpointIds:["kp-ch10-s10-03-x3y3"],type:"fill",prompt:"【2.5 1修改条款——不利修改】甲公司将期权行权价格从10元降至8元（有利员工修改)>1如何处理?",options:void 0,answer:["见解析"],explanation:"1不利修改按修改后条款确认>1增加费用部分在修改日至可行权日日之间分摊确认",difficulty:2,source:"笔记 INTERMEDIATE 改编",tags:["股份支付","1修改条款——不利修改"]},{chapterId:"ch11",sectionId:"s11-01",kpointIds:["kp-ch11-s11-02-x2y1"],type:"fill",prompt:"【2.1 资本化时点判断（单选题）】甲公司为建造一栋办公楼，于2×21年1月1日向银行借入专门借款5,000万元，借款年利率为6%。2×21年3月1日，甲公司以自有资金支付了工程款项2,000万元，同日开始施工建造。下列关于借款费用资本化开始的时点，正确的是（ ）。",options:[{id:"A",text:"2×21年1月1日"},{id:"B",text:"2×21年3月1日"},{id:"C",text:"2×21年1月1日或3月1日均可"},{id:"D",text:"三个条件同时满足后开始资本化"}],answer:["B"],explanation:`借款费用资本化需同时满足三个条件：
1. 资产支出已发生
2. 借款费用已发生
3. 购建活动已开始

本题中，1月1日虽然借款费用已发生，但资产支出（2,000万元）在3月1日才发生。因此，资本化开始时点应为3月1日。`,difficulty:2,source:"笔记 INTERMEDIATE 改编",tags:["借款费用","资本化时点判断（单选题）"]},{chapterId:"ch11",sectionId:"s11-01",kpointIds:["kp-ch11-s11-03-x3y1"],type:"fill",prompt:"【2.2 专门借款利息计算（计算题）】乙公司于2×21年1月1日开始建造一大型设备，当日取得专门借款10,000万元，年利率5%，期限3年。该公司于1月1日、4月1日、7月1日分别支付工程款3,000万元、3,000万元、2,000万元。借款闲置资金在支付工程款前存入银行，月利率0.2%。计算2×21年度应资本化的借款费用金额。",options:void 0,answer:["350万元","350"],explanation:`**第一步：计算实际利息**
\`\`\`
专门借款实际利息 = 10,000 × 5% = 500万元
\`\`\`

**第二步：计算闲置资金投资收益**
- 第1笔闲置：10,000万 × 0.2% × 3个月 = 60万元
- 第2笔闲置：7,000万 × 0.2% × 3个月 = 42万元
- 第3笔闲置：4,000万 × 0.2% × 6个月 = 48万元
- 合计投资收益 = 60 + 42 + 48 = 150万元

**第三步：计算资本化金额**
\`\`\`
资本化金额 = 500 - 150 = 350万元
\`\`\``,difficulty:2,source:"笔记 INTERMEDIATE 改编",tags:["借款费用","专门借款利息计算（计算题）"]},{chapterId:"ch11",sectionId:"s11-01",kpointIds:["kp-ch11-s11-03-x3y2"],type:"fill",prompt:`【2.3 一般借款利息计算（计算题）】丙公司2×21年度为建造一栋厂房发生如下经济业务：
- 专门借款：2×21年1月1日取得6,000万元，年利率6%，当日全部用于支付工程款
- 一般借款：2×21年1月1日取得4,000万元，年利率8%；7月1日取得2,000万元，年利率7%
- 工程累计支出：3月1日支付4,000万元，8月1日支付3,000万元

计算2×21年度应资本化的借款费用（假设工程于12月31日完工）。`,options:void 0,answer:["360","0","360万元"],explanation:`**第一步：计算专门借款利息**
\`\`\`
专门借款利息 = 6,000 × 6% = 360万元
闲置资金无收益，资本化金额 = 360万元
\`\`\`

**第二步：计算一般借款资本化部分**
- 累计支出加权平均数：
  - 3月1日-12月31日（10个月）：4,000 × 10/12 = 3,333.33万元
  - 8月1日-12月31日（5个月）：3,000 × 5/12 = 1,250万元
  - 合计 = 4,583.33万元

- 超过专门借款的支出：4,583.33 - 6,000 = 0（未超过）

- 一般借款资本化金额 = 0 × 一般借款资本化率 = 0

**第三步：计算费用化一般借款利息**
\`\`\`
一般借款利息费用 = 4,000 × 8% + 2,000 × 7% × 6/12 = 320 + 70 = 390万元
\`\`\``,difficulty:2,source:"笔记 INTERMEDIATE 改编",tags:["借款费用","一般借款利息计算（计算题）"]},{chapterId:"ch11",sectionId:"s11-01",kpointIds:["kp-ch11-s11-02-x2y1"],type:"fill",prompt:"【2.4 暂停资本化条件（多选题）】下列情形中，应当暂停借款费用资本化的有（ ）。",options:[{id:"A",text:"由于劳动纠纷，连续中断4个月的购建活动"},{id:"B",text:"由于发生安全事故，连续中断3个月的购建活动"},{id:"C",text:"北方某建筑企业因雨季到来，连续中断2个月的购建活动"},{id:"D",text:"由于资金周转困难，连续中断5个月的购建活动"}],answer:["AD"],explanation:`暂停资本化需同时满足两个条件：
1. 非正常中断
2. 中断时间连续超过3个月

| 选项 | 情形 | 判断 |
|------|------|------|
| A | 劳动纠纷，属于非正常中断，4个月>3个月 | 暂停 |
| B | 安全事故，属于非正常中断，3个月=3个月（未超过） | 不暂停 |
| C | 雨季属于正常中断，不暂停资本化 | 不暂停 |
| D | 资金周转困难，属于非正常中断，5个月>3个月 | 暂停 |`,difficulty:2,source:"笔记 INTERMEDIATE 改编",tags:["借款费用","暂停资本化条件（多选题）"]},{chapterId:"ch11",sectionId:"s11-01",kpointIds:["kp-ch11-s11-02-x2y1"],type:"fill",prompt:"【2.5 停止资本化时点（单选题）】下列各项中，应停止借款费用资本化的条件是（ ）。",options:[{id:"A",text:"资产的实体建造工作已全部完成"},{id:"B",text:"资产已达到预定可使用状态，但尚未办理竣工决算"},{id:"C",text:"与设计要求基本相符，但尚有部分细节需要完善"},{id:"D",text:"继续发生在资产上的支出金额很少"}],answer:[`C

## 三、分录/计算模板`],explanation:`停止资本化的时点是"资产达到预定可使用或可销售状态"，判断标志：
1. 实体建造已完成
2. 与设计要求基本相符
3. **继续支出很少或几乎不再发生**

选项C表明与设计要求基本相符，但需注意停止资本化的核心是"是否达到预定可使用状态"，而非"完全竣工"。`,difficulty:2,source:"笔记 INTERMEDIATE 改编",tags:["借款费用","停止资本化时点（单选题）"]},{chapterId:"ch12",sectionId:"s12-01",kpointIds:["kp-ch12-s12-02-x2y1"],type:"fill",prompt:"【2.1 预计负债确认条件（单选题）】下列各项中，应当确认为预计负债的是（ ）。",options:[{id:"A",text:"甲公司因侵权被起诉，法院尚未判决。律师估计很可能败诉，赔偿金额范围为500-800万元（各金额可能性相同）"},{id:"B",text:"乙公司因销售商品提供质量保证，年度内实际发生保修费用100万元"},{id:"C",text:"丙公司被银行起诉，因合同违约需支付违约金200万元，但公司决定上诉"},{id:"D",text:"丁公司为关联方提供担保，预计很可能承担连带还款责任，金额无法可靠估计"}],answer:["A"],explanation:`预计负债的确认需同时满足三个条件：
1. 义务是企业承担的现时义务
2. 很可能导致经济利益流出
3. 金额能够可靠计量

| 选项 | 分析 | 是否确认 |
|------|------|----------|
| A | 满足三个条件：现时义务（法院未判决但律师评估）+ 很可能（50%-95%）+ 金额可计量（500-800万元中间值650万元） | 是 |
| B | 提供质量保证属于或有事项，但"年度内实际发生保修费用100万元"是已发生事项，不是"未来事项" | 否（本期费用） |
| C | 决定上诉说明尚未形成现时义务，可能金额能可靠计量，但义务本身不确定 | 否 |
| D | 金额无法可靠计量，不满足第三个条件 | 否 |`,difficulty:2,source:"笔记 INTERMEDIATE 改编",tags:["或有事项","预计负债确认条件（单选题）"]},{chapterId:"ch12",sectionId:"s12-01",kpointIds:["kp-ch12-s12-02-x2y1"],type:"fill",prompt:`【2.2 最佳估计数计算（计算题）】A公司2×21年度因销售商品承担产品质量保证义务，期末应确认的预计负债金额如下：
- 情形1：共有5,000件产品需要保修，可能发生的保修费用范围为100-200万元，且各金额可能性相同
- 情形2：共涉及5起诉讼案件，最可能赔偿金额分别是50万元、80万元、100万元、150万元、200万元

计算A公司应确认的预计负债金额。`,options:void 0,answer:["1","150万元","150","2","580万元"],explanation:"**情形1：连续范围、等概率**\n```\n最佳估计数 = (上限 + 下限) ÷ 2 = (100 + 200) ÷ 2 = 150万元\n```\n\n**情形2：多个项目，各金额独立**\n```\n预计负债 = 50 + 80 + 100 + 150 + 200 = 580万元\n（分别确认，因为是5起独立的诉讼案件）\n```",difficulty:2,source:"笔记 INTERMEDIATE 改编",tags:["或有事项","最佳估计数计算（计算题）"]},{chapterId:"ch12",sectionId:"s12-01",kpointIds:["kp-ch12-s12-02-x2y1"],type:"fill",prompt:"【2.3 或有负债vs预计负债（多选题）】下列关于或有事项的表述中，正确的有（ ）。",options:[{id:"A",text:"或有负债包括确认为预计负债的现时义务"},{id:"B",text:"或有资产应在满足条件时确认为资产"},{id:"C",text:"预计负债应该按照最佳估计数计量"},{id:"D",text:"或有负债即使极小可能流出经济利益，企业仍需在附注中披露"}],answer:["C"],explanation:`| 选项 | 判断 | 说明 |
|------|------|------|
| A | 错误 | 或有负债和预计负债是互斥的。预计负债是已确认的，或有负债是未确认的 |
| B | 错误 | 或有资产"不确认"，只能披露；只有基本确定时才能披露 |
| C | 正确 | 预计负债按照最佳估计数计量 |
| D | 错误 | 极小可能（<5%）的或有负债"不需要披露"，其他情形才需要披露 |`,difficulty:2,source:"笔记 INTERMEDIATE 改编",tags:["或有事项","或有负债vs预计负债（多选题）"]},{chapterId:"ch12",sectionId:"s12-01",kpointIds:["kp-ch12-s12-02-x2y1"],type:"fill",prompt:`【2.4 亏损合同会计处理（计算题）】B公司签订了一份不可撤销的销售合同，向客户销售1,000件产品，合同价格100元/件，履行合同估计需发生的成本为120元/件。目前B公司已产成品500件，成本为115元/件，另外500件尚未生产。

要求：
（1）判断该合同是否属于亏损合同
（2）计算应确认的预计负债金额
（3）编制相关会计分录`,options:void 0,answer:["12500元","12500"],explanation:`**第一步：判断合同性质**
\`\`\`
合同收入 = 1,000 × 100 = 100,000元
合同成本 = 1,000 × 120 = 120,000元
亏损金额 = 20,000元
→ 该合同属于亏损合同
\`\`\`

**第二步：确定是否需要确认预计负债**
- 存在标的资产：是的，已产成品500件
- 首先对标的资产计提减值：产品成本115元/件，可变现净值100元/件，减值15元/件
  - 已产成品500件应计提减值 = 500 × 15 = 7,500元
- 超过减值准备的部分确认预计负债：
  - 亏损合同总损失 = 20,000元
  - 标的资产已确认减值 = 7,500元
  - 应确认预计负债 = 20,000 - 7,500 = 12,500元

**第三步：会计分录**
\`\`\`
借：资产减值损失                         7,500
  贷：存货跌价准备                       7,500

借：营业外支出（亏损合同损失）          12,500
  贷：预计负债                          12,500
\`\`\``,difficulty:2,source:"笔记 INTERMEDIATE 改编",tags:["或有事项","亏损合同会计处理（计算题）"]},{chapterId:"ch12",sectionId:"s12-01",kpointIds:["kp-ch12-s12-02-x2y1"],type:"fill",prompt:"【2.5 预期补偿的确认（单选题）】C公司因合同违约被提起诉讼，预计赔偿金额200万元，同时预计可从保险公司获得补偿100万元。下列关于C公司会计处理的表述中，正确的是（ ）。",options:[{id:"A",text:"确认预计负债200万元，同时确认其他应收款100万元，赔偿时对抵销处理"},{id:"B",text:"确认预计负债200万元，同时确认其他应收款100万元，赔偿时不对抵销处理"},{id:"C",text:"确认预计负债200万元，不确认其他应收款，只在附注中披露"},{id:"D",text:"确认预计负债100万元（200-100），不确认其他应收款"}],answer:[`C

## 三、分录/计算模板`],explanation:`预期补偿的确认规则：
1. 只有在"基本确定"能收到补偿时才能确认为资产
2. 确认的补偿金额不超过预计负债的账面价值
3. **补偿金额和预计负债分别确认，不得相互抵销**

本题中"预计可获得"通常意味着"很可能"，而非"基本确定"，因此不应确认资产。`,difficulty:2,source:"笔记 INTERMEDIATE 改编",tags:["或有事项","预期补偿的确认（单选题）"]},{chapterId:"ch13",sectionId:"s13-01",kpointIds:["kp-ch13-s13-02-x2y1"],type:"fill",prompt:"【2.1 金融资产分类判断（单选题）】甲公司将购入的债券分类为以公允价值计量且其变动计入其他综合收益的金融资产。下列各项中，不属于甲公司该债券业务模式特征的是（ ）。",options:[{id:"A",text:"以收取合同现金流量为目标"},{id:"B",text:"以出售债券为目标"},{id:"C",text:"兼顾收取合同现金流量和出售目标"},{id:"D",text:"以最大幅度出售债券获取利润为目标"}],answer:["D"],explanation:`金融资产的分类取决于业务模式和SPPI测试：

| 分类 | 业务模式 | 特征 |
|------|----------|------|
| AMC（摊余成本） | 收取合同现金流量 | 只收本息，不出售 |
| FVTOCI | 收取+出售 | 既收本息又可能出售 |
| FVTPL | 其他 | 主要目的不是收取本息 |

以公允价值计量且其变动计入其他综合收益（FVTOCI）的业务模式是"兼顾客户合同现金流量和出售"，而非"以最大幅度出售获取利润"。`,difficulty:2,source:"笔记 INTERMEDIATE 改编",tags:["金融工具","金融资产分类判断（单选题）"]},{chapterId:"ch13",sectionId:"s13-01",kpointIds:["kp-ch13-s13-02-x2y1"],type:"fill",prompt:"【2.2 SPPI测试与分类（多选题）】下列各项金融资产中，应当分类为以公允价值计量且变动计入当期损益的有（ ）。",options:[{id:"A",text:"在活跃市场中没有报价、公允价值不能可靠计量的权益工具投资"},{id:"B",text:"债务工具投资，合同约定本息按固定日期支付，且与基础变量挂钩"},{id:"C",text:"权益工具投资，被投资单位当年发生严重亏损"},{id:"D",text:"衍生工具形成的资产"}],answer:["BD"],explanation:`SPPI测试（仅为本金和利息偿付的测试）：
- 通过SPPI测试 → FVTOCI或AMC
- 未通过SPPI测试 → FVTPL

| 选项 | 分析 | 分类 |
|------|------|------|
| A | 无活跃报价且公允价值不能可靠计量，应按成本计量，不属于FVTPL | 否 |
| B | 与基础变量挂钩（如股票指数），现金流不"纯粹"，未通过SPPI测试 | 是 |
| C | 投资本身不改变合同现金流特征，仍可能通过SPPI测试 | 否 |
| D | 衍生工具价值随基础变量变动，未通过SPPI测试 | 是 |`,difficulty:2,source:"笔记 INTERMEDIATE 改编",tags:["金融工具","SPPI测试与分类（多选题）"]},{chapterId:"ch13",sectionId:"s13-01",kpointIds:["kp-ch13-s13-02-x2y1"],type:"fill",prompt:"【2.3 金融负债与权益工具区分（计算题）】A公司2×21年1月1日按面值发行可转换公司债券100,000万元，期限5年，票面利率3%，每年年末付息，到期一次还本。发行时市场利率为6%。债券可转换为A公司普通股，转股价格为10元/股。假设当日全部被转换为普通股，计算A公司应确认的金融负债和权益工具金额。",options:void 0,answer:["85125.3万元","85125.3","14874.7万元","14874.7"],explanation:`**第一步：计算负债成分的公允价值（未来现金流按市场利率折现）**
\`\`\`
第1-4年利息：100,000 × 3% = 3,000万元，复利现值系数(P/A,6%,4)=3.4651
第5年本息：100,000 + 3,000 = 103,000万元，现值系数(P/F,6%,5)=0.7473

利息现值 = 3,000 × 3.4651 = 10,395.3万元
本金现值 = 100,000 × 0.7473 = 74,730万元
负债成分 = 10,395.3 + 74,730 = 85,125.3万元
\`\`\`

**第二步：计算权益成分**
\`\`\`
权益成分 = 发行价格 - 负债成分公允价值
         = 100,000 - 85,125.3
         = 14,874.7万元
\`\`\`

**第三步：转股时的会计分录**
\`\`\`
借：应付债券——可转换公司债券（面值）     100,000
  贷：应付债券——可转换公司债券（利息调整） 14,874.7
      股本（100,000/10 = 10,000万股，每股面值1元） 10,000
      资本公积——股本溢价                  75,125.3
\`\`\``,difficulty:2,source:"笔记 INTERMEDIATE 改编",tags:["金融工具","金融负债与权益工具区分（计算题）"]},{chapterId:"ch13",sectionId:"s13-01",kpointIds:["kp-ch13-s13-04-x4y3"],type:"fill",prompt:`【2.4 预期信用损失模型（计算题）】B银行2×21年发放了一笔贷款，账面余额10,000万元，年利率5%。2×21年末进行减值评估：
- 第一阶段：信用风险未显著增加，预计12个月违约损失率1%
- 第二阶段：信用风险显著增加，预计存续期违约损失率5%
- 第三阶段：已发生信用减值，预计存续期违约损失率10%，担保物价值3,000万元

要求：计算各阶段应计提的信用减值损失。`,options:void 0,answer:["100万元","100","500万元","500","700万元"],explanation:`**第一阶段：**
\`\`\`
账面余额 = 10,000万元
12个月预期信用损失 = 10,000 × 1% = 100万元
利息收入 = 10,000 × 5% = 500万元（按账面余额计算）
\`\`\`

**第二阶段：**
\`\`\`
账面余额 = 10,000万元（未减值）
存续期预期信用损失 = 10,000 × 5% = 500万元
利息收入 = 10,000 × 5% = 500万元
\`\`\`

**第三阶段：**
\`\`\`
账面余额 = 10,000 - 3,000（担保物）= 7,000万元（摊余成本）
存续期预期信用损失 = 7,000 × 10% = 700万元
利息收入 = 7,000 × 5% = 350万元（按摊余成本计算）
\`\`\``,difficulty:2,source:"笔记 INTERMEDIATE 改编",tags:["金融工具","预期信用损失模型（计算题）"]},{chapterId:"ch13",sectionId:"s13-01",kpointIds:["kp-ch13-s13-02-x2y1"],type:"fill",prompt:"【2.5 金融资产重分类（多选题）】甲公司2×21年1月1日将一项债权投资（分类为以摊余成本计量的金融资产）重分类为以公允价值计量且其变动计入当期损益的金融资产，重分类日该资产的账面价值为1,000万元，公允价值为1,050万元。下列关于甲公司会计处理的表述中，正确的有（ ）。",options:[{id:"A",text:"应将公允价值与账面价值的差额50万元计入当期损益"},{id:"B",text:"应将公允价值与账面价值的差额50万元计入其他综合收益"},{id:"C",text:"重分类日应按账面价值作为新的公允价值"},{id:"D",text:"该重分类应采用未来适用法处理"}],answer:[`AD

## 三、分录/计算模板`],explanation:`AMC→FVTPL的重分类处理：
- 以**账面价值**作为新的公允价值
- 差额为零，不影响当期损益或OCI

| 重分类方向 | 会计处理 |
|-----------|----------|
| AMC → FVTPL | 账面价值 = 新公允价值，差额为零 |
| FVTPL → AMC | 公允价值 = 新摊余成本 |
| FVTOCI → FVTPL | 账面价值 = 新公允价值，之前OCI转当期损益 |`,difficulty:2,source:"笔记 INTERMEDIATE 改编",tags:["金融工具","金融资产重分类（多选题）"]},{chapterId:"ch14",sectionId:"s14-01",kpointIds:["kp-ch14-s14-01-x1y1"],type:"fill",prompt:"【2.1 租赁识别（单选题）】下列各项中，不属于租赁三要素的是（ ）。",options:[{id:"A",text:"存在一项已识别资产"},{id:"B",text:"资产供出租人使用"},{id:"C",text:"承租人有权获得在资产使用期间产生的几乎全部经济利益"},{id:"D",text:"承租人有权主导资产的使用方式和使用目的"}],answer:["B"],explanation:`租赁识别的三要素：
1. 存在已识别资产（明确指定或隐性指定）
2. 承租人有权获得在使用期间内因使用资产所产生的**几乎全部经济利益**
3. 承租人有权**主导资产的适用方式和使用目的**

选项B说的是资产供出租人使用，这是错误的。租赁是出租人将资产使用权让与承租人，因此资产应该是供**承租人**使用。`,difficulty:2,source:"笔记 INTERMEDIATE 改编",tags:["租赁","租赁识别（单选题）"]},{chapterId:"ch14",sectionId:"s14-01",kpointIds:["kp-ch14-s14-02-x2y1"],type:"fill",prompt:`【2.2 租赁期确定（计算题）】甲公司于2×21年1月1日租入一台设备，租赁合同规定：
- 不可撤销期间：3年（2×21.1.1-2×23.12.31）
- 选择权1：续租2年（每年租金100万元），管理层合理确定会行使
- 选择权2：终止权1年（每年租金80万元），管理层合理确定不会行使

要求：计算该租赁的租赁期。`,options:void 0,answer:["4"],explanation:"**租赁期计算公式：**\n```\n租赁期 = 不可撤销期间 + 合理确定会行使的续租选择权期间 - 合理确定不会行使的终止选择权期间\n```\n\n**本题计算：**\n```\n租赁期 = 3年 + 2年 - 1年 = 4年\n```\n\n**要点提示：**\n- 续租选择权：管理层合理确定会行使 → 纳入租赁期\n- 终止选择权：管理层合理确定不会行使 → 不纳入租赁期",difficulty:2,source:"笔记 INTERMEDIATE 改编",tags:["租赁","租赁期确定（计算题）"]},{chapterId:"ch14",sectionId:"s14-01",kpointIds:["kp-ch14-s14-02-x2y2"],type:"fill",prompt:`【2.3 承租人初始计量（计算题）】乙公司2×21年1月1日租入一台设备，租赁合同主要条款如下：
- 租赁期：5年，每年年末支付租金200万元
- 租赁内含利率：6%
- 购买选择权：2×25.12.31可按500万元购买，管理层无法确定是否行使
- 初始直接费用：10万元
- 预计拆卸费用现值：30万元
- 出租人提供租赁激励：20万元

要求：
（1）计算租赁负债的初始确认金额
（2）计算使用权资产的初始确认金额
（3）编制相关会计分录`,options:void 0,answer:["842.48万元","842.48","862.48万元","862.48"],explanation:`**第一步：计算租赁负债**
\`\`\`
租赁付款额 = 200 × 5 = 1,000万元
租赁付款额现值 = 200 × (P/A,6%,5) = 200 × 4.2124 = 842.48万元
租赁负债 = 842.48万元
\`\`\`

**第二步：计算使用权资产**
\`\`\`
使用权资产 = 租赁负债 + 预付租金 + 初始直接费用 + 拆卸费用现值 - 租赁激励
           = 842.48 + 0 + 10 + 30 - 20
           = 862.48万元
\`\`\`

**第三步：会计分录**
\`\`\`
借：使用权资产                    862.48
    租赁负债——未确认融资费用      157.52
  贷：租赁负债——租赁付款额        1,000
      银行存款（初始直接费用）     10
      预计负债（拆卸费用）          30
      银行存款（租赁激励）         20
\`\`\``,difficulty:2,source:"笔记 INTERMEDIATE 改编",tags:["租赁","承租人初始计量（计算题）"]},{chapterId:"ch14",sectionId:"s14-01",kpointIds:["kp-ch14-s14-02-x2y3"],type:"fill",prompt:`【2.4 承租人后续计量（计算题）】承接上题，假设乙公司采用成本模式对使用权资产进行后续计量，使用权资产按直线法在5年内折旧。计算2×21年度：
（1）使用权资产折旧金额
（2）租赁负债利息费用
（3）编制相关会计分录（假设租金于年末支付）`,options:void 0,answer:["172.50万元","172.50","50.55万元","50.55"],explanation:`**（1）使用权资产折旧**
\`\`\`
使用权资产折旧 = 862.48 ÷ 5 = 172.50万元
\`\`\`

**（2）租赁负债利息（第一年末）**
\`\`\`
期初租赁负债 = 842.48万元
利息 = 842.48 × 6% = 50.55万元
本金 = 200 - 50.55 = 149.45万元
期末租赁负债 = 842.48 - 149.45 = 693.03万元
\`\`\`

**（3）会计分录**
\`\`\`
借：使用权资产累计折旧             172.50
  贷：使用权资产累计折旧

借：租赁负债——利息               50.55
  贷：财务费用                     50.55

借：租赁负债——租赁付款额         200.00
  贷：银行存款                    200.00
\`\`\``,difficulty:2,source:"笔记 INTERMEDIATE 改编",tags:["租赁","承租人后续计量（计算题）"]},{chapterId:"ch14",sectionId:"s14-01",kpointIds:["kp-ch14-s14-03-x3y1"],type:"fill",prompt:"【2.5 出租人融资租赁判断（多选题）】下列各项中，应当认定为融资租赁的有（ ）。",options:[{id:"A",text:"租赁期满，资产的所有权转移给承租人"},{id:"B",text:"承租人有购买选择权，且购买价格低于行使日资产的公允价值"},{id:"C",text:"租赁期占资产使用寿命的80%"},{id:"D",text:"租赁收款额的现值几乎相当于资产的公允价值（95%）"}],answer:[`ACD

## 三、分录/计算模板`],explanation:`融资租赁的判断标准（满足任一即可）：
1. 租赁期满所有权转移给承租人
2. 承租人有购买选择权且合理确定行使
3. 租赁期占资产使用寿命的大部分（≥75%）
4. 租赁收款额现值几乎相当于资产公允价值（≥90%）
5. 资产性质特殊，只有承租人才能使用

| 选项 | 分析 | 判断 |
|------|------|------|
| A | 所有权转移 | 融资租赁 |
| B | 购买价格低于公允价值→购买选择权+合理确定行使 | 融资租赁 |
| C | 80% ≥ 75% | 融资租赁 |
| D | 95% ≥ 90% | 融资租赁 |`,difficulty:2,source:"笔记 INTERMEDIATE 改编",tags:["租赁","出租人融资租赁判断（多选题）"]},{chapterId:"ch15",sectionId:"s15-01",kpointIds:["kp-ch15-s15-01-x1y1"],type:"fill",prompt:"【2.1 持有待售分类条件】1甲公司2x23年6月董事会决议出售子公司B>1预计1年内完成>1下列哪些情况下可划分为持有待售?",options:[{id:"A",text:"1已签署购买协议"},{id:"B",text:"1仅管理层有意图但未获购买承诺"},{id:"C",text:"1当前状况下可立即出售"},{id:"D",text:"1预计1年内完成"}],answer:["ACD"],explanation:'1必须同时满足: 1可立即出售(C)+出售极可能发生(A和D)>1 B不满足"极可能发生"条件',difficulty:2,source:"笔记 INTERMEDIATE 改编",tags:["持有待售的非流动资产、处置组和终止经营","持有待售分类条件"]},{chapterId:"ch15",sectionId:"s15-01",kpointIds:["kp-ch15-s15-01-x1y2"],type:"fill",prompt:"【2.2 持有待售计量】甲公司设备账面500万元>1公允价值减出售费用净额450万元>1应确认减值多少?",options:void 0,answer:["见解析"],explanation:"1净额450<账面500>1减值5050万元",difficulty:2,source:"笔记 INTERMEDIATE 改编",tags:["持有待售的非流动资产、处置组和终止经营","持有待售计量"]},{chapterId:"ch15",sectionId:"s15-01",kpointIds:["kp-ch15-s15-01-x1y1"],type:"fill",prompt:"【2.3 1减值转回】1持有待售资产减值后公允净额回升至480万元>1可转回多少?",options:void 0,answer:["见解析"],explanation:"1在原确认减值50万元范围内转回>1可转回30万元(480-450)=1不能超过原减值50万",difficulty:2,source:"笔记 INTERMEDIATE 改编",tags:["持有待售的非流动资产、处置组和终止经营","1减值转回"]},{chapterId:"ch15",sectionId:"s15-01",kpointIds:["kp-ch15-s15-01-x1y3"],type:"fill",prompt:"【2.4 终止经营列报】甲公司处置其主要业务分部>1相关损益在利润表如何列报?",options:void 0,answer:["见解析"],explanation:"1在利润表中单独列示终止经营损益>1与持续经营损益分别列报>1比较信息重述",difficulty:2,source:"笔记 INTERMEDIATE 改编",tags:["持有待售的非流动资产、处置组和终止经营","终止经营列报"]},{chapterId:"ch16",sectionId:"s16-01",kpointIds:["kp-ch16-s16-02-x2y2"],type:"fill",prompt:"【2.1 优先股是负债还是权益?】甲公司发行优先股,每年必须支付固定股息8问该优先股属于金融负债还是权益工具?",options:void 0,answer:["金融负债"],explanation:"必须定期支付固定股息→金融负债;可自主决定是否分配→权益工具>本题必须支付固定股息→金融负债",difficulty:2,source:"笔记 INTERMEDIATE 改编",tags:["所有者权益","优先股是负债还是权益?"]},{chapterId:"ch16",sectionId:"s16-01",kpointIds:["kp-ch16-s16-02-x2y2"],type:"multiple",prompt:"【2.2 其他综合收益分类】下列属于以后不能重分类进损益的其他综合收益有（ )。",options:[{id:"A",text:"FVTOCI债务工具公允价值变动"}],answer:["A","C"],explanation:"A能重分类; B不能重分类( C能重分类( D不能重分类(**答案:** AC",difficulty:2,source:"笔记 INTERMEDIATE 改编",tags:["所有者权益","其他综合收益分类"]},{chapterId:"ch16",sectionId:"s16-01",kpointIds:["kp-ch16-s16-05-x5y1"],type:"fill",prompt:"【2.3 盈余公积】甲公司注册资本1,000万元>当年净利润500万元>提取法定盈余公积多少?",options:void 0,answer:["50万元","50"],explanation:"500×10%=50万元>累计达到500万元(注册资本的50%)可不再提取",difficulty:2,source:"笔记 INTERMEDIATE 改编",tags:["所有者权益","盈余公积"]},{chapterId:"ch16",sectionId:"s16-01",kpointIds:["kp-ch16-s16-03-x3y2"],type:"fill",prompt:"【2.4 1资本公积转增】甲公司资本公积(200万元转增资本>转增后留存盈余公积不得少于注册资本的25%?",options:void 0,answer:["250万元","250","","1","10"],explanation:"125% > 1,000×25% = 250万元>200-250 = -50万元>转增后不少于250万元>**答案:** 不少于250万元",difficulty:2,source:"笔记 INTERMEDIATE 改编",tags:["所有者权益","1资本公积转增"]},{chapterId:"ch17",sectionId:"s17-01",kpointIds:["kp-ch17-s17-01-x1y1"],type:"fill",prompt:"【2.1 某一时段内履行的履约义务】甲公司为乙公司提供一项定制软件开发服务，合同总价500万元，工期2年。甲公司按照实际发生的成本占预计总成本的比例确定履约进度。第1年发生成本180万元，预计总成本400万元。求第1年应确认的收入。",options:void 0,answer:["180","225"],explanation:`- 履约进度 = 180 / 400 = 45%
- 应确认收入 = 500 × 45% = 225万元
- 应结转成本 = 400 × 45% = 180万元`,difficulty:2,source:"笔记 INTERMEDIATE 改编",tags:["收入费用和利润","某一时段内履行的履约义务"]},{chapterId:"ch17",sectionId:"s17-01",kpointIds:["kp-ch17-s17-01-x1y1"],type:"fill",prompt:"【2.2 可变对价——期望值法与最可能发生金额法】甲公司销售产品，合同约定：如果产品在交付后6个月内未出现质量问题，甲公司可额外获得50万元奖金。根据历史经验，甲公司估计有70%的概率获得奖金，30%的概率不能获得。求交易价格。",options:void 0,answer:["50万元","50"],explanation:`- 采用最可能发生金额法（只有两种结果）
- 最可能发生金额 = 50万元（因为70% > 30%）
- 交易价格 = 基础对价 + 50万元
- 注意：确认的累计收入金额极可能不会发生重大转回`,difficulty:2,source:"笔记 INTERMEDIATE 改编",tags:["收入费用和利润","可变对价——期望值法与最可能发生金额法"]},{chapterId:"ch17",sectionId:"s17-01",kpointIds:["kp-ch17-s17-01-x1y1"],type:"fill",prompt:"【2.3 售后回购】甲公司向乙公司销售一批商品，售价300万元，成本200万元。合同约定1年后甲公司以330万元的价格回购该批商品。判断是否确认收入并作出会计处理。",options:void 0,answer:["300","12","2.5","30","330"],explanation:`- 回购价格 330 > 原售价 300，差额30万元视为融资利息
- 实质：甲公司以商品为担保进行融资，不确认收入`,difficulty:2,source:"笔记 INTERMEDIATE 改编",tags:["收入费用和利润","售后回购"]},{chapterId:"ch17",sectionId:"s17-01",kpointIds:["kp-ch17-s17-01-x1y4"],type:"fill",prompt:"【2.4 主要责任人 vs 代理人】甲公司在其电商平台上销售商品，商品由供应商直接发货给消费者。甲公司按售价的15%收取佣金。商品售价100万元，甲公司收取15万元佣金。判断甲公司是主要责任人还是代理人。",options:void 0,answer:["15万元","15","100万元","100"],explanation:`- 判断指标：甲公司在转让商品前是否控制该商品
- 商品由供应商直接发货，甲公司不承担存货风险
- 甲公司无权决定商品价格（仅为佣金模式）
- 结论：甲公司为代理人`,difficulty:2,source:"笔记 INTERMEDIATE 改编",tags:["收入费用和利润","主要责任人 vs 代理人"]},{chapterId:"ch17",sectionId:"s17-01",kpointIds:["kp-ch17-s17-01-x1y1"],type:"fill",prompt:"【2.5 附销售退回条件的销售】甲公司销售商品1000件，每件售价500元，成本300元。根据经验，预计退回率为5%。求销售时应确认的收入和预计负债。",options:void 0,answer:["500000","475000","25000","285000","15000"],explanation:`- 确认收入 = 1000 × (1 - 5%) × 500 = 475,000元
- 预计退回部分不确认收入，确认为预计负债
- 预计负债 = 1000 × 5% × 500 = 25,000元
- 同时确认预计退回商品的成本恢复`,difficulty:2,source:"笔记 INTERMEDIATE 改编",tags:["收入费用和利润","附销售退回条件的销售"]},{chapterId:"ch18",sectionId:"s18-01",kpointIds:["kp-ch18-s18-01-x1y4"],type:"multiple",prompt:"【2.1 是否属于政府补助?】下列属于政府补助的有( )。",options:[{id:"A",text:"增值税出口退税  B. 研发费用加计扣除  C. 财政拨款购置设备  D. 政府作为投资者投入"}],answer:["C"],explanation:"A不属于(退还事先缴纳税); B不属于(直接减征不属于)> C属于(无偿取得货币性资产)> D不属于(政府作为投资者投入=有对价)",difficulty:2,source:"笔记 INTERMEDIATE 改编",tags:["政府补助","是否属于政府补助?"]},{chapterId:"ch18",sectionId:"s18-01",kpointIds:["kp-ch18-s18-02-x2y1"],type:"fill",prompt:"【2.2 总额法vs净额法】甲公司收到政府补助300万元购置设备(成本1,000万元)> 5年折旧> 1总额法每年确认多少收益?",options:void 0,answer:["见解析"],explanation:`1总额法: 收到300万元→ 1递延收益> 1每年摊销300/5=60万元→ 其他收益
 净额法: 收到300万元冲减设备成本→ 1设备新成本700万元> 1每年折旧140万元(比总额法少60万元)`,difficulty:2,source:"笔记 INTERMEDIATE 改编",tags:["政府补助","总额法vs净额法"]},{chapterId:"ch18",sectionId:"s18-01",kpointIds:["kp-ch18-s18-02-x2y3"],type:"fill",prompt:"【2.3 与收益相关补助】甲公司收到稳岗补贴100万元> 1补偿已发生费用> 1如何处理?",options:void 0,answer:["见解析"],explanation:"1补偿已发生费用→ 1直接计入其他收益(100万元)",difficulty:2,source:"笔记 INTERMEDIATE 改编",tags:["政府补助","与收益相关补助"]},{chapterId:"ch18",sectionId:"s18-01",kpointIds:["kp-ch18-s18-02-x2y1"],type:"fill",prompt:"【2.4 1退回处理】甲公司退回政府补助50万元> 1原递延收益余额3万元> 1如何处理?",options:void 0,answer:["见解析"],explanation:`1冲减递延收益3万元> 1超出部分(0万元)计入当期损益
1`,difficulty:2,source:"笔记 INTERMEDIATE 改编",tags:["政府补助","1退回处理"]},{chapterId:"ch19",sectionId:"s19-01",kpointIds:["kp-ch19-s19-02-x2y1"],type:"fill",prompt:"【2.1 资产计税基础的计算】甲公司2026年12月31日应收账款账面余额200万元，已计提坏账准备20万元。税法规定坏账准备在实际发生时方可扣除。求应收账款的计税基础及暂时性差异。",options:void 0,answer:["200万元","200","20万元","20","25"],explanation:`- 账面价值 = 200 - 20 = 180万元
- 计税基础 = 200万元（税法不认可坏账准备的扣除）
- 可抵扣暂时性差异 = 200 - 180 = 20万元`,difficulty:2,source:"笔记 INTERMEDIATE 改编",tags:["所得税","资产计税基础的计算"]},{chapterId:"ch19",sectionId:"s19-01",kpointIds:["kp-ch19-s19-02-x2y2"],type:"fill",prompt:"【2.2 负债计税基础的计算】甲公司2026年因产品质量保证计提预计负债50万元，税法规定在实际发生保修费用时方可扣除。求预计负债的计税基础及暂时性差异。",options:void 0,answer:["0万元","0","50万元","50","25"],explanation:`- 账面价值 = 50万元
- 计税基础 = 50 - 50 = 0万元（未来可全额扣除）
- 可抵扣暂时性差异 = 50 - 0 = 50万元`,difficulty:2,source:"笔记 INTERMEDIATE 改编",tags:["所得税","负债计税基础的计算"]},{chapterId:"ch19",sectionId:"s19-01",kpointIds:["kp-ch19-s19-05-x5y2"],type:"fill",prompt:"【2.3 应纳税暂时性差异与递延所得税负债】甲公司一项交易性金融资产成本100万元，年末公允价值130万元。税法以成本计量。求暂时性差异和递延所得税。",options:void 0,answer:["7.5"],explanation:`- 账面价值 = 130万元（公允价值）
- 计税基础 = 100万元（税法按成本）
- 应纳税暂时性差异 = 130 - 100 = 30万元
- 递延所得税负债 = 30 × 25% = 7.5万元`,difficulty:2,source:"笔记 INTERMEDIATE 改编",tags:["所得税","应纳税暂时性差异与递延所得税负债"]},{chapterId:"ch19",sectionId:"s19-01",kpointIds:["kp-ch19-s19-05-x5y1"],type:"fill",prompt:"【2.4 所得税费用的完整计算】甲公司2026年利润总额500万元，当期所得税180万元。年初递延所得税资产15万元，递延所得税负债10万元。年末新增可抵扣暂时性差异40万元，新增应纳税暂时性差异20万元（税率25%）。计算所得税费用。",options:void 0,answer:["180","10","5","500","175"],explanation:`- 递延所得税资产期末 = 15 + 40 × 25% = 25万元
- 递延所得税负债期末 = 10 + 20 × 25% = 15万元
- 递延所得税费用 = (15 - 10) - (25 - 15) = 5 - 10 = -5万元
  即递延所得税收益5万元
- 所得税费用 = 当期所得税 + 递延所得税费用 = 180 - 5 = 175万元`,difficulty:2,source:"笔记 INTERMEDIATE 改编",tags:["所得税","所得税费用的完整计算"]},{chapterId:"ch19",sectionId:"s19-01",kpointIds:["kp-ch19-s19-05-x5y2"],type:"fill",prompt:"【2.5 不确认递延所得税的特殊情形】甲公司发生研发支出200万元（符合加计扣除条件，税法允许按175%扣除）。求是否确认递延所得税资产。",options:void 0,answer:["75万元","75"],explanation:`- 加计扣除部分（75万元）不是暂时性差异，而是永久性差异
- 永久性差异不产生递延所得税`,difficulty:2,source:"笔记 INTERMEDIATE 改编",tags:["所得税","不确认递延所得税的特殊情形"]},{chapterId:"ch20",sectionId:"s20-01",kpointIds:["kp-ch20-s20-01-x1y1"],type:"fill",prompt:"【2.1 25%测试】甲公司以设备(公允500万元)换入材料>1收到补价100万元>1是否属于非货币性资产交换?",options:void 0,answer:["属于"],explanation:"补价100万元÷换出资产公允500万元=20%≤25%→属于非货币性资产交换",difficulty:2,source:"笔记 INTERMEDIATE 改编",tags:["非货币性资产交换","25%测试"]},{chapterId:"ch20",sectionId:"s20-01",kpointIds:["kp-ch20-s20-02-x2y2"],type:"fill",prompt:"【2.2 商业实质判断】甲公司以设备换入办公楼>1两资产未来现金流风险、时间分布和金额显著不同>1是否具有商业实质?",options:void 0,answer:["具有商业实质+公允可靠计量→公允价值计量"],explanation:"未来现金流显著不同→具有商业实质>1换入资产公允能可靠计量→采用公允价值计量",difficulty:2,source:"笔记 INTERMEDIATE 改编",tags:["非货币性资产交换","商业实质判断"]},{chapterId:"ch20",sectionId:"s20-01",kpointIds:["kp-ch20-s20-03-x3y1"],type:"fill",prompt:"【2.3 1公允价值计量】甲公司以设备换入办公楼>1设备账面400万元(原价600-1折旧200)>1公允500万元>1办公楼公允500万元>1确认交换损益?",options:void 0,answer:["见解析"],explanation:"交换损益=公允500-账面400=100万元(资产处置损益)",difficulty:2,source:"笔记 INTERMEDIATE 改编",tags:["非货币性资产交换","1公允价值计量"]},{chapterId:"ch20",sectionId:"s20-01",kpointIds:["kp-ch20-s20-03-x3y2"],type:"fill",prompt:"【2.4 1账面价值计量】甲公司以设备换入办公楼>1不具有商业实质>1设备账面400万元>1换入资产入账价值?",options:void 0,answer:["见解析"],explanation:"换入资产成本=账面400+补价0+税费0=400万元>1不确认交换损益",difficulty:2,source:"笔记 INTERMEDIATE 改编",tags:["非货币性资产交换","1账面价值计量"]},{chapterId:"ch21",sectionId:"s21-01",kpointIds:["kp-ch21-s21-02-x2y5"],type:"fill",prompt:"【2.1 债务重组方式判断】单选题——下列各项中，不属于债务重组方式的是（ ）",options:[{id:"A",text:"债务人以低于债务账面价值的现金清偿债务"},{id:"B",text:"债务人以公允价值低于债务账面价值的存货清偿债务"},{id:"C",text:"债务人将债务转为权益工具"},{id:"D",text:"债务人发行可转换公司债券"}],answer:[`D

---`],explanation:`债务重组的核心是"不改变交易对手方"，重组方式包括：
- 以资产清偿债务（现金/非现金资产）
- 将债务转为权益工具
- 修改其他条款
- 上述方式组合

选项D"发行可转换公司债券"属于正常融资行为，并非与原债权人重新达成协议，不属于债务重组。`,difficulty:2,source:"笔记 INTERMEDIATE 改编",tags:["债务重组","债务重组方式判断"]},{chapterId:"ch21",sectionId:"s21-01",kpointIds:["kp-ch21-s21-02-x2y1"],type:"fill",prompt:`【2.2 以现金清偿债务的会计处理】计算分析题——甲公司2024年1月1日应收乙公司账款余额为500万元，因乙公司财务困难无法偿还，双方达成债务重组协议：乙公司以银行存款400万元清偿该债务。不考虑相关税费。

要求：分别编制甲公司（债权人）和乙公司（债务人）的会计分录。`,options:void 0,answer:[`详见上述分录

---`],explanation:`**债务人（乙公司）会计处理：**
- 债务账面价值：500万元
- 实际支付金额：400万元
- 差额100万元 → 计入"投资收益"（债务重组利得）

\`\`\`
借：应付账款                    5,000,000
  贷：银行存款                  4,000,000
      投资收益——债务重组利得   1,000,000
\`\`\`

**债权人（甲公司）会计处理：**
- 债权账面价值：500万元
- 收到金额：400万元
- 差额100万元 → 计入"投资收益"（债务重组损失）

\`\`\`
借：银行存款                    4,000,000
    投资收益——债务重组损失     1,000,000
  贷：应收账款                  5,000,000
\`\`\``,difficulty:2,source:"笔记 INTERMEDIATE 改编",tags:["债务重组","以现金清偿债务的会计处理"]},{chapterId:"ch21",sectionId:"s21-01",kpointIds:["kp-ch21-s21-02-x2y2"],type:"fill",prompt:"【2.3 以非现金资产清偿债务】多选题——关于债务人以非现金资产清偿债务的会计处理，下列说法正确的有（ ）",options:[{id:"A",text:"债务人应按所清偿债务的账面价值与转让资产账面价值之间的差额确认为债务重组利得"},{id:"B",text:"债务人转让的非现金资产公允价值与其账面价值之间的差额，应确认为资产处置损益"},{id:"C",text:"债权人应按放弃债权的账面价值作为受让资产的初始确认金额"},{id:"D",text:"债权人受让多项非现金资产的，应按各项资产的公允价值比例对放弃债权的公允价值进行分配"}],answer:[`A、B、D

---`],explanation:`根据债务重组准则：
- A正确：差额确认债务重组利得
- B正确：非现金资产视同正常出售处理
- C错误：债权人按放弃债权的**公允价值**入账，而非账面价值
- D正确：多项资产按公允价值比例分配`,difficulty:2,source:"笔记 INTERMEDIATE 改编",tags:["债务重组","以非现金资产清偿债务"]},{chapterId:"ch21",sectionId:"s21-01",kpointIds:["kp-ch21-s21-02-x2y3"],type:"fill",prompt:`【2.4 将债务转为权益工具】计算分析题——甲公司应收乙公司账款800万元，乙公司无力偿还，经协商将债务转为乙公司100万股普通股（面值1元/股）。债务重组日乙公司股票的公允价值为6元/股。假定不考虑相关税费。

要求：编制甲公司和乙公司的会计分录。`,options:void 0,answer:[`详见上述分录

---`],explanation:`**债务人（乙公司）处理：**
- 债务账面价值：800万元
- 发行股份的面值：100万元
- 股本溢价：700万元

\`\`\`
借：应付账款                    8,000,000
  贷：股本                      1,000,000
      资本公积——股本溢价       7,000,000
\`\`\`

**债权人（甲公司）处理：**
- 放弃债权的公允价值：100万股 × 6元 = 600万元
- 差额200万元计入投资收益

\`\`\`
借：长期股权投资                6,000,000
    投资收益                   2,000,000
  贷：应收账款                  8,000,000
\`\`\``,difficulty:2,source:"笔记 INTERMEDIATE 改编",tags:["债务重组","将债务转为权益工具"]},{chapterId:"ch21",sectionId:"s21-01",kpointIds:["kp-ch21-s21-02-x2y4"],type:"fill",prompt:"【2.5 修改债务条款的会计处理】单选题——2024年3月1日，甲公司应收乙公司货款1,000万元，因乙公司资金周转困难，双方达成修改债务条款协议：原债务延期1年，利率降低。重组日修改后的债务公允价值为900万元。甲公司已计提坏账准备50万元。甲公司应确认的投资收益为（ ）万元。",options:[{id:"A",text:"50"},{id:"B",text:"100"},{id:"C",text:"150"},{id:"D",text:"0"}],answer:["1"],explanation:`- 债权账面价值：1,000 - 50 = 950万元
- 修改后债务公允价值：900万元
- 差额：950 - 900 = 50万元
- 债权人应确认的投资收益 = 50万元`,difficulty:2,source:"笔记 INTERMEDIATE 改编",tags:["债务重组","修改债务条款的会计处理"]},{chapterId:"ch22",sectionId:"s22-01",kpointIds:["kp-ch22-s22-01-x1y1"],type:"fill",prompt:"【2.1 记账本位币的确定】单选题——下列各项中，不影响甲公司记账本位币认定的是（ ）",options:[{id:"A",text:"甲公司30%的收入来自向美国客户销售产品，收取美元"},{id:"B",text:"甲公司30%的成本用于向德国供应商采购原材料，支付欧元"},{id:"C",text:"甲公司80%的融资活动通过美元债券进行"},{id:"D",text:"甲公司50%的商品在中国境内销售，收取人民币"}],answer:[`D

---`],explanation:`记账本位币的确定考虑四个因素：
1. 从收取现金角度看，主要影响**销售价格**的货币
2. 从支付现金角度看，主要影响**劳务和材料成本**的货币
3. **融资活动**获得的资金所使用的货币
4. 保留从经营活动中收取款项所使用的货币

选项D：境内销售收取人民币，这是最基本的情况，不影响判断。
选项A、B、C分别涉及境外销售、境外采购、境外融资，都是影响因素。`,difficulty:2,source:"笔记 INTERMEDIATE 改编",tags:["外币折算","记账本位币的确定"]},{chapterId:"ch22",sectionId:"s22-01",kpointIds:["kp-ch22-s22-03-x3y2"],type:"fill",prompt:`【2.2 外币货币性项目的汇兑差额计算】计算分析题——甲公司以人民币为记账本位币，采用当日即期汇率对外币业务进行折算。2024年12月有关业务如下：

（1）12月1日，赊销商品给境外客户，货款1,000,000美元，当日即期汇率1美元=7.1人民币元，12月31日即期汇率1美元=7.2人民币元。
（2）12月1日，从银行借入美元借款5,000,000美元，年利率6%，当日即期汇率1美元=7.1人民币元，12月31日即期汇率1美元=7.2人民币元。

要求：计算甲公司12月份应确认的汇兑差额，并编制相关分录。`,options:void 0,answer:["12","400000元","400000","500000","100000"],explanation:`**第一步：识别货币性项目**
- 应收账款（美元）：货币性资产
- 短期借款（美元）：货币性负债

**第二步：计算汇兑差额**

**应收账款（资产，汇率上升→收益）：**
- 12月1日折算金额：1,000,000 × 7.1 = 7,100,000元
- 12月31日账面金额：1,000,000 × 7.2 = 7,200,000元
- 汇兑差额 = 7,200,000 - 7,100,000 = +100,000元（收益）

**短期借款（负债，汇率上升→损失）：**
- 12月1日折算金额：5,000,000 × 7.1 = 35,500,000元
- 12月31日账面金额：5,000,000 × 7.2 = 36,000,000元
- 汇兑差额 = 36,000,000 - 35,500,000 = +500,000元（损失）

**第三步：编制分录**
\`\`\`
借：应收账款——美元       100,000
  贷：财务费用——汇兑差额   100,000

借：财务费用——汇兑差额   500,000
  贷：短期借款——美元      500,000
\`\`\``,difficulty:2,source:"笔记 INTERMEDIATE 改编",tags:["外币折算","外币货币性项目的汇兑差额计算"]},{chapterId:"ch22",sectionId:"s22-01",kpointIds:["kp-ch22-s22-03-x3y2"],type:"fill",prompt:"【2.3 外币财务报表折算】单选题——下列关于外币财务报表折算的表述中，正确的是（ ）",options:[{id:"A",text:"资产和负债项目按交易发生日的即期汇率折算"},{id:"B",text:'所有者权益项目中，只有"未分配利润"按期末汇率折算'},{id:"C",text:"折算差额在合并利润表中确认"},{id:"D",text:"处置境外经营时，处置境外经营的当期期末已确认的折算差额应转入当期损益"}],answer:[`D

---`],explanation:`- A错误：资产和负债按**资产负债表日**即期汇率折算
- B错误：实收资本按**发生时的**即期汇率；未分配利润是倒算出来的平衡数
- C错误：折算差额计入**其他综合收益**，不在利润表确认
- D正确：处置时转入当期损益`,difficulty:2,source:"笔记 INTERMEDIATE 改编",tags:["外币折算","外币财务报表折算"]},{chapterId:"ch22",sectionId:"s22-01",kpointIds:["kp-ch22-s22-03-x3y2"],type:"fill",prompt:"【2.4 非货币性项目的处理】多选题——下列各项中，期末不需要按照期末即期汇率折算的有（ ）",options:[{id:"A",text:"以历史成本计量的固定资产"},{id:"B",text:"以公允价值计量且其变动计入当期损益的外币货币性金融资产"},{id:"C",text:"以公允价值计量且其变动计入其他综合收益的外币非货币性项目"},{id:"D",text:"存货"}],answer:[`A、C

---`],explanation:`非货币性项目是否需要期末调整，取决于计量属性：
- **历史成本计量**（如固定资产）：不调整，按历史汇率保留
- **公允价值计量**（如交易性金融资产）：按期末汇率调整，公允价值变动+汇兑差额一并计入当期损益

选项A：固定资产按历史成本，不调整
选项B：交易性金融资产按公允价值，调整
选项C：其他权益工具投资等非货币性项目，按公允价值但汇兑差额计入其他综合收益，不调整汇率
选项D：存货按成本计量，不调整`,difficulty:2,source:"笔记 INTERMEDIATE 改编",tags:["外币折算","非货币性项目的处理"]},{chapterId:"ch22",sectionId:"s22-01",kpointIds:["kp-ch22-s22-01-x1y2"],type:"fill",prompt:"【2.5 记账本位币变更】单选题——甲公司的记账本位币为人民币，2024年12月31日变更为美元。下列关于记账本位币变更的会计处理中，正确的是（ ）",options:[{id:"A",text:"采用变更当日的即期汇率将所有项目折算，折算差额计入当期损益"},{id:"B",text:"采用变更当日的即期汇率将所有项目折算，折算差额计入其他综合收益"},{id:"C",text:"采用变更当日的即期汇率将所有项目折算，折算差额计入期初留存收益"},{id:"D",text:"不进行会计处理，仅在附注中披露变更情况"}],answer:["1","2"],explanation:`记账本位币变更属于**会计政策变更**：
- 应当采用**变更当日的即期汇率**将所有项目折算
- 折算差额调整**期初留存收益**（其他综合收益）`,difficulty:2,source:"笔记 INTERMEDIATE 改编",tags:["外币折算","记账本位币变更"]},{chapterId:"ch23",sectionId:"s23-01",kpointIds:["kp-ch23-s23-01-x1y1"],type:"fill",prompt:"【2.1 资产负债表项目的填列】单选题——下列资产负债表项目中，应根据明细账科目余额计算填列的是（ ）",options:[{id:"A",text:"货币资金"},{id:"B",text:"应付账款"},{id:"C",text:"应收账款"},{id:"D",text:"固定资产"}],answer:[`B、C

---`],explanation:`资产负债表的填列方法分类：

| 填列方法 | 举例 |
|----------|------|
| 根据总账科目余额直接填列 | 短期借款、实收资本、应付票据 |
| 根据明细科目余额计算填列 | **应收账款**=应收账款借方+预收账款借方-坏账准备<br>**应付账款**=应付账款贷方+预付账款贷方 |
| 根据总账科目余额计算填列 | 货币资金=库存现金+银行存款+其他货币资金 |
| 根据有关科目余额减去备抵科目后的净额填列 | 固定资产、无形资产、应收账款（净） |
| 综合运用上述方法 | 存货 |

选项A：货币资金——根据总账科目余额计算填列
选项B：应付账款——根据明细科目余额计算填列
选项C：应收账款——根据明细科目余额计算填列（借方+借方-坏账准备）
选项D：固定资产——根据有关科目余额减去备抵科目后的净额填列`,difficulty:2,source:"笔记 INTERMEDIATE 改编",tags:["财务报告","资产负债表项目的填列"]},{chapterId:"ch23",sectionId:"s23-01",kpointIds:["kp-ch23-s23-04-x4y1"],type:"fill",prompt:"【2.2 现金流量分类】多选题——下列各项中，属于经营活动现金流量的有（ ）",options:[{id:"A",text:"销售商品收到现金"},{id:"B",text:"支付给职工的工资"},{id:"C",text:"购建固定资产支付的现金"},{id:"D",text:"分配现金股利支付的现金"},{id:"E",text:"收到税费返还"}],answer:[`A、B、E

---`],explanation:`现金流量三大类：

| 类别 | 内容 |
|------|------|
| 经营活动 | 日常生产经营（销售、购买、支付薪酬、税费） |
| 投资活动 | 长期资产购建、投资收回、利息收入 |
| 筹资活动 | 吸收投资、借款、偿还债务、分配股利 |

选项C：购建固定资产——投资活动
选项D：分配现金股利——筹资活动`,difficulty:2,source:"笔记 INTERMEDIATE 改编",tags:["财务报告","现金流量分类"]},{chapterId:"ch23",sectionId:"s23-01",kpointIds:["kp-ch23-s23-04-x4y3"],type:"fill",prompt:`【2.3 间接法调节】计算分析题——甲公司2024年度净利润为8,000,000元。已知：
（1）计提固定资产折旧2,000,000元
（2）无形资产摊销500,000元
（3）处置固定资产收益300,000元
（4）存货减少1,000,000元
（5）应收账款增加600,000元
（6）应付账款减少200,000元
（7）财务费用800,000元（均为利息费用）

要求：计算甲公司2024年度经营活动现金流量净额。`,options:void 0,answer:["11200000元","11200000"],explanation:`间接法下，将净利润调节为经营活动现金流量：

\`\`\`
净利润                                 8,000,000
加：固定资产折旧                       2,000,000
   无形资产摊销                         500,000
   财务费用（利息）                     800,000
减：处置固定资产收益                   300,000
   存货减少（减：增加）              1,000,000
   应收账款增加（减：减少）           600,000
   应付账款减少（减：增加）           200,000
= 经营活动现金流量净额                11,200,000
\`\`\`

**记忆口诀：**
- 加回：折旧、摊销、投资损失、财务费用
- 减：收益
- 存货减少→加回；存货增加→减去
- 应收增加→减去；应付减少→减去`,difficulty:2,source:"笔记 INTERMEDIATE 改编",tags:["财务报告","间接法调节"]},{chapterId:"ch23",sectionId:"s23-01",kpointIds:["kp-ch23-s23-06-x6y2"],type:"fill",prompt:"【2.4 关联方认定】单选题——下列各项中，不属于甲公司关联方的是（ ）",options:[{id:"A",text:"甲公司的母公司"},{id:"B",text:"甲公司控股50%的子公司"},{id:"C",text:"甲公司的合营企业"},{id:"D",text:"甲公司财务总监的妻子"}],answer:[`D

---`],explanation:`关联方主要包括：
1. 该企业的母公司
2. 该企业的子公司
3. 与该企业受同一母公司控制的**其他企业**
4. 对该企业实施共同控制的投资方
5. 对该企业施加重大影响的投资方
6. 该企业的合营企业
7. 该企业的联营企业
8. 该企业的**主要投资者个人**及与其关系密切的家庭成员
9. 该企业的**关键管理人员**（包括董事、总经理等）及与其关系密切的家庭成员
10. 该企业的**关键管理人员或主要投资者个人**控制的或共同控制的其他企业

选项D：财务总监是关键管理人员，其妻子是关系密切的家庭成员，但妻子本人不是关联方`,difficulty:2,source:"笔记 INTERMEDIATE 改编",tags:["财务报告","关联方认定"]},{chapterId:"ch23",sectionId:"s23-01",kpointIds:["kp-ch23-s23-06-x6y1"],type:"fill",prompt:"【2.5 分部报告的重要性测试】单选题——甲公司有两个分部：A分部收入3,000万元，利润300万元，资产1,500万元；B分部收入800万元，利润50万元，资产400万元。甲公司分部总数为5个，其他分部收入合计2,000万元。下列关于分部报告的判断中，正确的是（ ）",options:[{id:"A",text:"A分部应作为报告分部，B分部不应作为报告分部"},{id:"B",text:"两个分部均应作为报告分部"},{id:"C",text:"A分部应作为报告分部，B分部需要看其他条件才能确定"},{id:"D",text:"两个分部均不应作为报告分部"}],answer:[`B

## 三、分录/计算模板

### 模板：间接法调节项目汇总

\`\`\`
经营活动现金流量净额 `],explanation:`报告分部的确定条件（满足其一即可）：

| 测试 | 标准 |
|------|------|
| 收入占比 | 收入占所有分部收入合计的**10%以上** |
| 利润占比 | 利润占所有盈利分部合计的**10%以上**，或亏损分部合计的**10%以上** |
| 资产占比 | 资产占所有分部资产合计的**10%以上** |

**计算：**
- 总收入 = 3,000 + 800 + 2,000 = 5,800万元
- 总资产 = 1,500 + 400 = 1,900万元（假设其他分部资产0或已知）

A分部：
- 收入占比：3,000/5,800 = 51.7% > 10% ✓
- 利润占比：300/350（盈利分部利润）= 85.7% > 10% ✓
- 资产占比：1,500/1,900 = 78.9% > 10% ✓
→ 属于报告分部

B分部：
- 收入占比：800/5,800 = 13.8% > 10% ✓
- 资产占比：400/1,900 = 21.1% > 10% ✓
→ 属于报告分部`,difficulty:2,source:"笔记 INTERMEDIATE 改编",tags:["财务报告","分部报告的重要性测试"]},{chapterId:"ch24",sectionId:"s24-01",kpointIds:["kp-ch24-s24-01-x1y1"],type:"fill",prompt:"【2.1 会计政策与会计估计的区分】单选题——下列各项中，属于会计政策变更的是（ ）",options:[{id:"A",text:"固定资产折旧方法由年限平均法改为双倍余额递减法"},{id:"B",text:"存货发出计价方法由先进先出法改为月末一次加权平均法"},{id:"C",text:"坏账准备计提比例由3%改为5%"},{id:"D",text:"投资性房地产后续计量由成本模式改为公允价值模式"}],answer:[`B、D

---`],explanation:`判断原则：
- **会计政策**：涉及会计确认、计量基础或列报项目的**选择**
- **会计估计**：对不确定事项的**判断或估计**

| 选项 | 事项 | 分类 | 理由 |
|------|------|------|------|
| A | 折旧方法变更 | **会计估计变更** | 折旧方法是对资产使用寿命的估计方式 |
| B | 存货计价方法变更 | **会计政策变更** | 计价方法是会计确认/计量的基础选择 |
| C | 坏账计提比例变更 | **会计估计变更** | 比例是对应收款项可收回性的估计 |
| D | 投资性房地产计量模式变更 | **会计政策变更** | 计量模式是会计确认/计量的基础选择 |`,difficulty:2,source:"笔记 INTERMEDIATE 改编",tags:["会计政策会计估计及其变更和差错更正","会计政策与会计估计的区分"]},{chapterId:"ch24",sectionId:"s24-01",kpointIds:["kp-ch24-s24-04-x4y1"],type:"fill",prompt:`【2.2 会计政策变更的追溯调整法】计算分析题——甲公司2024年1月1日起，将发出存货的计价方法由先进先出法（FIFO）改为月末一次加权平均法。假设：
- 变更日存货余额：1,000万元（按FIFO）
- 按加权平均法计算的存货余额：920万元
- 所得税税率25%，按10%提取盈余公积

要求：编制甲公司的会计政策变更处理分录。`,options:void 0,answer:["8","72","80","20"],explanation:`**步骤1：计算累积影响数**
- 累积影响数 = 新政策计算的金额 - 原政策计算的金额
- 累积影响数 = 920 - 1,000 = -80万元（减少利润80万元）

**步骤2：编制调整分录**

\`\`\`
借：利润分配——未分配利润    80
    递延所得税资产            20
  贷：存货                    80
      盈余公积                 8
      利润分配——未分配利润（其他转入） 12
\`\`\`

等等，这里需要理清逻辑：

**正确分录：**
\`\`\`
借：存货                      80（增加）
    递延所得税资产            20（25%×80）
  贷：利润分配——未分配利润  100（80÷75%）
\`\`\`

但这是假设存货增加了80万。如果题目说按加权平均法计算的存货余额为920万（原1000万），则存货减少了80万：

**如果存货减少（原值1000→920）：**
\`\`\`
借：利润分配——未分配利润    80
    递延所得税资产            20
  贷：存货                    80

借：盈余公积                   8
    利润分配——未分配利润    72
  贷：利润分配——未分配利润（调整） 80
\`\`\``,difficulty:2,source:"笔记 INTERMEDIATE 改编",tags:["会计政策会计估计及其变更和差错更正","会计政策变更的追溯调整法"]},{chapterId:"ch24",sectionId:"s24-01",kpointIds:["kp-ch24-s24-04-x4y2"],type:"fill",prompt:"【2.3 会计估计变更的未来适用法】单选题——2024年1月1日，甲公司将一项管理用固定资产的折旧年限由10年改为8年。该固定资产原值500万元，预计净残值为0，原折旧年限10年，已使用3年。假设按年限平均法计提折旧，变更当日，甲公司应（ ）",options:[{id:"A",text:"将剩余折旧年限调整为5年，当年多提折旧100万元"},{id:"B",text:"将剩余折旧年限调整为5年，当年按新折旧额计提折旧"},{id:"C",text:"将剩余折旧年限调整为7年，当年多提折旧50万元"},{id:"D",text:"将剩余折旧年限调整为7年，当年按新折旧额计提折旧"}],answer:["5"],explanation:`**变更前：**
- 年折旧额 = 500/10 = 50万元
- 已提折旧 = 50×3 = 150万元
- 账面价值 = 500 - 150 = 350万元

**变更后：**
- 尚可使用年限 = 8 - 3 = 5年
- 年折旧额 = 350/5 = 70万元

**当年影响：**
- 原折旧额 = 50万元
- 新折旧额 = 70万元
- 多提折旧 = 20万元`,difficulty:2,source:"笔记 INTERMEDIATE 改编",tags:["会计政策会计估计及其变更和差错更正","会计估计变更的未来适用法"]},{chapterId:"ch24",sectionId:"s24-01",kpointIds:["kp-ch24-s24-05-x5y2"],type:"fill",prompt:`【2.4 前期重大差错的追溯重述】计算分析题——甲公司在2024年发现2023年漏记了一项固定资产的折旧300万元（属于重要差错），适用所得税税率25%，公司按10%提取盈余公积。2023年该固定资产未对外出售。

要求：编制差错更正分录。`,options:void 0,answer:[`详见上述分录

---`],explanation:`**步骤1：补提折旧，影响所得税**
- 补提折旧300万元 → 减少2023年利润300万元
- 少计所得税 = 300×25% = 75万元
- 净利润影响 = 300 - 75 = 225万元

**步骤2：编制更正分录**
\`\`\`
借：以前年度损益调整         300
  贷：累计折旧               300

借：应交税费——应交所得税    75
  贷：以前年度损益调整        75

借：盈余公积                  22.5
    利润分配——未分配利润   202.5
  贷：以前年度损益调整       225
\`\`\``,difficulty:2,source:"笔记 INTERMEDIATE 改编",tags:["会计政策会计估计及其变更和差错更正","前期重大差错的追溯重述"]},{chapterId:"ch24",sectionId:"s24-01",kpointIds:["kp-ch24-s24-04-x4y1"],type:"fill",prompt:"【2.5 不属于会计政策变更的情形】多选题——下列各项中，不属于会计政策变更的有（ ）",options:[{id:"A",text:"因业务模式变化，将债权投资重分类为交易性金融资产"},{id:"B",text:"初次发生的融资租赁业务，采用新租赁准则的会计处理"},{id:"C",text:"固定资产预计使用寿命变更"},{id:"D",text:"所得税会计处理方法由应付税款法改为资产负债表债务法"}],answer:["1","2","3"],explanation:`**不属于会计政策变更的情形：**
1. 本期发生的交易与以前相比有**本质差别**→ 不属于
2. **初次发生**的交易或事项→ 不属于
3. **不重要**的交易或事项→ 不属于

| 选项 | 判断 | 理由 |
|------|------|------|
| A | 不属于 | 业务模式变化是客观事实，本质不同 |
| B | 不属于 | 初次发生的业务，属于首次执行新准则，不属于政策变更 |
| C | 不属于 | 固定资产使用寿命是会计估计，不是会计政策 |
| D | 属于 | 所得税会计处理方法属于会计政策 |`,difficulty:2,source:"笔记 INTERMEDIATE 改编",tags:["会计政策会计估计及其变更和差错更正","不属于会计政策变更的情形"]},{chapterId:"ch25",sectionId:"s25-01",kpointIds:["kp-ch25-s25-03-x3y1"],type:"fill",prompt:"【2.1 调整事项与非调整事项判断】多选题——甲公司2024年度财务报告于2025年4月15日经董事会批准报出。下列各项中，属于甲公司资产负债表日后调整事项的有（ ）。",options:[{id:"A",text:"2025年2月10日，法院对2024年提起的诉讼作出判决，甲公司需赔偿500万元（原预计400万元）"},{id:"B",text:"2025年3月1日，甲公司因自然灾害导致仓库中存货毁损1,000万元"},{id:"C",text:"2025年2月20日，获知2024年12月已确认销售的一批商品因质量问题被退回"},{id:"D",text:"2025年3月15日，甲公司发行可转换公司债券"}],answer:[`A、C

---`],explanation:`- A正确：诉讼在2024年已存在，日后判决提供了进一步证据 → **调整事项**
- B错误：自然灾害在日后才发生，资产负债表日不存在 → **非调整事项**
- C正确：销售退回是对2024年已确认收入的进一步证据 → **调整事项**
- D错误：发行债券在日后才发生 → **非调整事项**`,difficulty:2,source:"笔记 INTERMEDIATE 改编",tags:["资产负债表日后事项","调整事项与非调整事项判断"]},{chapterId:"ch25",sectionId:"s25-01",kpointIds:["kp-ch25-s25-02-x2y1"],type:"fill",prompt:`【2.2 诉讼案件结案的调整处理】计算分析题——甲公司2024年12月31日财务报表显示：
- 因一宗诉讼案件，甲公司确认了预计负债400万元
- 甲公司所得税税率为25%，按净利润的10%计提盈余公积

2025年2月20日（财务报告批准报出日前），法院终审判决甲公司需赔偿500万元。甲公司已于2025年2月25日支付赔偿款。

要求：编制甲公司资产负债表日后事项的调整分录。`,options:void 0,answer:["2025"],explanation:`**第一步：计算调整金额**
- 原预计负债：400万元
- 实际判决：500万元
- 需追加确认：100万元

**第二步：编制调整分录**

（1）调整预计负债和赔偿损失：
\`\`\`
借：以前年度损益调整          1,000,000
  贷：预计负债                1,000,000
\`\`\`

（2）调整所得税影响：
- 多确认了100万元损失 → 减少应交所得税25万元
\`\`\`
借：应交税费——应交所得税      250,000
  贷：以前年度损益调整         250,000
\`\`\`

（3）结转以前年度损益调整：
- 净调整额：100-25=75万元
\`\`\`
借：盈余公积                    75,000
    利润分配——未分配利润      675,000
  贷：以前年度损益调整         750,000
\`\`\`

（4）实际支付时：
\`\`\`
借：预计负债                5,000,000
  贷：银行存款              5,000,000
\`\`\``,difficulty:2,source:"笔记 INTERMEDIATE 改编",tags:["资产负债表日后事项","诉讼案件结案的调整处理"]},{chapterId:"ch25",sectionId:"s25-01",kpointIds:["kp-ch25-s25-02-x2y1"],type:"fill",prompt:`【2.3 销售退回的调整处理】计算分析题——甲公司2024年12月20日销售商品一批，售价200万元（不含税），成本150万元。款项已收取。2025年3月5日（财务报告批准报出日前），因质量问题该批商品被全部退回。甲公司适用增值税税率13%，所得税税率25%，按净利润10%计提盈余公积。

要求：编制资产负债表日后事项的调整分录。`,options:void 0,answer:[`详见上述分录

---`],explanation:`（1）调整收入和应收：
\`\`\`
借：以前年度损益调整          2,000,000
    应交税费——应交增值税(销)  260,000
  贷：银行存款                2,260,000
\`\`\`

（2）调整成本和存货：
\`\`\`
借：库存商品                1,500,000
  贷：以前年度损益调整       1,500,000
\`\`\`

（3）调整所得税：
- 利润减少50万元 → 退回所得税12.5万元
\`\`\`
借：应交税费——应交所得税      125,000
  贷：以前年度损益调整         125,000
\`\`\`

（4）结转以前年度损益调整：
- 净调整额 = -200+150+12.5 = -37.5万元（调减利润37.5万）
\`\`\`
借：盈余公积                    37,500
    利润分配——未分配利润      337,500
  贷：以前年度损益调整         375,000
\`\`\``,difficulty:2,source:"笔记 INTERMEDIATE 改编",tags:["资产负债表日后事项","销售退回的调整处理"]},{chapterId:"ch25",sectionId:"s25-01",kpointIds:["kp-ch25-s25-02-x2y2"],type:"fill",prompt:`【2.4 利润分配方案的处理】多选题——甲公司2025年3月20日（财务报告批准报出日前）董事会作出如下决议：
（1）宣告分配2024年度现金股利500万元
（2）以资本公积转增股本1,000万元
（3）分配2024年度股票股利200万元

上述事项中，属于资产负债表日后调整事项的有（ ）。`,options:[{id:"A",text:"宣告分配现金股利500万元"},{id:"B",text:"资本公积转增股本1,000万元"},{id:"C",text:"分配股票股利200万元"},{id:"D",text:"以上都不是"}],answer:[`A

---`],explanation:`- A正确：宣告分配**现金股利**→ 调整事项（确认应付股利，减少未分配利润）
- B错误：资本公积转增股本→ **非调整事项**（仅披露）
- C错误：分配**股票股利**→ **非调整事项**（仅披露）`,difficulty:2,source:"笔记 INTERMEDIATE 改编",tags:["资产负债表日后事项","利润分配方案的处理"]},{chapterId:"ch25",sectionId:"s25-01",kpointIds:["kp-ch25-s25-02-x2y1"],type:"fill",prompt:"【2.5 资产减值的日后调整】单选题——甲公司2024年末对某项固定资产计提减值准备200万元。2025年2月10日（财务报告批准报出日前），甲公司取得进一步证据表明该资产的可收回金额比原估计再低100万元。甲公司应作的会计处理为（ ）。",options:[{id:"A",text:"补提减值准备100万元，计入2025年损益"},{id:"B",text:'补提减值准备100万元，通过"以前年度损益调整"调整2024年报表'},{id:"C",text:"不作处理，在2025年报表中反映"},{id:"D",text:"追溯调整2024年初留存收益"}],answer:["1","2","3","10","90"],explanation:`- 日后取得减值的进一步证据属于**调整事项**
- 应通过"以前年度损益调整"补提100万元减值
- 调整2024年报表相关项目`,difficulty:2,source:"笔记 INTERMEDIATE 改编",tags:["资产负债表日后事项","资产减值的日后调整"]},{chapterId:"ch26",sectionId:"s26-01",kpointIds:["kp-ch26-s26-02-x2y1"],type:"fill",prompt:"【2.1 同一控制下企业合并——合并日处理】甲公司以银行存款4000万元和一项账面价值2500万元（公允价值3000万元）的无形资产为对价，取得同一集团内乙公司100%股权。乙公司在最终控制方合并报表中的净资产账面价值为6000万元，此前集团从外部第三方购买乙公司时形成商誉200万元。求初始投资成本和合并日分录。",options:void 0,answer:["6200","300","4000","2500"],explanation:`- 同一控制下初始投资成本 = 被合并方在最终控制方合并报表中的净资产账面价值 × 持股比例 + 最终控制方收购时形成的商誉
- 初始投资成本 = 6000 × 100% + 200 = 6200万元
- 合并对价账面价值 = 4000 + 2500 = 6500万元
- 差额 = 6200 - 6500 = -300万元，冲减资本公积`,difficulty:2,source:"笔记 INTERMEDIATE 改编",tags:["企业合并","同一控制下企业合并——合并日处理"]},{chapterId:"ch26",sectionId:"s26-01",kpointIds:["kp-ch26-s26-02-x2y2"],type:"fill",prompt:"【2.2 非同一控制下企业合并——购买日处理】甲公司以5000万元现金购买乙公司80%股权（非同一控制）。购买日乙公司可辨认净资产公允价值为5500万元，账面价值5000万元。差异来自：存货（公允>账面200万元，已全部对外出售）；固定资产（公允>账面300万元，尚可使用10年）。求商誉和2026年末合并报表中的调整。",options:void 0,answer:["200","300","500","5500","600"],explanation:`- 合并成本 = 5000万元
- 可辨认净资产公允价值份额 = 5500 × 80% = 4400万元
- 商誉 = 5000 - 4400 = 600万元
- 存货差异200万元：购买当年已售出，全额调减乙公司净利润
- 固定资产差异300万元：每年多提折旧30万元`,difficulty:2,source:"笔记 INTERMEDIATE 改编",tags:["企业合并","非同一控制下企业合并——购买日处理"]},{chapterId:"ch26",sectionId:"s26-01",kpointIds:["kp-ch26-s26-02-x2y3"],type:"fill",prompt:"【2.3 或有对价】甲公司购买乙公司100%股权，合同约定：如果乙公司未来2年净利润超过1000万元，甲公司需额外支付500万元。购买日甲公司估计或有对价的公允价值为300万元。求合并成本。",options:void 0,answer:["300万元","300"],explanation:`- 非同一控制下，或有对价按公允价值计入合并成本
- 合并成本 = 基础对价 + 或有对价公允价值`,difficulty:2,source:"笔记 INTERMEDIATE 改编",tags:["企业合并","或有对价"]},{chapterId:"ch26",sectionId:"s26-01",kpointIds:["kp-ch26-s26-02-x2y4"],type:"fill",prompt:"【2.4 反向购买】A公司（上市公司，股本1000万股，每股公允价值20元）向B公司（非上市公司）原股东发行1200万股收购B公司100%股权。B公司股本500万股，每股公允价值30元。判断谁是法律上的收购方、谁是会计上的购买方。",options:void 0,answer:["1000","20","20000万元","20000"],explanation:`- 法律上：A公司发行股份收购B公司，A是收购方
- 会计上：B公司原股东持有A公司1200/2200=54.5%股权，超过A原股东的45.5%
- B公司原股东实质上控制了A公司 → 会计上的购买方是B公司
- 这是反向购买：法律上的被购买方（B）是会计上的购买方`,difficulty:2,source:"笔记 INTERMEDIATE 改编",tags:["企业合并","反向购买"]},{chapterId:"ch26",sectionId:"s26-01",kpointIds:["kp-ch26-s26-02-x2y3"],type:"fill",prompt:"【2.5 业务的判断】甲公司收购乙公司的一组资产，包括：厂房、设备、5名员工和客户合同。判断是否构成业务。",options:void 0,answer:[`构成业务，应按企业合并准则处理（而非单纯资产购买）。

## 三、分录模板`],explanation:`- 业务的判断标准：是否有投入+加工过程+产出
- 厂房设备=投入，员工=加工过程，客户合同=产出
- 三要素齐全 → 构成业务`,difficulty:2,source:"笔记 INTERMEDIATE 改编",tags:["企业合并","业务的判断"]},{chapterId:"ch27",sectionId:"s27-01",kpointIds:["kp-ch27-s27-01-x1y1"],type:"fill",prompt:"【2.1 非同一控制购买日抵销】甲公司以5000万元购买乙公司80%股权，购买日乙公司可辨认净资产公允价值6000万元（账面5500万元，差异：固定资产增值500万元，尚可使用10年）。编制购买日合并抵销分录。",options:void 0,answer:["500","6000","200","5000","80"],explanation:`答案：\`\`\`
// 调公允差异
借：固定资产  500
  贷：资本公积  500

// 抵销分录
借：净资产（乙公司，公允）  6000
    商誉  200（5000-6000×80%=200）
  贷：长期股权投资  5000
      少数股东权益  1200（6000×20%）
\`\`\``,difficulty:2,source:"笔记 INTERMEDIATE 改编",tags:["合并财务报表","非同一控制购买日抵销"]},{chapterId:"ch27",sectionId:"s27-01",kpointIds:["kp-ch27-s27-05-x5y1"],type:"fill",prompt:"【2.2 内部存货交易抵销（当期）】甲向乙销售商品，售价400万元，成本300万元。乙当年将该商品的60%对外出售，40%形成期末存货。",options:void 0,answer:["400","40","100","360"],explanation:`答案：\`\`\`
// 抵销内部销售收入和成本
借：营业收入  400
  贷：营业成本  400

// 抵销期末存货中的未实现利润
借：营业成本  40（100×40%）
  贷：存货  40
\`\`\`
简化版：
\`\`\`
借：营业收入  400
  贷：营业成本  360
      存货  40
\`\`\``,difficulty:2,source:"笔记 INTERMEDIATE 改编",tags:["合并财务报表","内部存货交易抵销（当期）"]},{chapterId:"ch27",sectionId:"s27-01",kpointIds:["kp-ch27-s27-05-x5y2"],type:"fill",prompt:"【2.3 连续编制合并报表——内部存货交易】上年甲向乙销售商品，售价400万元，成本300万元，乙年末仍有40%未售。本年乙将上年剩余存货全部售出，且本年甲又向乙销售商品，售价500万元，成本350万元，乙年末仍有30%未售。",options:void 0,answer:["40","500","45","150","30"],explanation:`答案：\`\`\`
// 抵销上年存货未实现利润（已转入本年营业成本）
借：年初未分配利润  40
  贷：营业成本  40

// 抵销本年内部交易
借：营业收入  500
  贷：营业成本  500

// 抵销本年期末存货未实现利润
借：营业成本  45（150×30%）
  贷：存货  45
\`\`\``,difficulty:2,source:"笔记 INTERMEDIATE 改编",tags:["合并财务报表","连续编制合并报表——内部存货交易"]},{chapterId:"ch27",sectionId:"s27-01",kpointIds:["kp-ch27-s27-05-x5y1"],type:"fill",prompt:"【2.4 内部固定资产交易抵销】甲向乙销售一台设备，售价600万元，成本400万元。乙将该设备作为管理用固定资产，按5年直线法折旧，残值为0。",options:void 0,answer:["600","400","200","5","40万元"],explanation:`答案：\`\`\`
// 抵销内部销售
借：营业收入  600
  贷：营业成本  400
      固定资产——原价  200

// 抵销多提折旧（当年200/5=40万元）
借：固定资产——累计折旧  40
  贷：管理费用  40
\`\`\`
第2年：
\`\`\`
借：年初未分配利润  200
  贷：固定资产——原价  200

借：固定资产——累计折旧  40（上年）
  贷：年初未分配利润  40

借：固定资产——累计折旧  40（本年）
  贷：管理费用  40
\`\`\``,difficulty:2,source:"笔记 INTERMEDIATE 改编",tags:["合并财务报表","内部固定资产交易抵销"]},{chapterId:"ch27",sectionId:"s27-01",kpointIds:["kp-ch27-s27-05-x5y1"],type:"fill",prompt:"【2.5 内部债权债务抵销】甲应收乙200万元，乙应付甲200万元。甲对该应收账款计提坏账准备10万元。",options:void 0,answer:["200","10","2.5","25"],explanation:`答案：\`\`\`
// 抵销债权债务
借：应付账款  200
  贷：应收账款  200

// 抵销坏账准备
借：应收账款——坏账准备  10
  贷：信用减值损失  10

// 抵销递延所得税（因坏账准备产生的可抵扣差异）
借：递延所得税资产  2.5（10×25%）
  贷：所得税费用  2.5
\`\`\``,difficulty:2,source:"笔记 INTERMEDIATE 改编",tags:["合并财务报表","内部债权债务抵销"]},{chapterId:"ch28",sectionId:"s28-01",kpointIds:["kp-ch28-s28-02-x2y1"],type:"fill",prompt:"【2.1 1基本EPS】甲公司净利润500万元>1发行在外普通股1,000万股>1 2x23年4月1日新增发行200万股>1基本EPS?",options:void 0,answer:["见解析"],explanation:"加权平均股数=1,000+200×912=1,000×812=1,200万股> 1基本EPS=500/1,200=00.417元",difficulty:2,source:"笔记 INTERMEDIATE 改编",tags:["每股收益","1基本EPS"]},{chapterId:"ch28",sectionId:"s28-01",kpointIds:["kp-ch28-s28-03-x3y3"],type:"fill",prompt:"【2.2 1稀释EPS—可转债】甲公司净利润500万元>1加权股数1,000万股>1发行可转债(面值1,000万元>1利率55%)>1可转100万股>1稀释EPS?",options:void 0,answer:["见解析"],explanation:"分子: 500+1,000×5%×(1-25%)=500+37.5=537.5万元> 1分母: 1,000+100=1,100万股> 1稀释EPS=537.5/1,100=00489元> 1低于0.417→具有稀释性",difficulty:2,source:"笔记 INTERMEDIATE 改编",tags:["每股收益","1稀释EPS—可转债"]},{chapterId:"ch28",sectionId:"s28-01",kpointIds:["kp-ch28-s28-02-x2y2"],type:"fill",prompt:"【2.3 1认股权证(无对价股数)】甲公司发行认股权证>1行权价86元>1平均股价1010元>1拟行权100万股>1增加股数?",options:void 0,answer:["见解析"],explanation:"无对价股数=100-(6×100/10)=100-60=40万股",difficulty:2,source:"笔记 INTERMEDIATE 改编",tags:["每股收益","1认股权证(无对价股数)"]},{chapterId:"ch28",sectionId:"s28-01",kpointIds:["kp-ch28-s28-03-x3y3"],type:"fill",prompt:"【2.4 反稀释性判断】1稀释EPS>基本EPS时→是否纳入稀释计算?",options:void 0,answer:["见解析"],explanation:"不纳入>1增加EPS的不具有稀释性",difficulty:2,source:"笔记 INTERMEDIATE 改编",tags:["每股收益","反稀释性判断"]},{chapterId:"ch28",sectionId:"s28-01",kpointIds:["kp-ch28-s28-04-x4y1"],type:"fill",prompt:"【2.5 1重新计算(配股)】甲公司配股>1每10股配3股>1配股价86元>1行权前公允1010元>1调整系数?",options:void 0,answer:["见解析"],explanation:"1理论除权价=(10×10+3×6)/13=98.46元> 1调整系数=10/8.46=1.05> 1",difficulty:2,source:"笔记 INTERMEDIATE 改编",tags:["每股收益","1重新计算(配股)"]},{chapterId:"ch29",sectionId:"s29-01",kpointIds:["kp-ch29-s29-02-x2y4"],type:"fill",prompt:"【2.1 公允价值定义】公允价值的核心假设包括?",options:void 0,answer:["见解析"],explanation:"有序交易(非被迫)+1主要市场或最有利市场+1市场参与者视角",difficulty:2,source:"笔记 INTERMEDIATE 改编",tags:["公允价值计量","公允价值定义"]},{chapterId:"ch29",sectionId:"s29-01",kpointIds:["kp-ch29-s29-02-x2y2"],type:"fill",prompt:"【2.2 估值技术选择】优先使用哪种估值技术?",options:void 0,answer:["见解析"],explanation:"市场法(利用市场报价)>1收益法(DCF)>1成本法(重置成本)",difficulty:2,source:"笔记 INTERMEDIATE 改编",tags:["公允价值计量","估值技术选择"]},{chapterId:"ch29",sectionId:"s29-01",kpointIds:["kp-ch29-s29-02-x2y4"],type:"multiple",prompt:"【2.3 公允价值层次】下列属于第一层次输入值的有（ )。",options:[{id:"A",text:"上市公司股票收盘价  B. 类似资产交易价格  C. 管理层预测数据  D. 活跃市场债券报价"}],answer:["A","D"],explanation:"A和D是第一层次(活跃市场报价)>1 B是第二层次(可观察非活跃)>1 C是第三层次(不可观察)",difficulty:2,source:"笔记 INTERMEDIATE 改编",tags:["公允价值计量","公允价值层次"]},{chapterId:"ch29",sectionId:"s29-01",kpointIds:["kp-ch29-s29-01-x1y1"],type:"fill",prompt:"【2.4 交易费用】交易费用是否计入公允价值?",options:void 0,answer:["见解析"],explanation:"不计入>1交易费用属于增量成本>1计入资产/负债成本但不计入公允价值",difficulty:2,source:"笔记 INTERMEDIATE 改编",tags:["公允价值计量","交易费用"]},{chapterId:"ch29",sectionId:"s29-01",kpointIds:["kp-ch29-s29-01-x1y1"],type:"fill",prompt:"【2.5 最佳用途】一块土地当前作为停车场>1但最佳用途是商业开发>1公允价值按哪个用途确定?",options:void 0,answer:["见解析"],explanation:"按最佳用途(商业开发)确定公允价值>1即使当前用途不同",difficulty:2,source:"笔记 INTERMEDIATE 改编",tags:["公允价值计量","最佳用途"]},{chapterId:"ch30",sectionId:"s30-01",kpointIds:["kp-ch30-s30-01-x1y1"],type:"fill",prompt:"【2.1 1双体系】政府会计由哪些体系构成?",options:void 0,answer:["见解析"],explanation:"预算会计(收付实现制)+1财务会计(权责发生制)>1双功能、1双基础、1双报告",difficulty:2,source:"笔记 INTERMEDIATE 改编",tags:["政府及民间非营利组织会计","1双体系"]},{chapterId:"ch30",sectionId:"s30-01",kpointIds:["kp-ch30-s30-02-x2y1"],type:"fill",prompt:"【2.2 1财政直接支付】1某事业单位通过财政直接支付购买设备10万元>1写出双分录",options:void 0,answer:["见解析"],explanation:`\`\`\`
财务会计:
借:固定资产               10
  贍:财政拨款收入             10
预算会计:
借:事业支出               10
  贍:财政拨款预算收入         10
\`\`\``,difficulty:2,source:"笔记 INTERMEDIATE 改编",tags:["政府及民间非营利组织会计","1财政直接支付"]},{chapterId:"ch30",sectionId:"s30-01",kpointIds:["kp-ch30-s30-02-x2y1"],type:"fill",prompt:"【2.3 1限定性收入】1某基金会收到捐赠50万元>1捐赠人限定用于助学项目>1如何分类?",options:void 0,answer:["见解析"],explanation:"1限定性收入(限制在以后期间满足)>1如果限制在本期满足→非限定性收入",difficulty:2,source:"笔记 INTERMEDIATE 改编",tags:["政府及民间非营利组织会计","1限定性收入"]},{chapterId:"ch30",sectionId:"s30-01",kpointIds:["kp-ch30-s30-02-x2y4"],type:"fill",prompt:"【2.4 预算结转结余】区分财政拨款结转与财政拨款结余?",options:void 0,answer:["见解析"],explanation:"1结转=未使用完毕需结转下年继续使用>1结余=1项目已完成或终止的剩余",difficulty:2,source:"笔记 INTERMEDIATE 改编",tags:["政府及民间非营利组织会计","预算结转结余"]}];function gn(){return jn.map(n=>({id:ge(),chapterId:n.chapterId,sectionId:n.sectionId,kpointIds:n.kpointIds,type:n.type,prompt:n.prompt,options:n.options,answer:n.answer,explanation:n.explanation,difficulty:n.difficulty??2,source:n.source,tags:n.tags,bookmarked:0,createdAt:t(),updatedAt:t()}))}const ye=[{id:"mat-01-02-a",chapterId:"ch01",sectionId:"s01-02",prompt:`甲公司为一般纳税人，2026 年 1 月发生下列经济业务（不考虑增值税）：

（1）1 月 5 日，收到投资者投入的银行存款 200 万元，款项已存入银行；
（2）1 月 10 日，以银行存款 50 万元偿还前欠 A 公司的应付账款；
（3）1 月 15 日，从 B 公司采购原材料，价款 30 万元，款项尚未支付，材料已验收入库（不考虑增值税，按实际成本计价）；
（4）1 月 20 日，销售库存商品一批，售价 80 万元，成本 50 万元，款项尚未收到（确认收入并结转成本）；
（5）1 月 25 日，以银行存款支付本月行政管理部门办公费 5 万元；
（6）1 月 31 日，计提本月固定资产折旧 8 万元，其中生产车间 5 万元，行政管理部门 3 万元。`,context:"本题适用企业会计准则；不考虑增值税；按实际成本计量",createdAt:t()}],se=[{chapterId:"ch01",sectionId:"s01-02",kpointIds:["kp-elem-recog","kp-double"],type:"calc",prompt:"【小问 1 · 5 分】根据业务（1），编制甲公司收到投资者投入资本的分录，并计算该业务引起的【资产】和【所有者权益】分别增加的金额（单位：万元）。",answer:["200"],explanation:`分录：借：银行存款 200 万；贷：实收资本 200 万。
资产（银行存款）增加 200 万；所有者权益（实收资本）增加 200 万。`,difficulty:2,source:"综合题示例",tags:["综合题","分录"],calcTolerate:0,calcHint:"存款 = 实收资本 = 200 万元"},{chapterId:"ch01",sectionId:"s01-02",kpointIds:["kp-double","kp-debit"],type:"calc",prompt:"【小问 2 · 5 分】根据业务（3），编制采购原材料的分录，并计算该业务引起的【资产】和【负债】分别增加的金额（单位：万元）。",answer:["30"],explanation:`业务 3：借：原材料 30 万；贷：应付账款 30 万。
业务 3 导致资产（原材料）+30 万，负债（应付账款）+30 万。`,difficulty:3,source:"综合题示例",tags:["综合题"],calcTolerate:0,calcHint:"原材料 = 应付账款 = 30"},{chapterId:"ch01",sectionId:"s01-02",kpointIds:["kp-debit"],type:"judge",prompt:"【小问 3 · 4 分】上述全部业务引起的会计恒等式（资产 = 负债 + 所有者权益）始终成立。试算平衡后，全部账户借方发生额合计与贷方发生额合计相等。（    ）",answer:"true",explanation:`借贷记账法下每笔业务有借必有贷、借贷必相等，试算平衡必然成立。
本题是对全部业务的恒等式验证。`,difficulty:1,source:"综合题示例",tags:["综合题","试算平衡"]}];async function st(){const n=await o.chapters.count(),i=await o.questions.count();if(n>0&&i>0){await o.materials.count()<ye.length&&await o.materials.bulkPut(ye);const l=se.length;if(await o.questions.where("materialId").notEqual("").count()<l){const w=(await o.questions.toArray()).sort((I,u)=>u.createdAt-I.createdAt).slice(0,l),y=ye[ye.length-1].id,p=w.map((I,u)=>{var j,E;return{...I,materialId:y,subNo:u+1,calcTolerate:(j=se[u])==null?void 0:j.calcTolerate,calcHint:(E=se[u])==null?void 0:E.calcHint}});await o.questions.bulkPut(p)}return{chapters:n,sections:await o.sections.count(),kpoints:await o.kpoints.count(),materials:await o.materials.count(),questions:i}}const r=fn,c=An,a=kn,d=ye,s=gn();return await o.transaction("rw",o.chapters,o.sections,o.kpoints,o.materials,o.questions,async()=>{await o.chapters.bulkPut(r),await o.sections.bulkPut(c),await o.kpoints.bulkPut(a),await o.materials.bulkPut(d);const m=50;for(let y=0;y<s.length;y+=m)await o.questions.bulkPut(s.slice(y,y+m));const k=(await o.questions.toArray()).sort((y,p)=>p.createdAt-y.createdAt).slice(0,se.length),h=d[d.length-1].id,w=k.map((y,p)=>{var I,u;return{...y,materialId:h,subNo:p+1,calcTolerate:(I=se[p])==null?void 0:I.calcTolerate,calcHint:(u=se[p])==null?void 0:u.calcHint}});await o.questions.bulkPut(w)}),{chapters:r.length,sections:c.length,kpoints:a.length,materials:d.length,questions:s.length+se.length}}async function Nn(){return await o.transaction("rw",o.chapters,o.sections,o.kpoints,o.materials,o.questions,async()=>{await o.chapters.clear(),await o.sections.clear(),await o.kpoints.clear(),await o.materials.clear(),await o.questions.clear()}),await o.attempts.clear(),await o.attemptsTags.clear(),await o.notes.clear(),await st()}function En(){const n=T(async()=>({chapters:await o.chapters.count(),sections:await o.sections.count(),kpoints:await o.kpoints.count(),qs:await o.questions.count(),attempts:await o.attempts.count(),wrong:await o.attempts.where("inWrongBook").equals(1).count()}))??{chapters:0,sections:0,kpoints:0,qs:0,attempts:0,wrong:0};async function i(){const s=await Nn();Z.success(`已重置：${s.chapters} 章 / ${s.sections} 节 / ${s.kpoints} 考点 / ${s.questions} 题`)}async function r(){await o.attempts.clear(),Z.success("已清空所有答题记录")}async function c(){await o.attempts.where("inWrongBook").equals(1).modify({inWrongBook:0}),Z.success("已清空错题标记")}async function a(){const s={version:2,exportedAt:new Date().toISOString(),chapters:await o.chapters.toArray(),sections:await o.sections.toArray(),kpoints:await o.kpoints.toArray(),materials:await o.materials.toArray(),questions:await o.questions.toArray(),attempts:await o.attempts.toArray(),attemptsTags:await o.attemptsTags.toArray(),notes:await o.notes.toArray(),settings:await o.settings.toArray()},m=JSON.stringify(s,null,2),l=new Blob([m],{type:"application/json"}),k=URL.createObjectURL(l),h=document.createElement("a");h.href=k,h.download=`cpa-accounting-backup-${new Date().toISOString().slice(0,10)}.json`,document.body.appendChild(h),h.click(),document.body.removeChild(h),URL.revokeObjectURL(k),Z.success(`已导出 ${s.questions.length} 题 / ${s.attempts.length} 答题记录`)}async function d(s){var m,l,k,h,w;try{const y=await s.text(),p=JSON.parse(y);if(!p.version||!Array.isArray(p.chapters))throw new Error("文件格式不对（缺 version / chapters）");Ze.confirm({title:"确认导入？",content:`会合并以下数据：${p.chapters.length} 章 / ${((m=p.sections)==null?void 0:m.length)??0} 节 / ${((l=p.kpoints)==null?void 0:l.length)??0} 考点 / ${((k=p.materials)==null?void 0:k.length)??0} 材料 / ${((h=p.questions)==null?void 0:h.length)??0} 题 / ${((w=p.attempts)==null?void 0:w.length)??0} 答题记录。`,okText:"导入",cancelText:"取消",onOk:async()=>{await o.transaction("rw",o.chapters,o.sections,o.kpoints,o.materials,o.questions,async()=>{p.chapters&&await o.chapters.bulkPut(p.chapters),p.sections&&await o.sections.bulkPut(p.sections),p.kpoints&&await o.kpoints.bulkPut(p.kpoints),p.materials&&await o.materials.bulkPut(p.materials),p.questions&&await o.questions.bulkPut(p.questions)}),await o.transaction("rw",o.attempts,o.attemptsTags,o.notes,o.settings,async()=>{p.attempts&&await o.attempts.bulkPut(p.attempts),p.attemptsTags&&await o.attemptsTags.bulkPut(p.attemptsTags),p.notes&&await o.notes.bulkPut(p.notes),p.settings&&await o.settings.bulkPut(p.settings)}),Z.success("导入完成")}})}catch(y){Z.error(`导入失败：${y.message}`)}return!1}return e.jsxs("div",{className:"max-w-2xl mx-auto p-4 md:p-6 space-y-4",children:[e.jsx("h1",{className:"text-2xl font-bold text-slate-900",children:"⚙️ 设置"}),e.jsx(v,{size:"small",title:"📦 数据概览",children:e.jsxs(fe,{gutter:[16,16],children:[e.jsx(_,{xs:12,md:8,children:e.jsx(L,{title:"章节",value:n.chapters})}),e.jsx(_,{xs:12,md:8,children:e.jsx(L,{title:"小节",value:n.sections})}),e.jsx(_,{xs:12,md:8,children:e.jsx(L,{title:"考点",value:n.kpoints})}),e.jsx(_,{xs:12,md:8,children:e.jsx(L,{title:"题目",value:n.qs})}),e.jsx(_,{xs:12,md:8,children:e.jsx(L,{title:"答题记录",value:n.attempts})}),e.jsx(_,{xs:12,md:8,children:e.jsx(L,{title:"错题",value:n.wrong})})]})}),e.jsxs(v,{size:"small",title:"🌱 题库维护",children:[e.jsxs("p",{className:"text-sm text-slate-600 mb-3",children:["首次访问已自动灌入 ",e.jsx("b",{children:"第一章·第一节 会计概述"})," 的种子题库（",n.qs," 题 / ",n.kpoints," 考点）。 如修改了 ",e.jsx("code",{children:"src/db/seed.ts"}),"，可点击下方按钮重新加载。"]}),e.jsxs(W,{wrap:!0,children:[e.jsx(ke,{title:"确认重置题库？",description:"会清空所有章节、题目、答题记录，然后重新灌入种子数据。",onConfirm:i,okText:"重置",cancelText:"取消",children:e.jsx(b,{danger:!0,children:"重置并重新加载题库"})}),e.jsx(ke,{title:"确认清空所有答题记录？",description:"会清空 attempts 表，错题标记也会一起没。",onConfirm:r,okText:"清空",cancelText:"取消",children:e.jsx(b,{children:"清空答题记录"})}),e.jsx(ke,{title:"确认清空错题标记？",description:"只把 inWrongBook 字段置 0，保留答题记录。",onConfirm:c,okText:"清空",cancelText:"取消",children:e.jsx(b,{children:"仅清空错题"})})]})]}),e.jsxs(v,{size:"small",title:"🗓️ 考试日期",children:[e.jsxs("p",{className:"text-sm text-slate-600 mb-2",children:["首页的倒计时按本地存储 ",e.jsx("code",{children:"cpa-exam-date"})," 计算。如考试时间有变化，在首页直接改即可。"]}),e.jsx("p",{className:"text-xs text-slate-500",children:"默认：2026-08-29（按往年 CPA 会计考试时间估算）"})]}),e.jsxs(v,{size:"small",title:"💾 数据备份 / 恢复",children:[e.jsx("p",{className:"text-sm text-slate-600 mb-3",children:"导出全部题库 + 答题记录到 JSON 文件；也可以从之前导出的 JSON 合并导入。"}),e.jsxs(W,{wrap:!0,children:[e.jsx(b,{icon:e.jsx(Mt,{}),onClick:a,children:"导出全部数据"}),e.jsx(Rt,{accept:".json",showUploadList:!1,beforeUpload:s=>(d(s),!1),children:e.jsx(b,{icon:e.jsx(St,{}),children:"从 JSON 导入"})})]})]}),e.jsx(ae,{type:"info",showIcon:!0,message:"数据全部存在浏览器 IndexedDB（数据库名 cpa-accounting）",description:"清浏览器缓存 / 切账号会丢数据。当前为单机版，不做云同步。"})]})}function wn(){return e.jsxs("div",{className:"max-w-2xl mx-auto p-4 md:p-6",children:[e.jsx("h1",{className:"text-2xl font-bold text-slate-900 mb-1",children:"ℹ️ 关于 CPA 会计 · 突击刷题"}),e.jsx("p",{className:"text-sm text-slate-500 mb-4",children:"为一个月突击 CPA 会计考试而做的本地刷题站。基于 quiz-learn 改造。"}),e.jsx(v,{size:"small",className:"mb-3",title:"🎯 定位",children:e.jsxs("ul",{className:"text-sm text-slate-700 space-y-1 list-disc pl-5",children:[e.jsx("li",{children:"章节 + 考点 双轨刷题（不是孤立题海）"}),e.jsx("li",{children:"题型配比贴合 CPA 真实考试（5 选项单选 / 多选 / 判断 / 计算）"}),e.jsx("li",{children:"支持模拟测试（限时 60 分钟、自动评分、考后解析）"}),e.jsx("li",{children:"薄弱考点自动识别 + 一键专练"}),e.jsx("li",{children:"全部数据存本地（IndexedDB），不上传任何东西"})]})}),e.jsx(v,{size:"small",className:"mb-3",title:"🧱 技术栈",children:e.jsxs("ul",{className:"text-sm text-slate-700 space-y-1 list-disc pl-5",children:[e.jsx("li",{children:"端口 5200"}),e.jsx("li",{children:"React 18 + TypeScript 5.7 + Vite 6 + Tailwind 4 + antd 6.5"}),e.jsx("li",{children:"数据：IndexedDB via Dexie"}),e.jsx("li",{children:"路由：HashRouter（便于 systemd 静态部署）"}),e.jsx("li",{children:"基于 quiz-learn 模板复制"})]})}),e.jsx(v,{size:"small",className:"mb-3",title:"🗺️ 后续计划",children:e.jsxs("ul",{className:"text-sm text-slate-700 space-y-1 list-disc pl-5",children:[e.jsx("li",{children:"持续扩充题库（按章收录：第一 → 第十九 → 第二十六 → 第二十七 → 第二十八 → 第二十九 → 第三十章）"}),e.jsx("li",{children:"综合题（材料 + 多小问 + 自由输入 + 公式渲染）"}),e.jsx("li",{children:"每日复习（基于艾宾浩斯曲线）"}),e.jsx("li",{children:"收藏夹 + 笔记"}),e.jsx("li",{children:"支持自定义导入题库（JSON）"})]})}),e.jsx(v,{size:"small",title:"⚠️ 免责声明",children:e.jsx("p",{className:"text-sm text-slate-600",children:"本题库的题目均为基于公开知识点整理的练习题，答案和解析经过仔细核对但不保证绝对准确。 正式考试请以官方教材、注协教材和历年真题为准。"})})]})}function vn(){const[n,i]=N.useState(!1);return N.useEffect(()=>{en(),st().finally(()=>i(!0))},[]),n?e.jsx(jt,{children:e.jsxs(Q,{element:e.jsx(Kt,{}),children:[e.jsx(Q,{index:!0,element:e.jsx(qt,{})}),e.jsx(Q,{path:"chapters",element:e.jsx(an,{})}),e.jsx(Q,{path:"practice",element:e.jsx(rn,{})}),e.jsx(Q,{path:"kpoint",element:e.jsx(pn,{})}),e.jsx(Q,{path:"koujue",element:e.jsx(mn,{})}),e.jsx(Q,{path:"exam",element:e.jsx(hn,{})}),e.jsx(Q,{path:"sprint",element:e.jsx(xn,{})}),e.jsx(Q,{path:"wrongbook",element:e.jsx(un,{})}),e.jsx(Q,{path:"stats",element:e.jsx(In,{})}),e.jsx(Q,{path:"bank",element:e.jsx(yn,{})}),e.jsx(Q,{path:"settings",element:e.jsx(En,{})}),e.jsx(Q,{path:"about",element:e.jsx(wn,{})}),e.jsx(Q,{path:"*",element:e.jsx(gt,{to:"/",replace:!0})})]})}):e.jsx("div",{className:"flex items-center justify-center h-dvh text-slate-500 text-sm",children:"正在加载 CPA 题库…"})}function bn(){return e.jsx(Pt,{locale:Ut,theme:{algorithm:_t.defaultAlgorithm,token:{colorPrimary:"#06b6d4",colorInfo:"#06b6d4",colorSuccess:"#10b981",colorWarning:"#f59e0b",colorError:"#ef4444",borderRadius:8,fontFamily:'"PingFang SC", "Microsoft YaHei", "Noto Sans SC", system-ui, -apple-system, sans-serif'}},children:e.jsx($t,{children:e.jsx(Nt,{children:e.jsx(vn,{})})})})}Bt.createRoot(document.getElementById("root")).render(e.jsx(bn,{}));
