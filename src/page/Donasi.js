export function Donasi() {
    return `
        <section class="donasi-page">
            <h1>Halaman Donasi</h1>
            <p class="subtitle">Bersama kita bantu sesama 💚</p>

            <div class="donasi-card">
                <div class="statistik">
                    <div>
                        <small>Total Donasi</small>
                        <h3 id="totalDonasi">Rp 0</h3>
                    </div>
                    <div>
                        <small>Total Donatur</small>
                        <h3 id="totalDonatur">0</h3>
                    </div>
                </div>

        <form id="formDonasi" class="donasi-form">
          <input type="text" id="nama" placeholder="Nama Donatur" />
          <input type="number" id="nominal" placeholder="Nominal Donasi" />

            <select id="metode">
              <option value="">Pilih Metode Pembayaran</option>
                <option value="transfer">Transfer Bank</option>
                <option value="ewallet">E-Wallet</option>
                <option value="qris">QRIS</option>
            </select>
              <button type="submit">Donasi Sekarang</button>
        </form>

        <!-- PESAN HASIL -->
        <p id="donasiMessage" class="donasi-message"></p>

            </div>
        </section>
    `;
}
