'use client';
import { useState } from 'react';

export default function Home() {
  const [value, setValue] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('value', value);
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <main>
      <img src="./favicon.ico" />
      <h3>Generate animal name</h3>
      <form action="/post" onSubmit={(event) => handleSubmit(event)}>
        <input
          type="text"
          value={value}
          onChange={(event) => handleChange(event)}
        />
        <button type="submit">Submit</button>
      </form>
    </main>
  );
}
