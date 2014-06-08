json.array!(@landmarks) do |landmark|
  json.extract! landmark, :id, :landmark_type_id, :description, :short_description, :picture_url, :street_number, :street, :city, :state, :latitude, :longitude
  json.url landmark_url(landmark, format: :json)
end
