
let processScroll = () => {
    let docElem = document.documentElement,
        docBody = document.body,
        scrollTop = docElem['scrollTop'] || docBody['scrollTop']
        scrollBottom = (docElem['scrollHeight'] || docBody['scrollHeight']) - window.innerHeight,
        scrollPercent = scrollTop / scrollBottom * 100 + '%';

    document.getElementById('progressbar').style.setProperty('--scrollAmount', scrollPercent);
    console.log(scrollPercent);
}

$(document).ready(function(){ 
    $(window).scroll(function(){
      $('.ScollBody').css('transform', 'translate3d(0,' + $(this).scrollTop()*2 + 'px, 0)'); 
   }).scroll();
});  
document.addEventListener('scroll', processScroll);