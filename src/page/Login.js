export function Login() {
    return `
    <section style="font-family: 'Forum', serif;" id="login" class=" flex items-center justify-center">
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
          onclick="window.open('/page.html?type=dashboard', '_blank')"
            type="submit"
            class="cursor-pointer w-full py-3 bg-blue-600 text-white rounded-lg
                   font-semibold hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>

      </div>
    </section>
    `;
}
