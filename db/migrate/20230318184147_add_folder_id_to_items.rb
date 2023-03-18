class AddFolderIdToItems < ActiveRecord::Migration[6.1]
  def change
    # add_reference :items, :folder_id, :integer, foreign_key: true
  end
end
