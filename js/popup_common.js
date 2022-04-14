const body = document.querySelector('body');
const modal = document.querySelector('.modal');
const btnOpenPopup = document.querySelector('.btn-open-popup');
const btnCloseHeader = document.querySelector('.close_header');
const btnCloseFooter = document.querySelector('.close_footer');

const closeChatModal = function(){
    modal.classList.remove('show');
}

btnOpenPopup.addEventListener('click', () => {
    modal.classList.toggle('show');

    if (modal.classList.contains('show')) {
        body.style.overflow = 'hidden';
    }
});

// 모달 밖 영역 클릭하면 모달 닫히도록
// modal.addEventListener('click', (event) => {
//     if (event.target === modal) {
//         modal.classList.toggle('show');
//
//         if (!modal.classList.contains('show')) {
//             body.style.overflow = 'auto';
//         }
//     }
// });

btnCloseHeader.addEventListener('click',() =>{
    closeChatModal();
});

btnCloseFooter.addEventListener('click',() =>{
    closeChatModal();
});