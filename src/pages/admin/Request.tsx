import RequestCard from "../../components/admin/RequestCard";

export default function Request() {
  return (
    <div>
      <h2>Requests</h2>

      <RequestCard
        title="New Profile"
        description="Profile waiting for approval"
        status="PENDING"
        onApprove={() => console.log("Approved")}
        onReject={() => console.log("Rejected")}
      />
    </div>
  );
}