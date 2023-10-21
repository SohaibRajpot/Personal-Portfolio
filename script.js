let words = document.querySelectorAll(".word"); words.forEach((word)=>{
    let letters = word.textContent.split(""); 
    word.textContent=""; 
    letters.forEach((letter)=>{
    let span = document.createElement("span"); 
    span.textContent = letter;
     span.className = "letter";
     word.append(span);
    });
    });
    let currentWordIndex = 0;
    let maxWordIndex = words. length -1;
    words[currentWordIndex].style.opacity="1";

 
   let changeText = ()=>{
       let currentWord = words [currentWordIndex];
       let nextWord = currentWordIndex === maxWordIndex ? words[0]: words[currentWordIndex + 1];

Array.from(currentWord.children).forEach((letter, i)=>{
     setTimeout(()=>{
          letter.className = "letter out";
         },i * 80);
});
nextWord.style.opacity="1";
Array.from(nextWord.children).forEach((letter,i)=>{
       letter.className = "letter behind";
        setTimeout(()=>{
letter.className = "letter in";
   },340 + i * 80);
});

currentWordIndex = currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
};

changeText();
setInterval(changeText, 3000)



// cricles js 

const circles = document.querySelectorAll('.circle');
circles.forEach((elem) => {
    var dots = parseInt(elem.getAttribute("data-dots")); // Parse to integer
    var marked = parseInt(elem.getAttribute("data-percent")); // Parse to integer
    var percent = Math.floor((dots * marked) / 100);
    var points = "";
    var rotate = 360 / dots;

    for (let i = 0; i < dots; i++) {
        points += `<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`; // Added backticks
    }
    elem.innerHTML = points;

    const pointsMarked = elem.querySelectorAll('.points');
    for(let i = 0; i<percent ; i++){
        pointsMarked[i].classList.add('marked')
    }
});

// minup Selection
var mixer = mixitup('.portfolio-gallery');

// scrollbar js-------------

let menuLi = document.querySelectorAll('header ul li a');
let sections = document.querySelectorAll('section');

function activeMenu() {
  let scrollY = window.scrollY + 97;  // Adjusted scroll position
  let len = sections.length;
  
  while (len-- && scrollY < sections[len].offsetTop) {
    menuLi.forEach(item => item.classList.remove("active"));
  }
  
  if (len >= 0) {
    menuLi[len].classList.add("active");
  }
}

activeMenu();
window.addEventListener("scroll", activeMenu);

// activeMenu js =------
const header = document.querySelector("header");

window.addEventListener("scroll", function() {
  header.classList.toggle("sticky", window.scrollY > 50);
});

// js =------

let menuIcon = document.querySelector("#menu-icons");
let navlist = document.querySelector(".navlist");

menuIcon.onclick = () => {
    menuIcon.classList.toggle("bx-x");
    navlist.classList.toggle("open");
};

window.onscroll = () => {
  menuIcon.classList.remove("bx-x");
  navlist.classList.remove("open");
};



