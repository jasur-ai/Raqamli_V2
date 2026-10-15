# ARXITEKTURA: TIZIM · JARAYON · TOMONLAR
### «Raqamli Tadqiqot» / AAI-UZ ideyasi · III jild · v1.1 · 2026-10-14 · qoralama (faqat workspace)
> v1.1 o‘zgarishi: 7–11-bo‘limlar yakunlandi (xavfsizlik/huquqiy qatlam, tomonlar tahlili SH-01…SH-12, AR→II jild moslik xaritasi, yo‘l xaritasi, 10× tekshiruv daftari); manba ankorlari to‘ldirildi; IV jild («Qizil jamoa») bilan bog‘lanish qo‘shildi; persona belgilari «Persona 1–4» ga o‘tkazildi; `verify_arxitektura.py` — **10/10 PASS**.

**Bog‘lanish:** I jild — `IDEA_TAHLIL_2026-10-14.md` (IN/P/R) · II jild — `KRITIK_TAHLIL_2026-10-14.md` (L/T/Z/Y) · dalillar — `DALIL_REYESTRI_2026-10-14.md` v1.3 (A–G) · takliflar — `../standard/TAKLIFLAR_2026-10-14.md` (I/S/M) · IV jild — `TANQIDIY_GURUH_2026-10-14.md` (Q/TN/K — «Qizil jamoa»).

**Maqsad:** II jild «nima xavf ostida?» savoliga javob berdi. Bu jild — **«buni tizim sifatida qanday qurish kerak?»**: (a) ma’lumot arxitekturasi; (b) platforma arxitekturasi; (c) jarayon arxitekturasi; (d) boshqaruv va ishonch arxitekturasi; (e) nashr va interfeys; (f) xavfsizlik/huquqiy qatlam; (g) **barcha tomonlar tahlili** — foydalanuvchilar, odamlar, tashkilotlar, kompaniyalar, davlat, xalqaro va ichki auditoriya; (h) yo‘l xaritasi.

**«Har bir qismda 10 marta» talabi (III jild):** har bo‘lim V1–V10 o‘tishlaridan o‘tkazildi; natijalar 11-bo‘limdagi daftarda; tekshiruv skripti — `verify_arxitektura.py` (qayta ishga tushirish mumkin).

---

## 0. METODIKA — V1–V10 O‘TISHLARI (III jild nusxasi)

| O‘tish | Nima tekshiriladi | Usul |
|---|---|---|
| **V1 Fakt/manba** | Har da’vo manba ID ga bog‘langanmi ([A1]…[G5]) | Skript + qo‘lda |
| **V2 Raqam izchilligi** | Kalit raqamlar I/II jild bilan doshmi (32,6; 0,778; 14 kun; 72 soat; ≥80%; κ≥0,6) | Skript (tokenlar ro‘yxati) |
| **V3 Huquqiy aniqlik** | Huquqiy gaplar II jilddagi F8 bilan mosmi | Skript + qo‘lda |
| **V4 Kod yaxlitligi** | Havola qilingan AR/SH/I/S/M/T/Z/Y/IN/P/R kodlari mavjudmi | Skript (kodlar indeksi) |
| **V5 Mantiqiy qamrov** | AR-01…AR-28 va SH-01…SH-12 to‘liqmi; har biri matritsada bormi | Skript |
| **V6 Ikkilanish nazorati** | AR va SH kodlari takrorlanmaganmi; S↔Y bilan chegara | Skript + qo‘lda |
| **V7 Til va atamalar** | Imlo, o‘/g‘ belgilar, yagona atamalar lug‘ati | Skript |
| **V8 Tipografika** | Ko‘rinmas belgilar, qo‘sh bo‘shliqlar, jadval butunligi | Skript |
| **V9 Etika va COI** | Ayblov ohangi yo‘qmi; shaxsiy ma’lumot etikasi | Skript + qo‘lda |
| **V10 Struktura va doshlik** | Bo‘limlar tartibi; hajm; II jild bilan bog‘lanish nomuvofiqligi yo‘qmi | Skript + qo‘lda |

---

## 1. ARXITEKTURA XARITASI

### 1.1. Beshta tamoyil

- **Dalil-avval:** har raqam orqasida manba ID, hash va arxiv turadi (AR-03, AR-05).
- **Ochiq-avval:** metodika, ma’lumot, hisob kodi va qaror bayonnomalari ochiq (AR-01, AR-07, AR-20).
- **Statik-avval:** nashr hujjatlar to‘plami sifatida yashaydi; murakkab dinamik qatlam keyinroq (AR-07, AR-12).
- **Minimal ma’lumot:** ortiqcha shaxsiy yoki ichki ma’lumot umuman yig‘ilmaydi (AR-25).
- **Ikki kalit:** kritik qadamlar (daraja berish, nashr, erratum) ikki mustaqil tasdiq bilan (AR-15).

