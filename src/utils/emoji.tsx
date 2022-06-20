import joypixels from 'emoji-toolkit'

export const renderHTMLEmoji = (emoji: string) => {
    const html: string = (joypixels.toImage(emoji) as string)
        .split(`<img class="joypixels"`)
        .join(`<img class="joypixels"`)

    return { __html: html }
}
// joypixels.joypixels