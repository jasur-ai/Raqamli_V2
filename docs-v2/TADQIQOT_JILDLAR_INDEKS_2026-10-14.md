# «RAQAMLI TADQIQOT» — TADQIQOT JILDLARI INDEKSI
### v1.2 · 2026-10-14 · faqat workspace (hech qanday push/e’lon yo‘q)

**Maqsad:** I–IV jildlar, dalillar reyestri va operatsion fayllarning yagona ko‘rsatkichi — hajm, nazorat summasi (md5) va tekshiruv holati bir betda.

**Holat:** barcha jildlar **qoralama** (qabul qilinmagan); **5 skript — 10/10 PASS**; yig‘ma yurish: `python3 verify_all.py` → «BARCHASI YASHIL».

---

## 1. Asosiy hujjatlar (`staging/idea/`)

| Fayl | Vazifa | Bayt | MD5 |
|---|---|---:|---|
| `DALIL_REYESTRI_2026-10-14.md` | Dalillar reyestri (A–H; 47 ID) — barcha jildlar asosi · v1.4 | 25474 | `4269fa2060fcb4c60999da536ca0be8b` |
| `IDEA_TAHLIL_2026-10-14.md` | I jild — idea tahlili (IN/P/R) | 20085 | `6e020c4cf4152aad95dba81f8ef448f0` |
| `KRITIK_TAHLIL_2026-10-14.md` | II jild — kritik tahlil (L/T/Z/Y) | 35167 | `a012da547a5a7bf01e6cd9f4e1c95466` |
| `ARXITEKTURA_2026-10-14.md` | III jild — arxitektura (AR/SH) · v1.1 | 26847 | `79f19e7cb25b5f3088f2e16ec22b4a07` |
| `TANQIDIY_GURUH_2026-10-14.md` | IV jild — Qizil jamoa (QJ/TN/K/X) · v1.1 | 24923 | `78fb09e729b996d290518f325d793ae8` |
| `QIZIL_SINOV_PAKETI_2026-10-14.md` | IV ilova — ishchi paket (PK-01…PK-08) · v1.1 | 14862 | `e6cb269c0916de7b51075cc7b003bd56` |
| `OQUV_KEYSI_2026-10-14.md` | IV ilova — trenajyor (3 mashg‘ulot, rubrika, TU katalogi) · v1.0 | 22903 | `62e4db9f878050a62e0765ec0caff983` |

## 2. Standart hujjatlari (`staging/standard/`)

| Fayl | Vazifa | Bayt | MD5 |
|---|---|---:|---|
| `TAKLIFLAR_2026-10-14.md` | Takliflar (S/I/M; v1.1) | 34201 | `5d7d1353995faf2deaae0ba24392dd28` |
| `ANKER_KITOB_v1.md` | Anker kitobi (A-ilova; E1–E3) | 11084 | `da744ba25cd25ccf1caba20645eb7e92` |
| `pilot_tahlil.md` | Pilot tahlil natijalari (12-hujjat kesimi) | 5088 | `aaf4b56e69e32f17d505a9cf5475a456` |
| `aaiuz_hisob.py` | Hisob yadrosi (selftest bilan) | 11816 | `f35e91e937b4d91814b46bc4538df0c9` |

## 3. Tekshiruv skriptlari

| Skript | Qamrov | Natija (2026-10-14) | Bayt | MD5 |
|---|---|---|---:|---|
| `verify_kritik.py` | II jild tekshiruvi | **10/10 PASS** | 7817 | `32e94fb9a45deca8b5c9efbca2bf4806` |
| `verify_arxitektura.py` | III jild tekshiruvi | **10/10 PASS** | 7206 | `83bb8e2e8eff665900af97a6e43784be` |
| `verify_tanqidiy.py` | IV jild tekshiruvi | **10/10 PASS** | 8501 | `98da90ab60057487f9f0ca15e08e5115` |
| `verify_paket.py` | Ishchi paket tekshiruvi | **10/10 PASS** | 7419 | `386809d223f221aa558ab8c4e0522d80` |
| `verify_okeys.py` | Trenajyor tekshiruvi | **10/10 PASS** | 8370 | `4a7122da3c5d4c0f779726f00d23aa44` |
| `verify_all.py` | Yig‘ma yurgizgich (5 skript + uslub skani) | Yig‘ma yurish | 2248 | `97ee6da91906324dc24efd66fecf42ef` |

## 4. O‘qish tartibi (tavsiya)

1. **DALIL_REYESTRI** — faktlar va manbalar (A–H).
2. **IDEA_TAHLIL** — g‘oya nimani va’da qiladi, chegaralari nimada.
3. **KRITIK_TAHLIL** — xavflar va to‘siqlar (T/Z/Y) va ularga yechimlar.
4. **ARXITEKTURA** — tizim qanday quriladi (AR/SH, yo‘l xaritasi).
5. **TANQIDIY_GURUH** — akademik yadro va institutsional muxolifat (QJ/TN/K).
6. **QIZIL_SINOV_PAKETI** — amaliyotga tushirish shablonlari (PK-01…PK-08).
7. **OQUV_KEYSI** — trenajyor: uch mashg‘ulot, rubrika, mini-bayroqlar, TU katalogi.

*Yonma-yon:* `../standard/TAKLIFLAR_2026-10-14.md` (S/I/M) — qarorlar ro‘yxati.

## 5. Nazorat qoidalari

- Har tahrirdan keyin: `python3 verify_all.py` — «BARCHASI YASHIL» bo‘lmasa, o‘zgarish qabul qilinmaydi.
- Har nashrdan oldin: md5 va hajm ushbu indeksda yangilanadi.
- Kodlar yakkama-yakka: yangi kod qo‘shishdan oldin barcha jildlar bo‘yicha prefiks skani o‘tkaziladi.

*Izoh: ushbu indeks faylining o‘z md5’i jadvalga kirmaydi (o‘z-o‘ziga havola bo‘lmasligi uchun); uni `md5sum TADQIQOT_JILDLAR_INDEKS_2026-10-14.md` bilan olish mumkin.*