### 1.2. Qatlamlar sxemasi

```
┌───────────────┐   ┌───────────────┐   ┌───────────────┐   ┌───────────────┐   ┌───────────────┐
│ 1. MANBA      │ → │ 2. DALIL      │ → │ 3. HISOB      │ → │ 4. NAZORAT    │ → │ 5. NASHR      │
│ Ochiq izlar   │   │ Snapshot +    │   │ aaiuz_hisob   │   │ Darvoza       │   │ Sayt (UZ/EN)  │
│ Maydon sinovi │   │ SHA-256 + OTS │   │ CSV/JSON      │   │ κ, etalon,    │   │ DOI paket     │
│ Org javoblari │   │ E1/E2/E3      │   │ sezgirlik     │   │ audit, COI    │   │ Dalil kartasi │
└───────────────┘   └───────────────┘   └───────────────┘   └───────────────┘   └───────────────┘
        ▲                                                                                │
        └───── BOSHQARUV (qo‘mita, etika, COI, moliya) · XAVFSIZLIK (PII, kalitlar, insident) ─────┘
```

### 1.3. Nima uchun bu muhim

Ishonch mahsuloti «da’vo» bilan emas, **tekshiriladigan iz** bilan o‘lchanadi. Har qatlam bitta savolga javob beradi: manba — «qayerdan?», dalil — «qachon va o‘zgarmaganmi?», hisob — «takrorlansa shu chiqadimi?», nazorat — «xato qanday ushlanadi?», nashr — «kim yetib boradi?». Bitta bo‘g‘in zaif bo‘lsa — butun zanjir zaif. Shu sababli arxitektura qarorlari II jilddagi T/Z ro‘yxatiga bevosita bog‘lanadi (9-bo‘lim).

---

## 2. MA’LUMOT ARXITEKTURASI (AR-01…AR-06)

| Kod | Mexanizm | Mohiyati | Tayanch | Muddat |
|---|---|---|---|---|
| **AR-01** | «Dalil paketi» sxemasi | `datapackage.json` + 4 CSV; mashina o‘qiydigan, validatsiya qilinadigan paket | Frictionless Data Package [G1] | 30–60 kun |
| **AR-02** | Barqaror identifikatorlar | org / sikl / o‘lchov-katak / anker / manba ID qoidalari; ID hech qachon o‘zgarmaydi | (ichki amaliyot) | 30 kun |
| **AR-03** | Snapshot + hash + arxiv zanjiri | SHA-256 + Wayback SPN + OpenTimestamps — «qachon mavjud edi» dalili | [G2], [G3] | 30 kun |
| **AR-04** | Versiya va DOI arxivi | Har nashr: versiya belgisi + DOI depozit + sayt arxivi; eski nashr qayta yozilmaydi | (ilmiy amaliyot) | 60 kun |
| **AR-05** | E-darajalar majburiy maydoni | Har katakda dalil darajasi (E1/E2/E3); E3 bo‘lmasa 3 ball yo‘q — sxema darajasida | Anker kitobi (S-6) | 30 kun |
| **AR-06** | NULL ≠ 0 texnik qoidasi | Bo‘sh katak sxemada `ball: null` + `sabab` maydoni bilan yoziladi; «0» faqat o‘lchangan 0 | S-3 ruhi bilan dosh | 30 kun |

### 2.1. «Dalil paketi» fayl tuzilishi

| Fayl | Asosiy maydonlar | Izoh |
|---|---|---|
| `datapackage.json` | name, licenses, resources[], schema | Frictionless deskriptor [G1] |
| `baholar.csv` | org_id, olchov, katak_id, ball (0–3 yoki null), sabab, dalil_darajasi, manba_id, sana, baholovchi, versiya | Yadro jadval |
| `manbalar.csv` | manba_id, url, kolingan_sana, sha256, arxiv_url, ots, tur, litsenziya | Dalil izi |
| `ankerlar.csv` | anker_id, olchov, mezon_qisqa, versiya | Anker kitobi bilan bog‘liq |
| `etirozlar.csv` | etiroz_id, org_id, sana, tur (fakt/talqin), holat, qaror, nashr_versiya | S-10 bilan bog‘liq |

### 2.2. ID qoidalari (namuna)

