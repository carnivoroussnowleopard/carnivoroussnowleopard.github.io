/**
 * Google Translate 위젯
 * 페이지 기본 언어는 한국어(ko), 영어로 된 게임 설명 등을
 * 방문자가 원하는 언어로 즉시 번역할 수 있게 해줍니다.
 */
function googleTranslateElementInit() {
  new google.translate.TranslateElement(
    {
      pageLanguage: 'ko',
      includedLanguages: 'en,ja,zh-CN,zh-TW,es,fr,de,ru,vi,th,id',
      layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
      autoDisplay: false,
    },
    'google_translate_element'
  );
}

// 구글 번역 스크립트 비동기 로드
(function loadGoogleTranslate() {
  const s = document.createElement('script');
  s.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
  s.async = true;
  document.head.appendChild(s);
})();
