chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.sync.set({color: '#3aa757'}, function() {
    console.log('The color is green.');
  });
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([{
      conditions: [new chrome.declarativeContent.PageStateMatcher({
        pageUrl: {hostEquals: 'developer.chrome.com'},
      })
      ],
          actions: [new chrome.declarativeContent.ShowPageAction()]
    }]);
  });
});

function doStuffWithDom(domContent) {
  console.log('I received the following DOM content:\n' + domContent);
}

chrome.browserAction.onClicked.addListener(function (tab) {
  // ...check the URL of the active tab against our pattern and...
  chrome.tabs.sendMessage(tab.id, {text: 'text'}, doStuffWithDom);
});