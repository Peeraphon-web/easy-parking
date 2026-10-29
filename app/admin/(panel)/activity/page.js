// หน้า: Report Activity
// ผู้รับผิดชอบ: [ชื่อสมาชิก]
// แก้เฉพาะไฟล์ในโฟลเดอร์นี้ ถ้าต้องสร้าง component เฉพาะหน้า ให้สร้างไว้ข้างไฟล์นี้
import PageHeader from "@/components/PageHeader";
import Todo from "@/components/Todo";
import cars from "@/data/cars.json";

export default function ActivityPage() {
  return (
    <div className="stack">
      <PageHeader title="Report Activity" subtitle="รถเข้า-ออก ช่วงหนาแน่น ประเภทรถ Heat map" />
      <Todo
        owner="[ชื่อสมาชิก]"
        items={["ตารางรถเข้า-ออก + ตัวกรองวันเวลา", "กราฟช่วงเวลาหนาแน่น", "สัดส่วนประเภทรถ", "Heat map ช่องจอด"]}
      />
      <p className="muted">ตัวอย่างข้อมูล: data/cars.json มี {cars.length} รายการ</p>
    </div>
  );
}
