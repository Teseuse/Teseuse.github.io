import{a as A}from"./chunk-RE7QRXYU.js";import{a as x}from"./chunk-XUDBOKG2.js";var C=(e,o=document)=>e[0]==="#"?o.getElementById(e.substring(1)):o.querySelector(e);C.all=(e,o=document)=>o.querySelectorAll(e);C.each=(e,o,i)=>{C.all(e,i).forEach(o)};var Z=function(e,o){let i=e.parentNode;i.lastChild===e?i.appendChild(o):i.insertBefore(o,e.nextSibling)},f=function(e,o,i,u){let s=document.createElement(o);switch(Object.assign(s,i),u){case"after":Z(e,s);break;case"replace":e.innerHTML="",e.appendChild(s);break;default:e.appendChild(s)}return s},ve=function(e,o){let i=document.createElement("div");Object.assign(i,o),e.parentNode.insertBefore(i,e),e.parentNode.removeChild(e),i.appendChild(e)},ye=function(e){return e.getBoundingClientRect().height},B=function(e,o){e.style.width=typeof o=="number"?o+"rem":o},q=function(e){return e.getBoundingClientRect().width},$=function(e){return e.getBoundingClientRect().top},P=function(e){return e.getBoundingClientRect().left},be=function(e){return e.style.display},w=function(e,o){return e.style.display=o,e};function _(){Object.assign(HTMLElement.prototype,{find(e){return C.all(e,this)},_class(e,o,i){(o.indexOf(" ")?o.split(" "):[o]).forEach(s=>{e==="toggle"?this.classList.toggle(s,i):this.classList[e](s)})},addClass(e){return this._class("add",e),this},removeClass(e){return this._class("remove",e),this},toggleClass(e,o){return this._class("toggle",e,o),this},hasClass(e){return this.classList.contains(e)}})}var b=x;_();var Le=b.statics.indexOf("//")>0?b.statics:b.root,R={x:0,y:0},ee=0,N,te,j=document.getElementsByTagName("body")[0],Me=document.documentElement,Ce=document.getElementById("container"),we=document.getElementById("loading"),ne=document.getElementById("nav"),He=document.getElementById("header"),Ne=ne.querySelector(".toggle"),Se=document.getElementById("quick"),ke=document.getElementById("sidebar"),Oe=document.getElementById("brand"),re=document.getElementById("tool"),oe,se,ie,ae,Ie=document.getElementById("search"),D,le,ce,de=window.innerHeight,ue=window.innerWidth,k=0,S=window.location.href,pe;function Ae(e){D=e}function Be(e){le=e}function qe(e){ce=e}function Pe(e){de=e}function _e(e){ue=e}function je(e){ee=e}function De(e){te=e}function W(e){k=e}function We(e){S=e}function Fe(e){pe=e}function $e(e){N=e}function Re(e){oe=e}function Ue(e){se=e}function Ge(e){ie=e}function Ye(e){ae=e}function Je(e){re=e}var Ze=(e,o,i,u)=>{let s,m="none";switch(o){case 0:s={opacity:[1,0]};break;case 1:s={opacity:[0,1]},m="block";break;case"bounceUpIn":s={begin(l){w(e,"block")},translateY:[{value:-60,duration:200},{value:10,duration:200},{value:-5,duration:200},{value:0,duration:200}],opacity:[0,1]},m="block";break;case"shrinkIn":s={begin(l){w(e,"block")},scale:[{value:1.1,duration:300},{value:1,duration:200}],opacity:1},m="block";break;case"slideRightIn":s={begin(l){w(e,"block")},translateX:["100%","0%"],opacity:[0,1]},m="block";break;case"slideRightOut":s={translateX:["0%","100%"],opacity:[1,0]};break;default:s=o,m=o.display;break}A(Object.assign({targets:e,duration:200,easing:"linear",begin(){u&&u()},complete(){w(e,m),i&&i()}},s)).play()},H=(e,o,i)=>{A({targets:typeof o=="number"&&typeof e!="number"?e.parentNode:document.scrollingElement,duration:500,easing:"easeInOutQuad",scrollTop:o||(typeof e=="number"?e:e?$(e)+document.documentElement.scrollTop-D:0),complete(){i&&i()}}).play()};var g={set(e,o){localStorage.setItem(e,o)},get(e){return localStorage.getItem(e)},del(e){localStorage.removeItem(e)}};var U=e=>{if(!e)return;let o=f(j,"div",{innerHTML:e,className:"tip"});setTimeout(()=>{o.addClass("hide"),setTimeout(()=>{j.removeChild(o)},300)},3e3)},lt=()=>{b.auto_scroll&&g.set(S,String(R.y))},ct=e=>{let o=window.location.hash,i=null;if(k){g.del(S);return}o?i=document.querySelector(decodeURI(o)):i=b.auto_scroll?parseInt(g.get(S)):0,i&&(H(i),W(1)),e&&o&&!k&&(H(i),W(1))},dt=(e,o)=>{navigator.clipboard&&window.isSecureContext?navigator.clipboard.writeText(e).then(()=>{o&&o(!0)},()=>{o&&o(!1)}):(console.error("Too old browser, clipborad API not supported."),o&&o(!1))};var G=()=>{let e;C.each("div.tab",o=>{if(o.getAttribute("data-ready"))return;let i=o.getAttribute("data-id"),u=o.getAttribute("data-title"),s=document.getElementById(i);s?e=!1:(s=document.createElement("div"),s.className="tabs",s.id=i,s.innerHTML='<div class="show-btn"></div>',s.querySelector(".show-btn").addEventListener("click",()=>{H(s)}),o.parentNode.insertBefore(s,o),e=!0);let m=s.querySelector(".nav ul");m||(m=f(s,"div",{className:"nav",innerHTML:"<ul></ul>"}).querySelector("ul"));let l=f(m,"li",{innerHTML:u});e&&(l.addClass("active"),o.addClass("active")),l.addEventListener("click",c=>{let T=c.currentTarget;s.find(".active").forEach(y=>{y.removeClass("active")}),o.addClass("active"),T.addClass("active")}),s.appendChild(o),o.setAttribute("data-ready",String(!0))})};var O=null,F=/mobile/i.test(window.navigator.userAgent),Mt=(e,o)=>{let i={el:{},create(){e.player.options.btns&&e.player.options.btns.forEach(t=>{i.el[t]||(i.el[t]=f(e,"div",{className:t+" btn",onclick(r){e.player.fetch().then(()=>{e.player.options.events[t](r)})}}))})}},u={el:null,btns:{mode:void 0,volume:void 0},step:"next",create:()=>{if(!e.player.options.controls)return;let t=u;e.player.options.controls.forEach(r=>{if(t.btns[r])return;let n={onclick(p){t.events[r]?t.events[r](p):e.player.options.events[r](p)}};switch(r){case"volume":n.className=" "+(l.muted?"off":"on"),n.innerHTML='<div class="bar"></div>',n["on"+h.nameMap.dragStart]=t.events.volume,n.onclick=null;break;case"mode":n.className=" "+e.player.options.mode;break;default:n.className="";break}n.className=r+n.className+" btn",t.btns[r]=f(t.el,"div",n)}),t.btns.volume.bar=t.btns.volume.querySelector(".bar")},events:{mode(t){switch(e.player.options.mode){case"loop":e.player.options.mode="random";break;case"random":e.player.options.mode="order";break;default:e.player.options.mode="loop"}u.btns.mode.className="mode "+e.player.options.mode+" btn",g.set("_PlayerMode",e.player.options.mode)},volume(t){t.preventDefault();let r=t.currentTarget,n=!1,p=d=>{d.preventDefault(),e.player.volume(u.percent(d,r)),n=!0},a=d=>{d.preventDefault(),r.removeEventListener(h.nameMap.dragEnd,a),r.removeEventListener(h.nameMap.dragMove,p),n?(e.player.muted(),e.player.volume(u.percent(d,r))):l.muted?(e.player.muted(),e.player.volume(l.volume)):(e.player.muted("muted"),u.update(0))};r.addEventListener(h.nameMap.dragMove,p),r.addEventListener(h.nameMap.dragEnd,a)},backward(t){u.step="prev",e.player.mode()},forward(t){u.step="next",e.player.mode()}},update(t){u.btns.volume.className="volume "+(!l.muted&&t>0?"on":"off")+" btn",B(u.btns.volume.bar,Math.floor(t*100)+"%")},percent(t,r){let n=((t.clientX||t.changedTouches[0].clientX)-P(r))/q(r);return n=Math.max(n,0),Math.min(n,1)}},s={el:null,bar:null,create(){let t=c.current().el;t&&(s.el&&(s.el.parentNode.removeClass("current").removeEventListener(h.nameMap.dragStart,s.drag),s.el.remove()),s.el=f(t,"div",{className:"progress"}),s.el.setAttribute("data-dtime",h.secondToTime(0)),s.bar=f(s.el,"div",{className:"bar"}),t.addClass("current"),t.addEventListener(h.nameMap.dragStart,s.drag),c.scroll())},update(t){B(s.bar,Math.floor(t*100)+"%"),s.el.setAttribute("data-ptime",h.secondToTime(t*l.duration))},seeking(t){t?s.el.addClass("seeking"):s.el.removeClass("seeking")},percent(t,r){let n=((t.clientX||t.changedTouches[0].clientX)-P(r))/q(r);return n=Math.max(n,0),Math.min(n,1)},drag(t){t.preventDefault();let r=c.current().el,n=a=>{a.preventDefault();let d=s.percent(a,r);s.update(d),I.update(d*l.duration)},p=a=>{a.preventDefault(),r.removeEventListener(h.nameMap.dragEnd,p),r.removeEventListener(h.nameMap.dragMove,n);let d=s.percent(a,r);s.update(d),e.player.seek(d*l.duration),l.disableTimeupdate=!1,s.seeking(!1)};l.disableTimeupdate=!0,s.seeking(!0),r.addEventListener(h.nameMap.dragMove,n),r.addEventListener(h.nameMap.dragEnd,p)}},m={el:null,create(){let t=c.current();m.el.innerHTML='<div class="cover"><div class="disc"><img src="'+t.cover+'" class="blur"  alt="music cover"/></div></div><div class="info"><h4 class="title">'+t.name+"</h4><span>"+t.artist+'</span><div class="lrc"></div></div>',m.el.querySelector(".cover").addEventListener("click",e.player.options.events["play-pause"]),I.create(m.el.querySelector(".lrc"))}},l,c={el:null,data:[],index:-1,errnum:0,add:(t,r)=>{r.forEach(n=>{n.group=t,n.name=n.name||n.title||"Meida name",n.artist=n.artist||n.author||"Anonymous",n.cover=n.cover||n.pic,n.type=n.type||"normal",c.data.push(n)})},clear(){c.data=[],c.el.innerHTML="",c.index!==-1&&(c.index=-1,e.player.fetch())},create(){let t=c.el;c.data.map((r,n)=>{if(r.el)return null;let p="list-"+e.player._id+"-"+r.group,a=document.getElementById(p);return a||(a=f(t,"div",{id:p,className:e.player.group?"tab":"",innerHTML:"<ol></ol>"}),e.player.group&&(a.setAttribute("data-title",e.player.options.rawList[r.group].title),a.setAttribute("data-id",e.player._id))),r.el=f(a.querySelector("ol"),"li",{title:r.name+" - "+r.artist,innerHTML:'<span class="info"><span>'+r.name+"</span><span>"+r.artist+"</span></span>",onclick(d){let E=d.currentTarget;if(c.index===n&&s.el){l.paused?e.player.play():e.player.seek(l.duration*s.percent(d,E));return}e.player.switch(n),e.player.play()}}),r}),G()},current(){return this.data[this.index]},scroll(){let t=this.current(),r=this.el.querySelector("li.active");r&&r.removeClass("active");let n=this.el.querySelector(".tab.active");return n&&n.removeClass("active"),r=this.el.querySelectorAll(".nav li")[t.group],r&&r.addClass("active"),n=this.el.querySelectorAll(".tab")[t.group],n&&n.addClass("active"),H(t.el,t.el.offsetTop),this},title(){if(l.paused)return;let t=this.current();document.title="Now Playing..."+t.name+" - "+t.artist+" | "+N},error(){let t=this.current();t.el.removeClass("current").addClass("error"),t.error=!0,this.errnum++}},T={el:null,create(){this.el||(this.el=f(e,"div",{className:"player-info",innerHTML:(e.player.options.type==="audio"?'<div class="preview"></div>':"")+'<div class="controller"></div><div class="playlist"></div>'},"after"),m.el=this.el.querySelector(".preview"),c.el=this.el.querySelector(".playlist"),u.el=this.el.querySelector(".controller"))},hide(){let t=this.el;t.addClass("hide"),window.setTimeout(()=>{t.removeClass("show hide")},300)}},y={type:"audio",mode:"random",btns:["play-pause","music"],controls:["mode","backward","play-pause","forward","volume"],events:{"play-pause"(t){l.paused?e.player.play():e.player.pause()},music(t){T.el.hasClass("show")?T.hide():(T.el.addClass("show"),c.scroll().title())}}},h={random(t){return Math.floor(Math.random()*t)},parse(t){let r=[];return[["music.163.com.*song.*id=(\\d+)","netease","song"],["music.163.com.*album.*id=(\\d+)","netease","album"],["music.163.com.*artist.*id=(\\d+)","netease","artist"],["music.163.com.*playlist.*id=(\\d+)","netease","playlist"],["music.163.com.*discover/toplist.*id=(\\d+)","netease","playlist"],["y.qq.com.*song/(\\w+)(.html)?","tencent","song"],["y.qq.com.*album/(\\w+)(.html)?","tencent","album"],["y.qq.com.*singer/(\\w+)(.html)?","tencent","artist"],["y.qq.com.*playsquare/(\\w+)(.html)?","tencent","playlist"],["y.qq.com.*playlist/(\\w+)(.html)?","tencent","playlist"],["xiami.com.*song/(\\w+)","xiami","song"],["xiami.com.*album/(\\w+)","xiami","album"],["xiami.com.*artist/(\\w+)","xiami","artist"],["xiami.com.*collect/(\\w+)","xiami","playlist"]].forEach(n=>{let a=new RegExp(n[0]).exec(t);a!==null&&(r=[n[1],n[2],a[1]])}),r},fetch(t){let r=[];return new Promise((n,p)=>{t.forEach(a=>{let d=h.parse(a);if(d[0]){let E=JSON.stringify(d),L=g.get(E);L?(r.push(...JSON.parse(L)),n(r)):fetch(`${b.playerAPI}/meting/?server=`+d[0]+"&type="+d[1]+"&id="+d[2]+"&r="+Math.random()).then(v=>v.json()).then(v=>{g.set(E,JSON.stringify(v)),r.push(...v),n(r)}).catch(v=>{})}else r.push(a),n(r)})})},secondToTime(t){let r=d=>isNaN(d)?"00":d<10?"0"+d:""+d,n=Math.floor(t/3600),p=Math.floor((t-n*3600)/60),a=Math.floor(t-n*3600-p*60);return(n>0?[n,p,a]:[p,a]).map(r).join(":")},nameMap:{dragStart:F?"touchstart":"mousedown",dragMove:F?"touchmove":"mousemove",dragEnd:F?"touchend":"mouseup"}};l=null,e.player={_id:h.random(999999),group:!0,load(t){let r="";t&&t.length>0?this.options.rawList!==t&&(this.options.rawList=t,c.clear(),this.fetch()):(r="none",this.pause());for(let n in i.el)w(i.el[n],r);return this},fetch(){return new Promise((t,r)=>{if(c.data.length>0)t(!1);else if(this.options.rawList){let n=[];this.options.rawList.forEach((p,a)=>{n.push(new Promise((d,E)=>{let L=a,v;p.list?(this.group=!0,v=p.list):(L=0,this.group=!1,v=[p]),h.fetch(v).then(M=>{c.add(L,M),d(0)})}))}),Promise.all(n).then(()=>{t(!0)})}}).then(t=>{t&&(c.create(),u.create(),this.mode())})},mode(){let t=c.data.length;if(!t||c.errnum===t)return;let r=u.step==="next"?1:-1,n=()=>{let a=c.index+r;(a>t||a<0)&&(a=u.step==="next"?0:t-1),c.index=a},p=()=>{let a=h.random(t);c.index!==a?c.index=a:n()};switch(this.options.mode){case"random":p();break;case"order":n();break;case"loop":u.step&&n(),c.index===-1&&p();break}this.init()},switch(t){typeof t=="number"&&t!==c.index&&c.current()&&!c.current().error&&(c.index=t,this.init())},init(){let t=c.current();if(!t||t.error){this.mode();return}let r=!1;l.paused||(r=!0,this.stop()),l.setAttribute("src",t.url),l.setAttribute("title",t.name+" - "+t.artist),this.volume(g.get("_PlayerVolume")||"0.7"),this.muted(g.get("_PlayerMuted")),s.create(),this.options.type==="audio"&&m.create(),r===!0&&this.play()},play(){if(O&&O.player.pause(),c.current().error){this.mode();return}l.play().then(()=>{c.scroll()}).catch(t=>{})},pause(){l.pause(),document.title=N},stop(){l.pause(),l.currentTime=0,document.title=N},seek(t){t=Math.max(t,0),t=Math.min(t,l.duration),l.currentTime=t,s.update(t/l.duration)},muted(t){t==="muted"?(l.muted=t,g.set("_PlayerMuted",t),u.update(0)):(g.del("_PlayerMuted"),l.muted=!1,u.update(l.volume))},volume(t){isNaN(t)||(u.update(t),g.set("_PlayerVolume",t),l.volume=t)},mini(){T.hide()}};let I={el:null,data:null,index:0,create(t){let r=c.index,n=c.current().lrc,p=a=>{if(r!==c.index)return;this.data=this.parse(a);let d="";this.data.forEach((E,L)=>{d+="<p"+(L===0?' class="current"':"")+">"+E[1]+"</p>"}),this.el=f(t,"div",{className:"inner",innerHTML:d},"replace"),this.index=0};n.startsWith("http")?this.fetch(n,p):p(n)},update(t){if(this.data&&(this.index>this.data.length-1||t<this.data[this.index][0]||!this.data[this.index+1]||t>=this.data[this.index+1][0])){for(let r=0;r<this.data.length;r++)if(t>=this.data[r][0]&&(!this.data[r+1]||t<this.data[r+1][0])){this.index=r;let n=-(this.index-1);this.el.style.transform="translateY("+n+"rem)",this.el.getElementsByClassName("current")[0].removeClass("current"),this.el.getElementsByTagName("p")[r].addClass("current")}}},parse(t){if(t){t=t.replace(/([^\]^\n])\[/g,(a,d)=>d+`
[`);let r=t.split(`
`),n=[],p=r.length;for(let a=0;a<p;a++){let d=r[a].match(/\[(\d{2}):(\d{2})(\.(\d{2,3}))?]/g),E=r[a].replace(/.*\[(\d{2}):(\d{2})(\.(\d{2,3}))?]/g,"").replace(/<(\d{2}):(\d{2})(\.(\d{2,3}))?>/g,"").trim();if(d){let L=d.length;for(let v=0;v<L;v++){let M=/\[(\d{2}):(\d{2})(\.(\d{2,3}))?]/.exec(d[v]),V=M[1]*60,Q=parseInt(M[2]),z=M[4]?parseInt(M[4])/((M[4]+"").length===2?100:1e3):0,K=V+Q+z;n.push([K,E])}}}return n=n.filter(a=>a[1]),n.sort((a,d)=>a[0]-d[0]),n}else return[]},fetch(t,r){fetch(t).then(n=>n.text()).then(n=>{r(n)}).catch(n=>{})}},X={onerror(){c.error(),e.player.mode()},ondurationchange(){l.duration!==1&&s.el.setAttribute("data-dtime",h.secondToTime(l.duration))},onloadedmetadata(){e.player.seek(0),s.el.setAttribute("data-dtime",h.secondToTime(l.duration))},onplay(){e.parentNode.addClass("playing"),U(this.getAttribute("title")),O=e},onpause(){e.parentNode.removeClass("playing"),O=null},ontimeupdate(){this.disableTimeupdate||(s.update(this.currentTime/this.duration),I.update(this.currentTime))},onended(t){e.player.mode(),e.player.play()}};return(t=>{e.player.created||(e.player.options=Object.assign(y,t),e.player.options.mode=g.get("_PlayerMode")||e.player.options.mode,i.create(),l=f(e,e.player.options.type,X),T.create(),e.parentNode.addClass(e.player.options.type),e.player.created=!0)})(o),e};var Y=(e,o,i,u)=>{if(u)i();else{let s=document.createElement("script");s.onload=function(m,l){(l||!s.readyState)&&(console.log("abort!"),s.onload=null,s=void 0,!l&&i&&setTimeout(i,0))},s.src=e,s.integrity=o,s.crossOrigin="anonymous",document.head.appendChild(s)}},Ht=e=>{let{text:o,parentNode:i,id:u,className:s,type:m,src:l,dataset:c}=e,T=o||e.textContent||e.innerHTML||"";i.removeChild(e);let y=document.createElement("script");u&&(y.id=u),s&&(y.className=s),m&&(y.type=m),l&&(y.src=l,y.async=!1),c.pjax!==void 0&&(y.dataset.pjax=""),T!==""&&y.appendChild(document.createTextNode(T)),i.appendChild(y)};var J=(e,o)=>{let i=b[e][o].url;return i.startsWith("https")?i:i.startsWith("http")?(console.warn(`Upgrade vendor ${e}/${o} to HTTPS, Please use HTTPS url instead of HTTP url.`),i.replace("http","https")):`/${i}`},At=(e,o,i)=>{LOCAL[e]&&Y(J("js",e),b.js[e].sri,o||function(){window[e]=!0},i||window[e])},Bt=(e,o)=>{if(!window["css"+e]&&LOCAL[e]){let i={rel:"stylesheet",href:J("css",e)},u=b.css[e];u.local||(i.integrity=u.sri,i.crossOrigin="anonymous"),f(document.head,"link",i),window["css"+e]=!0}};export{C as a,Z as b,f as c,ve as d,ye as e,B as f,be as g,w as h,_ as i,b as j,Le as k,R as l,ee as m,N as n,te as o,j as p,Me as q,Ce as r,we as s,ne as t,He as u,Ne as v,Se as w,ke as x,Oe as y,re as z,oe as A,se as B,ie as C,ae as D,le as E,ce as F,ue as G,Ae as H,Be as I,qe as J,Pe as K,_e as L,je as M,De as N,W as O,We as P,Fe as Q,$e as R,Re as S,Ue as T,Ge as U,Ye as V,Je as W,Ze as X,H as Y,g as Z,U as _,lt as $,ct as aa,dt as ba,G as ca,Mt as da,Ht as ea,At as fa,Bt as ga};
/*! For license information please see chunk-TPQPHYEZ.js.LEGAL.txt */
