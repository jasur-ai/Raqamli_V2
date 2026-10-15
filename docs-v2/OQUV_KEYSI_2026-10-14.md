# O‘QUV KEYSI (TRENAJYOR): QIZIL SINOVNI MASHQ QILISH
### «Raqamli Tadqiqot» / AAI-UZ · IV jild ilovasi · v1.0 · 2026-10-14 · qoralama (faqat workspace)

**Bog‘lanish:** IV jild — `TANQIDIY_GURUH_2026-10-14.md` (QJ/TN/K/X) · ishchi paket — `QIZIL_SINOV_PAKETI_2026-10-14.md` (PK-01…PK-08) · III jild — `ARXITEKTURA_2026-10-14.md` (AR/SH) · dalillar — `DALIL_REYESTRI_2026-10-14.md` v1.4 (A–H) · takliflar — `../standard/TAKLIFLAR_2026-10-14.md` (S/I/M).

**Maqsad:** birinchi haqiqiy qizil sinovdan oldin jamoa **to‘liq mashq** qilsin — uchta o‘quv keysi (oson → o‘rta → qiyin) bayroqdan qizil xulosagacha ishlangan namunalar bilan; baholash rubrikasi; mini-bayroqlar banki; tipik tuzoqlar katalogi; uch mashg‘ulot rejasi.

**Muhim:** barcha ism, tashkilot va havolalar — **shartli** (o‘quv maqsadida; example.org uslubidagi zaxira manzillar ishlatiladi); hech qanday real tashkilotga ishora yo‘q; o‘quv keyslari real baholashda ishlatilmaydi.

**«Har bir qismda 10 marta» talabi (trenajyor):** har bo‘lim V1–V10 o‘tishlaridan o‘tkazildi; natijalar 11-bo‘limdagi daftarda; tekshiruv skripti — `verify_okeys.py` (qayta ishga tushirish mumkin).

---

## 0. METODIKA — V1–V10 O‘TISHLARI (trenajyor nusxasi)

| O‘tish | Nima tekshiriladi | Usul |
|---|---|---|
| **V1 Fakt/manba** | Manba ID havolalari ([A1]…[H5]) haqiqiy va o‘rinli | Skript + qo‘lda |
| **V2 Raqam izchilligi** | Mezon raqamlari (≥80 ball, ≥80%, 90 daqiqa, 5 ish kuni, 72 soat) I–IV jildlar bilan dosh | Skript (tokenlar) |
| **V3 Huquqiy aniqlik** | Huquqiy gaplar II jild F8 bilan mos; o‘quv misollarida ham ayblov tili yo‘q | Skript + qo‘lda |
| **V4 Kod yaxlitligi** | Havola qilingan QJ/TN/K/PK/X/AR/S kodlari mavjud; yangi prefiks (TU) yakkama-yakka | Skript (kodlar indeksi) |
| **V5 Mantiqiy qamrov** | Keys A/B/C to‘liq ishlangan; 5 mezon; TU-01…TU-10; 3 mashg‘ulot; 10 mini-bayroq | Skript |
| **V6 Ikkilanish nazorati** | Nomlar takrorlanmagan; o‘quv va real ish chegarasi bayon qilingan | Skript + qo‘lda |
| **V7 Til va atamalar** | Imlo, o‘/g‘ belgilar, yagona atamalar lug‘ati | Skript |
| **V8 Tipografika** | Ko‘rinmas belgilar, qo‘sh bo‘shliqlar, jadval butunligi | Skript |
| **V9 Etika va COI** | Shartlilik bayoni majburiy; ayblovsiz til; shaxsiy ma’lumot minimizatsiyasi | Skript + qo‘lda |
| **V10 Struktura va doshlik** | Bo‘limlar tartibi; hajm; indeks va IV jild bilan bog‘lanish | Skript + qo‘lda |

---

## 1. TRENAJYOR NEGA KERAK? — qo‘llash tartibi

