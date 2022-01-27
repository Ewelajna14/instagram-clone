class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
  
  get "/" do 
    "Hello"
  end
  
  get "/posts" do
    posts = Post.all
    posts.to_json(include: {comments:{include: :user}})
  end

  get "/posts/comments" do
    comments = Comment.all
    comments.to_json(include: :user)
  end

  post "/posts/comments" do
    comment = Comment.create(
    content: params[:content],
    user_id: params[:user_id],
    post_id: params[:post_id]
    )
    comment.to_json(include: :user)
  end

  patch "/posts/comments/:id" do
    comment = Comment.find(params[:id])
    comment.update(
      content: params[:content],
      user_id: params[:user_id],
      post_id: params[:post_id]
    )
    comment.to_json(include: :user)
  end

  delete "/posts/comments/:id" do
     comment = Comment.find(params[:id])
     comment.destroy
     comment.to_json
  end

end
 