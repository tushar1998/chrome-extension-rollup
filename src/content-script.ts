console.log("executing content script");

(async () => {
  const src = chrome.runtime.getURL("./index.js");
  const { initialize } = await import(src);

  initialize();
})();
