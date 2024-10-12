// Initialize Firebase Authentication
const auth = firebase.auth();

// DOM Elements
const loginBtn = document.getElementById('login-btn');
const signupBtn = document.getElementById('signup-btn');
const logoutBtn = document.getElementById('logout-btn');
const userDisplay = document.getElementById('user-display');

// Function to handle user signup
function signUp(email, password) {
  auth.createUserWithEmailAndPassword(email, password)
    .then(userCredential => {
      // Signed up successfully
      const user = userCredential.user;
      alert('Sign up successful! Welcome, ' + user.email);
    })
    .catch(error => {
      console.error(error.message);
      alert('Error signing up: ' + error.message);
    });
}

// Function to handle user login
function login(email, password) {
  auth.signInWithEmailAndPassword(email, password)
    .then(userCredential => {
      // Logged in successfully
      const user = userCredential.user;
      alert('Logged in as ' + user.email);
      showUser(user.email);
    })
    .catch(error => {
      console.error(error.message);
      alert('Error logging in: ' + error.message);
    });
}

// Function to handle user logout
function logout() {
  auth.signOut().then(() => {
    // Logged out successfully
    alert('Logged out successfully.');
    hideUser();
  }).catch(error => {
    console.error(error.message);
    alert('Error logging out: ' + error.message);
  });
}

// Show the logged-in user in the UI
function showUser(email) {
  if (userDisplay) {
    userDisplay.innerHTML = `Welcome, ${email}`;
  }
  loginBtn.style.display = 'none';
  logoutBtn.style.display = 'block';
}

// Hide user information when logged out
function hideUser() {
  if (userDisplay) {
    userDisplay.innerHTML = '';
  }
  loginBtn.style.display = 'block';
  logoutBtn.style.display = 'none';
}

// Listen for auth state changes
auth.onAuthStateChanged(user => {
  if (user) {
    // User is signed in
    showUser(user.email);
  } else {
    // No user is signed in
    hideUser();
  }
});

// Handle login button click
loginBtn.addEventListener('click', () => {
  const email = prompt('Enter your email:');
  const password = prompt('Enter your password:');
  login(email, password);
});

// Handle signup button click (optional)
signupBtn?.addEventListener('click', () => {
  const email = prompt('Enter your email:');
  const password = prompt('Enter your password:');
  signUp(email, password);
});

// Handle logout button click
logoutBtn?.addEventListener('click', () => {
  logout();
});
