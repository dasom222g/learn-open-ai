'use client';
import { useEffect, useState } from 'react';
import styles from './index.module.css';
// import Counter from './components/Counter';

export default function Home() {
  const [value, setValue] = useState('');
  const [result, setResult] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!value.length) return;

    // api 호출
    try {
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ animal: value }),
      });

      const data = await response.json();
      if (data.status !== 200) {
        // 200코드 이외의 결과값은 catch 문으로 보내는 코드
        throw data || new Error(`Request failed with status ${data.status}`);
      }
      setResult(data.data);
    } catch (error) {
      console.error(error.message);
    }

    setValue('');
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const getData = async () => {
    const response = await fetch('/api/user');
    const data = await response.json();
    console.log('🚀 : data==>', data);
  };

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
      <div className={styles.result}>{result}</div>
      <button type="button" onClick={getData}>
        get API
      </button>
      {/* <Counter /> */}
    </main>
  );
}
