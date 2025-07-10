export function parseISOTime(ISOString: string) {
    const fullTime = new Date(ISOString).toString();
    return fullTime.split(' ')[4].slice(0, 5);
}