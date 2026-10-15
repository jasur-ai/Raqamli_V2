# QIZIL SINOV ISHCHI PAKETI
### «Raqamli Tadqiqot» / AAI-UZ · IV jild ilovasi · v1.1 · 2026-10-14 · qoralama (faqat workspace)
> v1.1 o‘zgarishi: trenajyor (`OQUV_KEYSI_2026-10-14.md`) bilan bog‘lanish qo‘shildi — shablonlar birinchi qo‘llanishdan oldin uch mashg‘ulotda mashq qilinadi.

**Bog‘lanish:** IV jild — `TANQIDIY_GURUH_2026-10-14.md` (QJ/TN/K) · III jild — `ARXITEKTURA_2026-10-14.md` (AR/SH) · dalillar — `DALIL_REYESTRI_2026-10-14.md` v1.4 (A–H) · takliflar — `../standard/TAKLIFLAR_2026-10-14.md` (S/I/M).

**Maqsad:** birinchi «do‘stona» qizil sinovni (IV jild, 60-kun bosqichi) va undan keyingi barcha sikllarni **tayyor shablonlar** bilan boshlash: bayroq, dosye, protokol, bayonnoma, nashr ilovasi, kriz tartibi, etika shakli va tayyorgarlik ro‘yxati.

**Muhim chegara:** shablonlardagi barcha ism va holatlar — **shartli o‘quv namunalari**; haqiqiy tashkilotlarga hech qanday ishora yo‘q.

---

## 0. PAKET HAQIDA

- Shablonlar — **ish qurollari**: har biri IV jild nizomiga (QJ/TN/K) bog‘langan; to‘ldirilmasa — ishlamaydi.
- Hujjat raqamlari: bayroq — **B-2026-<S>-<NN>**, dosye — **D-2026-<S>-<NN>**, bayonnoma — **H-2026-<NN>**, qizil xulosa — **QX-2026-<S>**; bunda <S> — sikl raqami (1–4), <NN> — tartib (01…).
- Til qoidasi: fakt tili (V9), manba 2 joyda (TN-01), har raqamga sana (TN-05).
- Paketning o‘zi ham V1–V10 dan o‘tkazilgan — 11-bo‘limdagi daftarda.

```
BAYROQ → DOSYE → HALOKAT KUNI → JAVOB → HAKAMLIK → QIZIL XULOSA → ARXIV
       (PK-01)   (PK-02)      (PK-03)    (—)     (PK-04)      (PK-05)     (—)
```

---

## 1. PAKET XARITASI

| Kod | Shablon | Kim ishlatadi | Qadam | Bog‘lanish |
|---|---|---|---|---|
| **PK-01** | Bayroq (finding flag) | Qizil jamoa a’zosi | Skan paytida | QJ-09, TN-01…TN-04 |
| **PK-02** | Da’vo dosyesi + manba pasporti | Qizil jamoa + kotib | Dosye | QJ-03…QJ-06, K-07 |
| **PK-03** | «Halokat kuni» protokoli | Qizil jamoa | Hujum bosqichi | QJ-07, K-05 |
| **PK-04** | Hakamlik bayonnomasi | Hakamlik paneli | Hakamlik | K-08, QJ-11 |
| **PK-05** | «Qizil xulosa» (nashr ilovasi) | Kotib + media rahbari | Nashr | QJ-14, K-10 |
| **PK-06** | X1 kriz protokoli (72 soat) | Koordinator + sifat rahbari | X1 holatida | QJ-09, AR-15, S-10 |
| **PK-07** | Etika va COI eslatmasi | Har a’zo | Doimiy | QJ-12, TN-04, TN-08 |
| **PK-08** | Tayyorgarlik ro‘yxati (30/60 kun) | Koordinator | Ishga tushirish | QJ-01…QJ-14 |

---

## 2. PK-01 — BAYROQ (FINDING FLAG) SHABLONI

