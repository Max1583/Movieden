export const excerpt = (text) => {
    const limit = text.indexOf(".");
    return text.slice(0, limit + 1)
}

