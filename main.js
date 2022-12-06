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

    let navbackground = document.getElementById("navBack");

    let animationFirst = document.getElementById("firstAnim");
    let animationSecond = document.getElementById("secondAnim");
    let animationThrid = document.getElementById("thirdAnim");

    let animationFirstTrigger = animationFirst.getLottie();
    let animationSecondTrigger = animationSecond.getLottie();
    let animationThirdTrigger = animationThrid.getLottie();

    if(scrollPercent >= 2) {
        navbackground.className = "navbackground show";
    }else if(scrollPercent < 2) {
      navbackground.className = "navbackground hide";
    } 
    
    if(scrollPercent >= 5 && !secondAnimPlayed) {
        animationSecondTrigger.playSegments([0,11], true);
        animationThirdTrigger.playSegments([42,60], true);
        secondAnimPlayed = true;
    } else if(scrollPercent < 5 && secondAnimPlayed) {
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

  scrollLottie({
    target: '#animationWindow',
    path: "https://lottie.host/3a865da0-a9d8-413a-8913-835089350f09/EDaUX6glc0.json", 
    duration: 4, 
    speed: 'slow'
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


