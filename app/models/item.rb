class Item < ApplicationRecord
  belongs_to :folder

  validates :name, presence: true

  # has_one_attached :image
end
