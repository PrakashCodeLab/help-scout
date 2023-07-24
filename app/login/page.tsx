import React from 'react';
import { Logo } from '@/components';
import Link from 'next/link';

const LoginPage = () => {
  return (
    <section className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <div className="mb-8">
          <Logo />
        </div>
        <form>
          <h5 className="text-2xl font-bold mb-4">Log in</h5>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Email Address"
              name="email"
              id="email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              placeholder="Password"
              name="password"
              id="password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div className="mb-4 flex items-center">
            <input
              type="checkbox"
              id="rememberMe"
              className="mr-2"
            />
            <label htmlFor="rememberMe">Remember me for 30 days</label>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
          >
            Log in
          </button>
          <p className="my-4 text-center text-gray-500">or</p>
          <button
            type="submit"
            className="w-full bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 focus:outline-none focus:ring focus:border-red-300"
          >
            <span>Sign in with Google</span>
          </button>
          <Link href={'/'} className="block text-center mt-4 text-blue-500 hover:underline">
            Forgot your password?
          </Link>
        </form>
        <div className="mt-4">
          <p>
            Looking for a better way to talk with customers?{' '}
            <span>
              <Link href={'/'} className="text-blue-500 hover:underline">
                Try Help Scout
              </Link>
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}

export default LoginPage;
