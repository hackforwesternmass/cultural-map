class CondenseAddressField < ActiveRecord::Migration
  def self.up
    remove_column :landmarks, :street
    remove_column :landmarks, :street_number
    add_column :landmarks, :address, :string
  end

  def self.down
    add_column :landmarks, :street, :string
    add_column :landmarks, :street_number, :integer
    remove_column :landmarks, :address
  end
end
