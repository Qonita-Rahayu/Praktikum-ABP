<div align="center">
  <br />
  <h1>LAPORAN PRAKTIKUM <br>APLIKASI BERBASIS PLATFORM</h1>
  <br />
  <h3>MODUL 4 <br> FLUTTER WIDGETS</h3>
  <br />
  <br />
  <img src="assets/logo.jpeg" alt="Logo" width="300">
  <br />
  <br />
  <br />
  <h3>Disusun Oleh :</h3>
  <p>
    <strong>Qonita Rahayu Atmi</strong><br>
    <strong>2311102128</strong><br>
    <strong>S1 IF-11-REG01</strong><br>
  </p>
  <br />
  <h3>Dosen Pengampu :</h3>
  <p>
    <strong>Dimas Fanny Hebrasianto Permadi, S.ST., M.Kom</strong>
  </p>
  <br />
  <h3>Asisten Praktikum :</h3>
  <p>
    <strong>Apri Pandu Wicaksono</strong><br>
    <strong>Rangga Pradarrell Fathi</strong><br>
  </p>
  <br />
  <h3>LABORATORIUM HIGH PERFORMANCE<br>FAKULTAS INFORMATIKA <br>TELKOM UNIVERSITY PURWOKERTO <br>2026</h3>
</div>

---

# A. Dasar Teori

- **Flutter** adalah SDK (Software Development Kit) UI open-source buatan Google yang digunakan untuk mengembangkan aplikasi lintas platform (Android, iOS, Web, Windows, macOS, Linux) dari satu basis kode (single codebase). Flutter menggunakan bahasa pemrograman **Dart**.
- **Widget** adalah konsep dasar dan inti dari pembuatan UI dalam Flutter. Segala sesuatu yang terlihat di layar aplikasi Flutter adalah Widget. Terdapat dua jenis widget utama: *StatelessWidget* (tidak memiliki state/perubahan data) dan *StatefulWidget* (memiliki state yang dapat berubah-ubah).
- **Container** merupakan widget praktis yang menggabungkan fitur widget dasar seperti *padding*, *margin*, *alignment*, dan *decoration* (seperti warna latar belakang, border, atau bayangan).
- **GridView** adalah widget scrollable yang menampilkan elemen dalam bentuk grid 2 dimensi (baris dan kolom).
- **ListView** adalah widget scrollable yang menampilkan daftar linear anak widget secara berurutan. Ini adalah widget list yang paling sering digunakan pada Flutter.
- **ListView.builder** adalah varian ListView yang membuat item widget secara dinamis (*on-demand*) saat akan ditampilkan di layar, sangat cocok untuk menampilkan array/data yang sangat banyak atau tidak terhingga panjangnya.
- **ListView.separated** hampir mirip dengan `ListView.builder`, namun memiliki konstruktor tambahan untuk membuat batas pemisah (separator) di antara masing-masing item list.
- **Stack** adalah widget yang memungkinkan beberapa anak widget saling tumpang tindih (*overlap*). Anak pertama yang diletakkan pada Stack akan berada di posisi paling bawah, dan anak berikutnya ditumpuk di atasnya.

---

# B. Soal

## Deskripsi Tugas

Buat 1 project Flutter yang menampilkan beberapa widget UI berikut:
- **Container** → kotak berwarna
- **GridView** → minimal 6 item (grid)
- **ListView** → 3 item (A, B, C)
- **ListView.builder** → list dari data array
- **ListView.separated** → list + garis pembatas
- **Stack** → tampilan bertumpuk (kotak / text)

Output yang harus dikumpulkan:
- Screenshot hasilnya
- Source code
- Penjelasan singkat tiap widget

## Instruksi & Penjelasan Implementasi

Proyek ini dikembangkan menggunakan framework Flutter. Komponen UI utama dibagi-bagi dengan memanfaatkan struktur layout standar Flutter yaitu `Scaffold` dan `SingleChildScrollView` sehingga keseluruhan komponen dapat di-scroll secara vertikal. Setiap widget diimplementasikan secara terstruktur dengan margin/spacing untuk memberikan pemisah visual yang rapi. Data yang dibutuhkan untuk pembuatan item ListView menggunakan array statis yang diproses ke dalam UI saat waktu *build*.

---

# C. Kode Program

## 1. `main.dart` — Source Code Implementasi Widget

