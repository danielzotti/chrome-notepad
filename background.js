chrome.runtime.onInstalled.addListener(function () {
    chrome.storage.local.set({notepad: 'Welcome to <b>Chrome Notepad</b>!&nbsp;<div><br></div><div><b><u>COMMANDS</u></b>:</div><div>- Ctrl+B for <b>bold</b></div><div>- Ctrl+U for <u>underline</u><br></div><div>- Ctrl+I for&nbsp;<i>italic</i></div><div><br></div><div>Text will be automatically saved every time a key is pressed.</div>'}, function () {
        console.log("Notepad initialized");
    });
    chrome.storage.local.set({text: 'white'}, function () {
        console.log("Notepad color = white");
    });
    chrome.storage.local.set({background: 'black'}, function () {
        console.log("Notepad background is black");
    });
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
        chrome.declarativeContent.onPageChanged.addRules([{
            conditions: [new chrome.declarativeContent.PageStateMatcher({
                pageUrl: {hostContains: '.'},
            })
            ],
            actions: [new chrome.declarativeContent.ShowPageAction()]
        }]);
    });
});
