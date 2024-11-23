import Image from 'next/image';
import React from 'react';

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen w-full">
      <div className="bg-brand-100 flex h-full w-[40%] flex-col justify-center space-y-20 p-10">
        <div className="flex items-center space-x-3">
          <div>
            <Image src="/logo.png" width={50} height={50} alt="" />
          </div>
          <h3 className="text-2xl font-semibold text-white">Store It</h3>
        </div>
        <div className="space-y-5">
          <h1 className="h1 text-white">Manage your files the best way</h1>
          <p className="text-white">
            Awesome, we've created the perfect place for you to store all your documents.
          </p>
        </div>
        <div className="flex justify-center">
          <Image src="/auth.png" width={300} height={300} alt="" />
        </div>
      </div>
      <div className="w-[60%]">{children}</div>
    </div>
  );
}
