json.array!(@landmarks) do |landmark|
  json.extract! landmark, :id, :landmark_type, :description, :short_description, :picture_url, :address, :city, :state, :latitude, :longitude
  json.url landmark_url(landmark, format: :json)
end
