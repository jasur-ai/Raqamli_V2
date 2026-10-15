# «RAQAMLI TADQIQOT» — IDEA VA STANDARTLAR BO‘YICHA TAKLIFLAR
### v1.1 · 2026-10-14 · qoralama (qabul qilinmagan)
> v1.1 o‘zgarishi: **I-11 qo‘shildi** — «Qizil jamoa» va akademik yadro qo‘shimcha bo‘limi (IV jild, `TANQIDIY_GURUH_2026-10-14.md`).

**Kim uchun:** jamoa, Ilmiy rahbar, Metodologiya komissiyasi
**Asos:** 06, 07, 12, 13, 24, 26, 28, 29, 30, 31, 32-hujjatlarning to‘liq tahlili (ba’zilari qisman), 12-hujjat pilot matritsasi ustida mustaqil qayta hisob-kitob, statistik tekshiruvlar
**Qabul tartibi taklifi:** har bir punkt bo‘yicha Metodologiya komissiyasi qarori (qabul / rad / keyinga); qabul qilinganlari changelog bilan rasmiylashtiriladi
**Muhim:** bu hujjat va undagi barcha ilovalar faqat **workspace ichida**. Hech qanday push/deploy/e’lon qilinmagan.

---

## 0. QISQA XULOSA — TOP-10 QAROR

| № | Qaror | Nima o‘zgaradi | Kuch | Mehnat | Muddat |
|---|---|---|---|---|---|
| 1 | **Uch ko‘rsatkich qoidasi** (S-1) | Har bir indeks yonida diapazon: pessimistik / qismiy / optimistik + qamrov % | Yuqori | 2 kishi-kun | sikl №1 pre-reg’igacha |
| 2 | **Anker kitobi v1.0** (S-6, ilova A) | Har o‘lchov uchun kuzatiladigan mezonlar, E1–E3 dalil darajalari, anti-misollar | Yuqori | 3 kishi-kun | 15-dekabrgacha |
| 3 | **Kelishuv darvozasi** (S-8) | kappa ≥ 0,6 va kelishuv ≥ 80% bo‘lmasa — nashr yo‘q; oltin to‘plam (12 katak) + sertifikat | Yuqori | 4 kishi-kun | sikl №1 sifatida |
| 4 | **«Chegara» va «indeks hisoblanmaydi» qoidalari** (S-2, S-3) | Daraja faqat barqaror va qamrov ≥ 60% bo‘lsa beriladi; <2 o‘lchovda raqam chiqarilmaydi | Yuqori | 1 kishi-kun | sikl №2 dan |
| 5 | **Statistik noaniqlik bo‘limi** (S-4) | Sektor indeksiga ishonch oralig‘i; kichik-n qoidalari (n<8 — faqat taqsimot) | O‘rta-yuqori | 3 kishi-kun | yanvar 2027 |
| 6 | **Field-test protokoli v2** (S-7) | 2 tur (≥7 kun farq), tartib aralashtiriladi, ssenariylar **pulidan** rotatsiya (anti-gaming), «mavjud emas ≠ 0» | Yuqori | 2 kishi-kun | fevral 2027 |
| 7 | **Ishonch darajasi A/B/C** (S-9) | «Yuqori/Past» o‘rniga bir xil 3 daraja + L3 sinovi alohida belgisi | O‘rta | 0,5 kishi-kun | dekabr 2026 |
| 8 | **Moliya firevori + litsenziya yagonaligi** (I-5, S-12) | Homiy baholanmaydi; ochiq litsenziya ziddiyati (CC BY vs CC BY-NC) hal qilinadi | O‘rta | 1 kishi-kun | dekabr 2026 |
| 9 | **Ishonch sahifasi** (I-4) | Saytda doimiy «o‘lchov salomatligi» paneli (qamrov, kappa, javob %, errata — yomon raqamlar ham) | O‘rta | 4 kishi-kun | mart 2027 |
| 10 | **RFC tartibi va versiyalash** (S-11) | Metod MAJOR o‘zgarishi: 14 kunlik ochiq muhokama → komissiya → changelog | O‘rta | 1 kishi-kun | dekabr 2026 |

**Umumiy hajm:** ≈ 25–30 kishi-kun / 90 kun. Mavjud akademik yadro (11 kishi, 31-hujjat) sig‘adi; yangi byudjet talab qilmaydi (5 va 9-bandlar bundan mustasno — sayt ishlari).

---

## 1. ASOS: NIMA TEKSHIRILDI

1. **Hujjatlar to‘liq o‘qildi:** 06 Nizom, 07 Etika va Ma’lumot siyosati, 12 Pilot natijalari, 13 Metod izohi, 28 G‘oyalar banki, 29 Tadqiqot qanday qilinadi, 32 RT-Standart. Qisman: 24 (xavflar reestri), 26 (yillik reja), 30 (kelajak rejalari), 31 (rol yo‘riqnomalari, kiritish qismi).
2. **Mustaqil qayta hisob-kitob:** 12-hujjatdagi 10 bank matritsasi bo‘yicha indeks noldan hisoblab chiqildi (`staging/standard/aaiuz_hisob.py`). Natija: **barcha 10 qismiy indeks e’londagi qiymatlarga aynan mos** (NBU 59,5; SQB 70,0; TBC 100,0 …), sektor ko‘rsatkichi 32,6. Selftest: 6 qo‘shimcha tekshiruv bilan o‘tdi.
3. **Statistik tahlillar** (`staging/standard/pilot_tahlil.md`): bootstrap ishonch oraliqlari, vazn sezgirligi, neytral (peer-adjusted) baho.
4. **Xulosa:** metodikaning o‘zagi mustahkam va uni buzish kerak emas. Takliflarning ko‘pchiligi — **ustiga qo‘shish** (ishonch arxitekturasi), almashtirish emas. Faqat 2 ta joyda qat’iy tuzatish bor: ishonch/daraja bo‘yicha taqdimot qoidasi va litsenziya ziddiyati.

---

## 2. IDEYA BO‘YICHA TAKLIFLAR

