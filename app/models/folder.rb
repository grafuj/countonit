class Folder < ApplicationRecord
  has_many :departments
  has_many :items
  has_many :users

  validates :name, presence: true
end
