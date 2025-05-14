import { useState } from "react";
import { useNavigate } from "react-router-dom";

const FlysphereLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate(); // for redirect

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Please enter both email and password");
      return;
    }

    setIsLoading(true);

    try {
      const res = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include", // if using cookies
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        console.log("Login successful:", data);
        navigate("/home", { state: { name: data.name } }); // 👈 redirect with user name
      } else {
        setError(data.message || "Login failed");
      }
    } catch (err) {
      console.error("Login error:", err);
      setError("An error occurred during login");
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="w-full max-w-md px-6">
        <div className="bg-white rounded-lg shadow-xl p-8">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <div className="text-blue-500 font-bold text-3xl flex items-center">
              <svg className="w-8 h-8 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.75 2C14.75 2 12.25 4.5 12.25 7.5C12.25 7.67 12.25 7.83 12.25 8C12.25 8.17 12.33 8.33 12.42 8.42L17.67 13.67C17.75 13.75 17.92 13.83 18.08 13.83C18.25 13.83 18.42 13.83 18.58 13.83C21.58 13.83 24.08 11.33 24.08 8.33C24.08 5.33 21.58 2.83 18.58 2.83C18.42 2.83 18.25 2.83 18.08 2.83C18 2.83 17.83 2.83 17.75 2.83V2Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M18 9.58001C17.5 9.58001 17.08 9.17001 17.08 8.67001C17.08 8.17001 17.5 7.75001 18 7.75001C18.5 7.75001 18.92 8.17001 18.92 8.67001C18.92 9.17001 18.5 9.58001 18 9.58001Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2.67 17C2.67 17.17 2.75 17.33 2.83 17.42L6.33 20.92C6.42 21 6.58 21.08 6.75 21.08H7.08C8.33 21.08 9.42 20.58 10.25 19.75C11.08 18.92 11.58 17.83 11.58 16.58V16.33C11.58 16.17 11.5 16 11.42 15.92L7.92 12.42C7.83 12.33 7.67 12.25 7.5 12.25H7.25C6 12.25 4.92 12.75 4.08 13.58C3.25 14.42 2.75 15.5 2.75 16.75C2.67 16.75 2.67 16.92 2.67 17Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M6.92 15.58C6.42 15.58 6 16 6 16.5C6 17 6.42 17.42 6.92 17.42C7.42 17.42 7.83 17 7.83 16.5C7.83 16 7.33 15.58 6.92 15.58Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M1 22H23" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Flysphere
            </div>
          </div>
          
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Welcome Back</h2>
          
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
              {error}
            </div>
          )}
          
          <div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="email">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="your@email.com"
                autoComplete="email"
                name="email"
              />
            </div>
            
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <label className="block text-gray-700 text-sm font-semibold" htmlFor="password">
                  Password
                </label>
                <a className="text-sm text-blue-500 hover:text-blue-400 cursor-pointer">
                  Forgot Password?
                </a>
              </div>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="••••••••"
                autoComplete="current-password"
                name="password"
              />
            </div>
            
            <div className="flex items-center mb-6">
              <input
                id="remember-me"
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="h-4 w-4 text-blue-500 border-gray-700 rounded focus:ring-blue-500"
                name="remember-me"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                Remember me
              </label>
            </div>
            
            <button
              onClick={handleSubmit}
              disabled={isLoading}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-150 ease-in-out"
              type="button"
            >
              {isLoading ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Signing in...
                </span>
              ) : (
                "Sign In"
              )}
            </button>
          </div>
          
          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-center text-gray-600 text-sm">
              Don't have an account?{" "}
              <span className="text-blue-500 hover:text-blue-400 font-semibold cursor-pointer">
                <a href="/signup">Sign Up</a>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};


export default FlysphereLogin;