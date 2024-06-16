const  i=document.querySelector("input");
const ux=document.querySelector("ol");

function bx(){
    if(i.value ===""){
      alert("hello")
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=i.value;
        ux.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="-";
        li.appendChild(span)
    }
    i.value="";
    sava()
};

ux.addEventListener("click",(x)=>{
 if(x.target.tagName ==="LI"){
    x.target.classList.toggle("c");
    sava()
 }
 else if(x.target.tagName ==="SPAN"){
    x.target.parentElement.remove();
    sava()
 }
},false)

function sava(){
    localStorage.setItem("data",ux.innerHTML);
}
function data(){
    ux.innerHTML=localStorage.getItem("data");
}
data();