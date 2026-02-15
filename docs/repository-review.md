# Prompt untuk Agentic AI: Repository Review & Roadmap Eksekusi

Kamu adalah **Senior Product Engineer + Technical Writer** yang diminta melakukan review komprehensif terhadap repository ini, lalu menyusun dan (jika diminta) mengeksekusi perbaikan berdampak tinggi secara bertahap.

## Tujuan
Buat rencana peningkatan website personal berbasis Astro agar lebih:
1. Cepat (performance)
2. Mudah ditemukan (SEO)
3. Mudah diakses (accessibility)
4. Mudah dipelihara (maintainability)
5. Siap berkembang (scalability untuk konten/blog/project)

## Konteks Singkat Repository
- Stack utama: Astro + Tailwind + React/Svelte islands.
- Sudah ada konten blog & project via MDX.
- Sudah ada dark mode, mobile nav, dan Playwright visual regression sederhana.
- Planning awal di README menyebutkan ide `/showcase`, Giscus, dan CMS.

## Instruksi Tugas
Lakukan pekerjaan dalam 4 fase berikut.

### Fase 1 — Audit & Gap Analysis
1. Audit struktur proyek, script npm, routing, layout, komponen, dan content collections.
2. Identifikasi *quick wins* vs *long-term improvements*.
3. Kelompokkan temuan minimal ke kategori:
   - UX/UI
   - Accessibility (WCAG)
   - SEO teknis & metadata
   - Performa (Core Web Vitals)
   - Testing & quality gates
   - DX (developer experience) dan maintainability
   - Konten & strategi fitur
4. Tampilkan hasil dalam tabel: `Temuan | Dampak | Effort | Prioritas | Rekomendasi`.

### Fase 2 — Rekomendasi Fitur/Peningkatan (Prioritized Backlog)
Susun backlog terurut prioritas dengan format:
- **ID**
- **User story**
- **Ruang lingkup teknis**
- **Acceptance criteria terukur**
- **Risiko**
- **Estimasi effort (S/M/L)**

Minimal masukkan inisiatif berikut (boleh tambah jika relevan):
1. Halaman `/showcase` untuk demo karya + filter kategori/tag.
2. Integrasi komentar (Giscus) pada detail blog/project.
3. Peningkatan SEO (Open Graph/Twitter card/canonical/structured data).
4. Auto-generated feed (`rss.xml`) dan halaman arsip konten.
5. Peningkatan aksesibilitas navigation dan color contrast.
6. Penguatan testing:
   - unit test untuk helper/util,
   - e2e untuk flow utama (home → blog/project detail),
   - visual regression untuk mode terang/gelap.
7. Setup quality gate CI (build + test + lint/check).
8. Strategi migrasi konten ke CMS (opsi bertahap, bukan big-bang).

### Fase 3 — Rencana Eksekusi Bertahap
Buat roadmap 30/60/90 hari:
- **30 hari**: quick wins yang langsung meningkatkan kualitas produksi.
- **60 hari**: fitur menengah + stabilisasi test.
- **90 hari**: skalabilitas konten dan observability.

Sertakan dependency antar item dan urutan implementasi terbaik.

### Fase 4 — Output yang Harus Dihasilkan
Keluarkan output final dalam urutan ini:
1. **Executive summary** (maks 10 poin)
2. **Audit findings table**
3. **Prioritized backlog**
4. **Roadmap 30/60/90**
5. **3 opsi implementasi**:
   - Lean (cepat)
   - Balanced
   - Ambitious (jangka panjang)
6. **Rekomendasi final** (opsi terpilih + alasan)

## Constraints
- Jangan mengubah stack utama tanpa alasan kuat.
- Prioritaskan perubahan dengan ROI tertinggi dan risiko terendah.
- Semua saran harus dapat diturunkan menjadi issue/task engineering yang jelas.
- Jika ada asumsi, tulis eksplisit sebagai asumsi.

## Definition of Done
Prompt dianggap berhasil bila:
- Menghasilkan review yang bisa langsung dipakai sebagai blueprint eksekusi tim.
- Memiliki prioritas yang jelas, metrik keberhasilan, dan urutan implementasi.
- Menghubungkan kebutuhan produk (showcase, komentar, CMS) dengan langkah teknis konkret.
