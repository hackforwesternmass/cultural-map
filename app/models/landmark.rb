class Landmark < ActiveRecord::Base
  geocoded_by :address

  def full_address
    [address, city, state, 'USA'].compact.join(', ')
  end
end
