module ApplicationHelper
  def full_title page_title = ""
    base_title = t "base_title"
    base_title = page_title + "|" + base_title if page_title.present?
    base_title
  end

  def avatar_url(user)
    gravatar_id = Digest::MD5::hexdigest(user.email).downcase
    "https://www.gravatar.com/avatar/#{gravatar_id}.jpg?d=identicon&s=350"
  end
end
