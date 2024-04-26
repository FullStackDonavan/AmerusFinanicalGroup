<template>
  <div>
    <div class="px-4 mb-8 md:block">
      <form @submit.prevent="handleSubmit">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="relative mb-6 group">
            <label
              for="floating_first_name"
              class="block mb-1 text-sm font-medium text-gray-700 text-left"
              >First Name:</label
            >
            <input
              type="text"
              v-model="firstName"
              id="floating_first_name"
              name="floating_first_name"
              class="block w-full py-2.5 px-4 text-sm text-gray-800 bg-gray-100 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
              placeholder=" "
              required
            />
          </div>
          <div class="relative mb-6 group">
            <label
              for="floating_last_name"
              class="block mb-1 text-sm font-medium text-gray-700 text-left"
              >Last Name:</label
            >
            <input
              type="text"
              v-model="lastName"
              id="floating_last_name"
              name="floating_last_name"
              class="block w-full py-2.5 px-4 text-sm text-gray-800 bg-gray-100 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
              placeholder=" "
              required
            />
          </div>
        </div>

        <div class="relative mb-6 group">
          <label
            for="email"
            class="block mb-1 text-sm font-medium text-gray-700 text-left"
            >Email:</label
          >
          <input
            type="email"
            v-model="email"
            id="email"
            name="email"
            class="block w-full py-2.5 px-4 text-sm text-gray-800 bg-gray-100 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
            placeholder=" "
            required
          />
        </div>

        <div class="relative mb-6 group">
          <label
            for="phoneNumber"
            class="block mb-1 text-sm font-medium text-gray-700 text-left"
            >Phone Number:</label
          >
          <input
            type="tel"
            v-model="phoneNumber"
            id="phoneNumber"
            name="phoneNumber"
            class="block w-full py-2.5 px-4 text-sm text-gray-800 bg-gray-100 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
            placeholder=" "
            required
          />
        </div>

        <div class="relative mb-6 group">
          <label
            for="birthday"
            class="block mb-1 text-sm font-medium text-gray-700 text-left"
            >Birthday:</label
          >
          <input
            type="date"
            v-model="birthday"
            id="birthday"
            name="birthday"
            class="block w-full py-2.5 px-4 text-sm text-gray-800 bg-gray-100 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
            placeholder=" "
            required
          />
        </div>

        <div class="relative mb-6 group">
          <label
            for="address"
            class="block mb-1 text-sm font-medium text-gray-700 text-left"
            >Address:</label
          >
          <input
            type="text"
            v-model="address"
            id="address"
            name="address"
            class="block w-full py-2.5 px-4 text-sm text-gray-800 bg-gray-100 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
            placeholder=" "
            required
          />
        </div>

        <div class="relative mb-6 group">
          <label
            for="city"
            class="block mb-1 text-sm font-medium text-gray-700 text-left"
            >City:</label
          >
          <input
            type="text"
            v-model="city"
            id="city"
            name="city"
            class="block w-full py-2.5 px-4 text-sm text-gray-800 bg-gray-100 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
            placeholder=" "
            required
          />
        </div>

        <div class="relative mb-6 group">
          <label
            for="state"
            class="block mb-1 text-sm font-medium text-gray-700 text-left"
            >State:</label
          >
          <input
            type="text"
            v-model="state"
            id="state"
            name="state"
            class="block w-full py-2.5 px-4 text-sm text-gray-800 bg-gray-100 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
            placeholder=" "
            required
          />
        </div>

        <div class="relative mb-6 group">
          <label
            for="zipCode"
            class="block mb-1 text-sm font-medium text-gray-700 text-left"
            >Zip Code:</label
          >
          <input
            type="text"
            v-model="zipCode"
            id="zipCode"
            name="zipCode"
            class="block w-full py-2.5 px-4 text-sm text-gray-800 bg-gray-100 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
            placeholder=" "
            required
          />
        </div>

        <button
          type="submit"
          class="block w-full py-2.5 px-5 text-sm text-white bg-indigo-600 hover:bg-indigo-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-lg dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Request Quote
        </button>
      </form>
      <LegalText
        >By clicking the button and submitting this form, I agree that I am 18+
        years old and I provide my signature expressly consenting to receive
        emails, calls, postal mail, text messages and other forms of
        communication regarding Health Insurance, or other offers from these
        companies and agents to the number(s) I provided, including a mobile
        phone, even if I am on a state or federal Do Not Call and/or Do Not
        Email registry. The list of companies participating are subject to
        change. You will receive calls from a maximum of eight providers. Such
        calls and text messages may use automated telephone dialing systems,
        artificial or pre-recorded voices. I understand my wireless carrier may
        impose charges for calls or texts. I understand that my consent to
        receive communications is not a condition of purchase and I may revoke
        my consent at any time.By using this site, you acknowledge that you have
        read and agree to the Privacy Policy.</LegalText
      >
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
      birthday: "",
      address: "",
      city: "",
      state: "",
      zipCode: "",
      tags: [],
    };
  },
  methods: {
    async handleSubmit() {
      try {
        // Create contact
        const contact = await this.createContact();

        // Lookup contact to get contactId
        const contactId = await this.lookupContact();

        // Make a note for the newly created contact
        const noteData = {
          contactId: contactId,
          body: `Birthday: ${this.birthday}\nAddress: ${this.address}\nCity: ${this.city}\nState: ${this.state}\nZip Code: ${this.zipCode}`,
        };

        const noteResponse = await this.createNote(noteData);

        if (!noteResponse.ok) {
          throw new Error("Failed to create note");
        }

        // Reset form fields or show success message
        this.resetForm();

        console.log("Form submitted successfully");
      } catch (error) {
        console.error("Error submitting form:", error);
      }
    },
    async createContact() {
      try {
        const config = useRuntimeConfig();
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", `${config.public.GHL_API_KEY}`);

        const data = {
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.email,
          phone: this.phoneNumber,
          address: this.address,
          city: this.city,
          state: this.state,
          zipCode: this.zipCode,
          birthday: this.birthday,
          tags: [this.tag], // Assuming this is a tag field
        };

        const raw = JSON.stringify(data);

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
          throw new Error("Failed to create contact");
        }

        const contact = await response.json();
        console.log("Created contact:", contact); // Log the contact object

        return contact; // Return the contact object
      } catch (error) {
        console.error("Error creating contact:", error);
        throw error;
      }
    },
    async createNote(data) {
      try {
        const config = useRuntimeConfig();
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", `${config.public.GHL_API_KEY}`);

        const raw = JSON.stringify(data);
        console.log("data ", data);
        return await fetch(
          `https://rest.gohighlevel.com/v1/contacts/${data.contactId}/notes/`,
          {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow",
          }
        );
      } catch (error) {
        console.error("Error creating note:", error);
        throw error;
      }
    },
    async lookupContact() {
      const config = useRuntimeConfig();
      try {
        const myHeaders = new Headers();
        myHeaders.append("Authorization", `${config.public.GHL_API_KEY}`);

        const requestOptions = {
          method: "GET",
          headers: myHeaders,
          redirect: "follow",
        };

        const response = await fetch(
          `https://rest.gohighlevel.com/v1/contacts/lookup?email=${this.email}&phone=${this.phoneNumber}`,
          requestOptions
        );

        if (!response.ok) {
          throw new Error("Failed to fetch contact data");
        }

        const data = await response.json();
        console.log("Lookup contact response:", data); // Log the response

        // Assuming contacts array contains multiple contacts, get the first one
        const contacted = data.contacts[0];

        if (!contacted) {
          throw new Error("No contact found");
        }

        return contacted.id; // Return the id of the contacted contact
      } catch (error) {
        console.error("Error looking up contact:", error);
        throw error;
      }
    },
    resetForm() {
      // Reset form fields here
      this.firstName = "";
      this.lastName = "";
      this.email = "";
      this.phoneNumber = "";
      this.birthday = "";
      this.address = "";
      this.city = "";
      this.state = "";
      this.zipCode = "";
      this.tags = [];
    },
  },
};
</script>
