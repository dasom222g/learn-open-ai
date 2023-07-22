// import './globals.css';
export default function Home() {
  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <main>
      <img src="./favicon.ico" />
      <h3>Generate animal name</h3>
      <form action="/post">
        <input type="text" />
        <button type="submit">Submit</button>
      </form>
    </main>
  );
}
