const task=document.getElementById("inputvalue");
const list=document.getElementById("list");


function addtask(){
    if(task.value===''){
        window.alert("Please write something");
    }
    else{
        let li=document.createElement("li");
        li.className="list-element";
        task.value=task.value.slice(0,1).toUpperCase() + task.value.slice(1);
        li.innerHTML=task.value;

        let cross=document.createElement("span");
        cross.innerHTML="\u00d7";
        li.appendChild(cross);

        list.appendChild(li);
        task.value="";
        setdata()
        
    }
}

function handleEnter(event) {
    if (event.key === 'Enter') {
        addtask();
    }
}


list.addEventListener("click",(e) => {
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        setdata()
    }
    else if (e.target.tagName="SPAN"){
        e.target.parentElement.remove();
        setdata()

    }
})

function setdata(){
    localStorage.setItem("data",list.innerHTML);
}

function getdata(){
    list.innerHTML=localStorage.getItem("data");
}

getdata()