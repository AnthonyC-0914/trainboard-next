export function getUrlBase(): string {
    const urlBase: string | undefined = process.env["urlBase"]
    if (urlBase === undefined) {
        throw new Error("urlBase is undefined");
    }
    return urlBase;
}