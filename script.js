var tarefa=document.getElementById("task")
var lista=document.getElementById("list")

function adicionar(){
  var texto=tarefa.value
  var txt=texto.substring(0,15)
  if(texto!==""){
    var li=document.createElement("li")
    li.innerHTML=`
    <input type="checkbox">
    <span>${txt}</span>
    <button onclick="deletar(this)">Deletar</button>
    `
    lista.appendChild(li)
    tarefa.value=""
}
}

function deletar(button){
  var li=button.parentElement;
  lista.removeChild(li)
}