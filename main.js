(()=>{"use strict";const e=document.body,t=document.createElement("menubar-container"),n=document.createElement("article-container");t.addEventListener("requestContent",(e=>{let t=e.detail.path;t="/"+t,n.renderArticleByPath(t)})),e.append(t,n)})();