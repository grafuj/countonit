class CreateDepartments < ActiveRecord::Migration[6.1]
  def change
    create_table :departments do |t|
      t.string :name

      t.references :folders, foreign_key: true, index: true

      t.timestamps
    end
  end
end
