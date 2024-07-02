import React from 'react';

const LoginForm = () => {
  return (
    <div className="text-center">
      <h2 className="mb-4">User Login</h2>
      <form>
        <div className="mb-6">
        
          <input type="text" id="mobile" name="mobile" placeholder="Mobile" className="w-full px-3 py-2 border rounded-md" />
        </div>
        <div className="mb-6">
          
          <input type="password" id="password" name="password" placeholder="Password" className="w-full px-3 py-2 border rounded-md" />
        </div>
        <button type="submit" className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md">Login</button>
      </form>
      <a href="/forgot-password" className="block mt-4 text-green-500 hover:underline">Forgot your Password?</a>
      <a href="/register" className="block text-green-500 hover:underline">Register</a>
    </div>
  );
}

export default LoginForm;
