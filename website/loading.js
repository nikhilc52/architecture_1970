// get the video element
const video = document.getElementById("scrolly-video");
video.style.visibility = 'hidden'

// get the loading text
const loading = document.getElementById("loading");
loading.style.visibility = 'visible'
const title = document.getElementById("title");
title.style.visibility = 'visible'
const desc = document.getElementById("desc");
desc.style.visibility = 'visible'

// repeat the task for 20 secs
for (let i = 0; i < 20; i++){
    task(i);
}

// helper function
function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function task(i) {
    // every second do this
    setTimeout(function () {
        // if we reached the end of the loading screen
        if (i == 19) { loading.innerText = "Loading ... 100.0%"
            // stall on 100% loading for a second
            setTimeout(() => {
                loading.style.visibility = 'hidden'
                desc.style.visibility = 'hidden'
                title.style.visibility = 'hidden'
                video.style.visibility = 'visible'
              }, "1000"); }
        else {
        // get the only canvas element in the DOM
        try{const canvas = document.getElementsByTagName('canvas')[0];
            // if a random attribute is null, then it exists
            if (canvas.getAttribute("listener") == null){
                loading.innerText = "Loading ... 100.0%"
                // stall on 100% loading for a second
                setTimeout(() => {
                    loading.style.visibility = 'hidden'
                    desc.style.visibility = 'hidden'
                    title.style.visibility = 'hidden'
                    video.style.visibility = 'visible'
                  }, "1000");
            }}
            // if there is no canvas element (not done loading video)
        catch (e){
            loading.innerText = ("Loading ... " + i*5 + "." + randomIntFromInterval(0,9) + "%")
        }}
    },1000*i);
}
