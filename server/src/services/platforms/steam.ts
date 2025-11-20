import axios from 'axios'

// Steam Web API integration
// Docs: https://developer.valvesoftware.com/wiki/Steam_Web_API
export async function fetchSteamData(steamId: string, apiKey: string) {
  try {
    // Get owned games
    const gamesResponse = await axios.get(
      `http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/`,
      {
        params: {
          key: apiKey,
          steamid: steamId,
          include_appinfo: 1,
          include_played_free_games: 1
        }
      }
    )

    return gamesResponse.data.response.games.map((game: any) => ({
      id: game.appid.toString(),
      name: game.name,
      platform: 'Steam',
      playtime: Math.round(game.playtime_forever / 60), // Convert minutes to hours
      imageUrl: `https://cdn.cloudflare.steamstatic.com/steam/apps/${game.appid}/header.jpg`
    }))
  } catch (error) {
    console.error('Steam API error:', error)
    return []
  }
}
