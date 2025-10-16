// chiusura del menu hamburger dopo aver cliccato su un link
const menu = document.querySelector('.menu-ham');
const alink= document.querySelectorAll('.menu-list a');
alink.forEach(link => {
    link.addEventListener('click', ()=>{
        menu.removeAttribute('open');

    })
});