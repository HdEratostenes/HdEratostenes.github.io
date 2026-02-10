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