| Maydon | To‘ldirish qoidasi |
|---|---|
| Bayroq ID | B-2026-<S>-<NN> (S — sikl raqami 1–4; NN — tartib 01…) |
| Sana va vaqt | YYYY-MM-DD HH:MM (yozuv vaqti) |
| Qadam | SKAN / DOSYE / HUJUM / JAVOB |
| Mavzu | 1 satr, fakt tili (masalan: «D3 bo‘yicha da’vo uchun ikkinchi manba yo‘q») |
| Da’vo | Qizil jamoa nimani sinayotgani — o‘z so‘zi bilan, 2 satrgacha |
| Manba-1 | Toifa (1–4) · iqtibos · URL |
| Manba-2 | Toifa · iqtibos · URL (yo‘q bo‘lsa: «Topilmadi» yoziladi) |
| Qoida | Buzilgan normalar: TN-… / QJ-… / K-… |
| Mavjudlik izi | Snapshot URL · SHA-256 · .ots bor/yo‘q |
| X-sinf (taklif) | X1 / X2 / X3 / X4 — baholash «Qizil kengash»da |
| Falsifikatsiya sharti | Qanday dalil topilsa — bayroq bekor bo‘ladi |
| Holat | ochiq / javob kutilmoqda / hakamlikda / yopilgan |
| Mas’ul | A’zo ismi (Qizil jamoa jurnalida) |

**Shartli namuna (o‘quv):** B-2026-1-01. Mavzu: «D3 bo‘yicha da’vo faqat bitta OAV manbasiga tayanadi». Manba-1: toifa-4 (OAV), iqtibos: «kompaniya AI-asosidagi qaror tizimini ishga tushirdi». Manba-2: Topilmadi. Qoida: TN-01, TN-02. X-sinf taklifi: X2 (ball mustahkam emas). Falsifikatsiya sharti: rasmiy e’lon yoki registr yozuvi topilsa — bayroq bekor. Holat: ochiq.

---

## 3. PK-02 — DA’VO DOSYESI VA MANBA PASPORTI

**Dosye tarkibi (7 blok):** Muqova · 1. Da’vo kartasi · 2. Manba pasportlari (≥2) · 3. Kontekst (5 satr) · 4. Iqtiboslar · 5. Xulosa va X-sinf · 6. Ilovalar (snapshot, hash, .ots) · 7. Iz va COI.

**Manba pasporti (har manba uchun bitta jadval):**

| Maydon | Qiymat |
|---|---|
| Manba № | 1 / 2 / … |
| Toifa | toifa-1 qonun/registr · toifa-2 xalqaro hisobot · toifa-3 rasmiy hujjat · toifa-4 OAV |
| Egasi va sana | Tashkilot/muallif · nashr sanasi |
| URL | To‘liq manzil |
| Arxiv izi | Wayback snapshot URL (bor/yo‘q) |
| Integritet | SHA-256 · `.ots` vaqt muhri (bor/yo‘q) [G2, G3] |
| To‘liqlik | To‘liq hujjat / parcha / bayonot |
| Izoh | 1 satr: nimani tasdiqlaydi |

**5 satr kontekst qoidasi (TN-05):** manba sanasi · versiya · soha · kim aytdi · qaysi da’voga ishlatiladi — har bandda majburiy.

**Xulosa formati:** «Manba-1 va manba-2 birgalikda … ni tasdiqlaydi / tasdiqlamaydi. X-sinf: X… Sabab: 1 satr».

---

## 4. PK-03 — «HALOKAT KUNI» PROTOKOLI

**Maqsad:** 10 ish kunida har shubhali bandni professional hujumdan o‘tkazish; natija — dosye + topilmalar ro‘yxati (X-sinf takliflari bilan). Usul — xalqaro «adversarial collaboration» an’anasi [H2].

**Rollar:** Kapitan (jarayon) · Kotib (yozuv va raqamlash) · Skeptik-2 (har topilmani inkor etishga urinadi) · Tashqi a’zo (mustaqil nazar) · Kuzatuvchi (sifat rahbari — ovozsiz).

| Kun | Ish | Natija |
|---|---|---|
| D1 | On-boarding; muhr holati (K-01) va anker versiyasini tekshirish | Ish ro‘yxati |
| D2–D3 | Chaqmoq skan: har natija/da’vo uchun 3 savol («kim aytdi? qayerda? ikkinchi manba?») | Bayroqlar to‘plami (PK-01) |
| D4–D6 | Dosye to‘ldirish (har bandga ≤1 bet) | Dosyeler (PK-02) |
| D7 | Qizil kengash: baholash, X-sinf berish, prioritet | Kengash xulosasi |
| D8 | Falsifikatsiya sinovi: har bandning bekor sharti yoziladi | Yakuniy dosye |
| D9 | Sifat nazorati: TN ro‘yxati bo‘yicha o‘z-o‘zini tekshirish (100% mos) | Sifat izohi |
| D10 | Dosye tadqiqotchiga topshiriladi; javob oynasi boshlanadi | Topshirish bayonnomasi |

