"use client";
// ผู้รับผิดชอบ: หัวหน้ากลุ่ม  ·  เมนูอยู่ใน lib/routes.js
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { ADMIN_ROUTES } from "@/lib/routes";
import styles from "./Sidebar.module.css";

export default function Sidebar({ allowedMenus = ADMIN_ROUTES.map((r) => r.key) }) {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <aside className={styles.sidebar}>
      <Link href="/admin/door" className={styles.logo}>Easy Parking<br /><small>Admin</small></Link>
      <nav className={styles.menu}>
        {ADMIN_ROUTES.filter((r) => allowedMenus.includes(r.key)).map((r) => (
          <Link key={r.href} href={r.href} className={pathname.startsWith(r.href) ? styles.active : ""}>
            {r.label}
          </Link>
        ))}
      </nav>
      <button className={styles.logout} onClick={() => router.push("/admin/login")}>ออกจากระบบ</button>
    </aside>
  );
}
