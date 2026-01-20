export function Dashboard() {
    setTimeout(() => {
        renderDonasi();
        renderRelawan();
    }, 0);

    return `
    <section class="pt-20 px-6 max-w-6xl mx-auto space-y-10">

      <h1 class="text-2xl font-semibold">Dashboard Admin</h1>

      <!-- STATISTIK SEDERHANA -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="bg-blue-50 p-4 rounded-lg border border-blue-200">
          <h3 class="text-lg font-medium text-blue-800">Total Donasi</h3>
          <p class="text-2xl font-bold text-blue-600" id="totalDonasi">Rp 0</p>
        </div>
        <div class="bg-green-50 p-4 rounded-lg border border-green-200">
          <h3 class="text-lg font-medium text-green-800">Total Relawan</h3>
          <p class="text-2xl font-bold text-green-600" id="totalRelawan">0 orang</p>
        </div>
      </div>

      <!-- DONASI -->
      <div>
        <div class="flex justify-between items-center mb-3">
          <h2 class="text-xl font-medium">Data Donasi</h2>
          <button onclick="renderDonasi()" class="text-sm bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded">
            🔄 Refresh
          </button>
        </div>
        
        <div class="overflow-x-auto">
          <table class="w-full border text-sm">
            <thead class="bg-gray-100">
              <tr>
                <th class="border px-4 py-2">No</th>
                <th class="border px-4 py-2">Nama Donatur</th>
                <th class="border px-4 py-2">Nominal</th>
                <th class="border px-4 py-2">Tujuan Donasi</th>
                <th class="border px-4 py-2">Metode</th>
                <th class="border px-4 py-2">Aksi</th>
              </tr>
            </thead>
            <tbody id="donasiTable"></tbody>
          </table>
        </div>
      </div>

      <!-- RELAWAN -->
      <div>
        <div class="flex justify-between items-center mb-3">
          <h2 class="text-xl font-medium">Data Relawan</h2>
          <button onclick="renderRelawan()" class="text-sm bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded">
            🔄 Refresh
          </button>
        </div>
        
        <div class="overflow-x-auto">
          <table class="w-full border text-sm">
            <thead class="bg-gray-100">
              <tr>
                <th class="border px-4 py-2">No</th>
                <th class="border px-4 py-2">Nama</th>
                <th class="border px-4 py-2">Telepon</th>
                <th class="border px-4 py-2">Kampanye</th>
                <th class="border px-4 py-2">Alasan</th>
                <th class="border px-4 py-2">Aksi</th>
              </tr>
            </thead>
            <tbody id="relawanTable"></tbody>
          </table>
        </div>
      </div>

      <!-- MODAL EDIT DONASI -->
      <div id="modalEditDonasi" class="hidden fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
        <div class="bg-white rounded-lg w-full max-w-md">
          <div class="flex justify-between items-center p-4 border-b">
            <h3 class="text-lg font-semibold">Edit Donasi</h3>
            <button onclick="closeModal('modalEditDonasi')" class="text-gray-500 hover:text-gray-700 text-xl">✕</button>
          </div>
          <form id="formEditDonasi" class="p-4 space-y-3">
            <input type="hidden" id="editDonasiId">
            
            <div>
              <label class="block text-sm font-medium mb-1">Nama Donatur</label>
              <input type="text" id="editDonasiNama" class="w-full border px-3 py-2 rounded" required>
            </div>
            
            <div>
              <label class="block text-sm font-medium mb-1">Nominal (Rp)</label>
              <input type="number" id="editDonasiNominal" class="w-full border px-3 py-2 rounded" required>
            </div>
            
            <div>
              <label class="block text-sm font-medium mb-1">Tujuan Donasi</label>
              <select id="editDonasiTujuan" class="w-full border px-3 py-2 rounded" required>
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
              <label class="block text-sm font-medium mb-1">Metode Pembayaran</label>
              <select id="editDonasiMetode" class="w-full border px-3 py-2 rounded" required>
                <option value="">Pilih Metode</option>
                <option value="Transfer Bank">Transfer Bank</option>
                <option value="E-Wallet">E-Wallet</option>
                <option value="QRIS">QRIS</option>
              </select>
            </div>
            
            <div class="flex gap-2 pt-2">
              <button type="submit" class="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
                Simpan
              </button>
              <button type="button" onclick="closeModal('modalEditDonasi')" 
                      class="flex-1 bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded">
                Batal
              </button>
            </div>
          </form>
        </div>
      </div>

      <!-- MODAL EDIT RELAWAN -->
      <div id="modalEditRelawan" class="hidden fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
        <div class="bg-white rounded-lg w-full max-w-md">
          <div class="flex justify-between items-center p-4 border-b">
            <h3 class="text-lg font-semibold">Edit Relawan</h3>
            <button onclick="closeModal('modalEditRelawan')" class="text-gray-500 hover:text-gray-700 text-xl">✕</button>
          </div>
          <form id="formEditRelawan" class="p-4 space-y-3">
            <input type="hidden" id="editRelawanId">
            
            <div>
              <label class="block text-sm font-medium mb-1">Nama Lengkap</label>
              <input type="text" id="editRelawanNama" class="w-full border px-3 py-2 rounded" required>
            </div>
            
            <div>
              <label class="block text-sm font-medium mb-1">Nomor Telepon</label>
              <input type="tel" id="editRelawanTelp" class="w-full border px-3 py-2 rounded" required>
            </div>
            
            <div>
              <label class="block text-sm font-medium mb-1">Kampanye yang Didukung</label>
              <select id="editRelawanKampanye" class="w-full border px-3 py-2 rounded" required>
                <option value="">Pilih Kampanye</option>
                <option value="Bersama AyoPeduli, Bangkitkan Sumatera dari Banjir">Bersama AyoPeduli, Bangkitkan Sumatera dari Banjir</option>
                <option value="Hentikan Deforestasi, Sejuta Pohon Untuk Indonesia">Hentikan Deforestasi, Sejuta Pohon Untuk Indonesia</option>
                <option value="Ayo Bantu Pendidikan Anak Indonesia">Ayo Bantu Pendidikan Anak Indonesia</option>
                <option value="Bantu Korban Gempa Bangkit Kembali">Bantu Korban Gempa Bangkit Kembali</option>
                <option value="Sedekah Makanan Untuk Dhuafa di Palangkaraya">Sedekah Makanan Untuk Dhuafa di Palangkaraya</option>
                <option value="Wakaf Al-Qur'an Untuk Pelosok Negeri">Wakaf Al-Qur'an Untuk Pelosok Negeri</option>
              </select>
            </div>
            
            <div>
              <label class="block text-sm font-medium mb-1">Alasan Bergabung</label>
              <textarea id="editRelawanAlasan" class="w-full border px-3 py-2 rounded" rows="3"></textarea>
            </div>
            
            <div class="flex gap-2 pt-2">
              <button type="submit" class="flex-1 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded">
                Simpan
              </button>
              <button type="button" onclick="closeModal('modalEditRelawan')" 
                      class="flex-1 bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded">
                Batal
              </button>
            </div>
          </form>
        </div>
      </div>

    </section>
    `;
}

