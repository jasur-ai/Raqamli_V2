# BOT V2 — TAKOMILLASHTIRISH REJASI (@raqamli_v2_bot)
### 2026-10-15 · alohida mahsulot · v1 botga tegilmaydi · token vaultda, ishlatish ruxsat bilan

**Baza:** v1 bot arxitekturasi (aiindeksi_bot.py monolit, ~120 KB) ko'rildi. V2 — uni
nusxalab emas, **oqimlarni qayta yig'ib** kuchaytirish: xavfsizlik v1 dagi tuzatishlar
(bir martalik aktivatsiya havolasi, server-side logout) saqlanadi.

## 1. Saqlanadigan v1 kuchli tomonlar
- Parol Telegram chatda yozilmaydi: bir martalik HTTPS aktivatsiya (30 daqiqa).
- Sessiya server tomonda bekor qilinadi (logout = revocation).
- Hujjatlar faqat sessiya bilan (/api/docs), katalog sakrashi bloklangan.
- Rollar: admin/member; guruhga tushgan parolli buyruq o'chirishga urinish.

## 2. V2 qo'shimcha kreativ/foydali qismlar
| # | Qism | Foyda | Manba |
|---|---|---|---|
| B1 | **Trenajyor-miniapp**: 10 mini-bayroq testi (X-sinf tanlash), natija ≥80% bo'lsa «sinovga tayyor» belgisi | Jamoa mashqi botsiz qolmaydi | O'QUV_KEYSI §7 |
| B2 | **COI deklaratsiya oqimi**: bot ichida 24-oy manfaatlar shakli, imzo sanasi bilan | Etika reyestri avtomatik yig'iladi | PK-07 |
| B3 | **Hujjatlar Mini App**: 33 hujjat ro'yxati, qidiruv, bir bosishda yuklab olish | Chop/tarqatish tezlashadi | Indeks v1.2 |
| B4 | **«Da'vo yuborish»**: foydalanuvchi manba havolasini yuboradi → bot dosye shablonini to'ldirib qaytaradi | Skan jarayoni standartlashadi | PK-02 |
| B5 | **Eslatmalar**: javob oynasi (7 kun) va X1 (72 soat) muddatlari bo'yicha mas'ullarga ping | SLA buzilmaydi | QJ-09, PK-06 |
| B6 | **Qizil xulosa kanali**: har nashrda QX yozuvi avtomatik e'lon qilinadi | Shaffoflik | PK-05 |
| B7 | **Rol-o'yin rejimi**: Keys A/B/C botda dialog shaklida (skeptik savollar) | Trenajyor jonli bo'ladi | O'QUV_KEYSI §3–5 |

## 3. Xavfsizlik talablari (v2)
- Token faqat Render env da; repoda/vaultdan tashqarida yo'q; logda token qismi maskalanadi.
- Webhook ishlatilsa — secret path + Telegram secret token header tekshiruvi.
- Rate-limit: /start va forma oqimlarida foydalanuvchi bo'yicha cheklov.
- PII: telefon/email bot bazasida minimallashtiriladi; eksport faqat admin.

## 4. Deploy tartibi (ruxsat berilganda)
1. Render (v2 API key) — alohida service `raqamli-tadqiqot-v2-bot` (v1 service tegilmaydi).
2. Env: TELEGRAM_V2_BOT_TOKEN, RT_SITE_SESSION_SECRET (yangi), DB alohida repo/katalog.
3. Smoke: /start, hujjatlar ro'yxati, COI shakli, trenajyor 1-savol.
4. Natija foydalanuvchiga: bot havolasi + tekshiruv hisoboti. Qaror — foydalanuvchiniki.

**Holat:** reja tayyor; token saqlangan; deploy hali bajarilmadi (buyruq kutilmoqda).
