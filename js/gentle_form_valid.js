// This is a demo of GentleForm:
// https://github.com/Zhouzi/GentleForm

var toaster = document.querySelector('.toaster');

new GentleForm('form', function (event, isValid, data) {
  event.preventDefault();
  
  if (isValid) toast('ご登録ありがとうございます！', 'success');
  else toast('ごめんなさい、未入力の項目があるようです。', 'error');
  
  console.log(event, isValid, data);
});

var timeout;
function toast (msg, type) {
  if (type == 'success') {
    toaster.classList.remove('toaster--error');
    toaster.classList.add('toaster--success');
  } else {
    toaster.classList.remove('toaster--success');
    toaster.classList.add('toaster--error');
  }
  
  toaster.innerHTML = msg;
  toaster.style.display = 'block';
  
  clearTimeout(timeout);
  
  timeout = setTimeout(function () {
    toaster.classList.add('toaster--show');
    
    timeout = setTimeout(function () {
      toaster.classList.remove('toaster--show');
      
      timeout = setTimeout(function () {
        toaster.style.display = 'none';
      }, 300);
    }, 5000);
  }, 10);
}