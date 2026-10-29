// หน้า: หน้าแรก
// ผู้รับผิดชอบ: [ชื่อสมาชิก]
// แก้เฉพาะไฟล์ในโฟลเดอร์นี้ ถ้าต้องสร้าง component เฉพาะหน้า ให้สร้างไว้ข้างไฟล์นี้
import PageHeader from "@/components/PageHeader";
import Todo from "@/components/Todo";
import slots from "@/data/slots.json";

export default function HomePage() {
  return (
    <div className="stack">
      <PageHeader title="หน้าแรก" subtitle="ค้นหารถและดูช่องจอดว่าง" />
      <Todo
        owner="[ชื่อสมาชิก]"
        items={["ช่องค้นหาทะเบียน → ส่งไปหน้า /pay?plate=...", "ช่องจอดว่างแยกตามชั้น (data/slots.json)", "ปุ่มทางลัด อัตราค่าจอด (data/rates.json) วิธีใช้งาน"]}
      />
      <p className="muted">ตัวอย่างข้อมูล: data/slots.json มี {slots.length} รายการ</p>
    </div>
  );
}
