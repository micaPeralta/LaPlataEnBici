

class FunctionController < ApplicationController
  # include FunctionHelper

  def index 

  end

  def home
  	if current_user.admin? 
  		render 'home_admin'
  	else 
  		render 'home_user'
  	end 
  end

  def home_admin
  end

  def home_user
  end


end
