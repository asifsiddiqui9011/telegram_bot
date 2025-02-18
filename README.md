# Telegram Weather Bot

## Overview

The Telegram Weather Bot allows users to subscribe to daily weather updates for their preferred city. Users can update their subscription city, unsubscribe, and receive timely weather updates. Admin users can manage subscribers, block/unblock users, and send updates.

**Bot Username**: [@ForecastFriendbot](https://t.me/ForecastFriendbot)

## Features

- **Subscribe to Weather Updates**: Users can subscribe to daily weather updates for a specific city.
- **Update Subscription City**: Users can update their subscription city to receive weather updates for a different city.
- **Unsubscribe**: Users can unsubscribe from daily weather updates.
- **Admin Management**: Admin users can manage subscribers, block/unblock users, and send updates.
- **Google Login**: Admin users can log in using Google Login.

## Commands

### User Commands
- **/subscribe <city>**: Subscribe to daily weather updates for the specified city.
- **/unsubscribe**: Unsubscribe from daily weather updates.
- **/block**: Block the user from receiving updates.
- **/unblock**: Unblock the user to receive updates.

### Admin Commands
- **/admin/block <user_id>**: Block a user.
- **/admin/unblock <user_id>**: Unblock a user.
- **/admin/delete <user_id>**: Delete a user.

## Installation

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) Account
- [Telegram Bot Token](https://core.telegram.org/bots#3-how-do-i-create-a-bot)

### Steps to Set Up

1. **Clone the Repository**

   ```bash
   git clone https://github.com/your-username/telegram-weather-bot.git
   cd telegram-weather-bot
