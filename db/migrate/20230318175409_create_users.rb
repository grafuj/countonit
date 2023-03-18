class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :name


      t.references :folders, foreign_key: true, index: true
      t.references :departments, foreign_key: true, index: true


      t.timestamps
    end
  end
end
