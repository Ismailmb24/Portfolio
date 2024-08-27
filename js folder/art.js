(function() {
     const gShower = document.getElementById("s-g-shower");
    const gallery = document.getElementById("gallery");
    const sub_gShower = document.getElementsByClassName("d-c-link");
   gShower.addEventListener("click", () => {
        gallery.className = "active";
        modal.open({content: gallery, width: "90%", height: "90%" });
   }, false);

   for(let i = 0; i < sub_gShower.length; i++) {
     sub_gShower[i].addEventListener("click", () => {
          gallery.className = "active";
          modal.open({content: gallery, width: "90%", height: "90%" });
     }, false);
   }
} ());