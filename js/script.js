// Function to add tabindex and event handlers dynamically
function addTabindex() {
  console.log("Page loaded - adding tabindex and event handlers");

  var images = document.querySelectorAll(".preview");
  console.log("Found", images.length, "images");

  // Use for loop to add tabindex and event handlers to each image
  for (var i = 0; i < images.length; i++) {
    console.log("Processing image", i + 1);

    // Add tabindex dynamically using JavaScript
    images[i].setAttribute("tabindex", i + 1);
    console.log("Added tabindex", i + 1, "to image", i + 1);

    // Add onfocus event handler
    images[i].onfocus = function () {
      console.log("Focus event triggered on image");
      console.log("Focused image alt:", this.alt);
      console.log("Focused image src:", this.src);
      upDate(this);
    };

    // Add onblur event handler
    images[i].onblur = function () {
      console.log("Blur event triggered - focus lost");
      unDo();
    };
  }

  console.log("Finished adding tabindex and event handlers to all images");
}

// Alternative function using document.querySelector (same functionality)
function upDateAlt(previewPic) {
  console.log("using querySelector method");
  var x = document.querySelector("#gambar");
  x.innerHTML = previewPic.alt;
  x.style.backgroundImage = "url('" + previewPic.src + "')";
}

function upDate(previewPic) {
  // check if mouse over works
  console.log("mouse is over image");

  // show what we got from the image
  console.log("alt:", previewPic.alt);
  console.log("src:", previewPic.src);

  // change the text using document.getElementById
  var x = document.getElementById("gambar");
  x.innerHTML = previewPic.alt;

  // check work - verify text changed
  console.log("text updated to:", x.innerHTML);

  // change background image using document.getElementById
  x.style.backgroundImage = "url('" + previewPic.src + "')";

  // check work - verify background changed
  console.log("background set to:", x.style.backgroundImage);
}

function unDo() {
  // check if mouse out works
  console.log("mouse left image");

  // get the main div (could also use document.querySelector('#gambar'))
  var x = document.getElementById("gambar");

  // reset background to empty
  x.style.backgroundImage = "url('')";

  // reset text to original
  x.innerHTML =
    "Arahkan kursor ke gambar di bawah ini untuk ditampilkan di sini.";
}
