(this["webpackJsonpreact-color"]=this["webpackJsonpreact-color"]||[]).push([[0],{13:function(e,t,n){},24:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/sound1.87567b75.mp3"},25:function(e,t,n){},27:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),r=n(4),a=n.n(r),o=(n(13),n(2)),i=n(7),u=n.n(i),j=n(5),l=n.n(j),d=n(6),b=n(0),f=function(e){var t=e.shade,n=e.onColorCopy,s=Object(c.useState)(!1),r=Object(o.a)(s,2),a=r[0],i=r[1];Object(c.useEffect)((function(){var e;if(1==a)return e=setInterval((function(){i(!1)}),1500),function(){clearInterval(e)}}),[a]);return Object(b.jsx)(d.CopyToClipboard,{text:t.hexString(),onCopy:function(){return i(!0),void n()},children:Object(b.jsx)("div",{className:"shade",style:{backgroundColor:t.hexString()},children:a?Object(b.jsx)("span",{className:"copied",children:"copied!"}):Object(b.jsx)("span",{children:t.hexString()})})})},h=function(e){var t=e.color,s=Object(c.useState)([]),r=Object(o.a)(s,2),a=r[0],i=r[1],j=Object(c.useRef)();Object(c.useEffect)((function(){l()(t)&&d()}),[t]);var d=function(){var e=new u.a(t).shades(1);i(e)},h=function(){j.current.play()};return Object(b.jsxs)("div",{className:"shades",children:[Object(b.jsx)("audio",{ref:j,src:n(24)}),a.map((function(e){return Object(b.jsx)(f,{shade:e,onColorCopy:h})}))]})},O=function(e){return Object(b.jsxs)("div",{className:"shade-search",children:[Object(b.jsx)("div",{className:"emojis",children:"\ud83c\udfa1\ud83c\udfa8\ud83c\udfe2\ud83c\udfa1\ud83c\udfa8"}),Object(b.jsx)("input",{type:"text",className:"shade-input",value:e.color,onChange:function(t){return e.onInputChange(t.target.value)}}),Object(b.jsx)("div",{className:"emojis",children:"\ud83c\udfa1\ud83c\udfa8\ud83c\udfe2\ud83c\udfa1\ud83c\udfa8"})]})},p=(n(25),n(8)),x=n.n(p);var v=function(){var e=Object(c.useState)("#000"),t=Object(o.a)(e,2),n=t[0],s=t[1];return Object(c.useEffect)((function(){s(x()())}),[]),Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(O,{color:n,onInputChange:function(e){s(e)}}),Object(b.jsx)(h,{color:n})]})};a.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(v,{})}),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.e964601b.chunk.js.map