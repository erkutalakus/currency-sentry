let polling_interval = document.getElementById('poll-interval');

chrome.storage.sync.get(['pollingInterval'], function(data) {
    polling_interval.value = data.pollingInterval;
});

chrome.storage.sync.get(['pollingInterval'], function(data) {
    polling_interval.value = data.pollingInterval;
});


polling_interval.oninput = function(element) {
    chrome.storage.sync.set({pollingInterval: element.target.value});
};