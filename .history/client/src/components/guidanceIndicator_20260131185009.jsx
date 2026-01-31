export default function GuidanceIndicator({ status }) {
    return (
      <div className={`guide ${status.toLowerCase()}`}>
        {status}
      </div>
    );
  }
  