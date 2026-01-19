export function Relawan() {
  return `
  <section id="relawan" class="mt-8 flex items-center justify-center pt-20">
    <div class="w-full max-w-xl bg-white p-8 rounded-xl shadow">

      <h1 class="text-xl sm:text-2xl font-medium text-heading text-center mb-6">
        Gabung Sebagai Relawan
      </h1>

      <form class="space-y-4">

        <div class="flex flex-col items-center">
          <label class="block mb-1 font-medium self-start">
            Nama Lengkap
          </label>

          <input
            type="text"
            id="nama"
            class="w-full px-4 py-2 border rounded-lg
                   focus:ring-2 focus:ring-blue-500 outline-none"
            placeholder="Nama lengkap"
          />

          <p id="errNama" class="text-sm text-red-500 mt-1 hidden self-start"></p>
        </div>

        <div class="flex flex-col items-center">
          <label class="block mb-1 font-medium self-start">
            Nomor Telepon
          </label>

          <input
            type="text"
            id="nama"
            class="w-full px-4 py-2 border rounded-lg
                   focus:ring-2 focus:ring-blue-500 outline-none"
            placeholder="No Telepon"
          />

          <p id="errNama" class="text-sm text-red-500 mt-1 hidden self-start"></p>
        </div>

        <div>
          <label class="block mb-1 font-medium">Alasan Mendaftar</label>
          <textarea
            id="alasan"
            rows="4"
            class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            placeholder="Alasan ingin menjadi relawan"
          ></textarea>
          <p id="errAlasan" class="text-sm text-red-500 mt-1 hidden"></p>
        </div>

        <button
          type="submit"
          class="w-full py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Daftar
        </button>
      </form>
    </div>
  </section>
  `;
}
