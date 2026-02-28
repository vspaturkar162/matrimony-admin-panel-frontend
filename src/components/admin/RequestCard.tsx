import React from "react";

interface RequestCardProps {
  title: string;
  description: string;
  status: "PENDING" | "APPROVED" | "REJECTED";
  onApprove?: () => void;
  onReject?: () => void;
}

const RequestCard: React.FC<RequestCardProps> = ({
  title,
  description,
  status,
  onApprove,
  onReject,
}) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>{description}</p>
      <p>Status: {status}</p>

      {status === "PENDING" && (
        <div>
          <button onClick={onApprove}>Approve</button>
          <button onClick={onReject}>Reject</button>
        </div>
      )}
    </div>
  );
};

export default RequestCard;