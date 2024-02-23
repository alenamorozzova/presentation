document.addEventListener('DOMContentLoaded', function () {
    // Загрузка данных о презентациях при загрузке страницы
    fetch('data/presentations.json') // Предполагается, что файл presentations.json содержит данные о презентациях
        .then(response => response.json())
        .then(data => {
            displayPresentations(data);
        })
        .catch(error => console.error('Ошибка загрузки данных: ', error));
});

function displayPresentations(presentations) {
    const featuredSection = document.getElementById('featured');
    
    // Очищаем содержимое секции
    featuredSection.innerHTML = '';

    // Создаем блоки для каждой презентации и добавляем их в секцию
    presentations.forEach(presentation => {
        const presentationBlock = document.createElement('div');
        presentationBlock.classList.add('presentation');

        presentationBlock.innerHTML = `
            <h3>${presentation.title}</h3>
            <p>${presentation.description}</p>
            <p>Цена: ${presentation.price} рублей</p>
        `;

        featuredSection.appendChild(presentationBlock);
    });
}
