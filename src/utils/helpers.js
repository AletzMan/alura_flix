/* eslint-disable no-useless-escape */
export function isValidURL(url) {
    const regex = /^(https?|ftp):\/\/((([a-z\d]([a-z\d-]*[a-z\d])*)\.)*[a-z]{2,}|((\d{1,3}\.){3}\d{1,3}))(\:\d+)?(\/[-a-z\d%_.~+]*)*(\?[;&a-z\d%_.~+=-]*)?(\#[-a-z\d_]*)?$/i
    return regex.test(url)
}