/* ========= DONASI ========= */
function renderDonasi() {
    const data = JSON.parse(localStorage.getItem("donasiData")) || [];
    const table = document.getElementById("donasiTable");
    
    if (!table) return;
    
    table.innerHTML = "";
    
    if (data.length === 0) {
        table.innerHTML = `
            <tr>
                <td colspan="6" class="border px-4 py-8 text-center text-gray-500">
                    Belum ada data donasi
                </td>
            </tr>
        `;
        document.getElementById("totalDonasi").textContent = "Rp 0";
        return;
    }
    
    // Hitung total donasi
    const totalDonasi = data.reduce((sum, item) => sum + (parseInt(item.nominal) || 0), 0);
    document.getElementById("totalDonasi").textContent = `Rp ${totalDonasi.toLocaleString("id-ID")}`;
    
    // Render tabel
    data.forEach((d, index) => {
        const tujuanDisplay = d.tujuan && d.tujuan.length > 40 ? 
            d.tujuan.substring(0, 40) + "..." : 
            d.tujuan || "-";
        
        table.innerHTML += `
            <tr class="hover:bg-gray-50">
                <td class="border px-4 py-3 text-center">${index + 1}</td>
                <td class="border px-4 py-3">${d.nama || "-"}</td>
                <td class="border px-4 py-3">
                    <span class="font-bold text-blue-600">
                        Rp ${(parseInt(d.nominal) || 0).toLocaleString("id-ID")}
                    </span>
                </td>
                <td class="border px-4 py-3" title="${d.tujuan || ""}">
                    ${tujuanDisplay}
                </td>
                <td class="border px-4 py-3">${d.metode || "-"}</td>
                <td class="border px-4 py-3">
                    <div class="flex gap-2">
                        <button onclick="editDonasi(${index})" 
                                class="text-sm bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1.5 rounded">
                            Edit
                        </button>
                        <button onclick="hapusDonasi(${index})" 
                                class="text-sm bg-red-500 hover:bg-red-600 text-white px-3 py-1.5 rounded">
                            Hapus
                        </button>
                    </div>
                </td>
            </tr>
        `;
    });
}

