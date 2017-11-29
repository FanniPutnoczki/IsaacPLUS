1. Download the Raspbian Jessie image and set up your Raspberry (unfortunately the configuration is different for the newer images, but Jessie is still a great version to use)

2. Set up your Raspberry as a wireless access point: 

3. Configure your Rapberry as a media center

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


