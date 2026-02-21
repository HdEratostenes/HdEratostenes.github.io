let currentLanguages = ["spanish", "spanish", "spanish"];
let locations = ["institucionesGeografia", "demografia", "dinamicaPoblacional"];

function changeLanguage(location) {
    const artPageVar = document.querySelector('.artpage');

    let spanishElement = document.getElementById(locations[location]);
    let englishElement = document.getElementById("EN_" + locations[location]);

    if (currentLanguages[location] === "spanish") {
        spanishElement.classList.remove('active');
        englishElement.classList.add('active');
        currentLanguages[location] = "english"; 
    } else {
        spanishElement.classList.add('active');
        englishElement.classList.remove('active');
        currentLanguages[location] = "spanish"; 
    }
}



//this function redirects the visitor directly to the about page
function SelectAbout(){
    document.getElementById("about").classList.add('active');
}
document.addEventListener("DOMContentLoaded", function() {
    SelectAbout();
});
//upon selecting a page on the .topnav class, the others are hidden
function showPage(pageId){
    document.querySelectorAll('.page').forEach(page =>{
        page.classList.remove('active');
    });
    document.getElementById(pageId).classList.add('active');
    
}
//this function hides all other buttons of menu when the menu button is clicked
function menufun(){
    const aboutBT = document.getElementById('aboutbutton');
    const articlesBT = document.getElementById('articlesbutton');
    const mediaBT = document.getElementById('mediabutton');
    if(getComputedStyle(aboutBT).visibility !== 'hidden'){
       hideAnimations(aboutBT, 30);
       hideAnimations(articlesBT, 5);
       hideAnimations(mediaBT, 15);
    }else{
        showAnimations(aboutBT, 30);
        showAnimations(articlesBT, 5);
        showAnimations(mediaBT, 15);
    }
    function hideAnimations(buttonItem, speed){
        let pos = 0;
        const inter = setInterval(() => {
            pos += 10;
            buttonItem.style.right = pos + 'px';
            if(pos >= 50){
                buttonItem.style.visibility = 'hidden';
                clearInterval(inter);
            }
        },speed);
    }
    function showAnimations(buttonItem2, speed2){
        buttonItem2.style.visibility = 'visible';
        let pos2 = 50;
        const inter2 = setInterval(() => {
            pos2 -= 10;
            buttonItem2.style.right = pos2 + 'px';
            if(pos2 <= 0){
                clearInterval(inter2);
            }
        },speed2)
    }
}

//typingeffectand typingeffectbottom both create typing effects for
// the heading pieces of text in the website
var index = 0;
var cuchao = 150;
var text = "Hijos de Eratóstenes";

function typingeffect(){

    if(index < text.length){
        document.getElementById("pageTitle").innerHTML += text.charAt(index);
        index++;
        setTimeout(typingeffect, cuchao);
    }else{
        setTimeout(function(){
            document.getElementById("pageTitle").innerHTML = "";
            index = 0;
            typingeffect();
        }, 4000);
    }
}
document.addEventListener("DOMContentLoaded", function() {
    typingeffect();
});

var index2 = 0;
var cuchao2 = 350;
var text2 = "COBACH 28";

function typingeffectBottom(){

    if(index2 < text2.length){
        document.getElementById("pageSubtitle").innerHTML += text2.charAt(index2);
        index2++;
        setTimeout(typingeffectBottom, cuchao2);
    }else{
        setTimeout(function(){
            document.getElementById("pageSubtitle").innerHTML = "";
            index2 = 0;
            typingeffectBottom();
        }, 4000);
    }
}
document.addEventListener("DOMContentLoaded", function() {
    typingeffectBottom();
});

//the following three functions work as an image carousel for three sets of images
// i was too lazy to implement one that englobed all carousels lmao
function instagramImg(inst){
    const img = document.querySelectorAll(
        "#imgs img"
    );
    var len = img.length;
    var ind = 0;
    for(let i = 0; i < len; i++){
        if(window.getComputedStyle(img[i]).display ==='block'){
            ind = i;
            break;
        }
        console.log(window.getComputedStyle(img[i]).display);
    }
    if(inst === 1 && ind !== len-1){
        (img[ind+1]).style.display = 'block';
        (img[ind]).style.display = 'none';
        
    }else if(inst === -1 && ind !== 0){
        (img[ind-1]).style.display = 'block';
        (img[ind]).style.display = 'none';

    }
}
function instagramImg2(inst){
    const img = document.querySelectorAll(
        "#imgs2 img"
    );
    var len = img.length;
    var ind = 0;
    for(let i = 0; i < len; i++){
        if(window.getComputedStyle(img[i]).display ==='block'){
            ind = i;
            break;
        }
        console.log(window.getComputedStyle(img[i]).display);
    }
    if(inst === 1 && ind !== len-1){
        (img[ind+1]).style.display = 'block';
        (img[ind]).style.display = 'none';
        
    }else if(inst === -1 && ind !== 0){
        (img[ind-1]).style.display = 'block';
        (img[ind]).style.display = 'none';

    }
}
function instagramImg3(inst){
    const img = document.querySelectorAll(
        "#imgs3 img"
    );
    var len = img.length;
    var ind = 0;
    for(let i = 0; i < len; i++){
        if(window.getComputedStyle(img[i]).display ==='block'){
            ind = i;
            break;
        }
        console.log(window.getComputedStyle(img[i]).display);
    }
    if(inst === 1 && ind !== len-1){
        (img[ind+1]).style.display = 'block';
        (img[ind]).style.display = 'none';
        
    }else if(inst === -1 && ind !== 0){
        (img[ind-1]).style.display = 'block';
        (img[ind]).style.display = 'none';

    }
}

function instagramImg4(inst){
    const img = document.querySelectorAll(
        "#imgs4 img"
    );
    var len = img.length;
    var ind = 0;
    for(let i = 0; i < len; i++){
        if(window.getComputedStyle(img[i]).display ==='block'){
            ind = i;
            break;
        }
        console.log(window.getComputedStyle(img[i]).display);
    }
    if(inst === 1 && ind !== len-1){
        (img[ind+1]).style.display = 'block';
        (img[ind]).style.display = 'none';
        
    }else if(inst === -1 && ind !== 0){
        (img[ind-1]).style.display = 'block';
        (img[ind]).style.display = 'none';

    }

}

function instagramImg5(inst){
    const img = document.querySelectorAll(
        "#imgs5 img"
    );
    var len = img.length;
    var ind = 0;
    for(let i = 0; i < len; i++){
        if(window.getComputedStyle(img[i]).display ==='block'){
            ind = i;
            break;
        }
        console.log(window.getComputedStyle(img[i]).display);
    }
    if(inst === 1 && ind !== len-1){
        (img[ind+1]).style.display = 'block';
        (img[ind]).style.display = 'none';
        
    }else if(inst === -1 && ind !== 0){
        (img[ind-1]).style.display = 'block';
        (img[ind]).style.display = 'none';

    }
}
function instagramImg6(inst){
    const img = document.querySelectorAll(
        "#imgs6 img"
    );
    var len = img.length;
    var ind = 0;
    for(let i = 0; i < len; i++){
        if(window.getComputedStyle(img[i]).display ==='block'){
            ind = i;
            break;
        }
        console.log(window.getComputedStyle(img[i]).display);
    }
    if(inst === 1 && ind !== len-1){
        (img[ind+1]).style.display = 'block';
        (img[ind]).style.display = 'none';
        
    }else if(inst === -1 && ind !== 0){
        (img[ind-1]).style.display = 'block';
        (img[ind]).style.display = 'none';

    }
}








