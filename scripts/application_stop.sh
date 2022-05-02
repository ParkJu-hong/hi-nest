#!/bin/bash
REPOSITORY=/home/ec2-user
#Stopping existing node server
cd $REPOSITORY
  sudo pm2 kill
  sudo rm -rf crypto_strategy_2.0_server
echo "Stopping any existing node servers"