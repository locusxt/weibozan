// console.log("background")
// chrome.tabs.onUpdated.addListener(function(tabId , info) {
//   if (info.status == "complete") {
//     chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
//       var url = tabs[0].url;
//       console.log(url)
//       if(url=="https://www.baidu.com/"){
//         chrome.pageAction.show(tabs[0].id)
//       }
//     });
//   }
// });
chrome.browserAction.onClicked.addListener(function(tab) {
     chrome.tabs.executeScript(tab.id, {file: 'jquery-3.1.0.min.js'});  
     chrome.tabs.executeScript(tab.id, {file: 'test.js'});  
 });  
