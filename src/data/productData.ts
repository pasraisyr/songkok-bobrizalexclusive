// Product data and assets configurations
import labelImg from '../assets/label-datukbandar.jpeg';
import modelImg from '../assets/model1.jpeg';
import songkokDbImg from '../assets/songkok-datukbandar.jpeg';
import songkokDb2Img from '../assets/songkok-db2.jpeg';
import sulamanLogoImg from '../assets/sulaman-logo-datukbandar.jpeg';

export const sizes = ["21", "21 ¼", "21 ½", "21 ¾", "22", "22 ¼", "22 ½", "22 ¾", "23", "23 ¼", "23 ½"];

export const heights = ["3 inci", "3 ½ inci", "4 inci (Standard)", "4 ½ inci"];

export const productImages = [
  { src: songkokDbImg, label: 'Pandangan Hadapan' },
  { src: songkokDb2Img, label: 'Kekemasan Sisi' },
  { src: sulamanLogoImg, label: 'Sulaman Emas' },
  { src: labelImg, label: 'Label Datuk Bandar' },
  { src: modelImg, label: 'Kekemasan Dalam' }
];

export const faqItems = [
  {
    q: "Berapa lamakah tempoh pembuatan Songkok Datuk Bandar ini?",
    a: "Setiap Songkok Datuk Bandar adalah buatan tangan sepenuhnya (fully handmade) demi menjaga kualiti dan kekemasan. Tempoh pembuatan mengambil masa 2 hingga 3 hari bekerja sebelum sedia untuk dipos atau diambil sendiri di kedai kami."
  },
  {
    q: "Kedai fizikal Bob Riezal Exclusive terletak di mana?",
    a: "Kedai kami beroperasi di Kompleks Pekan Rabu, Alor Setar, Kedah. Alamat penuh: 1A / 8 Kompleks Pekan Rabu, Jalan Tunku Ibrahim, 05000 Alor Setar Kedah. Sila singgah jika anda berada berdekatan!"
  },
  {
    q: "Bagaimanakah cara mengukur saiz kepala dengan betul?",
    a: "Anda boleh menggunakan pita pengukur dalam unit inci. Ukur lilitan kepala di bahagian atas dahi melintasi atas telinga. Rujuk butang 'Panduan Ukur Saiz' di bahagian konfigurasi produk untuk jadual saiz lengkap."
  },
  {
    q: "Bolehkah saya membuat pertukaran jika saiz yang diterima tidak muat?",
    a: "Boleh. Polisi kami membenarkan penukaran saiz dalam tempoh 3 hari selepas tempahan diterima, dengan syarat songkok masih berada dalam keadaan asal (belum dipakai untuk kegunaan harian, tag jenama masih ada, dan tidak rosak). Kos pengeposan ditanggung oleh pelanggan."
  },
  {
    q: "Adakah songkok ini menggunakan baldu bermutu tinggi?",
    a: "Ya, kami menggunakan kain baldu VIP gred tinggi yang diimport khas. Material ini mempunyai tekstur yang sangat halus, warna hitam pekat yang tidak luntur, serta tidak mudah berbulu atau berhabuk berbanding baldu biasa."
  }
];

export const testimonials = [
  {
    text: '"Jahitan songkok dari Bob Riezal ini memang sangat kemas. Baldu lembut dan nampak sangat segak/eksklusif bila saya pakai ke majlis-majlis rasmi negeri. Terbaik!"',
    name: "Dato' Ahmad Faisal",
    title: "Alor Setar, Kedah"
  },
  {
    text: '"Memang beza buatan tangan Bob Riezal berbanding songkok pasaran biasa. Terletak elok di atas kepala, tak berpeluh dan tiada tekanan di bahagian dahi. Selesai dipakai lama."',
    name: "Tuan Haji Azhar",
    title: "Kepala Batas, Pulau Pinang"
  },
  {
    text: '"Sangat berpuas hati dengan layanan mesra pihak Bob Riezal Pekan Rabu. Pembikinan songkok disiapkan tepat pada waktunya dan kotak pembungkusan sangat premium sesuai dibuat hadiah."',
    name: "Encik Kamaruddin",
    title: "Sungai Petani, Kedah"
  }
];