### I-1. «Zinapoya» modeli: bitta raqam emas, mahsulot zinasi
Hozir barcha natijalar «AAI-UZ indeksi» nomi ostida chiqadi. Taklif — uch zinani nomda va formatida ajratish:

| Zina | Nima | Ramka | Mehnat/xarajat | Mahsulot nomi |
|---|---|---|---|---|
| **L0 — Sektor xaritasi** | Faqat ochiq manba, yengil skan; «AI izi bor / yo‘q / noma’lum» + qamrov; ball yo‘q | 25–40 tashkilot | ≈ 6–8 soat/sikl | «Xarita» |
| **L1 — Chuqur o‘lchov (AAI-UZ)** | RT-Standart to‘liq: D1–D6, ikki baholovchi, rasmiy so‘rov, maydon sinovi | 10–12 tashkilot | ≈ 90 soat/sikl (29-hujjat) | «AAI-UZ indeksi» |
| **L2 — Panel** | Yillik takroriy kuzatuv: o‘tgan sikl tashkilotlari + yangilari, yengillashtirilgan anketa | 35 tashkilot | ≈ 20–25 soat/yil | «Panel 2026/27» |

**Nega:** (a) «80+ o‘lchangan tashkilot» KPI’siga halol yetish yo‘li shu — hammasini chuqur o‘lchash imkonsiz, lekin hammasini L0/L2 da qamrab olish mumkin; (b) L0 natijasi o‘zi alohida qimmatli: «sektor xaritasi» OAV va a’zolar uchun tez kirish nuqtasi; (c) L2 panel sikl №2 tanloviga dalil beradi.
**Hujjatga ta’siri:** 26 (KPI ifodasi), 28 (soha kartalari), 30 (bosqichlar). **Muhim qoida:** L0 va L2 natijalari hech qachon «indeks» deb atalmaydi va L1 bilan bir jadvalga qo‘yilmaydi.

### I-2. Namuna va vakolat chegarasi — ochiq bayon
Pilotda tanlov to‘g‘ri dizayn qilingan (13-hujjat: CBU toifalari bo‘yicha tabaqalashtirilgan maqsadli tanlov), lekin **10/35 = 28,6%** va qatlam vaznlari yo‘q. Taklif:
1. Namuna jadvali rasmiylashtirilsin: qatlamlar (davlat / ATB / xususiy / xorijiy), har qatlamdan minimal vakil, tanlov sababi har tashkilot uchun bir jumla bilan (pilotda bor — rasmiy shaklga o‘tsin).
2. Har bir natija yonida **«kuzatuv ramkasi»** yozilsin: «10 tashkilot / 35 tashkilotdan» — sektor haqidagi gaplar faqat shu ramka ichida.
3. Sikl №1 da qamrovni 35 ga chiqarish maqsadi saqlanadi, lekin **avval L0** o‘tkaziladi: qaysi tashkilotlar umuman javob berishga tayyor ekanini oldindan ko‘rsatadi (resurs rejalash uchun).
4. «Sektor indeksi» iborasi faqat L1 namunada hisoblanadigan qiymatga nisbatan ishlatiladi; qamrov < 60% bo‘lsa har doim «namunaviy» so‘zi qo‘shiladi.

### I-3. Sektor kengaytmasini «darvoza»ga bog‘lash
28-hujjatdagi M1–M6 reytingi to‘g‘ri; taklif — ovozdan oldin **1 haftalik ramka sinovi (frame test)** majburiy bo‘lsin: 5–7 tashkilot, faqat L0 usulida, baho emas — «o‘lchash mumkinmi?» testi. Natija 3 xil: (a) yetarli dalil bor — davom; (b) qisman — 2 haftaga cho‘zish; (c) dalil yo‘q — ovozga qaytarish. Sog‘liqni saqlash kabi yuqori xavfli sohada bu M6=2 holatini boshqaradi.

### I-4. «Ishonch sahifasi» — doimiy ochiq panel
Nizom 10.5 talab qiladi, lekin bir joyda doimiy ko‘rinmaydi. Taklif — saytda (va har hisobot oxirida bir xil tartibda) quyidagi 8 ta ko‘rsatkich:
1. Oxirgi hisobot sanasi va versiyasi; 2. Kuzatuv ramkasi va qatlamlar; 3. Qamrov % (to‘ldirilgan vaznlar); 4. Kelishuv % va kappa (har sikl); 5. Rasmiy so‘rovga javob darajasi (95% CI bilan); 6. Errata soni va o‘rtacha tuzatish vaqti; 7. Manba arxivi qamrovi (SHA-256 olingan manbalar %); 8. Qurilgan va ochilmagan bo‘shliqlar ro‘yxati (top-3).
**Qoida:** yomon raqam ham e’lon qilinadi — bu Klubning o‘z oshkoralik o‘lchovi (D6) uchun ham aksioma.

### I-5. Moliya va mustaqillik: 5 printsip + firevor
Nizom 8.5 (homiylik mustaqilligi) allaqachon kuchli. Unga 5 ta aniq qoida qo‘shish taklif etiladi:
1. **Homiy baholanmaydi:** sikl homiysi o‘sha sikl ramkasiga kira olmaydi (keyingi siklga ham — 12 oy muhlat).
2. **«To‘lov evaziga baho» taqiqlanadi:** hisobot, ball, daraja, «chop etish huquqi» sotilmaydi; ochiq ma’lumotlar doim bepul.
3. **Pulli xizmat faqat metodologiya doirasida:** seminar/konsalting — universitet resursi sifatida bepul; agar kelajakda pulli bo‘lsa, baholanmayotgan tashkilotlarga va oshkor shartnoma bilan.
4. **Pul oqimi ochiq:** har semestr jamlanmasi saytda (Nizom 9.3 kuchaytiriladi) — jamlanma raqam emas, manba+maqsad darajasida.
5. **Grant ustuvorligi:** universitet ilmiy loyihalari → davlat yoshlar/ta’lim dasturlari → xalqaro tashkilot grant liniyalari; har biri uchun 1 sahifalik «mustaqillik bayonnomasi».

