(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{14:function(e,t,c){},16:function(e,t,c){},18:function(e,t,c){},19:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c.n(n),a=c(4),i=c.n(a),s=(c(14),c(0)),o=function(e){var t=e.text;return Object(s.jsx)("div",{children:Object(s.jsx)("h1",{children:t})})},d=function(e){var t=e.text;return Object(s.jsx)("header",{className:"AppBar",children:Object(s.jsx)(o,{text:t})})},j=(c(16),function(e){var t=e.children;return Object(s.jsx)("div",{className:"Container",children:t})}),b=function(e){var t=e.children;return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(d,{text:"React. HomeWork-2.1. Feedback."}),Object(s.jsx)(j,{children:t})]})},l=c(5),u=c(6),h=c(7),x=c(9),O=c(8),f=c(2),v=c.n(f),k=function(e){var t=e.title,c=e.children;return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("h2",{children:t}),c]})},p=function(e){var t=e.options,c=e.onLeaveFeedback;return Object(s.jsx)("div",{className:v.a.Feedback__bar,children:Object.keys(t).map((function(e){return Object(s.jsx)("button",{type:"button",onClick:c,children:e[0].toUpperCase()+e.slice(1).toLowerCase()},e)}))})},m=function(e){var t=e.good,c=e.neutral,n=e.bad,r=e.total,a=e.positivePercentage;return Object(s.jsx)(s.Fragment,{children:Object(s.jsxs)("ul",{className:v.a.statistic,children:[Object(s.jsxs)("li",{children:["Good: ",t]}),Object(s.jsxs)("li",{children:["Neutral: ",c]}),Object(s.jsxs)("li",{children:["Bad: ",n]}),Object(s.jsxs)("li",{children:["Total: ",r]}),Object(s.jsxs)("li",{children:["Positive Feedback: ",a,"%"]})]})})},g=function(e){var t=e.message;return Object(s.jsx)("p",{children:t})},F=function(e){Object(x.a)(c,e);var t=Object(O.a)(c);function c(){var e;Object(u.a)(this,c);for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).state={good:0,neutral:0,bad:0},e.HandleImcrement=function(t){var c=t.target.textContent.toLowerCase();e.setState((function(e){for(var t in e)if(t===c)return Object(l.a)({},t,e[t]+1)}))},e}return Object(h.a)(c,[{key:"render",value:function(){var e=this.state,t=e.good,c=e.neutral,n=e.bad,r=t+c+n,a=t?Math.round(100*t/r):0;return Object(s.jsxs)("div",{className:v.a.Feedback,children:[Object(s.jsx)(k,{title:"Plese leave feedback",children:Object(s.jsx)(p,{options:this.state,onLeaveFeedback:this.HandleImcrement})}),Object(s.jsx)(k,{title:"Statistics",children:r?Object(s.jsx)(m,{good:t,neutral:c,bad:n,total:r,positivePercentage:a}):Object(s.jsx)(g,{message:"No feedback given"})})]})}}]),c}(n.Component),_=function(){return Object(s.jsx)(b,{children:Object(s.jsx)(F,{})})};c(17),c(18);i.a.render(Object(s.jsx)(r.a.StrictMode,{children:Object(s.jsx)(_,{})}),document.getElementById("root"))},2:function(e,t,c){e.exports={Feedback:"Feedback_Feedback__tyGcI",Feedback__bar:"Feedback_Feedback__bar__3dqlQ",statistic:"Feedback_statistic__26BsU"}}},[[19,1,2]]]);
//# sourceMappingURL=main.b1326f6f.chunk.js.map