**Sabab:** real sinovda xato qilishning narxi — nashr kechikishi, obro‘ va ishonch yo‘qotilishi. Mashqda xato qilishning narxi — nol. Xalqaro amaliyot shu mantiqda ishlaydi: sinov usuli **avval** e’lon qilinadi va mashq qilinadi, keyin qo‘llanadi [H1].

**Kim qatnashadi:** Qizil jamoa a’zolari (majburiy), operatorlar va baholovchilar (majburiy — ichki self-red uchun, TN-09), koordinator va sifat rahbari (hakamlik rollarida), kuzatuvchi sifatida komissiya a’zosi ixtiyoriy.

**Qachon:** 30-kunlik tayyorgarlik ichida (PK-08 bandlari bilan birga) — uch mashg‘ulot; har biri oldingisining xulosasi bilan boshlanadi.

**Muvaffaqiyat mezoni:** yakuniy baho ≥80 ball (5 mezon bo‘yicha 100 dan) **va** mini-bayroqlar kelishuvi ≥80% — ikkalasi bajarilsa, a’zo «sinov sertifikati» oladi va sikl sinovlarida qatnashadi.

| Mashg‘ulot | Davomiyligi | Keys | Asosiy ko‘nikma |
|---|---|---|---|
| **1-mashg‘ulot** | 90 daqiqa | Keys A | Ikkinchi manba va mustaqillikni aniqlash |
| **2-mashg‘ulot** | 90 daqiqa | Keys B | E-darajalar, «vendor da’vosi» qoidasi, arxetip |
| **3-mashg‘ulot** | 120 daqiqa | Keys C | Ko‘rgazma holati (gaming), javob va hakamlik |

---

## 2. O‘QUV KEYSI XARITASI

| Keys | Nomi | Qiyinlik | Nimalarni qamraydi | Asosiy qoidalar |
|---|---|---|---|---|
| **A** | «Ikkinchi manba yo‘q» | Oson | Manba mustaqilligi, sana/kontekst, qayta baholash | TN-01, TN-05, X2 |
| **B** | «Vendor da’vosi» | O‘rta | E1–E3 darajalari, vendor qoidasi, JS-sahifa izi, arxetip | TN-02, TN-03, X2, K-07 |
| **C** | «Ko‘rgazma holati» | Qiyin | Gaming, javob oynasi, hakamlik, nashr darvozasi, erratum chegarasi | QJ-09, QJ-10, K-08, QJ-14, X1/X2 |

---

## 3. KEYS A — «IKKINCHI MANBA YO‘Q»

### 3.1. Vaziyat

O‘quv tadqiqoti «Misol Bank» kartochkasida D3 bo‘yicha «Amalda» darajasini (3 ball) qo‘ygan. Asos: rasmiy saytda e’lon (M1) va yangiliklar saytida chiqqan material (M2). Siz Qizil jamoa a’zosisiz: bu bandni sinang.

### 3.2. Materiallar paketi (shartli)

| Manba | Toifa | Mazmun (qisqa) |
|---|---|---|
| **M1** | toifa-3 (tashkilot rasmiy sayti) | `misolbank.example.org/yangilik`: «Skoring tizimi ishga tushirildi» — sana bor, metrika yo‘q, texnik tafsilot yo‘q |
| **M2** | toifa-4 (OAV) | `yangilik.example.net/…`: xuddi shu e’lon asosida yozilgan; «300 ming qaror» raqami qo‘shilgan; matn M1 ni so‘zma-so‘z keltiradi |

### 3.3. Topshiriq (PK-01 va PK-02 bo‘yicha to‘ldiring)

1. Bayroq: qaysi normalar buzilgan (TN-…)? X-sinf taklifi qanday?
2. Manba pasportlari: ikki manba mustaqilmi? Nega?
3. «5 satr kontekst» yozing (M2 raqami uchun).
4. Qayta baholash: D3 uchun qaysi ball to‘g‘ri va nima uchun?

### 3.4. Namuna yechim

**Bayroq (namuna):**

