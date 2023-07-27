chrome.sidePanel
  .setPanelBehavior({ openPanelOnActionClick: true })
  .catch((error) => console.error(error));

chrome.tabs.onActivated.addListener((activeInfo) => {
  console.log({ activeInfo });
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  console.log({ tabId, changeInfo, tab });
});
