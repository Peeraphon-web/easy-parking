// ===== ฟังก์ชันกลาง ใช้ร่วมกันทุกหน้า (ห้ามเขียนสูตรค่าจอดซ้ำในหน้าตัวเอง) =====
import rates from "@/data/rates.json";

// จำนวนนาทีระหว่างเวลาเข้า-ออก
export function minutesBetween(timeIn, timeOut = new Date()) {
  return Math.max(0, Math.round((new Date(timeOut) - new Date(timeIn)) / 60000));
}

// ค่าจอด: ฟรี N นาทีแรก, เศษชั่วโมงปัดขึ้น, ไม่เกินเหมาจ่ายต่อวัน
export function calcFee(minutes) {
  if (minutes <= rates.freeMinutes) return 0;
  return Math.min(rates.dayMax, Math.ceil(minutes / 60) * rates.perHour);
}

// "4 ชม. 27 นาที"
export function formatDuration(minutes) {
  return `${Math.floor(minutes / 60)} ชม. ${minutes % 60} นาที`;
}

export const formatBaht = (n) => `${n.toLocaleString("th-TH")} บาท`;

// ลบช่องว่างออกก่อนเทียบทะเบียน: "กข 1234" → "กข1234"
export const normalizePlate = (s = "") => s.replace(/\s+/g, "");

// รูปแบบทะเบียนไทย เช่น กข 1234, 7กพ 5521
export const isValidPlate = (s) => /^[0-9]?[ก-ฮ]{1,3}[0-9]{1,4}$/.test(normalizePlate(s));
