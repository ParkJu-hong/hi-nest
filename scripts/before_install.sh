#!/bin/bash
pm2 kill
#create our working directory if it doesnt exist
DIR="/home/ec2-user/crypto_strategy_2.0_server"
if [ -d "$DIR" ]; then
  echo "${DIR} exists"
else
  echo "Creating ${DIR} directory"
  mkdir ${DIR}
fi