```dart
import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Modul 4 Flutter',
      theme: ThemeData(
        colorScheme: ColorScheme.fromSeed(seedColor: Colors.deepPurple),
        useMaterial3: true,
      ),
      home: const Modul4Page(),
      debugShowCheckedModeBanner: false,
    );
  }
}

class Modul4Page extends StatelessWidget {
  const Modul4Page({super.key});

  @override
  Widget build(BuildContext context) {
    // Array data untuk ListView.builder
    final List<String> builderData = ['Data Array 1', 'Data Array 2', 'Data Array 3', 'Data Array 4'];

    // Array data untuk ListView.separated
    final List<String> separatedData = ['Apple', 'Banana', 'Cherry', 'Date'];

    return Scaffold(
      appBar: AppBar(
        title: const Text('Modul 4 - 2311102128'),
        backgroundColor: Theme.of(context).colorScheme.inversePrimary,
      ),
      body: SingleChildScrollView(
        child: Padding(
          padding: const EdgeInsets.all(16.0),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              // 1. Container (Kotak Berwarna)
              const Text('1. Container', style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold)),
              const SizedBox(height: 8),
              Container(
                height: 80,
                width: double.infinity,
                decoration: BoxDecoration(
                  color: Colors.blueAccent,
                  borderRadius: BorderRadius.circular(12),
                  boxShadow: const [
                    BoxShadow(color: Colors.black26, blurRadius: 4, offset: Offset(2, 2)),
                  ],
                ),
                alignment: Alignment.center,
                child: const Text(
                  'Ini adalah Container Berwarna',
                  style: TextStyle(color: Colors.white, fontSize: 16, fontWeight: FontWeight.bold),
                ),
              ),
              const SizedBox(height: 24),

              // 2. GridView (Minimal 6 Item)
              const Text('2. GridView (Minimal 6 item)', style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold)),
              const SizedBox(height: 8),
              SizedBox(
                height: 150, 
                child: GridView.count(
                  crossAxisCount: 3, 
                  crossAxisSpacing: 8,
                  mainAxisSpacing: 8,
                  childAspectRatio: 2.5,
                  physics: const NeverScrollableScrollPhysics(), 
                  children: List.generate(6, (index) {
                    return Container(
                      decoration: BoxDecoration(
                        color: Colors.teal[400],
                        borderRadius: BorderRadius.circular(8),
                      ),
                      alignment: Alignment.center,
                      child: Text('Grid ${index + 1}', style: const TextStyle(color: Colors.white, fontWeight: FontWeight.bold)),
                    );
                  }),
                ),
              ),
              const SizedBox(height: 16),

              // 3. ListView (3 Item A, B, C)
              const Text('3. ListView (3 Item: A, B, C)', style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold)),
              const SizedBox(height: 8),
              SizedBox(
                height: 180,
                child: ListView(
                  physics: const NeverScrollableScrollPhysics(),
                  children: const [
                    ListTile(leading: CircleAvatar(backgroundColor: Colors.orange, child: Text('A')), title: Text('Item A')),
                    ListTile(leading: CircleAvatar(backgroundColor: Colors.green, child: Text('B')), title: Text('Item B')),
                    ListTile(leading: CircleAvatar(backgroundColor: Colors.purple, child: Text('C')), title: Text('Item C')),
                  ],
                ),
              ),
              const SizedBox(height: 16),

              // 4. ListView.builder (List dari data array)
              const Text('4. ListView.builder', style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold)),
              const SizedBox(height: 8),
              SizedBox(
                height: 220,
                child: ListView.builder(
                  physics: const NeverScrollableScrollPhysics(),
                  itemCount: builderData.length,
                  itemBuilder: (context, index) {
                    return Card(
                      color: Colors.indigo[50],
                      child: Padding(
                        padding: const EdgeInsets.all(12.0),
                        child: Text(builderData[index], style: const TextStyle(fontWeight: FontWeight.w500)),
                      ),
                    );
                  },
                ),
              ),
              const SizedBox(height: 16),

              // 5. ListView.separated (List + garis pembatas)
              const Text('5. ListView.separated', style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold)),
              const SizedBox(height: 8),
              SizedBox(
                height: 240,
                child: ListView.separated(
                  physics: const NeverScrollableScrollPhysics(),
                  itemCount: separatedData.length,
                  separatorBuilder: (context, index) => const Divider(color: Colors.redAccent, thickness: 1.5),
                  itemBuilder: (context, index) {
                    return ListTile(
                      title: Text(separatedData[index]),
                      trailing: const Icon(Icons.arrow_forward_ios, size: 16, color: Colors.grey),
                    );
                  },
                ),
              ),
              const SizedBox(height: 16),

              // 6. Stack (Tampilan Bertumpuk)
              const Text('6. Stack', style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold)),
              const SizedBox(height: 8),
              Stack(
                alignment: Alignment.center,
                children: [
                  Container(
                    height: 150,
                    width: double.infinity,
                    decoration: BoxDecoration(
                      color: Colors.amber,
                      borderRadius: BorderRadius.circular(12),
                    ),
                  ),
                  Container(
                    height: 90,
                    width: 250,
                    decoration: BoxDecoration(
                      color: Colors.deepOrange,
                      borderRadius: BorderRadius.circular(8),
                    ),
                  ),
                  const Text(
                    'Teks di Atas Stack',
                    style: TextStyle(color: Colors.white, fontSize: 18, fontWeight: FontWeight.bold),
                  ),
                ],
              ),
              const SizedBox(height: 40),
            ],
          ),
        ),
      ),
    );
  }
}
```

