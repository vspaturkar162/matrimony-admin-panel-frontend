// import SuperAdminSidebar from "./SuperAdminSidebar";

export default function SuperAdminLayout({ children }: any) {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* <SuperAdminSidebar /> */}
      <div className="flex-1">{children}</div>
    </div>
  );
}