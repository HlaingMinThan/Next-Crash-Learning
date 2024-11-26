'use client';
import { X } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

function ResetSearchForm() {
  let resetForm = () => {
    let form = document.getElementById('search-form') as HTMLFormElement;
    if (form) {
      form.reset();
    }
  };
  return (
    <button className="search-btn text-white" onClick={resetForm}>
      <Link href={'/'}>
        <X className="size-5" />
      </Link>
    </button>
  );
}

export default ResetSearchForm;
