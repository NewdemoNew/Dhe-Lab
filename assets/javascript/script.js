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