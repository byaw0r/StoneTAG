document.addEventListener('DOMContentLoaded', function() {  
    const tab1 = document.getElementById('tab1');  
    const tab2 = document.getElementById('tab2');  
    const reloadButton = document.getElementById('reloadButton');  
    const audio = document.getElementById('backgroundAudio');  

    // Функция для переключения на вторую вкладку  
    function switchToTab2() {  
        tab1.classList.add('hidden');  
        tab2.classList.remove('hidden');  
        audio.play();  
    }  

    // Переключение на вторую вкладку при нажатии на кнопку "Перезагрузить"  
    reloadButton.addEventListener('click', switchToTab2);  

    // Переключение на вторую вкладку при нажатии на любое место экрана  
    document.addEventListener('click', switchToTab2);  
});  