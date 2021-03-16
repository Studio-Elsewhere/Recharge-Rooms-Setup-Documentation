## Raspberry Pi Setup 

### Hardware Setup

We will begin by unboxing our Raspberry Pi 4. Leave it to the side for now.
Go to [opertating system download for Home Assistant](https://www.home-assistant.io/hassio/installation/). Download it. 

Also download [balenaEtcher](https://www.balena.io/etcher/). 

Plug a Micro SD into your computer. Then open the balenaEtcher software and flash the image into the micro SD card. 

<img src="./content/etcher.png" width="600" height="350">

Place the micro sd into the Raspberry Pi 4. Connect the Pi to the router via a LAN ethernet cable and connect it to power. 

### Home Assistant OS 

At this point we need to create a site specific email to manage our Home Assistant computer and Nabu Casa account. 

Once you create the email go to the following link on your browser.
* http://homeassistant.local:8123/

Go through the Home Assistant setup process. Use the email you've created. You will end up at the overview page.

 <img src="./content/over.png" width="600" height="300">

### Nabu Casa

 We will also create a [Nabu Casa](https://www.nabucasa.com/) account. Nabu Casa is a service that allows us to control our Raspberry Pi 4 Home Assisant OS remotely. 

 Once you have created an account log back into Home Assistant. Go to configuration > Home Assistant Cloud. Log into your Nabu Casa account from here.  
 
 On the same page under the Integrations section turn Remote Control on.
 Also turn Google Assistant on. 

 Lastly during this process you should be given two URLs. One is a unique adress for you to log into your remote UI. The other is a Webhooks URL which we will need in order to activate our automations through the web. 
 Make sure to write the Webbhooks url down into the google sheet. We will need this later during the IFTTT setup. 

Heres an example URL 

https://hooks.nabu.casa/gAAAAABf2tlUCeEY7RerwpR05U2TZA98x9zMwLU9-itfH54-kj7dWhZbDXrkXufHOtGjP9lJEFLgNh7Im7ja1gvtYZhWNxKGpf99OZHoFA88GlRjFRmV9Pl3L1CpksUu1_H_UpTFrZ3c1B6QqUcG1L7G-EwGj9ZIDu6y21j50tfqI376X2sC5EY=

  <img src="./content/cloud.png" width="600" height="300">

[Now lets set up all the integrations and Scripts for Home Assistant.](./scripting.md)