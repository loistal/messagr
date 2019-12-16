class User < ApplicationRecord
	validates :username, presence: true, uniqueness: true, length: { minimum: 3, maximum: 15 }
	validates :icon, presence: true
	has_secure_password
	has_many :messages
end
