## PHP Docker Container For Fuel PHP

This is a pre-configured docker for development of php application using FuelPHP

### Pre-requisite

* Docker CE (equivalent) is installed in your computer

### How To Run

* Using powershell / terminal `docker-compose up` to run the docker
* Go to `localhost:8181` it should run the php info function
* If you need to access your docker container use `docker-compose exec app bash` while docker is running

### Configuration

* `/app` - place your php application in this folder
* `composer <php-module>` - this docker container has composer for proper third party install

**Changing ports**

* In the `docker-compose.yml` adjust the port filed `8181:80` to `<your-destined-port>:80`
 
