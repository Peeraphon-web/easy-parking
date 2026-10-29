// หัวหน้าเพจ ใช้ร่วมกันทุกหน้า: <PageHeader title="..." subtitle="..." />
export default function PageHeader({ title, subtitle, children }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "end", gap: 12, flexWrap: "wrap" }}>
      <div>
        <h1 style={{ fontSize: 28 }}>{title}</h1>
        {subtitle && <p className="muted" style={{ margin: "4px 0 0" }}>{subtitle}</p>}
      </div>
      {children}
    </div>
  );
}
