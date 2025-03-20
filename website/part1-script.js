// CODE IS FROM: https://ankittrehan2000.medium.com/creating-scroll-animations-similar-to-apples-airpods-pro-page-bc5c1c0814df

// standard starting stuff
const html = document.documentElement;
const canvas = document.getElementById("scrollAnimation");
const context = canvas.getContext("2d");
const next = document.getElementById("next");
next.style.visibility = 'hidden';

const frameCount = 1792;
// gets the current frame by index
const currentFrame = index => (
  `images/part1/part1-${index.toString().padStart(6, '0')}.jpg`
)

// draw the initial image at the proper height
const img = new Image()
img.src = currentFrame(0);
canvas.width=1920;
canvas.height=1080;
img.onload=function(){
  context.drawImage(img, 0, 0);
}

// updates the image for a given index
const updateImage = index => {
  img.src = currentFrame(index);
  context.drawImage(img, 0, 0);
}

// preload images for network
const preloadImages = () => {
  for (let i = 1; i < frameCount; i++) {
    const img = new Image();
    img.src = currentFrame(i);
  }
};

preloadImages()

window.addEventListener('scroll', () => {  
  // how far has the user scrolled 
  const scrollTop = html.scrollTop;
  // maximum that the user can scroll inside the current window
  const maxScrollTop = html.scrollHeight - window.innerHeight
  const scrollFraction = scrollTop / maxScrollTop;
  // when hits half way then opacity is 1 otherwise opacity moves towards 0
  next.style.visibility = scrollFraction >= .99 ? 'visible' : 'hidden';
  const frameIndex = Math.min(
    frameCount - 1,
    Math.ceil(scrollFraction * frameCount)
  );
  
  // The window.requestAnimationFrame() method tells the browser that 
  // you wish to perform an animation and requests that the browser calls a 
  // specified function to update an animation before the next repaint
  requestAnimationFrame(() => updateImage(frameIndex + 1))
});