'use client';
import { useEffect, useState } from 'react';
import styles from './index.module.css';

export default function Home() {
  const [value, setValue] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log('value', value);
    setValue('');

    // api 호출
    try {
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ animal: value }),
      });

      const data = response.json();
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const getData = async () => {
    const response = await fetch('/api/user');
    const data = await response.json();
    console.log('🚀 : data==>', data);
  };

  // useEffect(() => {
  //   console.log('styles', styles.main);
  // });

  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <main className={styles.main}>
      <img src="./favicon.ico" className={styles.icon} />
      <h3>Generate animal name</h3>
      <form onSubmit={(event) => handleSubmit(event)}>
        <input
          type="text"
          value={value}
          onChange={(event) => handleChange(event)}
        />
        <button type="submit">Submit</button>
      </form>
      <div className={styles.result}>결과 부분</div>
      <button type="button" onClick={getData}>
        get API
      </button>
    </main>
  );
}
