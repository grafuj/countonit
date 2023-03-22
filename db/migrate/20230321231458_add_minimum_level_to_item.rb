class AddMinimumLevelToItem < ActiveRecord::Migration[6.1]
  def change
    add_column :items, :minimum_level, :integer
  end
end
