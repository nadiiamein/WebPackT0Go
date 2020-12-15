function createAnalytics() {
    let counter = 0;
    let destroyed = false;
    const listener = () => counter++;

    document.addEventListener('click', listener)

    
    return {
        destroy() {
            document.removeEventListener('click', listener)
            destryed = true;
        },
        getClicks() {
            if (destroyed) {
                return `Analytics is destroyed. Total clicks = ${counter}`;
            }
            return counter;
        }
    }
}

window.analytics = createAnalytics();