| Maydon | Qiymat |
|---|---|
| Bayroq ID | B-2026-1-01 |
| Mavzu | D3 «Amalda» uchun mustaqil ikkinchi manba yo‘q |
| Buzilgan normalar | TN-01 (mustaqillik), TN-05 (kontekst), TN-02 (toifa tengligi) |
| X-sinf (taklif) | X2 — ball mustahkam emas |
| Falsifikatsiya sharti | Rasmiy registr yozuvi yoki mustaqil tashqi tasdiq (metrika bilan) topilsa — bayroq bekor |
| Holat | ochiq |

**Mustaqillik tekshiruvi (kalit jadval):**

| Savol | M1 | M2 | Xulosa |
|---|---|---|---|
| Manba turi farq qiladimi? | rasmiy sayt | OAV | Farq bor |
| Egasi farq qiladimi? | Misol Bank | OAV tahririyati | Nom jihatidan farq |
| Mazmun manbasi farq qiladimi? | birlamchi e’lon | M1 ni so‘zma-so‘z keltiradi | **Farq yo‘q** |
| Yakuniy: mustaqilmi? | — | — | **Yo‘q — M2 M1 ga tayanadi (echo)** |

**Dosye xulosasi (namuna):** «M1 — rasmiy e’lon, ammo metrikasiz va texnik tafsilotsiz (E2 chegarasida). M2 — M1 ga tayanadigan qayta nashr; qo‘shimcha raqam («300 ming qaror») boshqa mustaqil manbada uchramadi. Qoida TN-01: mustaqil ikkinchi manba yo‘q. Qayta baholash taklifi: **D3 3 → 2** (rasmiy tanlov/e’lon izi bor; ishlab chiqarish metrikasi va tashqi tasdiq yo‘q). Qat’iy o‘qishda D3=1 («E’lon») ham mumkin — farqni hakamlik paneli bir xil qoida bilan yopadi. E-daraja: E2.»

**Tadqiqotchi javobi (namuna):** «X2 qabul. D3=2 bilan roziman; M2 hisobdan chiqariladi. Izohga «raqam faqat qayta nashrda» yozildi.»

**Qizil xulosa yozuvi (namuna, PK-05 formati bilan):** «1 band ko‘rildi: X2 — bajarildi (D3 3→2, M2 chiqarildi); ochiq band yo‘q.»

### 3.5. Nima o‘rgatadi

- **Mustaqillik — «boshqa sayt» emas, «boshqa manba»**: qayta nashr (echo) mustaqil hisoblanmaydi.
- **Raqam kimdan chiqqanini yozish**: «300 ming qaror» M1 da yo‘q — demak u M2 ning qo‘shimchasi; bunday raqam alohida isbot talab qiladi.
- **X2 ni xotirjam berish**: topilma «skandal» emas — aniq, tor, tuzatiladigan band.

---
## 4. KEYS B — «VENDOR DA’VOSI»

### 4.1. Vaziyat

«Namuna Fintech» kartochkasida D4 (ma’lumot va infratuzilma) «Tanlangan» (2 ball). Asos: vendor keys (V1, kompaniya sayti) — «Namuna Fintech platformamizni tanladi va joriy etdi». Mijozning o‘z tasdig‘i yo‘q. Siz Qizil jamoa a’zosisiz.

### 4.2. Materiallar paketi (shartli)

| Manba | Toifa | Mazmun (qisqa) |
|---|---|---|
| **V1** | toifa-4 (vendor marketing sahifasi) | «Mijoz: Namuna Fintech — hamkor»; skrinshot bilan; sahifa JS-asosli, kontent dinamik yuklanadi |
| **V2** | toifa-3 (Misol tadqiqotining o‘z skani) | Saytdan olingan ma’lumot: faqat savdo sahifasi matni, boshqa iz yo‘q |

### 4.3. Topshiriq

1. «Vendor da’vosi» qoidasini yozing (Anker kitobi, S-6).
2. E-daraja va ball chegarasini aniqlang.
3. JS-sahifa uchun iz (snapshot) qanday olinadi — TN-03 talabini bajaring.
4. Arxetip (K-04) nuqtai nazaridan qanday qo‘shimcha savol tug‘iladi?

### 4.4. Namuna yechim

