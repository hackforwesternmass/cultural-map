json.array!(@landmarks) do |landmark|
  json.extract! landmark, :id, :landmark_type_id, :description, :short_description, :address_id, :picture_url
  json.url landmark_url(landmark, format: :json)
end
