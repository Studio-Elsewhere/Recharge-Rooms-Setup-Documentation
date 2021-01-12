# Initial set up
Welcome to the recharge rooms guide. Recharge rooms are immersive interactive experiences to help frontline workers. The system uses voice and video to activate a room scene. To activate a scene say "**Hey google, activate**" and then say the name of your scene. 

Here is a list of available scenes.
* [Sunrise Bay](https://www.youtube.com/watch?v=_J2b1wJAuH8&feature=youtu.be)
* [Misty Lake](https://www.youtube.com/watch?v=2iJYfhokNJk&feature=youtu.be)
* [Twilight Canopy](https://www.youtube.com/watch?v=UmZ0cGF4tPI&feature=youtu.be)
* [Sunrise Peak](https://www.youtube.com/watch?v=PZ9VwQZpssI&feature=youtu.be)
* [Serenity Beach](https://www.youtube.com/watch?v=TaCYx9hAv_o&feature=youtu.be)
* [Renewal Falls](https://www.youtube.com/watch?v=pnjSdhqR4yM&feature=youtu.be)
* [Twilight Lake](https://www.youtube.com/watch?v=NXfWway52TY&feature=youtu.be)
* [Emerald Cove](https://www.youtube.com/watch?v=NXfWway52TY&feature=youtu.be)
* [Redwood forest](https://www.youtube.com/watch?v=KFTF3Q5V5fE&feature=youtu.be)

## Room Components

A recharge room is composed of the following **devices/parts**

* Netgear Router, Netgear AC1750 or AC2300 
  * Bandwith should be more than 1300 Mbps

* Raspberry Pi 4 4GB
  * Raspberry Pi case (aluminium)

* Phillips HomeBridge

* Phillips Hue Lights 

* Google Home Max

* Ipad  

* Chromecast TV 4k

* Passive Speakers
  * Recommended - Audio Engine A2

* View Sonic Projector 4K 

* Micro SD Card
  * 128GB/A2/V30

* Ethernet Cable 3-7' (for the Pi)
  * Must be a Cat 6 or 7 cable for fastest speeds

* View Sonic Projector 4K 

And the following **software**

* The NETGEAR Nighthawk app

* The Home Assistant OS
     * Home Assistant File Editor Add On
  * Phillips Hue Integration
  * IFTTT Integration
  * Google Cast Integration

* Google Home App
* Phillips Hue App
* Nabu Casa
* IFTTT

**All device and account info you create during the setup process must be written in the google spreadsheet. Double check the info you put into the sheet becuase one wrong email for an account can be days spent debugging a simple problem**.

<iframe width="768" height="432" src="https://miro.com/app/live-embed/o9J_lZ0SOlM=/?moveToViewport=-7296,-5555,18315,10741" frameBorder="0" scrolling="no" allowFullScreen></iframe>

**Make sure to connect all devices to the 5G version of the network. At least all the IOT devices that are compatible on 5G.**

## Router Setup

### Netgear Router

The current version of the setup uses a AC2300 Smart WiFi Router. 

Unbox the Router and sure not to throw away the plastic layer on the top of the router. There is a QR code on the cover which will be needed when paring with the router app. 
Connect the yellow ethernet cable to the back of the router. This will be the cable that connects to the hospital ethernet port.

**Ethernet Cable must be CAT7 for faster speeds**

Connect the Phillips HueBridge ethernet cable to the LAN ethernet port on our router. 

<img src="./content/setup.jpg" width="300" height="400">

This part of the setup will be moved near the hospital ethernet port. Connect the router power to the nearest outlet. 

### Nighthawk App

Download the Netgear Nighhawk App on your phone. Use the account mischa@studioeslewhere.co when logging in. **Make sure to write whatever account details you create in the Google Spreadsheet and specify the device and room location you are setting it up for**.

At this point you will need the QR code which came with the router. This will allow you connect the phone directly to the router. You will then be able to set up a WiFi name and password. 
The app will also prompt you to create an admin account for the router. The username will stay admin and the password must be a secure **randomly generated password**. This is for security reasons regarding the hospital network.

Finally go into the app setting and **enable the anywhere access option**. This will allow us to turn the router on and off from anywhere in the world. 
You can find this options by clicking on the small home icon on the top left. Then go to settings > anywhere access.


<img src="./content/nighthawk.png" width="300" height="600">

### More Router info

Alternatively to the Nighhawk app you can use routerlogin.net when on the same network as the router. From here you can see and the connected devices on your network and their assigned IP adrress. 

**If other components of the recharge rooms are not working this is a good place to start troubleshooting from because we can check if they are even connected to internet.**

[For an in-depth overview of all the router settings go to the router settings page.](./router.md)


## Lights Setup

### Hue Lights
Connect all Hue Lights to power and turn them on. If the lights have a cover wait until the end of the setup process to cover them. We will need a six digit serial number written on each light to add them to the Hue App. 

Make sure the lights are **Phillips Hue full spectrum lights**. Phillips has other lights that only change within the white spectrum and smart lights that are not compatible with the Hue App such as the Wiz App lights.


### HomeBridge
Connect the HomeBridge to power and press the on button in the middle. 

### Hue App
Connect your phone to our router WiFi network. Then download the Phillips Hue App, go to the app settings and add your HomeBrige device. 

It will request that you click the bridge to activate the connection. 

After the HomeBridge is connected you can connect the lights by typing the six digit serial number on each light. 

At this step we recommend you group the lights into categories, which are called zones, in the app. This will make it easier to automate everything later on. 

<img src="./content/zones.png" width="300" height="600">

You can also change the default light settings to have specific colors when people turn them on. 

## Google Setup
  ### Google Home App
On the recharge room Ipad connect to the 5G. Then download the Google Home App. 

On the Google Home App connect the Chromecast and Google Home Max speaker.  

Create a room and group the devices into it. The homeassiant automations work best if the room area is defined ebcuase we can then reference it later . 

  ### Google Chromecast setup 



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

