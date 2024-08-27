let current
let request;
var cThumb;
let cache = {};
const frame = document.getElementById("g-photo-viewer");
const thumbs = document.getElementsByClassName("thumbs");
const movers = document.getElementsByClassName("photo-movers");

function crossFade(img) {
    if(current){
        frame.firstChild.remove();
    }

    frame.appendChild(img);

    current = img;
}

function photoCaller(e) { 
    let img;
    let src = e.target.src;
    request = src;
    

    e.preventDefault();

    for(let i = 0; i < thumbs.length; i++) {
        if(thumbs[i].classList.contains("active")) {
            thumbs[i].classList.remove("active");
        }
    }

    e.target.classList.add("active");

    if(cache.hasOwnProperty(src)) {
        if(cache[src].isLoading === false) {
            crossFade(cache[src].img);
        }
    } else {
        img = document.createElement("img");
        cache[src] = {
            img,
            isLoading: true
        }

        img.addEventListener("load", () => {
            frame.appendChild(img);
            cache[src].isLoading = false;

            if(request == src) {
                crossFade(img);
            }
        }, false);

        img.setAttribute("src", src)
        img.setAttribute("alt", this.href || "");

        
    }


     
    for(let i = 0; i < thumbs.length; i++) {
        if(thumbs[i] === e.target) {
            cThumb = i;
            break;
        }
    }
    
}

function leftPhotoMover(e) {
    if(cThumb == 0){
        return;
    }
   thumbs[cThumb - 1].click();
}

function rightPhotoMover(e) {
    if(thumbs.length - 1 == cThumb){
        return;
    }
   thumbs[cThumb + 1].click();
}


window.addEventListener("load", () => {
    thumbs[0].click();
}, false)

for(let i = 0; i < thumbs.length; i++) {
    thumbs[i].addEventListener("click", (e) => photoCaller(e), false);
}

movers[0].addEventListener("click", (e) => leftPhotoMover(e), false);
movers[1].addEventListener("click", (e) => rightPhotoMover(e), false);
