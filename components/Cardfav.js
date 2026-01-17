export function Cardfav() {
  return `
  <div class="w-full mx-auto w-3/4 sm:w-3/4 mt-6 text-left">
    <div class="flex items-center justify-between">
      <h1 class="text-base font-medium text-heading sm:text-2xl">
        Kategori Favorit AyoBantu
      </h1>

      <button
        class="sm:w-[50%] md:w-[13%] mt-5 bg-blue-300 hover:bg-blue-400
               text-white rounded-lg transition cursor-pointer
               flex items-center justify-center gap-2 px-4 py-2">
        Lihat lainnya
        <i class="fa-solid fa-chevron-right text-sm"></i>
      </button>
    </div>

    <div class="max-w-7xl mx-auto mt-6 px-4">

      <!-- ROW 1 -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

        <!-- CARD 1 -->
        <div class="bg-white rounded-xl shadow-md overflow-hidden">
          <img src="./pict/1.png">
          <div class="p-5">
            <h3 class="text-base font-semibold text-gray-800">
              Bantu Makan Saudara Kita
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
            <button class="w-full mt-5 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition">
              Donasi
            </button>
          </div>
        </div>

        <!-- CARD 2 -->
        <div class="bg-white rounded-xl shadow-md overflow-hidden">
          <img src="./pict/2.png">
          <div class="p-5">
            <h3 class="text-base font-semibold text-gray-800">
              Charity Run Kilometer for Aceh
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
            <button class="w-full mt-5 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition">
              Donasi
            </button>
          </div>
        </div>

        <!-- CARD 3 -->
        <div class="bg-white rounded-xl shadow-md overflow-hidden">
          <img src="./pict/3.png">
          <div class="p-5">
            <h3 class="text-base font-semibold text-gray-800">
              Zakat Penghasilan
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
            <button class="w-full mt-5 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition">
              Donasi
            </button>
          </div>
        </div>
      </div>

      <!-- ROW 2 -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">

        <!-- CARD 4 -->
        <div class="bg-white rounded-xl shadow-md overflow-hidden">
          <img src="./pict/4.png">
          <div class="p-5">
            <h3 class="text-base font-semibold text-gray-800">
              Bantuan Pendidikan Anak
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
            <button class="w-full mt-5 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition">
              Donasi
            </button>
          </div>
        </div>

        <!-- CARD 5 -->
        <div class="bg-white rounded-xl shadow-md overflow-hidden">
          <img src="./pict/5.png">
          <div class="p-5">
            <h3 class="text-base font-semibold text-gray-800">
              Bantuan Kesehatan
            </h3>
            <div class="mt-4">
              <div class="w-full bg-gray-200 rounded-full h-2">
                <div class="bg-green-500 h-2 rounded-full w-[70%]"></div>
              </div>
              <p class="text-sm text-gray-600 mt-2">
                <span class="font-semibold text-green-600">Rp 70.000.000</span>
                terkumpul dari Rp 100.000.000
              </p>
            </div>
            <button class="w-full mt-5 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition">
              Donasi
            </button>
          </div>
        </div>

        <!-- CARD 6 -->
        <div class="bg-white rounded-xl shadow-md overflow-hidden">
          <img src="./pict/1.png">
          <div class="p-5">
            <h3 class="text-base font-semibold text-gray-800">
              Bantuan Bencana Alam
            </h3>
            <div class="mt-4">
              <div class="w-full bg-gray-200 rounded-full h-2">
                <div class="bg-green-500 h-2 rounded-full w-[40%]"></div>
              </div>
              <p class="text-sm text-gray-600 mt-2">
                <span class="font-semibold text-green-600">Rp 40.000.000</span>
                terkumpul dari Rp 100.000.000
              </p>
            </div>
            <button class="w-full mt-5 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition">
              Donasi
            </button>
          </div>
        </div>

      </div>

    </div>
  </div>
  `;
}
