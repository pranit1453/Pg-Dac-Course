
<------------To Start Server----------------->

node init -y
node install express
node server.js

<------------To run application-------------->

npm build
npm run Start

confirm  and alert (only one value it will return)
CORS----> web applications running at one origin (domain, protocol, and port) can request and access resources 
          from a different origin. 

package.json--->
                Scripts: It defines scripts that can be run using npm run, such as build, test, or start scripts.
                Dependencies (Ranges): It lists the project's direct dependencies and their acceptable version ranges 
                Metadata: It contains human-readable metadata about the project, such as name, version, description, author
                Configuration: It can also include various configuration settings for tools and libraries.
                Manual Editing: Developers frequently edit package.json to add/remove dependencies, modify scripts, or update project metadata.

package-lock.json--->
                Dependency Locking: This file's primary purpose is to "lock down" the exact versions of all installed dependencies
                Version Control: It should be committed to version control to ensure consistency across the team and deployment environments.
                Detailed Information: It records the precise versions, integrity hashes, and where each package was downloaded from.

package.json defines what dependencies your project needs and what range of versions are acceptable.
package-lock.json records exactly which versions of all dependencies (direct and indirect) are currently installed, ensuring consistent installations across different environments