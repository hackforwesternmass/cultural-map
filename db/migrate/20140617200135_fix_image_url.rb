class FixImageUrl < ActiveRecord::Migration
  def change
    change_column :landmarks, :picture_url, :image_url 
  end
end
