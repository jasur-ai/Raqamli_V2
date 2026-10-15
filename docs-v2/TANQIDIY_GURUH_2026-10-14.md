# AKADEMIK YADRO: QIZIL JAMOA VA RIVOJLANTIRUVCHI MEXANIZMLAR
### «Raqamli Tadqiqot» / AAI-UZ · IV jild · v1.0 · 2026-10-14 · qoralama (faqat workspace)

**Bog‘lanish:** I jild — `IDEA_TAHLIL_2026-10-14.md` (IN/P/R) · II jild — `KRITIK_TAHLIL_2026-10-14.md` (L/T/Z/Y) · dalillar — `DALIL_REYESTRI_2026-10-14.md` v1.4 (A–H) · takliflar — `../standard/TAKLIFLAR_2026-10-14.md` (S/I/M) · III jild — `ARXITEKTURA_2026-10-14.md` (AR/SH) · ishchi paket — `QIZIL_SINOV_PAKETI_2026-10-14.md` (PK-01…PK-08 shablonlari).

**Maqsad:** klub **birinchi kundan** xalqaro standartlarga javob beradigan va katta tashkilotlar bilan bir maydonda bellasha oladigan akademik yadro bo‘lsin. Uning yadrosi — **institutsional muxolifat**: rasmiy **Qizil jamoa** (tanqidiy guruh) natijalarni inkor etishga professional urinadi; tanqidning o‘zi **qat’iy normalar** bilan cheklanadi (ikki manba · rasmiylik · ochiqlik · xavfsizlik); natijada manba quvvatlanadi, raqobat va ishonch oshadi.

> «Sinovdan o‘tmagan da’vo — da’vo emas, e’lon.»

**«Har bir qismda 10 marta» talabi (IV jild):** har bo‘lim V1–V10 o‘tishlaridan o‘tkazildi; natijalar 11-bo‘limdagi daftarda; tekshiruv skripti — `verify_tanqidiy.py` (qayta ishga tushirish mumkin).

---

## 0. METODIKA — V1–V10 O‘TISHLARI (IV jild nusxasi)

| O‘tish | Nima tekshiriladi | Usul |
|---|---|---|
| **V1 Fakt/manba** | Har da’vo [A1]…[H5] manba ID ga bog‘langanmi | Skript + qo‘lda |
| **V2 Raqam izchilligi** | 32,6; 0,778; ≥80%; κ≥0,6; 7/14 kun; 5 ish kuni; 72 soat — I–III jildlar bilan dosh | Skript (tokenlar) |
| **V3 Huquqiy aniqlik** | Huquqiy gaplar II jild F8 bilan mos (AdmK 202-2; JK 244-6; JK 139-2); tanqid tili huquqiy xavfsiz | Skript + qo‘lda |
| **V4 Kod yaxlitligi** | Q/TN/K kodlari to‘liq va yakkama-yakka; T/Z/Y/AR/SH/S/I havolalari mavjud | Skript (kodlar indeksi) |
| **V5 Mantiqiy qamrov** | QJ-01…QJ-14, TN-01…TN-10, K-01…K-12 to‘liq; har biri 9-bo‘lim moslik jadvalida | Skript |
| **V6 Ikkilanish nazorati** | Q/TN/K nomlari takrorlanmagan; tashqi shikoyat (S-10, AR-19) va ichki qizil sinov chegarasi bayon qilingan | Skript + qo‘lda |
| **V7 Til va atamalar** | Imlo, o‘/g‘ belgilar, yagona atamalar lug‘ati | Skript |
| **V8 Tipografika** | Ko‘rinmas belgilar, qo‘sh bo‘shliqlar, jadval butunligi | Skript |
| **V9 Etika va COI** | Tanqid ayblovsiz; shaxsiy ma’lumot minimizatsiyasi; javob huquqi | Skript + qo‘lda |
| **V10 Struktura va doshlik** | Bo‘limlar tartibi; hajm; boshqa jildlar bilan bog‘lanish nomuvofiqligi yo‘qmi | Skript + qo‘lda |

---

## 1. NEGA TANQIDIY GURUH? — falsafa va ratsional

### 1.1. Muammo: o‘zini-o‘zi tekshirishning ko‘r nuqtasi

