// Simple, dependency-free client-side validators used by the
// Login and Signup forms.

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateEmail(email) {
  if (!email || !email.trim()) {
    return "Email is required.";
  }
  if (!EMAIL_REGEX.test(email.trim())) {
    return "Enter a valid email address.";
  }
  return "";
}

export function validatePassword(password) {
  if (!password) {
    return "Password is required.";
  }
  if (password.length < 6) {
    return "Password must be at least 6 characters.";
  }
  return "";
}

export function validateRole(role, allowedRoles) {
  if (!role) {
    return "Please select a role.";
  }
  if (!allowedRoles.includes(role)) {
    return "Invalid role selected.";
  }
  return "";
}
