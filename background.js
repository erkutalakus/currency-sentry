chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.sync.set({pollingInterval: 10});
});