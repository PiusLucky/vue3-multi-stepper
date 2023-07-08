<template>
  <Vue3MultiStepper
    v-model:step="step"
    :tabs="tabs"
    primaryColor1="#79031D"
    primaryColor2="#F2E6E8"
    backText="Go Back"
    nextText="Next"
    doneText="Finish"
    :loading="loading"
    :finalize="handleFormSubmission"
    :validateStep="validateStep"
  >
    <template #1>
      <section>
        <div>
          "Begin today!" That's all the note said. There was no indication from
          where it came or who may have written it. Had it been meant for
          someone else? Meghan looked around the room, but nobody made eye
          contact back. For a brief moment, she thought it might be a message
          for her to follow her dreams, but ultimately decided it was easier to
          ignore it as she crumpled it up and threw it away.
        </div>

        <div><img src="https://i.pravatar.cc/300" class="br" /></div>
        <h3>Step {{ step }}</h3>
      </section>
    </template>
    <template #2>
      <section>
        <div>
          She was in a hurry. Not the standard hurry when you're in a rush to
          get someplace, but a frantic hurry. The type of hurry where a few
          seconds could mean life or death. She raced down the road ignoring
          speed limits and weaving between cars. She was only a few minutes away
          when traffic came to a dead standstill on the road ahead.
        </div>
        <div><img src="https://i.pravatar.cc/300" class="br" /></div>
        <h3>Step {{ step }}</h3>
      </section>
    </template>
    <template #3>
      <section>
        <div>
          Here's the thing. She doesn't have anything to prove, but she is going
          to anyway. That's just her character. She knows she doesn't have to,
          but she still will just to show you that she can. Doubt her more and
          she'll prove she can again. We all already know this and you will too.
        </div>
        <div><img src="https://i.pravatar.cc/300" class="br" /></div>
        <h3>Step {{ step }}</h3>
      </section>
    </template>
    <template #4>
      <section>
        <div>
          He sat across from her trying to imagine it was the first time. It
          wasn't. Had it been a hundred? It quite possibly could have been. Two
          hundred? Probably not. His mind wandered until he caught himself and
          again tried to imagine it was the first time.
        </div>
        <div><img src="https://i.pravatar.cc/300" class="br" /></div>
        <h3>Step {{ step }}</h3>
      </section>
    </template>
    <template #5>
      <section>
        <div>
          It's not his fault. I know you're going to want to, but you can't
          blame him. He really has no idea how it happened. I kept trying to
          come up with excuses I could say to mom that would keep her calm when
          she found out what happened, but the more I tried, the more I could
          see none of them would work. He was going to get her wrath and there
          was nothing I could say to prevent it.
        </div>
        <div><img src="https://i.pravatar.cc/300" class="br" /></div>
        <h3>Step {{ step }}</h3>
      </section>
    </template>
  </Vue3MultiStepper>
</template>

<script>
import { computed } from "vue";
import Vue3MultiStepper from "@/components/Vue3MultiStepper.vue";