**Bayroq (namuna):**

| Maydon | Qiymat |
|---|---|
| Bayroq ID | B-2026-1-02 |
| Mavzu | D4 «Tanlangan» faqat vendor da’vosiga tayanadi; mijoz tasdig‘i yo‘q |
| Buzilgan normalar | TN-02 (rasmiylik — vendor sahifasi rasmiy hujjat emas), TN-03 (iz to‘liq emas — JS sahifa) |
| X-sinf (taklif) | X2 |
| Falsifikatsiya sharti | Mijozning o‘z e’loni yoki rasmiy hujjatida platforma tanlovi tasdiqlansa — bayroq bekor |
| Holat | ochiq |

**Qoida eslatmasi (S-6, Anker kitobi):** «Vendor keysi mijoz nomini “hamkor” deb yozsa, lekin mijozda tasdiq yo‘q → maksimum 1 ball (E1); izohga “vendor da’vosi” yoziladi.»

**Qayta baholash (namuna):** «D4: 2 → 1. E-daraja: E1 (vendor da’vosi). Izoh: “vendor da’vosi — mijoz tasdig‘i yo‘q”. Ikkinchi manba qidiruvi: 2 hafta muddat bilan kuzatuv ro‘yxatiga.»

**JS-sahifa izi (TN-03):** sahifaning matn qismi arxiv nusxasiga olinadi (Brozzler-rejim to‘liq bo‘lmagan holatda ham matn kesimi saqlanadi); rasm/skriptlar to‘liq bo‘lmasligi izohda yoziladi; SHA-256 + `.ots` vaqt muhri qo‘shiladi [G2, G3].

**Arxetip savoli (K-04):** mahsulot turi nima — chatbot, skoring yoki agent? Daraja chegaralari arxetipga qarab farq qiladi (Y-09); anker v1.1 gacha bu bandga «arxetip aniqlanmagan» izohi qo‘yiladi.

**Nima o‘rgatadi:** vendor sahifasi — **da’vo**, tasdiq emas; e’lon va amal o‘rtasidagi chegara; JS sahifalarda iz to‘liq bo‘lmasligini oldindan yozish.

---

## 5. KEYS C — «KO‘RGAZMA HOLATI» (QIYIN)

### 5.1. Vaziyat

«Namuna K Bank» D3 «Amalda» (3 ball) — asos: demo-kun videosi va taqdimot: «model aniqligi 91%». Metodika ochiq emas, mustaqil test yo‘q, registrda yozuv yo‘q. Nashr tayyorlanmoqda (hali chiqmagan). To‘liq jarayonni o‘tkazing: bayroq → dosye → javob → hakamlik → nashr darvozasi.

### 5.2. Materiallar paketi (shartli)

| Manba | Toifa | Mazmun (qisqa) |
|---|---|---|
| **K1** | toifa-4 (video + taqdimot) | Demo-kun: «91% aniqlik», «10 mingdan ortiq qaror» — slaydda |
| **K2** | toifa-3 (bank sayti) | E’lon: «innavatsion loyiha» — metrikasiz |
| **K3** | toifa-1 (registr nusxasi — qidiruv natijasi) | Tegishli yozuv **topilmadi** (qidiruv izi saqlanadi) |

### 5.3. Topshiriq

1. PK-01 bayroq + PK-02 dosye to‘ldiring (til qoidasiga rioya!).
2. Javob oynasi: bank yozma javob berdi — ichki xat: «ko‘rsatkichlar sinov muhitida olingan; pilot davom etmoqda» (toifa-3, ochiq emas). Baholang.
3. Hakamlik: X-sinf va yakuniy ball qarorini yozing (PK-04).
4. Nashr darvozasi: X1 sharti bormi? QX-2026-1 yozuvini tuzing.

### 5.4. Namuna yechim

**Bayroq:**

