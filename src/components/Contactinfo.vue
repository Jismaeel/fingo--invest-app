<script setup></script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-14 p-4 md:p-8">
    <!-- Map Section -->
    <div class="flex justify-center">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3310.8366151777686!2d18.420328299999994!3d-33.9196044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc6766c22ff213%3A0x9969a6dea5618dc4!2s80%20Strand%20St%2C%20Cape%20Town%20City%20Centre%2C%20Cape%20Town%2C%208000!5e0!3m2!1sen!2sza!4v1742392409347!5m2!1sen!2sza"
        width="100%"
        height="300"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        class="rounded-2xl shadow-lg">
      </iframe>
    </div>

    <!-- Contact Info Section -->
    <div
      class="flex flex-col justify-center items-center md:items-start text-center md:text-left space-y-3 p-6">
      <div class="grid grid-cols-1 md:grid-row-4 gap-4">
        <div
          class="text-white p-5 flex rounded-2xl items-center gap-2 justify-center md:justify-start bg-black">
          <span>80 Strand Street, Cape Town 8000</span>
        </div>
        <div
          class="text-white p-5 flex rounded-2xl items-center gap-2 justify-center md:justify-start bg-black">
          <span>+(27) 21 120 5753</span>
        </div>
        <div
          class="text-white p-5 flex rounded-2xl items-center gap-2 justify-center md:justify-start bg-black">
          <span>fingo.investment@gmail.com</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
iframe {
  max-width: 100%;
  border: none;
}
</style>