export default {
  components: {
    Vue3MultiStepper,
  },
  name: "App",
  data() {
    return {
      step: 1,
      loading: false,
      // NB: Use computed properties just in case you feel like using translations (e.g this.$t)
      tabs: computed(() => {
        return [
          {
            title: "Company",
            iconSuccess: null,
            isValid: true,
          },
          {
            title: "Company Additional Info",
            iconSuccess: null,
            isValid: true,
          },
          {
            title: "Employees",
            iconSuccess: null,
            isValid: true,
          },

          {
            title: "Your Details",
            iconSuccess: null,
            isValid: true,
          },
          {
            title: "Verification",
            iconSuccess: null,
            isValid: true,
          },
        ];
      }),
    };
  },
  methods: {
    async handleFormSubmission() {
      this.loading = true;

      // After 2 seconds, reload the page and start the flow again
      setTimeout(() => {
        location.reload();
      }, 2000);
    },

    validateStep(step) {
      // Perform validation based on the current step
      // Return true if the step is valid, otherwise return false
      if (step === 1) {
        return this.step1Check();
      } else if (step === 2) {
        return this.step2Check();
      } else if (step === 3) {
        return this.step3Check();
      } else if (step === 4) {
        return this.step4Check();
      }

      return true; // Default to true if no validation is implemented
    },

    /**
     * The `step1Check()` function is responsible for performing a check or validation and returning a boolean value.
     * If the returned value is `true`, it indicates that the check has passed successfully, allowing the code to proceed to the next step in the JavaScript execution flow.
     *
     * This function is commonly used in multi-step processes or conditional branching scenarios. It helps determine whether the conditions required for the next step to be executed have been met.
     *
     * The implementation details of the check performed in `step1Check()` may vary depending on the specific requirements of the software being developed. It could involve verifying certain data, validating user input, or checking the state of the application.
     *
     * Upon receiving a `true` result from `step1Check()`, the calling code can safely proceed to execute the subsequent steps or perform further actions. If `false` is returned, it indicates that the check failed, and appropriate actions can be taken to handle the failed condition.
     *
     * It is important to note that this function plays a crucial role in determining whether the code can progress to the next step based on the successful completion of a specific check or condition.
     *
     * @returns {boolean} - `true` if the check succeeds, allowing the code to proceed to the next step; `false` if the check fails, indicating the need for alternative actions.
     */
    step1Check() {
      return true;
    },
    /**
     * The `step2Check()` function is responsible for performing a check or validation and returning a boolean value.
     * If the returned value is `true`, it indicates that the check has passed successfully, allowing the code to proceed to the next step in the JavaScript execution flow.
     *
     * This function is commonly used in multi-step processes or conditional branching scenarios. It helps determine whether the conditions required for the next step to be executed have been met.
     *
     * The implementation details of the check performed in `step2Check()` may vary depending on the specific requirements of the software being developed. It could involve verifying certain data, validating user input, or checking the state of the application.
     *
     * Upon receiving a `true` result from `step2Check()`, the calling code can safely proceed to execute the subsequent steps or perform further actions. If `false` is returned, it indicates that the check failed, and appropriate actions can be taken to handle the failed condition.
     *
     * It is important to note that this function plays a crucial role in determining whether the code can progress to the next step based on the successful completion of a specific check or condition.
     *
     * @returns {boolean} - `true` if the check succeeds, allowing the code to proceed to the next step; `false` if the check fails, indicating the need for alternative actions.
     */
    step2Check() {
      return true;
    },
    /**
     * The `step3Check()` function is responsible for performing a check or validation and returning a boolean value.
     * If the returned value is `true`, it indicates that the check has passed successfully, allowing the code to proceed to the next step in the JavaScript execution flow.
     *
     * This function is commonly used in multi-step processes or conditional branching scenarios. It helps determine whether the conditions required for the next step to be executed have been met.
     *
     * The implementation details of the check performed in `step3Check()` may vary depending on the specific requirements of the software being developed. It could involve verifying certain data, validating user input, or checking the state of the application.
     *
     * Upon receiving a `true` result from `step3Check()`, the calling code can safely proceed to execute the subsequent steps or perform further actions. If `false` is returned, it indicates that the check failed, and appropriate actions can be taken to handle the failed condition.
     *
     * It is important to note that this function plays a crucial role in determining whether the code can progress to the next step based on the successful completion of a specific check or condition.
     *
     * @returns {boolean} - `true` if the check succeeds, allowing the code to proceed to the next step; `false` if the check fails, indicating the need for alternative actions.
     */
    step3Check() {
      return true;
    },

    /**
     * The `step4Check()` function is responsible for performing a check or validation and returning a boolean value.
     * If the returned value is `true`, it indicates that the check has passed successfully, allowing the code to proceed to the next step in the JavaScript execution flow.
     *
     * This function is commonly used in multi-step processes or conditional branching scenarios. It helps determine whether the conditions required for the next step to be executed have been met.
     *
     * The implementation details of the check performed in `step4Check()` may vary depending on the specific requirements of the software being developed. It could involve verifying certain data, validating user input, or checking the state of the application.
     *
     * Upon receiving a `true` result from `step4Check()`, the calling code can safely proceed to execute the subsequent steps or perform further actions. If `false` is returned, it indicates that the check failed, and appropriate actions can be taken to handle the failed condition.
     *
     * It is important to note that this function plays a crucial role in determining whether the code can progress to the next step based on the successful completion of a specific check or condition.
     *
     * @returns {boolean} - `true` if the check succeeds, allowing the code to proceed to the next step; `false` if the check fails, indicating the need for alternative actions.
     */
    step4Check() {
      return true;
    },
    /**
     * The `step5Check()` function is responsible for performing a check or validation and returning a boolean value.
     * If the returned value is `true`, it indicates that the check has passed successfully, allowing the code to proceed to the next step in the JavaScript execution flow.
     *
     * This function is commonly used in multi-step processes or conditional branching scenarios. It helps determine whether the conditions required for the next step to be executed have been met.
     *
     * The implementation details of the check performed in `step5Check()` may vary depending on the specific requirements of the software being developed. It could involve verifying certain data, validating user input, or checking the state of the application.
     *
     * Upon receiving a `true` result from `step5Check()`, the calling code can safely proceed to execute the subsequent steps or perform further actions. If `false` is returned, it indicates that the check failed, and appropriate actions can be taken to handle the failed condition.
     *
     * It is important to note that this function plays a crucial role in determining whether the code can progress to the next step based on the successful completion of a specific check or condition.
     *
     * @returns {boolean} - `true` if the check succeeds, allowing the code to proceed to the next step; `false` if the check fails, indicating the need for alternative actions.
     */
    step5Check() {
      return true;
    },
  },
};
</script>

<style scoped>
.br {
  margin-top: 1rem;
  border-radius: 10px;
}
</style>