| Maydon | Qiymat |
|---|---|
| Bayroq ID | B-2026-1-03 |
| Mavzu | «91% aniqlik» da’vosi metodikasiz va mustaqil tasdiqsiz; «10 ming qaror» qayd etilmagan |
| Buzilgan normalar | TN-01, TN-02, TN-05 |
| X-sinf (taklif) | X2 (nashr chiqmagan — X1 sharti ko‘riladi) |
| Falsifikatsiya sharti | Metodika + mustaqil tekshiruv yoki rasmiy hisobot taqdim etilsa — bayroq bekor |
| Holat | ochiq |

**Til qoidasi — taqqoslash:**

| ❌ Noto‘g‘ri (o‘quvchilar ko‘p qiladi) | ✅ To‘g‘ri |
|---|---|
| «Bank ko‘rgazma uchun raqamlarni bezatgan» | «Taqdimotdagi metrikalar uchun metodika ochiq emas; mustaqil tasdiq topilmadi (qidiruv izi ilovada)» |
| «911% — yolg‘on» | «“91%” raqami demo sharoitiga tegishli ekani bank xatida qayd etilgan; ishlab chiqarish tasdig‘i yo‘q» |

**Javob oynasi bahosi:** xat — toifa-3, lekin **ochiq emas** (TN-03); u metrika shartini bajarmaydi, balki «sinov muhiti» chegarasini tasdiqlaydi. Natija: X2 saqlanadi.

**Hakamlik qarori (namuna, PK-04):** «(a) X2 tasdiqlandi; (b) D3 3 → 2: tanlov va pilot izi bor, ishlab chiqarish metrikasi yo‘q; (c) 3 ballga qaytish sharti: ochiq metodika + mustaqil tekshiruv yoki rasmiy hisobot. Muddat: keyingi sikl. Apellyatsiya: 1 marta, yangi dalil bilan.»

**Nashr darvozasi:** hozirgi holatda **X1 sharti yo‘q** (nashr chiqmagan, da’vo qayta baholanmoqda) — nashr **X2 tuzatishi bilan** chiqadi. Diqqat: agar 3 ball «ishlab chiqarishda» so‘zi bilan allaqachon nashr qilingan bo‘lsa — bu **X1** (72 soat) va **erratum** talab qilinadi (PK-06).

**QX-2026-1 yozuvi (namuna):** «1 band ko‘rildi: X2 — bajarildi (D3 3→2; sana: …; javob oynasi: 7 kun; hakamlik: 5 ish kuni); ochiq band: 3 ballga qaytish sharti (keyingi sikl).»

### 5.5. Nima o‘rgatadi

- **Gaming bilan kurash — dalil bilan**: «bezatilgan» so‘zi emas, «metodika ochiq emas» — fakt tili.
- **Javob oynasi qiymati**: bankning o‘z xati X2 ni **kuchaytirdi** (sinov muhiti tan olinishi — foydali dalil).
- **X1 chegarasi**: xato qaysi holatda «to‘xtatish»ga aylanadi — nashr qilingan da’voga bog‘liq.
- **Regress chegarasi (QJ-11)**: bir bosqich — bank «tanqidga tanqid» yozsa, yakuniy so‘z hakamlik panelida [H2].

---

## 6. BAHOLASH RUBRIKASI (UMUMIY)

**5 mezon × 20 ball = 100; o‘tish: ≥80 ball.** Har keys uchun baho alohida; yakuniy — o‘rtacha.

| № | Mezon | 20 ball nimaga beriladi | Tipik yo‘qotish |
|---|---|---|---|
| 1 | Manba intizomi | Mustaqillik, toifa, kontekst, izlar to‘liq | Echo manbani mustaqil sanash (-10) |
| 2 | X-sinf aniqligi | To‘g‘ri sinf va asos bir xil qoidaga tayanadi | X2 o‘rniga X3 (yumshatish) (-10) |
| 3 | Qayta baholash | Ball o‘zgarishi qoidaga bog‘langan va izohli | «Ballni tushirish» sababsiz (-10) |
| 4 | Til va etika | Fakt tili, ayblovsiz, shaxsiy ma’lumot yo‘q | «Yolg‘on» sinonimlari (-20) |
| 5 | Hujjatlashtirish | Bayroq, dosye, muddat, imzo, arxiv izi | Izsiz da’vo (-10) |

