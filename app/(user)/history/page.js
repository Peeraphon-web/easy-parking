// หน้า: การจองและประวัติ
// ผู้รับผิดชอบ: [ชื่อสมาชิก]
// แก้เฉพาะไฟล์ในโฟลเดอร์นี้ ถ้าต้องสร้าง component เฉพาะหน้า ให้สร้างไว้ข้างไฟล์นี้
import PageHeader from "@/components/PageHeader";
import Todo from "@/components/Todo";
import payments from "@/data/payments.json";

export default function HistoryPage() {
  return (
    <div className="stack">
      <PageHeader title="การจองและประวัติ" subtitle="ดูการจองและใบเสร็จย้อนหลัง" />
      <Todo
        owner="[ชื่อสมาชิก]"
        items={["รายการจอง + ยกเลิก / เลื่อนเวลา", "ใบเสร็จย้อนหลัง (data/payments.json)"]}
      />
      <p className="muted">ตัวอย่างข้อมูล: data/payments.json มี {payments.length} รายการ</p>
    </div>
  );
}
