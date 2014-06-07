Rails.application.routes.draw do
  resource :homepage, only: [:index]
  resources :land
  devise_for :users
  root 'homepage#index'
end
