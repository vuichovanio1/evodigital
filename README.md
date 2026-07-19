# EVO Digital — high-performance rebuild

Чист HTML/CSS/JS вариант на [evodigital.bg](https://www.evodigital.bg), със същия бранд, съдържание и връзки — без Wix.

## Before / After (PageSpeed mobile)

| | **Преди (Wix live)** | **След (този билд)** |
|---|---|---|
| Платформа | Wix Thunderbolt + React + lodash | Семантичен HTML + CSS + ~3 KB JS |
| HTML документ | ~800 KB | ~25 KB |
| Външни runtime CDN | React, Thunderbolt, GTM, Pixel… | Няма (шрифтове локално) |
| Мрежови заявки (lab) | ~228 | ~30–40 |
| Lighthouse Performance (mobile lab) | **~40–57** | цел **90+** |
| LCP (lab) | ~13.8 s | очаквано < 2.5 s |
| TBT (lab) | ~1.2 s | очаквано < 200 ms |

> Lab резултатите варират. Сравни сам: [PageSpeed Insights](https://pagespeed.web.dev/) — live URL vs. този билд на хостинг.

## Как да го видиш

Отвори `site/index.html` локално, или:

```bash
cd site
npx --yes serve .
```

## Какво е запазено

- Визия / цветова гама (лилаво + teal)
- Текстове, услуги, екип, клиенти, контакти
- Външни линкове (блог, клиенти, социални мрежи)
- JSON-LD: Organization, knowsAbout, Services, Person, Review, FAQPage
- Локални шрифтове (Commissioner), WebP/AVIF ассети

## Структура

```
site/
  index.html
  css/
  js/
  assets/images/
  assets/fonts/
```

## Бележка

Това е performance demo / алтернативна имплементация. Оригиналният live сайт е на Wix.
