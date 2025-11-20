# Gaming Analytics Hub 🎮

A sleek, modern web application that centralizes your gaming data from multiple platforms into one unified dashboard. Track your playtime, spending, and gaming activity across Steam, Xbox, PlayStation, Riot Games, and more.

## Features

- **Multi-Platform Integration**: Connect Steam, EA Play, Riot Games, Xbox, PlayStation, Epic Games, and Battle.net
- **Unified Analytics**: View total playtime and spending across all platforms
- **Interactive Visualizations**: Pie charts, bar graphs, and platform breakdowns
- **Apple-Inspired UI**: Liquid glass aesthetic with translucency, blur effects, and smooth animations
- **Secure Account Linking**: Safely connect your gaming accounts with API keys

## Tech Stack

**Frontend:**
- React 18 + TypeScript
- Vite (fast build tool)
- TailwindCSS (styling)
- Framer Motion (animations)
- Recharts (data visualization)

**Backend:**
- Node.js + Express
- TypeScript
- Axios (API requests)

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- API keys for the platforms you want to connect (see API Setup below)

### Installation

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cd server
cp .env.example .env
# Edit .env with your API keys
```

4. Start the development servers:
```bash
npm run dev
```

The app will be available at `http://localhost:3000`

## API Setup

### Steam
1. Get your Steam API key: https://steamcommunity.com/dev/apikey
2. Find your Steam ID: https://steamid.io/

### Riot Games
1. Register at: https://developer.riotgames.com/
2. Generate a development API key

### Xbox
1. Register your app at: https://developer.microsoft.com/
2. Set up OAuth authentication

### PlayStation
- Uses unofficial PSN APIs (e.g., psn-api npm package)
- Requires NPSSO token from your PSN account

## Project Structure

```
gaming-analytics-hub/
├── client/              # React frontend
│   ├── src/
│   │   ├── components/  # UI components
│   │   ├── services/    # API integration
│   │   ├── types/       # TypeScript types
│   │   └── App.tsx
│   └── package.json
├── server/              # Express backend
│   ├── src/
│   │   ├── controllers/ # Route handlers
│   │   ├── services/    # Platform APIs
│   │   └── index.ts
│   └── package.json
└── package.json         # Root workspace config
```

## Roadmap

- [ ] Implement real API integrations for all platforms
- [ ] Add user authentication and data persistence
- [ ] Create game-specific detail views
- [ ] Add achievement tracking
- [ ] Implement friend comparisons
- [ ] Mobile responsive design
- [ ] Dark/light theme toggle

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

## License

MIT