- **Tasdiqlash moyilligi:** jamoa o‘z gipotezasini tasdiqlovchi dalilni oson, inkor qiluvchini qiyin topadi.
- **Yagona fikr:** kichik jamoalarda «hamma rozi» holati qaror bosimini oshiradi va shubhani bosadi.
- **Do‘stona ko‘rik:** ichki sifat nazorati ko‘pincha «hujum» emas, «tasdiq» rejimida ishlaydi — xato aynan shu yerda o‘tib ketadi.

### 1.2. Xalqaro manba: bu — yangi g‘oya emas, yetuk amaliyot

| Amaliyot | Mohiyati | Bizga o‘rni |
|---|---|---|
| Registered Reports [H1] | Natijalar ma’lum bo‘lmasidan **oldin** ko‘rik; asos — protokol sifati | K-01 «muhr» mexanizmi |
| Adversarial collaboration [H2] | Kelishmagan tomonlar **birgalikda** hal qiluvchi sinov o‘tkazadi; natija ikki ovozda | Qizil jamoa falsafasi |
| Red teaming — huquqiy me’yor [H3] | EU AI Act: tizimli xatarga ega modellar uchun adversarial testing majburiy va hujjatlashtiriladi | Jamoa protokoli va hisoboti |
| ACM nishonlari [H4] | Mustaqil audit va reproduksiya — alohida nishonlar tizimi | K-09, Zenodo bilan |
| COPE [H5] | Nashr etikasi 10 amaliyoti: shikoyat, COI, tuzatishlar | TN va Q normalari asosi |

**Xulosa:** klub darajasidagi qizil jamoa — «ortiqcha hashamat» emas; bu — katta tashkilotlar allaqachon yuritayotgan yetuklik amaliyotining minimal ko‘rinishi.

### 1.3. Nima beradi — besh foyda

1. **Manba quvvatlanadi:** har da’vo bir necha professional hujumdan keyin ham tursa — u «baquvvat» hisoblanadi (falsifikatsiyadan o‘tgan).
2. **Gaming kamayadi (T24):** javoblarni «bezak» qilish foydasi tushadi — chunki bezak sinovdan o‘tmaydi.
3. **Raqobat va o‘sish:** ikki tomonlama reyting; eng kuchli tanqidchilar keyingi sikl metodologi bo‘lib yetishadi (§6, K-11).
4. **Tashqi ishonch:** OAV, regulyator va xalqaro hamkorlar «o‘zini sinovdan o‘tkazadigan» tashkilotni boshqacha qabul qiladi — bu ishonch zinapoyasining (AR-17) birinchi pog‘onasi.
5. **Huquqiy himoya:** sinov izi — bayroq, dosye, javob, qaror, bayonnoma — T1 turidagi da’voga qarshi eng yaxshi material (fakt tili, Y-01 doirasida).

### 1.4. Chegara: nima **emas**

- **Ayblov emas** — sinov; **shaxs emas** — da’vo; **janjal emas** — protokol (TN-08).
- Qizil jamoa «qarshi chiqish» uchun emas, **haqiqatga yaqinlashish** uchun [H2]; maqsad — manbani mustahkamlash.
- Huquqiy chegara: AdmK 202-2, JK 244-6 va JK 139-2 ni yodda tutgan holda — faqat tekshiriladigan fakt tili; «yolg‘on ma’lumot» formati hech qachon qo‘llanmaydi (V9).
- Ichki qizil sinov (qoralama bosqich) va tashqi e’lon (ikki kalitdan keyin, AR-15) — bir-biridan qat’iy ajratiladi.

---

## 2. AKADEMIK YADRO TUZILMASI VA QIZIL JAMOANING O‘RNI

**Boshlang‘ich jamoa hajmi:** 9–12 kishi. Qizil jamoa — yadroning **mustaqil bloki**: a’zolari o‘lchov jarayonida ishtirok etmaydi (QJ-02).

