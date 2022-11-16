document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("#Reserver").addEventListener("click", () => {
    chrome.tabs.executeScript({
      file: "buttonClicked.js",
    });
  });
});
