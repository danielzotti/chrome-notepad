let notepad = document.getElementById('notepad');
notepad.focus();

notepad.addEventListener('keyup', function (event) {
    chrome.storage.local.set({notepad: event.target.innerHTML}, function () {
        console.log("Notepad updated with", event.target.innerHTML);
    });
});

chrome.storage.local.get(['notepad', 'text', 'background'], function (data) {
    console.log('notepad data', data);
    notepad.innerHTML = data.notepad;
    notepad.style.color = data.text;
    notepad.style.backgroundColor = data.background;
});
