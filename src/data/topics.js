// Satu sumber data untuk sidebar, beranda, dan pin di diagram beranda.
// "info" muncul di kartu dan tooltip saat pin di-hover.
export const topics = [
  {
    slug: 'keyboard',
    name: 'Keyboard',
    icon: '⌨️',
    info: 'Susunan tombol, jenis switch, dan keycaps',
    pin: { x: 30, y: 60 },
  },
  {
    slug: 'mouse',
    name: 'Mouse',
    icon: '🖱️',
    info: 'Sensor, bentuk genggaman, dan koneksi',
    pin: { x: 70, y: 55 },
  },
  {
    slug: 'speaker',
    name: 'Speaker',
    icon: '🔊',
    info: 'Konfigurasi, daya, dan koneksi',
    pin: { x: 15, y: 35 },
  },
  {
    slug: 'earphone',
    name: 'Earphone',
    icon: '🎧',
    info: 'Tipe, driver, dan codec Bluetooth',
    pin: { x: 85, y: 35 },
  },
]