**Kelishuv mashqi:** 10 ta mini-bayroq (7-bo‘lim) mustaqil ravishda X-sinf bilan belgilanadi; juftlik mosligi **≥80%** bo‘lishi shart (S-8 ruhida — o‘lchov tizimida bo‘lgani kabi, sinov tizimida ham kelishuv o‘lchanadi). Kelishuv past bo‘lsa — baholash qoidasi qayta o‘qiladi, sonlar emas, **qoida** kelishiladi.

---

## 7. MINI-BAYROQLAR BANKI (10 TA — KELISHUV MASHQI)

*(To‘g‘ri javoblar o‘qituvchi varaqida; bu yerda kutilgan sinf ustuni — mashqdan keyin ochiladi.)*

| № | Mini-bayroq (1 satr) | Kutilgan X-sinf |
|---|---|---|
| 1 | Sana 2026-10-04 o‘rniga 2026-01-04 deb chop etilgan | X3 |
| 2 | Havola o‘lgan (404), arxiv nusxasi olinmagan | X3 |
| 3 | Ball 3 — ikkinchi manba yo‘q | X2 |
| 4 | Sektor indeksi 32,6 o‘rniga 3,26 yozilgan | X1 |
| 5 | Tengdoshlar to‘ldirmasi formulasida xato | X2 |
| 6 | Uslub taklifi (sarlavha qisqartirish) | X4 |
| 7 | Yagona tayanch — OAV; rasmiy hujjat mavjud, ko‘rsatilmagan | X2 |
| 8 | Skrinshotda mijoz ismi va telefoni ko‘rinib qolgan | X1 |
| 9 | Jadval sarlavhasi ustunlar bilan mos emas | X3 |
| 10 | Anker kitobidagi eskirgan misol raqami | X3 |

**Izoh:** X1 — darhol (72 soat); 4- va 8-qatorlar nima uchun X1 ekanini jamoa tushuntirib berishi shart (raqam ma’nosini buzish; shaxsiy ma’lumot oshkorligi).

---
## 8. TIPIK TUZOQLAR KATALOGI — TU-01…TU-10

*(Har tuzoq: noto‘g‘ri yo‘l → to‘g‘ri yo‘l. Mashg‘ulotlarda bu katalogdan jonli misollar ko‘rsatiladi.)*

| Kod | Tuzoq | ❌ Noto‘g‘ri yo‘l | ✅ To‘g‘ri yo‘l |
|---|---|---|---|
| **TU-01** | Somon odam | Da’voning zaif variantiga hujum qilish («ular hech narsa qilmagan») | Avval eng kuchli variantini yozish (steelman), keyin sinash |
| **TU-02** | Ayblov tili | «Yolg‘on», «firib», «soxta» so‘zlari | «Mustaqil tasdiq topilmadi», «metodika ochiq emas», «qayd etilmagan» |
| **TU-03** | Zaif ikkinchi manba | Echo (qayta nashr) yoki turdosh saytni mustaqil sanash | Mustaqillik testi: manba turi + egasi + mazmun ildizi |
| **TU-04** | Kontekstsiz iqtibos | Fransanigina olingan jumla | «5 satr kontekst» qoidasi: sana, versiya, soha, kim aytdi, nima uchun |
| **TU-05** | «E’lon = amal» | E’lonni ishlab chiqarish dalili deb hisoblash | E1–E3 zinapoyasi: amal izi (metrika, tashqi tasdiq, hisobot) |
| **TU-06** | Sinfni yumshatish | X1/X2 ni X3 deb belgilash (obro‘ uchun) | Sinf — qoidaga bog‘lanadi, kayfiyatga emas; shubha bo‘lsa panelga |
| **TU-07** | Muddatsiz band | «Ochiq band» qoldirish, muddat yozmaslik | Har band: X-sinf + muddat + mas’ul + falsifikatsiya sharti |
| **TU-08** | «Hammasi toza» | Nol topilma bilan sikl yopish | 2–10 mazmunli topilma me’yori; nol topilma — o‘zini tekshirish signali |
| **TU-09** | Izsiz da’vo | Skrinshot, snapshot, hash qo‘ymaslik | K-07 dosye: har da’vo uchun iz; SHA-256 + `.ots` [G2] |
| **TU-10** | Cheksiz regress | «Tanqidga tanqidga tanqid» zanjiri | Bir bosqich (QJ-11); yakuniy so‘z — hakamlik paneli [H2] |

