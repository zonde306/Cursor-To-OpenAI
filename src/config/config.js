module.exports = {
    port: process.env.PORT || 3010,
    AUTHORIZATION: process.env.AUTHORIZATION || 'sk-1234567890',
    COOKIES: process.env.COOKIES?.split(',')?.map(x => x.trim())?.filter(x => !!x) || [],
    PROXIES: process.env.PROXIES?.split(',')?.map(x => x.trim())?.filter(x => !!x) || [],
};
