Gems Used:

twitter-bootstrap-rails http://www.rubydoc.info/gems/twitter-bootstrap-rails/4.0.0
bootstrap_form https://rubygems.org/gems/bootstrap_form
jquery-rails http://www.rubydoc.info/gems/jquery-rails/4.3.1

Put in your gemfile: 

# jQuery
gem 'jquery-rails', '~> 4.3', '>= 4.3.1'
# Bootstrap
gem 'twitter-bootstrap-rails', '~> 4.0'
# Bootstrap Forms
gem 'bootstrap_form'

Run:

$ bundle install
$ rails generate bootstrap:install static

Put in your config/initializers/assets.rb:

Rails.application.config.assets.precompile += %w( admin/admin.js admin/admin.css )

To block create assets on generators put in your config/application.rb:

config.generators.assets = false
