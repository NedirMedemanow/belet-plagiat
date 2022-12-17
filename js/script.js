document.addEventListener("click", (e) => {
  let target = e.target;
  toggleBar(target);
});

// retur class
function returKlass(target) {
  let klas = target.className;
  return klas;
}

// find faq parent
function findParent(target) {
  let element = target;
  let answer = element.closest(".faq-element");
  return answer;
}

// close answer
function showAnswer(target) {
  let answer = findParent(target);
  answer.classList.add("show");
}

// close answer
function closeAnswer(target) {
  let answer = findParent(target);
  answer.classList.remove("show");
}

// toggle bar function
function toggleBar(target) {
  let answer = returKlass(target);
  if (answer == "plus") {
    let plus = target;
    showAnswer(target);
    plus.classList.add("hide");
  }
  if (answer == "minus") {
    let minus = target;
    let plus = minus.previousElementSibling;
    closeAnswer(target);
    plus.classList.remove("hide");
  }
}
