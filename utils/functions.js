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
