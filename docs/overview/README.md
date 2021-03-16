# General Setup
**Welcome to the recharge rooms guide.** 

## Room Components
A recharge room is composed of the following **devices/parts**.

If you need to purchase an item please refer to our [master list](https://docs.google.com/spreadsheets/d/1Tkd8X69nmdH5ddd0sYHFSNPbDG7-Rroo4n8you29Dyw/edit?usp=sharing)

* [TP-Link Archer AX3000](https://www.walmart.com/ip/TP-Link-Archer-AX3000-4-Stream-Dual-Band-Wi-Fi-6-Router-Up-to-3-Gbps-Speeds-Powered-by-Intel/100797162)
  * Bandwith should be more than 1300 Mbps
  * 4 Stream Dual-Band Wi-Fi 6 Wireless 

* Raspberry Pi 4 4GB
  * Raspberry Pi case (aluminium)

* Phillips HomeBridge

* Phillips Hue Lights 

* Google Nest Speaker

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

## General Setup Steps
1. All device and account info you create during the setup process must be written in the google spreadsheet.
* Double check the info you put into the sheet becuase one wrong email for an account can be days spent debugging a simple problem

2. Make sure to connect all devices to the 5G version of the network. At least all the IOT devices that are compatible on 5G.

3. In a google sheet write down the MAC adresses and IP adresses of all the devices connected to the WiFi, including that of the router. This is to give later to IT department.

<iframe width="768" height="432" src="https://miro.com/app/live-embed/o9J_lZ0SOlM=/?moveToViewport=-7296,-5555,18315,10741" frameBorder="0" scrolling="no" allowFullScreen></iframe>

## Account Setup/Guidelines
Everyroom requires a gmail account. 

The current system uses the pro version of IFTTT and NabuCasa which we pay for monthly. 

### Billing Forwarding
The billing info will come to the room gmail. Set up every gmail to foward to our centralized billing email **billing@studioelsewhere.co**

### Recovery email
Every room gmail needs a recovery/backup email. Please set this to **support@studioelsewhere.co**

### Logging into services
Log in to services through email option only. **Do not use option to log in via Facebook, Gmail or other platform**
We do this to remove a step of authentification and to give an extra layer of security to hospital network. 

### Setup Two Step Authentication
Make sure all cloud services/ where applicable include two step authentication.

### Setup Two Step Authentication
If you need to Log into the router or HomeAssistant remotely ...using NabuCasa or remote acesss on TP link please use a VPN.

### Google Home Setup
* Disable options for sending audio recordings to Google.
* Set activity data to auto-delete after 3 months. 

## Projector settings 
 * Power Settings
    * Go to > advanced settings > **Power On Source** 
    * Turn power on source to HDM1 or whatever source the chromecast is plugged into. 

    * Disable all Smart Energy and Auto Power On Options

 * Image Settings Projector

   * Color Mode > Gaming
   * Brightness > 48
   * Contrast > 10
   * Color Temperature > 9500k 

   * Advanced 
    * Aspect Ratio > Auto
    * HDR Auto 
    * EOTF mid/low
  




