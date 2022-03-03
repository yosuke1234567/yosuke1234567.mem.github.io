let faqQuestion = document.getElementsByClassName('p-faq__question');
let faqAnswer = document.getElementsByClassName('p-faq__answer');
let faqBtn = document.getElementsByClassName('p-faq__btn');
let faqExpanded;

// 配列に変換 IE対応
faqQuestion = Array.prototype.slice.call(faqQuestion);
faqAnswer = Array.prototype.slice.call(faqAnswer);
faqBtn = Array.prototype.slice.call(faqBtn);

faqBtn.forEach(function(e, index) {
   e.addEventListener('click', function() {
      // 選択されたボタンがあるfaqQuestion要素のaria-expandedを取得
      faqExpanded = faqQuestion[index].getAttribute('aria-expanded');
      if(faqExpanded === 'false') {
         // index番目の要素の属性を変更
         faqQuestion[index].setAttribute('aria-expanded', 'true');
         faqAnswer[index].setAttribute('aria-hidden', 'false');
         faqExpanded = faqQuestion[index].getAttribute('aria-expanded');
      } else if(faqExpanded === 'true') {
         faqQuestion[index].setAttribute('aria-expanded', 'false');
         faqAnswer[index].setAttribute('aria-hidden', 'true');
         faqExpanded = faqQuestion[index].getAttribute('aria-expanded');
      }
   });
});