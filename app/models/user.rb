require_relative '../../lib/json_web_token.rb'
require 'jwt'

class User < ApplicationRecord
  has_many :characters

  def self.create_from_token(token)
    t = JsonWebToken.verify(token)
     # Creates a new user only if it doesn't exist
     where(uid: t['sub']).first_or_initialize do |user|
         user.uid = t['sub']
     end
   end
end
