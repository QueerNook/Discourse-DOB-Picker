# name: discourse-profile-dob
# about: Adds a date of birth field to user profiles
# version: 3.0.1
# authors: QueerNook
# url: https://github.com/QueerNook/Discourse-Profile-DOB

enabled_site_setting :profile_dob_enabled

register_site_setting :profile_dob_enabled, type: :bool, default: true, description: 'Enable date of birth field in user profiles'

register_asset 'stylesheets/dob-picker.scss'
register_asset 'javascripts/dob-picker.js'

after_initialize do
  # Add the date of birth field to the user profile
  add_to_serializer(:user, :date_of_birth) do
    object.custom_fields['date_of_birth']
  end
end
