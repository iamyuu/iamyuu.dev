---
layout: "../../layouts/article-post.astro"
title: "Multimedia Networking"
publishDate: 2022-03-13
tags: ["network"]
---

Multimedia networking secara definisi merupakan aplikasi jaringan yang menggunakan audio atau video, contohnya seperti YouTube dan Netflix.

Aplikasi elastis tradisional seperti email toleran terhadap penundaan tetapi tidak toleran terhadap kerugian, sementara aplikasi multimedia dapat mentolerir kerugian tapi tidak dengan delay.

## Tipe-tipe multimedia networking

### Streaming audio/video yang tersimpan

#### Fitur

- Media sudah direkam sebelumnya.
- Streaming video yang disimpan berisi komponen video dan audio.

#### Penyimpanan

- Konten multimedia disimpan di server, mungkin dalam penyandian yang berbeda.
- Konten sering ditempatkan di jaringan distribusi konten (CDN) , daripada di pusat data tunggal, untuk akses yang lebih cepat.
- Dengan aplikasi streaming P2P, rekan-rekan memegang potongan konten yang berbeda dan mereka secara kolektif membentuk "server". Potongan datang dari rekan-rekan yang berbeda mempercepat berbagi.

#### Kebutuhan

- Streaming: video diputar setelah beberapa detik dari awal unduhan.
- Interactivity: jeda, reposisi maju, reposisi mundur, maju cepat (merespon dalam beberapa detik).
- Continuous: Saat dimulai, itu berlangsung sesuai dengan waktu asli rekaman.

### Streaming audio/video langsung

Streaming langsung berasal dari sumber konten seperti kamera video dan mikrofon. Ini adalah streaming langsung yang berasal dari sumber konten yang tersedia pada saat yang sama saat peristiwa yang difilmkan terjadi. Mirip dengan siaran radio dan TV tradisional kecuali transmisinya ada di Internet.

#### Fitur

##### Aplikasi

- Internet Radio.
- Siaran TV.
- Acara olahraga langsung.

##### Streaming (seperti halnya streaming multimedia tersimpan)

- Playback buffer.
- Pemutaran dapat tertinggal puluhan detik setelah transmisi.
- Batasan penundaan lebih ketat daripada streaming video yang disimpan tetapi kurang dari suara/video percakapan.

##### Interaktivitas

- Maju cepat (tidak mungkin) TAPI Mundur, jeda (mungkin).

##### Kontinuitas

- Throughput rata-rata lebih besar dari kecepatan video yang diinginkan.
- Koreksi kesalahan maju (FEC) lebih efektif daripada pemulihan kerugian reaktif.

#### Distribusi

Distribusi live audio/video ke banyak receiver dapat dilakukan melalui:

- Pendekatan lapisan jaringan: beberapa aliran unicast, aliran multicast IP
- Pendekatan lapisan aplikasi: multicast menggunakan jaringan P2P atau CDN.

### Suara dan video percakapan melalui Internet

Voice and Video over Internet (VoIP) memiliki karakteristik sebagai berikut:

- Suara digital dikemas dalam paket dan diangkut antara 2 atau lebih peserta panggilan VoIP
- Sangat sensitif terhadap delay (<= 150ms ideal & > 400ms tidak dapat diterima)
- Toleransi Kerugian, gangguan sesekali dalam pemutaran ulang video/audio, skema pemulihan kerugian dan penyembunyian kesalahan: FEC, interleaving

#### Penyimpanan

#### Requirements

Referensi:

- https://www.inf.ed.ac.uk/teaching/courses/comn/lecture-notes/lec14.pdf
- https://www.inf.ed.ac.uk/teaching/courses/comn/lecture-notes/lec15.pdf
