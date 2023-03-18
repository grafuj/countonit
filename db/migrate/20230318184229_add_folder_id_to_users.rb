class AddFolderIdToUsers < ActiveRecord::Migration[6.1]
  def change
    add_column :users, :folder_id, :integer
  end
end
