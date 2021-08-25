export function formatText(string: string): string {
    return string[ 0 ].toUpperCase().concat(string.slice(1))
        .replaceAll('_', ' ');
}
