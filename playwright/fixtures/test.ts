// Fixtures are not getting used at the moment.

import { test as base } from "@playwright/test";

export const test = base.extend({
  page: async ({ baseURL, path, port, browser }, use) => {
    const context = await browser.newContext({ ignoreHTTPSErrors: true });
    await context.grantPermissions(["clipboard-read", "clipboard-write"]);
    const page = await context.newPage();
    const url = `${baseURL}:${port}/${path}`;
    await page.goto(url);
    await use(page);
  },
});
