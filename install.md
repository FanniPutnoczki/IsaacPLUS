1. Download the Raspbian Jessie image and set up your Raspberry (unfortunately the configuration is different for the newer images, but Jessie is still a great version to use)

2. Configure your Raspberry as a file server so you will be able to share files from all the other computers on your network. You can do it by installing Samba

3. Set up your Raspberry as a wireless access point: 
I recommend you the official tutorial: https://www.raspberrypi.org/documentation/configuration/wireless/access-point.md

4. Install MongoDB

5. Setting up IsaacPLUS

	1. Install dependencies
	
#first steps
2. Install git: sudo apt-get install git
3. Clone this project: git clone https://github.com/FanniPutnoczki/IsaacPLUS.git
4. Fortunately the OS comes with Python preinstalled, but you'll still need to install flask to use the REST api: 
sudo pip install flask-restful
5. install mongodb then install the python mongo module
pip install flask-pymongo
