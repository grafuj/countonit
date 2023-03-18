class CreateItems < ActiveRecord::Migration[6.1]
  def change
    create_table :items do |t|
      t.string :name
      t.text :description
      t.string :image
      t.integer :price_cents
      t.integer :quantity

      t.references :folders, foreign_key: true, index: true
      t.references :departments, foreign_key: true, index: true


      t.timestamps
    end
  end
end
