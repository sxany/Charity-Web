export function Donasi() {
    setTimeout(() => {
        const form = document.getElementById("formDonasi");
        const message = document.getElementById("donasiMessage");
        const totalDonasiEl = document.getElementById("totalDonasi");
        const totalDonaturEl = document.getElementById("totalDonatur");

        let totalDonasi = 0;
        let totalDonatur = 0;

        if (!form) return;

        form.addEventListener("submit", function (e) {
            e.preventDefault();

            const nama = document.getElementById("nama").value;
            const nominal = Number(document.getElementById("nominal").value);
            const metode = document.getElementById("metode").value;

            if (!nama || nominal <= 0 || !metode) {
                message.textContent = "⚠️ Lengkapi data donasi dulu";
                message.style.color = "red";
                return;
            }

            totalDonasi += nominal;
            totalDonatur++;

            totalDonasiEl.textContent =
                "Rp " + totalDonasi.toLocaleString("id-ID");
            totalDonaturEl.textContent = totalDonatur;

            message.textContent = `✅ Terima kasih ${nama}, donasi berhasil!`;
            message.style.color = "green";

            form.reset();
        });
    }, 0);

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

                <p id="donasiMessage"></p>
            </div>
        </section>
    `;
}
