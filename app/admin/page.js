// เข้า /admin เฉยๆ → ไปหน้า login
import { redirect } from "next/navigation";
export default function AdminIndex() { redirect("/admin/login"); }
