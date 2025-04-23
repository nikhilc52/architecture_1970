function resizeImage() {
    // width << height : too tall, fit width
    if (1.777 >= window.innerWidth / window.innerHeight) {
        video.style.width = window.innerWidth + "px"
        video.style.height = window.innerWidth * (1080 / 1920) + "px"
    }
    // width >> height : too wide, fit height
    else {
        video.style.height = window.innerHeight + "px"
        video.style.width = window.innerHeight * (1920 / 1080) + "px"
    }
    // center-center
    video.style.top = "50%"
    video.style.left = "50%"
    video.style.transform = "translate(-50%,-50%)"
}

// initially resize
resizeImage()

// so that on end it doesn't move on
video.style.position = "fixed"

// on both load and resize, resize all the icons/images
window.onresize = resizeImage
window.onload = resizeImage