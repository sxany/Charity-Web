export function Application() {
  return `
  <div class="w-full sm:w-3/4 mx-auto mt-4 px-4 sm:px-0">
    <div class="bg-white shadow-md rounded-xl py-1">

    <div class="pl-4 w-3/4 sm:w-3/4 mt-6 text-left">
    <h1 class="text-base font-medium text-heading sm:text-2xl">
      AyoBantu mereka yang membutuhkan
    </h1>
    <h2 class="mt-0.5 pl-4w-3/4 sm:w-3/4text-base font-normal sm:text-[16px]">
      Pilih kategori favorit kamu
    </h2>
  </div>


      <div class="mt-8">
        <div class="grid grid-cols-2 sm:grid-cols-5 gap-6 text-center">

          <div class="flex flex-col items-center cursor-pointer hover:opacity-80 transition">
            <div class="w-20 h-20 rounded-full bg-red-100 flex items-center justify-center">
              <span class="text-3xl">🤲</span>
            </div>
            <p class="mt-3 text-sm font-medium">Donasi</p>
          </div>

          <div class="flex flex-col items-center cursor-pointer hover:opacity-80 transition">
            <div class="w-20 h-20 rounded-full bg-red-100 flex items-center justify-center">
              <span class="text-3xl">👥</span>
            </div>
            <p class="mt-3 text-sm font-medium">Event</p>
          </div>

          <div class="flex flex-col items-center cursor-pointer hover:opacity-80 transition">
            <div class="w-20 h-20 rounded-full bg-red-100 flex items-center justify-center">
              <span class="text-3xl">🎁</span>
            </div>
            <p class="mt-3 text-sm font-medium">Merchandise</p>
          </div>

          <div class="flex flex-col items-center cursor-pointer hover:opacity-80 transition">
            <div class="w-20 h-20 rounded-full bg-red-100 flex items-center justify-center">
              <span class="text-3xl">💰</span>
            </div>
            <p class="mt-3 text-sm font-medium">Zakat</p>
          </div>

          <div class="flex flex-col items-center cursor-pointer hover:opacity-80 transition">
            <div class="w-20 h-20 rounded-full bg-red-100 flex items-center justify-center">
              <span class="text-3xl">📰</span>
            </div>
            <p class="mt-3 text-sm font-medium">Blog</p>
          </div>

        </div>
      </div>

    </div>
  </div>
  `
}
