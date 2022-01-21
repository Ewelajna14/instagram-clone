
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

user1 = User.create(name:"Janet Shepard",avatar: "/static/images/avatar/1.jpg"  )
user2 = User.create(name:"Trevor Lozano",avatar: "/static/images/avatar/1.jpg"  )
user3 = User.create(name:"Ava-May Lu",avatar: "/static/images/avatar/1.jpg"  )
user4 = User.create(name:"Oliver Macleod",avatar: "/static/images/avatar/1.jpg"  )
user5 = User.create(name:"Kaylan Golden",avatar: "/static/images/avatar/1.jpg"  )

puts "🌱 Seeding posts..."

Post.create(image_url:"../photos/post1.jpg", description:Faker::Lorem.sentence, user_id:user1.id)
Post.create(image_url:"../photos/post2.jpg", description:Faker::Lorem.sentence, user_id:user5.id)
Post.create(image_url:"../photos/post3.jpg", description:Faker::Lorem.sentence, user_id:user3.id)
Post.create(image_url:"../photos/post4.jpg", description:Faker::Lorem.sentence, user_id:user1.id)
Post.create(image_url:"../photos/post5.jpg", description:Faker::Lorem.sentence, user_id:user2.id)
Post.create(image_url:"../photos/post6.jpg", description:Faker::Lorem.sentence, user_id:user5.id)
Post.create(image_url:"../photos/post7.jpg", description:Faker::Lorem.sentence, user_id:user3.id)
Post.create(image_url:"../photos/post8.jpg", description:Faker::Lorem.sentence, user_id:user4.id)
Post.create(image_url:"../photos/post9.jpg", description:Faker::Lorem.sentence, user_id:user1.id)
Post.create(image_url:"../photos/post10.jpg", description:Faker::Lorem.sentence, user_id:user4.id)



puts "✅ Done seeding!"