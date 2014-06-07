# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

json = ActiveSupport::JSON.decode(File.read('db/seeds/test_landmarks.json'))

json.each do |a|

  a = a[1]
  puts a 
  address = Address.where(:latitude => a['lat'].to_f, :longitude => a['lon'].to_f).first_or_create

  Landmark.create(:landmark_type_id => 1, :description => a['name'], 
                  :short_description => a['name'], :address_id => address.id , :picture_url => nil)


end

