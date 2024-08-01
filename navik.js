
const btn = document.getElementsByClassName("button")
btn.addEventListener("click", (e)=>{
    var script = document.createElement("script")
    script.type = "text/javascript";
    script.src = "https://cdn.botpress.cloud/webchat/v1/inject.js";
    document.getElementsByTagName("head")[0].appendChild(script)
});

ScrollReveal({
    reset: true,
    // distance: '60px ',
    duration: 2500,
    delay:400
});

ScrollReveal().reveal('.description', {delay: 500, origin: 'left'});
ScrollReveal().reveal('.second', {delay: 1000, origin: 'bottom'});