document.querySelectorAll('area').forEach(area => {
    area.addEventListener('click', () => {
        alert(area.title + ' clicked!');
    });
});