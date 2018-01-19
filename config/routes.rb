Rails.application.routes.draw do
  
  
   resources :stations  

  # devise_scope :user do
  # 	get 'login', to: 'devise/sessions#new'
  # end

  devise_for :users ,controllers: {
  	omniauth_callbacks: 'users/omniauth_callbacks' 
  }
  # get 'dashboard', to: 'function#home_admin'
  # get 'panel', to: 'function#home_user'


	authenticated :user do 
  		root to: 'function#home'
 	end

 	unauthenticated :user do
 		 root to: 'function#index'
 	end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
