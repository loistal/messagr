# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user1 = User.create(username: "lois_talagrand", icon: "🌎", password: "password")
user2 = User.create(username: "ohanaa", icon: "🐻",password: "password")
user3 = User.create(username: "lilouu", icon: "☀️",password: "password")

message = Message.create(body: "Yellow World!", user: user1)
message2 = Message.create(body: "Well, this is working 👷‍♂️", user: user2)
message3 = Message.create(body: "I don't understand how this works", user: user3)