# HUJJATLAR — YAKUNIY KAMCHILIKLAR AUDITI (v2 tayyorlov)
### 2026-10-15 · faqat workspace · v1/main ga tegilmaydi

**Qamrov:** staging/idea (8 fayl) + staging/standard (3 md) — har biri V1–V10 o'tishlari bilan.

## 1. Avtomatik tekshiruv (verify_all.py)

| Skript | Qamrov | Natija |
|---|---|---|
| verify_kritik.py | II jild | 10/10 PASS |
| verify_arxitektura.py | III jild | 10/10 PASS |
| verify_tanqidiy.py | IV jild | 10/10 PASS |
| verify_paket.py | Ishchi paket | 10/10 PASS |
| verify_okeys.py | Trenajyor | 10/10 PASS |
| Uslub skani (11 fayl) | ASCII/kirill/ko'rinmas/jadval | 0 nuqson |

## 2. Chuqur qo'lda audit topilmalari

| # | Tekshiruv | Natija |
|---|---|---|
| 1 | Fayl havolalari (`*.md`/`*.py`) mavjudligi | `reproduce.md` — artefakt nomi (K-03), buzilgan havola emas ✓ |
| 2 | TODO/TBD/XXX qoldiqlari | Yo'q ✓ |
| 3 | `##` sarlavha raqamlash | Barcha 11 faylda uzluksiz ✓ |
| 4 | Eski sinf nomi («C-sinf») | 0 (daftar iqtibosi istisno) ✓ |
| 5 | Kod prefikslari to'qnashuvi | Yo'q (TU yakkama-yakka) ✓ |
| 6 | md5/indeks yangiligi | Indeks v1.2 — joriy ✓ |

## 3. Ochiq qaror so'rovlari (foydalanuvchi javobini kutmoqda)

| Manba | Soni | Mavzular (qisqa) |
|---|---|---|
| KRITIK §10 | 3 | Y-01…Y-12 integratsiyasi; I jild v1.1; II jild formati |
| ARXITEKTURA §12 | 5 | AR to'plami; 30-kun sprint; IA/dalil kartasi; DOI tayyorgarligi; II savollar |
| TANQIDIY GURUH §12 | 5 | Nizom tasdig'i; do'stona sinov; hakamlik paneli; Zenodo; ichki paket |
| PAKET §12 | 2* | Paket tasdig'i; 30-kun ro'yxati (*skript sanog'i; qo'lda 3 ta) |
| O'QUV KEYSI §12 | 4 | Trenajyor; mini-bayroq banki; TU katalogi; video-darslik |

**Jami: ~19 ochiq qaror.** Hech biri v2 deployga blok emas — v2 alohida mahsulot sifatida ko'rib chiqiladi.

## 4. Xulosa

Hujjatlar to'plami v2 ga ko'chirishga tayyor: 0 texnik nuqson, barcha havolalar ishlaydi,
ochiq masalalar faqat *qaror* darajasida (mazmun xatosi emas). v1 asl nusxalar o'zgarmaydi —
v2 nusxalar `v2/docs-v2/` ga indeks bilan ko'chiriladi.
