export function Kampanye() {
  return `
  <section id="kampanye" class="pt-20 pb-24  ">
    <div class="max-w-7xl mx-auto px-4 text-left">

      <div class="flex items-center justify-between mb-6">
        <h1 class="text-base font-medium text-heading sm:text-2xl">
          Kampanye Pilihan
        </h1>
      </div>

      <!-- ROW 1 -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

        <!-- CARD 1 -->
        <div class="bg-white rounded-xl shadow-md overflow-hidden">
          <img src="./pict/1.png">
          <div class="p-5">
            <h3 class="text-base font-semibold text-gray-800">
              Bersama AyoPeduli, Bangkitkan Sumatera dari Banjir
            </h3>
            <div class="mt-4">
              <div class="w-full bg-gray-200 rounded-full h-2">
                <div class="bg-green-500 h-2 rounded-full w-[60%]"></div>
              </div>
              <p class="text-sm text-gray-600 mt-2">
                <span class="font-semibold text-green-600">Rp 56.000.000</span>
                terkumpul dari Rp 100.000.000
              </p>
            </div>
            <button onclick="window.open('/page.html?type=donasi', '_blank')" class="cursor-pointer w-full mt-5 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition">
              Donasi
            </button>
          </div>
        </div>

        <!-- CARD 2 -->
        <div class="bg-white rounded-xl shadow-md overflow-hidden">
          <img src="./pict/2.png">
          <div class="p-5">
            <h3 class="text-base font-semibold text-gray-800">
              Hentikan Deforestasi, Sejuta Pohon Untuk Indonesia
            </h3>
            <div class="mt-4">
              <div class="w-full bg-gray-200 rounded-full h-2">
                <div class="bg-green-500 h-2 rounded-full w-[75%]"></div>
              </div>
              <p class="text-sm text-gray-600 mt-2">
                <span class="font-semibold text-green-600">Rp 157.000.000</span>
                terkumpul dari Rp 200.000.000
              </p>
            </div>
            <button onclick="window.open('/page.html?type=donasi', '_blank')" class="cursor-pointer w-full mt-5 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition">
              Donasi
            </button>
          </div>
        </div>

        <!-- CARD 3 -->
        <div class="bg-white rounded-xl shadow-md overflow-hidden">
          <img src="./pict/3.png">
          <div class="p-5">
            <h3 class="text-base font-semibold text-gray-800">
              Ayo Bantu Pendidikan Anak Indonesia
            </h3>
            <div class="mt-4">
              <div class="w-full bg-gray-200 rounded-full h-2">
                <div class="bg-green-500 h-2 rounded-full w-[45%]"></div>
              </div>
              <p class="text-sm text-gray-600 mt-2">
                <span class="font-semibold text-green-600">Rp 10.000.000</span>
                terkumpul dari Rp 20.000.000
              </p>
            </div>
            <button onclick="window.open('/page.html?type=donasi', '_blank')" class="cursor-pointer w-full mt-5 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition">
              Donasi
            </button>
          </div>
        </div>

      </div>

      <!-- ROW 2 -->
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">

  <!-- CARD 4 -->
  <div class="bg-white rounded-xl shadow-md overflow-hidden">
    <img src="./pict/donasi korban.jpeg">
    <div class="p-5">
      <h3 class="text-base font-semibold text-gray-800">
        Bantu Korban Gempa Bangkit Kembali
      </h3>
      <div class="mt-4">
        <div class="w-full bg-gray-200 rounded-full h-2">
          <div class="bg-green-500 h-2 rounded-full w-[50%]"></div>
        </div>
        <p class="text-sm text-gray-600 mt-2">
          <span class="font-semibold text-green-600">Rp 25.000.000</span>
          terkumpul dari Rp 50.000.000
        </p>
      </div>
      <button onclick="window.open('/page.html?type=donasi', '_blank')" class="cursor-pointer w-full mt-5 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition">
        Donasi
      </button>
    </div>
  </div>

  <!-- CARD 5 -->
  <div class="bg-white rounded-xl shadow-md overflow-hidden">
    <img src="./pict/makanan.jpeg">
    <div class="p-5">
      <h3 class="text-base font-semibold text-gray-800">
        Sedekah Makanan Untuk Dhuafa di Palangkaraya
      </h3>
      <div class="mt-4">
        <div class="w-full bg-gray-200 rounded-full h-2">
          <div class="bg-green-500 h-2 rounded-full w-[70%]"></div>
        </div>
        <p class="text-sm text-gray-600 mt-2">
          <span class="font-semibold text-green-600">Rp 35.000.000</span>
          terkumpul dari Rp 50.000.000
        </p>
      </div>
      <button onclick="window.open('/page.html?type=donasi', '_blank')" class="cursor-pointer w-full mt-5 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition">
        Donasi
      </button>
    </div>
  </div>

  <!-- CARD 6 -->
  <div class="bg-white rounded-xl shadow-md overflow-hidden">
    <img src="./pict/alwuran.jpeg">
    <div class="p-5">
      <h3 class="text-base font-semibold text-gray-800">
        Wakaf Al-Qur’an Untuk Pelosok Negeri
      </h3>
      <div class="mt-4">
        <div class="w-full bg-gray-200 rounded-full h-2">
          <div class="bg-green-500 h-2 rounded-full w-[30%]"></div>
        </div>
        <p class="text-sm text-gray-600 mt-2">
          <span class="font-semibold text-green-600">Rp 15.000.000</span>
          terkumpul dari Rp 50.000.000
        </p>
      </div>
      <button onclick="window.open('/page.html?type=donasi', '_blank')" class="cursor-pointer w-full mt-5 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition">
        Donasi
      </button>
    </div>
  </div>

</div>
</div>
</div>

  </section>
  `;
}
