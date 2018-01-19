class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable,
         :omniauthable ,    :omniauth_providers=> [:facebook, :google_oauth2]


         validates_presence_of :nombre
        # validates_presence_of :dni

   	def self.from_omniauth(auth)
   		# si encuentra un usuario con esas credenciales lo devuelve , sino lo crea
   		where(provider:auth[:provider] , uid: auth[:uid]).first_or_create do |user|
   			if auth[:info]
   				user.email = auth[:info][:email]
   				user.nombre = auth[:info][:name]
   			end
   			#creamos una password para el usuario
   			user.password = Devise.friendly_token[0,20]
   		end
   	end
end
