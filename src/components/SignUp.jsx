"use client"

import React from 'react';

export default function Login() {
  return (
    <div>
      <div className="flex justify-center items-center pt-20">
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered rounded-full"
                  required
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
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered rounded-full"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-purple-600 text-xl text-white rounded-full">
                  Sign Up
                </button>
              </div>
              <div className="divider">OR</div>
          <div className="form-control">
            <button
              type="button"
              className="btn btn-outline rounded-full"
              onClick={() => signIn.authenticateWithRedirect({ strategy: 'oauth_google' })}
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
                alt="Google"
                className="w-6 h-6 mr-2"
              />
              Sign Up with Google
            </button>
          </div>
          <div className="form-control">
            <button
              type="button"
              className="btn btn-outline rounded-full"
              onClick={() => signIn.authenticateWithRedirect({ strategy: 'oauth_linkedin' })}
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
                alt="LinkedIn"
                className="w-6 h-6 mr-2"
              />
              Sign Up with LinkedIn
            </button>
          </div>
            </form>
          </div>
        </div>
      </div>
    // </div>
  );
}
