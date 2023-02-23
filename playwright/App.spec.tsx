import { test, expect } from '@playwright/experimental-ct-react';
import React from 'react';
import App from '../src/App'


test('should work', async ({ mount, page }) => {
    await page.pause()
    const component = await mount(<App />);
    await page.pause()
    await expect(component).toContainText('Learn React');
});