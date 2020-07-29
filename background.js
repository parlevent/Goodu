chrome.runtime.onInstalled.addListener(function () {
    chrome.storage.sync.set({ "ctrl": true, "shift": true, "alt": true }, function() {
        console.log("Goodu: variable set!")
    });
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
        chrome.declarativeContent.onPageChanged.addRules([{
            conditions: [new chrome.declarativeContent.PageStateMatcher({
                pageUrl: { hostEquals: 'www.baidu.com' },
            })],
            actions: [new chrome.declarativeContent.ShowPageAction()]
        }]);
    });
});


