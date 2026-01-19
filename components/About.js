export function About() {
  return `
    <div class="sm:w-3/4 mx-auto mt-8 px-4">
      <div class="grid grid-cols-1 min-[1000px]:grid-cols-3 gap-10 items-center">


        <div>
          <h2 class="text-6xl md:text-8xl font-bold mb-6">
            Why we care.
          </h2>

          <p class="text-base sm:text-2xl leading-relaxed text-justify">
            AyoPeduli adalah platform web charity yang hadir sebagai penghubung
            kebaikan antara para dermawan dan mereka yang membutuhkan bantuan.
            Kami berkomitmen membantu sesama melalui penggalangan dana yang
            transparan aman dan mudah diakses oleh siapa saja.
            <br /><br />
            Melalui AyoPeduli masyarakat dapat berkontribusi dalam berbagai aksi
            kemanusiaan mulai dari bantuan bencana alam hingga dukungan bagi
            individu dan komunitas yang sedang mengalami kesulitan. Setiap
            donasi yang diberikan menjadi harapan baru bagi mereka yang
            membutuhkan uluran tangan.
            <br /><br />
            Dengan semangat gotong royong dan kepedulian sosial AyoPeduli percaya
            bahwa kebaikan yang dilakukan bersama dapat memberikan dampak nyata.
            Bersama AyoPeduli mari wujudkan kepedulian untuk masa depan yang
            lebih baik.
          </p>
        </div>

        
        <div class="md:col-span-2 w-full">
          <img 
            src="./pict/1.png" 
            alt="About AyoPeduli"
            class="w-full  object-cover rounded-xl shadow-lg"
          />
        </div>

      </div>
    </div>
  `
}
