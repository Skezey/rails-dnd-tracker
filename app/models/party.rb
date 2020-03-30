class Party < ApplicationRecord
  has_many :users, :through => :memberships
end