| Rol / organ | Zimma (qisqa) | Qizil jamoa bilan aloqasi | Asos |
|---|---|---|---|
| Ilmiy rahbar | metod, hisob, etalon (32,6; κ 0,778) | X1 bandlarni qabul qiladi, tuzatish rejasini yozadi | AR-13 |
| Sifat rahbari (metodolog) | kelishuv, sifat darvozasi (≥80%, κ≥0,6) | Hakamlik paneli raisi | S-6, S-8 |
| Koordinator | jarayon, muddatlar, nashr oynasi | Qizil sinov sikl kalendariga kiradi | AR-16 |
| Operator guruhi | ankerlash, maydon ishi | Qizil jamoa a’zolari bu yerga chaqirilmaydi (mustaqillik) | QJ-02 |
| Baholovchilar | ballash (E1–E3) | X2/X1 bo‘yicha qayta baholash ro‘yxati | S-6 |
| Aloqa va media rahbari | nashr materiali, javoblar oqimi | «Ikki tomon» nashri ta’minlanadi | AR-21, AR-22 |
| Komissiya | tasdiq (ikki kalit) | X1 yopilishini tasdiqlaydi | AR-15 |
| **Qizil jamoa (yangi)** | **Natijalarni inkor etishga urinish** | yadro bloki — QJ-01…QJ-14 | IV jild |
| **Hakamlik paneli (yangi)** | Nizolarni yakunlash | 3 kishi · 5 ish kuni · ochiq bayonnoma | K-08 |

**Qizil jamoa on-boardingi:** 2 hafta — Anker kitob (S-6) + TN protokoli + huquqiy minimal (Y-01 asosida: fakt tili, shaxsiy ma’lumot, javob huquqi).

**Resurs bahosi:** Qizil jamoa — o‘rtacha 0,5 kishi-kun/hafta (3 a’zo bo‘yicha jami); hakamlik — ~1 kishi-kun/oy. Siklga umumiy qo‘shimcha yuklama ~2–3 kishi-kun (II jilddagi himoya sprinti hisobiga qo‘shiladi, alohida byudjet talab qilmaydi).

---

## 3. QIZIL JAMOA NIZOMI — QJ-01…QJ-14

| Kod | Modda | Mohiyati | Standart / iz |
|---|---|---|---|
| **QJ-01** | Mandat | Vazifa — natija va da’voni **inkor etishga professional urinish**; «sinov protokoli» bilan, ayblovsiz | Har urinish yozma iz qoldiradi (reyestr) |
| **QJ-02** | Tarkib va mustaqillik | ≥3 a’zo (≥1 tashqi — boshqa OTM yoki soha); o‘lchovda ishtirok etmaydi; 6–12 oyda rotatsiya | COI deklaratsiyasi (AR-18) |
| **QJ-03** | Ikki manba qoidasi | Har band ≥2 **mustaqil** manba bilan; mustaqillik — manba turi, egasi va hududi farqi | TN-01 |
| **QJ-04** | Rasmiylik zinapoyasi | toifa-1 qonun/registr → toifa-2 xalqaro hisobot → toifa-3 tashkilot rasmiy hujjati → toifa-4 OAV (faqat yordamchi) | TN-02 |
| **QJ-05** | Ochiq va tirik manba | Manba ochiq (publik URL) + snapshot + SHA-256 + OTS [G2, G3] | TN-03, AR-03 |
| **QJ-06** | Xavfsiz manba | Qonuniy va etik yo‘l (NDA buzilmaydi); shaxsiy ma’lumot — minimizatsiya (AR-25); e’lon huquqiy xavfi tekshirilgan | TN-04, Y-01 |
| **QJ-07** | Steelman qoidasi | Avval da’voning **eng kuchli variantini** yozish, keyin hujum; «somon odam» taqiqlanadi | [H2] ruhi |
| **QJ-08** | Falsifikatsiya sharti | Har band «bekor qilish sharti» bilan: qaysi dalil topilsa — tanqidning o‘zi bekor bo‘ladi | TN-06 |
| **QJ-09** | X-sinflar va SLA | X1 halokatli (72 soat) · X2 moddiy · X3 kichik · X4 redaksion | AR-16 |
| **QJ-10** | Javob tartibi | Tadqiqotchi 7 kun ichida yozma javob beradi; javob bo‘lmasa — hakamlik | TN-07, S-10 |
| **QJ-11** | Regress chegarasi | «Tanqidga tanqid» — bir bosqich; yakuniy so‘z — Hakamlik paneli | K-08 |
| **QJ-12** | Etika va COI | Faqat V9 tili; shaxsiy hujum va sinovsiz da’vo taqiqlanadi; a’zo manfaatlari reyestrda | AR-18, AR-27 |
| **QJ-13** | Mukofot va iz | Topilma e’tirofi (ism yoki anonim so‘rov); «Topilma» sertifikati; ballar — §6.1 | — |
| **QJ-14** | «Qizil xulosa» | Har nashrga ilova: kiritilgan bandlar, X-sinflari, holati; **X1 yopilmaguncha nashr to‘xtatiladi**, X2 — ochiq izoh bilan chiqadi | AR-15 (ikkinchi kalit) |

