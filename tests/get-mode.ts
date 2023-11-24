export const getMode = async (page) => {
    const title = await page.getByRole('heading', {
        level: 1,
        name: /Generate your post/i,
    })

    return (await title.textContent()) === 'Generate your post'
        ? 'generate'
        : 'view'
}
