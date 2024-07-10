**frontend: React**  
**npm start**  
**工程文件：npm run build**
***
**backend: springboot, mysql**  
**mvn spring-boot:run**  
**mvn clean install**  
**java -jar -Dserver.port=8083 target/demo-0.0.1-SNAPSHOT.jar**  
***
**nginx**  
**start: nginx**  
**stop: nginx -s stop**  
**有改动：nginx -s reload**  
**sudo nano /opt/homebrew/etc/nginx/nginx.conf**  
***  
sample workflow of running jar file using nohup:  
start program with nohup
```
nohup java -jar -Dserver.port=8083 target/demo-0.0.1-SNAPSHOT.jar &
```
exit the terminal or whatever else you would like to do "&" puts the program in background for running  
look for the pid if you would like to kill the jar program afterwards
```
pgrep -f 'java -jar'
```
```
kill -9 <PID>
```
