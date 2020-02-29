let notepad = document.getElementById('notepad');
notepad.focus();

notepad.addEventListener('keyup', function (event) {
    chrome.storage.local.set({notepad: event.target.innerHTML}, function () {
        console.log("Notepad updated with", event.target.innerHTML);
    });
});

chrome.storage.local.get('notepad', function (data) {
    console.log('notepad',data);
    notepad.innerHTML = data.notepad;
});

chrome.storage.local.get('text', function (data) {
    console.log('text',data);
    // notepad.backgroundColod = data.text;
});
chrome.storage.local.get('background', function (data) {
    console.log('background',data);
    // notepad.backgroundColod = data.text;
});
