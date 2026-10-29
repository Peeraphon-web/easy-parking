# Easy Parking (Front End)

ระบบลานจอดรถอัตโนมัติ · Next.js 14 (App Router) · ข้อมูลทั้งหมดเป็น Mock data

## เริ่มใช้งาน

```bash
npm install
npm run dev
```
เปิด http://localhost:3000

## แผนผัง path

| URL | ไฟล์ | Layout | ผู้รับผิดชอบ |
|---|---|---|---|
| `/` | `app/(user)/page.js` | Navbar | |
| `/pay` | `app/(user)/pay/page.js` | Navbar | |
| `/book` | `app/(user)/book/page.js` | Navbar | |
| `/history` | `app/(user)/history/page.js` | Navbar | |
| `/admin/login` | `app/admin/login/page.js` | ไม่มี | |
| `/admin/door` | `app/admin/(panel)/door/page.js` | Sidebar | |
| `/admin/slots` | `app/admin/(panel)/slots/page.js` | Sidebar | |
| `/admin/finance` | `app/admin/(panel)/finance/page.js` | Sidebar | |
| `/admin/activity` | `app/admin/(panel)/activity/page.js` | Sidebar | |
| `/admin/roles` | `app/admin/(panel)/roles/page.js` | Sidebar | |

> ใส่ชื่อผู้รับผิดชอบในตารางนี้ และในคอมเมนต์บนสุดของแต่ละ `page.js`

## โครงสร้างโฟลเดอร์

```
app/
  layout.js            ← root layout (ฟอนต์, globals.css)  [หัวหน้ากลุ่ม]
  globals.css          ← สี ฟอนต์ class กลาง              [หัวหน้ากลุ่ม]
  (user)/              ← ฝั่งผู้ใช้ ทุกหน้ามี Navbar
    layout.js
    page.js  pay/  book/  history/
  admin/
    login/             ← หน้า login ไม่มี Sidebar
    (panel)/           ← ฝั่งผู้ดูแล ทุกหน้ามี Sidebar
      layout.js
      door/  slots/  finance/  activity/  roles/
components/            ← Navbar, Sidebar, PageHeader, Todo  [หัวหน้ากลุ่ม]
lib/
  routes.js            ← รายการเมนูและ path ทั้งเว็บ (ที่เดียว)
  parking.js           ← ฟังก์ชันกลาง: คำนวณค่าจอด, เช็กทะเบียน
data/                  ← Mock data (JSON)
public/cars/           ← รูปรถ
```

`(user)` และ `(panel)` ในวงเล็บคือ **route group** ใช้แยก layout เท่านั้น ไม่ปรากฏใน URL

## กติกาการทำงานร่วมกัน

1. **แก้เฉพาะโฟลเดอร์หน้าของตัวเอง** component ที่ใช้หน้าเดียวให้สร้างไว้ในโฟลเดอร์หน้านั้น
2. ไฟล์กลาง (`components/`, `lib/`, `globals.css`, `layout.js`, `data/`) ต้องบอกหัวหน้ากลุ่มก่อนแก้
3. ใช้สีจาก `var(--...)` ใน `globals.css` ห้ามใส่สีตรงๆ
4. คำนวณค่าจอดและเช็กทะเบียนด้วย `lib/parking.js` ห้ามเขียนสูตรซ้ำ
5. Git: แตก branch ตามหน้า เช่น `feature/pay`, `feature/finance` แล้วเปิด Pull Request เข้า `main`
6. ทำหน้าเสร็จแล้วลบกล่อง `<Todo />` ออก

## เพิ่มหน้าใหม่

1. เพิ่มเมนูใน `lib/routes.js`
2. สร้างโฟลเดอร์ใน `app/(user)/` หรือ `app/admin/(panel)/` ตามชื่อ path แล้วสร้าง `page.js`
3. Navbar หรือ Sidebar จะแสดงเมนูใหม่เอง
