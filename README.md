# Netkurum — Tanıtım Sitesi Arayüz Yenilemesi

[Netkurum](https://netkurum.com) PDKS ve insan kaynakları platformunun tanıtım
sitesi için hazırladığım arayüz yenileme (redesign) çalışması. Next.js App Router
üzerinde, harici bir UI kütüphanesi kullanmadan, **CSS Modules** ile sıfırdan
kurulmuş bir bileşen seti içerir.

> **Lisans ve haklar:** Bu depo özel mülkiyettir, açık kaynak değildir.
> Netkurum markası, ürünü ve metin içeriği **Karatsoft Teknoloji**'ye aittir;
> depo yalnızca arayüz çalışmasını barındırır. Ayrıntı için [LICENSE](LICENSE).

## Kapsam

Tek sayfalık bir açılış ekranı değil, hukuki sayfalar dahil eksiksiz bir
kurumsal site yapısı:

| Bölüm | Sayfalar |
|---|---|
| **Pazarlama** | Ana sayfa, Özellikler, Hakkımızda, Blog, İletişim, SSS |
| **Destek** | Destek ve İndirmeler |
| **Hukuki** | Gizlilik Politikası, Şartlar ve Koşullar, Mesafeli Satış Sözleşmesi, Teslimat ve İade |

16 bileşen: `Hero`, `Navbar`, `Features`, `FeatureShowcase`, `InteractiveFeatures`,
`Capabilities`, `Benefits`, `Pricing`, `Stats`, `Testimonials`, `Partners`,
`TrustSection`, `FAQ`, `CTA`, `SimplePage`, `Footer`.

## Teknoloji yığını

- **Next.js 16** (App Router) · **React 19** · **TypeScript** (strict)
- **CSS Modules** — bileşen başına kapsamlı stil, UI kütüphanesi bağımlılığı yok
- **Statik üretim** — 14 sayfanın tamamı derleme sırasında prerender edilir
- Toplam çalışma zamanı bağımlılığı: **3** (`next`, `react`, `react-dom`)

## Kurulum

Gereksinim: **Node.js 22+**

```bash
npm install
```

```bash
npm run dev
```

`http://localhost:3000` adresini açın.

## Komutlar

| Komut | Açıklama |
|---|---|
| `npm run dev` | Geliştirme sunucusu |
| `npm run build` | Üretim derlemesi (14 sayfa statik) |
| `npm start` | Üretim sunucusu |
| `npm run lint` | ESLint |
| `npm run typecheck` | `tsc --noEmit` |

## Proje yapısı

```
src/
  app/
    layout.tsx              Kök yerleşim ve metadata
    page.tsx                Ana sayfa
    ozellikler/             Özellikler
    hakkimizda/             Hakkımızda
    blog/                   Blog listesi
    iletisim/               İletişim
    sss/                    Sıkça sorulan sorular
    destek-ve-indirmeler/   Destek ve indirmeler
    *-politikasi/ ...       Hukuki sayfalar
  components/               16 bileşen, her biri kendi .module.css dosyasıyla
```

## Notlar

- Bileşenler bir tasarım sistemi kütüphanesine bağlı değildir; renk, tipografi ve
  boşluk ölçekleri `globals.css` içinde tanımlıdır.
- Sitedeki istatistik ve referans metinleri (ör. "500+ şirket") **ürünün kendi
  pazarlama içeriğinden** alınmıştır, bu çalışmaya ait iddialar değildir.
- CI, her push ve pull request'te lint, tip kontrolü ve derlemeyi çalıştırır —
  bkz. [`.github/workflows/ci.yml`](.github/workflows/ci.yml).
