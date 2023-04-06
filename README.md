# Tweeter App

This is a simple Tweet Posting App that allows users to create new posts, apply validation with empty tweet and character limit, and view posted tweets sorted by posted time. The app is also designed to be responsive for different screen sizes.

## File Structure

The Tweeter App has the following file structure:

- **public**: This folder contains vendor files, images, styles, and scripts. It also includes the main HTML file, `index.html`.
- **server**: This folder contains data files, libraries, routes, and the main server file, `index.js`.
- **package.json**: This file contains the app's dependencies and configuration details.

## Features

### Create New Post

Users can create a new post by filling out the tweet form and clicking the "Post" button. The tweet will be posted to the app's database and displayed on the main page.

### Validation

The app applies simple validation to the tweet form to ensure that users do not post empty tweets or tweets that exceed the character limit.

### Sort by Posted Time

The app displays posted tweets sorted by their posted time, with the most recent tweets appearing at the top of the page.

### Responsive Design

The app is designed to be responsive for different screen sizes, ensuring that users have a seamless experience no matter what device they are using.

## Installation

To run the Tweeter App locally, you will need to have Node.js installed on your machine. Once you have installed Node.js, follow these steps:

1. Clone this repository to your local machine.
2. Navigate to the `tweeter` directory in your terminal and run the command `npm install` to install the app's dependencies.
3. Start the server by running the command `node index.js`.
4. Open your web browser and navigate to `http://localhost:3000` to view the app.

## Dependencies

The Tweeter App requires the following dependencies:

- body-parser
- chance
- express
- md5
- timeago

These dependencies are included in the app's `package.json` file and can be installed by running `npm install`.

## Screenshoots
!["desktop and above size view"](/public/images/demo/desktop.png)
!["Tablet and below size view"](/public/images/demo/tablet.png)
!["validate empty tweet"](/public/images/demo/empty.png)
!["validate max character tweet limit"](/public/images/demo/max-limit.png)