const options = document.querySelectorAll('select');

options.forEach(e => {
    e.addEventListener('change', function (event) {
        console.log(event);
        const item = {
            key: event.target.name,
            value: event.target.value
        };
        saveItem(item);
    });
});

function saveItem(item) {
    chrome.storage.local.set(item, function () {
        console.log("Option saved", item);
    });
}