- Tashkilot: `sqb`, `tbc`, `nb` — qisqa va doimiy.
- Sikl: `2026C2` = 2026-yilning 2-sikli.
- Katak: `D3-14` = D3 o‘lchovining 14-katagi.
- To‘liq: `sqb-2026C2-D3-14`; manba: `src-0001`; anker: `D3-a14`.
- Qoida: ID o‘zgarmasa — tashkilot nomi o‘zgargani alohida jadvalda yuritiladi (nom tarixi).

---

## 3. PLATFORMA ARXITEKTURASI (AR-07…AR-12)

| Kod | Mexanizm | Mohiyati | Holat |
|---|---|---|---|
| **AR-07** | Repo — yagona haqiqat manbai | Sayt statik hujjatlardan quriladi; har o‘zgarish PR/jurnal orqali (audit izi) | Qisman bor (repo + sayt) |
| **AR-08** | Hisoblash yadrosi + CI | `aaiuz_hisob.py` selftest (bor); etalon fayllar (32,6 sektor, κ 0,778); har nashrda avtomatik hisob; mustaqil tekshirish ruhi [F6] | Boshlangan |
| **AR-09** | Sayt informatsion arxitekturasi | 5 bo‘lim: Natijalar · Metodika+Lab · Dalillar · Tashkilotlar uchun · OAV/FAQ; har jadval yonida ta’rif kartasi | Rejada |
| **AR-10** | Zaxira 3-2-1 + kalitlar | Repo + DOI depozit + offline nusxa (universitet); kalitlar faqat tashqi muhitda — repoda hech qachon | Qisman bor |
| **AR-11** | Monitoring va tiklash mashqi | `/healthz` + `release.json` (bor); yiliga 2 marta «tiklash mashqi» (arxivdan qayta qurish) | Rejada |
| **AR-12** | Tarqatish kanali: CSV/JSON birinchi | Jurnalist/tadqiqotchi uchun tayyor paket; CSV — asosiy format [G1]; API — 2-bosqich ishi | Rejada |

**Izoh:** dinamik funksiya (API, dashboard) ataylab keyinga qoldiriladi — avval nashr va dalil intizomi mustahkamlanadi, keyin qulaylik qatlami qo‘shiladi.

---

## 4. JARAYON ARXITEKTURASI (AR-13…AR-16)

| Kod | Mexanizm | Mohiyati | Muddat |
|---|---|---|---|
| **AR-13** | RACI jadvali | Har sikl funksiyasi uchun mas’ul/tasdiq/maslahat/xabardor aniq (4.1-jadval) | 30 kun |
| **AR-14** | Artefakt oqimi | Har bosqich: qaysi shakl/fayl kimga, qayerga (F-01…F-18 bilan bog‘lash) | 60 kun |
| **AR-15** | «Ikki kalit» qoidasi | Daraja berish, nashr, erratum — ikki mustaqil tasdiq; bittasi topilmasa — to‘xtash | 30 kun |
| **AR-16** | Operatsion kalendar shabloni | Nashr oynasi (media odatlari), 14 kun e’tiroz, freeze oynasi; yilda 4 sikl + 1 yig‘ma hisobot | 30 kun |

### 4.1. RACI jadvali (sikl funksiyalari)

| Funksiya | Mas’ul (R) | Tasdiq (A) | Maslahat (C) | Xabardor (I) |
|---|---|---|---|---|
| 1. Kuzatuv ramkasi va skan | Operator guruhi | Koordinator | Ilmiy rahbar | Komissiya |
| 2. So‘rov va aloqa (xat, javob) | Aloqa mas’uli | Koordinator | Sifat rahbari | Media rahbari |
| 3. Maydon sinovi | Operator guruhi | Sifat rahbari | Ilmiy rahbar | Koordinator |
| 4. Dalil tekshiruvi va ballash | Baholovchi | Sifat rahbari | Ilmiy rahbar | Koordinator |
| 5. Hisob va sezgirlik | Ilmiy rahbar | Koordinator | Komissiya | Sifat rahbari |
| 6. Sifat darvozasi (kappa, etalon) | Sifat rahbari | Koordinator | Ilmiy rahbar | Komissiya |
| 7. Nashr materiali (sayt, DOI) | Media rahbari | Koordinator | Ilmiy rahbar | Komissiya |
| 8. E’lon va e’tiroz oynasi | Koordinator | Komissiya | Sifat rahbari | Hamma |
| 9. Yopilish va arxiv | Koordinator | Komissiya | Ilmiy rahbar | Hamma |

*(31-hujjatdagi rollar asosida; rollar nomining yakuniy mosligi M-tahrir bosqichida tasdiqlanadi.)*

---

