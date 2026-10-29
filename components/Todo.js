// กล่องบอกงานที่ต้องทำ ลบออกได้เมื่อทำหน้าเสร็จ
export default function Todo({ owner, items = [] }) {
  return (
    <div className="todo">
      <p style={{ marginTop: 0 }}>ผู้รับผิดชอบ: <b>{owner}</b></p>
      <ul style={{ margin: 0 }}>
        {items.map((t) => <li key={t}>{t}</li>)}
      </ul>
    </div>
  );
}
