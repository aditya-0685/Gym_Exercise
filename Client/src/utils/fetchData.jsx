export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': import.meta .env.VITE_RAPID_API_KEY,
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};

 export const youtubeOptions = {
  method: 'GET',
 
  headers: {
    'x-rapidapi-key': import.meta .env.VITE_RAPID_API_KEY,
    'x-rapidapi-host': 'youtube-search-and-download.p.rapidapi.com'
  }
};


export const fetchData = async (url, options) => {
  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      const errorText = await response.text();
      console.error('API Error:', errorText);
      throw new Error(`Error ${response.status}: ${errorText}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Fetch failed:', error.message);
    throw error;
  }
};


