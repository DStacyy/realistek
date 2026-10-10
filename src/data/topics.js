// Satu sumber data untuk sidebar, homepage, dan pin di diagram home.
// "info" muncul di tooltip saat pin di-hover.
export const topics = [
  {
    slug: 'keyboard',
    name: 'Keyboard',
    icon: '⌨️',
    info: 'Layout, switch, dan keycaps',
    pin: { x: 30, y: 60 },
  },
  {
    slug: 'mouse',
    name: 'Mouse',
    icon: '🖱️',
    info: 'Sensor, bentuk, dan koneksi',
    pin: { x: 70, y: 55 },
  },
  {
    slug: 'speaker',
    name: 'Speaker',
    icon: '🔊',
    info: 'Konfigurasi, daya, dan driver',
    pin: { x: 15, y: 35 },
  },
  {
    slug: 'earphone',
    name: 'Earphone',
    icon: '🎧',
    info: 'Tipe, driver, dan codec',
    pin: { x: 85, y: 35 },
  },
]