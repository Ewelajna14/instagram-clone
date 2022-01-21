
=begin
8.times do
user = User.create(
    name: Faker::Name.name,
    avatar: "/static/images/avatar/1.jpg"
)

# create between 1 and 10 posts for each user
rand(1..5).times do 
    Post.create(
        image_url: Faker::LoremFlickr.image,
        description: Faker::Lorem.sentence,
        user_id: user.id
    )
end
end
=end

puts "🌱 Seeding users..."

user1 = User.create(name:"Janet Shepard")
user2 = User.create(name:"Trevor Lozano")
user3 = User.create(name:"Ava-May Lu")
user4 = User.create(name:"Oliver Macleod")
user5 = User.create(name:"Kaylan Golden")

puts "🌱 Seeding posts..."

Post.create(image_url:"post1.jpg", description:Faker::Lorem.sentence, user_id:user1.id)
Post.create(image_url:"post2.jpg", description:Faker::Lorem.sentence, user_id:user5.id)
Post.create(image_url:"post3.jpg", description:Faker::Lorem.sentence, user_id:user3.id)
Post.create(image_url:"post4.jpg", description:Faker::Lorem.sentence, user_id:user1.id)
Post.create(image_url:"post5.jpg", description:Faker::Lorem.sentence, user_id:user2.id)
Post.create(image_url:"post6.jpg", description:Faker::Lorem.sentence, user_id:user5.id)
Post.create(image_url:"post7.jpg", description:Faker::Lorem.sentence, user_id:user3.id)
Post.create(image_url:"post8.jpg", description:Faker::Lorem.sentence, user_id:user4.id)
Post.create(image_url:"post9.jpg", description:Faker::Lorem.sentence, user_id:user1.id)
Post.create(image_url:"post10.jpg", description:Faker::Lorem.sentence, user_id:user4.id)



puts "✅ Done seeding!"