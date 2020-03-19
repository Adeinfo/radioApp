// The code might not be functional enough but it works
// console.clear();
const date = new Date ('December 4, 2019');


function onClickMenu(){
    document.getElementById('menu').classList.toggle('change');
    document.getElementById('nav').classList.toggle('change');
    document.getElementById('menu-bg').classList.toggle('change-bg');
}

// CHANGE RADIO PLAYER IMAGE 
function radioElement(beat){
    let beats = beat.src;
    document.getElementById('radio-image').style.backgroundImage = `url('${beats}')`;
}

