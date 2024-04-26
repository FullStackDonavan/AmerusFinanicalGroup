<!-- Your form component template -->
<template>
  <div>
    <div class="px-4 mb-8 md:block">
      <form @submit.prevent="handleSubmit">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="relative mb-6 group">
            <label
              for="floating_first_name"
              class="block mb-1 text-sm font-medium text-gray-700"
              >First Name:</label
            >
            <input
              type="text"
              v-model="firstName"
              id="floating_first_name"
              name="floating_first_name"
              class="block w-full py-2.5 px-4 text-sm text-gray-800 bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
              placeholder=" "
              required
            />
          </div>
          <div class="relative mb-6 group">
            <label
              for="floating_last_name"
              class="block mb-1 text-sm font-medium text-gray-700"
              >Last Name:</label
            >
            <input
              type="text"
              v-model="lastName"
              id="floating_last_name"
              name="floating_last_name"
              class="block w-full py-2.5 px-4 text-sm text-gray-800 bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
              placeholder=" "
              required
            />
          </div>
        </div>

        <div class="relative mb-6 group">
          <label
            for="email"
            class="block mb-1 text-sm font-medium text-gray-700"
            >Email:</label
          >
          <input
            type="email"
            v-model="email"
            id="email"
            name="email"
            class="block w-full py-2.5 px-4 text-sm text-gray-800 bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
            placeholder=" "
            required
          />
        </div>

        <div class="relative mb-6 group">
          <label
            for="phoneNumber"
            class="block mb-1 text-sm font-medium text-gray-700"
            >Phone Number:</label
          >
          <input
            type="tel"
            v-model="phoneNumber"
            id="phoneNumber"
            name="phoneNumber"
            class="block w-full py-2.5 px-4 text-sm text-gray-800 bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
            placeholder=" "
            required
          />
        </div>

        <div class="relative mb-6 group">
          <label
            for="message"
            class="block mb-1 text-sm font-medium text-gray-700"
            >Message:</label
          >
          <textarea
            rows="4"
            v-model="message"
            id="message"
            name="message"
            class="block w-full py-2.5 px-4 text-sm text-gray-800 bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
            placeholder=" "
            required
          ></textarea>
        </div>

        <button
          type="submit"
          class="block w-full py-2.5 px-5 text-sm text-white bg-indigo-600 hover:bg-indigo-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-lg dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Request Quote
        </button>
      </form>
    </div>
  </div>
</template>


<script>
export default {
  props: {
    tag: {
      type: String,
      default: "newClient", // Default tag if not provided
    },
  },
  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      message: "",
    };
  },
  methods: {
    async handleSubmit() {
      const config = useRuntimeConfig();
      try {
        const data = {
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.email,
          phone: this.phoneNumber, // Assuming the field is named 'phone' in your API
          message: this.message,
        };

        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", `${config.public.GHL_API_KEY}`);

        const raw = JSON.stringify({
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          phone: data.phone,
          tags: [this.tag], // Use the provided tag prop
        });

        const response = await fetch(
          "https://rest.gohighlevel.com/v1/contacts/",
          {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow",
          }
        );

        if (!response.ok) {
          throw new Error("Failed to submit form");
        }

        // Reset form fields or show success message
        this.firstName = "";
        this.lastName = "";
        this.email = "";
        this.phoneNumber = "";
        this.message = "";

        console.log("Form submitted successfully");
      } catch (error) {
        console.error("Error submitting form:", error);
      }
    },
  },
};
</script>