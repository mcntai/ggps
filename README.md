              ## Description

This is a Node.js Express application.

## Prerequisites

- Node.js
- MySQL

## Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd back-end
   ```

2. npm install

## Configuration
### Create a `.env` file in the root of back-end directory and set your environment variables:

   ```bash
      APP_PORT=9000
      DB_NAME=your_database_name
      DB_USER=your_database_user
      DB_PASSWORD=your_database_password
      DB_HOST=your_database_host
   ```   

## Database Setup

### Run Migration

### To create database tables:

   ```bash
    npx sequelize-cli db:migrate --migrations-path back-end/migrations --env development
   ```

## Run Seeders
### To seed initial data into the database:

   ```bash
   npx sequelize-cli db:seed:all
   ```

## Usage
### Start the App
#### To start the application:

   ```bash
   npm start
   ```
