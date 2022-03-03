const contactBtn = document.getElementById('contact-btn');
const formWrap = document.getElementById('form-wrap');
const form = document.getElementById('form');
const formCaption = document.getElementById('form-caption');
const formClosebtn = document.getElementById('form-closebtn');
const formSection1 = document.getElementById('form-section1');
const formSection2 = document.getElementById('form-section2');
const formSubmit1 = document.getElementById('form-submit1');
const formSubmit2 = document.getElementById('form-submit2');

contactBtn.addEventListener('click', function() {
   let bodyHeight = document.body.scrollHeight; //ページ全体の高さを取得
   formWrap.style.height = bodyHeight + 'px'; //`${}`がIEで使用不可

   formWrap.setAttribute('aria-hidden', 'false');
   formSection1.setAttribute('aria-hidden', 'false');
   formSection2.setAttribute('aria-hidden', 'true');
   formCaption.textContent = 'お問い合わせ';
});

formSubmit1.addEventListener('click', function() {
   formSection1.setAttribute('aria-hidden', 'true');
   formSection2.setAttribute('aria-hidden', 'false');
   formCaption.textContent = '送信が完了しました';
});

formWrap.addEventListener('click', function(e) {
   if(e.target == formWrap || e.target == formClosebtn || e.target == formSubmit2){
      formWrap.setAttribute('aria-hidden', 'true');
      formSection1.setAttribute('aria-hidden', 'true');
      formSection2.setAttribute('aria-hidden', 'true');
   }
});

// 最初の画面のモーダルウィンドウ
const videoContainer = document.getElementById('video-container');
const videoCloseBtn =  document.getElementById('video-close-btn');
const video = document.getElementById('video');

videoCloseBtn.addEventListener('click', function() {
   video.pause();
   videoContainer.setAttribute('aria-hidden', 'true');
});