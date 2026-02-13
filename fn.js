function showPage(pageId){
    document.querySelectorAll('.page').forEach(page =>{
        page.classList.remove('active');
    });
    document.getElementById(pageId).classList.add('active');
    
}
function menufun(){
    const buttons = document.getElementById("textbuttons");
    buttons.classList.toggle("hidden");
}
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
