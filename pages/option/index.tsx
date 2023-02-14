import OptionInputList from '@/src/components/OptionInputList/OptionInputList';
import styles from '@/styles/Home.module.css';
import React, { useState } from 'react';

const index = () => {
  return (
    <main className={styles.main}>
      <OptionInputList />
    </main>
  );
};

export default index;
