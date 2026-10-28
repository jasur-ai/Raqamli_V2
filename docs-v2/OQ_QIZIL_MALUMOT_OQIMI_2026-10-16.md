# OQ → QIZIL MA’LUMOT OQIMI PROTOKOLI

### «Raqamli Tadqiqot» / AAI-UZ · 2026-10-16 · V2 ishchi protokol (tasdiq ochiq)

## 1. Maqsad va asosiy qoida

Vaqt ikki baravar uzayishining asosiy sababi — bitta ma’lumot avval chatda, keyin jadvalda, keyin hisobotda qayta yozilishi. V2 qoidasi:

> **Bitta ma’lumot — bitta karta — bitta marta kiritiladi.** Oq jamoa topilgan va verifikator tasdiqlagan har bir ma’lumotni tuzilgan «Dalil kartasi»da taqdim etadi. Kartani faqat Qizil jamoa va tegishli rollar ko‘radi. Hisobot, jadval, F-17 manifesti va dosye shu kartalardan avtomatik yig‘iladi.

Qizil jamoa kartalarni ko‘rib boradi, lekin xulosa va topilmalarni **faqat yakunda** taqdim etadi. U jarayon o‘rtasida oq jamoadan qo‘shimcha jadval, qayta yozish yoki oraliq taqdimot talab qilmaydi.

## 2. Ko‘rinish rejimi (kim nimani ko‘radi?)

| Ma’lumot qatlami | Kim ko‘radi | Kim ko‘rmaydi | Izoh |
|---|---|---|---|
| Ishchi Dalil kartasi (xom dalil, ball taklifi, izoh) | Muallif, SY-I, SY-S, tayinlangan verifikator, Data steward, Qizil jamoa (faqat o‘qish) | Boshqa sektorlar, media/marketing, baholanayotgan tashkilot, YQP, omma | Sektor doirasida cheklangan kirish; tashqi Qizil a’zo faqat o‘z sikli va muddati doirasida kiradi. |
| Sektor holat paneli (sonlar: qamrov, kelishuv, kechikkan kartalar) | Koordinator, Ilmiy rahbar, Metodologiya komissiyasi, SY-I/SY-S | Tashqi foydalanuvchi, omma | Xom dalil emas, faqat jarayon ko‘rsatkichlari. |
| Qizil jamoaning yopiq belgilari (private flags) | Faqat Qizil jamoa; SY-S faqat son va og‘irlik darajasini ko‘radi, matnni emas | Oq jamoa, YQP, omma | Yakungacha yopiq. Maqsad — oq jamoani oraliq bosimsiz ishlatish va vaqtni tejash. |
| Final dosye (muzlatilgan snapshot) | YQP, Koordinator, Ilmiy rahbar, SY-I/SY-S, Qizil jamoa | Ommа, baholanayotgan tashkilotlar (o‘z qismidan tashqari) | YQP xom ishchi bazaga kirmaydi; faqat final dosyeni ko‘radi. |
| Tashkilotga yuboriladigan qism | Tegishli tashkilotning o‘zi | Boshqa tashkilotlar | Faqat o‘z kartochkasi, faktik e’tiroz uchun; boshqa banklar va Qizil topilmalar ko‘rsatilmaydi. |
| Nashr paketi | Ommа | — | Faqat YQP tasdiqlagan, litsenziya va versiya yozilgan qism. |

## 3. Dalil kartasi: kiritishda majburiy maydonlar

Karta topilgan kuni (maksimum 24 soat ichida) to‘ldiriladi. Maydon bo‘sh bo‘lsa, karta «Tasdiqqa tayyor» holatiga o‘ta olmaydi.

| Guruh | Majburiy maydonlar |
|---|---|
| Identifikatsiya | Karta ID (avtomatik), sikl, sektor, tashkilot ID, o‘lchov/funksiya/katak ID |
| Da’vo | Topilma bir jumlada; ball taklifi (0–3 yoki «bo‘sh») va «bo‘sh ≠ 0» sababi |
| Dalil | Anker ID, dalil darajasi E1–E3, manba ID, URL yoki fayl, kirish sanasi |
| Arxiv | Fayl/skrinshot ID, ilova/bot versiyasi (L3 bo‘lsa), SHA-256 (Data steward/system), litsenziya/ruxsat |
| Mas’ullar | Kiritgan tahlilchi, verifikator, holat, COI bayoni («manfaat to‘qnashuvi yo‘q» yoki izoh) |
| Xavfsizlik | Ma’lumot klassi (Ichki/Restricted), shaxsiy ma’lumot belgisi (bor/yo‘q), eslatma |

**Avtomatik tekshiruvlar:** dublikat (URL + tashkilot + katak), ball diapazoni, sana formati, majburiy havola, E-daraja ro‘yxati, fayl turi/hajmi. Xato bo‘lsa tizim saqlashga ruxsat beradi, lekin «Tasdiqqa tayyor» tugmasi yopiq bo‘ladi.

## 4. Holatlar (status) zanjiri

1. **Qoralama** — tahlilchi kiritmoqda; faqat muallif va SY-I ko‘radi.
2. **Tekshiruvda** — verifikator mustaqil tekshiradi.
3. **Oq tasdiq** — verifikator tasdiqladi; karta muzlatiladi (snapshot + hash).
4. **Qizil ko‘rinishida** — Qizil jamoa o‘qiydi, yopiq belgi qo‘yishi mumkin; xulosa bermaydi.
5. **Final dosye** — sikl muzlatilganda barcha tasdiqlangan kartalar bitta paketga yig‘iladi.
6. **YQP qarori** — tasdiqlash / shartli tasdiqlash / qayta ishlash / rad etish.
7. **Nashr paketi** — faqat tasdiqlangan qism ommaga chiqadi.