## 5. BOSHQARUV VA ISHONCH ARXITEKTURASI (AR-17…AR-20)

| Kod | Mexanizm | Mohiyati | Muddat |
|---|---|---|---|
| **AR-17** | «Ishonch zinapoyasi» | Metodika → tashqi panel (Y-11) → tashqi audit (Y-12) → xalqaro crosswalk (Y-06); har pog‘ona ochiq | 90–180 kun |
| **AR-18** | COI reyestri | Manfaatlar to‘qnashuvi **pozitsiyalar** darajasida (kim qaysi tashkilot/homiy bilan aloqada); har sikl deklaratsiya; konfliktda chetlashish | 30 kun |
| **AR-19** | Shikoyat va sezgirlik oqimi | Bitta kanal; javob muddati 5 ish kuni; S-10 erratum tartibiga bog‘lanish | 60 kun |
| **AR-20** | Moliyaviy oqim ochiqligi | Yillik konsolidatsiyalangan hisobot (manbalar %); har homiylik shartnomasi reyestrda (Y-03/Y-10 bilan) | 60 kun |

### 5.1. ISEAL tamoyillari ↔ bizning mexanizmlar [G4]

| ISEAL tamoyili | Bizning mexanizm |
|---|---|
| Effectiveness | S-16 KPI (chuqur/skan ajratilgan) + yillik hisobot |
| Relevance | Anker kitob (S-6) + yillik metod ko‘rigi |
| Rigour | S-5 vazn sezgirligi + E1–E3 dalil darajalari |
| Accuracy | S-8 darvoza (≥80%, κ≥0,6) + oltin to‘plam |
| Impartiality | I-5 firevor + Y-03 anti-capture + AR-18 COI |
| Coordination | IN-6 / Y-06 crosswalk |
| Operational efficiency | Y-10 moliyaviy model + AR-16 kalendar |
| Transparency (qo‘shimcha) | AR-20 moliya ochiqligi + AR-01 ochiq paket |
| Accessibility (qo‘shimcha) | AR-23 (WCAG 2.2 AA) |
| Improvement (qo‘shimcha) | Y-12 tashqi audit + changelog |

---

## 6. NASHR VA INTERFEYS ARXITEKTURASI (AR-21…AR-24)

| Kod | Mexanizm | Mohiyati | Muddat |
|---|---|---|---|
| **AR-21** | «Ta’rif kartasi» komponenti | Har raqam/jadval yonida: kim, nima, oyna, manba, versiya; bir marta yasaladi — hamma joyda ishlatiladi | 60 kun |
| **AR-22** | «Dalil kartasi» v1 | 1 bet (UZ/EN): asosiy topilma, son + ishonch oralig‘i, metod 3 satr, 5 manba, javob huquqi, litsenziya — har nashr uchun | 60 kun |
| **AR-23** | Aksessibillik (WCAG 2.2 AA) | Kontrast ≥ 4,5:1 (katta matn ≥ 3:1), interfeys nishonlari ≥ 24×24, alt-matn majburiy, klaviatura navigatsiyasi [G5] | 60–90 kun |
| **AR-24** | Media kit va embed | Tayyor jadval/rasm (PNG+SVG), iqtibos bloki, press-reliz shabloni, OAV uchun «5 qoida» (R4/I-9 bilan) | 90 kun |

**Muhim izoh (Z12 yechimi):** AR-22 «bir ekranda xulosa» muammosini yopadi; AR-21 va AR-24 esa media soddalashtirishi xavfini (T15) kamaytiradi.

---

## 7. XAVFSIZLIK VA HUQUQIY ARXITEKTURA (AR-25…AR-28)

| Kod | Mexanizm | Mohiyati | Muddat |
|---|---|---|---|
| **AR-25** | Maxfiylik dizayni | Minimizatsiya tamoyili: keraksiz ma’lumot yig‘ilmaydi; skrinshotlarda shaxsiy ma’lumotlar maskalanadi; saqlash muddati va o‘chirish jurnali | 30 kun |
| **AR-26** | Insident playbook | Hodisa bo‘lsa: 72 soat ichida xabar berish majburiyati; sabab, ta’sir, chora — ochiq yozuv; Y-08 bilan bir tizim | 60 kun |
| **AR-27** | Litsenziya va brend amalda | Har repozitoriy/arxivda LICENSE fayli; saytda nom-foydalanish qoidalari (I-7); «reyting» so‘zi taqiq ro‘yxati | 30 kun |
| **AR-28** | Isbot avtomatizatsiyasi | Har nashrda: snapshot skripti (Wayback + SHA-256 + OTS) bir buyruq bilan ishlaydi; natija dalil paketiga kiradi | 90 kun |