**8 qoida:** (1) steelman-first — avval da’voning eng kuchli shakli yoziladi; (2) fakt tili (V9); (3) manba 2 joyda (TN-01); (4) shaxs emas — da’vo; (5) «gipoteza» so‘zi «topilma»ga faqat dalil bilan o‘tadi; (6) qoralama ichki saqlanadi — ochiq faqat yopilgandan keyin (AR-15); (7) skrinshotlarda shaxsiy ma’lumotlar maskalanadi (AR-25); (8) har yozuvda sana-vaqt (TN-10).

---

## 5. PK-04 — HAKAMLIK BAYONNOMASI SHABLONI

| Bo‘lim | Mazmun |
|---|---|
| Sarlavha | H-2026-<NN> · sana · tomonlar (Qizil jamoa ↔ tadqiqot bloki) |
| Panel | 3 a’zo: rais (sifat rahbari) + tashqi ekspert + metodolog |
| 1. Savol | Bir jumla: qaysi band va qaysi qoida bo‘yicha nizo |
| 2. Materiallar | Dosye №, javob №, ilovalar ro‘yxati |
| 3. Pozitsiyalar | Har tomon — ko‘pi bilan 3 punkt |
| 4. Muhokama | Faktlar + qoida havolasi (TN/QJ); ortiqcha baho yo‘q |
| 5. Qaror | (a) topilma tasdiqlandi — tuzatish turi; (b) qisman — qayta baholash; (c) asossiz — sabab 1–3 punkt |
| 6. Muddat | Bajarish muddati va mas’ul |
| 7. Apellyatsiya | 1 marta, faqat yangi dalil bilan (QJ-11) |
| 8. Imzolar | 3 a’zo; qaror 5 ish kuni ichida ochiq e’lon qilinadi |

---

## 6. PK-05 — «QIZIL XULOSA» (NASHR ILOVASI) SHABLONI

**5 blok:**

1. **Bir qatorlik xulosa:** «Bu nashr o‘z-o‘zini sinovdan o‘tkazdi: N ta band ko‘rildi, X1 — a ta, X2 — b ta, X3 — c ta; ochiq band — d ta».
2. **Bandlar jadvali:**

| № | Band | X-sinf | Holat | Harakat |
|---|---|---|---|---|
| 1 | … | X2 | yopilgan | ball qayta baholandi |

3. **Ochiq bandlar:** ro‘yxat + sabab + muddat.
4. **Tadqiqotchi javobi:** qabul / qisman / rad — har biriga 1 satr asos (javob huquqi 7 kun, TN-07).
5. **Havolalar:** dosye №, bayonnoma №, snapshotlar ro‘yxati (integritet izlari bilan).

**Taqiq:** xulosani yumshatish yoki bandni «o‘tkazilgan» deb belgilash — faqat dalil bilan; asossiz tanqid ham ochiq hisoblanadi (TN-10). Nashr ishonchi: topilmalar reproduktivlik nishonlari bilan bog‘lanadi [H4].

---

## 7. PK-06 — X1 KRIZ PROTOKOLI (72 SOAT)

**Qoida (IV jild §5):** X1 — halokatli topilma; yopilmaguncha nashr to‘xtaydi. Xalqaro me’yorda ham sinov majburiy [H3].

| Vaqt | Harakat | Mas’ul |
|---|---|---|
| 0–4 soat | Bayroqni «freeze» deb belgilash; koordinator va sifat rahbariga xabar | Bayroq muallifi |
| 4–12 soat | Ikkinchi mustaqil tekshiruv (boshqa a’zo + tashqi a’zo) | Sifat rahbari |
| 12–24 soat | Panel chaqirig‘i; ta’sir doirasi: qaysi nashrlar, qaysi raqamlar | Koordinator |
| 24–48 soat | Qaror: tasdiqlansa — erratum loyihasi; rad etilsa — sabab yoziladi | Panel |
| 48–72 soat | Erratum chiqadi (S-10 tartibi): «nima edi → nima o‘zgaradi» + changelog + hisobot | Media rahbari |

