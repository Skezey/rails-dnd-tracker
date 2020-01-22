Rails.application.routes.draw do
  get 'api/private' => 'private#private'
  get 'api/private-scoped' => 'private#private_scoped'

  get '*other', to: 'static#index'
end