### I-6. «Ma’lumot nashri» mahsulot sifatida (DOI + sxema)
29-hujjatda DOI va CC litsenziya bor — taklif uni mahsulot zinasi bilan bog‘lash:
- Har sikl uchun: `aaiuz-YYYY-sector` ma’lumotlar to‘plami + **JSON sxema** (`aaiuz-index-v1.schema.json`) + data dictionary (o‘zbek/ingliz).
- Har e’londa: «material pasporti» (manbalar ro‘yxati + SHA-256 + versiya + litsenziya) — F-17 shakl sifatida (S-13).
- Inglizcha 1 betlik «Methods brief» — xalqaro iqtibos va hamkorlik uchun (30-hujjatdagi «respublica» bosqichiga poydevor).

### I-7. Nom va natijdan foydalanish siyosati
Tashkilot yoki vendor o‘z reklamasida «AAI-UZ: L2» deb foydalanishini tartibga solish kerak (aks holda Klub o‘z raqamini nazorat qila olmaydi):
- Iqtibos: havola + sana + versiya majburiy; **faqat o‘z kartochkasi kontekstida**.
- Taqiqlanadi: qiyosiy reklama («eng yaxshi bank»), «sertifikat» ma’nosida ko‘rsatish, baholangan tashkilotning o‘z mahsulotida ishlatishi.
- Ruxsat: to‘liq hisobotni o‘zgartirmasdan tarqatish.
Format: 1 betlik «Nomdan foydalanish» sahifasi (sayt + hisobot ilovasi).

### I-8. Ta’lim missiyasini mustahkamlash — «Method transfer kit»
30-hujjatdagi universitetlararo tarmoq bosqichi uchun tayyor paket taklif etiladi: Anker kitobi + hisob yadrosi (kod) + formalar + 2 kunlik trening + **kappa imtihoni** (sertifikat). Shu tarzda ikkinchi universitet klubni «noldan» emas, bir xil metod bilan ochadi. Bu bir vaqtning o‘zida sifat kafolati: yangi jamoa o‘z ankerlarini ixtiro qilmaydi.

### I-9. Media uchun «qanday o‘qish kerak» bloki
Har bir e’londa (post, hisobot, infografika) 5 qoidali ramka majburiy:
1. Bu reyting emas — o‘lchov; tartib raqami berilmaydi.
2. Raqam yonida qamrov va diapazon; bo‘sh katak «0» emas — «noma’lum».
3. Past ball = «dalil topilmadi», «yomon ishlaydi» emas.
4. Har bir tashkilot javob huquqiga ega; izohlar hisobotda o‘zgarishsiz.
5. Xato topilsa — 5 ish kunida ochiq tuzatish (erratum).

### I-10. A’zolar uchun «sifat kunlari» ritmi
Sikl №2 dan: har yakshanba 1 soat — jamoaviy anker laganda «10 ta eng qiyin katak» muhokamasi (yozuvlar ochiq). Maqsad: kelishuvni sikl oxirida emas, **jarayon mobaynida** oshirish. Mehnat: 12 soat/sikl, ta’sir: kappa markazlashtirilgan o‘lchov emas, madaniyat.

### I-11. «Qizil jamoa» va akademik yadro qo‘shimcha bo‘limi (IV jild)

Sikl kalendariga rasmiy **«qizil sinov»** kiritiladi: Qizil jamoa (≥3 a’zo, ≥1 tashqi) natijalarni inkor etishga professional urinadi — qat’iy normalar ostida: har tanqid **ikki mustaqil manbada tasdiqlangan, rasmiy, ochiq va xavfsiz** bo‘lishi shart; tadqiqotchi javob huquqi 7 kun; hakamlik paneli 5 ish kuni; natija — har nashrda «Qizil xulosa». To‘liq nizom va mexanizmlar (QJ-01…QJ-14, TN-01…TN-10, K-01…K-12) — IV jildda; tayyor ishchi shablonlar (bayroq, dosye, protokol, bayonnoma, qizil xulosa, kriz tartibi) — `QIZIL_SINOV_PAKETI_2026-10-14.md` (PK-01…PK-08) da; xalqaro asoslar — `DALIL_REYESTRI` H bo‘limi (Registered Reports, adversarial collaboration, red teaming, ACM, COPE).

Muddat: 30-kunlik bosqichda nizom qabul; 60-kunda birinchi (do‘stona) qizil sinov. Qo‘shimcha yuklama: ~2–3 kishi-kun/sikl.


---

## 3. STANDART BO‘YICHA TAKLIFLAR

### A. Statistika va ishonch arxitekturasi

**S-1. Uch ko‘rsatkich + qamrov + diapazon belgisi.** Har bir tashkilot va sektor uchun:
- **Pessimistik** = bo‘sh kataklar 0 deb (past chegara);
- **Qismiy** = faqat to‘ldirilganlar bo‘yicha (hozirgi, asosiy);
- **Optimistik** = bo‘sh kataklar 3 deb (yuqori chegara) — *faqat* diapazon kengligini ko‘rsatish uchun.
Pilot natijasi (hisoblab chiqildi): NBU **41,7 / 59,5 / 71,7** (diapazon 30 ball); Agrobank **8,3 / 15,2 / 53,3**; Xalq banki **0,0 / 0,0 / 90,0**. Diapazon keng bo‘lsa — bu «bilmaymiz» degan halol raqam.
**Nega bu muhim:** qismiy indeksning yagona zaif joyi — u bo‘shliq ko‘pligida ham «aniq raqam» ko‘rinadi. Diapazon shu xatoga yo‘l qo‘ymaydi.

**S-2. «Chegara» belgisi va daraja berish qoidasi.** Daraja (L0–L3) faqat quyidagi ikki shart bilan yoziladi:
(a) pessimistik va optimistik baho **bir daraja oralig‘ida** (masalan, ikkalasi ham L2), **va**
(b) qamrov ≥ 60%.
Aks holda: «L? — chegarada» + qamrov. Pilot: bu qoida bo‘yicha barqaror daraja faqat SQB (L2) va TBC (L3) da; NBU «L2 chegarada», qolganlarida daraja yozilmasdi.
**Sikl №2 dan kuchga kiradi; 12-hujjatdagi pilot natijalari tegilmaydi** (arxiv tamoyili), lekin keyingi nashrlarda izoh bilan qo‘llanadi.

