const header = document.querySelector('#menu')
const navHeight = header.offsetHeight

function changeHeaderWhenScroll(){

    if(window.scrollY >= navHeight){
        header.classList.add('scroll')
    }

    else{
        header.classList.remove('scroll')
    }
}


const backToUpButtton = document.querySelector('.back-to-up')
const footer = document.querySelector('.footer')


function backToUp(){

if (this.window.scrollY >= 160){
    backToUpButtton.classList.add('up')
}
else{
    backToUpButtton.classList.remove('up')
}
}


window.addEventListener('scroll', function(){
    changeHeaderWhenScroll()
    backToUp()
})