Oq tasdiqdan keyin karta ustidan yozilmaydi: tuzatish yangi versiya bo‘ladi (v1, v2, …) va «delta» (nima o‘zgargani) avtomatik ko‘rinadi. Qizil jamoa faqat deltani qayta ko‘radi — ish boshidan takrorlanmaydi.

## 5. Qizil jamoa tartibi: ko‘radi, lekin yakunda gapiradi

- Qizil jamoa oq tasdiqdan o‘tgan kartalarni istalgan vaqtda **o‘qiy oladi**, tahrir qila olmaydi.
- Topilma matnlari yakuniy «Qizil xulosa»gacha yopiq turadi; oq jamoa ularni ko‘rmaydi.
- SY-S faqat yopiq belgilar **soni va X-darajasini** ko‘radi (matnsiz). Bu jadval xavfini oldindan bilish uchun kerak, lekin oraliq hisobot emas.
- **Bitta istisno:** shaxsiy ma’lumot, xavfsizlik yoki huquqiy xavf (X1-critical) aniqlansa, Qizil jamoa SY-S va Data stewardga shu zahoti «qizil signal» yuboradi. Bu — topilma taqdimoti emas, xavfsizlik to‘xtatishi.
- Yakunda Qizil jamoa bitta hujjat beradi: karta ID bo‘yicha topilmalar, X1–X4 darajasi, dalil havolasi va tavsiya. Oq jamoa bitta javob oynasida (5 ish kuni) qabul/tuzatish/e’tiroz yozadi. Qo‘shimcha raundlar yo‘q — nizo YQP ga o‘tadi.

## 6. Vaqtni ikki baravar tejaydigan mexanizmlar

1. **Bir marta kiritish:** chatdagi xabar dalil hisoblanmaydi; dalil faqat karta orqali kiradi. Chatdan karta yaratilsa, xabar havolasi saqlanadi — matn qayta yozilmaydi.
2. **Avto-yig‘ish:** sektor jadvali, qamrov/kappa paneli, manbalar reyestri, F-17 manifesti va hisobot jadvallari kartalardan avtomatik shakllanadi.
3. **Delta-tekshiruv:** versiya o‘zgarsa, Qizil va verifikator faqat o‘zgargan maydonni ko‘radi.
4. **Kundalik intizom:** karta topilgan kuni kiritiladi; haftada bir marta Data steward faqat «yetishmayotgan maydonlar» ro‘yxatini chiqaradi (mazmunni qayta tekshirmaydi).
5. **Muzlatish taqvimi:** T-7 — yangi karta yopiladi; T-5 — oq tasdiq tugaydi; T0 — final snapshot; T+5 — Qizil xulosa; T+10 — oq javob; T+15 — YQP qarori. (Ish kunlari, V2 taklif.)
6. **Shablonlar:** ball izohi (2–3 jumla), manba pasporti va L3 skrinshot nomi tizimda tayyor turadi.

## 7. Xavfsizlik va javobgarlik

- Kirish: rol + sektor doirasi; tashqi Qizil/YQP a’zolariga muddatli kirish (sikl tugagach +30 kun yopiladi).
- Harakat jurnali: kim, qachon, qaysi kartani ko‘rdi/tahrir qildi/eksport qildi — o‘zgartirib bo‘lmaydigan jurnalda.
- Eksport faqat Data steward orqali, jurnalga yoziladi. Parol/token/ shaxsiy ma’lumot kartaga kiritilmaydi; uchrab qolsa karta karantinga olinadi.
- Nashrdan keyin karta arxivi «faqat o‘qish» bo‘ladi; tuzatish erratum versiyasi bilan chiqadi.

## 8. Rollar (qisqa RACI)

| Ish | Tahlilchi | Verifikator | SY-I | SY-S | Data steward | Qizil jamoa | YQP |
|---|---|---|---|---|---|---|---|
| Karta kiritish | **R** | C | A | I | C | — | — |
| Oq tasdiq | I | **R** | A | C | I | — | — |
| Arxiv/SHA/manifest | C | I | I | I | **R/A** | — | — |
| Yopiq belgilar | — | — | — | ko‘radi (son) | — | **R** | — |
| Qizil xulosa (yakun) | I | I | C | A | I | **R** | I |
| Oq javob (1 raund) | **R** | C | A | A | I | I | I |
| Final qaror | — | — | C | C | I | C | **R/A** |

R — bajaradi, A — javobgar, C — maslahat, I — xabardor.

## 9. Qaror so‘rovi (ochiq)

1. Yopiq belgilar matnini SY-S ham ko‘rmasligi (faqat son/daraja) tasdiqlanadimi?
2. X1-critical signal istisnosi qaysi holatlarda ishlaydi (PII, xavfsizlik, huquqiy da’vo)?
3. Muzlatish taqvimi (T-7/T-5/T+5/T+10/T+15) sikl uzunligiga mosmi?
4. Tashqi Qizil a’zo kirish muddati: sikl +30 kun yetarlimi?

Ushbu protokol V2 ishchi materialdir; tasdiqlangunga qadar rasmiy tartib deb e’lon qilinmaydi.
