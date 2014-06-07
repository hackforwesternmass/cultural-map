class Address < ActiveRecord::Base
  geocoded_by :address  # can also be an IP address
  after_validation :geocode          # auto-fetch coordinates

  def address
    [street_number,street, city, state, "USA"].compact.join(', ')
  end

end
