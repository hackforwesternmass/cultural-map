class CreateAddresses < ActiveRecord::Migration
  def change
    create_table :addresses do |t|
      t.string :street
      t.integer :street_number
      t.string :city
      t.string :state

      t.timestamps
    end
  end
end
