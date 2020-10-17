const rangeOne = document.getElementById("rangeOne");
const rangeTwo = document.getElementById("rangeTwo");
const rangeThree = document.getElementById("rangeThree");
const myFile = document.getElementById("myFile");
const fileName = document.getElementById("uploadedFile");

function updateSliderOne(slideAmount) {
  rangeOne.innerHTML = slideAmount;
}
function updateSliderTwo(slideAmount) {
  rangeTwo.innerHTML = slideAmount + "%";
}
function updateSliderThree(slideAmount) {
  rangeThree.innerHTML = slideAmount;
}

function uploadFile() {
  let x = myFile.files[0].name;
  uploadedFile.innerHTML = `<span style="color:#000;">${x}</span>`;
}
