import { Page } from "@playwright/test";

export async function getClipboardContents(page: Page) {
    const newPage = await page.context().newPage();
    const input = await newPage.evaluateHandle(() => {
    return document.body.appendChild(document.createElement("input"));
    });
    await input.press("Meta+V");
    return await input.inputValue();
}
