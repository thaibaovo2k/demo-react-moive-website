const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '7d1e9bfbde77236c4aec425d7e739626',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;