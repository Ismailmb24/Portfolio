//blog post article function
function Post(title, img, content, alt, link){
    this.title = title;
    this.img = img;
    this.content = content;
    this.alt = alt;
    this.link = link;

    this.bPost = function(){
      document.getElementById('b-post').innerHTML +=  `
       <article class="b-atl">
            <figure>
                <img src="${this.img}" class="b-a-img" alt= "${this.alt}" />
                <figcaption>
                    <h2 class="b-a-head"> ${this.title} </h2>
                    <p class="b-a-pgh"> ${this.content} </p>
                </figcaption>
                <a href="${this.link}" class="b-link">visit</a>
            </figure>
        </article>`

    }

}

let title1 = 'Isma\'il mb'
let content1 = `Hi I am Isma'il Hassan Yusuf. I am web developer, I have some skill apart of web development such as drawing and creativity. 
But I basically professionalize on web development. I have an ambition to be a full stack web developer.`
let alt1 = `post 1 image`;
let link1 = '#';

const post1 = new Post(title1, `img/blog 3.jpg`, content1, alt1, link1);
post1.bPost();


let title2 = 'About clever developers'
let content2 = `Clever developers is an organization built by two student, Ismai'l Hassan MB and Abdulmajid Muhammad. This organization
is all about freelancing on web development and blogging.`
let alt2 = `post 2 image`;
let link2 = '#';

const post2 = new Post(title2, `img/blog 1.jpg`, content2, alt2, link2);
post2.bPost();


let title3 = 'Clever developers builders'
let content3 = `Hi.. I am Abdulmajid Muhammad Bala The design director of clever developers. I am web developer, blogger and also freelancer. 
I am currently focusing on front end web development.`
let alt3 = `post 3 image`;
let link3 = '#';

const post3 = new Post(title3, `img/blog 2.jpeg`, content3, alt3, link3);
post3.bPost();

//blog posts done
let bpAmount = 10;
const pbaHolder = document.getElementById('bw-r-amount');
pbaHolder.innerHTML = `<span class="r-title"> Posts written: </span> <br /> <span class="r-no"> ${bpAmount} </span>`;