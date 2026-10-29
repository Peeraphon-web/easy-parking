// หน้า: ชำระค่าจอด
// ผู้รับผิดชอบ: [ชื่อสมาชิก]
// แก้เฉพาะไฟล์ในโฟลเดอร์นี้ ถ้าต้องสร้าง component เฉพาะหน้า ให้สร้างไว้ข้างไฟล์นี้
import PageHeader from "@/components/PageHeader";
import Todo from "@/components/Todo";
import cars from "@/data/cars.json";

export default function PayPage() {
  return (
    <div className="stack">
      <PageHeader title="ชำระค่าจอด" subtitle="เปิดจากการสแกน QR Code" />
      <Todo
        owner="[ชื่อสมาชิก]"
        items={["ค้นหาทะเบียน + แจ้งเตือนเมื่อผิดรูปแบบ (isValidPlate)", "แสดงรูปรถ เวลาเข้า เวลาจอด ค่าจอด (calcFee)", "ปุ่มชำระ → แสดง ThaiQR (จำลอง) → ใบเสร็จ"]}
      />
      <p className="muted">ตัวอย่างข้อมูล: data/cars.json มี {cars.length} รายการ</p>
    </div>
  );
}
