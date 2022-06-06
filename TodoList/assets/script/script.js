let $=document
let addTodo=$.getElementById("addTodo")
let addTodoInput=$.getElementById("addTodoInput")
let ulElem=$.getElementById("ulElem")

function secondAddTodo(inputValue){
    let liElem=$.createElement("li")
    let spanElem=$.createElement("span")
    let iElem=$.createElement("i")
    iElem.className="fa-regular fa-trash-can"
    spanElem.innerHTML=inputValue.trim()
    liElem.append(spanElem,iElem)
    ulElem.append(liElem)
    
    function closeTodo(event){
      event.target.parentElement.remove()  
    }
    iElem.addEventListener("click",closeTodo)
}

function addTodoFunc(event){
    if(event.keyCode===13){
        let inputValue=addTodoInput.value
        addTodoInput.value=""
        if(inputValue){
            secondAddTodo(inputValue)
        }
    }
}
addTodo.addEventListener("keydown",addTodoFunc)