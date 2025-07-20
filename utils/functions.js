export const toTitleCase = (phrase) => {
    return phrase
        .toLowerCase()
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
};

export const trackScroll = (scrollRef, setAtLeft, setAtRight) => {
    const container = scrollRef.current;
    if (!container) return;

    const { scrollLeft, scrollWidth, clientWidth } = container;
    const isAtStart = scrollLeft === 0;
    const isAtEnd = scrollLeft + clientWidth >= scrollWidth;
    setAtLeft(isAtStart);
    setAtRight(isAtEnd);
}

export const extractYearFromDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.getFullYear();
}

export const flagToLanguage = (language) => {
    switch (language) {
        case 'en':
            return 'English';
        case 'es':
            return 'Spanish';
        case 'fr':
            return 'French';
        case 'de':
            return 'German';
        case 'zh':
            return 'Chinese';
        case 'ja':
            return 'Japanese';
        case 'hi':
            return 'Hindi';
        case 'ar':
            return 'Arabic';
        case 'pt':
            return 'Portuguese';
        case 'ru':
            return 'Russian';
        case 'it':
            return 'Italian';
        // Add more cases as needed
        default:
            return 'Unknown';
    }
}

export const getCorrectLogo = (logos, language) => {
    if (!logos || logos.length === 0) return null;

    const exactMatch = logos.find(logo => logo.iso_639_1 === language);
    if (exactMatch) return exactMatch;

    const fallback = logos.find(logo => logo.iso_639_1 === 'en');
    return fallback || logos[0];
}

export const getTrailerVideoKey = (videos) => {
    if (!videos || videos.length === 0) return null;

    const trailer = videos.find(video => video.type === 'Trailer');
    return trailer ? trailer.key : videos[0].key;
}

export const formatCurrency = (amount) => {
    if (amount === null || amount === undefined) return 'N/A';
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(amount);
}

export const timeFormatter = (time) => {
    if (time === null || time === undefined) return 'N/A';
    const hours = Math.floor(time / 60);
    const minutes = time % 60;
    return `${hours}h ${minutes}m`;
}

export const getGenderInString = (gender) => {
    switch (gender) {
        case 1:
            return 'Female';
        case 2:
            return 'Male';
        case 3:
            return 'Other';
        default:
            return 'Unknown';
    }
}

export const formatCustomDate = (dateString) => {

    if (!dateString) return false;

    const date = new Date(dateString);

    const day = date.getDate();
    const month = date.toLocaleString('en-US', { month: 'long' }); // Full month name
    const year = date.getFullYear();

    return `${day}${month} ${year}`;
}
