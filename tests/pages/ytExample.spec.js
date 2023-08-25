import { test, expect } from '@playwright/test';
import { ExamplePage } from '../../components/pages/ytube-page';

test.describe.parallel('Find a video', () => {
    test('Navigate to site', async ({ page }) => {
        const youtube = new ExamplePage(page)
       await youtube.goto("http://www.youtube.com")
       await expect(false)
    });
});