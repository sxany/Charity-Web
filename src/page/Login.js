export function Login() {
    setTimeout(() => {
        const form = document.getElementById("formLogin");
        const message = document.getElementById("loginMessage");

        if (!form) return;

        form.addEventListener("submit", function (e) {
            e.preventDefault();

            const email = document.getElementById("emailLogin").value.trim();
            const password = document
                .getElementById("passwordLogin")
                .value.trim();

            if (!email || !password) {
                message.textContent = "⚠️ Email dan password wajib diisi";
                message.className = "mt-4 text-red-500 text-center";
                return;
            }

            message.textContent = "✅ Login berhasil, selamat datang!";
            message.className =
                "mt-4 text-green-600 text-center font-medium";

            form.reset();
        });
    }, 0);

    return `
    <section id="login" class="mt-8 flex items-center justify-center pt-20">
      <div class="w-full max-w-md bg-white p-8 rounded-xl shadow">

        <h1 class="text-xl sm:text-2xl font-medium text-heading text-center mb-6">
          Login
        </h1>

        <form id="formLogin" class="space-y-4">

          <div class="flex flex-col">
            <label class="block mb-1 font-medium">
              Email
            </label>

            <input
              type="email"
              id="emailLogin"
              class="w-full px-4 py-2 border rounded-lg
                     focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Email"
            />
          </div>

          <div class="flex flex-col">
            <label class="block mb-1 font-medium">
              Password
            </label>

            <input
              type="password"
              id="passwordLogin"
              class="w-full px-4 py-2 border rounded-lg
                     focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Password"
            />
          </div>

          <button
            type="submit"
            class="w-full py-3 bg-blue-600 text-white rounded-lg
                   font-semibold hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>

        <!-- PESAN HASIL -->
        <p id="loginMessage"></p>

      </div>
    </section>
    `;
}
