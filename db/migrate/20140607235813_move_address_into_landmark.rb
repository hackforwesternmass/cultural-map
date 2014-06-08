class MoveAddressIntoLandmark < ActiveRecord::Migration
  def self.up
    drop_table :addresses

    add_column :landmarks, :street, :string
    add_column :landmarks, :street_number, :integer
    add_column :landmarks, :city, :string
    add_column :landmarks, :state, :string
    add_column :landmarks, :latitude, :float
    add_column :landmarks, :longitude, :float

    remove_column :landmarks, :address_id
  end

  def self.down
    create_table :addresses do |t|
      t.string :street
      t.integer :street_number
      t.string :city
      t.string :state
      t.float :latitude
      t.float :longitude

      t.timestamps
    end

    remove_column :landmarks, :street, :string
    remove_column :landmarks, :street_number, :integer
    remove_column :landmarks, :city, :string
    remove_column :landmarks, :state, :string
    remove_column :landmarks, :latitude, :float
    remove_column :landmarks, :longitude, :float

    add_column :landmarks, :address_id
  end
end
