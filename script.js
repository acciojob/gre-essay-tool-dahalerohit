//your code here
let textarea = document.getElementById("evaluatedText");
let wordCount = document.getElementById("wordCount");

textarea.addEventListener("input", function () {
  const str = textarea.value.trim();

  if (str === "") {
    wordCount.innerText = 0;
  } else {
    wordCount.innerText = str.split(/\s+/).length;
  }
});


