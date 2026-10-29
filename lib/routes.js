// ===== ที่เดียวที่กำหนด path และเมนูทั้งเว็บ =====
// เพิ่มหน้าใหม่: เพิ่มบรรทัดที่นี่ แล้วสร้างโฟลเดอร์ตาม href ใน app/

// ฝั่งผู้ใช้  → แสดงใน Navbar   (ไฟล์อยู่ใน app/(user)/...)
export const USER_ROUTES = [
  { href: "/",        label: "หน้าแรก" },
  { href: "/pay",     label: "ชำระค่าจอด" },
  { href: "/book",    label: "จองที่จอด" },
  { href: "/history", label: "ประวัติ" },
];

// ฝั่งผู้ดูแล → แสดงใน Sidebar  (ไฟล์อยู่ใน app/admin/(panel)/...)
// key ใช้กำหนดสิทธิ์เมนู (data/admins.json → menus)
export const ADMIN_ROUTES = [
  { key: "door",     href: "/admin/door",     label: "Door Parking" },
  { key: "slots",    href: "/admin/slots",    label: "จัดการช่องจอด" },
  { key: "finance",  href: "/admin/finance",  label: "Report Finance" },
  { key: "activity", href: "/admin/activity", label: "Report Activity" },
  { key: "roles",    href: "/admin/roles",    label: "สิทธิ์ผู้ใช้" },
];
