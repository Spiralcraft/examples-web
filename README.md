#Spiralcraft Web Examples

This is a collection of functional examples that demonstrate the usage of 
various web application components as well as development techniques.

This is not a cohesive demo application itself as it is geared towards
demonstrating individual features and techniques. 

##Prerequisites
* JDK 7

##Setup
This project is designed to be installed inside a Spiralcraft sandbox, which
provides a common environment for multiple projects to share for build tools
and dependencies.

### Create a Sandbox
Follow these steps to create a sandbox if you don't have one already.

#### Choose a directory
Create a top level directory for your sandbox, e.g. `mywork/newsandbox`

#### Download and extract the sandbox template
Download the sandbox template from:

http://publish.spiralcraft.com/snapshot/spiralcraft/distrib-sandbox/0.4.17-dev1/spiralcraft-sandbox-0.4.17-dev1.zip

Extract the zip file into the top level directory you just created.

### Install the project

#### Create an examples group in your sandbox
The top level subdirectories of a sandbox are for grouping different types of
projects. 

Create an "examples" subdirectory in the top level of your sandbox if you don't
alread have one. e.g. `mywork/newsandbox/examples`

#### Clone the project into a subdirectory of of examples
cd to the examples directory in your sandbox

    git clone http://git.com/spiralcraft/examples-web  

#### Update dependencies

    cd examples-web
    java -jar ../../build/lib/ant-launcher.jar -f sandbox-util/update-repo
   

### Build

    java -jar ../../build/lib/ant-launcher.jar
  
### Run
  
  This will start a web server on port 8080.
  
  Access from your browser using http://localhost:8080
  
    java -jar lib/spiralcraft.jar
  
##Status
Updated 2014-09-30

Updates to the default configuration of the spiralcraft-webapp module
have probably introduced some breakage.

This project's URL tree needs a better organization system. This is probably
best done in conjunction with a knowledge base that can associate examples
with documentation and code.