**Hujjatlar:** freeze bayonnomasi · erratum shabloni (2 punkt) · changelog yozuvi · yakuniy hisobot (1 bet).

---

## 8. PK-07 — ETIKA VA COI ESLATMASI

**COI deklaratsiya shakli (har a’zo, har sikl):** Ism · rol · tashkilotlar bilan aloqalar (oxirgi 24 oy) · homiylik/manfaat · «deklaratsiya qiladigan boshqa holat yo‘q» bandi · imzo va sana.

**Etika 6 qoidasi:** fakt tili · shaxsiy ma’lumot minimizatsiyasi (AR-25) · javob huquqi 7 kun (TN-07) · anonimlik varianti mavjud · qasddan zarar taqiqlanadi · huquqiy chegara: AdmK 202-2, JK 244-6 va JK 139-2 — «yolg‘on ma’lumot» formati hech qachon qo‘llanmaydi [H5].

**Til lug‘ati (❌ → ✅):**

| ❌ Ayblov tili | ✅ Fakt tili |
|---|---|
| «Ular yolg‘on ma’lumot tarqatadi» | «E’londagi da’vo uchun mustaqil tasdiq topilmadi (qidiruv: 2026-10-14)» |
| «Hech narsa qilinmagan» | «Ochiq manbalarda amal izi topilmadi (manbalar ro‘yxati ilovada)» |
| «Bu shunchaki reklama» | «Da’vo marketing sahifasida; rasmiy hujjatda uchramadi» |

---

## 9. PK-08 — TAYYORGARLIK RO‘YXATI

**30 kun (ishga tushirish):**

| № | Ish | Natija |
|---|---|---|
| 1 | Nizom QJ-01…QJ-14 va TN-01…TN-10 ni qabul qilish | Tasdiqlangan nizom |
| 2 | 3 a’zo tayinlash (≥1 tashqi) | Tarkib bayonnomasi |
| 3 | Shablonlar (PK-01…PK-07) chop etish va trening | Trenajyor o‘tkazildi |
| 4 | Anker kitobi (S-6) treningi; imtihon ≥80%, κ≥0,6 | Sertifikat |
| 5 | Huquqiy minimal seminar (Y-01 asosida) | Ishtirok jurnali |
| 6 | COI deklaratsiyalar (PK-07) yig‘ish | Reyestr |
| 7 | Pre-registratsiya «muhr» shabloni (K-01) [H1] | Muhr namunasi |
| 8 | Hakamlik nizomi va panel zaxira ro‘yxati | Nizom ilovasi |

**60 kun (birinchi sinov):** trenajyor mashg‘ulotlari (`OQUV_KEYSI` — uch sessiya) → hujum sikli (PK-03) → javob oynasi → hakamlik mashqi (1 marta) → QX-2026-1 v1 (PK-05) → yakuniy hisobot (2 bet) va kengash bahosi.

---

## 10. HUJJATLARARO ALOQA

| Paket elementi | IV jild | III jild | II jild | Boshqa |
|---|---|---|---|---|
| PK-01 | QJ-09, TN-01…TN-04 | AR-22 | T6, T8 | S-6 |
| PK-02 | QJ-03…QJ-06, K-07 | AR-01…AR-03 | T1, T8 | [G2, G3] |
| PK-03 | QJ-07, K-05 | AR-15 | T11, Z10 | [H2] |
| PK-04 | K-08, QJ-11 | AR-19 | T14 | [H2] |
| PK-05 | QJ-14, K-10 | AR-21, AR-22 | T15 | [H4] |
| PK-06 | QJ-09, X1 | AR-15 | T1, T19 | S-10 |
| PK-07 | QJ-12, TN-04, TN-08 | AR-25 | T2 | [H5] |
| PK-08 | QJ-01…QJ-14 | AR-13, AR-16 | T16, T17 | S-8 |


---

## 11. 10× TEKSHIRUV DAFTARI (PAKET)

**Belgilar:** ✔ — o‘tish qo‘llanildi, topilma yo‘q; **Δ** — topilma aniqlanib tuzatildi. Skript: `verify_paket.py`.

