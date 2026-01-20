export function Donasi() {
    setTimeout(() => {
        const form = document.getElementById("formDonasi");
        const message = document.getElementById("donasiMessage");

        if (!form) return;

        form.addEventListener("submit", function (e) {
            e.preventDefault();

            const nama = document.getElementById("nama").value;
            const nominal = Number(document.getElementById("nominal").value);
            const metode = document.getElementById("metode").value;
            const tujuan = document.getElementById("tujuan").value;

            if (!nama || nominal <= 0 || !metode || !tujuan) {
                if (message) {
                    message.textContent = "⚠️ Lengkapi semua data donasi dulu";
                    message.style.color = "red";
                }
                return;
            }

            // Ambil data lama
            const donasiData = JSON.parse(localStorage.getItem("donasiData")) || [];

            // Simpan data baru
            donasiData.push({
                nama,
                nominal,
                metode,
                tujuan,
                tanggal: new Date().toLocaleDateString("id-ID"),
            });

            localStorage.setItem("donasiData", JSON.stringify(donasiData));

            if (message) {
                message.textContent = `✅ Terima kasih ${nama}, donasi berhasil disimpan!`;
                message.style.color = "green";
            }

            form.reset();
            
            // Reset message setelah 3 detik
            setTimeout(() => {
                if (message) {
                    message.textContent = "";
                }
            }, 3000);
        });
    }, 0);

    return `
        <section class="pt-20 px-6 max-w-4xl mx-auto">
            <div class="text-center mb-10">
                <h1 class="text-3xl font-bold text-gray-800 mb-2">Halaman Donasi</h1>
                <p class="text-gray-600">Bersama kita bantu sesama 💚</p>
            </div>

            <div class="bg-white rounded-xl shadow-lg p-6 mb-8">
                <form id="formDonasi" class="space-y-4">
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">Nama Donatur</label>
                        <input type="text" id="nama" 
                               class="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                               placeholder="Masukkan nama Anda" required>
                    </div>
                    
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">Nominal Donasi (Rp)</label>
                        <input type="number" id="nominal" 
                               class="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                               placeholder="Contoh: 50000" min="1000" required>
                    </div>
                    
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">Tujuan Donasi</label>
                        <select id="tujuan" 
                                class="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500" required>
                            <option value="">Pilih Tujuan Donasi</option>
                            <option value="Bersama AyoPeduli, Bangkitkan Sumatera dari Banjir">Bersama AyoPeduli, Bangkitkan Sumatera dari Banjir</option>
                            <option value="Hentikan Deforestasi, Sejuta Pohon Untuk Indonesia">Hentikan Deforestasi, Sejuta Pohon Untuk Indonesia</option>
                            <option value="Ayo Bantu Pendidikan Anak Indonesia">Ayo Bantu Pendidikan Anak Indonesia</option>
                            <option value="Bantu Korban Gempa Bangkit Kembali">Bantu Korban Gempa Bangkit Kembali</option>
                            <option value="Sedekah Makanan Untuk Dhuafa di Palangkaraya">Sedekah Makanan Untuk Dhuafa di Palangkaraya</option>
                            <option value="Wakaf Al-Qur'an Untuk Pelosok Negeri">Wakaf Al-Qur'an Untuk Pelosok Negeri</option>
                        </select>
                    </div>
                    
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">Metode Pembayaran</label>
                        <select id="metode" 
                                class="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500" required>
                            <option value="">Pilih Metode Pembayaran</option>
                            <option value="Transfer Bank">Transfer Bank</option>
                            <option value="E-Wallet">E-Wallet</option>
                            <option value="QRIS">QRIS</option>
                        </select>
                    </div>

                    <button type="submit" 
                            class="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition duration-300">
                        Donasi Sekarang
                    </button>
                </form>

                <p id="donasiMessage" class="text-center mt-4 min-h-[24px]"></p>
            </div>
        </section>
    `;
}