**S-3. «Indeks hisoblanmaydi» chegarasi (<2 o‘lchov).** Agar to‘ldirilgan o‘lchov 2 tadan kam bo‘lsa, raqam (masalan, 0,0) chiqarilmaydi, faqat holat yoziladi: «Indeks hisoblanmadi — 1/6 o‘lchov; D6: javobsiz». Bu uchta 0,0 bankning holatini to‘g‘ri yetkazadi: ularning «0»i — AI amaliyotining emas, **javobsizlikning** natijasi.

**S-4. Statistik noaniqlik bo‘limi (13-hujjatga yangi).** Qoidalar:
- Sektor indeksiga **95% bootstrap ishonch oralig‘i** yoziladi (hisob kodi tayyor). Pilot misoli: 32,6 → CI **[13,8; 53,8]** — ya’ni «32,6» yolg‘iz raqam sifatida kuchli xulosa chiqarishga asos emas; hisobotda shu oshkora aytiladi.
- Har qanday «o‘rtacha» faqat n≥5 katak uchun, n ko‘rsatilgan holda.
- Guruhlar (davlat/xususiy va h.k.) taqqoslamasi faqat n≥8 bo‘lsa e’lon qilinadi; aks holda — taqsimot, o‘rtacha emas. (13-hujjatdagi H3 taqqoslash n≈5+5 — keyingi nashrlarda «taxminiy, kuzatuvda» izohi bilan beriladi; 12-hujjatning o‘zi arxiv sifatida tegilmaydi.)
- «Javob darajasi» ham CI bilan: 8/10 = 80% → **[49%; 94%]**; shuning uchun u *jarayon ko‘rsatkichi*, natija emas.

**S-5. Vazn sezgirligi (har siklda 1 bet).** Hozirgi vaznlar (15/15/30/15/15/10) bilan 3 alternativ sxema solishtiriladi: teng, D3=40%, D5=25%. Pilot tekshiruvi: **barcha alternativlarda tartib o‘zgarmadi (Spearman = 1,0)** — ya’ni hozirgi vaznlar dalil bilan oqlangan, o‘zgartirish shart emas. Natija har siklda ochiq qo‘shimcha sifatida chiqadi — tanqidchilarga eng kuchli javob shu.

### B. Sifat kafolati

**S-6. Anker kitobi v1.0 (ilova A, tayyor).** Har o‘lchov uchun: 0–3 ball mezonlari, **E1–E3 dalil darajalari**, konkretlik testi (3 savol), yangilik qoidasi (3 ball — ≤12 oy artefakt), «0» va «bo‘sh» farqi, anti-misollar, pilot misollari. Bu — kappa ni «qog‘ozda» ko‘tarishning yagona ishlaydigan usuli.

**S-7. Field-test protokoli v2.** Amaldagi L3 protokoli yaxshi; 6 ta aniq qo‘shimcha:
1. **Ikki tur ≥7 kun farq bilan** (barqarorlik), ikkalasi ham 10:00–13:00 oynasida.
2. **Tartib aralashtiriladi:** banklar juftliklar bo‘yicha almashtirilgan tartibda sinovdan o‘tadi (birinchi bank har doim «issiq» bo‘lmasin); operatorlar tartibi aylanadi.
3. **Ssenariylar puli:** e’londan keyin ssenariy **matnlari** ochiq; lekin ishchi pul — 20 ssenariy, har siklga 10 tasi rotatsiya bilan tanlanadi (sikllar orasida qaytmaydi). Maqsad — anti-gaming: tashkilot «mashhur 10 savol»ga moslashib qo‘ymasin.
4. **«Mavjud emas ≠ 0»:** bot javob bermasa yoki kanal ishlamasa — katak «sinov o‘tkazilmadi», 0 emas.
5. **Skrinshot + javob vaqti + bot versiyasi** har bir ssenariyda; ilova versiyasi qayd etiladi (bor — kuchaytiriladi).
6. Farq >5 ball → uchinchi arbitraj (bor) + o‘lchov kesimida kappa e’lon (yangi).

**S-8. Kelishuv darvozasi va oltin to‘plam.** (a) Har siklda ochiq e’lon: umumiy kelishuv ≥80%, **kappa ≥0,6**; past bo‘lsa — natija nashr etilmaydi, sabab va keyingi qadam e’lon qilinadi. (b) Har sektor uchun **12 katakli oltin to‘plam** (komissiya tasdiqlagan etalon ballar); yangi baholovchi sertifikati — etalonga kelishuv ≥80% + kappa ≥0,6; har 12 oyda qayta sertifikat. (c) O‘lchov kesimida kappa — zaif o‘lchovni ko‘rsatadi.

**S-9. Ishonch darajasi A/B/C (yagonalik).** Bugun 12-hujjatda «Yuqori/Past», kartochkalarda «YETARLI / YETARLI EMAS», 13-hujjatda «4+ yetarli, 1–3 yetarli emas» — uch xil ifoda. Taklif:
- **A (yuqori):** 5–6 o‘lchov to‘ldirilgan;
- **B (o‘rta):** 4 o‘lchov;
- **C (past):** ≤3 o‘lchov — kartochka chiqarilmaydi, faqat qamrov ilovasida.
- «L3 sinovi o‘tkazilgan / o‘tkazilmagan» — alohida, mustaqil belgi (A ni avtomatik oshirmaydi).
Pilot mosligi: A — SQB, TBC; B — NBU; C — qolganlar. Bu qoida 12-hujjatni qayta yozmaydi, keyingi nashrdan qo‘llanadi.

### C. Jarayon va hujjatlar

