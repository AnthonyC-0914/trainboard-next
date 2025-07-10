export function getHeadersWithApiKey() {
    const headers = new Headers();
    headers.set('X-Api-Key', process.env["X-Api-Key"]!);
    headers.append('Content-Type', 'application/json');
    return headers;
}