**Huquqiy chegara (o‘zgarmaydi):** mashqda ham, real sinovda ham — AdmK 202-2, JK 244-6 va JK 139-2 ni yodda tutgan holda «yolg‘on ma’lumot» formati qo‘llanmaydi; faqat tekshiriladigan fakt tili (V9).

---

## 9. MASHG‘ULOT FORMATLARI (3 SESSIYA)

### 9.1. 1-mashg‘ulot — Keys A (90 daqiqa)

| Vaqt | Bosqich | Izoh |
|---|---|---|
| 0–10 daq | Kirish + maqsad | Nizom va normalar eslatiladi (ayblovsiz til) |
| 10–30 daq | Yakka ish | Sonlar bilan bayroq (TN ro‘yxati bilan) |
| 30–50 daq | Juftlik taqqoslash | Farq bo‘lgan bandlar ro‘yxati tuziladi |
| 50–70 daq | Namunaviy yechim | «Zaif ikkinchi manba» tuzog‘i ko‘rsatiladi |
| 70–85 daq | Dosye yozish (qisqa) | PK-02 dan 3 blok |
| 85–90 daq | Debrief | 1 narsa o‘rganildi + 1 xato qayd etildi |

### 9.2. 2-mashg‘ulot — Keys B (90 daqiqa)

Juftliklarda yechiladi; «skeptik-2» roli — har xulosani qayta ko‘radi; vendor qoidasi (S-6) va JS-iz talabi (TN-03) asosiy fokus; yakunda arxetip savoli muhokama (Y-09).

### 9.3. 3-mashg‘ulot — Keys C (120 daqiqa, rol-o‘yin)

Rollar: Qizil jamoa (3), tadqiqotchi bloki (2), hakamlik paneli (3), kotib (1), kuzatuvchi (1). Ketma-ketlik: bayroq → dosye → javob oynasi (7 kun **siqilgan**: 15 daqiqa) → hakamlik (5 ish kuni siqilgan: 20 daqiqa) → QX yozish → debrief. Baholash: rubrika (6-bo‘lim).

**Debrief shabloni:** nima ishladi · nima chalkashtirdi · qaysi tuzoqqa tushildi (TU-…) · keyingi mashg‘ulot uchun 1 tuzatish.

---

## 10. SERTIFIKAT, A’ZOLIK VA ALOQA

**«Sinov sertifikati» shartlari (S-8 ruhida):** uch mashg‘ulotda qatnashish · yakuniy baho ≥80 ball · mini-bayroqlar kelishuvi ≥80% · etika/COI deklaratsiyasi (PK-07) imzolangan.

**Marshrut (K-11 bilan bog‘liq):** sertifikatlangan tanqidchi → sikl sinovlarida qatnashadi → eng faol X1/X2 muallifi keyingi sikl metodologi yoki hakamlik a’zosi bo‘lish huquqini oladi.

| Trenajyor elementi | PK | IV jild | III jild | Boshqa |
|---|---|---|---|---|
| Keys A (mustaqillik) | PK-01, PK-02 | TN-01, X2 | AR-22 | S-6 |
| Keys B (vendor) | PK-02, PK-07 | TN-02, TN-03, K-07 | AR-03 | [G2, G3] |
| Keys C (jarayon) | PK-03…PK-06 | QJ-09…QJ-14, K-08 | AR-15, AR-19 | [H2], [H3] |
| Rubrika va kelishuv | — | TN-10, QJ-09 | AR-08 (etalon ruhi) | S-8 |
| Mashg‘ulot rejasi | PK-08 | QJ-02 | AR-13 | [H1] |

---