**S-10. E’tiroz tartibini kuchaytirish.** Mavjudga 3 bosqich qo‘shiladi:
- Nashrdan oldin: 7 kun (bor);
- Nashrdan keyin: **14 kunlik faktik e’tiroz oynasi** — tashkilot dalil taqdim etsa, hisobotga «izoh» emas, **versiya yangilanishi yoki erratum** sifatida kiradi;
- **E’tirozlar reyestri** (ochiq, anonimlashtirilgan): sana, turi (fakt/talqin), qaror, sabab — bu Klubning himoyasi ham.

**S-11. Versiyalash va RFC tartibi.** Metodika va indeks SemVer bo‘yicha versiyalanadi:
- **MAJOR** (formula/vazn/anker mezoni o‘zgarishi): 14 kun ochiq muhokama (sayt + kanal) → komissiya qarori → changelog; eski raqamlar qayta yozilmaydi, o‘zgarish keyingi siklga qo‘llanadi.
- **MINOR** (anker izohi, shakl, format): komissiya qarori, changelog.
- **PATCH** (xatolik tuzatish): erratum tartibi (Nizom 7.7) — mavjud.
Qo‘shimcha qoida: MAJOR taklif muallifi o‘z taklifiga «nima o‘zgaradi / qaysi raqamlar nega qayta yozilmaydi» izohini ilova qiladi.

**S-12. Litsenziya ziddiyati — tuzatish talab (topilgan nomuvofiqlik).** 07-hujjat: ochiq to‘plamlar **CC BY 4.0**. 29-hujjat: DOI’li to‘plam **CC BY-NC 4.0** (tijoriy foydalanish — kelishuv bilan). Ikki hujjat bir-biriga zid. Taklif yagona siyosat:
- **Indeks jadvallari va agregat raqamlar** — CC BY 4.0 (iqtibos + havola sharti bilan; keng tarqalish uchun);
- **To‘liq dalil to‘plami (izohlar, skrinshotlar, pallalar)** — CC BY-NC 4.0;
- Har ikkisi saytda va hisobotda bir xil yoziladi. Ikkala hujjat tahrirlanadi (5-bo‘lim, matn M7).

**S-13. Formalar xaritasi va 4 yangi shakl.** Tizimda F-01…F-14 shakllar bor (32-hujjatda F-09–F-14). Taklif:
- **Bir betlik «Formalar xaritasi»** — qaysi bosqichda qaysi shakl, kim to‘ldiradi, qayerga saqlanadi (saytda ham);
- **F-15 «Anker varag‘i»** — har katak uchun: anker ID, dalil darajasi (E), manba ID;
- **F-16 «Namuna jadvali»** — qatlam, tanlov sababi, ramka;
- **F-17 «Material pasporti»** — nashr manifesti (manbalar + SHA-256 + litsenziya + versiya);
- **F-18 «E’tiroz bayonnomasi»** — S-10 uchun.
Bundan tashqari: ballash fayllari tayyor **CSV/JSON shablon**da yuritilsin — taklif qilingan hisob yadrosi (`aaiuz_hisob.py`) ularni to‘g‘ridan-to‘g‘ri o‘qib indeks hisoblaydi (inson xatosi kamayadi).

**S-14. Kommunikatsiya: «raqam — dalil — havola» uchligi.** Har bir ochiq bayonot uchun: har raqam yonida (a) manba ID yoki hisobot bo‘limi, (b) sana, (c) versiya. Va qo‘shimcha: **«eng yaxshi / eng yomon» tipidagi qiyosiy sifatlashlar taqiqlanadi** (faqat «yuqori / quyi» taqsimot tili); infografikada tartib raqami emas, **daraja guruhi** ko‘rsatiladi.

**S-15. Xavflar reestriga 5 yangi yozuv (24-hujjatga).** Manba: ushbu tahlil (matn M4da tayyor qatorlar):
1. **Indeks-gaming:** tashkilot javoblarni ssenariylarga moslab «ko‘rgazma» holatiga keltiradi → choralar: ssenariy puli + rotatsiya, e’lonsiz nazorat qayta sinovi (keyingi sikl boshida 2 katak tasodifiy tekshiriladi).
2. **Vendor reklamasida AAI-UZ:** «bizning yechim bankni L3 ga chiqardi» → choralar: nom-foydalanish siyosati (I-7) + darhol tuzatish talabi.
3. **Ko‘p ishlovchi baholovchi charchashi** (sikl oxirida kappa tushishi) → chora: S-8 oltin to‘plam har sikl boshida + «sifat kunlari» (I-10).
4. **Siyosiy bosim** (davlat/xususiy taqqoslashni kutish) → chora: pre-registratsiya + vazn sezgirligi e’loni (S-5) + «teskari natija ham chiqadi» deklaratsiyasi.
5. **Raqamning eskirishi** (eski raqamlar yangi kontekstda) → chora: har nashrda amal muddati («holat 2026-12 holatiga»), saytda arxiv + «eskirgan» yorlig‘i.

**S-16. KPI’larni aniqlashtirish (26/30-hujjatlar).** Bugungi «80+ o‘lchangan tashkilot» noaniq. Taklif:
- **Chuqur o‘lchangan (L1, ≥4 o‘lchov):** 25–30 tashkilot/yil;
- **Skanerlangan (L0 yoki L2, ≥1 o‘lchov + qayd):** 80+ tashkilot/yil;
- **Javob darajasi (L2):** ≥50% (35 ramkada 17+) — CI bilan;
- **Sifat:** har sikl kappa ≥0,6; 100% errata ≤5 ish kuni; manba arxivi ≥95%;
- **Nashr:** 5 mahsulot, 2 maqola, 3 tezis (bor) + **2 DOI ma’lumot to‘plami** + 1 inglizcha Methods brief.

---

## 4. HUJJATMA-HUJJAT TAHRIRLAR (JADVAL)