---

## 4. TANQID NORMALARI — TN-01…TN-10 (asosiy shartlar)

*(Manba talablari: «ikki joyda tasdiqlangan · rasmiy · ochiq · xavfsiz».)*

| Kod | Talab | Mohiyati | Tekshirish usuli |
|---|---|---|---|
| **TN-01** | Ikki joyda tasdiq | Har band kamida **ikki mustaqil manbada**; bitta manba — band emas, «signa» (kuzatuv ro‘yxati) | Dosye ko‘rigi: manba turi, egasi va hududi farqmi |
| **TN-02** | Rasmiylik | Manba rasmiy hujjat, registr yoki vakolatli hisobot; OAV — faqat yordamchi qatlam | Manba pasporti (toifa-1…4 yorlig‘i) |
| **TN-03** | Ochiqlik | Manba ommaga ochiq manzilda; iqtibos + arxiv nusxa | Snapshot + URL tirikligi |
| **TN-04** | Xavfsizlik | E’lon qilish qonuniy va etik; shaxsiy ma’lumot yo‘q; da’vo — fakt chegarasida | Yuridik tekshiruv ro‘yxati (Y-01) |
| **TN-05** | Kontekst | Iqtibos to‘liq va kontekstda; sana va versiya ko‘rsatilgan | «5 satr kontekst» qoidasi |
| **TN-06** | Tekshiriluvchanlik | Boshqa jamoa xuddi shu manbalardan xuddi shu bandni chiqaradi (reproducible critique) | Mustaqil takrorlash sinovi |
| **TN-07** | Javob huquqi | Nashrdan oldin himoya tomoniga 7 kun javob | Jurnal: sana izi |
| **TN-08** | Chegara | Shaxs emas — da’vo; niyat taxmin qilinmaydi; «ayblov» formati taqiqlanadi | Redaktor tekshiruvi (V9) |
| **TN-09** | Simmetriya | Jamoa o‘z ishini ham shu normalar bilan sinaydi (ichki self-red) | Har siklda 1 self-red |
| **TN-10** | Metrika va iz | Har tanqid reyestrda: band, X-sinf, holat, natija; asossiz tanqid **ham** ochiq hisoblanadi | Oylik reyestr hisoboti |

*(Muhim chegara: «tashqi shikoyat» — S-10 va AR-19 (5 ish kuni) va «ichki qizil sinov» — TN/Q (qoralama bosqichida) bir-biridan farqli ikki jarayon: birinchisi tashqaridan keladi, ikkinchisi tadqiqot ichida rejalashtirilgan.)*

---
## 5. FINDING SINFLARI (X1–X4), MUDDAT (SLA) VA QAROR

| Sinf | Nomi | Misol | Muddat (SLA) | Oqibat |
|---|---|---|---|---|
| **X1** | Halokatli | Ballni bekor qiladigan xato: ikkinchi manba yo‘q; manba rasmiy emas; fakt xato; gaming isboti | **72 soat** ichida tekshirish | DARHOL to‘xtatish — nashr qilinmaydi; allaqachon chiqqan bo‘lsa — darhol tuzatish/erratum (S-10) + ochiq bayon |
| **X2** | Moddiy | Anker darajasi yoki ballni o‘zgartiradi: E1↔E2 baho xatosi; arxetip noto‘g‘ri tanlangan; tengdoshlar to‘ldirmasi metodik xato | 14 kun | Qayta baholash → yangilangan ball + ochiq izoh (qaysi kodlar o‘zgardi) |
| **X3** | Kichik | Matn, sana, havola, format xatosi | 30 kun | Redaksion tuzatish + changelog |
| **X4** | Redaksion | Taklif, savol, uslub | 30 kun | Javob yoziladi; hisobga olinishi mumkin |

**X1 qoidasi (nashr darvozasi):** X1 yopilmaguncha nashr **to‘xtatiladi**; X2 yopilmaguncha nashr ochiq izoh bilan chiqadi. Bu — ikkinchi kalitning (AR-15) birinchi qismi: qizil jamoa «to‘xtatish» huquqiga ega, lekin qaror **panel** bilan tasdiqlanadi.

---

## 6. MUSTAHKAMLASH MEXANIZMLARI — K-01…K-12 (kreativ qatlam)

