"use client";
// ผู้รับผิดชอบ: หัวหน้ากลุ่ม  ·  แก้ได้ที่ไฟล์นี้ที่เดียว (เมนูอยู่ใน lib/routes.js)
import Link from "next/link";
import { usePathname } from "next/navigation";
import { USER_ROUTES } from "@/lib/routes";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const pathname = usePathname();
  const isActive = (href) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header className={styles.navbar}>
      <div className={styles.inner}>
        <Link href="/" className={styles.logo}>Easy Parking</Link>
        <nav className={styles.menu}>
          {USER_ROUTES.map((r) => (
            <Link key={r.href} href={r.href} className={isActive(r.href) ? styles.active : ""}>
              {r.label}
            </Link>
          ))}
          <Link href="/admin/login" className={styles.admin}>ผู้ดูแลระบบ</Link>
        </nav>
      </div>
    </header>
  );
}
