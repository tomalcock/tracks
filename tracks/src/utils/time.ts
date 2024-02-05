export default function convert(seconds: number) {

    if (typeof seconds !== 'number' || seconds < 0) {
        return 'Invalid input';
    }


    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.round(seconds % 60);

    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
}

