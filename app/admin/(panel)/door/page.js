// หน้า: Door Parking
// ผู้รับผิดชอบ: [ชื่อสมาชิก]
// แก้เฉพาะไฟล์ในโฟลเดอร์นี้ ถ้าต้องสร้าง component เฉพาะหน้า ให้สร้างไว้ข้างไฟล์นี้
import PageHeader from "@/components/PageHeader";
import Todo from "@/components/Todo";
import cars from "@/data/cars.json";

export default function DoorPage() {
  return (
    <div className="stack">
      <PageHeader title="Door Parking" subtitle="ทางออก A · กล้อง CCTV (จำลอง)" />
      <Todo
        owner="[ชื่อสมาชิก]"
        items={["วิดีโอ CCTV จำลอง", "ทะเบียนที่อ่านได้ เวลาเข้า-ออก เวลาจอด ค่าจอด", "ตารางรถที่อยู่ในลาน"]}
      />
      <p className="muted">ตัวอย่างข้อมูล: data/cars.json มี {cars.length} รายการ</p>
    </div>
  );
}
