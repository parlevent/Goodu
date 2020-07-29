var myVar = setInterval(function() { 
    search_btn = document.getElementById("su");
    if (search_btn) {
        console.log("Goodu loaded.")
        // alert("Goodu!!")
        search_btn.addEventListener("click", function(event) {
            // console.log(event)
            let enable_ctrl = true, enable_shift = true, enable_alt = true;
            chrome.storage.sync.get(["ctrl", "shift", "alt"], function(item) {
                // console.log(item)
                enable_ctrl = item["ctrl"];
                enable_shift = item["shift"];
                enable_alt = item["alt"];

                if ((enable_ctrl && event.ctrlKey) 
                        || (enable_shift && event.shiftKey) 
                        || (enable_alt && event.altKey)) {
                    let kw = document.getElementById("kw").value;
                    window.open("https://www.google.com/search?q=" + kw, "_blank");
                    event.stopPropagation();
                }
            })
        });
        clearInterval(myVar);
        return false;
    }
}, 500);