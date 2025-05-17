import { withPluginApi } from "discourse/lib/plugin-api";

export default {
  name: "dob-picker",

  initialize() {
    withPluginApi("0.8", (api) => {
      api.modifyClass("component:user-custom-fields", {
        didInsertElement() {
          this._super(...arguments);

          const label = this.element.querySelector("label[for='user_custom_field_1']");
          if (label && label.textContent.includes("Date of Birth")) {
            const input = this.element.querySelector("#user_custom_field_1");

            if (input && !input.classList.contains("dob-picker")) {
              input.type = "date"; // Native HTML5 date picker
              input.classList.add("dob-picker");
              input.placeholder = "YYYY-MM-DD";
            }
          }
        },
      });
    });
  },
};
