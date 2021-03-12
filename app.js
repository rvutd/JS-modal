// select modal-btn,modal-overlay,close-btn
// listen for click events on modal-btn and close-btn
// when user clicks modal-btn add .open-modal to modal-overlay
// when user clicks close-btn remove .open-modal from modal-overlay

openModal = document.querySelector('.modal-btn');
closeModal = document.querySelector('.close-btn');
overlayModal = document.querySelector('.modal-overlay');

openModal.addEventListener('click', function(){
    overlayModal.classList.add('open-modal')
})

closeModal.addEventListener('click',()=>{
    overlayModal.classList.remove('open-modal');
})
