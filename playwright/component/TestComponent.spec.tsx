import { test, expect } from '@playwright/experimental-ct-react';
import React from 'react';
import { TestComponent } from './TestComponent'

test.beforeAll(async () => {
  process.env.TEST_ENV_VAR = 'test_value';
});

test.only('should work', async ({ mount, page }) => {
    await page.pause()
    console.log(process.env)
    const component = await mount(<TestComponent />);
    await page.pause()

    page.route('**', (route) => {
        console.log(route.request())
        route.continue()
    })



    await page.pause()
    await expect(component).toContainText('Learn React');
});
