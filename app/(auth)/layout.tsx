import Image from 'next/image';
import React from 'react';

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid h-screen grid-cols-2">
      <div className="flex h-full flex-col justify-center space-y-20 bg-brand-100 p-10">
        <div className="flex items-center space-x-3">
          <div>
            <Image src="/assets/icons/logo-full.svg" width={200} height={200} alt="" />
          </div>
        </div>
        <div className="space-y-5">
          <h1 className="h1 text-white">Manage your files the best way</h1>
          <p className="text-white">
            Awesome, we've created the perfect place for you to store all your documents.
          </p>
        </div>
        <div className="flex justify-center transition-all hover:rotate-12 hover:transform">
          <Image src="/assets/images/files.png" width={300} height={300} alt="" />
        </div>
      </div>
      <div className="flex items-center justify-center">{children}</div>
    </div>
  );
}
