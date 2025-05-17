# Discourse Profile DOB Plugin

This Discourse plugin adds a **Date of Birth (DOB)** calendar picker to user profiles using the native HTML5 date picker.

---

## 📦 Features

- Adds a "Date of Birth" field to user profiles.
- Uses the native calendar date picker for easy input.
- Stores DOB securely in Discourse's user custom fields.
- Simple and lightweight — no external dependencies required.

---

## 🚀 Installation

1. SSH into your Discourse server.
2. Navigate to the `plugins` directory: cd /var/www/discourse/plugins
3. Clone the repository: git clone https://github.com/queernook/discourse-profile-dob.git
4. Rebuild the Discourse app: cd /var/www/discourse
./launcher rebuild app
5. In Discourse Admin → Customize → User Fields, create a new custom field:
Name: Date of Birth
Type: Text
Show on Public Profile: No (Recommended)
Required: Optional or Yes (your choice)

---

## ⚠️ Privacy Considerations

Ensure GDPR and privacy regulation compliance when collecting DOB information.
Consider keeping the field hidden from public profiles.

---

## 📜 License

MIT License

---

Made with ❤️ by QueerNook.
