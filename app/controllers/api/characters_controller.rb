require 'pry'

class Api::CharactersController < ApplicationController
  include Secured

  def index
    render json: @user.characters.all
  end

  def create
    @character = @user.characters.new(character_params)
    if @character.save
      render json: @character
    else
      render json: { errors: @character.errors }, status: :unprocessable_entity
    end
  end

  def update
    @character = @user.characters.find(params[:id])
    if @character.update(character_params)
      render json: @character
    else
      render json: { errors: @character.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    @character.find(params[:id]).destroy
    render json: { message: 'character deleted'}
  end

  private
  def character_params
    params.require(:character).permit(:name,
                                      :race,
                                      :class,
                                      :level,
                                      :alignment,
                                      :back_story,
                                      :traits
                                    )
  end

end
