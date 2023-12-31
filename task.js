function addTask(){
    var taskinput=document.getElementById("taskinput");
    var tasklist=document.getElementById("tasklist");
    
    var newtask=taskinput.value.trim();
    if(newtask!==''){
        var listitem=document.createElement('li');
        listitem.innerHTML=`
        <span>${newtask}</span>
        <button class="deletebutton" onclick="deletetask(this)">Delete</button>`;
        tasklist.appendChild(listitem);
        taskinput.value="";
    }
}
function deletetask(button){
    var listitem=button.parentNode;
    var tasklist=listitem.parentNode;
    tasklist.removeChild(listitem);
}