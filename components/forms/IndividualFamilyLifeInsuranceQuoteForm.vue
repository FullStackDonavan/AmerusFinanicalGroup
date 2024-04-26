<template>
  <div>
    <div class="px-4 mb-8 md:block">
      <form @submit.prevent="handleSubmit">
        <!-- Step 1: Personal Information -->

        <div v-if="currentStep === 1" key="step1">
          <h2>Step 1: Personal Information</h2>
          <!-- Input fields for personal information -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <!-- First Name -->
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
            <!-- Last Name -->
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
            <!-- Other input fields for personal information -->
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
          </div>
          <button
            @click="nextStep"
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded pagination-button"
            :disabled="currentStep === 4"
          >
            Next
          </button>
        </div>

        <!-- Step 2: Additional Information -->
        <div v-else-if="currentStep === 2" key="step2">
          <h2>Step 2: Additional Information</h2>
          <!-- Input fields for additional information -->
          <div class="relative mb-6 group">
            <label
              for="birthday"
              class="block mb-1 text-sm font-medium text-gray-700 text-left"
              >Date of Birth:</label
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
          <!-- Other input fields for additional information -->
          <div class="relative mb-6 group">
            <label
              class="block mb-1 text-sm font-medium text-gray-700 text-left"
              >Gender:</label
            >
            <div class="flex items-center">
              <input
                type="radio"
                v-model="gender"
                value="male"
                id="male"
                name="gender"
                class="form-radio h-5 w-5 text-indigo-600 transition duration-150 ease-in-out mr-2"
              />
              <label for="male" class="text-sm text-gray-700">Male</label>
            </div>
            <div class="flex items-center">
              <input
                type="radio"
                v-model="gender"
                value="female"
                id="female"
                name="gender"
                class="form-radio h-5 w-5 text-indigo-600 transition duration-150 ease-in-out mr-2"
              />
              <label for="female" class="text-sm text-gray-700">Female</label>
            </div>
          </div>

          <div class="relative mb-6 group">
            <label
              class="block mb-1 text-sm font-medium text-gray-700 text-left"
              >Tobacco Use:</label
            >
            <div class="flex items-center">
              <input
                type="radio"
                v-model="tobaccoUse"
                value="yes"
                id="tobaccoYes"
                name="tobaccoUse"
                class="form-radio h-5 w-5 text-indigo-600 transition duration-150 ease-in-out mr-2"
              />
              <label for="tobaccoYes" class="text-sm text-gray-700">Yes</label>
            </div>
            <div class="flex items-center">
              <input
                type="radio"
                v-model="tobaccoUse"
                value="no"
                id="tobaccoNo"
                name="tobaccoUse"
                class="form-radio h-5 w-5 text-indigo-600 transition duration-150 ease-in-out mr-2"
              />
              <label for="tobaccoNo" class="text-sm text-gray-700">No</label>
            </div>
          </div>

          <div class="relative mb-6 group">
            <label
              class="block mb-1 text-sm font-medium text-gray-700 text-left"
              >Any Serious Health Conditions:</label
            >
            <div class="flex items-center">
              <input
                type="radio"
                v-model="anySeriousHealthConditions"
                value="yes"
                id="seriousYes"
                name="anySeriousHealthConditions"
                class="form-radio h-5 w-5 text-indigo-600 transition duration-150 ease-in-out mr-2"
              />
              <label for="seriousYes" class="text-sm text-gray-700">Yes</label>
            </div>
            <div class="flex items-center">
              <input
                type="radio"
                v-model="anySeriousHealthConditions"
                value="no"
                id="seriousNo"
                name="anySeriousHealthConditions"
                class="form-radio h-5 w-5 text-indigo-600 transition duration-150 ease-in-out mr-2"
              />
              <label for="seriousNo" class="text-sm text-gray-700">No</label>
            </div>
          </div>

          <div class="relative mb-6 group">
            <label
              class="block mb-1 text-sm font-medium text-gray-700 text-left"
              >Any Chronic Health Conditions:</label
            >
            <div class="flex items-center">
              <input
                type="radio"
                v-model="anyChronicHealthConditions"
                value="yes"
                id="chronicYes"
                name="anyChronicHealthConditions "
                class="form-radio h-5 w-5 text-indigo-600 transition duration-150 ease-in-out mr-2"
              />
              <label for="chronicYes" class="text-sm text-gray-700">Yes</label>
            </div>
            <div class="flex items-center">
              <input
                type="radio"
                v-model="anyChronicHealthConditions"
                value="no"
                id="chronicNo"
                name="anyChronicHealthConditions "
                class="form-radio h-5 w-5 text-indigo-600 transition duration-150 ease-in-out mr-2"
              />
              <label for="chronicNo" class="text-sm text-gray-700">No</label>
            </div>
          </div>

          <button
            @click="prevStep"
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2 pagination-button"
            :disabled="currentStep === 1"
          >
            Previous
          </button>
          <button
            @click="nextStep"
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded pagination-button"
            :disabled="currentStep === 4"
          >
            Next
          </button>
        </div>

        <!-- Step 3: Coverage Type -->
        <div v-else-if="currentStep === 3" key="step3">
          <h2>Step 3: Coverage Type</h2>

          <!-- Other input fields for coverage type -->
          <div class="relative mb-6 group">
            <label
              class="block mb-1 text-sm font-medium text-gray-700 text-left"
              >Coverage Type:</label
            >
            <select
              v-model="coverageType"
              id="coverageType"
              name="coverageType"
              class="form-select block w-full py-2.5 px-4 text-sm text-gray-800 bg-gray-100 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
              required
            >
              <option value="">Select One</option>
              <option value="Whole Life">Whole Life</option>
              <option value="Term Life">Term Life</option>
              <option value="Universal Life">Universal Life</option>
              <option value="I Dont Know">I Dont Know</option>
            </select>
          </div>

          <!-- Additional input fields -->
          <div class="relative mb-6 group">
            <label
              class="block mb-1 text-sm font-medium text-gray-700 text-left"
              >Final Expenses:</label
            >
            <input
              type="number"
              v-model="finalExpenses"
              id="finalExpenses"
              name="finalExpenses"
              class="form-input block w-full py-2.5 px-4 text-sm text-gray-800 bg-gray-100 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          <div class="relative mb-6 group">
            <label
              class="block mb-1 text-sm font-medium text-gray-700 text-left"
              >Mortgage:</label
            >
            <input
              type="number"
              v-model="mortgage"
              id="mortgage"
              name="mortgage"
              class="form-input block w-full py-2.5 px-4 text-sm text-gray-800 bg-gray-100 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          <div class="relative mb-6 group">
            <label
              class="block mb-1 text-sm font-medium text-gray-700 text-left"
              >Other Debts:</label
            >
            <input
              type="number"
              v-model="otherDebts"
              id="otherDebts"
              name="otherDebts"
              class="form-input block w-full py-2.5 px-4 text-sm text-gray-800 bg-gray-100 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          <div class="relative mb-6 group">
            <label
              class="block mb-1 text-sm font-medium text-gray-700 text-left"
              >Emergency Fund:</label
            >
            <input
              type="number"
              v-model="emergencyFund"
              id="emergencyFund"
              name="emergencyFund"
              class="form-input block w-full py-2.5 px-4 text-sm text-gray-800 bg-gray-100 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          <div class="relative mb-6 group">
            <label
              class="block mb-1 text-sm font-medium text-gray-700 text-left"
              >Education Fund:</label
            >
            <input
              type="number"
              v-model="educationFund"
              id="educationFund"
              name="educationFund"
              class="form-input block w-full py-2.5 px-4 text-sm text-gray-800 bg-gray-100 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          <div class="relative mb-6 group">
            <label
              class="block mb-1 text-sm font-medium text-gray-700 text-left"
              >Current Annual Income:</label
            >
            <input
              type="number"
              v-model="currentAnnualIncome"
              id="currentAnnualIncome"
              name="currentAnnualIncome"
              class="form-input block w-full py-2.5 px-4 text-sm text-gray-800 bg-gray-100 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          <div class="relative mb-6 group">
            <label
              class="block mb-1 text-sm font-medium text-gray-700 text-left"
              >Number of Years Income Needed:</label
            >
            <input
              type="number"
              v-model="yearsIncomeNeeded"
              id="yearsIncomeNeeded"
              name="yearsIncomeNeeded"
              class="form-input block w-full py-2.5 px-4 text-sm text-gray-800 bg-gray-100 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          <button
            @click="prevStep"
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2 pagination-button"
            :disabled="currentStep === 1"
          >
            Previous
          </button>
          <button
            @click="nextStep"
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded pagination-button"
            :disabled="currentStep === 4"
          >
            Next
          </button>
        </div>

        <div v-if="currentStep === 4" key="step4">
          <h2>Step 4: Assets</h2>
          <div class="relative mb-6 group">
            <label
              class="block mb-1 text-sm font-medium text-gray-700 text-left"
              >Savings and Investments:</label
            >
            <input
              type="number"
              v-model="savingsAndInvestments"
              id="savingsAndInvestments"
              name="savingsAndInvestments"
              class="form-input block w-full py-2.5 px-4 text-sm text-gray-800 bg-gray-100 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          <div class="relative mb-6 group">
            <label
              class="block mb-1 text-sm font-medium text-gray-700 text-left"
              >Retirement Savings:</label
            >
            <input
              type="number"
              v-model="retirementSavings"
              id="retirementSavings"
              name="retirementSavings"
              class="form-input block w-full py-2.5 px-4 text-sm text-gray-800 bg-gray-100 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          <div class="relative mb-6 group">
            <label
              class="block mb-1 text-sm font-medium text-gray-700 text-left"
              >Other Assets:</label
            >
            <input
              type="number"
              v-model="otherAssets"
              id="otherAssets"
              name="otherAssets"
              class="form-input block w-full py-2.5 px-4 text-sm text-gray-800 bg-gray-100 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          <div class="relative mb-6 group">
            <label
              class="block mb-1 text-sm font-medium text-gray-700 text-left"
              >Current Life Insurance:</label
            >
            <input
              type="number"
              v-model="currentLifeInsurance"
              id="currentLifeInsurance"
              name="currentLifeInsurance"
              class="form-input block w-full py-2.5 px-4 text-sm text-gray-800 bg-gray-100 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <!-- 
          <div class="relative mb-6 group">
            <label
              class="block mb-1 text-sm font-medium text-gray-700 text-left"
              >Needs Summary:</label
            >
            <textarea
              rows="4"
              v-model="needsSummary"
              id="needsSummary"
              name="needsSummary"
              class="form-input block w-full py-2.5 px-4 text-sm text-gray-800 bg-gray-100 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
              required
            ></textarea>
          </div> -->
          <button
            @click="prevStep"
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2 pagination-button"
            :disabled="currentStep === 1"
          >
            Previous
          </button>
          <button
            type="submit"
            class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline pagination-button"
          >
            Submit
          </button>
        </div>
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
      currentStep: 1,
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      address: "",
      city: "",
      state: "",
      zipCode: "",
      birthday: "",
      gender: "",
      tobaccoUse: "",
      anySeriousHealthConditions: "",
      anyChronicHealthConditions: "",
      coverageType: "",
      finalExpenses: "",
      mortgage: "",
      otherDebts: "",
      emergencyFund: "",
      educationFund: "",
      currentAnnualIncome: "",
      yearsIncomeNeeded: "",
      savingsAndInvestments: "",
      retirementSavings: "",
      otherAssets: "",
      currentLifeInsurance: "",
      needsSummary: 0,
    };
  },

  methods: {
    async handleSubmit() {
      try {
        // Calculate needsSummary
        this.needsSummary =
          (parseFloat(this.finalExpenses) || 0) +
          (parseFloat(this.mortgage) || 0) +
          (parseFloat(this.otherDebts) || 0) +
          (parseFloat(this.emergencyFund) || 0) +
          (parseFloat(this.educationFund) || 0) -
          ((parseFloat(this.savingsAndInvestments) || 0) +
            (parseFloat(this.retirementSavings) || 0) +
            (parseFloat(this.otherAssets) || 0) +
            (parseFloat(this.currentLifeInsurance) || 0)) +
          (parseFloat(this.yearsIncomeNeeded) *
            parseFloat(this.currentAnnualIncome) || 0);
        // Create contact
        const contact = await this.createContact();

        // Lookup contact to get contactId
        const contactId = await this.lookupContact();

        // Make a note for the newly created contact
        const noteData = {
          contactId: contactId,
          body: `Gender: ${this.gender}\nTobacco Use: ${this.tobaccoUse}\nAny Serious Health Conditions: ${this.anySeriousHealthConditions}\nAny Chronic Health Conditions: ${this.anyChronicHealthConditions}\nBirthday: ${this.birthday}\nCoverage Type: ${this.coverageType}\nFinal Expenses: ${this.finalExpenses}\nMortgage: ${this.mortgage}\nOther Debts: ${this.otherDebts}\nEmergency Fund: ${this.emergencyFund}\nEducation Fund: ${this.educationFund}\nCurrent Annual Income: ${this.currentAnnualIncome}\nNumber of Years Income Needed: ${this.yearsIncomeNeeded}\nSavings and Investments: ${this.savingsAndInvestments}\nRetirement Savings: ${this.retirementSavings}\nOther Assets: ${this.otherAssets}\nCurrent Life Insurance: ${this.currentLifeInsurance}\nNeeds Summary: ${this.needsSummary}`,
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
          gender: this.gender,
          tobaccoUse: this.tobaccoUse,
          anySeriousHealthConditions: this.anySeriousHealthConditions,
          anyChronicHealthConditions: this.anyChronicHealthConditions,
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
      // Reset all form fields to their initial state or show a success message
      this.firstName = "";
      this.lastName = "";
      this.email = "";
      this.phoneNumber = "";
      this.address = "";
      this.city = "";
      this.state = "";
      this.zipCode = "";
      this.birthday = "";
      this.gender = "";
      this.tobaccoUse = "";
      this.anySeriousHealthConditions = "";
      this.anyChronicHealthConditions = "";
      this.coverageType = "";
      this.finalExpenses = "";
      this.mortgage = "";
      this.otherDebts = "";
      this.emergencyFund = "";
      this.educationFund = "";
      this.currentAnnualIncome = "";
      this.yearsIncomeNeeded = "";
      this.savingsAndInvestments = "";
      this.retirementSavings = "";
      this.otherAssets = "";
      this.currentLifeInsurance = "";
      this.needsSummary = "";

      // Reset any other state variables or show success message logic
    },
    nextStep() {
      this.currentStep++;
    },
    prevStep() {
      this.currentStep--;
    },
  },
};
</script>
<style>
.pagination-button {
  transition: all 0.3s ease; /* Apply transition to all properties with 0.3s duration and ease timing function */
}

.pagination-button:hover {
  transform: scale(1.05); /* Increase button size on hover */
}
</style>