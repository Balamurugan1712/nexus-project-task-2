function login(event) {
    event.preventDefault();
  
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;
  
    // For simplicity, check if both fields are non-empty
    if (username && password) {
      alert(`Login successful!\nUsername: ${username}`);
      // You can add additional logic here, such as redirecting to another page
    } else {
      alert('Please enter both username and password.');
    }
  }
  
  function signup(event) {
    event.preventDefault();
  
    const username = document.getElementById('signup-username').value;
    const password = document.getElementById('signup-password').value;
  
    // For simplicity, check if both fields are non-empty
    if (username && password) {
      alert(`Sign up successful!\nUsername: ${username}`);
      // You can add additional logic here, such as redirecting to another page
    } else {
      alert('Please enter both username and password.');
    }
  }
  