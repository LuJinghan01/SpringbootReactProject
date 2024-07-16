frontend: React  
```
npm start
```  
生成工程文件：
```
npm run build
```
***
backend: springboot, mysql  
```
mvn spring-boot:run
```
rebuild maven project
```
mvn clean install
```
```
java -jar -Dserver.port=8083 target/demo-0.0.1-SNAPSHOT.jar
```  
***
nginx 
start server:
```
nginx
```
stop nginx:
```
nginx -s stop
```
load changes to config files
```
nginx -s reload
```
修改配置文件
```  
sudo nano /opt/homebrew/etc/nginx/nginx.conf
```  
***  
sample workflow of running jar file using nohup:  
start program with nohup
```
nohup java -jar -Dserver.port=8083 target/demo-0.0.1-SNAPSHOT.jar &
```
如果要停止运行，你需要使用以下命令查找到 nohup 运行脚本到 PID，然后使用 kill 命令来删除：
```
ps -aux | grep "runoob.sh"
```
参数说明：  
a : 显示所有程序  
u : 以用户为主的格式来显示  
x : 显示所有程序，不区分终端机    
exit the terminal or whatever else you would like to do "&" puts the program in background for running  
look for the pid if you would like to kill the jar program afterwards
```
pgrep -f 'java -jar'
```
```
kill -9 <PID>
```
***  
If needs to compile maven project with jdk8:  
```
jenv local 1.8
```
```
jenv global 1.8
```
###
project description:  
frontend:  
1. Using Ant Design open source platform to create a list based table with select, sort and search by ID funcations  
2. Implemented download as excel files button, delete, and delete all buttons  
###
nginx:  
1. Resolve cors (cross-origin resource sharing) probelms using nginx  
2. Running spring boot application on multiple servers and using nginx to balance sending requests to these servers  
###
backend:  
1. Using MVC (Model View Controller) and three-tier architecture to structure the project  
2. Implemented RESTful API, added JWT authentication and spring security for user login  
3. Using Easy Excel from Alibaba for downloading database table as Excel files to local machines.  
4. Using Mybatis to communicate between mysql database, added transaction for data roll back   



