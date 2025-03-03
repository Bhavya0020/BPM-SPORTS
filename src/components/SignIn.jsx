"use client"

import React, { useState } from 'react';
import { useSignIn } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';

export default function Login() {
  const { signIn, isLoaded, setActive } = useSignIn();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleSignIn = async (e) => {
    e.preventDefault();
    if (!isLoaded) return;

    try {
      const result = await signIn.create({
        identifier: email,
        password,
      });
      console.log("result", result);
      
      if (result.status === 'complete') {
        await setActive({ session: result.createdSessionId });
        router.push('/shop');  // Redirect to homepage after successful login
      } else {
        setError('Authentication incomplete. Please try again.');
      }
    } catch (err) {
      console.log('error', err);
      setError('Invalid email or password');
    }
  };

  return (
    <div className="flex justify-center items-center pt-20">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <form className="card-body" onSubmit={handleSignIn}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              className="input input-bordered rounded-full"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              className="input input-bordered rounded-full"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          {error && <p className="text-red-500">{error}</p>}
          <div className="form-control mt-6">
            <button type="submit" className="btn bg-secondary hover:bg-primary text-xl text-white rounded-full">
              Login
            </button>
          </div>
          <div className="divider">OR</div>
          <div className="form-control">
            <button
              type="button"
              className="btn btn-outline rounded-full"
              onClick={() => signIn.authenticateWithRedirect({ strategy: 'oauth_google', redirectUrl: '/' })}
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
                alt="Google"
                className="w-6 h-6 mr-2"
              />
              Login with Google
            </button>
          </div>
          <div className="form-control">
            <button
              type="button"
              className="btn btn-outline rounded-full"
              onClick={() => signIn.authenticateWithRedirect({ strategy: 'oauth_linkedin', redirectUrl: '/' })}
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
                alt="LinkedIn"
                className="w-6 h-6 mr-2"
              />
              Login with LinkedIn
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
