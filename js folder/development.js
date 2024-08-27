
function Post(img, alt, title, link){
    this.img = img;
    this.alt = alt;
    this.title = title;
    this.link = link;

    this.dpost = function () {
       document.getElementById('d-works').innerHTML +=  `
       <article class="d-atl">
        <figure>
            <img src="${this.img}" alt="${this.alt} " class="d-a-image" />
            <figcaption>
                <h3 class="d-a-cap cap-head">${this.title} </h3>
            </figcaption>
            <a href="${this.link} " class="d-a-links"> visit <i class="icon-3 fa-brands fa-github"></i>  </a>
        </figure>`
    }
}

let img1 = 'img/travel safe 2.jpg',
alt1 = 'development work image 1',
title1 = 'Travel safe',
link1 = 'https://github.com/Ismailmb24/travel-safe';

const post1 = new Post(img1, alt1, title1, link1);
post1.dpost();


let img2 = 'img/a-z 4.jpg',
alt2 = 'development work image 2',
title2 = 'A to Z',
link2 = 'https://github.com/Ismailmb24/a-z';

const post2 = new Post(img2, alt2, title2, link2);
post2.dpost();


let img3 = 'img/va 2.jpg',
alt3 = 'development work image 3',
title3 = 'Visual art',
link3 = 'https://github.com/Ismailmb24/visual-art';

const post3 = new Post(img3, alt3, title3, link3);
post3.dpost();


//development works done
let dwDone = 3;
const dwHolder = document.getElementById('dw-r-amount');
dwHolder.innerHTML = `<span class="r-title">Projects done:</span> <br /> <span class="r-no">0${dwDone}</span>`;