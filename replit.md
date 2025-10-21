# 지금 바로 윤회! - 하츠네 미쿠 노래 소개 사이트

## Overview
This is a simple static website introducing the Hatsune Miku song "Reincarnation Right Now!" (지금 바로 윤회!). The site features a clean, animated design with gradient backgrounds and responsive layout.

## Project Structure
- `index.html` - Main HTML page with song information
- `style.css` - Styling with animations and responsive design
- `script.js` - JavaScript for interactive elements
- `server.py` - Python HTTP server to serve static files

## Technology Stack
- Frontend: HTML5, CSS3, JavaScript
- Server: Python 3.11 with built-in http.server
- Port: 5000

## Running the Project
The server runs automatically via the configured workflow:
```bash
python3 server.py
```

The server listens on `0.0.0.0:5000` and serves the static website files.

## Features
- Beautiful gradient design with pink/purple theme
- Smooth animations on page load
- Responsive layout for mobile devices
- Cache-control headers to ensure updates are visible immediately
- Korean language content for Hatsune Miku song information

## Deployment
Configured for autoscale deployment on Replit.

## Recent Changes
- 2025-10-21: Initial setup with static HTML/CSS/JS website
- Added Python HTTP server with cache control
- Configured workflow and deployment settings
