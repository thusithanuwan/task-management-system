# T A S K I F Y

## Description

Taskify is a web application that empowers users to efficiently manage their tasks. Taskify is built using a modern tech stack, combining the power of Node.js, Express, TypeScript, and MySQL for the backend, and Angular, Bootstrap, and TypeScript for the frontend.

## Tech Stack

Frontend
<div align="center">

![Angular](https://img.shields.io/badge/angular-%23DD0031.svg?style=for-the-badge&logo=angular&logoColor=white)
&nbsp;![Bootstrap](https://img.shields.io/badge/bootstrap-%238511FA.svg?style=for-the-badge&logo=bootstrap&logoColor=white)
&nbsp;![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
&nbsp;![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
&nbsp;![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
&nbsp;![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)

</div>

Backend
<div align="center">

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
&nbsp;![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
&nbsp;![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
&nbsp;![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)

</div>

## Releases

The first release of Taskify is named "Taskify v1.0.0 - "Initial Launch". You can find it in the following link: [Taskify v1.0.0 - "Initial Launch"](https://github.com/thusithanuwan/taskify/releases/tag/v.1.0.0)

## Getting Started

### Prerequisites

- Ensure that you have Node.js and npm installed on your local machine.
- Set up a MySQL database with the required configurations.

### Installation

1. Clone the repository to your local machine:
```
$ git clone https://github.com/thusithanuwan/taskify.git
```
2. Navigate to the project directory:
```
$ cd ./taskify
```
3. Install the dependencies for both the backend and frontend:
```
$ cd ./backend
$ npm install
$ cd ./frontend
$ npm install
```
4. Create a .env file in the backend directory and set the following environment variables:
```
host=<your_mysql_host>
port=<your_mysql_port>
database=<your_mysql_database>
username=<your_mysql_username>
password=<your_mysql_password>
connection_limit=<your_mysql_connection_limit>
```

### Database Setup

1. Ensure you have MySQL installed and running.
2. Create a new database in MySQL with the name specified in the database environment variable.
3. Execute the following SQL query to create the task table:
```
CREATE TABLE task (
  id INT AUTO_INCREMENT PRIMARY KEY,
  description VARCHAR(255) NOT NULL,
  status ENUM('COMPLETE', 'NOT_COMPLETED') DEFAULT 'NOT_COMPLETED'
);
```

### Usage
1. Start the Node.js backend server.
```
$ cd backend
$ npm start
```
2. The backend server will be running on http://localhost:3000.
3. Start the Angular frontend application.
```
$ cd frontend
$ npm start
```
4. The frontend application will be accessible on http://localhost:4200.

### API Endpoints

For detailed information on how to interact with the Taskify API, refer to the  [API Documentation](https://documenter.getpostman.com/view/26635204/2s9XxyQtJy)

## Screenshot

<div style="display: flex ; gap: 5px">

![Screenshot from 2023-08-05 01-00-24](https://github.com/thusithanuwan/taskify/assets/120198968/a2662135-fefd-42ab-869f-58e9155e3572)

![Screenshot from 2023-08-05 00-59-51](https://github.com/thusithanuwan/taskify/assets/120198968/eadc5f59-01ab-44c2-af5b-7209283da3e6)
</div>


## License

This project is licensed under the [MIT License](LICENSE.md). Feel free to use and modify the code as per the terms of the license
## Contact

If you have any questions or feedback, please feel free to reach out:

- E-mail: thusithanuwanb@gmail.com
- Linkedin: [Thusitha Nuwan](www.linkedin.com/in/thusitha-nuwan)

Thank you for visiting this repository! If you find it helpful or inspiring, don't forget to leave a star ⭐️. Happy coding!


