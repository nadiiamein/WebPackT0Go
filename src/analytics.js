function createAnalytics() {
    let counter = 0;
    let isDestroyed = false;
    const listener = () => counter++;
    document.addEventListener('click', listener);
    isDestroy = true;
    return {
        destroyed() {
            document.removeEventListener('click', listener)
        },
        getClicks() {
            if (isDestroyed) {
                return 'Analytics is destroyed';
            }
            return counter;
        }
    }
}

window.analytics = createAnalytics();