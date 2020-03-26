class Api::CharactersController < ApplicationController
  def index
    render json: Characters.all
  end

  def create
    @post = Post.new(post_params)
    if @post.save
      render json: @post
    else
      render json: { errors: @post.errors }, status: :unprocessable_entity
    end
  end

  def update
    @post = Post.find(params[:id])
    if @post.update(post_params)
      render json: @post
    else
      render json: { errors: @post.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    Post.find(params[:id]).destroy
    render json: { message: 'post deleted'}
  end

  private
  def post_params
    # { post: {title: '', body: ''} }
    params.require(:post).permit(:title, :body)
  end
end
