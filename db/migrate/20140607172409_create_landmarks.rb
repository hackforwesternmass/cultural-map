class CreateLandmarks < ActiveRecord::Migration
  def change
    create_table :landmarks do |t|
      t.integer :landmark_type_id
      t.string :description
      t.string :short_description
      t.integer :address_id
      t.string :picture_url

      t.timestamps
    end
  end
end
