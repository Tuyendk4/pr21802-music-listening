Recaptcha.configure do |config|
  config.site_key = ENV['GOOGLE_RECAPT_SITE_KEY']
  config.secret_key = ENV['GOOGLE_RECAPT_SECRET_KEY']
end
