// Small helpers around localStorage-based session state.
// Kept in one place so every page/component reads and writes
// the session the same way.

export function getToken() {
  return localStorage.getItem("token");
}

export function getUser() {
  const raw = localStorage.getItem("user");
  try {
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

export function setSession(token, user) {
  localStorage.setItem("token", token);
  localStorage.setItem("user", JSON.stringify(user));
}

// Clears the session and sends the user back to the login page.
// `navigate` is the function returned by react-router's useNavigate().
export function logout(navigate) {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  navigate("/");
}
