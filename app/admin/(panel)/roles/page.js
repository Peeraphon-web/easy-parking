// หน้า: สิทธิ์ผู้ใช้
// ผู้รับผิดชอบ: [ชื่อสมาชิก]
// แก้เฉพาะไฟล์ในโฟลเดอร์นี้ ถ้าต้องสร้าง component เฉพาะหน้า ให้สร้างไว้ข้างไฟล์นี้
import PageHeader from "@/components/PageHeader";
import Todo from "@/components/Todo";
import admins from "@/data/admins.json";

export default function RolesPage() {
  return (
    <div className="stack">
      <PageHeader title="สิทธิ์ผู้ใช้" subtitle="กำหนดเมนูที่ผู้ดูแลแต่ละคนเข้าได้" />
      <Todo
        owner="[ชื่อสมาชิก]"
        items={["ตารางผู้ใช้ × เมนู (data/admins.json)", "ติ๊กเปิด/ปิดสิทธิ์"]}
      />
      <p className="muted">ตัวอย่างข้อมูล: data/admins.json มี {admins.length} รายการ</p>
    </div>
  );
}
