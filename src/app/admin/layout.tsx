// src/app/admin/layout.tsx
import AdminSidebar from '@/components/admin/AdminSidebar';
import AdminAuth from '@/components/admin/AdminAuth';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <AdminAuth>
      <div className="flex min-h-screen">
        <AdminSidebar />
        <div className="flex-1 p-6">
          {children}
        </div>
      </div>
    </AdminAuth>
  );
}