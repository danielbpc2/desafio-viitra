Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  get "/users", to: "users#index", as: "users_index"
  get "/users/:id", to: "users#show", as: "users_show"
  post "/users", to: "users#create", as: "users_create"
  put "/users/:id", to: "users#update", as: "users_update"
  delete "/users/:id", to: "users#destroy", as: "users_destroy"
  # login
  post "/login", to: "users#login"
  get "/auto_login", to: "users#auto_login"
end
