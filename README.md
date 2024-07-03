# Website Hosting
You can follow this step-by-step guide on how to host this website on your Ubuntu server so that it will be accessible with HTTPS and gives an overview of the links from your Researchgate, LinkedIn, and GitHub account.

## Step 1 - Domain
Get a domain, for example from [namecheap.com](www.namecheap.com). Choose your domain, e.g., `yourdomain.xyz`.
Next, set up an A Record with the Host as `@` (or a specific prefix you want to use, e.g., `www`) and the Value as your IP address.

## Step 2 - Install
Install the packages needed
```
sudo apt install docker.io npm git nano
npm install --global yarn
```
And pull the GitHub repository
```
git pull git@github.com:fridolinvii/website-links-overview.git
```
and enter the folder. 
```
cd website-links-overview
```

Follow the instruction on [nodejs.org](nodejs.org) to install _Node.js_:
```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
```
then execute _.bashrc_
```
source ~/.bashrc
```
and finally install the newest _Node.js_ version, e.g.,
```
nvm install 22
```

## Step 3 - Setup
This gives the parameters to build the dockers. Copy the _.env.template_ to _.env_, and edit them accodingly to your wishes. 
Copy:
```
cp .env.template .env
```
Edit:
```
nano .env
```

Also do this in the `website` folder:
```
cp website/.env.template website/.env
```
and edit it accoding to your wishes:
```
nano website/.env
```

## Step 4 - Start
I followed the instruction of [nginx-proxy/acme](https://github.com/nginx-proxy/acme-companion) and summarized it for my needs.
Execute 
```
./build.sh
```
and follow the instruction. This will build you three dockers, and you can test you website.

## Hint
If you want to edit the website and check the changes, you can locally start the website:
```
yarn install
```
and 
```
yarn start
```
If you do changes in _website/.env_ you need to stop it (`Ctrl-C`) and start it again.
