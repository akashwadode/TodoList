const btn = document.getElementById("input-btn");
const inputText = document.getElementById("todo-input");
const todoList = document.getElementById("list-container");
const dateInputElement = document.getElementById('date-input-element');
dateInputElement.valueAsDate = new Date();
const myArray = [];
renderTodoList();

/* -------------------------------------------------------------------------- */
/* get value from input and also checks value is null or not         */
/* -------------------------------------------------------------------------- */
function btn_click() {
    if (inputText.value != "") {
        console.log(inputText.value + " " + dateInputElement.value);
        myArray.push({ name: inputText.value, dueDate: dateInputElement.value });

        inputText.value = "";
        renderTodoList();
    } else {
        alert("No text found");
    }
}

/* ------------------ add list item after press 'enter' key ----------------- */
inputText.addEventListener("keypress", function (event) {
    if (event.keyCode === 13 || event.keyCode === 10) {
        btn_click();
    }
});


function renderTodoList() {
    let todoListElements = "";
    for (let i = 0; i < myArray.length; i++) {
        const todoObject = myArray[i];
        const name = todoObject.name;
        const dueDate = todoObject.dueDate;
        const html = `
        <div id="todoTabDiv">
          <div id="todoName">
              ${name} 
          </div>
          <div id="todoDueDate">
              ${dueDate}
          </div>
          <button id="deleteBtn" onclick="myArray.splice(${i},1);renderTodoList(); ">Delete</button>
        </div>`;
      todoListElements += html;
      console.log(todoListElements);
  }

  todoList.innerHTML = todoListElements;
}