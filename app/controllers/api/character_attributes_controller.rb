class Api::CharactersAttributesController < ApplicationController
  include Secured

  before_action :set_character

  def index
    render json: @character.character_attributes.all
  end

  def create
    @attribute = @character.character_attributes.new(attribute_params)
    if @attribute.save
      render json: @attribute
    else
      render json: { errors: @attribute.errors }, status: :unprocessable_entity
    end
  end

  def update
    @attribute = @character.character_attributes.find(params[:id])
    if @character.update(attribute_params)
      render json: @attribute
    else
      render json: { errors: @attribute.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    @attribute.find(params[:id]).destroy
    render json: { message: 'attribute deleted'}
  end

  private
  def attribute_params
    params.require(:attribute).permit(
                                    :strength,
                                    :charisma,
                                    :intelligence,
                                    :dexterity,
                                    :constitution,
                                    :wisdom
                                    )
  end

  def set_character
    @character = Character.find(params[:character_id])
  end
end
