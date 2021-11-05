const todoInput = document.querySelector("#todoInput")
const todoBtn = document.querySelector("#todoBtn")
const todoList = document.querySelector("#todoList")
const doneList = document.querySelector("#doneList")

todoBtn.addEventListener("click", () => {
    const myLi = document.createElement("li")
    myLi.textContent = todoInput.value;
    todoList.appendChild(myLi)

    const changeBtn = document.createElement("button");
    changeBtn.textContent = "change";
    myLi.appendChild(changeBtn);

    changeBtn.addEventListener("click", () => {
        doneList.appendChild(changeBtn.parentElement)
        const deleteBtn = document.createElement("button")
        deleteBtn.textContent = "delete"
        myLi.appendChild(deleteBtn);

        deleteBtn.addEventListener("click", () => {
            deleteBtn.parentElement.remove();
        })

        changeBtn.remove()
    })
    
    todoInput.value = "";
})