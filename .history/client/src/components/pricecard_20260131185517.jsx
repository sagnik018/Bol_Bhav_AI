export default function PriceCard({ marketPrice }) {
    return (
      <div className="card">
        <h3>Market Price</h3>
        <p>₹{marketPrice}</p>
      </div>
    );
  }
  