json.array!(@landmarks) do |landmark|
  json.extract! landmark, :id, :landmark_type_id, :description, :short_description, :picture_url
  json.url landmark_url(landmark, format: :json)
  if landmark.address 
    json.extract! landmark.address, :id, :latitude, :longitude  
  end 
end
