export function Relawan() {
    // pasang logic setelah HTML dirender
    setTimeout(() => {
        const form = document.getElementById("formRelawan");
        const message = document.getElementById("relawanMessage");

        if (!form) return;

        form.addEventListener("submit", function (e) {
            e.preventDefault();

            const nama = document.getElementById("namaRelawan").value.trim();
            const telp = document.getElementById("telpRelawan").value.trim();
            const alasan = document.getElementById("alasan").value.trim();

            if (!nama || !telp || !alasan) {
                message.textContent = "⚠️ Semua field wajib diisi";
                message.className = "mt-4 text-red-500 text-center";
                return;
            }

            message.textContent =
                "✅ Pendaftaran relawan berhasil! Terima kasih sudah bergabung 🙏";
            message.className = "mt-4 text-green-600 text-center font-medium";

            form.reset();
        });
    }, 0);

    return `
    <section id="relawan" class="mt-8 flex items-center justify-center">
      <div class="w-full max-w-xl bg-white p-8 rounded-xl shadow">

        <h1 class="text-xl sm:text-2xl font-medium text-heading text-center mb-6">
          Gabung Sebagai Relawan
        </h1>

        <form id="formRelawan" class="space-y-4">

          <div class="flex flex-col">
            <label class="block mb-1 font-medium">
              Nama Lengkap
            </label>

            <input
              type="text"
              id="namaRelawan"
              class="w-full px-4 py-2 border rounded-lg
                     focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Nama lengkap"
            />
          </div>

          <div class="flex flex-col">
            <label class="block mb-1 font-medium">
              Nomor Telepon
            </label>

            <input
              type="text"
              id="telpRelawan"
              class="w-full px-4 py-2 border rounded-lg
                     focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="No Telepon"
            />
          </div>

          <div>
            <label class="block mb-1 font-medium">Alasan Mendaftar</label>
            <textarea
              id="alasan"
              rows="4"
              class="w-full px-4 py-2 border rounded-lg
                     focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Alasan ingin menjadi relawan"
            ></textarea>
          </div>

          <button
            type="submit"
            class="w-full py-3 bg-blue-600 text-white rounded-lg
                   font-semibold hover:bg-blue-700 transition"
          >
            Daftar
          </button>
        </form>

        <!-- PESAN HASIL -->
        <p id="relawanMessage"></p>

      </div>
    </section>
    `;
}
