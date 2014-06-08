Rails.application.routes.draw do
  root 'homepage#index'

  devise_for :users

  resource :homepage, only: [:index]
  resources :landmarks
end
