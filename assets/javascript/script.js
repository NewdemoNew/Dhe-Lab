// far scomparire freccia su e farla apparire solo a metà pagina
const su=document.getElementById('up');
document.addEventListener('scroll', ()=>{
    const half= document.documentElement.scrollHeight / 5;
    if(window.scrollY > half){
        su.style.display= 'block';
    }else{
        su.style.display ="none";
    }
});
// ----------------------------------------------------------
// chiusura menu hamburger appena cliccato

const menu= document.querySelector('.menu-ham');
const alink=document.querySelectorAll('.menu-list a');
alink.forEach(link=>{
    link.addEventListener('click', ()=>{
        menu.removeAttribute('open');
   })
});
