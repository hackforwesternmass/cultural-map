Rails.application.routes.draw do
  root 'homepage#index'

  devise_for :users

  scope '/api' do
    resource :homepage, only: [:index]
    resources :landmarks
  end
end
