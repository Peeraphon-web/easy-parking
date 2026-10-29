// หน้า: Report Finance
// ผู้รับผิดชอบ: [ชื่อสมาชิก]
// แก้เฉพาะไฟล์ในโฟลเดอร์นี้ ถ้าต้องสร้าง component เฉพาะหน้า ให้สร้างไว้ข้างไฟล์นี้
import PageHeader from "@/components/PageHeader";
import Todo from "@/components/Todo";
import payments from "@/data/payments.json";

export default function FinancePage() {
  return (
    <div className="stack">
      <PageHeader title="Report Finance" subtitle="รายรับรายวัน เดือน ปี" />
      <Todo
        owner="[ชื่อสมาชิก]"
        items={["การ์ดสรุปรายรับ", "กราฟรายรับ (แนะนำ Chart.js) เลือกวัน/เดือน/ปี", "ตารางรายการชำระเงิน"]}
      />
      <p className="muted">ตัวอย่างข้อมูล: data/payments.json มี {payments.length} รายการ</p>
    </div>
  );
}
