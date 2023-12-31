# Solana Price Tracker

Challenge 01 from Doge Academy.

Building a Solana Price Tracker with React. You are required to build a simple web application that fetches and displays
the real-time price of Solana. Use a free API such as CoinGecko's API to retrieve the price information.
This application will be built using React for the frontend and will refresh the price data periodically.

Display the price data on the web page with clear labeling. The design should be clean and responsive (mobile-friendly).
The code should be clear and well-documented with comments.

## Stack
- TypeScript
- React
- Vite
- TailwindCSS

## Considerations
Since CoinGecko's API is returning 429 if we request every 10 seconds, I have decided to request every 15 seconds. 
This manner there is no issue with the API.

The web is up and running on: [https://pam-solana-price-tracker.vercel.app/](https://pam-solana-price-tracker.vercel.app/)