export function headers() {
    const headers = new Headers();
    headers.set('X-Api-Key', process.env["X-Api-Key"]!);
    return headers;
}
