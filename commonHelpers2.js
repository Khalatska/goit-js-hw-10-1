import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */import{i as o}from"./assets/vendor-32231325.js";const a=document.querySelector(".form");a.addEventListener("submit",l);function l(i){i.preventDefault();const s=document.querySelector('input[name="delay"]'),m=document.querySelector('input[name="state"]:checked'),e=s.value,n=m.value;new Promise((t,r)=>{setTimeout(()=>{n==="fulfilled"?t(e):r(e)},e)}).then(t=>{o.show({message:`✅ Fulfilled promise in ${e}ms`,backgroundColor:"#59A10D",messageColor:"#FFF",messageSize:"16px",position:"topRight",maxWidth:"383px",titleLineHeight:"1.5"})}).catch(t=>{o.show({message:`❌ Rejected promise in ${e}ms`,backgroundColor:"#EF4040",messageColor:"#FFF",messageSize:"16px",position:"topRight",maxWidth:"302px",titleLineHeight:"1.5"})})}
//# sourceMappingURL=commonHelpers2.js.map