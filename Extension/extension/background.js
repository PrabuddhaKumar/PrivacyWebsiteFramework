

// document.addEventListener('DOMContentLoaded', function() {
//   // head = document.getElementsByTagName("head");
//   // // var addScript = '<script src="index_js.js" type="text/javascript"></script>';
//   // var addScript = document.createElement("script");
//   // addScript.setAttribute("src", "index_js.js");
//   // alert(typeof(addScript));
//   // head.appendChild( addScript);

//   chrome.tabs.executeScript(null, {
//     code: buttons = 'document.getElementById("card0"); '
//   +'buttons.addEventListener("click", storeData);'
//       +'alert("Buttons :", buttons==null);' 
//   })

  
  
//   // for(i = 0; i<buttons.length;i++){
//   //   buttons[i].addEventListener("click", storeData);
//   // }
  
// });





  // chrome.browserAction.
  // chrome.tabs.onUpdated.addListener(function(tabId, info) {
  chrome.browserAction.onClicked.addListener(function(tab) {
    // No tabs or host permissions needed!
    // if(info.status==='complete'){
      // alert('Turning ' + tab.url + ' red!');
      var manifestData = chrome.runtime.getManifest();
      // alert(manifestData.);

      if(tab.url.includes("localhost:81/Proj")){
        // alert("URL Match");
        chrome.tabs.executeScript(null, { file: "jquery.js" }, function() {
          chrome.tabs.executeScript(null, { file: "index_js.js" });
      });
        // chrome.tabs.executeScript({
        //   // file: 'https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js',
        //   file: 'index_js.js',
        //   // code: 'loadCards()'
        // });
      }
    }
     
  // }, 
  // {url: [{pathContains : '/Proj'}]}
  );
