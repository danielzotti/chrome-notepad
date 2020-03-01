chrome.runtime.onInstalled.addListener(function () {
    const item = {
        notepad: 'Welcome to <b>Chrome Notepad</b>!&nbsp;<div><br></div><div><b><u>COMMANDS</u></b>:</div><div>- Ctrl+B for <b>bold</b></div><div>- Ctrl+U for <u>underline</u><br></div><div>- Ctrl+I for&nbsp;<i>italic</i></div><div><br></div><div>Text will be automatically saved every time a key is pressed.</div>',
        text: 'black',
        background: 'yellow'
    };
    chrome.storage.local.set(item, function () {
        console.log("Notepad initialized", item);
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
