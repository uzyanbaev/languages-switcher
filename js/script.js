function changeLanguage(id) {
    fetch('data/translation.json')
        .then(response => response.json())
        .then(data => {
            for (let key in data) {
                let element = document.querySelector(`#${key}`);
                if (element) {
                    element.textContent = data[key][id];
                }
            }

            document.body.className = id;
        })
        .catch(error => console.error('Error:', error));
}

function resetLanguage() {
    location.reload();
}