// Isi lengkap setiap topik. Kunci objeknya harus sama dengan slug di topics.js
export const topicDetails = {
  keyboard: {
    title: 'Keyboard',
    subtitle: 'Papan ketik, dari layout hingga keycaps',
    paragraph: 'Keyboard adalah perangkat input utama. Pilihan layout, switch, dan keycaps memengaruhi kenyamanan dan suara saat mengetik.',
    sections: [
      {
        id: 'layout',
        title: 'Layout',
        body: 'Layout menentukan ukuran dan susunan tombol. ANSI dan ISO berbeda pada bentuk tombol Enter dan tata letak simbol. Varian 60%, 75%, dan TKL menghilangkan sebagian tombol untuk menghemat tempat.',
      },
      {
        id: 'switch',
        title: 'Switch',
        body: 'Switch adalah mekanisme di bawah setiap tombol. Linear terasa mulus tanpa benjolan, tactile memberi benjolan saat ditekan, dan clicky menghasilkan bunyi klik yang jelas.',
      },
      {
        id: 'keycaps',
        title: 'Keycaps',
        body: 'Keycaps adalah tutup tombol yang terlihat dan terasa di jari. Perbedaan utama ada pada profil (tinggi dan bentuk permukaan) serta bahan, di mana PBT lebih tahan aus dibanding ABS.',
      },
    ],
    diagram: {
      image: '/img/keyboard-exploded.webp',
      caption: 'Bagian-bagian keyboard. Klik titik untuk melihat penjelasannya.',
      points: [
        { x: 30, y: 45, label: 'Switch', sectionId: 'switch' },
        { x: 70, y: 30, label: 'Keycaps', sectionId: 'keycaps' },
        { x: 50, y: 80, label: 'Layout', sectionId: 'layout' },
      ],
    },
    recommendations: [
      {
        tier: 'Hemat',
        range: 'di bawah Rp 500 ribu',
        items: [
          { name: 'Redragon K552', note: 'TKL dengan harga terjangkau, cocok untuk memulai' },
          { name: 'Keyboard tipe membran', note: 'Lebih murah, tetapi tidak memakai switch mekanik' },
        ],
      },
      {
        tier: 'Menengah',
        range: 'Rp 500 ribu sampai Rp 1,5 juta',
        items: [
          { name: 'Keychron K2', note: 'Ukuran 75% yang ringkas dan bisa dipasangi switch berbeda' },
          { name: 'Keychron Q1', note: 'Full-size dengan bodi aluminium yang kokoh' },
        ],
      },
      {
        tier: 'Premium',
        range: 'di atas Rp 1,5 juta',
        items: [
          { name: 'Keyboard hot-swap kelas atas', note: 'Switch bisa diganti tanpa solder' },
          { name: 'Keyboard bodi aluminium dengan gasket', note: 'Suara lebih dalam dan nyaman saat diketik' },
        ],
      },
    ],
  },

  mouse: {
    title: 'Mouse',
    subtitle: 'Sensor, bentuk, dan koneksi yang memengaruhi kenyamanan',
    paragraph: 'Mouse menerjemahkan gerakan tanganmu menjadi gerakan kursor. Sensor, bentuk, dan jenis koneksi menentukan seberapa presisi dan nyaman pemakaiannya.',
    sections: [
      {
        id: 'sensor',
        title: 'Sensor dan DPI',
        body: 'Sensor membaca gerakan mouse di atas permukaan. DPI (dots per inch) menunjukkan seberapa jauh kursor bergerak untuk setiap inci gerakan mouse. DPI tinggi tidak selalu lebih baik, karena kursor jadi sulit dikontrol dengan presisi.',
      },
      {
        id: 'bentuk',
        title: 'Bentuk dan genggaman',
        body: 'Ada tiga gaya genggaman. Palm berarti seluruh telapak menempel di mouse, claw berarti jari melengkung dengan ujung jari menekan tombol, dan fingertip berarti hanya ujung jari yang menyentuh mouse. Pilih yang sesuai dengan ukuran tangan.',
      },
      {
        id: 'koneksi',
        title: 'Kabel, wireless, dan Bluetooth',
        body: 'Mouse kabel tidak perlu baterai dan latensinya rendah. Wireless 2.4GHz memakai dongle USB dan umumnya lebih responsif dibanding Bluetooth. Bluetooth paling praktis untuk dibawa, tetapi bisa sedikit lebih lambat.',
      },
      {
        id: 'polling',
        title: 'Polling rate',
        body: 'Polling rate adalah seberapa sering mouse mengirim data posisinya ke komputer, diukur dalam Hz. 1000 Hz adalah standar yang umum dipakai. Angka di atas itu baru terasa jika kamu bermain game yang sangat kompetitif.',
      },
    ],
    diagram: {
      image: '/img/mouse-exploded.webp',
      caption: 'Bagian-bagian mouse. Klik titik untuk melihat penjelasannya.',
      points: [
        { x: 40, y: 50, label: 'Sensor', sectionId: 'sensor' },
        { x: 60, y: 30, label: 'Bentuk', sectionId: 'bentuk' },
        { x: 50, y: 75, label: 'Koneksi', sectionId: 'koneksi' },
      ],
    },
    recommendations: [
      {
        tier: 'Hemat',
        range: 'di bawah Rp 500 ribu',
        items: [
          { name: 'Logitech G102', note: 'Mouse kabel ringan dengan bentuk yang sederhana' },
          { name: 'Mouse kabel generik berkualitas', note: 'Cukup untuk pemakaian harian dan kantor' },
        ],
      },
      {
        tier: 'Menengah',
        range: 'Rp 500 ribu sampai Rp 1,5 juta',
        items: [
          { name: 'Logitech G502 X', note: 'Bentuk klasik dengan banyak tombol' },
          { name: 'Logitech MX Master', note: 'Nyaman untuk pemakaian lama dan multitasking' },
        ],
      },
      {
        tier: 'Premium',
        range: 'di atas Rp 1,5 juta',
        items: [
          { name: 'Logitech G Pro X Superlight', note: 'Sangat ringan, populer di kalangan pemain kompetitif' },
          { name: 'Mouse wireless kelas atas', note: 'Sensor dan koneksi yang sangat stabil' },
        ],
      },
    ],
  },

  speaker: {
    title: 'Speaker',
    subtitle: 'Konfigurasi, daya, dan koneksi',
    paragraph: 'Speaker menentukan kualitas suara yang kamu dengar dari komputer. Jumlah unit, daya, dan jenis koneksi adalah tiga hal utama yang perlu dipahami.',
    sections: [
      {
        id: 'konfigurasi',
        title: 'Konfigurasi (2.0, 2.1, 5.1)',
        body: 'Angka pertama menunjukkan jumlah speaker satelit, dan angka kedua menunjukkan ada atau tidaknya subwoofer. 2.0 berarti dua speaker tanpa subwoofer, 2.1 berarti dua speaker dengan subwoofer, dan 5.1 berarti lima speaker plus subwoofer untuk suara surround.',
      },
      {
        id: 'daya',
        title: 'Daya, RMS, dan impedansi',
        body: 'Daya (watt) menunjukkan seberapa kuat speaker bisa menghasilkan suara. Pilih angka RMS, bukan peak, karena RMS menggambarkan daya kerja yang sebenarnya. Impedansi (ohm) menunjukkan seberapa sulit speaker digerakkan, dan biasanya tidak perlu terlalu dipikirkan untuk speaker desktop.',
      },
      {
        id: 'driver',
        title: 'Driver dan subwoofer',
        body: 'Driver adalah unit penghasil suara di dalam speaker. Woofer menangani frekuensi rendah, sedangkan tweeter menangani frekuensi tinggi. Subwoofer menambah bass yang dalam, cocok untuk musik dan film.',
      },
      {
        id: 'koneksi',
        title: 'Jack, USB, dan Bluetooth',
        body: 'Jack 3,5 mm adalah koneksi analog yang paling umum dan kompatibel dengan hampir semua perangkat. USB memberi suara digital dan kadang sudah dilengkapi DAC sendiri. Bluetooth praktis tanpa kabel, tetapi kualitas suaranya bergantung pada codec yang didukung.',
      },
    ],
    diagram: {
      image: '/img/speaker-exploded.webp',
      caption: 'Bagian-bagian speaker. Klik titik untuk melihat penjelasannya.',
      points: [
        { x: 30, y: 50, label: 'Driver', sectionId: 'driver' },
        { x: 70, y: 40, label: 'Daya', sectionId: 'daya' },
        { x: 50, y: 80, label: 'Koneksi', sectionId: 'koneksi' },
      ],
    },
    recommendations: [
      {
        tier: 'Hemat',
        range: 'di bawah Rp 500 ribu',
        items: [
          { name: 'Edifier R1010BT', note: 'Speaker 2.0 dengan koneksi Bluetooth' },
          { name: 'Speaker USB kecil', note: 'Praktis untuk meja kerja dengan ruang terbatas' },
        ],
      },
      {
        tier: 'Menengah',
        range: 'Rp 500 ribu sampai Rp 1,5 juta',
        items: [
          { name: 'Edifier R1280DB', note: 'Speaker 2.0 dengan bass yang cukup kuat dan banyak input' },
          { name: 'Speaker 2.1 dengan subwoofer', note: 'Bass lebih dalam untuk musik dan film' },
        ],
      },
      {
        tier: 'Premium',
        range: 'di atas Rp 1,5 juta',
        items: [
          { name: 'Audioengine A2+', note: 'Speaker aktif dengan kualitas suara yang detail' },
          { name: 'Speaker studio monitor', note: 'Suara yang akurat untuk mendengarkan dan mengedit audio' },
        ],
      },
    ],
  },

  earphone: {
    title: 'Earphone',
    subtitle: 'Tipe, driver, dan koneksi yang memengaruhi suara',
    paragraph: 'Earphone adalah perangkat yang paling dekat dengan telingamu. Tipe, cara kerja driver, dan codec Bluetooth menentukan kenyamanan dan kualitas suara.',
    sections: [
      {
        id: 'tipe',
        title: 'Tipe (IEM, TWS, over-ear)',
        body: 'IEM (in-ear monitor) masuk ke dalam telinga dan mengisolasi suara luar dengan baik. TWS (true wireless) adalah earphone nirkabel tanpa kabel penghubung antar sisi. Over-ear adalah headphone yang menutupi seluruh telinga dan biasanya paling nyaman untuk waktu lama.',
      },
      {
        id: 'driver',
        title: 'Driver dinamis vs balanced armature',
        body: 'Driver dinamis mirip speaker kecil yang menggerakkan membran untuk menghasilkan suara, dan umumnya menghasilkan bass yang kuat. Balanced armature memakai komponen kecil untuk setiap rentang frekuensi, sehingga detailnya lebih tajam, tetapi bass-nya bisa terasa kurang tebal.',
      },
      {
        id: 'anc',
        title: 'ANC (Active Noise Cancelling)',
        body: 'ANC membaca suara lingkungan dengan mikrofon, lalu menghasilkan gelombang kebalikannya untuk saling meniadakan. Hasilnya paling efektif untuk suara berfrekuensi rendah seperti deru kendaraan atau kipas.',
      },
      {
        id: 'codec',
        title: 'Codec Bluetooth',
        body: 'Codec adalah cara data audio dikompresi saat dikirim melalui Bluetooth. SBC adalah codec standar yang dasar. AAC umum di perangkat Apple, sedangkan aptX dan LDAC menawarkan kualitas lebih baik jika perangkat dan earphone sama-sama mendukungnya.',
      },
    ],
    diagram: {
      image: '/img/earphone-exploded.webp',
      caption: 'Bagian-bagian earphone. Klik titik untuk melihat penjelasannya.',
      points: [
        { x: 35, y: 40, label: 'Driver', sectionId: 'driver' },
        { x: 65, y: 30, label: 'ANC', sectionId: 'anc' },
        { x: 50, y: 75, label: 'Codec', sectionId: 'codec' },
      ],
    },
    recommendations: [
      {
        tier: 'Hemat',
        range: 'di bawah Rp 500 ribu',
        items: [
          { name: 'Earphone kabel 3,5 mm', note: 'Tanpa baterai dan cukup untuk pemakaian harian' },
          { name: 'TWS dasar', note: 'Nirkabel dengan harga terjangkau' },
        ],
      },
      {
        tier: 'Menengah',
        range: 'Rp 500 ribu sampai Rp 1,5 juta',
        items: [
          { name: 'Soundcore Liberty 4 NC', note: 'TWS dengan ANC dan kualitas suara yang seimbang' },
          { name: 'Xiaomi Redmi Buds', note: 'Pilihan populer dengan harga ramah di kantong' },
        ],
      },
      {
        tier: 'Premium',
        range: 'di atas Rp 1,5 juta',
        items: [
          { name: 'Sony WF-1000XM5', note: 'ANC kuat dan suara yang detail' },
          { name: 'IEM dengan balanced armature', note: 'Detail suara yang tajam untuk mendengarkan musik serius' },
        ],
      },
    ],
  },
}