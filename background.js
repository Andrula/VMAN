async function insertCSS(tabId, css) {
  const code = `
      (function() {
          let style = document.createElement('style');
          style.innerHTML = \`${css}\`;
          document.head.appendChild(style);
      })();
  `;

  await chrome.tabs.executeScript(tabId, { code });
}

chrome.runtime.onMessage.addListener(async (request, sender, sendResponse) => {
  if (request.action === 'insertCSS') {
    const tabs = await chrome.tabs.query({ active: true, currentWindow: true });
    chrome.tabs.insertCSS(tabs[0].id, { file: 'dark-mode.css' });
  }
});

async function applyCSS(tab) {
  const css = await fetch('dark-mode.css').then(response => response.text());

  await insertCSS(tab.id, css);
}

addEventListener('load', function() {
  document.getElementById('toggle-dark-mode').addEventListener('click', function() {
      setTimeout(async function() {
          const tabs = await chrome.tabs.query({ active: true, currentWindow: true });
          const tab = tabs[0];
      
          await applyCSS(tab);
      }, 0);
  });
});
