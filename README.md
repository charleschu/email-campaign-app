# Email-Campaign-Tool

Please update this file whenever you discover the information here is obsolete.


## Setup

For the less cannot run in Chrome as a local file, you can run a simple ruby web server in you work folder:

All you need to do is to execute:

```
gem install rack
echo "run Rack::Directory.new('')" > ~/config.ru
rackup ~/config.ru
```
then you can open this project by: http://locahost:9292/
