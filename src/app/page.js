'use client';
import { useState } from 'react';

export default function Home() {
  const [counter, setCounter] = useState(0);
  const handleSubmit = (event) => {
    // event.preventDefault();
  };

  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <main>
      <img src="./favicon.ico" />
      <h3>Generate animal name</h3>
      <form action="/post">
        <input type="text" />
        <button type="submit">Submit</button>
      </form>
      <p>counter {counter}</p>
      <button type="button" onClick={() => setCounter(counter + 1)}>
        Button
      </button>
    </main>
  );
}
