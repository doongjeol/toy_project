const btnCloseModifyNickHeader= document.querySelector('.modify_nick_close_header')
const btnCloseModifyNickFooter= document.querySelector('.modify_nick_close_footer')
const inputModifyNick= document.querySelector('.modify_nick_input')
const btnModifyNickSave= document.querySelector('.modify_nick_save')
const txtIsInvalidNick= document.querySelector('.modify_nick_is_invalid')
const modal2 = document.querySelector('.modal');
const modalModifyNickInfo = document.querySelector('.modal_modify_nick_info');
const btnCloseModifyNickInfoHeader= document.querySelector('.close_modify_nick_info_header')

const checkModifyNick = function(){
    if(inputModifyNick.value === ""){
        txtIsInvalidNick.style.display = 'block';
        txtIsInvalidNick.textContent = "닉네임을 입력해주세요."
    } else if(inputModifyNick.value.length > 0){
        txtIsInvalidNick.style.display = 'none';
        inputModifyNick.value = "";
        modal2.classList.remove('show');
        modalModifyNickInfo.classList.toggle('show');
    }
}

btnCloseModifyNickHeader.addEventListener('click',() =>{
    inputModifyNick.value = null;
});

btnCloseModifyNickFooter.addEventListener('click',() =>{
    inputModifyNick.value = null;
});

btnModifyNickSave.addEventListener('click',() =>{
    checkModifyNick();
});

inputModifyNick.addEventListener('click',() =>{
    txtIsInvalidNick.style.display = 'none';
});

btnCloseModifyNickInfoHeader.addEventListener('click',() =>{
    modalModifyNickInfo.classList.remove('show');
});
