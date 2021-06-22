//builtwith.js

function showIcon(tabId, changeInfo, tab){ 
			if(tab.url.substring(0,9) == 'chrome://') return;
				chrome.pageAction.show(tabId);       
		}       
		function toDomain(url) { 
			return url.match(/:\/\/(www\.)?(.[^/:]+)/)[2];
		}
		function doAdplanner(tab){          
			chrome.tabs.create({url:'https://builtwith.com/' + toDomain(tab.url)});			
		}
		chrome.tabs.onUpdated.addListener(showIcon);
		chrome.pageAction.onClicked.addListener(doAdplanner);
