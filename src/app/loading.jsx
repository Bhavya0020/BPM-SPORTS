import React from 'react'

export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen w-full">
      <div className="modal-box bg-secondart text-black w-full max-w-2xl mx-auto">
        <div className='bg-white p-8 rounded-3xl flex items-center justify-center'>
            <span className="loading loading-spinner w-32 h-32 text-secondary"></span>
        </div>
        <div className='mt-6 text-center text-primary'>
            <h2 className="font-bold text-4xl">Hang on Tight!!</h2>
            <p className="py-4 text-xl">We are analyzing your career journey. It can take sometime</p>
        </div>
      </div>
    </div>
  )
}