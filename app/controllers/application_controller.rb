class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  before_action :configure_permitted_parameters, if: :devise_controller?

   #para redireccionar despues del login
   def after_sign_in_path_for(resource)
    '/'
   end
  protected

  def configure_permitted_parameters
     devise_parameter_sanitizer.permit(:sign_up, keys: [:dni,:admin,:nombre,:fecha_inhabilitacion])
  end

end