| Kod | Mexanizm | Mohiyati | Muddat / manba |
|---|---|---|---|
| **K-01** | Pre-registratsiya «muhr» | Sikl boshida metod va ankerlar ochiq e’lon qilinadi (muzlatish); o‘zgartirish faqat changelog bilan | [H1] Registered Reports |
| **K-02** | Ishonch zinapoyasi — pog‘onalar (0–3) | pog‘onalar (0–3): dalilning mustaqil tasdiq darajasiga ko‘ra; har tashkilot kartochkasida ko‘rinadi | [H4] ruhi, AR-17 |
| **K-03** | Reproduktivlik qutisi | Har nashr bilan: kod + to‘plam + `reproduce.md` — tashqi jamoa 1 kunda qayta hisoblaydi | [H4], AR-01/AR-12 |
| **K-04** | Ovoz berish emas — ovozlar | Asl tekshiruv / mustaqil takror / bog‘lanish (oson↔qiyin) uchta alohida sanitariya sinovi | [H1]; TENK ruhi |
| **K-05** | Katta tashkilot bilan «syujet sinovi» | 1–2 yirik tashkilot bilan sinov hamkorligi (ular xatolar topilishida manfaatdor) | [H2] adversarial |
| **K-06** | Ochiq muhokama — fasl | Har sikl tanqid materiallari saytda; ochiq kommentariya rejimi va moderator qoidalari | [H2], TN-08 |
| **K-07** | Da’vo dosyesi — «manba pasporti» | Har da’vo kartasi: manba(lar) + mavjudlik holati (Wayback+OTS) + manba toifasi (toifa-1…4) | [G2,G3]; QJ-03…QJ-05 |
| **K-08** | Hakamlik paneli | 3 kishi · 5 ish kuni · ochiq bayonnoma; «arbitr» an’anasi | [H2]; AR-19 |
| **K-09** | Reproduktivlik nishonlari | «Mustaqil takrorlangan» nishoni (P1–P3); Zenodo depoziti shart | [H4]; Y-05 |
| **K-10** | Ikki tomon nashri | Har nashr: natija + «Qizil xulosa» + kiritilgan/o‘tkazilmagan bandlar jadvali | [H2] «ikki ovoz» |
| **K-11** | Raqobat — sikl xulosasi | Kengaytirilgan tanqidchilik klublari; eng faol tanqidchi keyingi sikl metodologi | AR-17 |
| **K-12** | Etika va isbot | Tanqid qilish ham **asoslanish** talab qiladi: QJ-12 + isbot talabi (teng shart) | [H5]; TN-10 |

**K-11 izohi — raqobat:** ichki (Qizil jamoa ↔ tadqiqotchi) va tashqi (OTM/Hackathon jamoalari orasida «eng ko‘p X1/X2 topgan jamoa» tanlovi). G‘olib jamoa keyingi sikl tanqid blokida ishtirok huquqini oladi — bu kadrlar oqimini ta’minlaydi.

---

## 7. QIZIL SINOV TARTIBI — 7 QADAM

```
1. KICKOFF      Metod va ankerlar muzlatiladi (K-01); Qizil jamoa a’zolari tayinlanadi (QJ-02)
2. SKAN         Qizil jamoa mustaqil kuzatuv qiladi; aloqa faqat yozma kanalda
3. DOSYE        Har shubhali band uchun «da’vo dosyesi» (K-07): manbalar, toifalar, mavjudlik
4. TOPILMALAR   «Halokat kuni» — 2 haftalik hujum bosqichi: hammasi hujjatlashtiriladi
5. JAVOB        7 kun ichida tadqiqotchi yozma javob beradi (QJ-10); bo‘lmasa — hakamlik
6. HAKAMLIK     Panel 5 ish kuni ichida hal qiladi: o‘tkazildi / qayta ko‘rib chiqish / tasdiqlandi (K-08)
7. YOPILISH     QJ-14 «Qizil xulosa» tayyorlanadi; o‘tkazilgan bandlar + sabablar ochiq arxivlanadi
```

### 7.1. Kalendar (sikl ichida)

| Bosqich | Muddat | Izoh |
|---|---|---|
| Kickoff + muzlatish | 0-kun | Metod, anker, namuna e’lon qilinadi |
| Qizil dosye — qoralama | 10-kun | FAQAT ichki; nashr qilinmaydi |
| Halokat kuni (hujum) | 20-kun | Yozma topilmalar; X1 lar darhol ko‘riladi |
| Javob oynasi | 20–27-kun | Tadqiqotchi javobi (7 kun) |
| Hakamlik | 27–32-kun | Panel qarori + bayonnoma |
| Nashr darvozasi | 32-kun | QJ-14 ilova bilan; X1 yopilgan shart |

