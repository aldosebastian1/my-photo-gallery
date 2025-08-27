function upDateAlt(previewPic) {
  console.log("using querySelector method");
  var x = document.querySelector("#gambar");
  x.innerHTML = previewPic.alt;
  x.style.backgroundImage = "url('" + previewPic.src + "')";
}

function upDate(previewPic) {
  console.log("mouse is over image");

  console.log("alt:", previewPic.alt);
  console.log("src:", previewPic.src);

  var x = document.getElementById("gambar");
  x.innerHTML = previewPic.alt;

  console.log("text updated to:", x.innerHTML);

  x.style.backgroundImage = "url('" + previewPic.src + "')";

  console.log("background set to:", x.style.backgroundImage);
}

function unDo() {
  console.log("mouse left image");

  var x = document.getElementById("gambar");

  x.style.backgroundImage = "url('')";

  x.innerHTML =
    "Arahkan kursor ke gambar di bawah ini untuk ditampilkan di sini.";
}
