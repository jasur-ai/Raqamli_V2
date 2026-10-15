# ASOSIY G‘OYA VA SAYT — MUKAMMAL ISH REJASI
### 2026-10-15 · faqat workspace · QAT’IY QOIDA: foydalanuvchi «qil» demagunicha push/deploy/Drive yo‘q

## 0. Xato tan olinishi va yangi tartib
- 2026-10-15 dagi v2 landing **rad etildi** (v1 dan 100× zaif) — to‘g‘ri baho.
- Tashqi o‘zgarishlar orqaga qaytarildi: Cloudflare v2 loyiha o‘chirildi, Drive RT_V2 korzinkada, v1 200 va o‘zgarishsiz.
- Bundan keyin: avval **konsepsiya va mezonlar** (ushbu hujjat), foydalanuvchi tasdig‘i, keyin — va faqat «qil» buyrug‘i bilan — amalga oshirish.

## 1. v1 ning kuchli tomonlari (SAQLANISHI MUST-HAVE)
| Kuchli tomon | v1 dagi dalil | Yangi ishda talabi |
|---|---|---|
| Jonli hero-savol | «…banklarda/ta’limda/tibbiyotda… qanchalik ishlayapti?» — sektor so‘zlari aylanadi | Rotatsiya saqlanadi, kub-effekti bilan kuchayadi (foydalanuvchi talabi) |
| «Gap emas — dalil» | Pozitsiya bir jumlada | Kontent ohangi aynan shu darajada keskin qoladi |
| Real progress shaffofligi | «30/60 katakka ball qo‘yilgan» | Raqamlar faqat tekshirilgan manbadan |
| Interaktiv hisob | «Indeksni o‘zing hisobla» (select/button lar) | Kalkulyator saqlanadi + vaznlar bilan o‘ynash |
| Talaba foydasi | «Talaba natija uchun keladi» | Persona bo‘yicha foyda xaritasi qoladi |
| Past kirish ostonasi | «Birinchi qadam — 40 soniya» | CTA lar vaqt va’da qiladi, bajariladi ham |
| FAQ va bo‘sh katak | «Bo‘sh katak sizni kutyapti» | Halollik belgisi — brend aktivi, olib tashlanmaydi |

## 2. v1 ning zaif joylari (auditlar asosida, tuzatish rejasi)
| Zaif joy | Manba | Taklif |
|---|---|---|
| admin/dashboard to‘liq vizual QA yo‘q | Texnik ko‘rik §8 | Alohida vizual ko‘rik ro‘yxati (desktop/mobil, dark/light) |
| Kontent da’volari (PPTX 6-slayd, «1 OY», ROI) | Texnik ko‘rik §G | Hazm qilingan tahrir — foydalanuvchi pitch ritmini buzmasdan, alohida tasdiq bilan |
| Hujjatlar saytda sessiya orqali — topilishi qiyin | 2026-10-14.2 hisoboti | Mini App + qidiruv (bot rejasi B3) |
| Backup/restore mashqi yo‘q | Texnik ko‘rik §F | Alohida muhitda sinov rejasi |
| Metodika o‘zgarishi tarixi yo‘q | Indeks nazorat qoidalari | Versiya jurnal (v1, v2…) har hujjatda |

## 3. Asosiy g‘oya — mukammallik mezonlari (MUST-HAVE)
1. **Bitta jumla:** «Ochiq dalilni o‘lchaymiz — gapni emas.»
2. Har bir ommaviy raqam: manba + sana + qayta hisoblash yo‘li (dalil kartasi).
3. Bo‘sh katak = baholanmagan (nol emas) — barcha yuzalarda bir xil til.
4. Qizil sinov har nashrda: «Qizil xulosa» ilovasiz nashr chiqmaydi.
5. Trenajyor sertifikatisiz hech kim real sinovga kirmaydi.
6. Pitch ritmi buzilmaydi: o‘zgarish avval workspaceda hazm qilinadi, ommaviy matn faqat tasdiq bilan.

## 4. Sayt — 10× tekshiruv mezonlari (har bo‘limga)
| O‘tish | Mezon |
|---|---|
| V1 Fakt | Har raqam reyestr ID siga bog‘langan |
| V2 Kontent | v1 kuchli matnlari yo‘qolmagan (diff ro‘yxat) |
| V3 Interaktiv | Kalkulyator, filtr, qidiruv — hammasi ishlaydi, o‘lik tugma yo‘q |
| V4 Mobil | 360px da gorizontal siljish yo‘q; tugmalar ≥24px |
| V5 Dark/Light | Kontrast ≥4.5:1 ikkala temada |
| V6 Animatsiya | Kub-rotatsiya silliq; reduced-motion hurmat qilinadi |
| V7 Tezlik | LCP uchun tanqidiy CSS inline; ortiqcha JS yo‘q |
| V8 Xavfsizlik | CSP/_headers v1 darajasidan past emas |
| V9 SEO/OG | og:image, canonical, uz_UZ locale saqlanadi |
| V10 Qabul | Foydalanuvchi jonli ko‘rib «qil» deydi — undan oldin deploy yo‘q |

## 5. Ish tartibi (bosqichlar)
1. **Konsepsiya** (hozir): sahifa xaritasi va har bo‘lim mazmuni qog‘ozda — foydalanuvchi ko‘radi.
2. **Prototip workspaceda**: lokal fayl, preview faqat shu muhitda.
3. **10× tekshiruv** (V1–V10 yuqorida) + hisobot.
4. Faqat «qil» buyrug‘i bilan: alohida branch/repo → deploy → jonli tekshiruv.
5. Eskisi bilan almashtirish qarori — faqat foydalanuvchiniki.

**Holat:** bosqich 1. Tashqi tizimlarda hech qanday v2 izi qolmagan (deploy o‘chirilgan, Drive korzinkada).
