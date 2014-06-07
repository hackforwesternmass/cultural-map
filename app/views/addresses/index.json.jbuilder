json.array!(@addresses) do |address|
  json.extract! address, :id, :street_number, :street, :city, :state, :latitude, :longitude
  json.url address_url(address, format: :json)
end
