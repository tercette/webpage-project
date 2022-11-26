var backdrop = document.querySelector('.backdrop');
var modal = document.querySelector('.modal');
var selectPlanButtons = document.querySelectorAll('.plan button');
var noButton = document.querySelector('.modal__action--negative');
var toggleButton = document.querySelector('.toggle-button');
var mobileNav = document.querySelector('.mobile-nav');

//console.log(selectPlanButtons);

for (var i = 0; i < selectPlanButtons.length; i++) {
    selectPlanButtons[i].addEventListener('click', function() {
        /* modal.style.display = 'block';
        backdrop.style.display = 'block'; */
        //modal.className = "open"; //This will actually overwrite the complete list
        modal.classList.add('open');
        backdrop.classList.add('open')
    });
}

backdrop.addEventListener('click', function() {
    /* mobileNav.style.display = "none"; */
    mobileNav.classList.remove('open');
    closeModal();
});

if(noButton) {
    noButton.addEventListener('click', closeModal);
}


function closeModal() {
    /* backdrop.style.display = 'none';
    modal.style.display = 'none'; */
    if (noButton) {
        modal.classList.remove('open');
    }
    backdrop.classList.remove('open');
} 

toggleButton.addEventListener('click', function() {
   /*  mobileNav.style.display = "block";
    backdrop.style.display = "block"; */
    mobileNav.classList.add('open');
    backdrop.classList.add('open');
})

