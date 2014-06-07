Rails.application.routes.draw do
  resource :homepage, only: [:index]
  resources :landmarks
  devise_for :users
  root 'homepage#index'
end
