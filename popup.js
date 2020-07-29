'use strict';

let enable_ctrl = true, enable_shift = true, enable_alt = true;
chrome.storage.sync.get(["ctrl", "shift", "alt"], function(item) {
    enable_ctrl = item["ctrl"];
    enable_shift = item["shift"];
    enable_alt = item["alt"];

    document.getElementById("cb_ctrl").checked = enable_ctrl;
    document.getElementById("cb_shift").checked = enable_shift;
    document.getElementById("cb_alt").checked = enable_alt;
})

document.getElementById("cb_ctrl").addEventListener("change", function(event) {
  chrome.storage.sync.set({"ctrl": event.target.checked}, () => {});
});

document.getElementById("cb_shift").addEventListener("change", function(event) {
  chrome.storage.sync.set({"shift": event.target.checked}, () => {});
});

document.getElementById("cb_alt").addEventListener("change", function(event) {
  chrome.storage.sync.set({"alt": event.target.checked}, () => {});
});

