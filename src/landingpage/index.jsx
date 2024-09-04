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
      </section>
    </div>
  );
}

export default Home;
