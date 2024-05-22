chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.type === 'startScript') {
    const { username, password, interval } = request;

    setInterval(() => {
      const logonForm = document.querySelector('form[name="logonForm"]');
      if (logonForm && logonForm.style.display !== 'none') {
        const loginInput = logonForm.querySelector('input[name="login"]');
        const passwordInput = logonForm.querySelector('input[name="password"]');
        const policyAcceptCheckbox = logonForm.querySelector('input[name="policy_accept"]');
        const connectButton = logonForm.querySelector('#logonForm_connect_button');

        if (loginInput && passwordInput && policyAcceptCheckbox && connectButton) {
          loginInput.value = username;
          passwordInput.value = password;
          policyAcceptCheckbox.checked = true;
          connectButton.click();
          console.log('You are connected again');
        }
      }
    }, interval);
  }
});
