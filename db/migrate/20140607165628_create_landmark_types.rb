class CreateLandmarkTypes < ActiveRecord::Migration
  def change
    create_table :landmark_types do |t|
      t.string :description

      t.timestamps
    end
  end
end
