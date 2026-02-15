# Repository Review & Roadmap Eksekusi - indra87g

## 1. Executive Summary
1.  **Struktur Solid**: Dasar proyek menggunakan Astro 5 dengan Tailwind CSS sudah sangat baik untuk performa dan SEO.
2.  **Masalah Validitas HTML**: Terdapat nested `<head>` tags di layout utama yang dapat mengganggu parsing SEO dan aksesibilitas.
3.  **Konten Placeholder**: Masih terdapat teks "Lorem ipsum" di file konfigurasi dan halaman CV.
4.  **Fitur Paginasi Patah**: Rute `[...page].astro` sudah didefinisikan namun tidak menggunakan data terpaginasi untuk render.
5.  **Giscus Belum Merata**: Fitur komentar baru tersedia di Blog, belum ada di Project.
6.  **Metadata SEO Minim**: Deskripsi default tidak deskriptif dan belum ada OG Image default.
7.  **Legacy Code**: `index.astro` masih menggunakan `Astro.glob` padahal `src/content` sudah diimplementasikan.
8.  **Peluang RSS**: Belum ada feed RSS untuk mendistribusikan konten secara otomatis.
9.  **Potensi Showcase**: Rencana halaman `/showcase` sangat bagus untuk portofolio visual.
10. **Kesiapan Testing**: Framework Playwright sudah ada, namun cakupan test masih sangat rendah.

## 2. Audit Findings Table

| Temuan | Dampak | Effort | Prioritas | Rekomendasi |
| :--- | :--- | :--- | :--- | :--- |
| Nested `<head>` tags | Sedang | Sangat Rendah | **High** | Refactor `BaseHead.astro` agar tidak membungkus elemen dalam tag `<head>`. |
| Placeholder "Lorem ipsum" | Tinggi | Sangat Rendah | **High** | Update `src/config.ts` dan `src/pages/cv.astro` dengan data asli. |
| Paginasi tidak berfungsi | Rendah | Rendah | **Medium** | Implementasikan `page` props dari Astro paginate di halaman list. |
| Giscus absen di Project | Sedang | Rendah | **Medium** | Tambahkan komponen Giscus ke `src/layouts/Project.astro`. |
| Penggunaan `Astro.glob` | Rendah | Rendah | **Low** | Migrasi ke `getCollection` di `index.astro` agar konsisten. |
| Metadata SEO minim | Tinggi | Rendah | **High** | Tambahkan default OG image dan deskripsi yang bermakna. |
| Testing minimal | Sedang | Sedang | **Medium** | Tambahkan E2E test untuk flow navigasi dan dark mode. |

## 3. Prioritized Backlog

| ID | User Story | Ruang Lingkup Teknis | Acceptance Criteria | Effort |
| :--- | :--- | :--- | :--- | :--- |
| **CORE-01** | Sebagai user, saya ingin HTML web valid agar SEO & aksesibilitas optimal. | Fix nested `<head>`, update placeholder content. | W3C validator pass, tidak ada "Lorem ipsum". | S |
| **SEO-01** | Sebagai user, saya ingin link web terlihat profesional saat dishare. | Tambahkan OG Image & Twitter Card di `BaseHead.astro`. | Link preview muncul dengan image & deskripsi benar. | S |
| **FEAT-01** | Sebagai pembaca, saya ingin berkomentar di halaman project. | Integrasi Giscus di `Project.astro`. | Kolom komentar muncul di bawah detail project. | S |
| **FEAT-02** | Sebagai pengikut, saya ingin update via RSS feed. | Implementasi `@astrojs/rss`. | `/rss.xml` dapat diakses dan valid. | S |
| **FEAT-03** | Sebagai visitor, saya ingin melihat demo visual karya di `/showcase`. | Buat halaman `/showcase`, komponen gallery. | Halaman `/showcase` aktif dengan filter kategori. | M |
| **TEST-01** | Sebagai dev, saya ingin web stabil saat ada update. | Tambahkan Playwright tests. | Test coverage mencakup flow utama & theme switch. | M |

## 4. Roadmap 30/60/90

### 30 Hari: Foundation & Stability (Quick Wins)
- Fix HTML validity (Nested head tags).
- Update metadata & placeholder content.
- Fix pagination logic di Blog & Project.
- Tambahkan Giscus ke halaman Project.
- Refactor `index.astro` ke `getCollection`.

### 60 Hari: Engagement & Distribution
- Implementasi RSS Feed.
- Penambahan unit/E2E testing dasar.
- Optimasi aset (Image & Fonts).
- Perbaikan kontras warna untuk aksesibilitas (WCAG).

### 90 Hari: Scaling & Visual Showcase
- Implementasi halaman `/showcase`.
- Strategi migrasi ke Headless CMS (misal: Contentful atau Decap CMS).
- Penambahan transisi halaman (Astro View Transitions).

## 5. Implementasi Opsi

### Opsi A: Lean (Cepat & Esensial)
- Fokus hanya pada perbaikan bug validitas (Nested head), update metadata, dan teks placeholder.
- **Goal**: Web terlihat profesional dan "benar" secara teknis dalam waktu singkat.

### Opsi B: Balanced (Rekomendasi)
- Opsi Lean + Perbaikan paginasi + RSS Feed + Giscus di Project.
- **Goal**: Meningkatkan pengalaman pengguna dan distribusi konten tanpa perubahan arsitektur besar.

### Opsi C: Ambitious (Jangka Panjang)
- Opsi Balanced + Halaman Showcase + Full Testing + CMS Migration.
- **Goal**: Menjadikan website ini sebagai platform portofolio yang sangat skalabel dan teruji.

## 6. Rekomendasi Final
Saya merekomendasikan **Opsi B (Balanced)** sebagai langkah awal. Hal ini dikarenakan perbaikan paginasi dan Giscus memiliki ROI yang tinggi dengan effort minimal. Setelah pondasi stabil, pengembangan dapat dilanjutkan ke arah Opsi C (Showcase) secara bertahap.
