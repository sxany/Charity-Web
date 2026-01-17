export function Jumbotron() {
  return `
<div class=" relative z-0 md:w-3/4 sm:w-4/5 mx-auto mt-6 overflow-hidden">

  <!-- SLIDER -->
  <div id="slider"
    class="flex transition-transform duration-700 ease-in-out h-[260px] sm:h-[450px]">

    <img src="/pict/1.png" class="w-full flex-shrink-0 object-cover">
    <img src="/pict/2.png" class="w-full flex-shrink-0 object-cover">
    <img src="/pict/3.png" class="w-full flex-shrink-0 object-cover">
    <img src="/pict/4.png" class="w-full flex-shrink-0 object-cover">
    <img src="/pict/5.png" class="w-full flex-shrink-0 object-cover">

  </div>

  <!-- Controls -->
  <button id="prev"
    class="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-black/40 text-white px-3 py-2 rounded cursor-pointer hover:opacity-60">
    ‹
  </button>

  <button id="next"
    class="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-black/40 text-white px-3 py-2 rounded cursor-pointer hover:opacity-60">
    ›
  </button>

</div>
`
}
