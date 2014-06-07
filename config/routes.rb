Rails.application.routes.draw do
  resource :homepage, only: [:index]
  resources :addresses
  resources :landmarks
  devise_for :users
  root 'homepage#index'
end
