let bookPages;

function getTitle(){
	let bookTitle=document.getElementById("title").value;
	document.querySelector('#userBookTitle').innerHTML = `My Book: ${bookTitle}`
	document.getElementById('div-getTitle').style.visibility="hidden";
	document.getElementById('div-getTitle').style.zIndex="-10";
	document.getElementById('div-bookPages').style.visibility="visible";
}

function getBookPages(){
	bookPages=document.getElementById("bookPages").value;
	console.log(isNaN(bookPages))
	console.log(bookPages);
	if(bookPages==""){
		alert("Please input a number");
	}
	else{
	document.querySelector('#userBookPages').innerHTML = `Pages: ${bookPages}`
	document.getElementById('div-bookPages').style.visibility="hidden";
	document.getElementById('div-bookPages').style.zIndex="-10";
	document.getElementById('div-readPages').style.visibility="visible";
}}

function getPagesRead(){
	let readPages=document.getElementById("readPages").value;
	let bookPages=document.getElementById("bookPages").value;
	if (readPages>=bookPages){
		alert("Seems like you have finished that book already!")
	}
	else{
	document.querySelector('#userReadPages').innerHTML = `Pages Read: ${readPages}`
	document.getElementById('div-readPages').style.visibility="hidden";
	document.getElementById('div-readPages').style.zIndex="-10";
	document.querySelector('div.userBookInfo').style.borderColor="lightgreen";
	document.getElementById('userReadPages').style.borderColor="lightgreen";
	document.getElementById('userBookPages').style.borderColor="lightgreen";
	document.getElementById('userBookTitle').style.borderColor="lightgreen";
	let pagesRemaining=bookPages-readPages;
	let daysRemaining=Math.ceil(pagesRemaining/15);
	document.querySelector('div.daysUntilDone').innerHTML = `You will finish this book in: ${daysRemaining} days!`
	document.querySelector('div.daysUntilDone').style.visibility="visible";
	}





	//document.getElementById('div-readPages').style.visibility="visible";
}




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