### 7.2. Hakamlik paneli (K-08)

- **Tarkib:** Sifat rahbari (rais) + 1 tashqi ekspert + 1 klubdan tashqari metodolog.
- **Muddat:** 5 ish kuni; qaror — yozma va ochiq (ismlar/maxfiylik — AR-25 doirasida).
- **Qaror turlari:** (a) tanqid qabul — tuzatish; (b) qisman — qayta baholash; (c) tanqid asossiz — sabab yoziladi.
- **Apellyatsiya:** bir marta (QJ-11), faqat yangi dalil bilan.

### 7.3. «Ikki tomon» nashri (K-10) — nashr formati

| Blok | Kim yozadi | Izoh |
|---|---|---|
| Asosiy natija | Tadqiqot bloki | Bali va dalillar (E1–E3) |
| «Qizil xulosa» | Qizil jamoa | O‘tkazilgan band, X-sinflari, ochiq bandlar |
| Manba daftari | K-07 qatlami | manba toifasi, ikki-manba, mavjudlik holati |
| Isbot paketi | Arxiv | Kod, to‘plam, `reproduce.md`, hash, `.ots` |

---

## 8. SIFAT MEZONLARI VA MUKOFOT TIZIMI

### 8.1. Samaradorlik ko‘rsatkichlari

| Ko‘rsatkich | Mezon | Izoh |
|---|---|---|
| Qamrov | Sikl bo‘yicha 100% natija va top-10 da’vo sinovdan o‘tadi | «Tanlangan band» — ochiq yoziladi |
| Topilma sifati | X1 — 72 soatda; X2 — 14 kunda yopiladi | Muddati o‘tgan band — «ochiq band» deb belgilanadi |
| Asossiz tanqid | ≤40% (yangi jamoaga; 1-yildan ≤25%) dan kam bo‘lmagan aniqlik | Asossiz tanqid ham hisobga olinadi (TN-10) |
| Reproduktivlik | Har sikl ≥1 tashqi mustaqil takror | K-03 qutisi bilan |
| Tanqid balansi | Har sikl 2–10 ta mazmunli topilma | «Hammasi toza» keyingi sikl uchun ishonch emas, tekshirish belgisi |

### 8.2. Mukofot va jamoa

- **Topilma sertifikati:** X1/X2 topgan a’zo yoki jamoa uchun; yillik hisobotda e’lon.
- **Klub ichida imtiyoz:** X1/X2 topgan tanqidchi keyingi sikl **metodologi** yoki hakamlik a’zosi bo‘lish huquqini oladi.
- **Ball reytingi:** sikl xulosasida qizil jamoa va tadqiqot bloklari yonma-yon ko‘rinadi — «hamma g‘alaba qozonmaydi, faqat natija g‘alaba qozonadi».
- **Anonimlik varianti:** tashqi mutaxassis tanqidi anonim qabul qilinadi; natijasi baribir ochiq yoziladi.
- **Anti-gaming chegarasi:** tanqidchi **ham** TN-01…TN-10 ga bo‘ysunadi; «g‘arazli tanqid» aniqlansa — ishtiroki cheklanadi.

---

## 9. IV jild ↔ I–III jild MOSLIK XARITASI

