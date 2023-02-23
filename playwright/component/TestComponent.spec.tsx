import { test, expect } from '@playwright/experimental-ct-react';
import React from 'react';
import { TestComponent } from './TestComponent'


test.only('should work', async ({ mount, page }) => {
    await page.pause()
    const component = await mount(<TestComponent />);
    await page.pause()

    page.route('**', (route) => {
        console.log(route.request())
        route.continue()
    })



    await page.pause()
    await expect(component).toContainText('Learn React');
});