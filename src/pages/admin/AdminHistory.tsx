import { useEffect, useState } from "react";

interface History {
  id: string;
  action: string;
  date: string;
}

export default function AdminHistory() {
  const [history, setHistory] = useState<History[]>([]);

  useEffect(() => {
    setHistory([
      { id: "1", action: "Approved Profile", date: "2026-02-25" },
      { id: "2", action: "Reset Password", date: "2026-02-26" },
    ]);
  }, []);

  return (
    <div>
      <h2>Admin Activity History</h2>
      {history.map((item) => (
        <div key={item.id}>
          <p>{item.action} - {item.date}</p>
        </div>
      ))}
    </div>
  );
}