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
const play = document.getElementById("play");
play.style.visibility = 'visible'
const time = document.getElementById("time");
time.style.visibility = 'visible'
const scroll_to_begin = document.getElementById("scroll");
scroll_to_begin.style.visibility = 'hidden'

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// repeat the task for 20 secs, waiting for the termination of the function each time
async function run() {
    for (let i = 0; i < 20; i++) {
        await task(i)
        if (scroll_to_begin.style.visibility == 'visible') { break }
    }
}


// helper function
function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
}

async function task(i) {
    await delay(1000)
    // every second do this
    // if we reached the end of the loading screen
    if (i == 19) {
        loading.innerText = "Loading ... 100.0%"
        // stall on 100% loading for a second
        await delay(1000)
        loading.style.visibility = 'hidden'
        desc.style.visibility = 'hidden'
        title.style.visibility = 'hidden'
        play.style.visibility = 'hidden'
        time.style.visibility = 'hidden'
        video.style.visibility = 'visible'
        scroll_to_begin.style.visibility = 'visible'
        window.scrollTo(0, 0);
    }
    else {
        // get the only canvas element in the DOM
        try {
            const canvas = document.getElementsByTagName('canvas')[0];
            // if a random attribute is null, then it exists
            if (canvas.getAttribute("listener") == null) {
                loading.innerText = "Loading ... 100.0%"
                // stall on 100% loading for a second
                await delay(1000)
                loading.style.visibility = 'hidden'
                desc.style.visibility = 'hidden'
                title.style.visibility = 'hidden'
                play.style.visibility = 'hidden'
                time.style.visibility = 'hidden'
                video.style.visibility = 'visible'
                scroll_to_begin.style.visibility = 'visible'
                window.scrollTo(0, 0);
            }
        }
        // if there is no canvas element (not done loading video)
        catch (e) {
            loading.innerText = ("Loading ... " + i * 5 + "." + randomIntFromInterval(0, 9) + "%")
        }
    }
}

run()
