document.addEventListener('DOMContentLoaded', function () {
  const startScriptButton = document.getElementById('startScript');
  const data = JSON.parse(localStorage.getItem("PortailLogInInfo"));
  if(data){
    document.getElementById('username').value = data.username;
    document.getElementById('password').value = data.password;
  }
  startScriptButton.addEventListener('click', function () {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const interval = parseInt(document.getElementById('interval').value, 10);
    localStorage.setItem("PortailLogInInfo",JSON.stringify({username:username, password:password}))
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      const activeTab = tabs[0];
      chrome.tabs.sendMessage(activeTab.id, {
        type: 'startScript',
        username,
        password,
        interval
      });
    });
  });
});

