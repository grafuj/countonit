class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :name

      t.references :folder, index: true, foreign_key: true
      t.references :department, foreign_key: true, index: true

      t.timestamps
    end
  end
end
