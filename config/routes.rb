Rails.application.routes.draw do
  get 'api/private' => 'private#private'
  get 'api/private-scoped' => 'private#private_scoped'

  resource :session, only: [:create, :destroy]

  namespace :api do
    resources :characters do
      resources :attributes
    end

  end

  get '*other', to: 'static#index'
end
