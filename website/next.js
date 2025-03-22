// standard starting stuff
const html = document.documentElement;
const next = document.getElementById("next");
next.style.visibility = 'hidden';

window.addEventListener('scroll', () => {  
  // how far has the user scrolled 
  const scrollTop = html.scrollTop;
  // maximum that the user can scroll inside the current window
  const maxScrollTop = html.scrollHeight - window.innerHeight
  const scrollFraction = scrollTop / maxScrollTop;
  // when hits half way then opacity is 1 otherwise opacity moves towards 0
  next.style.visibility = scrollFraction >= .99 ? 'visible' : 'hidden';
});