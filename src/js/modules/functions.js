// header text description changed
export function headerTextChange() {
    // add new words here
    const typed_strings = ["freelancer", "front-end developer", "web-developer"];

    // use typed.js to change words on fly
    const typed = new Typed('.typed', {
        strings: typed_strings,
        loop: true,
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 2000
      });
}

// header menu animated 
export function headerMenuAnimate() {
  const navBtn = $("#nav-button");
  const navBtnIten = $(".nav-btn__icon");
  const navMenu = $(".sidebar__container");
  const navCount = $(".sidebar__nav-count");

  navBtn.on('click', (e) => {
      navBtn.toggleClass("nav-btn--active");
      navBtnIten.toggleClass("nav-btn__icon--active");
      navMenu.toggleClass("sidebar__container--active");

      if (navBtn.hasClass("nav-btn--active")) {

        setTimeout(() => {navCount.each(function( index ) {
          const obj = $(".sidebar__nav-count")[index];
          animateValue(obj, 1, index + 1, 800);

        })}, 800);

      } else {

        navCount.each(function( index ) {
          $(this).text("00");

        });

      }
  })

  // function animates counter
  function animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      obj.innerHTML = "0" + Math.floor(progress * (end - start) + start);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }
  
}
// 250 * (index+1)