| Hujjat | Taklif | Turi | Prioritet |
|---|---|---|---|
| **32 RT-Standart** | «Natija formati» yangi bo‘limi: uch ko‘rsatkich, qamrov, A/B/C ishonch, chegara belgisi, nashr darvozasi (16 punktli checklist) | Qo‘shimcha | **P0** |
| **13 Metod izohi** | «Statistik noaniqlik» yangi bo‘limi (CI, n qoidalari, sezgirlik), H3 xulosa yumshatilishi | Qo‘shimcha + tahrir | **P0** |
| **06 Nizom** | 7.9-band: metodika versiyalash + RFC; 8.5-bandga «homiy baholanmaydi» qoidasi | Qo‘shimcha | **P0** |
| **07 Etika** | Litsenziya bandi 29-hujjat bilan moslashtiriladi; nom-foydalanish siyosatiga havola | Tahrir | **P0** |
| **29 Tadqiqot qanday** | Litsenziya mosligi; field-test qo‘shimchalari (S-7); ssenariy puli | Tahrir + qo‘shimcha | **P1** |
| **12 Pilot natijalari** | Tahrir YO‘Q (arxiv). Yangi versiya yonida «keyingi nashrlar qoidasi» izohi | Izoh | **P1** |
| **24 Xavflar** | 5 yangi qator (S-15) | Qo‘shimcha | **P1** |
| **26 Yillik reja** | KPI aniqlashtirilishi (S-16); «sifat kunlari» (I-10) kalendarga | Tahrir | **P1** |
| **28 G‘oyalar banki** | Ramka sinovi (I-3) ovoz tartibiga | Qo‘shimcha | **P2** |
| **30 Kelajak rejalari** | Zinapoya (I-1) va Method transfer kit (I-8) | Qo‘shimcha | **P2** |
| **31 Rollar** | Verifikator sertifikati (S-8) qabul shartiga; anker tayyorlash vazifasi | Tahrir | **P2** |
| **Yangi hujjatlar** | Anker kitobi (A-ilova), Ishonch sahifasi kontenti, Nom-foydalanish siyosati, Formalar xaritasi | Yangi | **P1–P2** |

---

## 5. TAYYOR TAHRIR MATNLARI (nusxalab qo‘llash uchun)

### M1 → 32-hujjatga yangi bo‘lim (12-bo‘limdan keyin)
> **13. NATIJA FORMATI VA NASHR DARVOZASI**
> 13.1. Har bir tashkilot natijasi uch ko‘rsatkich bilan beriladi: pessimistik (bo‘sh = 0), qismiy (asosiy), optimistik (bo‘sh = 3). Yonida qamrov % (to‘ldirilgan vaznlar) majburiy.
> 13.2. Daraja (L0–L3) faqat ikkala chegara bir daraja oralig‘ida bo‘lsa va qamrov ≥ 60% bo‘lsa yoziladi; aks holda «L? — chegarada» + qamrov.
> 13.3. To‘ldirilgan o‘lchov 2 tadan kam bo‘lsa, indeks raqami chiqarilmaydi; «indeks hisoblanmadi» holati yoziladi.
> 13.4. Ishonch darajasi bir xil kodda: A (5–6 o‘lchov), B (4), C (≤3). «L3 sinovi o‘tkazilgan» — alohida belgi.
> 13.5. Sektor ko‘rsatkichiga 95% ishonch oralig‘i (bootstrap) ilova qilinadi; «o‘rtacha» faqat n ko‘rsatilgan holda.
> 13.6. Nashr darvozasi (16 punkt): qamrov jadvali; A/B/C; chegara belgilari; kappa va kelishuv; javob darajasi (CI bilan); e’tiroz oynasi hujjati; homiylik firevori bayoni; manba arxivi (SHA-256) qamrovi; litsenziya va versiya; ruxsat etilgan til protokoli tekshiruvi; tartib raqamisiz taqdimot; tuzatish tartibi havolasi; ma’lumot to‘plami DOI; inglizcha kalit so‘zlar; aloqa kanali; oldingi sikl bilan solishtirish izohi (yoki «taqqoslanmaydi» bayoni). Darvozadan o‘tmagan nashr e’lon qilinmaydi.

### M2 → 13-hujjatga yangi bo‘lim
> **11. STATISTIK NOANIQLIK VA KICHIK NAMUNA QOIDALARI**
> 11.1. Namuna tasodifiy emas — tabaqalashtirilgan maqsadli tanlov (3-bo‘lim). Shu sababli barcha natijalar «kuzatilgan tashkilotlar bo‘yicha» deb o‘qiladi va shunday yoziladi.
> 11.2. Sektor ko‘rsatkichi yonida 95% ishonch oralig‘i (bootstrap, 20 000 resample) e’lon qilinadi. Pilot: 32,6 [13,8; 53,8].
> 11.3. O‘rtacha faqat n ≥ 5 da; guruh taqqoslamasi faqat n ≥ 8 da; aks holda taqsimot ko‘rsatiladi.
> 11.4. Javob darajasi va boshqa jarayon ko‘rsatkichlari ishonch oralig‘i bilan beriladi.
> 11.5. Har siklda vazn sezgirligi hisoboti (kamida 3 alternativ sxema, Spearman korrelyatsiya) ochiq ilova qilinadi.

### M3 → Nizomga 7.9-band
> **7.9. Metodika versiyalari va o‘zgarish tartibi.** Metodika va indeks versiyalanadi (vN.M). Formula, vazn yoki anker mezonlarini o‘zgartiruvchi har qanday taklif kamida 14 kun ochiq muhokamada turadi (sayt + rasmiy kanal), so‘ng Metodologiya komissiyasi qaror qiladi; qaror va sabab changelog‘da e’lon qilinadi. E’lon qilingan raqamlar qayta yozilmaydi: o‘zgarish keyingi siklga qo‘llanadi; xatolik bo‘lsa — 7.7-band (erratum). Homiy yoki grant beruvchi tashkilot o‘sha sikl ramkasiga kirmaydi (8.5-band qo‘shimchasi).

