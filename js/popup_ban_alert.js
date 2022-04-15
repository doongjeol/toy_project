const btnBan= document.querySelector('.btn_ban')
const modalBanSaveAlert= document.querySelector('.modal_ban_save_alert')
const btnCloseBanSaveAlertHeader= document.querySelector('.close_ban_save_alert_header')


const closeBanAlertHeader = function(){
    modal.classList.remove('show');
}

const closeBanAlertSaveHeader = function(){
    modalBanSaveAlert.classList.remove('show');
}

// 차단 버튼 클릭
btnBan.addEventListener('click',() =>{
    modalBanSaveAlert.classList.toggle('show');
    closeBanAlertHeader()
});

//
btnCloseBanSaveAlertHeader.addEventListener('click',() =>{
    closeBanAlertSaveHeader()
    closeBanAlertHeader()
});

