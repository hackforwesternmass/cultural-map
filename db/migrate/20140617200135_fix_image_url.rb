class FixImageUrl < ActiveRecord::Migration
  def change
    rename_column :landmarks, :picture_url, :image_url 
  end
end