### M4 → 24-hujjatga 5 yangi qator (sxema: ID | Ssenariy | E | T | Erta signal | Oldini olish | Reaksiya va mas’ul)
> C8 | Indeks-gaming: tashkilot ssenariylarga moslashib ko‘rgazma holat yaratadi | 2 | 2 | Sikl e’loni bilan keskin yaxshilangan javoblar; bir xil matnli javoblar | Ssenariy puli va rotatsiya (10/20), javob variantiyligi tekshiriladi, e’lonsiz qayta sinov | 48 soat: 2 katak tasodifiy qayta sinov; farq hujjatlashtiriladi, hisobotda izoh — Akademik rahbar, Sifat va etika
> D7 | Vendor «AAI-UZ» natijasidan reklamada foydalanadi | 2 | 2 | «Biz L3 ga chiqardik» tipidagi materiallar | Nom-foydalanish siyosati; hisobotda taqiq matni | 72 soat: tuzatish talabi; bajarilmasa — ochiq bayonot — Koordinator, Media
> C9 | Baholovchilar charchashi → sikl oxirida kappa tushishi | 3 | 2 | Oxirgi hafta kelishuv % pasayishi | Oltin to‘plam har sikl boshida; juftlik rotatsiyasi; «sifat kunlari» | Sikl to‘xtatiladi: 2 katak qayta baholanadi; kerak bo‘lsa nashr kechiktiriladi — Akademik rahbar, Ilmiy rahbar
> E9 | Siyosiy bosim: «davlat vs xususiy» taqqoslash talab/noroziligi | 2 | 3 | Rasmiy yoki norasmiy «qaysi bank yaxshi?» so‘rovlari | Pre-registratsiya; vazn sezgirligi e’loni; «reyting emas» protokoli | 24 soat: yozma pozitsiya (protokol matni) — Koordinator, Ilmiy rahbar
> E10 | Raqamning eskirishi: eski ball yangi voqea kontekstida iqtibos qilinadi | 3 | 1 | OAV eski hisobotga havola qiladi | Har raqamda «holat sanasi»; saytda arxiv va «eskirgan» yorlig‘i | 48 soat: joriy holat izohi + yangi kesim havolasi — Media

### M5 → 29-hujjatga field-test qo‘shimchalari (5-bo‘lim)
> 5.6. Har sikl sinov **ikki tur**da o‘tkaziladi (≥7 kun farq, ikkalasi 10:00–13:00). 5.7. Ssenariylar 20 talik puldan tanlanadi; tanlov sikl boshida qayd etiladi, matnlar sikl yakunida arxiv bilan ochiq qilinadi. 5.8. Banklar tartibi tur bo‘yicha aralashtiriladi. 5.9. Xizmat mavjud bo‘lmasa — «sinov o‘tkazilmadi», 0 emas. 5.10. Har bir javob uchun vaqt (sekund) qayd etiladi.

### M6 → 26/30 KPI yangilangan ro‘yxati
> Chuqur o‘lchangan (L1, ≥4 o‘lchov): 25–30 tashkilot/yil · Skanerlangan (L0/L2): 80+ tashkilot/yil · Javob darajasi (L2): ≥50% (CI bilan) · Har sikl kappa ≥0,6 va kelishuv ≥80% · Errata 100% ≤5 ish kunida · Manba arxivi ≥95% · 5 mahsulot, 2 maqola, 3 tezis (bor) · 2 DOI to‘plam + 1 inglizcha Methods brief.

### M7 → Litsenziya yagonaligi (07 va 29-hujjatlar bir xil matn)
> Ochiq nashrlar: indeks jadvallari, agregat ko‘rsatkichlar va metodika matni — **CC BY 4.0** (iqtibos va manba havolasi sharti bilan). To‘liq dalil to‘plami (katak izohlari, skrinshotlar, ballash fayllari) — **CC BY-NC 4.0**: ilmiy va ma’rifiy foydalanish erkin, tijoriy foydalanish alohida yozma kelishuv asosida. Har bir nashrda litsenziya turi va versiyasi ko‘rsatiladi.

---

## 6. 30/60/90 KUNLIK JORIY ETISH REJASI

| Kun | Ish | Mas’ul (31-hujjat roli) | Natija (mezon) | Mehnat |
|---|---|---|---|---|
| 1–15 | Anker kitobini komissiyada ko‘rib chiqish va tasdiqlash | Ilmiy rahbar + Akademik rahbar | Tasdiqlangan v1.0 + changelog #1 | 3 k-k |
| 1–15 | M1/M2/M3/M7 matnlarini hujjatlarga kiritish; komissiya bayonnomasi | Koordinator + Kotib | 4 hujjat yangilangan, versiya belgilangan | 2 k-k |
| 15–30 | Oltin to‘plam (12 katak) tuzish; verifikatorlar kalibrashi | Sifat va etika rahbari | Kelishuv ≥80%, kappa hisoblangan | 4 k-k |
| 15–30 | 13-dekabrga pre-registratsiya: gipotezalar, ssenariy puli (20), namuna jadvali | Akademik rahbar | F-15/F-16 shablonlari to‘ldirilgan | 3 k-k |
| 30–45 | L2 xatining v2 versiyasi: D2 (infratuzilma) savollari, oshkor variantlar, muddatlar | Koordinator + Kotib | F-09 v2 tasdiqlangan | 2 k-k |
| 30–45 | Hisob yadrosi va CSV/JSON shablonni ishga tushirish; sinov | Ma’lumotlar tahlilchisi | Selftest + pilot qayta hisob (o‘tdi) | 2 k-k |
| 45–60 | Sezgirlik va CI hisobotini sikl №1 jadvaliga tayyorlash; sayt «qanday o‘qish» bloki | Akademik + Media | 2 sahifa kontent | 2 k-k |
| 45–75 | Ishonch sahifasi (8 panel) prototipi | Texnika rahbari + Media | Sahifa jonli ko‘rinishda | 4 k-k |
| 60–75 | Nom-foydalanish siyosati va moliya firevori qoidalarini Nizomga kiritish | Koordinator + Sifat | Tasdiqlangan matn | 1 k-k |
| 60–90 | DOI hisoboti uchun Zenodo sinov yuklamasi (pilot to‘plam) | Ma’lumotlar tahlilchisi + Ilmiy rahbar | DOI olingan sinov yozuvi | 2 k-k |
| 75–90 | Sikl №1 boshlash (pre-reg e’loni, jamoalar, oltin to‘plam qayta kalibrash) | Akademik rahbar | Start bayonnomasi | 3 k-k |

