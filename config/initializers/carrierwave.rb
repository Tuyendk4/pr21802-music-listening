CarrierWave.configure do |config|
  config.storage = :file
  # This avoids uploaded files from saving to public/ and so
  # they will not be available for public (non-authenticated) downloading
  config.root = Rails.root
end
