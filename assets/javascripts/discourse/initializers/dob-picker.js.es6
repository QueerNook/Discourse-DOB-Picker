import { withPluginApi } from "discourse/lib/plugin-api";

export default {
  name: "dob-picker",

  initialize() {
    withPluginApi("0.8", (api) => {
      api.decorateWidget("user-custom-fields:after", (helper) => {
        const element = helper.rawHtml();

        const labels = element.querySelectorAll("label.control-label");
        labels.forEach((label) => {
          if (label.textContent.includes("Date of Birth")) {
            const inputId = label.getAttribute("for");
            const input = element.querySelector(`#${inputId}`);

            if (input && !input.classList.contains("dob-picker")) {
              input.type = "date";
              input.classList.add("dob-picker");
              input.placeholder = "YYYY-MM-DD";
            }
          }
        });

        return element;
      });
    });
  },
};

