const todoInput = document.querySelector("#todoInput")
const todoBtn = document.querySelector("#todoBtn")
const todoList = document.querySelector("#todoList")

todoBtn.addEventListener("click", () => {
    const myLi = document.createElement("li")
    myLi.textContent = todoInput.value;
    todoList.appendChild(myLi)
    todoInput.value = ""

})