import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="container">
      <h2>बाज़ार में सही दाम पाएं</h2>
      <button onClick={() => navigate("/negotiate")}>
        बातचीत शुरू करें
      </button>
    </div>
  );
}
