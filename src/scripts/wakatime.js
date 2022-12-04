import axios from 'axios';

export async function getWakaTimeData() {
  const response = await axios.get("https://wakatime.com/share/@shard7/d5fabed8-e901-4a2c-becd-63cc8317bcc5.json");
  const data = response.data.data;
  
  return data;
}