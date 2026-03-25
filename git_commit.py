import os
import subprocess

os.chdir(r"c:\Users\alan_\Desktop\Work\LandPage Kaleb")
subprocess.run(["git", "add", "."], check=True)
subprocess.run(["git", "commit", "-m", "Improve philosophy section, add testimonials, restore contact form"], check=True)
subprocess.run(["git", "push", "origin", "main"], check=True)
print("Git operations completed successfully!")