## 11. 10× TEKSHIRUV DAFTARI (TRENAJYOR)

**Belgilar:** ✔ — o‘tish qo‘llanildi, topilma yo‘q; **Δ** — topilma aniqlanib tuzatildi. Skript: `verify_okeys.py`.

| Bo‘lim | V1 | V2 | V3 | V4 | V5 | V6 | V7 | V8 | V9 | V10 |
|---|---|---|---|---|---|---|---|---|---|---|
| 0. Metodika | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ |
| 1. Nega kerak | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ |
| 2. Xarita | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ |
| 3. Keys A | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ |
| 4. Keys B | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ |
| 5. Keys C | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ |
| 6. Rubrika | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ |
| 7. Mini-bayroqlar | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ |
| 8. TU katalogi | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | **Δ2** | ✔ |
| 9. Mashg‘ulotlar | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ |
| 10. Sertifikat va aloqa | ✔ | **Δ1** | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ |
| 11. Ushbu daftar | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | **Δ3** |
| 12. Xulosa | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ |

### Topilma jurnali

| # | O‘tish | Topilma | Tuzatish |
|---|---|---|---|
| Δ1 | V3 / V4 | 1) Huquqiy chegara eslatmasi yo‘q edi (sinov tilida ham «yolg‘on ma’lumot» formati taqiqlanishi yozilmagan); 2) §10 jadvalida kod yozuvi aniq emas edi | 1) §8 ga yuridik chegara paragrafi qo‘shildi (AdmK 202-2, JK 244-6, JK 139-2); 2) kod **QJ-09** bilan aniqlashtirildi |
| Δ2 | V9 (skript) | O‘quv maqsadidagi ❌ namuna qatorlari («yolg‘on», «soxta») taqiqlangan so‘zlar skaneriga tushdi — soxta topilma | Skript ❌/✅ belgili qatorlarni istisno qiladi; hujjatda o‘zgarish shart emas |
| Δ3 | V10 | 11–12-bo‘limlar shu siklda yakunlandi; indeks va IV jild havolalari yangilanishi kerak edi | Mazkur daftar yozildi; IV jild va indeksga trenajyor havolasi qo‘shildi (keyingi qadam) |

### Yakuniy yurish

```
python3 verify_okeys.py → 10/10 PASS
Regressiya: verify_tanqidiy.py | verify_paket.py | verify_arxitektura.py | verify_kritik.py → 10/10
```

---

## 12. XULOSA VA QAROR SO‘ROVLARI

### 5 tezis

1. **Trenajyor — sinovning «quruq yugurishi»:** uchtacha keys bilan bayroqdan qizil xulosagacha butun zanjir mashq qilinadi; haqiqiy siklga tayyor jamoa kiradi.
2. **Baholash o‘lchanadi:** rubrika (≥80 ball) + kelishuv (≥80%) — sifat madaniyati, sonlar bilan.
3. **TU katalogi — kollektiv immunitet:** 10 tipik tuzoq yozma ro‘yxatda; har mashg‘ulotda yangisi aniqlansa — katalog yangilanadi (versiyalanadi).
4. **Shartlilik va etika:** barcha keyslar shartli; ayblovsiz til mashqning **o‘zida** talab qilinadi (V9) — bu real sinovdagi tilni oldindan shakllantiradi.
5. **Kadr oqimi:** sertifikat → sikl ishtiroki → metodolog/hakam marshruti (K-11) — klub o‘sishi bilan birga jamoa ham o‘sadi.

### Qaror so‘rovlari (faqat ishchi tartib — push/e’lon yo‘q)

1. **Trenajyor (uch mashg‘ulot + rubrika + TU katalogi)** 30-kunlik tayyorgarlikka kiritilsinmi?
2. **Mini-bayroqlar banki** kengaytirilsinmi (20 tagacha) — keyingi siklda?
3. **TU katalogi** jonli yangilanadigan hujjat sifatida yuritilsinmi (changelog bilan)?
4. **Keyslar asosida video-darslik** (ekran yozuvi) tayyorlansinmi — kelgusi jamoalar uchun?
