class SessionsController < ApplicationController
  skip_before_action :require_user

  def create
    # Get access tokens from the google server
    access_token = http_token
    user = User.create_from_token(access_token)
    user.save!

    #create cookie after user is made
    cookies.encrypted[:current_user_id] = { value: user.id, expires: Time.now + 7.days }

    redirect_to root_path
  end

  def destroy
    cookies.encrypted[:current_user_id] = nil

    redirect_to root_path
  end
end
