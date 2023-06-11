# Backend

Provisional Server written in [flask](https://flask.palletsprojects.com/en/2.3.x/)

Using mongodb for storing shit.

```
sudo chown -R mongodb:mongodb /var/lib/mongodb 
```

### mongodb

Design rules
 - (1) Embed unless there is a compelling reason not to.
 - (2) Avoid JOINs if they can be, but dont be afraid to use them if they can provide a better schema design.
 - (3) Arrays should not grow without bound.
 - (4) Needing to access an object on its own is a compelling reason not to embed it.

Antipattern 
 - (1) Massive Arrays
    - Store information together that is frequently queried together.
 - (2) Massive number of collections
 - (3) Unnecessary indexes
 - (4) Bloated Documents
 - (5) Case-insensitive queries without case-insensitive indexes
 - (6) Separating data that is accessed together

[Schema Design Anti-Patterns - Part 1](https://www.youtube.com/watch?v=8CZs-0it9r4)


## Deployment

```bash
sudo apt-get update && sudo apt install software-properties-common
sudo add-apt-repository ppa:deadsnakes/ppa
sudo apt-install python3.11
sudo apt-get install python3-venv
# Create environment
python3 -m venv lixa
source lixa/bin/activate
# get the folder
```