**Nazorat nuqtalari:** 15-dekabr (pre-reg qotiriladi), 15-yanvar (sikl starti), 1-mart (birinchi nashr darvozadan).

---

## 7. XALQARO HAMOHANGLIK (qisqa izoh)

Maqsad — taqqoslanuvchanlik emas, **leksika mosligi**: hisobotni xalqaro mutaxassis o‘qiganda tanish tushunchalar bilan uchrashishi.
- **D1** → strategik boshqaruv (AI strategy/adoption governance);
- **D2** → texnik infratuzilma va MLOps;
- **D3** → amaliy qabul (deployment/adoption) — ko‘pchilik xalqaro indekslarning yadroviy o‘lchovi;
- **D4** → talent/capability;
- **D5** → risk boshqaruvi (NIST AI RMF, ISO/IEC 42001 va 23894 lug‘ati; EU AI Act’ning shaffoflik talablari ruhi);
- **D6** → shaffoflik va hisobdorlik (UNESCO tavsiyalari, OECD prinsiplari).
Taklif: 32-hujjatning 11-bo‘limiga 1 betlik «Kalit so‘zlar xaritasi (o‘z/ingliz)» qo‘shilsin — maqolalar va xalqaro arizalar uchun.

---

## 8. NIMA QILMAYMIZ (anti-scope — o‘zgarishsiz kuchda qoladi)

1. Reyting/leaderboard formatida nashr yo‘q — faqat taqsimot va daraja guruhlari.
2. Model ichini baholash yo‘q — faqat mijoz ko‘radigan natija (29-hujjat, 5-bo‘lim).
3. Ichki/maxfiy ma’lumot so‘ralmaydi — o‘zgarishsiz (07-hujjat).
4. Baholangan tashkilotdan pul olinmaydi; homiy o‘sha sikl ramkasiga kirmaydi.
5. Bo‘sh katak nolga aylantirilmaydi; «dalil topilmadi» hech qachon «yo‘q» deb tarjima qilinmaydi.
6. Sikl №1 pre-reg’i qotirilgach — gipoteza yoki vazn «natijaga qarab» o‘zgartirilmaydi (faqat RFC orqali, keyingi siklga).

---

## 8-B. KUTILGAN SAVOLLARGA JAVOB

**1. Bu o‘zgarishlar hujjatlarni og‘irlashtirmaydimi?**
Qo‘shimchalar 3 sahifadan oshmaydi (M1–M3, M7). Eng katta yuk — Anker kitobi (bir marta, 3 kishi-kun) va oltin to‘plam (bir marta, 4 kishi-kun); qolganlari sikl ichida bajariladi. Umumiy 25–30 kishi-kun, 11 kishilik akademik yadroga taqsimlangan holda ≈ 2,5–3 kun/kishi/90 kun.

**2. Qismiy indeks endi ishlatilmaydimi?**
Yo‘q — u **asosiy** ko‘rsatkich bo‘lib qoladi. Uchlik (pessimistik/qismiy/optimistik) uning ustiga qurilgan himoya: qismiy indeks «mavjud dalillar doirasida» degan ma’noni saqlaydi, diapazon esa buni raqamda ko‘rsatadi.

**3. Diapazon e’lon qilsak, «hammasi noaniq» degan taassurot bo‘lmaydimi?**
Aksincha: diapazon faqat ma’lumot yetmaganda keng (pilotda Agrobankda 45 ball), to‘liq dalillangan tashkilotda nol (SQB, TBC). Ya’ni diapazonning o‘zi **ma’lumot sifati ko‘rsatkichi** bo‘lib ishlaydi va jamoani bo‘shliqlarni yopishga undaydi.

**4. Nega aynan hozir?**
15-dekabr — sikl №1 pre-registratsiyasi qotiriladigan sana. Undan keyin metodik o‘zgarish RFC (14 kun muhokama) talab qiladi. Hozir — qoidalarni «o‘yindan oldin» joriy etishning yagona tabiiy oynasi.

**5. Bu ishlar bir kishiga (Koordinatorga) yuk bo‘lmaydimi?**
6-bo‘limdagi jadvalda har ish 31-hujjat rollariga taqsimlangan: Akademik rahbar — pre-reg va ssenariy puli; Sifat va etika — oltin to‘plam va kappa; Ma’lumotlar tahlilchisi — hisob yadrosi va CSV shablon; Media/Texnika — ishonch sahifasi; Kotib — hujjat versiyalari va bayonnomalar. Koordinator faqat hujjatlar tasdig‘i va tashqi aloqada.

---

## 9. ILOVALAR (workspace fayllari)

| Fayl | Tarkibi |
|---|---|
| `staging/standard/ANKER_KITOB_v1.md` | Anker kitobi v1.0 (9 bo‘lim; E1–E3, anti-misollar, adjudikatsiya, kalibrash) |
| `staging/standard/aaiuz_hisob.py` | Hisob yadrosi: uch ko‘rsatkich, chegara/ishonch belgilari, neytral baho, kappa; selftest pilotni aynan qayta hisoblaydi |
| `staging/standard/pilot_tahlil.md` | Pilotning statistik tahlili: diapazonlar, bootstrap CI, sezgirlik (Spearman), javob darajasi CI, neytral baho |
| `staging/standard/pilot_tahlil.py` | Yuqoridagi hisobotni qayta ishlab chiqaruvchi skript (random seed qotirilgan) |

**Tekshiruv izi:** `python3 staging/standard/aaiuz_hisob.py --selftest` → «O‘TDI»; `python3 staging/standard/pilot_tahlil.py` → hisobot qayta yaratiladi. Ikkalasi ham 2026-10-14 da ishga tushirilgan.

---

*Hujjat qoralama: hech bir bandi amaldagi Nizom, RT-Standart yoki boshqa hujjatga kuchga kirmagan. Qabul qilinishi Metodologiya komissiyasi va Ilmiy rahbarning yozma tasdig‘ini talab qiladi.*
