# name: discourse-profile-dob
# about: Adds a Date of Birth calendar picker to user profiles
# version: 0.3
# authors: QueerNook Team
# url: https://github.com/queernook/discourse-profile-dob

after_initialize do
  # Register the custom user field for DOB
  register_editable_user_custom_field :date_of_birth

  # Expose DOB in user serializer (optional, for API access)
  add_to_serializer(:user, :date_of_birth) do
    object.custom_fields['date_of_birth']
  end
end