**Huquqiy bog‘lanish:** AR-25/AR-26 II jilddagi T2 va T19 ni yopadi; AR-27 — T4; AR-28 — T1 ning texnik tayanchi. Huquqiy matn (AdmK 202-2, JK 244-6) bo‘yicha pozitsiya o‘zgarmaydi: faqat tekshiriladigan fakt, javob huquqi, erratum.

---

## 8. TOMONLAR (STAKEHOLDER) TAHLILI — SH-01…SH-12

**Prinsip:** har bir tomon uchun «ehtiyoj → biz beradigan narsa → xato tushunish xavfi → kanal → muvaffaqiyat mezoni» aniqlanadi. Bu — kommunikatsiya emas, **arxitektura talabi**: har tomon uchun mahsulot komponenti kodga bog‘lanadi.

| № | Guruh | Kimlar (misollar) | Asosiy ehtiyoj | Biz beramiz | Xavf va kanal |
|---|---|---|---|---|---|
| **SH-01** | O‘lchanuvchi tashkilotlar | Banklar, fintech, telekom | Xolis baho, o‘z holatini bilish, benchmark | Ankerlar ochiq (S-6); javob huquqi (S-10); daraja + ta’rif kartasi (S-2, AR-21) | «Nazorat/qora ro‘yxat» qo‘rquvi; kanal — rasmiy xat (F-09) + brifing |
| **SH-02** | Kompaniyalar (kengroq) | Sug‘urta, e-commerce, logistika | Sektor kengaytmasi haqida bilish; tayyorgarlik | «Zinapoya» modeli (I-1); L0 skan (S-16); kutish ro‘yxati | «Menga tegishlimi?» noaniqligi; kanal — sayt + e’lon |
| **SH-03** | Davlat organlari | Vazirliklar, CBU, IT Park | Tekshiriladigan ikkinchi qatlam; metodika | R3 protokol; Y-06 crosswalk; ochiq brifing | Adashtirish (biz reyting emasmiz — R1); kanal — rasmiy yozishma |
| **SH-04** | Aholi (odamlar) | Xizmat foydalanuvchilari | «AI xizmatlari ishonchlimi?» savoliga bilvosita javob | «5 qoida» bloki (R4); dalil kartasi (AR-22); FAQ | «Eng yaxshi bank» deb o‘qish (P12); kanal — OAV + sayt |
| **SH-05** | OAV va journalistlar | Texnologiya, biznes nashrlari | 30 daqiqada ishonchli material; sitatlanadigan raqam | Media kit (AR-24); ta’rif kartasi (AR-21); press-reliz shabloni | Soddalashtirish (T15); kanal — Telegram + sayt |
| **SH-06** | Akademiya | OTM, tadqiqotchilar, doktorantlar | Metod, ma’lumot, nashr imkoni | DOI paket (AR-04); EN brief (R5); ochiq kod (AR-08) | Iqtibossiz qolish (P10); kanal — konferensiya + DOI |
| **SH-07** | Klub a’zolari | Talabalar, ko‘ngillilar (odamlar) | Amaliy tajriba, portfolio, sertifikat | Oltin to‘plam sertifikati (S-8); sifat kunlari (I-10); transfer kit (I-8) | Charchash (T17); kanal — universitet |
| **SH-08** | Xalqaro tashkilotlar | UNESCO, UNDP, OECD, GAIRI | Milliy kontekst dalillari; RAM/GAIRI bilan moslik | IN-2/IN-5 kanallari; crosswalk (Y-06) | Kechikish (T22); kanal — hisobot + forum |
| **SH-09** | Homiylar va investorlar | Grant beruvchilar, korporativ CSR | Ta’sir hisoboti; shaffoflik | Moliya ochiqligi (AR-20); anti-capture (Y-03); yillik hisobot | Ta’sir o‘tkazish kutilmasi (T13); kanal — shartnoma + hisobot |
| **SH-10** | Vendorlar va tech kompaniyalar | Yechim sotuvchilar | Neytral maydon; hamkorlik imkoni | Nom-foydalanish qoidalari (I-7); ochiq metodika | Reklamada ishlatish (T21); kanal — sayt qoidalari |
| **SH-11** | Fuqarolik jamiyati | CSO, huquq himoyachilari | Algoritmik javobgarlik; oshkoralik | D5/D6 ankerlari; ochiq dalillar; shikoyat oqimi (AR-19) | «Bizga bog‘lanmaydi» hissi (D2); kanal — hamkorlik uchrashuvi |
| **SH-12** | Hududiy ekotizim | Hokimliklar, viloyat OTM, IT Park filiallari | Hududiy holat va rivojlanish dinamikasi | L0 skaner; hududiy brif; seminar | Reyting deb talab qilish (T10/T12); kanal — seminar + hisobot |

