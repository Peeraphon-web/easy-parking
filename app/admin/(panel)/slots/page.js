// หน้า: จัดการชั้นและช่องจอด
// ผู้รับผิดชอบ: [ชื่อสมาชิก]
// แก้เฉพาะไฟล์ในโฟลเดอร์นี้ ถ้าต้องสร้าง component เฉพาะหน้า ให้สร้างไว้ข้างไฟล์นี้
import PageHeader from "@/components/PageHeader";
import Todo from "@/components/Todo";
import floors from "@/data/floors.json";

export default function SlotsPage() {
  return (
    <div className="stack">
      <PageHeader title="จัดการชั้นและช่องจอด" subtitle="เพิ่ม แก้ไข ลบ ชั้นและช่องจอด" />
      <Todo
        owner="[ชื่อสมาชิก]"
        items={["ตารางชั้น + จำนวนช่อง ว่าง/ไม่ว่าง", "ปุ่มเพิ่ม/ลด/ลบ"]}
      />
      <p className="muted">ตัวอย่างข้อมูล: data/floors.json มี {floors.length} รายการ</p>
    </div>
  );
}
