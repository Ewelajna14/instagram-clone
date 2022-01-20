puts "🌱 Seeding users..."

#run a loop 8 times
8.times do
user = User.create(
    name: Faker::Name.name,
    avatar: "/static/images/avatar/1.jpg"
)

# create between 1 and 10 posts for each user
rand(1..10).times do 
    Post.create(
        image_url: Faker::LoremFlickr.image,
        description: Faker::Lorem.sentence,
        user_id: user.id
    )
end
end

puts "✅ Done seeding!"