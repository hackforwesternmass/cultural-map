class Address < ActiveRecord::Base
  has_many :landmarks
  geocoded_by :address      # can also be an IP address
 
  def address
    [street_number,street, city, state, 'USA'].compact.join(', ')
  end
end
