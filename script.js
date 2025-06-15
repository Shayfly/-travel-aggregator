const lang = 'en'; // 'he' or 'ru' for Hebrew / Russian
fetch(`lang/${lang}.json`)
    .then(response => response.json())
    .then(data => {
        document.getElementById('main-title').textContent = data.mainTitle;
        document.getElementById('description').textContent = data.description;
    });

["header", "footer", "search"].forEach(id => {
    fetch(`components/${id}.html`)
        .then(res => res.text())
        .then(html => document.getElementById(id).innerHTML = html);
});