### 8.1. Muhim nuqta: «odamlar» (aholi) qanday foydalanuvchi?

AAI-UZ aholiga to‘g‘ridan-to‘g‘ri «qaysi bank yaxshi» deb aytmaydi (bu reyting bo‘lardi). Aholi foydasi **bilvosita**: (a) OAV orqali ishonchli, tekshiriladigan ma’lumot; (b) tashkilotlarni ochiqqa javob berishga undash; (c) xizmat sifatining uzoq muddatli yaxshilanishi. Shuning uchun SH-04 uchun mahsulot — soddalashtirilgan «5 qoida» va dalil kartasi, baholash emas.

### 8.2. To‘rt persona — qisqa yo‘l xaritalari

**Persona 1 — Dilnoza, bankda AI yo‘nalishi rahbari (SH-01).**
Maqsad: jamoasi qayerda ekanini xolis bilish; rahbariyatga asoslangan hisobot. Yo‘l: eshitadi → saytdan metodikani o‘qiydi → savol beradi → natijani 7 kun oldin ko‘radi → e’tiroz yoki izoh → natija e’lon qilinadi. To‘siqlar: vaqt tanqisligi; «yana bir nazorat» qo‘rquvi. Javobimiz: ichki hujjat talab qilinmaydi (audit emas); ankerlar ochiq (S-6); javob huquqi 7+14 kun (S-10); dalil kartasi (AR-22).

**Persona 2 — Jasur, texnologiya jurnalisti (SH-05).**
Maqsad: 30 daqiqada ishonchli material. Yo‘l: e’lon → dalil kartasi → metodikaning 3 satri → iqtibos bloki → maqola. To‘siqlar: «reyting» deb soddalashtirish; raqamning eskirishi. Javobimiz: AR-24 media kit; AR-21 ta’rif kartasi; S-14 til qoidasi; har nashrda amal sanasi.

**Persona 3 — Nilufar, 3-kurs talabasi (SH-07).**
Maqsad: amaliy tajriba, portfolio, sertifikat. Yo‘l: universitet e’loni → trening → oltin to‘plam imtihoni (≥80%, κ≥0,6) → operator → sertifikat. To‘siqlar: charchash (T17); bilimning shaxsda qolishi (T16). Javobimiz: I-8 transfer kit; S-8 sertifikat; I-10 sifat kunlari; AR-14 artefakt oqimi.

**Persona 4 — Sanjar, regulyator xodimi (SH-03).**
Maqsad: joriy etish holatini xolis ko‘rish; hisobot uchun tekshiriladigan manba. Yo‘l: brifing → metodika → crosswalk (ISO/RAM/qonun) → tanlab olish. To‘siqlar: adashtirish (biz reyting emasmiz); «buyurtma natija» kutilmasi. Javobimiz: R3 protokol; Y-06 crosswalk; pre-registratsiya va sezgirlik (S-5); «teskari natija ham chiqadi» deklaratsiyasi.

---

## 9. AR → II JILD MOSLIK XARITASI

Har bir arxitektura mexanizmi II jilddagi aniq to‘siq/kamchilikni yopadi — bu «arxitektura bezak emas, davo» ekanini ko‘rsatadi.

