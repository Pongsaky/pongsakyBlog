export default function preContentSelect(content: String) {
    // Remove markdown headings
    const withoutMarkdown = content.replace(/#+\s/g, '');
    // Remove react part
    const withoutReact = withoutMarkdown.replace(/export default.*?=>.*?<\/div>/gs, '');
    // Remove extra whitespace
    const trimmedContent = withoutReact.trim();
    return trimmedContent;
}