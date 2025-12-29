import { useState } from 'react';

function LoginPage() {
  const [selectedRole, setSelectedRole] = useState(null);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleRoleSelect = (role) => {
    setSelectedRole(role);
    setFormData({ email: '', password: '' });
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    // Dummy authentication logic
    if (formData.email && formData.password) {
      if (selectedRole === 'civilian') {
        // Redirect to civilian dashboard
        alert('Login successful! Redirecting to Civilian Dashboard...');
        window.location.href = '/civilian';
      } else if (selectedRole === 'admin') {
        // Redirect to admin dashboard
        alert('Login successful! Redirecting to Admin Dashboard...');
        window.location.href = '/admin';
      }
    } else {
      alert('Please fill in all fields');
    }
  };

  const handleBackToRoleSelection = () => {
    setSelectedRole(null);
    setFormData({ email: '', password: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 py-12 px-4">
      <div className="container mx-auto max-w-5xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-3">Welcome to Raahi</h1>
          <p className="text-lg text-gray-600">Select your role to continue</p>
        </div>

        {/* Role Selection or Login Form */}
        {!selectedRole ? (
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Civilian Login Card */}
            <div
              onClick={() => handleRoleSelect('civilian')}
              className="bg-white rounded-lg shadow-lg p-8 cursor-pointer hover:shadow-2xl transition-all transform hover:-translate-y-1 border-2 border-transparent hover:border-blue-500"
            >
              <div className="text-center">
                <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-800 mb-3">Civilian Login</h2>
                <p className="text-gray-600 mb-6">
                  Report potholes and track your submissions
                </p>
                <div className="bg-blue-50 rounded-lg p-4 text-left">
                  <p className="text-sm text-gray-700 font-semibold mb-2">Access to:</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>✓ Report new issues</li>
                    <li>✓ Track your reports</li>
                    <li>✓ View repair status</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Administrator Login Card */}
            <div
              onClick={() => handleRoleSelect('admin')}
              className="bg-white rounded-lg shadow-lg p-8 cursor-pointer hover:shadow-2xl transition-all transform hover:-translate-y-1 border-2 border-transparent hover:border-orange-500"
            >
              <div className="text-center">
                <div className="bg-orange-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-800 mb-3">Administrator Login</h2>
                <p className="text-gray-600 mb-6">
                  Manage reports and coordinate repairs
                </p>
                <div className="bg-orange-50 rounded-lg p-4 text-left">
                  <p className="text-sm text-gray-700 font-semibold mb-2">Access to:</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>✓ View all reports</li>
                    <li>✓ Assign repair teams</li>
                    <li>✓ Update repair status</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ) : (
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
                  {selectedRole === 'civilian' ? 'Civilian Login' : 'Administrator Login'}
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
                  Login as {selectedRole === 'civilian' ? 'Civilian' : 'Administrator'}
                </button>

                {/* Back Button */}
                <button
                  onClick={handleBackToRoleSelection}
                  className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-3 rounded-lg transition-colors"
                >
                  Back to Role Selection
                </button>
              </div>

              {/* Demo Credentials */}
              <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
                <p className="text-xs text-gray-600 text-center mb-2 font-semibold">Demo Credentials</p>
                <p className="text-xs text-gray-500 text-center">
                  Email: demo@raahi.gov | Password: demo123
                </p>
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
        )}

        {/* Government Badge */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-2 bg-white px-6 py-3 rounded-full shadow-md">
            <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-sm text-gray-700 font-medium">Government of India Verified Portal</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;