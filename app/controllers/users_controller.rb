class UsersController < ApplicationController

	def create 

		@user = User.new(username: params[:user][:username],
			password: params[:user][:password], 
			icon: "🚀")
		
		if @user.save 
			flash[:success] = "Thanks for signing up #{@user.username}"
			redirect_to root_path
		else
			redirect_to login_path
		end
	end

	private 


	def user_params 
		params.require(:user).permit(:username, :icon, :password)

	end

end