class ChangeDescriptionStringToText < ActiveRecord::Migration
  def self.up
    change_column :landmarks, :description, :text
  end

  def self.down
    change_column :landmarks, :description, :string
  end
end
