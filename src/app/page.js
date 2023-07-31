'use client';
import { useEffect, useState } from 'react';
import styles from './index.module.css';

export default function Home() {
  const [value, setValue] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('value', value);
    setValue('');
  };

  const handleChange = (event) => {
    setValue(event.target.value);
    console.log('styles', styles.main);
  };

  // useEffect(() => {
  //   console.log('styles', styles.main);
  // });

  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <main className={styles.main}>
      <img src="./favicon.ico" className={styles.icon} />
      <h3>Generate animal name</h3>
      <form action="/post" onSubmit={(event) => handleSubmit(event)}>
        <input
          type="text"
          value={value}
          onChange={(event) => handleChange(event)}
        />
        <button type="submit">Submit</button>
      </form>
      <div className={styles.result}>결과 부분</div>
    </main>
  );
}
