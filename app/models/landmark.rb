class Landmark < ActiveRecord::Base
  geocoded_by :address

  def address
    [street_number, street, city, state, 'USA'].compact.join(', ')
  end
end
