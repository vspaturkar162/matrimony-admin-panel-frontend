export const resetAdminPassword = async (
  adminId: string,
  password?: string
) => {
  return fetch(`/api/admin/${adminId}/reset-password`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ password }),
  });
};

export const changeOwnPassword = async (data: any) => {
  return fetch(`/api/admin/change-password`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
};