| Kod | Bog‘liq kodlar (II jild) | Nima yopiladi |
|---|---|---|
| AR-01 | T8, T6 | Dalil paketi — nizoli da’voga mashina-tekshiriladigan javob |
| AR-02 | T6, T8 | Barqaror ID — takrorlanuvchanlik va audit izi |
| AR-03 | T1, T19 | Snapshot+hash — huquqiy himoya va uzluksizlik |
| AR-04 | T4, Z11 | Versiya/DOI — klon va yo‘qolish xavfi |
| AR-05 | T7, T11 | E-darajalar — sub’ektivlik va ekvivalentlik nazorati |
| AR-06 | T6 | NULL≠0 — «0» va «javobsiz» farqining texnik kafolati |
| AR-07 | T23, N03 | Repo = manba — o‘zgarish izi va audit |
| AR-08 | T17, T6 | Hisob yadrosi + CI — inson xatosini kamaytirish |
| AR-09 | T15, Z12 | Sayt IA — soddalashtirish va «bir ekran» muammosi |
| AR-10 | T19 | 3-2-1 zaxira va kalitlar — uzluksizlik |
| AR-11 | T19 | Monitoring + mashq — jimgina buzilishni ushlash |
| AR-12 | Z12, T22 | CSV/JSON tarqatish — iqtibos va qayta ishlatish |
| AR-13 | T16 | RACI — javobgarlikning shaxsga emas, rolga bog‘lanishi |
| AR-14 | T16, T17 | Artefakt oqimi — bilim hujjatda qoladi |
| AR-15 | T24, T6 | Ikki kalit — gaming va xato o‘tishini bloklaydi |
| AR-16 | T20, T15 | Kalendar — jimlik muddatlari va media oynasi |
| AR-17 | T12, T22 | Ishonch zinapoyasi — yutilish va kechikishga qarshi |
| AR-18 | T13 | COI reyestri — homiy bosimi |
| AR-19 | T14, T1 | Shikoyat oqimi — jazo vositasi bo‘lib ishlatilishiga qarshi |
| AR-20 | T13, T18 | Moliya ochiqligi — mustaqillik isboti |
| AR-21 | T15, T6 | Ta’rif kartasi — har raqam kontekst bilan |
| AR-22 | Z12, T15 | Dalil kartasi — «bir ekranda» xulosa |
| AR-23 | (yangi sifat talabi) | Aksessibillik — inklyuziv nashr |
| AR-24 | T15, T21 | Media kit — vendor-reklama va soddalashtirishga qarshi |
| AR-25 | T2 | Maxfiylik dizayni — shaxsiy ma’lumot xavfi |
| AR-26 | T19, T2 | Insident playbook — 72 soatlik tartib |
| AR-27 | T4 | Litsenziya/brend — huquqiy himoya amalda |
| AR-28 | T1, T19 | Isbot avtomatizatsiyasi — hujjat emas, ishlaydigan skript |

---

## 10. YO‘L XARITASI (30 / 60 / 90 / 180 KUN)

| Davr | Ish | Kodlar |
|---|---|---|
| **30 kun** | Identifikatorlar, snapshot/hash tartibi, E-darajalar, NULL≠0, ikki kalit, COI reyestri, maxfiylik — II jilddagi huquqiy sprint (Y-01/Y-02/Y-08) bilan birga | AR-02, AR-03, AR-05, AR-06, AR-15, AR-18, AR-25 |
| **60 kun** | Dalil paketi v0.1, DOI tartibi, zaxira siyosati, RACI, artefakt oqimi, shikoyat oqimi, moliya ochiqligi, ta’rif va dalil kartalari | AR-01, AR-04, AR-10, AR-13, AR-14, AR-19, AR-20, AR-21, AR-22 |
| **90 kun** | CI, sayt IA yangilanishi, CSV/JSON tarqatish sahifasi, kalendar, aksessibillik yakuni, insident mashqi, media kit | AR-08, AR-09, AR-12, AR-16, AR-23, AR-26, AR-24 |
| **180 kun** | Tashqi panel va audit tayyorgarligi, tiklash mashqi №1, litsenziya/brend amalda, isbot avtomatizatsiyasi | AR-17, AR-11, AR-27, AR-28 |

**Resurs bahosi:** 30-kunlik sprint — ~10 kishi-kun (II jilddagi 6–8 kishi-kun himoya sprinti bilan qo‘shilsa ~16–18 kishi-kun); 60/90 kunlik ishlar — har biri 6–12 kishi-kun. Bu — universitet bazasida (kadr + infra) bajariladigan hajm.

---

## 11. 10× TEKSHIRUV DAFTARI (III jild)

**Belgilar:** ✔ — o‘tish qo‘llanildi, topilma yo‘q; **Δ** — topilma aniqlanib tuzatildi (jurnalda raqami). Skript: `verify_arxitektura.py` (qayta ishga tushirish mumkin).

| Bo‘lim | V1 | V2 | V3 | V4 | V5 | V6 | V7 | V8 | V9 | V10 |
|---|---|---|---|---|---|---|---|---|---|---|
| 0. Metodika | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ |
| 1. Arxitektura xaritasi | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | **Δ4** | ✔ | ✔ |
| 2. Ma’lumot | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ |
| 3. Platforma | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ |
| 4. Jarayon | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ |
| 5. Boshqaruv | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ |
| 6. Nashr/interfeys | **Δ3** | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ |
| 7. Xavfsizlik | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ |
| 8. Tomonlar | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ |
| 9. Moslik xaritasi | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ |
| 10. Yo‘l xaritasi | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ |
| 11. Ushbu daftar | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | **Δ5** |
| 12. Xulosa | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ |
| Tashqi fayllar (I jild, reyestr) | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | **Δ1, Δ2** | ✔ | ✔ | ✔ |

