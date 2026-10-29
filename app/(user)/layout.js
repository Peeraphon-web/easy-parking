// Layout ฝั่งผู้ใช้: ทุกหน้าใน app/(user)/ จะมี Navbar อัตโนมัติ
// (user) ในวงเล็บ = route group ไม่ปรากฏใน URL  →  app/(user)/pay/page.js = /pay
import Navbar from "@/components/Navbar";

export default function UserLayout({ children }) {
  return (
    <>
      <Navbar />
      <main className="container">{children}</main>
    </>
  );
}
