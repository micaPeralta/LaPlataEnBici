class Users::OmniauthCallbacksController < ApplicationController
	
	def facebook
		@user = User.from_omniauth(request.env["omniauth.auth"])
		if @user.persisted?
			@user.remember_me = true
			sign_in_and_redirect @user, event: :authentication
		else 
			raise request.env['omniauth.auth'].to_yaml
		end
	end

	def google_oauth2
		@user = User.from_omniauth(request.env["omniauth.auth"])
		if @user.persisted?
			@user.remember_me = true
			sign_in_and_redirect @user, event: :authentication
		else 
			 if User.where(email: @user.email)
			 	 redirect_to new_session_path(@user), alert:'Existe una cuenta con ese mismo mail'
				end
		end
	end 
	
end