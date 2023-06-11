# Campaign Magic

## Ideas

**Campaign Creation**

- Script: GPT4
- Images: Midjourney
- Video Clips: Runway Gen2
- VO: Eleven Labs
- Music: SOUNDRAW AI Music

## Campaign Copilot

For continous idea evaluation we need to have a function that uses the generated 
output as input again (essentially for all models).

ThirdParties Content Creation Tools 
- Figma

## Material

[Text-to-3D Textures](https://poly.cam/material-generator)
[LangChain: Getting Started](https://towardsdatascience.com/getting-started-with-langchain-a-beginners-guide-to-building-llm-powered-applications-95fc8898732c)

## Paper

[High-Resolution Image Synthesis with Latent Diffusion Models](https://arxiv.org/pdf/2112.10752.pdf)


## Tools to keep in Mind

- [MOJO](https://www.modular.com/)
- Ahrefs


## Tech Stack

[stackshare.io](https://stackshare.io/) : 

**Frontend**:  

 - [Typescript](https://www.typescriptlang.org/)
 - [SolidJs](https://www.solidjs.com/): UI Framework  
 - [Redux](https://redux.js.org/): State Management Solution
 - [TailwindCSS](https://tailwindcss.com/): Prebuild CSS Utility  
 - [SASS](https://sass-lang.com/): CSS Preprocessor (Nesting, Mixins, Variables, Functions)
 - [PostCSS](https://postcss.org/): Purge, Autoprefix and Minify to prepare CSS for Production 
 - [Webpack](https://webpack.js.org/): Module Bundler

**Backend**: 
 - [MongoDB](https://www.mongodb.com/): Database #1
 - [Redis](https://redis.io/): Database #2
 - [Flask](https://flask.palletsprojects.com/en/2.3.x/): Server-Side Runtime 
 - [NGINX](https://www.nginx.com/): Advanced Load Balancer, Web Server, & Reverse Proxy
 - [Docker](https://www.docker.com/): Accelerated, Containerized Application Development
 - [Kubernetes](https://kubernetes.io/): Automating Deployment, Scaling & Management of Containerized Applications 
 - [AWS](https://aws.amazon.com/): Cloud Provider 
 - [Terraform](https://www.terraform.io/): Infrastructure Automation

**API**:
 - REST API vs. GraphQl + Apollo
 - [stripe](https://stripe.com/en-de): Handling Payments 
 - [Auth0](https://auth0.com/): User Authentication 

**Extras**:
 - [Github Actions](https://github.com/): Automate Software Development Workflows

Options: Firebase


## Deployment

Three server connections:
```bash
#jenkins
# ansible
ssh -i ".aws/ec2_server_key_dillner.pem" ubuntu@ec2-18-195-50-206.eu-central-1.compute.amazonaws.com
# app
```

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