| Kod | Bog‘liq | Nima yopiladi |
|---|---|---|
| QJ-01, QJ-02, QJ-03 | T24, T6, Z12 | Gaming va yupqa manbalar — tanqid orqali mustahkamlash |
| QJ-04, QJ-05 | T8, T9 | Rasmiylik va snapshot izi — «L2 ball asosida» tanqidining yopilishi |
| QJ-06 | T1, T2, T14 | Xavfsiz va qonuniy manba; shaxsiy ma’lumot minimizatsiyasi |
| QJ-07, QJ-08 | T11, Z10 | Steelman va falsifikatsiya — ekvivalentlik va arxetip savollari |
| QJ-09, QJ-10, QJ-11 | T1, T20; AR-19; S-10 | Javob huquqi va muddatlar — huquqiy himoya bilan hamohang |
| QJ-12 | V9 etikasi; Y-01 | Ayblovsiz til; COI deklaratsiyasi |
| QJ-13, QJ-14 | AR-15, AR-17, T22 | Nashr darvozasi va nashr ishonchi |
| TN-01…TN-10 | T6, T8, T9, P12 | Manba quvvati normalari — «ikki joyda tasdiq» asosiy shart |
| K-01, K-02 | AR-03, AR-05 | Muzlatish «muhr» va ishonch pog‘onasi |
| K-03, K-04 | T24, T6 | Reproduktivlik qutisi va uch xil sinov kanali |
| K-05, K-06, K-07 | SH-01, SH-05, T8 | Katta tashkilotlar bilan sinov, ochiq muhokama, manba pasporti |
| K-08 | T14, AR-19 | Hakamlik va shikoyat oqimi uyg‘unligi |
| K-09, K-10 | AR-04, Y-05, T15 | Reproduktivlik nishonlari, DOI depoziti va «ikki tomon» nashri |
| K-11 | T16, T22 | Kadrlar rotatsiyasi va xalqaro bellashuvga tayyorgarlik |
| K-12 | T21, T24 | Tanqid ham asoslanishi shart — «qora ro‘yxat» vositasi bo‘lishiga qarshi |

---

## 10. YO‘L XARITASI — TO‘RT BOSQICH

| Davr | Ish | Kodlar |
|---|---|---|
| **30 kun** | Nizom (QJ-01…QJ-14) + TN normalar + X-sinflar + hakamlik nizomi qabul; 3 a’zo tayinlash; pre-registratsiya «muhr» shabloni; **trenajyor mashg‘ulotlari** (`OQUV_KEYSI`) | QJ, TN, K-01 |
| **60 kun** | Birinchi Qizil sinov (do‘stona) — 9 ball bo‘yicha; hakamlik bir marta sinovda; «qizil xulosa» versiyasi v1; ishchi paket shablonlari (PK-01…PK-08) qo‘llanadi | QJ-07…QJ-11, K-08, K-10 |
| **90 kun** | Reproduktivlik qutisi v1; «da’vo dosyesi» shabloni; K-11 tashqi tanqidchi/hakaton; martaba mexanizmlari | K-03, K-07, K-11 |
| **180 kun** | Birinchi **adversarial** hamkorlik (1 yirik tashkilot bilan); pog‘ona (0–3) nishonlar tizimi nashrda; yillik «Topilmalar» hisoboti | K-05, K-02, K-09, K-12 |

*(Har bosqich III jilddagi AR mexanizmlari bilan birga bajariladi; qo‘shimcha yuklama ~2–3 kishi-kun/sikl.)*

---

## 11. 10× TEKSHIRUV DAFTARI (IV jild)

**Belgilar:** ✔ — o‘tish qo‘llanildi, topilma yo‘q; **Δ** — topilma aniqlanib tuzatildi. Skript: `verify_tanqidiy.py`.

| Bo‘lim | V1 | V2 | V3 | V4 | V5 | V6 | V7 | V8 | V9 | V10 |
|---|---|---|---|---|---|---|---|---|---|---|
| 0. Metodika | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ |
| 1. Falsafa va ratsional | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ |
| 2. Tuzilma | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ |
| 3. Nizom (QJ) | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | **Δ1** | ✔ | ✔ |
| 4. Normalar (TN) | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ |
| 5. X-sinflar | ✔ | ✔ | ✔ | ✔ | **Δ3** | **Δ3** | ✔ | ✔ | ✔ | ✔ |
| 6. K-mexanizmlar | ✔ | ✔ | ✔ | **Δ3** | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ |
| 7. Ish tartibi | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ |
| 8. Mukofot | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ |
| 9. Moslik xaritasi | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ |
| 10. Yo‘l xaritasi | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ |
| 11. Ushbu daftar | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ |
| 12. Xulosa | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ |
| Tashqi fayllar (DALIL H, verifierlar) | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ |

### Topilma jurnali

