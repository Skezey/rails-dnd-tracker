Rails.application.routes.draw do
  get 'api/private' => 'private#private'
  get 'api/private-scoped' => 'private#private_scoped'

  resource :session, only: [:create, :destroy]
  get 'auth/auth0/callback' => 'sessions#create'
  get 'auth/failure' => 'sessions#destroy'

  namespace :api do
    resources :characters do
      resources :character_attributes
    end
    resources :memberships
    resources :parties
  end

  get '*other', to: 'static#index'
end
