const btnCloseModifyNickHeader= document.querySelector('.modify_nick_close_header')
const btnCloseModifyNickFooter= document.querySelector('.modify_nick_close_footer')
const inputModifyNick= document.querySelector('.modify_nick_input')
const btnModifyNickSave= document.querySelector('.modify_nick_save')
const txtIsInvalidNick= document.querySelector('.modify_nick_is_invalid')

const checkModifyNick = function(){
    if(inputModifyNick.value === ""){
        txtIsInvalidNick.style.display = 'block';
        txtIsInvalidNick.textContent = "닉네임을 입력해주세요."
    } else if(inputModifyNick.value.length > 0){
        txtIsInvalidNick.style.display = 'none';
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
