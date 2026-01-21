export function Application() {
  return `
  <div id="kategori" class="w-full sm:w-3/4 mx-auto mt-4 pt-16 md:px-0">
    <div class="bg-white shadow-md rounded-xl py-1">

    <div class="pl-4 w-3/4 sm:w-3/4 mt-6 text-left">
    <h1 style="font-family: 'Forum', serif;
  font-weight: 800;
" class="text-base font-medium text-heading sm:text-2xl">
      AyoPeduli Kepada Mereka Yang Membutuhkan
    </h1>
    <h2 style="font-family: 'Forum', serif;
  font-weight: 400;" class="mt-0.5 pl-4w-3/4 sm:w-3/4text-base font-normal sm:text-[16px]">
      Pilih kategori favorit kamu
    </h2>
  </div>


      <div class="mt-8">
        <div class="grid grid-cols-2 sm:grid-cols-3 gap-6 text-center">

          <div onclick="window.open('/page.html?type=donasi', '_blank')"
          class="flex flex-col items-center cursor-pointer hover:opacity-80 transition">
            <div class="w-20 h-20 rounded-full bg-blue-200 flex items-center justify-center">
              <img src="./pict/donasi.png" class="w-10 h-10"></img>
            </div>
            <p class="mt-3 text-sm font-medium">Donasi</p>
          </div>

          <div onclick="window.open('/page.html?type=relawan', '_blank')" class="flex flex-col items-center cursor-pointer hover:opacity-80 transition">
            <div class="w-20 h-20 rounded-full bg-blue-200 flex items-center justify-center">
              <img src="./pict/relawan.png" class="w-18 h-20"></img>
            </div>
            <p class="mt-3 text-sm font-medium">Relawan</p>
          </div>

          <div onclick="window.open('/page.html?type=login', '_blank')" class="flex flex-col items-center cursor-pointer hover:opacity-80 transition">
            <div class="w-20 h-20 rounded-full bg-blue-200 flex items-center justify-center">
              <img src="./pict/login.png" class="w-10 h-10"></img>
            </div>
            <p class="mt-3 text-sm font-medium">Login</p>
          </div>

        </div>
      </div>

    </div>
  </div>
  `
}
