import { useState } from 'react';

function LoginPage() {
  const [selectedRole, setSelectedRole] = useState("civilian");
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    // Implement login logic here
    console.log(`Logging in as ${selectedRole} with`, formData);
    if (formData.email && formData.password) {
      localStorage.setItem('role', selectedRole);
     window.location.href = '/civilian'; // Redirect after login
    }
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 py-12 px-4">
      <div className="container mx-auto max-w-5xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-3">Welcome to Raahi</h1>
          
        </div>

        {/* Role Selection or Login Form */}
        (
          <div className="max-w-md mx-auto">
            {/* Login Form */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="text-center mb-8">
                <div className={`${selectedRole === 'civilian' ? 'bg-blue-100' : 'bg-orange-100'} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                  {selectedRole === 'civilian' ? (
                    <svg className="w-8 h-8 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  ) : (
                    <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  )}
                </div>
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                   Login
                </h2>
                <p className="text-gray-600">Enter your credentials to continue</p>
              </div>

              <div className="space-y-6">
                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                    placeholder="Enter your email"
                  />
                </div>

                {/* Password Field */}
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                    placeholder="Enter your password"
                  />
                </div>

                {/* Forgot Password Link */}
                <div className="text-right">
                  <button className="text-sm text-blue-600 hover:text-blue-800">
                    Forgot Password?
                  </button>
                </div>

                {/* Login Button */}
                <button
                  onClick={handleSubmit}
                  className={`w-full ${selectedRole === 'civilian' ? 'bg-blue-900 hover:bg-blue-800' : 'bg-orange-600 hover:bg-orange-700'} text-white font-semibold py-3 rounded-lg transition-colors shadow-md`}
                >
                  Login 
                </button>

              </div>



              </div>

            </div>

            {/* Register Link */}
            <div className="text-center mt-6">
              <p className="text-gray-600">
                Don't have an account?{' '}
                <button className="text-blue-600 hover:text-blue-800 font-semibold">
                  Register here
                </button>
              </p>
            </div>
          </div>
        )

     
      </div>
  );
}

export default LoginPage;