## 참고용입니다!😀

// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>
const toDoForm = document.querySelector(".js-form"),
  toDoInput = toDoForm.querySelector("input"),
  toPendingList = document.querySelector(".js-PendingList"),
  toFinishList = document.querySelector(".js-FinishList");

const PENDING_LS = "PENDING"; // Pending key
const FINISHED_LS = "FINISHED"; // Finished key

let Pendings = []; // Pendinf 정보가 들어있는 배열
let Finishs = []; // Finished 정보가 들어있는 배열

function changeToFinished(event) {
  const btn = event.target;
  const li = btn.parentNode;
  const span = li.querySelector("span");
  paintToFinished(span.innerText);
  deleteToPendingLi(event);
}

function changeToPending(event) {
  const btn = event.target;
  const li = btn.parentNode;
  const span = li.querySelector("span");
  paintToPending(span.innerText);
  deleteToFinishedLi(event);
}

function deleteToPendingLi(event) {
  const btn = event.target;
  const li = btn.parentNode;
  toPendingList.removeChild(li);
  const cleanToPendings = Pendings.filter(function(toPending) {
    return toPending.id !== parseInt(li.id, 10);
  });
  Pendings = cleanToPendings;
  saveToPending();
}

function deleteToFinishedLi(event) {
  const btn = event.target;
  const li = btn.parentNode;
  toFinishList.removeChild(li);
  const cleanToFinish = Finishs.filter(function(toFinish) {
    return toFinish.id !== parseInt(li.id, 10);
  });
  Finishs = cleanToFinish;
  saveToFinished();
}

function saveToPending() {
  localStorage.setItem(PENDING_LS, JSON.stringify(Pendings));
}

function saveToFinished() {
  localStorage.setItem(FINISHED_LS, JSON.stringify(Finishs));
}

function paintToPending(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const changeBtn = document.createElement("button");
  const span = document.createElement("span");
  const newId = Pendings.length + 1;
  delBtn.innerText = "❌";
  delBtn.addEventListener("click", deleteToPendingLi);
  changeBtn.innerText = "✅";
  changeBtn.addEventListener("click", changeToFinished);
  span.innerText = text;
  li.appendChild(span);
  li.appendChild(delBtn);
  li.appendChild(changeBtn);
  li.id = newId;
  toPendingList.appendChild(li);
  const toPendingObj = {
    text: text,
    id: newId
  };
  Pendings.push(toPendingObj);
  saveToPending();
}

function paintToFinished(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const changeBtn = document.createElement("button");
  const span = document.createElement("span");
  const newId = Finishs.length + 1;
  delBtn.innerText = "❌";
  delBtn.addEventListener("click", deleteToFinishedLi);
  changeBtn.innerText = "⏪";
  changeBtn.addEventListener("click", changeToPending);
  span.innerText = text;
  li.appendChild(span);
  li.appendChild(delBtn);
  li.appendChild(changeBtn);
  li.id = newId;
  toFinishList.appendChild(li);
  const toFinishObj = {
    text: text,
    id: newId
  };
  Finishs.push(toFinishObj);
  saveToFinished();
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToPending(currentValue);
  toDoInput.value = "";
}

function loadToDos() {
  const Pendings = localStorage.getItem(PENDING_LS);
  const Finisheds = localStorage.getItem(FINISHED_LS);
  if (Pendings !== null) {
    const parsedPendings = JSON.parse(Pendings);
    parsedPendings.forEach(function(toDo) {
      paintToPending(toDo.text);
    });
  }
  if (Finisheds !== null) {
    const parsedFinishs = JSON.parse(Finisheds);
    parsedFinishs.forEach(function(toDo) {
      paintToFinished(toDo.text);
    });
  }
}

function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit);
}

init();
