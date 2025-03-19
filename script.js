document.addEventListener('DOMContentLoaded', function() {
    const tab1 = document.getElementById('tab1'); // Первая вкладка
    const tab2 = document.getElementById('tab2'); // Вторая вкладка
    const reloadButton = document.getElementById('reloadButton'); // Кнопка "Перезагрузить"
    const audio = document.getElementById('backgroundAudio'); // Аудио элемент

    // Функция для переключения на вторую вкладку
    function switchToTab2() {
        tab1.classList.add('hidden'); // Скрываем первую вкладку
        tab2.classList.remove('hidden'); // Показываем вторую вкладку
        audio.play(); // Воспроизводим аудио
    }

    // Переключение на вторую вкладку при нажатии на кнопку "Перезагрузить"
    reloadButton.addEventListener('click', switchToTab2);

    // Переключение на вторую вкладку при нажатии на любое место экрана
    document.addEventListener('click', switchToTab2);
});