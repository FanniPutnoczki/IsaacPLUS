import skills.service as service
from os import listdir
from os.path import isfile, join

skills_path = '../skills/scripts'
skill_files = [f for f in listdir(skills_path) if isfile(join(skills_path, f))]

service.insertSkills()
skills = service.collectSkills()

if(len(skills) != len(skill_files)):
	print("error while inserting skills to db")