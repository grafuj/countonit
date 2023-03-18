class AddDepartmentIdToUsers < ActiveRecord::Migration[6.1]
  def change
    # add_reference :users, :department_id, :integer, index: true, foreign_key: true
  end
end
