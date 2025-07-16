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