| # | O‘tish | Topilma | Tuzatish |
|---|---|---|---|
| Δ1 | V7 | Matn va havola nuqsonlari — 6 ta: «Ssil» so‘zi (Skan o‘rniga), «boss bosqichi» iborasi, «aloqasiz ishlaydi» bayoni, «Samadorlik» imlo xatosi, yo‘q bo‘limga havola (§6.3), manbasiz «K-03 arxivi» izohi | Barcha oltisi tuzatildi; Skan qatori aniq shaklda: «mustaqil kuzatuv; aloqa faqat yozma kanalda»; havola «(§6, K-11)» va «AR-25 doirasida» bilan almashtirildi |
| Δ2 | V7 (butun to‘plam) | Apostrof uslubi (ASCII/klaviatura) va kirill homogliflari | Yagona uslub: o‘/g‘ — U+2018, boshqa ichki — U+2019; natija: ASCII apostrof 0, kirill 0 |
| Δ3 | V4 / V6 (kod unikalligi) | I–III jild kodlari bilan to‘qnashuv xavfi: Q (Q-358 hujjat kodi), C1–C4 (reyestr C1–C3), L (KRITIK L1–L12), R (I jild R1–R12) | To‘rt turdagi prefiks almashtirildi: **QJ**-01…14 (Qizil jamoa moddalari), **X**1–X4 (topilma sinflari), **pog‘ona 0–3** (L o‘rniga), **toifa-1…4** (R o‘rniga); III jildda persona belgilari «Persona 1–4» ga o‘tkazildi; endi to‘plamdagi barcha kodlar yakkama-yakka |
| Δ4 | V9 / V10 (yakuniy sayqal) | Ikki mayda nuqson: «(TN va Q)» qisqartmasi (QJ bo‘lishi kerak) va mazmunsiz «5-avgust formatida» havolasi | Ikkisi ham tuzatildi; TAKLIFLARda I-10/I-11 tartibi ham joyiga qo‘yildi |
| Δ5 | V4 (kod izchilligi — tashqi skan) | Asl matnda 5 joyda eski «C-sinf» atamasi qolgan edi (X-sinflar bilan aralash) | Barcha 5 joy «X-sinf(lar)» ga o‘tkazildi; qo‘shimcha: 30-kun rejasiga trenajyor mashg‘ulotlari kiritildi (v1.1) |

### Yakuniy yurish

```
python3 verify_tanqidiy.py → 10/10 PASS
Regressiya: verify_arxitektura.py → 10/10 PASS | verify_kritik.py → 10/10 PASS
```

---

## 12. XULOSA VA QAROR SO‘ROVLARI

### 6 tezis

1. **Institutsional muxolifat — akademik yadroning yangi bo‘limi:** Qizil jamoa natijalarga professional hujum qiladi, tanqid **qat’iy normalar** bilan cheklanadi (ikki manba · rasmiylik · ochiqlik · xavfsizlik), manba quvvatlanadi.
2. **«Ikki joyda tasdiqlangan, rasmiy, ochiq va xavfsiz»** — endi nafaqat da’vo, balki tanqidning ham sharti (TN va QJ).
3. **Raqobat ishlaydi:** tanqidchi o‘sadi (metodolog, hakam, g‘olib jamoa) — bu kadrlar quvvatini oshiradi (K-11) va xalqaro bellashuvga tayyorlaydi.
4. **Pishgan amaliyotga tayanish:** Registered Reports, adversarial collaboration, red teaming, ACM nishonlari, COPE [H1–H5] — IV jild «o‘zidan chiqarilgan» emas, xalqaro standartlar bilan bir uzilishda.
5. **Nashr darvozasi:** «Qizil xulosa» har nashrning majburiy qismi; X1 yopilmaguncha nashr to‘xtaydi (AR-15 bilan birga).
6. **Klub sifati qayta baholanadi:** eng katta tavakkal — «hamma rozi» bo‘lib qolish; IV jild shu kasallikning oldini oladi.

### Qaror so‘rovlari (faqat ishchi tartib — push/e’lon yo‘q)

1. **Qizil jamoa nizomini (QJ-01…QJ-14) va normalarni (TN-01…TN-10) tasdiqlash** — 30-kunlik bosqichda boshlasinmi?
2. **Ikkinchi siklga birinchi «do‘stona qizil sinov» qo‘shilsinmi** (60-kunlik ish)?
3. **Hakamlik paneli (K-08)** — Metodika Qo‘mitasi (Y-04) va metodologiya komissiyasi bilan munosabati qanday bo‘ladi?
4. **Reproduktivlik nishonlari va Zenodo depoziti (K-09)** — Y-05 bilan birga tayyorlansinmi?
5. **I–IV jildlarning yakuniy «ichki paketi»** — metodologiyaga kiritishdan oldin yana bir yig‘ma o‘qish o‘tkazilsinmi?
