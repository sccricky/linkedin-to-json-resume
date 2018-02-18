require=function(r,e,n){function t(n,o){function i(r){return t(i.resolve(r))}function f(e){return r[n][1][e]||e}if(!e[n]){if(!r[n]){var c="function"==typeof require&&require;if(!o&&c)return c(n,!0);if(u)return u(n,!0);var l=new Error("Cannot find module '"+n+"'");throw l.code="MODULE_NOT_FOUND",l}i.resolve=f;var s=e[n]=new t.Module(n);r[n][0].call(s.exports,i,s,s.exports)}return e[n].exports}function o(r){this.id=r,this.bundle=t,this.exports={}}var u="function"==typeof require&&require;t.isParcelRequire=!0,t.Module=o,t.modules=r,t.cache=e,t.parent=u;for(var i=0;i<n.length;i++)t(n[i]);return t}({25:[function(require,module,exports) {
var t=null;function r(){return t||(t=e()),t}function e(){try{throw new Error}catch(r){var t=(""+r.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);if(t)return n(t[0])}return"/"}function n(t){return(""+t).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/,"$1")+"/"}exports.getBundleURL=r,exports.getBaseURL=n;
},{}],15:[function(require,module,exports) {
var r=require("./bundle-url").getBundleURL;function e(r){Array.isArray(r)||(r=[r]);var e=r[r.length-1];try{return Promise.resolve(require(e))}catch(e){if("MODULE_NOT_FOUND"===e.code)return new s(function(e,n){t(r).then(e,n)});throw e}}function t(r){var e=r[r.length-1];return Promise.all(r.slice(0,-1).map(u)).then(function(){return require(e)})}var n={};function o(r,e){n[r]=e}module.exports=exports=e,exports.load=t,exports.register=o;var i={};function u(e){var t;if(Array.isArray(e)&&(t=e[1],e=e[0]),i[e])return i[e];var o=(e.substring(e.lastIndexOf(".")+1,e.length)||e).toLowerCase(),u=n[o];return u?i[e]=u(r()+e).then(function(r){return r&&(module.bundle.modules[t]=[function(e,t){t.exports=r},{}]),r}):void 0}function s(r){this.executor=r,this.promise=null}s.prototype.then=function(r,e){return this.promise||(this.promise=new Promise(this.executor).then(r,e))},s.prototype.catch=function(r){return this.promise||(this.promise=new Promise(this.executor).catch(r))};
},{"./bundle-url":25}],9:[function(require,module,exports) {
var e=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,a=!1,i=void 0;try{for(var s,o=e[Symbol.iterator]();!(r=(s=o.next()).done)&&(n.push(s.value),!t||n.length!==t);r=!0);}catch(e){a=!0,i=e}finally{try{!r&&o.return&&o.return()}finally{if(a)throw i}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),t=document.getElementById("filedrag"),n=document.getElementById("fileselect"),r=null;function a(e){e.stopPropagation(),e.preventDefault(),e.target.className="dragover"===e.type?"hover":""}var i=void 0,s=document.querySelector(".download");function o(n){window.ga&&ga("send","event","linkedin-to-json-resume","file-selected"),Promise.all([require("_bundle_loader")(require.resolve("./converter.js")),require("_bundle_loader")(require.resolve("../vendor/moment.js")),require("_bundle_loader")(require.resolve("isomorphic-unzip/zip-browser")),require("_bundle_loader")(require.resolve("./csvtoarray"))]).then(function(o){var c=e(o,4),l=c[0],u=c[1],d=c[2],f=c[3];i=new l.default,a(n);var m=(n.target.files||n.dataTransfer.files)[0];r=m.name;var v=function(e){return new Promise(function(t){d.getEntryData(e,function(e,n){(function(e){return new Promise(function(t){var n=new FileReader;n.onload=function(e){t(e.target.result)},n.readAsText(e)})})(n).then(t)})})};!function(e,t){new d(e).getEntries(function(e,n){t(n)})}(m,function(e){var n=e.map(function(e){switch(!0){case-1!==e.filename.indexOf("Skills.csv"):return v(e).then(function(e){var t=(e=e.replace(/"/g,"")).split("\n");t=t.slice(1,t.length-1),i.processSkills(t)});case-1!==e.filename.indexOf("Education.csv"):return v(e).then(function(e){var t=f(e),n=t.slice(1,t.length-1).map(function(e){return{schoolName:e[0],startDate:u(e[1]).format("YYYY-MM-DD"),endDate:u(e[2]).format("YYYY-MM-DD"),notes:e[3],degree:e[4],activities:e[5]}});i.processEducation(n.sort(function(e,t){return+t.startDate.year-+e.startDate.year||+t.startDate.month-+e.startDate.month}))});case-1!==e.filename.indexOf("Positions.csv"):return v(e).then(function(e){var t=f(e),n=t.slice(1,t.length-1).map(function(e){return{companyName:e[0],title:e[1],description:e[2],location:e[3],startDate:u(e[4],"MMM YYYY").format("YYYY-MM-DD"),endDate:e[5]?u(e[5],"MMM YYYY").format("YYYY-MM-DD"):null}});i.processPosition(n.sort(function(e,t){return+t.startDate.year-+e.startDate.year||+t.startDate.month-+e.startDate.month}))});case-1!==e.filename.indexOf("Languages.csv"):return v(e).then(function(e){var t=f(e),n=t.slice(1,t.length-1).map(function(e){return{name:e[0],proficiency:e[1]}});i.processLanguages(n)});case-1!==e.filename.indexOf("Recommendations Received.csv"):return v(e).then(function(e){var t=f(e),n=t.slice(1,t.length-1).map(function(e){return{recommenderFirstName:e[0],recommenderLastName:e[1],recommenderCompany:e[2],recommenderTitle:e[3],recommendationBody:e[4],recommendationDate:e[5],displayStatus:e[6]}}).filter(function(e){return"VISIBLE"===e.displayStatus});i.processReferences(n)});case-1!==e.filename.indexOf("Profile.csv"):return v(e).then(function(e){var t=f(e),n={firstName:t[1][0],lastName:t[1][1],maidenName:t[1][2],createdDate:t[1][3],address:t[1][4],birthDate:t[1][5],contactInstructions:t[1][6],maritalStatus:t[1][7],headline:t[1][8],summary:t[1][9],industry:t[1][10],association:t[1][11]};i.processProfile(n)});case-1!==e.filename.indexOf("Email Addresses.csv"):return v(e).then(function(e){var t=f(e,"\t"),n=t.slice(1,t.length-1).map(function(e){return{address:e[0],status:e[1],isPrimary:"Yes"===e[2],dateAdded:e[3],dateRemoved:e[4]}}).filter(function(e){return e.isPrimary});n.length&&i.processEmail(n[0])});case-1!==e.filename.indexOf("Interests.csv"):return v(e).then(function(e){var t=f(e),n=[];t.slice(1,t.length-1).forEach(function(e){n=n.concat(e[0].split(","))}),i.processInterests(n)});case-1!==e.filename.indexOf("Projects.csv"):return v(e).then(function(e){var t=f(e),n=t.slice(1,t.length-1).map(function(e){return{title:e[0],startDate:u(e[1]).format("YYYY-MM-DD"),endDate:e[2]?u(e[2]).format("YYYY-MM-DD"):null,description:e[3],url:e[4]}});i.processProjects(n.sort(function(e,t){return+t.startDate.year-+e.startDate.year||+t.startDate.month-+e.startDate.month}))});default:return Promise.resolve([])}});Promise.all(n).then(function(){window.ga&&ga("send","event","linkedin-to-json-resume","file-parsed-success"),t.innerHTML="Dropped! See the resulting JSON Resume at the bottom.";var e=document.getElementById("output");e.innerHTML=JSON.stringify(i.getOutput(),void 0,2),Prism.highlightElement(e),s.style.display="block",document.getElementById("result").style.display="block"})})})}s.addEventListener("click",function(){require("_bundle_loader")(require.resolve("./file.js")).then(function(e){e.default(JSON.stringify(i.getOutput(),void 0,2),"resume.json"),window.ga&&ga("send","event","linkedin-to-json-resume","download-resume")})}),s.style.display="none",n.addEventListener("change",o,!1);var c=new XMLHttpRequest;c.upload?(t.addEventListener("dragover",a,!1),t.addEventListener("dragleave",a,!1),t.addEventListener("drop",o,!1),t.style.display="block"):t.style.display="none",document.getElementById("select-file").addEventListener("click",function(){n.click()});
},{"_bundle_loader":15,"./file.js":[["2415afd344a911e89b087a590046c2bf.js",17],17],"./converter.js":[["8eec9bcaf6d9a5e1c07d9a43700eaf98.js",18],18],"../vendor/moment.js":[["a3c7103a3666a6f63ec32f3af119baa8.js",19],19],"isomorphic-unzip/zip-browser":[["isomorphic-unzip.js",26],26],"./csvtoarray":[["c1d5dce6aa5d08c62e62fb5ec05b5382.js",20],20]}],35:[function(require,module,exports) {
module.exports=function(n){return new Promise(function(e,o){var r=document.createElement("script");r.async=!0,r.type="text/javascript",r.charset="utf-8",r.src=n,r.onerror=function(n){r.onerror=r.onload=null,o(n)},r.onload=function(){r.onerror=r.onload=null,e()},document.getElementsByTagName("head")[0].appendChild(r)})};
},{}],0:[function(require,module,exports) {
var b=require(15);b.register("js",require(35));
},{}]},{},[0,9])