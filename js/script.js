const collectBookInfo = document.querySelector(".collectBookInfo");

document.addEventListener("keydown", function (event) {
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
  }
});

let userBook = {
  title: "",
  pages: null,
  readPages: null,
  pagesRemaining: null,
  daysRemaining: null,
};

let userBookInfoDiv = document.querySelector(".userBookInfo");
let message = "";

function hide(element) {
  element.style.visibility = "hidden";
  element.style.zIndex = "-10";
}

function show(element) {
  element.style.visibility = "visible";
}

function getInputValue(element) {
  return element.value;
}

function print(element, message) {
  element.innerHTML = message;
}

function formFinished() {
  greenBorder(userBookInfoDiv);
  greenBorder(userBookInfoDiv.querySelector("#userReadPages"));
  greenBorder(userBookInfoDiv.querySelector("#userBookPages"));
  greenBorder(userBookInfoDiv.querySelector("#userBookTitle"));
  userBook.pagesRemaining = userBook.pages - userBook.readPages;
  userBook.daysRemaining = Math.ceil(userBook.pagesRemaining / 15);
  message = `You will finish this book in: ${userBook.daysRemaining} days!`;
  let daysUntilDoneDiv = document.querySelector(".daysUntilDone");
  print(daysUntilDoneDiv, message);
  show(daysUntilDoneDiv);
}

function greenBorder(element) {
  element.style.borderColor = "lightgreen";
}

function getTitle() {
  let getTitleDiv = document.querySelector("#div-getTitle");
  userBook.title = getInputValue(getTitleDiv.querySelector("#title"));
  let titleOutputDiv = userBookInfoDiv.querySelector("#userBookTitle");
  message = `My Book: ${userBook.title}`;
  print(titleOutputDiv, message);
  hide(getTitleDiv);
  show(document.querySelector("#div-bookPages"));
}

function getBookPages() {
  let getPagesDiv = document.querySelector("#div-bookPages");
  userBook.pages = +getInputValue(getPagesDiv.querySelector("#bookPages"));
  if (userBook.pages == 0) {
    alert("Please input a valid number");
  } else {
    let pagesOutputDiv = userBookInfoDiv.querySelector("#userBookPages");
    message = `Pages: ${userBook.pages}`;
    print(pagesOutputDiv, message);
    hide(getPagesDiv);
    show(document.querySelector("#div-readPages"));
  }
}

function getPagesRead() {
  let getReadPagesDiv = document.querySelector("#div-readPages");
  userBook.readPages = +getInputValue(
    getReadPagesDiv.querySelector("#readPages")
  );
  if (userBook.readPages >= userBook.pages) {
    alert("Seems like you have finished that book already!");
  } else {
    let readPagesOutputDiv = userBookInfoDiv.querySelector("#userReadPages");
    message = `Pages Read: ${userBook.readPages}`;
    print(readPagesOutputDiv, message);
    hide(getReadPagesDiv);
    formFinished();
  }
}

//document.getElementById('div-readPages').style.visibility="visible";

/*
$(document).ready(function(){
  $.ajax({
    type:"GET", 
    url: "https://www.goodreads.com/search.xml?key=tfk1JZsNCRbRtlZ99gcNkg&q=?key=tfk1JZsNCRbRtlZ99gcNkg&q=Ender%27s+Game",
    dataType: "xml",
    success:function(data){
      console.log(data);
    }
  });
});
*/
