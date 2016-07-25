#!/bin/bash

# Deployment script for CircleCI to deploy or install an application.
# This file is called automatically from circle.yml by CircleCI on a new build.
# This script should not be run manually.
# Environment variables available to this script can be set at the following:
export PYTHONPATH=/usr/local/lib/python2.7/dist-packages # add path for ec2.py

# Copy over AWS credentials for boto library
#sudo sh -c "echo '[Credentials]' >> /etc/boto.cfg"
#sudo sh -c "echo 'aws_access_key_id = $AWS_ACCESS_KEY_ID' >> /etc/boto.cfg"
#sudo sh -c "echo 'aws_secret_access_key = $AWS_SECRET_ACCESS_KEY' >> /etc/boto.cfg"

set -e  # exit the script if any statement returns a non-true return value

# install Ansible
sudo apt-add-repository -y ppa:ansible/ansible
sudo apt-get update
sudo apt-get install -y ansible
sudo apt-get install python-pip

# Move to the Ansible directory
cd ansible
# Run the playbook
# ansible-playbook [filename].yml

# Exit with status code 1 if anything fails
if [ "$?" == "1" ]; then
	exit 1
fi
