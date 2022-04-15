const btnDeleteBanUser = document.querySelector('.btn_delete_ban_user');
const modalBanRemoveAlert= document.querySelector('.modal_ban_remove_alert')
const btnCloseBanRemoveAlertHeader= document.querySelector('.close_ban_remove_alert_header')
const btnCBanRemove= document.querySelector('.btn_ban_remove')

const modalBanInfoAlert= document.querySelector('.modal_ban_info_alert')
const btnCloseFooter2 = document.querySelector('.close_footer')
const btnCloseBanInfoAlertHeader = document.querySelector('.close_ban_info_alert_header')

const closeBanAlertHeader = function(){
    modal.classList.remove('show');
}

const closeBanAlertSaveHeader = function(){
    modalBanRemoveAlert.classList.remove('show');
}

const closeBanInfoAlert = function(){
    modalBanInfoAlert.classList.remove('show');
}

// 유저 이름 옆에 x 버튼 클릭
btnDeleteBanUser.addEventListener('click',() =>{
    modalBanRemoveAlert.classList.toggle('show');
    // console.log(btnDeleteBanUser)
    // console.log(btnDeleteBanUser.paentNode)
});

// 차단을 해제하시겠습니까? 창에서 해제 버튼 클릭
btnCBanRemove.addEventListener('click',() =>{
    modalBanInfoAlert.classList.toggle('show');
    closeBanAlertSaveHeader()
    closeBanAlertHeader()
});

// 차단을 해제하시겠습니까?  창에서 x 버튼 클릭
btnCloseBanRemoveAlertHeader.addEventListener('click',() =>{
    // closeBanAlertSaveHeader()
    closeBanAlertHeader()
});


btnCloseFooter2.addEventListener('click',() =>{
    closeBanAlertSaveHeader()
    closeBanAlertHeader()
});

btnCloseBanInfoAlertHeader.addEventListener('click',() =>{
    console.log('닫기1')
    closeBanInfoAlert()
    console.log('닫기2')
});