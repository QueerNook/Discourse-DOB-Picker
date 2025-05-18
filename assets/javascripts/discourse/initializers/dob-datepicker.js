import { withPluginApi } from "discourse/lib/plugin-api";

function initializeDOBDatepicker(api) {
  api.modifyClass("component:user-card", {
    pluginId: "discourse-profile-dob",
    
    didInsertElement() {
      this._super(...arguments);
      
      const dobField = document.querySelector(".user-card-dob-field");
      if (dobField) {
        dobField.type = "date";
      }
    }
  });
}

export default {
  name: "discourse-profile-dob",
  initialize() {
    withPluginApi("0.8.31", initializeDOBDatepicker);
  }
}; 