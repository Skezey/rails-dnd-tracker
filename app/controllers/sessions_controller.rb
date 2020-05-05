require 'pry'
require_relative '/../../lib/json_web_token.rb'

class SessionsController < ApplicationController

  def http_token
    if request.headers['Authorization'].present?
      request.headers['Authorization'].split(' ').last
    end
  end

  def auth_token
    JsonWebToken.verify(http_token)
  end

  def create
    access_token = http_token
    user = User.create_from_token(access_token)
    user.save!
    #create cookie after user is made
    # cookies.encrypted[:current_user_id] = { value: user.id, expires: Time.now + 7.days }

    puts 'fuck this auth bullshit'
  end

  def destroy
    cookies.encrypted[:current_user_id] = nil

    redirect_to root_path
  end
end
