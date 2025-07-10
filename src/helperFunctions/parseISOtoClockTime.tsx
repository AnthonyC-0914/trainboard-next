export function parseISOtoClockTime(ISOString: string): string {
    const fullTime: Date = new Date(ISOString);
    const hours: string = fullTime.getHours().toString();
    const minutes: string = fullTime.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
}