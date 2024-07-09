const API = 'https://spotify23.p.rapidapi.com/playlist_tracks/?id=0vvXsWCC9xrXsKd4FyS8kM&offset=0&limit=10';

const content = null || document.getElementById('content');

const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '09e75c14f4msh356a5d526b43673p183d24jsn4bf420e58707',
		'x-rapidapi-host': 'spotify23.p.rapidapi.com'
	}
};

async function fetchData(urlApi) {
  const response = await fetch(urlApi, options);
  const data = await response.json();
  return data;
}

(async () => {
  try {
    const tracks = await fetchData(API);
    let view = `
    ${tracks.items.map(track => `
      <div class="group relative">
          <div
            class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
            <img src="${track.track.album.images[0].url}" alt="" class="w-full">
          </div>
          <div class="mt-4 flex justify-between">
            <h3 class="text-sm text-gray-700">
              <span aria-hidden="true" class="absolute inset-0"></span>
              ${track.track.album.artists[0].name}
            </h3>
          </div>
        </div>
        `).slice(0,4).join('')}
        `;
        content.innerHTML = view;
  } catch (error) {
    console.log(error);
  }
})();
