//moble nagitors modal window
const mShower = document.getElementById("m-n-shower");
const mWindow = document.getElementById("modal-window");
const mCloser = document.getElementById("m-w-close");

mShower.addEventListener("click", function() {
  if(this.classList.contains("show")) {
     this.classList.remove("show");
     mWindow.className = "close";
  } else {
    this.classList.add("show");
    mWindow.className = "active";
  }
}, false);

mCloser.addEventListener("click", function() {
  mShower.classList.remove("show");
  mWindow.className = "close";
});
