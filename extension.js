var context = "selection";
var title = "Search selection on YouTube";
var id = chrome.contextMenus.create({"title": title, "contexts":[context],"onclick": ContextClicked});

function ContextClicked(info, tab) {
  var selection = info.selectionText;
  var sText = info.selectionText;
  var url = "https://www.youtube.com/results?search_query=" + encodeURIComponent(selection);  
  var popup = window.open(url, "_blank");
}



