// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript(null, {file:'jquery-1.7.1.min.js'}, function() {
    chrome.tabs.executeScript(null, {file:'SEOutline.js'});
  });
});

