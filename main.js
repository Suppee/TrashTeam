
let processScroll = () => {
    let docElem = document.documentElement,
        docBody = document.body,
        scrollTop = docElem['scrollTop'] || docBody['scrollTop']
        scrollBottom = (docElem['scrollHeight'] || docBody['scrollHeight']) - window.innerHeight,
        scrollPercent =  (scrollTop/scrollBottom  * 100) + '%';

    document.getElementById('progressbar').style.setProperty('--scrollAmount', scrollPercent);
    console.log(scrollPercent);
    console.log(scrollTop);
    console.log(scrollBottom)
}