| Bo‘lim | V1 | V2 | V3 | V4 | V5 | V6 | V7 | V8 | V9 | V10 |
|---|---|---|---|---|---|---|---|---|---|---|
| 0. Paket haqida | ✔ | ✔ | ✔ | **Δ2** | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ |
| 1. Xarita | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ |
| 2. PK-01 bayroq | ✔ | ✔ | ✔ | **Δ2** | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ |
| 3. PK-02 dosye | **Δ1** | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ |
| 4. PK-03 protokol | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ |
| 5. PK-04 bayonnoma | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ |
| 6. PK-05 qizil xulosa | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ |
| 7. PK-06 kriz | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ |
| 8. PK-07 etika | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | **Δ3** | ✔ | ✔ | ✔ |
| 9. PK-08 tayyorgarlik | ✔ | ✔ | ✔ | **Δ2** | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ |
| 10. Aloqa | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ |
| 11. Ushbu daftar | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | **Δ4** |
| 12. Yakun | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ |

### Topilma jurnali

| # | O‘tish | Topilma | Tuzatish |
|---|---|---|---|
| Δ1 | V1 (skript) | 3/4/7-bo‘limlar uchun tekshiruvda ko‘p-manbali tsitata (masalan «[G2, G3]») taniy olmadi | Skript regexi aniqlashtirildi; hujjatdan hech narsa o‘zgarmadi |
| Δ2 | V4 (kod unikalligi) | Sikl belgilari «C1…C4» DALIL reyestrining C1–C3 qatorlari bilan to‘qnashdi | Sikl kodlari raqamli shaklga o‘tkazildi: B-2026-1-01, D-2026-1-01, QX-2026-1 |
| Δ3 | V7 | 8-bo‘lim sarlavhasida imlo xatosi («ESLATMASSI») | «ETIKA VA COI ESLATMASI» ga tuzatildi |
| Δ4 | V10 | 11–12-bo‘limlar shu sikl yakunida to‘ldiriladi (yozuv bosqichida mavjud emas) | Mazkur daftar va 12-bo‘lim yozildi |

### Yakuniy yurish

```
python3 verify_paket.py → 10/10 PASS
Regressiya: verify_tanqidiy.py → 10/10 | verify_arxitektura.py → 10/10 | verify_kritik.py → 10/10
```

---

## 12. FOYDALANISH TARTIBI VA QAROR SO‘ROVLARI

### 5 qadamda qo‘llash

1. Koordinator PK-08 ro‘yxatini ishga soladi (30-kun tayyorgarlik).
2. A’zolar skan paytida PK-01 bayroqlarini yig‘adi; har biriga PK-02 dosyesi ochiladi.
3. «Halokat kuni» PK-03 protokoli bo‘yicha o‘tkaziladi; natija — dosye + X-sinf takliflari.
4. Nizo bo‘lsa — PK-04 hakamlik; X1 bo‘lsa — darhol PK-06 (72 soat) tartibi.
5. Nashrda **QX (PK-05)** majburiy ilova; arxivga dosye, bayonnoma va snapshotlar bilan topshiriladi.

### 4 tezis

1. **Paket amaliyotga tayyor:** 8 shablon, har biri IV jild kodlariga (QJ/TN/K) va III jild mexanizmlariga (AR/SH) bog‘langan.
2. **X1 kriz tartibi (72 soat)** nashr xavfini boshqaradi: freeze → ikkinchi tekshiruv → panel → erratum — barchasi iz bilan.
3. **Etika implementatsiya darajasida:** til lug‘ati (❌/✅), COI shakli va huquqiy chegara bir betda.
4. **30/60 kun ro‘yxati** klubdan professional, bellasha oladigan sinov tizimiga aniq yo‘l ochadi.

### Qaror so‘rovlari (faqat ishchi tartib — push/e’lon yo‘q)

1. **Ishchi paket (PK-01…PK-08)** ishchi standart sifatida tasdiqlansinmi?
2. **30-kun tayyorgarlik ro‘yxati** ishga tushirilsinmi?
3. Keyingi qadam sifatida **o‘quv keysi (trenajyor)** — soxta da’vo ustida to‘liq sinov mashqi yozilsinmi?
