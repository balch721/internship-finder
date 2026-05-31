// Shared Firebase auth module for Aryan's Internship Finder.
// Loaded as a module: <script type="module" src="firebase-auth.js"></script>
// Exposes window.AIF_AUTH with helpers + an onUser(cb) subscription.

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-app.js";
import {
  getAuth,
  setPersistence,
  browserLocalPersistence,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  sendPasswordResetEmail,
  signOut,
  onAuthStateChanged,
  updateProfile,
  updatePassword,
  verifyBeforeUpdateEmail,
  sendEmailVerification,
  deleteUser,
  reauthenticateWithCredential,
  reauthenticateWithPopup,
  EmailAuthProvider
} from "https://www.gstatic.com/firebasejs/12.14.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyC8l5QcRBvTT4HjLSJzj4U6sTl1EcVR3nI",
  authDomain: "internship-finder-e072a.firebaseapp.com",
  projectId: "internship-finder-e072a",
  storageBucket: "internship-finder-e072a.firebasestorage.app",
  messagingSenderId: "732060725010",
  appId: "1:732060725010:web:ee069113e90088b2bd0dcb",
  measurementId: "G-E398KVBZP1"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
// keep the user signed in across page loads / tabs
setPersistence(auth, browserLocalPersistence).catch(() => {});

const googleProvider = new GoogleAuthProvider();

// friendlier error text
function pretty(err) {
  const c = (err && err.code) || "";
  const map = {
    "auth/invalid-email": "That email address looks invalid.",
    "auth/missing-password": "Please enter a password.",
    "auth/weak-password": "Password should be at least 6 characters.",
    "auth/email-already-in-use": "An account already exists with that email — try signing in.",
    "auth/invalid-credential": "Email or password is incorrect.",
    "auth/wrong-password": "Email or password is incorrect.",
    "auth/user-not-found": "No account found with that email — try signing up.",
    "auth/too-many-requests": "Too many attempts. Please wait a moment and try again.",
    "auth/popup-closed-by-user": "Sign-in popup was closed before finishing.",
    "auth/unauthorized-domain": "This domain isn't authorized in Firebase. Run the site on localhost or your hosted URL (see setup notes)."
  };
  return map[c] || (err && err.message) || "Something went wrong. Please try again.";
}

window.AIF_AUTH = {
  auth,
  onUser(cb) { return onAuthStateChanged(auth, cb); },
  async signUp(email, password, name) {
    const cred = await createUserWithEmailAndPassword(auth, email, password);
    if (name) { try { await updateProfile(cred.user, { displayName: name }); } catch (e) {} }
    return cred.user;
  },
  async signIn(email, password) {
    const cred = await signInWithEmailAndPassword(auth, email, password);
    return cred.user;
  },
  async signInGoogle() {
    const cred = await signInWithPopup(auth, googleProvider);
    return cred.user;
  },
  async resetPassword(email) { return sendPasswordResetEmail(auth, email); },
  async logout() { return signOut(auth); },

  // ---- account management ----
  currentUser() { return auth.currentUser; },
  // true if the user signed in with email/password (vs Google)
  hasPasswordProvider() {
    const u = auth.currentUser;
    return !!(u && u.providerData.some(p => p.providerId === "password"));
  },
  isGoogleUser() {
    const u = auth.currentUser;
    return !!(u && u.providerData.some(p => p.providerId === "google.com"));
  },
  async updateName(name) {
    return updateProfile(auth.currentUser, { displayName: name });
  },
  // re-auth is required by Firebase before sensitive changes
  async reauth(currentPassword) {
    const u = auth.currentUser;
    if (this.isGoogleUser() && !this.hasPasswordProvider()) {
      await reauthenticateWithPopup(u, googleProvider);
    } else {
      const cred = EmailAuthProvider.credential(u.email, currentPassword);
      await reauthenticateWithCredential(u, cred);
    }
  },
  async changePassword(currentPassword, newPassword) {
    await this.reauth(currentPassword);
    await updatePassword(auth.currentUser, newPassword);
  },
  // sends a confirmation link to the NEW address; email changes after they click it
  async changeEmail(newEmail, currentPassword) {
    await this.reauth(currentPassword);
    await verifyBeforeUpdateEmail(auth.currentUser, newEmail);
  },
  async sendVerification() {
    return sendEmailVerification(auth.currentUser);
  },
  async deleteAccount(currentPassword) {
    await this.reauth(currentPassword);
    await deleteUser(auth.currentUser);
  },
  pretty
};
