!function(e){function r(e){for(var r=[],t=0,n=e.length;n>t;t++)-1==p.call(r,e[t])&&r.push(e[t]);return r}function t(e,t,n,o){if("string"!=typeof e)throw"System.register provided no module name";var a;a="boolean"==typeof n?{declarative:!1,deps:t,execute:o,executingRequire:n}:{declarative:!0,deps:t,declare:n},a.name=e,e in c||(c[e]=a),a.deps=r(a.deps),a.normalizedDeps=a.deps}function n(e,r){if(r[e.groupIndex]=r[e.groupIndex]||[],-1==p.call(r[e.groupIndex],e)){r[e.groupIndex].push(e);for(var t=0,o=e.normalizedDeps.length;o>t;t++){var a=e.normalizedDeps[t],u=c[a];if(u&&!u.evaluated){var d=e.groupIndex+(u.declarative!=e.declarative);if(void 0===u.groupIndex||u.groupIndex<d){if(void 0!==u.groupIndex&&(r[u.groupIndex].splice(p.call(r[u.groupIndex],u),1),0==r[u.groupIndex].length))throw new TypeError("Mixed dependency cycle detected");u.groupIndex=d}n(u,r)}}}}function o(e){var r=c[e];r.groupIndex=0;var t=[];n(r,t);for(var o=!!r.declarative==t.length%2,a=t.length-1;a>=0;a--){for(var d=t[a],l=0;l<d.length;l++){var s=d[l];o?u(s):i(s)}o=!o}}function a(e){return m[e]||(m[e]={name:e,dependencies:[],exports:{},importers:[]})}function u(r){if(!r.module){var t=r.module=a(r.name),n=r.module.exports,o=r.declare.call(e,function(e,r){t.locked=!0,n[e]=r;for(var o=0,a=t.importers.length;a>o;o++){var u=t.importers[o];if(!u.locked){var d=p.call(u.dependencies,t);u.setters[d](n)}}return t.locked=!1,r});if(t.setters=o.setters,t.execute=o.execute,!t.setters||!t.execute)throw new TypeError("Invalid System.register form for "+r.name);for(var d=0,i=r.normalizedDeps.length;i>d;d++){var l,f=r.normalizedDeps[d],v=c[f],g=m[f];g?l=g.exports:v&&!v.declarative?l=v.module.exports&&v.module.exports.__esModule?v.module.exports:{"default":v.module.exports,__useDefault:!0}:v?(u(v),g=v.module,l=g.exports):l=s(f),g&&g.importers?(g.importers.push(t),t.dependencies.push(g)):t.dependencies.push(null),t.setters[d]&&t.setters[d](l)}}}function d(e){var r,t=c[e];if(t)t.declarative?l(e,[]):t.evaluated||i(t),r=t.module.exports;else if(r=s(e),!r)throw new Error("Unable to load dependency "+e+".");return(!t||t.declarative)&&r&&r.__useDefault?r["default"]:r}function i(r){if(!r.module){var t={},n=r.module={exports:t,id:r.name};if(!r.executingRequire)for(var o=0,a=r.normalizedDeps.length;a>o;o++){var u=r.normalizedDeps[o],l=c[u];l&&i(l)}r.evaluated=!0;var s=r.execute.call(e,function(e){for(var t=0,n=r.deps.length;n>t;t++)if(r.deps[t]==e)return d(r.normalizedDeps[t]);throw new TypeError("Module "+e+" not declared as a dependency.")},t,n);s&&(n.exports=s)}}function l(r,t){var n=c[r];if(n&&!n.evaluated&&n.declarative){t.push(r);for(var o=0,a=n.normalizedDeps.length;a>o;o++){var u=n.normalizedDeps[o];-1==p.call(t,u)&&(c[u]?l(u,t):s(u))}n.evaluated||(n.evaluated=!0,n.module.execute.call(e))}}function s(e){if(f[e])return f[e];var r=c[e];if(!r)throw"Module "+e+" not present.";o(e),l(e,[]),c[e]=void 0;var t=r.module.exports;return(!t||!r.declarative&&t.__esModule!==!0)&&(t={"default":t,__useDefault:!0}),f[e]=t}var c={},p=Array.prototype.indexOf||function(e){for(var r=0,t=this.length;t>r;r++)if(this[r]===e)return r;return-1},m={},f={};return function(r,n){var o,o={register:t,get:s,set:function(e,r){f[e]=r},newModule:function(e){return e},global:e};o.set("@empty",{}),n(o);for(var a=0;a<r.length;a++)s(r[a])}}("undefined"!=typeof window?window:global)(["dist/main"],function(e){!function(){function r(){}r.amd={},e.register("github:curran/jspm-mocha-example@master/myModule",[],!1,function(e,r,t){return function(){return"myModule works!"}.call(this)})}(),function(){function r(){}r.amd={},e.register("github:curran/jspm-mocha-example@master",["github:curran/jspm-mocha-example@master/myModule"],!1,function(e,r,t){return function(e){return e}.call(this,e("github:curran/jspm-mocha-example@master/myModule"))})}(),function(){function r(){}r.amd={},e.register("dist/main",["github:curran/jspm-mocha-example@master"],!1,function(e,r,t){return function(e){document.getElementById("output").innerHTML=e}.call(this,e("github:curran/jspm-mocha-example@master"))})}()});
//# sourceMappingURL=build.js.map