/* ========= RELAWAN ========= */
function renderRelawan() {
    const data = JSON.parse(localStorage.getItem("relawanData")) || [];
    const table = document.getElementById("relawanTable");
    
    if (!table) return;
    
    table.innerHTML = "";
    
    if (data.length === 0) {
        table.innerHTML = `
            <tr>
                <td colspan="6" class="border px-4 py-8 text-center text-gray-500">
                    Belum ada data relawan
                </td>
            </tr>
        `;
        document.getElementById("totalRelawan").textContent = "0 orang";
        return;
    }
    
    // Update statistik
    document.getElementById("totalRelawan").textContent = `${data.length} orang`;
    
    // Render tabel
    data.forEach((r, index) => {
        const kampanyeDisplay = r.kampanye && r.kampanye.length > 30 ? 
            r.kampanye.substring(0, 30) + "..." : 
            r.kampanye || "-";
        
        const alasanDisplay = r.alasan && r.alasan.length > 30 ? 
            r.alasan.substring(0, 30) + "..." : 
            r.alasan || "-";
        
        table.innerHTML += `
            <tr class="hover:bg-gray-50">
                <td class="border px-4 py-3 text-center">${index + 1}</td>
                <td class="border px-4 py-3">${r.nama || "-"}</td>
                <td class="border px-4 py-3">${r.telp || "-"}</td>
                <td class="border px-4 py-3" title="${r.kampanye || ""}">
                    ${kampanyeDisplay}
                </td>
                <td class="border px-4 py-3" title="${r.alasan || ""}">
                    ${alasanDisplay}
                </td>
                <td class="border px-4 py-3">
                    <div class="flex gap-2">
                        <button onclick="editRelawan(${index})" 
                                class="text-sm bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1.5 rounded">
                            Edit
                        </button>
                        <button onclick="hapusRelawan(${index})" 
                                class="text-sm bg-red-500 hover:bg-red-600 text-white px-3 py-1.5 rounded">
                            Hapus
                        </button>
                    </div>
                </td>
            </tr>
        `;
    });
}

/* ========= FUNGSI EDIT ========= */
window.editDonasi = function(index) {
    const data = JSON.parse(localStorage.getItem("donasiData")) || [];
    const item = data[index];
    
    if (item) {
        document.getElementById("editDonasiId").value = index;
        document.getElementById("editDonasiNama").value = item.nama || "";
        document.getElementById("editDonasiNominal").value = item.nominal || "";
        document.getElementById("editDonasiTujuan").value = item.tujuan || "";
        document.getElementById("editDonasiMetode").value = item.metode || "";
        
        // Tampilkan modal
        document.getElementById("modalEditDonasi").classList.remove("hidden");
    }
};

window.editRelawan = function(index) {
    const data = JSON.parse(localStorage.getItem("relawanData")) || [];
    const item = data[index];
    
    if (item) {
        document.getElementById("editRelawanId").value = index;
        document.getElementById("editRelawanNama").value = item.nama || "";
        document.getElementById("editRelawanTelp").value = item.telp || "";
        document.getElementById("editRelawanKampanye").value = item.kampanye || "";
        document.getElementById("editRelawanAlasan").value = item.alasan || "";
        
        // Tampilkan modal
        document.getElementById("modalEditRelawan").classList.remove("hidden");
    }
};

/* ========= FUNGSI HAPUS ========= */
window.hapusDonasi = function(index) {
    if (!confirm("Apakah Anda yakin ingin menghapus data donasi ini?")) {
        return;
    }
    
    const data = JSON.parse(localStorage.getItem("donasiData")) || [];
    data.splice(index, 1);
    localStorage.setItem("donasiData", JSON.stringify(data));
    
    renderDonasi();
};

window.hapusRelawan = function(index) {
    if (!confirm("Apakah Anda yakin ingin menghapus data relawan ini?")) {
        return;
    }
    
    const data = JSON.parse(localStorage.getItem("relawanData")) || [];
    data.splice(index, 1);
    localStorage.setItem("relawanData", JSON.stringify(data));
    
    renderRelawan();
};

/* ========= FUNGSI MODAL ========= */
window.closeModal = function(modalId) {
    document.getElementById(modalId).classList.add("hidden");
};

/* ========= EVENT LISTENERS ========= */
// Setup event listeners setelah DOM dimuat
setTimeout(() => {
    // Event listener untuk form edit donasi
    const formEditDonasi = document.getElementById("formEditDonasi");
    if (formEditDonasi) {
        formEditDonasi.addEventListener("submit", function(e) {
            e.preventDefault();
            
            const index = document.getElementById("editDonasiId").value;
            const data = JSON.parse(localStorage.getItem("donasiData")) || [];
            
            if (data[index]) {
                data[index] = {
                    nama: document.getElementById("editDonasiNama").value,
                    nominal: document.getElementById("editDonasiNominal").value,
                    tujuan: document.getElementById("editDonasiTujuan").value,
                    metode: document.getElementById("editDonasiMetode").value
                };
                
                localStorage.setItem("donasiData", JSON.stringify(data));
                closeModal("modalEditDonasi");
                renderDonasi();
            }
        });
    }
    
    // Event listener untuk form edit relawan
    const formEditRelawan = document.getElementById("formEditRelawan");
    if (formEditRelawan) {
        formEditRelawan.addEventListener("submit", function(e) {
            e.preventDefault();
            
            const index = document.getElementById("editRelawanId").value;
            const data = JSON.parse(localStorage.getItem("relawanData")) || [];
            
            if (data[index]) {
                data[index] = {
                    nama: document.getElementById("editRelawanNama").value,
                    telp: document.getElementById("editRelawanTelp").value,
                    kampanye: document.getElementById("editRelawanKampanye").value,
                    alasan: document.getElementById("editRelawanAlasan").value
                };
                
                localStorage.setItem("relawanData", JSON.stringify(data));
                closeModal("modalEditRelawan");
                renderRelawan();
            }
        });
    }
}, 100);