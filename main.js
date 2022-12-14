var secondAnimPlayed = false;
var atFood = false;

let animationSecond = document.getElementById("secondAnim");
let animationThrid = document.getElementById("thirdAnim");
let animationForth = document.getElementById("forthAnim");
let animationFifth = document.getElementById("fifthAnim");

let animationSecondTrigger = animationSecond.getLottie();
let animationThirdTrigger = animationThrid.getLottie();
let animationForthTrigger = animationForth.getLottie();
let animationFifthTrigger = animationFifth.getLottie();

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
    
  if(scrollPercent >= 13.5 && scrollPercent <= 76){
    atFood = true;
  } else {
    atFood = false;
  }


    if(scrollPercent >= 5 && !secondAnimPlayed) {
        animationSecondTrigger.playSegments([0, 11], true);
        animationThirdTrigger.playSegments([0, 16], true);
        animationForthTrigger.playSegments([0, 16], true);
        animationFifthTrigger.playSegments([0, 16], true);
        secondAnimPlayed = true;
    } else if(scrollPercent < 5 && secondAnimPlayed) {
        animationSecondTrigger.playSegments([11, 0], true);
        animationThirdTrigger.playSegments([16, 0], true);
        animationForthTrigger.playSegments([16, 0], true);
        animationFifthTrigger.playSegments([16, 0], true);
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
    mode: "click",
    actions: [
          {
              state: "autoplay",
              reset: false
          }
      ]
    });
  LottieInteractivity.create({
    player: '#thirdAnim',
    mode: "click",
    actions: [
          {
              state: "autoplay",
              reset: false
          }
      ]
    });
  LottieInteractivity.create({
    player: '#forthAnim',
    mode: "click",
    actions: [
          {
              state: "autoplay",
              reset: false
          }
      ]
    });
  LottieInteractivity.create({
    player: '#fifthAnim',
    mode: "click",
    actions: [
          {
              state: "autoplay",
              reset: false
          }
      ]
    });
  LottieInteractivity.create({
    player: '#sixAnim',
    mode: "cursor",
    actions: [
        {
          type: "toggle"
        }
      ]
    });
  LottieInteractivity.create({
    player: '#sevenAnim',
    mode: "cursor",
    actions: [
        {
          type: "toggle"
        }
      ]
    });
  LottieInteractivity.create({
    player: '#eightAnim',
    mode: "cursor",
    actions: [
        {
          type: "toggle"
        }
      ]
    });
  LottieInteractivity.create({
    player: '#nineAnim',
    mode: "scroll",
    actions: [
        {
          visibility:[0.3,0.6],
          container: "#bagInfo",
          type: "seek",
          frames: [0, 42],
        }
      ]
    });
});
  
  const food = document.getElementById("trashBagTop");
  
  const containerOne = document.getElementsByClassName("navBinSelectors")[0];
  const containerTwo = document.getElementsByClassName("navBinSelectors")[1];
  const animation = document.getElementById("thirdAnim");
  const animationTrigger = animation.getLottie();
  let animationCompletedOne = true;
  
  containerOne.addEventListener("click", () => {
    console.log("First Button Hit");
    if (animationCompleted) {
      animationTrigger.playSegments([27, 42], true);      
      animationCompleted = false;
    }
  });
  
  containerTwo.addEventListener("click", () => {
    console.log("Second Button Hit");
    if (animationCompleted) {
      animationTrigger.playSegments([43, 58], true);  
      animationCompleted = false;
    }

    if(atFood !== true) {
      food.scrollIntoView();   
    }
  });
  
  animationTrigger.addEventListener("complete", () => {
      animationCompleted = true;
  });
  
  containerOne.addEventListener("mouseover", () => {
    console.log("First button Hover");
    animationTrigger.playSegments([20, 21], true);  
  });
  
  containerOne.addEventListener("mouseout", () => {
    animationTrigger.playSegments([17, 18], true);  
  });
  
  containerTwo.addEventListener("mouseover", () => {
    console.log("Second button Hover");
    animationTrigger.playSegments([23, 24], true); 
  });
  
  containerTwo.addEventListener("mouseout", () => {
    animationTrigger.playSegments([17, 18], true);  
  });

  scrollLottie({
    target: '#trashBagTop',
    path: "https://lottie.host/c640c3f2-b67a-4825-ba13-3f0cd5b61fcf/wyPnHf24Tp.json", 
    duration: 4, 
    speed: 'fast'
   })

  scrollLottie({
    target: '#animationWindow',
    path: "https://lottie.host/22795313-1fec-4f32-9ffb-27692f1b22f7/RFisr93SLw.json", 
    duration: 4, 
    speed: 'slow'
   })

   scrollLottie({
    target: '#trashBagBottom',
    path: "https://lottie.host/71b17bde-17b9-49eb-b765-97b18164f085/y5U8J1n5Sv.json", 
    duration: 4, 
    speed: 'medium'
   })

   function scrollLottie(vars) {
    let playhead = {frame: 0},
      target = gsap.utils.toArray(vars.target)[0],
      speeds = {slow: "+=2000", medium: "+=1000", fast: "+=500"},
      st = {trigger: target, pin: true, start: "top top", end: speeds[vars.speed] || "+=1000", scrub: 1},
      animation = lottie.loadAnimation({
        container: target,
        renderer: vars.renderer || "svg",
        loop: false,
        autoplay: false,
        path: vars.path
      });
    for (let p in vars) { // let users override the ScrollTrigger defaults
      st[p] = vars[p];
    }
    animation.addEventListener("DOMLoaded", function() {
      gsap.to(playhead, {
        duration: vars.duration || 0.5,
        delay: vars.delay || 0,
        frame: animation.totalFrames - 1,
        ease: vars.ease || "none",
        onUpdate: () => animation.goToAndStop(playhead.frame, true),
        scrollTrigger: st
      });
      // in case there are any other ScrollTriggers on the page and the loading of this Lottie asset caused layout changes
      ScrollTrigger.sort();
      ScrollTrigger.refresh(); 
    });
    return animation;
  }


