class Character < ApplicationRecord
  belongs_to :user
  has_many :character_attributes
end
