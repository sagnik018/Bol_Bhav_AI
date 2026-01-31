import { useEffect, useState } from "react";
import GuidanceIndicator from "../components/GuidanceIndicator";

export default function Result() {
  const [result, setResult] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/result")
      .then(res => res.json())
      .then(data => setResult(data));
  }, []);

  if (!result) return <p>Loading...</p>;

  return (
    <div className="container">
      <h2>सलाह</h2>
      <GuidanceIndicator action={result.action} />
    </div>
  );
}
