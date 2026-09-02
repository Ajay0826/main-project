console.log("working");

const todosection = document.querySelector(".todo-section");

const todoform = document.querySelector(".todo-form");
const todoinput = document.querySelector("#todo-input");
const todobtn = document.querySelector("#todo-btn");
const todoul = document.querySelector(".todo-ul");
const limsg = document.querySelector(".limsg");
let count = 0;
const todoularray = [0];
function onbtnClick(e) {
  e.preventDefault();
  const value = todoinput.value.trim();

  if (!value) {
    todoinput.focus();
    return;
  }

  const li = document.createElement("li");
  li.className = "todolist";
  const litext = document.createTextNode(`${value}`);
  const deletebtn = document.createElement("button");
  deletebtn.className = "deletebtn";
  deletebtn.textContent = "❌";

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.className = "todo-checkbox";

  li.appendChild(checkbox);
  if (todoul.contains(limsg)) {
    todoul.removeChild(limsg);
  }
  count++;
  todoularray[count] = count;
  console.log(count, todoularray);

  li.appendChild(litext);
  li.appendChild(deletebtn);
  todoul.appendChild(li);
  todosection.appendChild(todoul);
  todoinput.value = "";

  deletebtn.addEventListener("click", () => {
    todoularray.pop();
    if (todoularray.length == 1) {
      todoul.appendChild(limsg);
      todoul.removeChild(deletebtn.parentElement);
    } else {
      todoul.removeChild(deletebtn.parentElement);
    }
    count--;
  });
}

todobtn.addEventListener("click", onbtnClick);
