class AddDepartmentIdToItems < ActiveRecord::Migration[6.1]
  def change
    add_column :items, :department_id, :integer
  end
end
