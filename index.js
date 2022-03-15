const axios = require('axios');

const makeRequest = async () => {
  try {
    const response = await axios.get(
      'https://t.tiktok.com/api/challenge/item_list/?aid=1988&app_language=en&app_name=tiktok_web&battery_info=0.17&browser_language=en-PK&browser_name=Mozilla&browser_online=true&browser_platform=Win32&browser_version=5.0%20%28Windows%20NT%2010.0%3B%20Win64%3B%20x64%29%20AppleWebKit%2F537.36%20%28KHTML%2C%20like%20Gecko%29%20Chrome%2F99.0.4844.51%20Safari%2F537.36&challengeID=7054416882752815105&channel=tiktok_web&cookie_enabled=true&count=30&cursor=0&device_id=7060047866660521474&device_platform=web_pc&focus_state=true&from_page=hashtag&history_len=5&is_fullscreen=false&is_page_visible=true&language=en&os=windows&priority_region=&referer=&region=PK&screen_height=864&screen_width=1536&tz_name=Asia%2FKarachi&webcast_language=en&msToken=tga2zI646bRaIQ39B5ZIZ2UtsVB1Chc23EHJ4JhOLpv2pRYl6ekkPtHQDaI7SnBqSVc5X5eJvXswo7M5BWhKm9kpEdNLMbifQEtoX7R2_qo9K-fkni8JTiDIzQNzCjRwRFNksQk=&X-Bogus=DFSzswVOaqTANxo9S2Y--QYklT6O&_signature=_02B4Z6wo00001SQWnTQAAIDA-mDFkoCQRTEkFpmAACsu28',
      {
        headers: {
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.51 Safari/537.36',
        },
      }
    );
    if (response.data.itemList) {
      console.log('valid response');
    } else {
      console.log('INVALID RESPONSE VALID STATUS CODE \n', response.data);
    }
  } catch (err) {
    console.error('INVALID RESPONSE WITH AN ERROR \n', err);
  }
};

setInterval(makeRequest, 5000);
setTimeout(() => {
  console.log('terminated after 15 minutes');
  process.exit();
}, 900000);
