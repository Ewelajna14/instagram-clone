class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
  # Add your routes here
  get "/posts" do
    posts = Post.all
    posts.to_json(include: :user)
  end

end
