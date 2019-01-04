 // chrome.browserAction.
  // chrome.tabs.onUpdated.addListener(function(tabId, info) {
  chrome.browserAction.onClicked.addListener(function(tab) {
    // No tabs or host permissions needed!
    
      var manifestData = chrome.runtime.getManifest();

      if(tab.url.includes("localhost:81/Proj")){
        chrome.tabs.executeScript(null, { file: "jquery.js" }, function() {
          chrome.tabs.executeScript(null, { file: "index_js.js" });
      });
        
      }
    }
     
  );
