<script setup>
import { ref } from "vue";

// Define the array of items
const items = ref([
  { term: "Stocks", definition: "Invest in company shares." },
  { term: "Real Estate", definition: "Buy properties for rental income." },
  { term: "Crypto", definition: "Trade digital currencies like Bitcoin." },
]);
</script>

<template>
  <section>
    <!-- Container -->
    <div class="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
      <!-- Title -->
      <h2 class="mx-auto max-w-2xl text-center text-3xl font-bold md:text-5xl">
        We offer the best investment opportunities
      </h2>
      <p
        class="mx-auto mb-8 mt-4 max-w-lg text-center text-gray-500 md:mb-12 lg:mb-16">
        Based on affordability, you will be given the best deal for your monthly
        premium.
      </p>
      <!-- Content -->
      <div class="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:gap-6">
        <!-- Item -->

        <a
          v-for="(item, index) in items"
          :key="index"
          href="#"
          class="group relative block h-64 sm:h-80 lg:h-56">
          <span
            class="absolute inset-0 border-2 border-dashed border-black"></span>

          <div
            class="relative flex h-full transform items-end border-2 border-black bg-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2">
            <div
              class="p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8">
              <svg
                class="w-6 h-6 text-gray-800"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M4 19v2c0 .5523.44772 1 1 1h14c.5523 0 1-.4477 1-1v-2H4Z" />
                <path
                  fill="currentColor"
                  fill-rule="evenodd"
                  d="M9 3c0-.55228.44772-1 1-1h8c.5523 0 1 .44772 1 1v3c0 .55228-.4477 1-1 1h-2v1h2c.5096 0 .9376.38314.9939.88957L19.8951 17H4.10498l.90116-8.11043C5.06241 8.38314 5.49047 8 6.00002 8H12V7h-2c-.55228 0-1-.44772-1-1V3Zm1.01 8H8.00002v2.01H10.01V11Zm.99 0h2.01v2.01H11V11Zm5.01 0H14v2.01h2.01V11Zm-8.00998 3H10.01v2.01H8.00002V14ZM13.01 14H11v2.01h2.01V14Zm.99 0h2.01v2.01H14V14ZM11 4h6v1h-6V4Z"
                  clip-rule="evenodd" />
              </svg>

              <h2 class="mt-4 text-xl font-medium sm:text-2xl">
                {{ item.term }}
              </h2>
            </div>

            <div
              class="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8">
              <h3 class="mt-4 text-xl font-medium sm:text-2xl">
                {{ item.term }}
              </h3>

              <p class="mt-4 text-sm sm:text-base">
                {{ item.definition }}
              </p>

              <p class="mt-8 font-bold">Read more</p>
            </div>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>
