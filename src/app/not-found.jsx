import React from 'react'

export default function notFound() {
  return (
    <div>
      <div className="hero min-h-screen">
        <div className="hero-content text-center">
            <div className="max-w-md">
                <h1 className="text-7xl font-bold">Oops! Page Not Found.</h1>
                <p className="py-6">
                You must have picked the wrong door because I haven't been able to lay my eye on the page you've been searching for.
                </p>
                <a href="/" className="btn bg-secondary text-black rounded-full text-xl">Back to Home</a>
            </div>
        </div>
      </div>
    </div>
  )
}
