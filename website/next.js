// standard starting stuff
const html = document.documentElement;
const next = document.getElementById("next");
next.style.visibility = 'hidden';

const resize = document.getElementById("resize");

window.addEventListener('scroll', () => {  
  // how far has the user scrolled 
  const scrollTop = html.scrollTop;
  if (window.scrollY > 10){
    scroll_to_begin.style.visibility = 'hidden'
    // gets rid of resize on any scroll, since initially hidden
    resize.style.visibility = 'hidden'
  } 
  // maximum that the user can scroll inside the current window
  const maxScrollTop = html.scrollHeight - window.innerHeight
  const scrollFraction = scrollTop / maxScrollTop;
  // when hits half way then opacity is 1 otherwise opacity moves towards 0
  next.style.visibility = scrollFraction >= .99 ? 'visible' : 'hidden';
});

window.add