import axios from 'axios'

// Riot Games API integration
// Docs: https://developer.riotgames.com/
export async function fetchRiotData(summonerName: string, apiKey: string, region = 'na1') {
  try {
    // Get summoner info
    const summonerResponse = await axios.get(
      `https://${region}.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}`,
      { headers: { 'X-Riot-Token': apiKey } }
    )

    // Note: Riot doesn't provide total playtime directly
    // You'd need to aggregate match history for accurate data
    return {
      platform: 'Riot Games',
      games: [] // Implement match history aggregation
    }
  } catch (error) {
    console.error('Riot API error:', error)
    return { platform: 'Riot Games', games: [] }
  }
}