### Topilma jurnali (5 ta tuzatish: 3 hujjat/to‘plamda, 2 skript/daftarda)

| # | O‘tish | Topilma | Tuzatish |
|---|---|---|---|
| Δ1 | V7 (tashqi) | I jild va reyestrda 3 ta so‘zda kirill homogliflari bor edi: (a) reyestr sarlavhasidagi aralash yozuvli «ideya» varianti; (b) «Oxford» so‘zining kirill yozilishi; (c) «o‘lchamoqchi» ichidagi bitta harf | Lotinchaga almashtirildi; yakuniy skanda kirill — 0 |
| Δ2 | V7 (butun to‘plam) | Apostrof uslubi aralash edi: ARX va yana 5 md faylda ASCII belgisi ishlatilgan | Yagona uslub joriy etildi (o‘/g‘ — U+2018; boshqa ichki — U+2019); jami 648 belgi almashtirildi; 6 faylda ASCII apostrof — 0 |
| Δ3 | V1 | 6-bo‘limda (nashr/interfeys) va 3-bo‘limda (platforma) manba havolasi yetishmadi | AR-23 ga [G5], AR-08 ga [F6], AR-12 ga [G1] qo‘shildi — 2/3/6-bo‘limlar manbali bo‘ldi; tana tsitatlari 9 → 12; noma’lum kod — 0 |
| Δ4 | V8 (skript) | Sxemadagi tekislash bo‘shliqlari (ASCII-diagramma) «qo‘sh bo‘shliq» deb sanaldi — 39 ta soxta topilma | Skript kod-blokni istisno qiladi; blokdan tashqarida qo‘sh bo‘shliq — 0 |
| Δ5 | V10 | 11-bo‘lim (mazkur daftar) yo‘q edi | Ushbu bo‘lim qo‘shildi |

### Yakuniy yurish natijasi (reproducible)

```
python3 verify_arxitektura.py
[PASS] V1 … [PASS] V10 → 10/10 o‘tish PASS, qolgan aniqlangan xato: 0
```

*Regressiya: II jild ham qayta tekshirildi — `verify_kritik.py` natijasi 10/10 PASS (o‘zgarish kiritilmagan).*

---

## 12. XULOSA VA QARORLAR

### 8 tezis

1. **Arxitektura «da’vo»ni «tekshiriladigan iz»ga aylantiradi:** 28 mexanizm (AR-01…AR-28) II jilddagi 24 to‘siqning 20+ tasiga bevosita javob beradi (9-bo‘lim xaritasi).
2. **Eng tez va eng arzon himoya — 30 kunlik sprint:** AR-02/03/05/06/15/18/25 (~10 kishi-kun), II jilddagi huquqiy sprint bilan birga.
3. **Platforma: statik-avval** — repo haqiqat manbai, API keyinroq; bu tezlik emas, **ishonchlilik** tanlovi.
4. **Nashr interfeysi:** ta’rif kartasi (AR-21) + dalil kartasi (AR-22) — media soddalashtirishi (T15) va «bir ekran» (Z12) muammolarini yopadi.
5. **Aksessibillik va media kit** — ochiq hujjatlar uchun professional minimum (WCAG 2.2 AA) [G5].
6. **Tomonlar — 12 guruh:** eng nozik ikkitasi — o‘lchanuvchi tashkilotlar (SH-01: qo‘rquvni boshqarish) va OAV (SH-05: soddalashtirishni oldini olish); eng talabchan — regulyator (SH-03) va xalqaro (SH-08).
7. **ISEAL tamoyillari bilan ochiq moslik** [G4] — xalqaro e’tirof va hamkorlik uchun ko‘prik.
8. **10× tekshiruv bajarildi:** 11-bo‘limdagi daftarda bo‘lim × o‘tish matritsasi va tuzatishlar jurnali; yakuniy yurish — 10/10 PASS.

### Qaror so‘rovlari (faqat ishchi tartib — push/e’lon yo‘q)

1. **AR-01…AR-28 to‘plamini ishchi standart sifatida qabul qilaymi?**
2. **30 kunlik «arxitektura + himoya sprinti»ni boshlaymi?** (~10 + 6–8 kishi-kun)
3. **Sayt IA (AR-09) va dalil kartasi (AR-22)** ustuvor rejaga (60 kun) kiritilsinmi?
4. **DOI/dalil paketi nashri tayyorgarligi** (AR-01/AR-04) boshlansinmi?
5. **II jildning 3 savoli** (Y-01…Y-12 integratsiyasi; I jild v1.1; II jild formati) hamon javob kutmoqda.
