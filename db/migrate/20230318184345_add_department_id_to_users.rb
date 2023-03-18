class AddDepartmentIdToUsers < ActiveRecord::Migration[6.1]
  def change
    add_column :users, :department_id, :integer
  end
end
