export function Footer()    {
    return `
    <footer class="bg-red-700 text-white pt-16 pb-10">
  <div class="max-w-7xl mx-auto px-6">

    <div class="grid grid-cols-1 md:grid-cols-2 gap-12">

      <!-- LEFT -->
      <div>
        <h2 class="text-2xl font-bold mb-4">
          Ayobantu<span class="font-normal">.com</span>
        </h2>

        <p class="text-sm leading-relaxed max-w-md">
          Kami telah memiliki Izin Pengumpulan Uang dan Barang
          untuk Non Bencana di Kementerian Sosial Republik Indonesia
          dengan no surat izin 280/HUK-PS/2025
        </p>

        <!-- Social -->
        <div class="flex gap-3 mt-6">
          <a class="w-10 h-10 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-red-700 transition cursor-pointer">
            <i class="fa-brands fa-facebook-f"></i>
          </a>
          <a class="w-10 h-10 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-red-700 transition cursor-pointer">
            <i class="fa-brands fa-instagram"></i>
          </a>
          <a class="w-10 h-10 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-red-700 transition cursor-pointer">
            <i class="fa-brands fa-youtube"></i>
          </a>
        </div>
      </div>

      <!-- RIGHT -->
      <div class="md:text-right">
        <h3 class="text-2xl font-bold mb-4">Tentang</h3>
        <ul class="space-y-2 text-sm">
          <li class="hover:underline cursor-pointer">AyoBantu</li>
          <li class="hover:underline cursor-pointer">Syarat & Ketentuan</li>
          <li class="hover:underline cursor-pointer">Hubungi Kami</li>
          <li class="hover:underline cursor-pointer">Partner Kami</li>
          <li class="hover:underline cursor-pointer">FAQ</li>
          <li class="hover:underline cursor-pointer">Blog</li>
          <li class="hover:underline cursor-pointer">Child Safety Standards</li>
        </ul>
      </div>

    </div>

    <!-- Bottom -->
    <div class="mt-16 text-sm text-center md:text-left">
      © Yayasan Ayo Bantu Peduli Indonesia 2026
    </div>

  </div>
</footer>

    `;
}