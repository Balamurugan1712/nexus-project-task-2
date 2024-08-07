function login(event) {
  event.preventDefault(); // Prevent form from submitting and reloading the page
  
  const username = document.getElementById('login-username').value;
  const password = document.getElementById('login-password').value;
  
  if (username && password) {
    alert(`Login successful!\nUsername: ${username}`);
    // Add additional logic here, such as redirecting to another page or making an API call
  } else {
    alert('Please enter both username and password.');
  }
}

function signup(event) {
  event.preventDefault(); // Prevent form from submitting and reloading the page
  
  const username = document.getElementById('signup-username').value;
  const password = document.getElementById('signup-password').value;
  
  if (username && password) {
    alert(`Sign up successful!\nUsername: ${username}`);
    // Add additional logic here, such as redirecting to another page or making an API call
  } else {
    alert('Please enter both username and password.');
  }
}

function toggleForm() {
  const loginForm = document.getElementById('login-form');
  const signupForm = document.getElementById('signup-form');

  if (loginForm.style.display === 'none') {
    loginForm.style.display = 'block';
    signupForm.style.display = 'none';
  } else {
    loginForm.style.display = 'none';
    signupForm.style.display = 'block';
  }
}
