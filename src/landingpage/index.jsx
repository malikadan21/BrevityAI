import Header from '@/components/custom/Header';
import { UserButton } from '@clerk/clerk-react';
import { AtomIcon, Edit, Share2 } from 'lucide-react';
import React from 'react';

function Home() {
  return (
    <div>
      <Header />
      <section className="z-50">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            Build Your Resume <span className='text-primary'>With AI</span>
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
            Effortlessly craft a standout resume with our AI-powered builder.
          </p>
          <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <a href="/auth/sign-in" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-primary hover:bg-primary-dark focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
              Get Started
              <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
              </svg>
            </a>
          </div>
        </div>
      </section>
      
      <section className="py-8 bg-white z-50 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
        <h2 className="font-bold text-3xl">How it Works?</h2>
        <p className="text-md text-gray-500">Create your resume in just three easy steps:</p>

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <a className="block rounded-xl border bg-white border-gray-200 p-8 shadow-xl transition hover:border-primary/10 hover:shadow-primary/10" href="#">
            <AtomIcon className='h-8 w-8' />
            <h2 className="mt-4 text-xl font-bold text-black">Input Your Details</h2>
            <p className="mt-1 text-sm text-gray-600">
              Start by providing your job title, experience, and key skills. Our AI will do the rest.
            </p>
          </a>

          <a className="block rounded-xl border bg-white border-gray-200 p-8 shadow-xl transition hover:border-primary/10 hover:shadow-primary/10" href="#">
            <Edit className='h-8 w-8' />
            <h2 className="mt-4 text-xl font-bold text-black">Customize Your Resume</h2>
            <p className="mt-1 text-sm text-gray-600">
              Easily edit and refine your resume to fit your needs. Add, remove, or modify sections.
            </p>
          </a>

          <a className="block rounded-xl border bg-white border-gray-200 p-8 shadow-xl transition hover:border-primary/10 hover:shadow-primary/10" href="#">
            <Share2 className='h-8 w-8' />
            <h2 className="mt-4 text-xl font-bold text-black">Share & Download</h2>
            <p className="mt-1 text-sm text-gray-600">
              Share your polished resume with potential employers or download it for future use.
            </p>
          </a>
        </div>

        <div className="mt-12 text-center">
          <a href="/auth/sign-in" className="inline-block rounded bg-primary px-12 py-3 text-sm font-medium text-white transition hover:bg-primary-dark focus:outline-none focus:ring focus:ring-primary-300">
            Get Started Today
          </a>
        </div>
      </section>
    </div>
  );
}

export default Home;
