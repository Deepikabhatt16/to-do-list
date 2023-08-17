const inputBox=document.getElementById("input-box");
const list=document.getElementById("list");
function addTask() {
if(inputBox.value==='')
{
    alert("you must have to type something");
}
else
{ let li=document.createElement("li");
li.innerHTML=inputBox.value;
list.appendChild(li);


}
inputBox.value="";
savedata();
}

list.addEventListener("click",function(e)
{
    if(e.target.tagName==="LI")
    {
        e.target.classList.toggle("task");
savedata();
    }
    
},false);
function savedata(){
    localStorage.setItem("data",list.innerHTML);
}