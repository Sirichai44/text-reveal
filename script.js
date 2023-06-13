const contents = document.querySelectorAll('.content');

// console.log(contents);
document.addEventListener('scroll', showText);

function showText(){
    contents.forEach((section) => {
        const imgEl = section.querySelector('img');
        const textEL = section.querySelector('.text');

        const scrollPos = window.pageYOffset;
        const textPos = imgEl.offsetTop + imgEl.offsetHeight / 50;
        if(scrollPos > textPos){
            textEL.classList.add('show-reveal');
        }else{
            textEL.classList.remove('show-reveal');
        }
    });
}