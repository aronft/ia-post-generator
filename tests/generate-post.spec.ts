import { test, expect } from '@playwright/test'

import ENV from '../src/utils/env'
import { getMode } from './get-mode'

const baseUrl = ENV.BASE_URL as string

test.describe('when user fill the generation post form', () => {
    test('should be selected the social platform', async ({ page }) => {
        await page.goto(baseUrl)

        const mode = await getMode(page)

        if (mode === 'generate') {
            const platform = await page.getByRole('heading', {
                level: 2,
                name: /Social platform/i,
            })

            const option = await page
                .locator('span')
                .filter({ hasText: 'facebook' })

            await option.check()
            await expect(platform).toBeDefined()
        }
    })

    test('should fill the message field', async ({ page }) => {
        await page.goto(baseUrl)
        const mode = await getMode(page)

        if (mode === 'generate') {
            const message = await page.getByLabel('Your message')

            await message.click()
            await page.keyboard.type('Programming')

            await expect(message).toBeDefined()
            await expect(await message.inputValue()).toContain('Programming')
        }
    })

    test('should select tone of voice', async ({ page }) => {
        await page.goto(baseUrl)

        const mode = await getMode(page)

        if (mode === 'generate') {
            const tone = await page.getByLabel('Polite')
            await tone.check()
            expect(tone).toBeChecked()
            expect(tone).toBeDefined()
        }
    })

    test('should select post style', async ({ page }) => {
        await page.goto(baseUrl)

        const mode = await getMode(page)

        if (mode === 'generate') {
            const style = await page.getByLabel(/story/i)
            await style.check()
            expect(style).toBeChecked()
            expect(style).toBeDefined()
        }
    })

    test('should generate post after fill form', async ({ page }) => {
        await page.goto(baseUrl)

        const mode = await getMode(page)

        if (mode === 'generate') {
            const button = await page.getByRole('button', {
                name: /generate post/i,
            })
            expect(button).toBeDisabled()

            const socialMedia = await page
                .locator('span')
                .filter({ hasText: 'facebook' })
            await socialMedia.check()

            const message = await page.getByLabel('Your message')
            await message.click()
            await page.keyboard.type('Programming')

            const tone = await page.getByLabel('Polite')
            await tone.check()

            const style = await page.getByLabel(/story/i)
            await style.check()

            expect(button).toBeEnabled()

            const title = await page.getByRole('heading', {
                level: 1,
                name: /Your generated post/i,
            })

            const postGenerated = await page.getByLabel(
                'post content generated'
            )

            const [response] = await Promise.all([
                page.waitForResponse(
                    (response) => response.request().method() === 'POST'
                ),
                button.click(),
            ])

            expect(await postGenerated.count()).toBeGreaterThan(0)
            expect(title).toBeVisible()
        }
    })
})
