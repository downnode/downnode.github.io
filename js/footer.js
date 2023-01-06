$(document).ready(function() {
  
    // INITIATE THE FOOTER
    siteFooter();
    // COULD BE SIMPLIFIED FOR THIS PEN BUT I WANT TO MAKE IT AS EASY TO PUT INTO YOUR SITE AS POSSIBLE
    $(window).resize(function() {
      siteFooter();
    });
    
    function siteFooter() {
      var siteContent = $('#site-content');
      var siteContentHeight = siteContent.height();
      var siteContentWidth = siteContent.width();
  
      var siteFooter = $('#site-footer');
      var siteFooterHeight = siteFooter.height();
      var siteFooterWidth = siteFooter.width();
  
      console.log('Content Height = ' + siteContentHeight + 'px');
      console.log('Content Width = ' + siteContentWidth + 'px');
      console.log('Footer Height = ' + siteFooterHeight + 'px');
      console.log('Footer Width = ' + siteFooterWidth + 'px');
  
      siteContent.css({
        "margin-bottom" : siteFooterHeight + 50
      });
    };
  });

$('.slider').slick({
  autoplay: true,//自動的に動き出すか。初期値はfalse。
  infinite: true,//スライドをループさせるかどうか。初期値はtrue。
  speed: 1000,//スライドのスピード。初期値は300。
  slidesToShow: 3,//スライドを画面に3枚見せる
  slidesToScroll: 1,//1回のスクロールで1枚の写真を移動して見せる
  prevArrow: '<div class="slick-prev"></div>',//矢印部分PreviewのHTMLを変更
  nextArrow: '<div class="slick-next"></div>',//矢印部分NextのHTMLを変更
  centerMode: true,//要素を中央ぞろえにする
  variableWidth: true,//幅の違う画像の高さを揃えて表示
  dots: false,//下部ドットナビゲーションの表示
});