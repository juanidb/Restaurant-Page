(()=>{"use strict";const e=e=>{const t=document.createElement("p");return t.innerHTML=e,t.setAttribute("class","paragraph"),t},t=document.getElementById("content"),n=document.createElement("button"),a=document.createElement("button"),i=document.createElement("button");n.innerHTML="Home",a.innerHTML="Menu",i.innerHTML="Contact",t.appendChild(n),t.appendChild(a),t.appendChild(i);let o=document.createElement("div");o.setAttribute("class","home-page"),o.appendChild((e=>{const t=document.createElement("h1");return t.innerHTML="Not a Real Restaurant",t.setAttribute("class","title"),t})()),o.appendChild(e("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.")),o.appendChild(e('Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.')),o.appendChild(e("t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."));const r=((...e)=>{let t=document.createElement("div");t.setAttribute("class","menu-page");let n=document.createElement("h1");n.innerHTML="Restaurant Menu",t.appendChild(n);let a=document.createElement("ul");return e.forEach((e=>{let t=document.createElement("li");t.innerHTML=e,a.appendChild(t)})),t.appendChild(a),t})("bread","cheese","burger","steak","pizza","sandwich","pie"),s=((e,t,n,a)=>{let i=document.createElement("div"),o=document.createElement("h3"),r=document.createElement("h3"),s=document.createElement("h3"),l=document.createElement("h3");return o.innerHTML="Not a Real Restaurant",r.innerHTML="Phone number: +43-688-5559-987",s.innerHTML="Adress: 2962  Hickory Ridge Drive",l.innerHTML="E-mail: 57qtxnd5139@temporary-mail.net",i.appendChild(o),i.appendChild(r),i.appendChild(s),i.appendChild(l),i.setAttribute("class","contact-page"),i})();a.addEventListener("click",(e=>{t.contains(o)?t.replaceChild(r,o):t.contains(s)?t.replaceChild(r,s):t.contains(r)||t.appendChild(r)})),i.addEventListener("click",(e=>{t.contains(r)?t.replaceChild(s,r):t.contains(o)?t.replaceChild(s,o):t.contains(s)||t.appendChild(s)})),n.addEventListener("click",(e=>{t.contains(r)?t.replaceChild(o,r):t.contains(s)?t.replaceChild(o,s):t.contains(o)||t.appendChild(o)}))})();