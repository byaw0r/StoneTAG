document.addEventListener('DOMContentLoaded', function() {  
    let lastTouchEnd = 0;  
    document.addEventListener('touchend', function(event) {  
        const now = (new Date()).getTime();  
        if (now - lastTouchEnd <= 300) {  
            event.preventDefault();  
        }  
        lastTouchEnd = now;  
    }, false);  

    document.addEventListener('touchmove', function(event) {  
        if (event.scale !== 1) {  
            event.preventDefault();  
        }  
    }, { passive: false });  

    const tab1 = document.getElementById('tab1');  
    const tab2 = document.getElementById('tab2');  
    const reloadButton = document.getElementById('reloadButton');  
    const audio = document.getElementById('backgroundAudio');  

    function switchToTab2() {  
        tab1.classList.add('hidden');  
        tab2.classList.remove('hidden');  
        audio.play();  
    }  

    reloadButton.addEventListener('click', switchToTab2);  
    document.addEventListener('click', switchToTab2);  
});