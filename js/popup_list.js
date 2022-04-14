const btnDeleteBanUser = document.querySelector('.btn_delete_ban_user');
const modalBanRemoveAlert= document.querySelector('.modal_ban_remove_alert')
const btnCloseBanRemoveAlertHeader= document.querySelector('.close_ban_remove_alert_header')
const btnCloseBanRemove= document.querySelector('.btn_ban_remove')

const modalBanInfoAlert= document.querySelector('.modal_ban_info_alert')
const btnCloseFooter2 = document.querySelector('.close_footer')
const btnCloseHeader2 = document.querySelector('.close_header')

const closeBanAlertHeader = function(){
    modal.classList.remove('show');
}

const closeBanAlertSaveHeader = function(){
    modalBanRemoveAlert.classList.remove('show');
}

const closeBanInfoAlert = function(){
    modalBanInfoAlert.classList.remove('show');
}

btnDeleteBanUser.addEventListener('click',() =>{
    modalBanRemoveAlert.classList.toggle('show');
    // console.log(btnDeleteBanUser)
    // console.log(btnDeleteBanUser.paentNode)
});

btnCloseBanRemove.addEventListener('click',() =>{
    modalBanInfoAlert.classList.toggle('show');
});

btnCloseBanRemoveAlertHeader.addEventListener('click',() =>{
    closeBanAlertSaveHeader()
    closeBanAlertHeader()
});

btnCloseBanRemove.addEventListener('click',() =>{
    closeBanAlertSaveHeader()
    closeBanAlertHeader()
});

btnCloseFooter2.addEventListener('click',() =>{
    closeBanAlertSaveHeader()
    closeBanAlertHeader()
});

btnCloseHeader2.addEventListener('click',() =>{
    console.log('닫기1')
    closeBanInfoAlert()
    console.log('닫기2')
});