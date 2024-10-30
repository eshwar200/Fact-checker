chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "openPopup" && message.query) {
        chrome.action.openPopup(); // Open the extension popup
    }
});

// chrome.runtime.onInstalled.addListener(() => {
//     chrome.contextMenus.create({
//       id: "checkMisinformation",
//       title: "Check for Misinformation",
//       contexts: ["selection"]
//     });
//   });
  
//   chrome.contextMenus.onClicked.addListener((info, tab) => {
//     if (info.menuItemId === "checkMisinformation" && info.selectionText) {
//       // Check if the content script is active in the tab
//       if (tab.id) {
//         chrome.tabs.sendMessage(tab.id, { text: info.selectionText }, function(response) {
//           if (chrome.runtime.lastError) {
//             console.error("Message failed: ", chrome.runtime.lastError.message);
//           }
//         });
//       }
//     }
//   });
  
  