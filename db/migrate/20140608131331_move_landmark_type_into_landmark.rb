class MoveLandmarkTypeIntoLandmark < ActiveRecord::Migration
  def self.up
    drop_table :landmark_types
    add_column :landmarks, :landmark_type, :string
    remove_column :landmarks, :landmark_type_id
  end

  def self.down
    create_table :landmark_types do |t|
      t.string :description

      t.timestamps
    end
    remove_column :landmarks, :landmark_type, :string
    add_column :landmarks, :landmark_type_id, :id
  end
end
