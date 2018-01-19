class CreateStations < ActiveRecord::Migration[5.0]
  def change
    create_table :stations do |t|
      t.string :name
      t.integer :capacity
      t.string :latitude
      t.string :longitude
      t.string :estate
      t.string :location

      t.timestamps
    end
  end
end
