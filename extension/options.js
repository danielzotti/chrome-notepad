const options = document.querySelectorAll('select');

chrome.storage.local.get(['text', 'background'], function (data) {
    console.log('notepad data', data);
    options.forEach(option => {
        option.value = data[option.name];
    });
});

options.forEach(option => {
    option.addEventListener('change', function (event) {
        const item = {};
        item[event.target.name] = event.target.value;
        saveItem(item);
    });
});

function saveItem(item) {
    chrome.storage.local.set(item, function () {
        console.log("Option saved", item);
    });
}

