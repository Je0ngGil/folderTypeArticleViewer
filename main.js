(()=>{"use strict";const e=document.body,t=document.createElement("menubar-container"),n=document.createElement("article-container");t.addEventListener("requestContent",(e=>{let t=e.detail.path;n.renderArticleByPath(t)})),e.append(t,n),console.log("내용이 바뀌나?")})();