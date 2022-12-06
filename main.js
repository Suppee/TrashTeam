var firstAnimPlayed = false;
var secondAnimPlayed = false;
let processScroll = () => {
    let docElem = document.documentElement,
        docBody = document.body,
        scrollTop = docElem['scrollTop'] || docBody['scrollTop']
        scrollBottom = (docElem['scrollHeight'] || docBody['scrollHeight']) - window.innerHeight,
        scrollPercent =  (scrollTop/scrollBottom  * 100);
        scrollPercentName =  (scrollTop/scrollBottom  * 100) + '%';

    document.getElementById('progressbar').style.setProperty('--scrollAmount', scrollPercentName);
    console.log(scrollPercentName);
    console.log(scrollTop);
    console.log(scrollBottom)

    let animationFirst = document.getElementById("firstAnim");
    let animationSecond = document.getElementById("secondAnim");
    let animationThrid = document.getElementById("thirdAnim");

    let animationFirstTrigger = animationFirst.getLottie();
    let animationSecondTrigger = animationSecond.getLottie();
    let animationThirdTrigger = animationThrid.getLottie();

    /*if(scrollPercent >= .1 && !firstAnimPlayed) {
        animationFirstTrigger.playSegments([0,15], true);
        firstAnimPlayed = true;
    }*/if(scrollPercent < .1 && firstAnimPlayed) {
        animationFirstTrigger.playSegments([15,0], true);
        firstAnimPlayed = false;
    } else if(scrollPercent >= 4 && !secondAnimPlayed) {
        animationSecondTrigger.playSegments([0,11], true);
        animationThirdTrigger.playSegments([42,60], true);
        secondAnimPlayed = true;
    } else if(scrollPercent < 4 && secondAnimPlayed) {
        animationSecondTrigger.playSegments([11,0], true);
        animationThirdTrigger.playSegments([60,42], true);
        secondAnimPlayed = false;
    }
}

document.addEventListener('scroll', processScroll);

document.addEventListener('DOMContentLoaded', function () {
    LottieInteractivity.create({
        player: '#firstAnim',
        mode: "chain",
        actions: [
          {
            state: "autoplay",
            reset: false
          }
        ]
      });
      LottieInteractivity.create({
        player: '#secondAnim',
        mode: "chain",
        actions: [
              {
                  state: "autoplay",
                  reset: false
              }
          ]
        });
    LottieInteractivity.create({
      player: '#thirdAnim',
      mode: "chain",
      actions: [
            {
                state: "autoplay",
                reset: false
            }
        ]
      });
    LottieInteractivity.create({
      player: '#sixAnim',
      mode: "scroll",
      actions: [
            {
              visibility:[0.15, 0.85],
              type: "seek",
              frames: [0, 203],
            },
        ]
      });
  });
  
  const containerOne = document.getElementsByClassName("navBinSelectors")[0];
  const containerTwo = document.getElementsByClassName("navBinSelectors")[1];
  const animation = document.getElementById("thirdAnim");
  const animationTrigger = animation.getLottie();
  let animationCompletedOne = true;
  
  containerOne.addEventListener("click", () => {
    console.log("First Button Hit");
    if (animationCompleted) {
      animationTrigger.playSegments([10, 24], true);      
      animationCompleted = false;
    }
  });
  
  containerTwo.addEventListener("click", () => {
    console.log("Second Button Hit");
    if (animationCompleted) {
      animationTrigger.playSegments([26, 40], true);      
      animationCompleted = false;
    }
  });
  
  animationTrigger.addEventListener("complete", () => {
      animationCompleted = true;
  });
  
  containerOne.addEventListener("mouseover", () => {
    console.log("First button Hover");
    animationTrigger.playSegments([3, 4], true);  
  });
  
  containerOne.addEventListener("mouseout", () => {
    animationTrigger.playSegments([0, 1], true);  
  });
  
  containerTwo.addEventListener("mouseover", () => {
    console.log("Second button Hover");
    animationTrigger.playSegments([6, 7], true); 
  });
  
  containerTwo.addEventListener("mouseout", () => {
    animationTrigger.playSegments([0, 1], true);  
  });


