# Technical Overview of the whole Landscape


## Infrastructure as Code  

Categories
 - Ad hoc scripts, Configuration management tools, server templating tools, orchestration tools, provisioning tools

 [Terraform](https://www.terraform.io/): Terraform is a tool for building, changing, and versioning Infrastructure safely and efficiently. 
 Enables application software best practices to Infrastructure and is compatible with many cloudes and services

 Common Patterns: 
  - Provising (Terraform) + Config Management (Ansible)
  - Provising (Terraform) + Server Templating ()
  - Provising (Terraform) + Orchestration (Kubernetes)


## Data Structure
 
collections: brands - collections
    - both embed user information (via email)


## Deployment

Three server connections:
```bash
#jenkins
# ansible
ssh -i ".aws/ec2_server_key_dillner.pem" ubuntu@ec2-18-195-50-206.eu-central-1.compute.amazonaws.com
# app
```

[Install Jenkins Server](https://www.jenkins.io/doc/book/installing/linux/)
```bash
sudo apt-get update
```
Install Java
```bash
sudo apt-get install openjdk-11-jdk
```
Install Jenkins itself
```bash
curl -fsSL https://pkg.jenkins.io/debian-stable/jenkins.io.key | sudo tee \
  /usr/share/keyrings/jenkins-keyring.asc > /dev/null

echo deb [signed-by=/usr/share/keyrings/jenkins-keyring.asc] \
  https://pkg.jenkins.io/debian-stable binary/ | sudo tee \
  /etc/apt/sources.list.d/jenkins.list > /dev/null

sudo apt-get update

sudo apt-get install jenkins
```
Once that’s done, start the Jenkins service with the following command:
```bash
sudo systemctl start jenkins.service
```
To confirm its status, use:
```bash
sudo systemctl status jenkins
```
