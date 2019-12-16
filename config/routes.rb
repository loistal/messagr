Rails.application.routes.draw do
  root 'chatroom#index'
  get 'login', to: 'sessions#new'
  get 'chatroom', to: 'chatroom#index'
end
