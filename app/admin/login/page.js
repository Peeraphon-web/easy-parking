// หน้า: เข้าสู่ระบบผู้ดูแล (ไม่มี Sidebar เพราะอยู่นอก (panel))
// ผู้รับผิดชอบ: [ชื่อสมาชิก]
"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import admins from "@/data/admins.json";

export default function LoginPage() {
  const router = useRouter();
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const user = admins.find(
      (a) => a.username === form.get("username") && a.password === form.get("password")
    );
    if (!user) return setError("ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง");
    // TODO: เก็บ user ไว้ (เช่น localStorage) แล้วส่ง user.menus ให้ Sidebar
    router.push("/admin/door");
  }

  return (
    <main style={{ minHeight: "100vh", display: "grid", placeItems: "center", padding: 16 }}>
      <form onSubmit={handleSubmit} className="card stack" style={{ width: "100%", maxWidth: 380 }}>
        <h1 style={{ fontSize: 24 }}>เข้าสู่ระบบผู้ดูแล</h1>
        <input className="input" name="username" placeholder="ชื่อผู้ใช้" defaultValue="admin" />
        <input className="input" name="password" type="password" placeholder="รหัสผ่าน" defaultValue="1234" />
        {error && <p style={{ color: "var(--bad)", margin: 0 }}>{error}</p>}
        <button className="btn">เข้าสู่ระบบ</button>
        <p className="muted" style={{ margin: 0, fontSize: 13 }}>บัญชีทดลอง: admin / 1234 · staff / 1234</p>
      </form>
    </main>
  );
}
