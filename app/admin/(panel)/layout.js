// Layout ฝั่งผู้ดูแล: ทุกหน้าใน app/admin/(panel)/ จะมี Sidebar อัตโนมัติ
// หน้า /admin/login อยู่นอก (panel) จึงไม่มี Sidebar
import Sidebar from "@/components/Sidebar";

export default function AdminLayout({ children }) {
  return (
    <div className="admin-shell" style={{ display: "flex", flexWrap: "wrap", minHeight: "100vh" }}>
      <Sidebar />
      <main style={{ flex: 1, minWidth: 0, padding: "24px 24px 48px" }}>
        <div className="stack">{children}</div>
      </main>
    </div>
  );
}
