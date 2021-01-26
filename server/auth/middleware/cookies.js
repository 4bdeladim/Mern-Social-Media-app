const getCookie = (cookies) => {
    if(cookies) {
        const rawCookies = cookies.split('; ');
        const parsedCookies = {};
        rawCookies.forEach(rawCookie=>{
            const parsedCookie = rawCookie.split('=');
            parsedCookies[parsedCookie[0]] = parsedCookie[1];
        });
        return parsedCookies.socialtoken ;
    }
    else return null
}

module.exports = getCookie