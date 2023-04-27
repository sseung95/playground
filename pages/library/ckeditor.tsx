// import CkEitorCompo from '@/src/components/Library/CkEitorCompo';
import dynamic from 'next/dynamic';
import React from 'react';

const CkEitorCompo = dynamic(
  () => import('@/src/components/Library/CkEitorCompo'),
  {
    ssr: false,
  }
);

const ckeditor = () => {
  return (
    <>
      <CkEitorCompo />
    </>
  );
};

export default ckeditor;
