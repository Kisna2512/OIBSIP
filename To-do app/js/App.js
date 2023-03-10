showNotes();

let btnimp = document.getElementById("btnimp");

//----
let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function (e) {
  let addTxt = document.getElementById("addTxt");
  let addTitle = document.getElementById("addTitle");

  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    // String into array
    notesObj = JSON.parse(notes);
  }
  var checkBox = document.getElementById("btnimp");
  if (checkBox.checked == true) {
    impbtn = `<h6 style="color:red;">Important Note <h6/>`;
  } else {
    impbtn = "";
  }
  let myObj = {
    title: addTitle.value,
    text: addTxt.value,
    imp: impbtn,
  };
  notesObj.push(myObj);
  console.log(myObj);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  addTxt.value = "";
  addTitle.value = "";
  // console.log(notesObj);
  showNotes();
});
//--

function showNotes() {
  let notes = localStorage.getItem("notes");

  if (notes == null) {
    notesObj = [];
  } else {
    // String into array
    notesObj = JSON.parse(notes);
  }
  let html = "";

  notesObj.forEach(function (element, index) {
    html += `
            <div class="noteCard my-2 mx-2 card" id="ll"  style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title"  >${
                          element.title + " " + element.imp
                        }</h5>
                        <p class="card-text"  > ${element.text}</p>
                        <button id="${index}"onclick="deleteNote(this.id)" class="btn btn-primary">Delete </button>
                    </div>
                </div>`;
  });

  let notesElm = document.getElementById("notes");

  if (notesObj.length != 0) {
    notesElm.innerHTML = html;
  } else {
    notesElm.innerHTML = `Nothing to show! Use "Add a Note" section above to add notes.`;
  }
}

//---

function deleteNote(index) {
  let notes = localStorage.getItem("notes");

  if (notes == null) {
    notesObj = [];
  } else {
    // String into array
    notesObj = JSON.parse(notes);
  }

  notesObj.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  showNotes();
}

// let search = document.getElementById("searchTxt");

// search.addEventListener("input", function () {
//   let inputVal = search.value.toLowerCase();
//   let noteCards = document.getElementsByClassName("noteCard");

//   Array.from(noteCards).forEach(function (element) {
//     let cardTxt = element.getElementsByTagName("p")[0].innerText;
//     if (cardTxt.includes(inputVal)) {
//       element.style.display = "block";
//     } else {
//       element.style.display = "none";
//     }
//     // console.log(cardTxt);});
//   });
// });

let search = document.getElementById("searchTxt");
search.addEventListener("input", function () {
  let inputVal = search.value.toLowerCase();
  // console.log('Input event fired!', inputVal);
  let noteCards = document.getElementsByClassName("noteCard");
  Array.from(noteCards).forEach(function (element) {
    let cardTxt = element.getElementsByTagName("p")[0].innerText;
    if (cardTxt.includes(inputVal)) {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
    // console.log(cardTxt);
  });
});
