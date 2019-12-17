class UsersController < ApplicationController

	def create 

		icon = ""
		icon_index = rand(3)
		if(icon_index == 0)
			icon = "🍣"
		elsif (icon_index == 1) 
			icon = "🎉"
		elsif (icon_index == 2) 
			icon = "📮"
		end

		@user = User.new(username: params[:user][:username],
			password: params[:user][:password], 
			icon: icon)

		if @user.save 
			flash[:now] = "Thanks for signing up #{@user.username}"
			redirect_to login_path
		end
	end

	private 


	def user_params 
		params.require(:user).permit(:username, :icon, :password)

	end

end