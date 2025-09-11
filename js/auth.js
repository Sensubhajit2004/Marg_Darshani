// js/auth.js
import { GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";
import { auth } from './firebase-config.js';
import { showSection } from './ui.js';
import { loadStudentDashboard } from './dashboard.js';

// This MUST be false to use real Google Sign-In
const SIMULATE_LOGIN = false;

function handleLogout() {
    signOut(auth).catch(error => console.error("Error signing out:", error));
}

function showLoggedInState(user) {
    const authContainerDesktop = document.getElementById('auth-container-desktop');
    const authContainerMobile = document.getElementById('auth-container-mobile');
    const welcomeName = user.displayName.split(' ')[0];

    authContainerDesktop.innerHTML = `<span class="mr-4 text-sm font-medium text-slate-600">Welcome, ${welcomeName}!</span><button id="logout-btn-desktop" class="logout-button">Logout</button>`;
    authContainerMobile.innerHTML = `<div class="px-6 py-2 text-sm text-slate-600">Welcome, ${welcomeName}!</div><div class="p-4 pt-0"><button id="logout-btn-mobile" class="w-full logout-button">Logout</button></div>`;
    
    document.getElementById('nav-dashboard').classList.remove('hidden');
    document.getElementById('mobile-nav-dashboard').classList.remove('hidden');

    document.getElementById('logout-btn-desktop').addEventListener('click', handleLogout);
    document.getElementById('logout-btn-mobile').addEventListener('click', handleLogout);
    showSection('home-section');
}

function showLoggedOutState() {
    const authContainerDesktop = document.getElementById('auth-container-desktop');
    const authContainerMobile = document.getElementById('auth-container-mobile');

    authContainerDesktop.innerHTML = `<button id="login-btn-desktop" class="auth-button">Login</button>`;
    authContainerMobile.innerHTML = `<div class="p-4"><button id="login-btn-mobile" class="w-full auth-button">Login</button></div>`;

    document.getElementById('nav-dashboard').classList.add('hidden');
    document.getElementById('mobile-nav-dashboard').classList.add('hidden');
    
    document.getElementById('login-btn-desktop').addEventListener('click', () => showSection('login-section'));
    document.getElementById('login-btn-mobile').addEventListener('click', () => showSection('login-section'));
    
    document.getElementById('recommendations-section').classList.add('hidden');
}

export function initAuth() {
    if (SIMULATE_LOGIN) {
        // This block is now skipped, but kept for reference
        console.log("Auth simulation is active.");
        document.getElementById('google-signin-btn').addEventListener('click', () => {
            const fakeUser = { displayName: "Demo User", uid: 'fakeUserIdForTesting' };
            showLoggedInState(fakeUser);
            loadStudentDashboard(fakeUser.uid);
        });
        showLoggedOutState();
    } else {
        // --- Real Firebase Auth Logic ---
        const provider = new GoogleAuthProvider();
        document.getElementById('google-signin-btn').addEventListener('click', () => {
            signInWithPopup(auth, provider)
              .then((result) => {
                 console.log("Successfully signed in with Google:", result.user);
              })
              .catch(error => {
                console.error("Error during Google sign-in:", error.code, error.message);
              });
        });

        onAuthStateChanged(auth, (user) => {
            if (user && !user.isAnonymous) {
                showLoggedInState(user);
                loadStudentDashboard(user.uid);
            } else {
                showLoggedOutState();
            }
        });
    }
}