**Penjelasan Singkat Tiap Widget:**
1. **Container**: Diimplementasikan sebagai elemen dengan lebar *full* dan tinggi `80px` menggunakan `BoxDecoration` untuk memberikan warna (`blueAccent`), sudut tumpul (`borderRadius`), dan efek bayangan (*box shadow*).
2. **GridView**: Digunakan properti `GridView.count` dengan `crossAxisCount: 3` (3 kolom). Sebanyak 6 buah `Container` (berfungsi sebagai grid item) di-*generate* secara dinamis dengan metode `List.generate(6, ...)` sehingga memenuhi kriteria grid list berjumlah 6.
3. **ListView**: Menampilkan struktur list statis secara manual dengan komponen list standar `ListTile` berturut-turut untuk merepresentasikan item A, item B, dan item C, yang masing-masing disertai dengan widget `CircleAvatar`.
4. **ListView.builder**: Membaca array lokal `builderData` dengan memanfaatkan parameter `itemBuilder` untuk membungkus data teks pada masing-masing index ke dalam *Cards*. Widget ini menampilkan item list seiring ketersediaan panjang data dari array tersebut (`itemCount: builderData.length`).
5. **ListView.separated**: Membaca array `separatedData`, dan secara khusus mengimplementasikan parameter wajib tambahannya yakni `separatorBuilder`. Pada baris ini digunakan `Divider` tebal berwarna merah untuk memberikan garis yang tegas antar baris item yang dirender.
6. **Stack**: Menggabungkan tiga elemen utama, di antaranya satu `Container` besar berwarna kuning (*amber*), `Container` lebih kecil berwarna jingga gelap (*deepOrange*), serta satu widget `Text` berwarna putih di urutan teratas yang menimpa lapis warna lainnya secara berpusat (`alignment: Alignment.center`).

---

# D. Hasil Tampilan (Screenshot)

![ss Hasil Program Utama](assets/01.png)

*Silakan ganti placeholder gambar di atas dengan tangkapan layar tampilan program asli saat dijalankan di emulator/web.*

---

# E. Kesimpulan

Praktikum Modul 4 memperkenalkan kerangka kerja penataan letak antarmuka pengguna pada Flutter yang dibangun dengan widget-widget esensial. Penggunaan kombinasi layout `Column` dan widget visual dasar seperti `Container` memastikan fleksibilitas dalam pemberian warna kotak, margin, padding, dan batasan ukuran. Implementasi widget berupa urutan linear melalui `ListView`, baik dengan data hardcode (statis), `builder` berlandaskan array data (dinamis), maupun `separated` (dinamis dengan pemisah/garis), menunjukkan performa pengelolaan list data dalam skala aplikasi kecil hingga besar secara efisien. Penggunaan antarmuka berbasis grid (`GridView`) dimanfaatkan untuk merender item secara simetris ke dalam lajur dua dimensi (baris x kolom), dan akhirnya penyusunan dengan perlakuan *overlap/z-index* dilakukan melalui `Stack` yang memungkinkan tampilan bertumpuk atas elemen UI lainnya.

---

# F. Referensi

- [Dokumentasi Resmi Flutter - Widget Catalog](https://docs.flutter.dev/ui/widgets)
- [Modul Praktikum Aplikasi Berbasis Platform - Telkom University Purwokerto]
