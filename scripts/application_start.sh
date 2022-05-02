#!/bin/bash
REPOSITORY=/home/ec2-user/crypto_strategy_2.0_server

#give permission for everything in the crypto_strategy_2.0_server directory
sudo chmod -R 777 /home/ec2-user/crypto_strategy_2.0_server

#navigate into our working directory where we have all our github files
cd /home/ec2-user/crypto_strategy_2.0_server

#install node modules
npm run start:prod
#start our node app in the background
node app.js > app.out.log 2> app.err.log < /dev/null &