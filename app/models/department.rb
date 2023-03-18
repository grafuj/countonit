class Department < ApplicationRecord
  belongs_to :folder
  has_many :users
  validates :name, presence: true
end
