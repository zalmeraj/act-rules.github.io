(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{AD4l:function(e,t,n){"use strict";n.r(t),n.d(t,"query",(function(){return m})),n.d(t,"filterByConsistency",(function(){return u}));n("Z2Ku"),n("L9s1");var a=n("q1tI"),r=n.n(a),l=n("Bl7J"),i=n("vrFN"),c=n("JPpi"),o=n("qFzy");n("wcru");t.default=function(e){var t=e.location,n=e.data.sitePage.context,a=n.title,m=n.implementerData,s=JSON.parse(m),p=s.actMapping.every((function(e){return!1===e.complete})),d=u(s.actMapping,["consistent","partially-consistent"]);return p?r.a.createElement(l.a,{location:t},r.a.createElement(i.a,{title:a}),r.a.createElement("section",{className:"page-implementer"},r.a.createElement("h1",null,a),r.a.createElement(c.a,{cls:"invalid",title:"Incomplete Implementation",body:"All implementations provided are incomplete. Kindly submit an amended implementation report."}))):r.a.createElement(l.a,{location:t},r.a.createElement(i.a,{title:a}),r.a.createElement("section",{className:"page-implementer"},r.a.createElement("h1",null,a),r.a.createElement(o.a,{mapping:d,showIncomplete:!1})))};var m="2362017837";function u(e,t){return e.filter((function(e){var n=e.consistency;return t.includes(n)}))}},UExd:function(e,t,n){var a=n("nh4g"),r=n("DVgA"),l=n("aCFj"),i=n("UqcF").f;e.exports=function(e){return function(t){for(var n,c=l(t),o=r(c),m=o.length,u=0,s=[];m>u;)n=o[u++],a&&!i.call(c,n)||s.push(e?[n,c[n]]:c[n]);return s}}},hhXQ:function(e,t,n){var a=n("XKFU"),r=n("UExd")(!1);a(a.S,"Object",{values:function(e){return r(e)}})},qFzy:function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a),l=n("Wbzz"),i=n("JPpi"),c=(n("91GP"),n("rE2o"),n("ioFf"),n("rGqo"),n("yt8O"),n("Btvt"),n("hhXQ"),n("Ppnf")),o=n.n(c),m=function(e){var t=e.ruleId,n=e.implementations,a=void 0===n?[]:n,i=e.filter,c=void 0===i?u:i;return r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Testcase Url"),r.a.createElement("th",null,"Expected"),a.map((function(e,t){var n=e.implementationId;return r.a.createElement("th",{key:n+"- "+t},n)})))),r.a.createElement("tbody",null,Object.values(function(e,t,n){var a={},r=t.filter(n),l=Array.isArray(r),i=0;for(r=l?r:r[Symbol.iterator]();;){var c;if(l){if(i>=r.length)break;c=r[i++]}else{if((i=r.next()).done)break;c=i.value}var m=c,u=m.implementationId,s=m.findings,p=Array.isArray(s),d=0;for(s=p?s:s[Symbol.iterator]();;){var f;if(p){if(d>=s.length)break;f=s[d++]}else{if((d=s.next()).done)break;f=d.value}var v,E,y=f,b=y.url,h=y.testcase,g=y.expected,I=y.actual;if(a[h])a[h]=Object.assign({},a[h],{actuals:Object.assign({},a[h].actuals,(v={},v[u]=I,v))});else a[h]={url:b,testcase:h,relativeUrl:"/rules/"+e+"/#"+o()(h),expected:g,actuals:(E={},E[u]=I,E)}}}return a}(t,a,c)).map((function(e,t){var n=e.testcase,i=e.url,c=e.relativeUrl,o=e.expected,m=e.actuals;return r.a.createElement("tr",{key:i+"-"+t},r.a.createElement("td",null,r.a.createElement(l.Link,{to:c},n)),r.a.createElement("td",null,o),a.map((function(e,t){var n=e.implementationId;return r.a.createElement("td",{key:n+"-"+i+"="+t},m[n])})))}))))};function u(){return!0}t.a=function(e){var t=e.mapping,n=void 0===t?[]:t,a=e.showIncomplete,c=void 0!==a&&a;return r.a.createElement("div",null,n.map((function(e){var t=e.ruleId,n=e.ruleName,a=e.implementations;return r.a.createElement("div",{key:t},r.a.createElement(l.Link,{to:"/rules/"+t},r.a.createElement("h2",{id:"id-"+t},n)),function(e,t,n){if(!e||!e.length)return r.a.createElement(i.a,{cls:"invalid",title:"No Implementations",body:"Feel free to submit an implementation for this rule."});return r.a.createElement(r.a.Fragment,null,t?r.a.createElement(r.a.Fragment,null,r.a.createElement(i.a,{cls:"invalid",title:"Incomplete Implementation",body:"Listed below are the incomplete assertions. Kindly submit an amended implementation report."}),r.a.createElement(m,{ruleId:n,implementations:e,filter:function(e){return"inconsistent"===e.consistency}})):r.a.createElement(m,{ruleId:n,implementations:e,filter:function(e){return"inconsistent"!==e.consistency}}))}(a,c,t))})))}}}]);
//# sourceMappingURL=component---src-templates-implementer-js-fa42d9320fd238c6bf77.js.map