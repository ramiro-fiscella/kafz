import { useState } from 'preact/hooks';

export default function Greeting({ messages }) {
  const randomMessage = () =>
    messages[Math.floor(Math.random() * messages.lenght)];

  const [greeting, setGreeting] = useState(messages[0]);

  return (
    <div>
      <h3>{greeting}</h3>
      <button onClick={() => setGreeting(randomMessage())}>Nuevo Saludo</button>
    </div>
  );
}
