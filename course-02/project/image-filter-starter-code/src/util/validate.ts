export const validURI = (input: string): Boolean => {
    if (!input) {
        return false
    }

    if (!(input.startsWith("https://") || input.startsWith("http://"))) {
        return false
    }

    return true
} 