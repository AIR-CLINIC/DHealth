# DHealth
DHealth is the initiative of #AIR-CLINIC aimed at rewarding contributions to healthcare and medicine. Under this repository, we build an intact webapp to cater for this. Cheers!

[Dhealth.live](https://dhealth.live) wants to reward medical contributors for their hard work. 
Forked from https://github.com/utopian-io/utopian.io which was a fork from https://github.com/busyorg/busy, Dlive uses the [STEEM Blockchain](https://steem.io) to reward contributors in cryptocurrency.

See the website in action [here:](https://dhealth.live)

<center><img src="https://cdn.discordapp.com/attachments/406358037733834753/421360504208883732/unknown.png"/></center>
  
## Contributing to this Project
Get in touch on Discord: https://discord.gg/rqded5m

### Clone and Install
git clone https://github.com/AIR-CLINIC/dhealth.live dhealth.live

cd dhealth.live

npm install

### Generate and Export SSL Certificates
openssl req -x509 -sha512 -newkey rsa:4096 -keyout key.pem -out cert.pem -days 365 -nodes

export SERVER_SSL_CERT="/path/cert.pem"

export SERVER_SSL_KEY="/path/key.pem"

export NODE_TLS_REJECT_UNAUTHORIZED=0

Replace path with the path to the generated .pem files.
You may need to authorise your browser in using a self-signed SSL certificate


### Set STEEMCONNECT DHEALTH App
Add the enviroment variable DHEALTH_APP using the app name of your Steem Connect oauth application. You can create a STEEMCONNECT app here https://v2.steemconnect.com/apps/create. The same app will have to be used and setup in the backend https://github.com/AIR-CLINIC/api.dhealth.live.

### Run The Frontend
npm run dev-server


#### API Server
Our sister project [dhealth.live/api.dhealth.live](https://github.com/AIR-CLINIC/api.dhealth.live) provides the back-end APIs for DHELATH. If you want to run DHELATH locally, you **do need**  to run that project, though you may want to check it out!

### Supported by BrowserStack

We use BrowserStack for testing our frontend and our bug contributions! We are verry thankful that browserstack.com supports utopian.io

[![BrowserStack.com](https://d.pics/i/QmXLQMnAreyJ3WkXzAuK33ibbKejFxy4YASgq6diaYHsX5)](https://browserstack.com)

## License
GNU Public License v3.0. Copyright Utopian.io

Original source code licensed under MIT License. Copyright Busy 
