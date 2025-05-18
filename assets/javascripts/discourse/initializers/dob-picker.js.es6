import { withPluginApi } from "discourse/lib/plugin-api";

export default {
  name: "dob-picker",

  initialize() {
    withPluginApi("0.8", (api) => {
      api.modifyClass("component:user-custom-fields", {
        didInsertElement() {
          this._super(...arguments);

          const labels = this.element.querySelectorAll("label.control-label");
          labels.forEach((label) => {
            if (label.textContent.includes("Date of Birth")) {
              const inputId = label.getAttribute("for");
              const input = this.element.querySelector(`#${inputId}`);

              if (input && !input.classList.contains("dob-picker")) {
                input.type = "date";  // HTML5 native date picker
                input.classList.add("dob-picker");
                input.placeholder = "YYYY-MM-DD";
              }
            }
          });
        },
      });
    });
  },
};
