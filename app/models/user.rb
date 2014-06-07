class User < ActiveRecord::Base
  # The complete list of Devise modules is available at https://github.com/plataformatec/devise
  devise :database_authenticatable, :registerable, :recoverable, :rememberable, :trackable, :validatable
end
