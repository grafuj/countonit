class AddFolderIdToDepartments < ActiveRecord::Migration[6.1]
  def change
    # add_reference :departments, :folder_id, :integer, index: true, foreign_key: true
  end
end
