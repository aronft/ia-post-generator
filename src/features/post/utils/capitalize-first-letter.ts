export function capitalizeFirstLetter([first, ...rest]) {
    return first.toUpperCase() + rest.join('')
}