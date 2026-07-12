import { Navigate } from "react-router-dom";
import { getToken } from "../utils/auth";

// Wrap any route that requires a logged-in user, e.g.:
// <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
//
// If there is no token in localStorage, the user is redirected
// back to the login page ("/").
export default function ProtectedRoute({ children }) {
  const token = getToken();

  if (!token) {
    return <Navigate to="/" replace />;
  }

  return children;
}
