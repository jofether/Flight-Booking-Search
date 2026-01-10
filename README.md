# TravelGo - Flight Booking Search

A modern flight booking search interface built with React, Vite, and Tailwind CSS.

## Project Overview

This project demonstrates an elegant flight booking interface with:
- **Input Grouping**: Location and date inputs are visually grouped as connected form elements
- **Horizontal Bar Charts**: Price history visualization with interactive tooltips
- **Responsive Design**: Works seamlessly on mobile and desktop

## Features

- Tabbed interface (Round Trip, One Way, Multi-city)
- Location selector with swap functionality
- Date range picker
- Price history chart with hover tooltips
- Responsive grid layout

## Setup & Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

## Project Structure

```
├── index.html          # HTML entry point
├── src/
│   ├── main.jsx        # React entry point
│   ├── App.jsx         # Main app component
│   └── index.css       # Tailwind CSS imports
├── package.json        # Dependencies and scripts
├── vite.config.js      # Vite configuration
└── tailwind.config.js  # Tailwind CSS configuration
```

## Technologies Used

- **React 18**: UI library
- **Vite**: Build tool for fast development
- **Tailwind CSS**: Utility-first CSS framework
- **JavaScript ES6+**: Modern JavaScript

## Future Enhancements

- Add interactive date picker
- Implement location autocomplete
- Connect to flight booking API
- Add passenger count selector
- Implement flight search results page
