Rails.application.routes.draw do
  resources :landmarks
  devise_for :users
  root 'landmarks#index'
end
