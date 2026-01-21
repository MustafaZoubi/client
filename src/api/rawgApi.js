const RAWG_KEY = "52b381e2d91343b6bbade217dd95752d";

export const fetchRawgImages = async (rawgId) => {
    const res = await fetch(
        `https://api.rawg.io/api/games/${rawgId}?key=${RAWG_KEY}`
    );
    const data = await res.json();

    return {
        background: data.background_image,
        screenshots: [
            data.background_image,
            ...(data.short_screenshots?.map(s => s.image) || [])
        ]
    };
};
