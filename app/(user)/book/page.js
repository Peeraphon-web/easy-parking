// หน้า: จองที่จอดล่วงหน้า
// ผู้รับผิดชอบ: [ชื่อสมาชิก]
// แก้เฉพาะไฟล์ในโฟลเดอร์นี้ ถ้าต้องสร้าง component เฉพาะหน้า ให้สร้างไว้ข้างไฟล์นี้
import PageHeader from "@/components/PageHeader";
import Todo from "@/components/Todo";
import bookings from "@/data/bookings.json";

export default function BookPage() {
  return (
    <div className="stack">
      <PageHeader title="จองที่จอดล่วงหน้า" subtitle="เลือกชั้น เลือกช่อง เลือกเวลา" />
      <Todo
        owner="[ชื่อสมาชิก]"
        items={["ผังช่องจอดแยกตามชั้น", "ฟอร์มทะเบียน เวลา จำนวนชั่วโมง", "ยืนยันการจอง"]}
      />
      <p className="muted">ตัวอย่างข้อมูล: data/bookings.json มี {bookings.length} รายการ</p>
    </div>
  );
}
