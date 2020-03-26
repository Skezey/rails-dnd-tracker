require_relative '../../lib/json_web_token.rb'
require 'jwt'

class User < ApplicationRecord
  has_many :characters

  def self.create_from_token(token)
     # Creates a new user only if it doesn't exist
     where(uid: token['sub']).first_or_initialize do |user|
         user.uid = token['sub']
     end
   end
end
