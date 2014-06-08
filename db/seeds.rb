# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

# Import Landmarks
json = ActiveSupport::JSON.decode(File.read('db/seeds/landmarks.json'))
json.each do |a|
  a = a[1]
  Landmark.create(:description => a['name'],
                  :short_description => a['name'],
                  :picture_url => nil,
                  :address => a['address'],
                  :city => a['city'],
                  :state => a['state'],
                  :latitude => a['lat'],
                  :longitude => a['lon'],
                  :landmark_type => a['landmark_type'])
end
