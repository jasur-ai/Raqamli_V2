# RAQAMLI TADQIQOT — V2 (ALOHIDA MAHSULOT)

Bu papka — **v2**: v1/main (jonli sayt, bot, hujjatlar) ga **tegilmaydi**,
hech narsa aralashtirilmaydi. Foydalanuvchi ko'rib, o'zi qaror qiladi:
v2 almashtiradimi yoki v1 qoladimi.

## Tarkib
- `site/` — v2 sayt (yangi UI/UX, animatsiyalar, ishchi bo'limlar)
- `bot/` — v2 bot (@raqamli_v2_bot uchun takomillashtirilgan oqimlar)
- `docs-v2/` — o'zgargan/qo'shilgan hujjatlar nusxasi (v2 indeks bilan)
- `audit/` — v2 bo'yicha tekshiruv hisobotlari

## Holat jurnali
- 2026-10-15: v2 ish maydoni ochildi; tokenlar vaultga saqlandi; deploy hali yo'q.

## Yangilanish — 2026-10-15
- Hujjatlar yakuniy audit: 5/5 skript 10/10, 0 nuqson (`audit/HUJJATLAR_YAKUNIY_AUDIT_V2_2026-10-15.md`).
- Drive: `RT_V2_2026-10-15` papkasi — INDEKS_V2 + 9 hujjat (10/10 yuklandi, ro'yxat bilan tasdiqlandi).
- Sayt deploy (yangi Cloudflare akkaunt, alohida loyiha): **https://raqamli-tadqiqot-v2.pages.dev** — HTTP 200, 19 638 bayt, v2 kontent tasdiqlandi.
- Lokal repo: branch `v2`, commit `fce0792` (15 fayl). GitHub push — token kelganda (v1 repo ga tegilmaydi).
- Bot: reja tayyor (`bot/BOT_V2_TAKOMILLASHTIRISH_2026-10-15.md`); Render deploy — alohida buyruq bilan.
- v1/main: sayt 200, o'zgarmagan.
