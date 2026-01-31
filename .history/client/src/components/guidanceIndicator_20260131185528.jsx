export default function GuidanceIndicator({ action }) {
    return (
      <div className={`guide ${action.toLowerCase()}`}>
        {action}
      </div>
    );
  }
  