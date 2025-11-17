import { test, expect } from '@playwright/test';
2
​
3
test('test', async ({ page }) => {
4
  await page.goto('https://www.google.com/sorry/index?continue=https://www.google.com/search%3Fq%3Djeeve%26oq%3Djeeve%26gs_lcrp%3DEgZjaHJvbWUyBggAEEUYOdIBCDQyNTNqMGoyqAIAsAIB%26sourceid%3Dchrome%26ie%3DUTF-8%26sei%3DKbEhaIimFJf2seMP7ILDiQg&q=EhAkABoAS00Zv4S5jBXXpduNGKnihsEGIjDlZsBM5gZ-GthAqVTrUoS-NTiy4fThdS-yU9r1fwoTya8olzT82iNN8F9mDtada3MyAnJSWgFD');
5
  await page.locator('iframe[name="a-taa5farp6b6"]').contentFrame().getByRole('checkbox', { name: 'I\'m not a robot' }).click();
6
  await page.locator('iframe[name="c-taa5farp6b6"]').contentFrame().locator('tr:nth-child(2) > td:nth-child(3)').click();
7
  await page.locator('iframe[name="c-taa5farp6b6"]').contentFrame().locator('tr:nth-child(3) > td:nth-child(2)').click();
8
  await page.locator('iframe[name="c-taa5farp6b6"]').contentFrame().locator('tr:nth-child(2) > td:nth-child(3)').click();
9
  await page.locator('iframe[name="c-taa5farp6b6"]').contentFrame().getByRole('button', { name: 'Verify' }).click();
10
  await page.locator('iframe[name="c-taa5farp6b6"]').contentFrame().locator('td:nth-child(2)').first().click();
11
  await page.locator('iframe[name="c-taa5farp6b6"]').contentFrame().locator('tr:nth-child(2) > td:nth-child(2)').click();
12
  await page.locator('iframe[name="c-taa5farp6b6"]').contentFrame().locator('tr:nth-child(2) > td:nth-child(3)').click();
13
  await page.locator('iframe[name="c-taa5farp6b6"]').contentFrame().locator('tr:nth-child(2) > td').first().click();
14
  await page.locator('iframe[name="c-taa5farp6b6"]').contentFrame().getByRole('button', { name: 'Verify' }).click();
15
  await page.getByRole('link', { name: 'Jeevee: Online Beauty, Baby' }).click();
16
  await page.getByText('My Account').click();
17
  await page.locator('div').filter({ hasText: /^Login$/ }).first().click();
18
  await page.getByRole('textbox', { name: 'Mobile Number *' }).click();
19
  await page.getByRole('textbox', { name: 'Mobile Number *' }).fill('9842757248');
20
  await page.getByRole('textbox', { name: 'Password *' }).click();
21
  await page.getByRole('textbox', { name: 'Password *' }).fill('Bibek123');
22
  await page.getByRole('button', { name: 'Sign In' }).click();
23
  await page.getByText('Sign Up').click();
24
  await page.getByRole('textbox', { name: 'Mobile Number *' }).click();
25
  await page.getByRole('textbox', { name: 'Mobile Number *' }).fill('9842757248');
26
  await page.getByRole('main').getByPlaceholder('Date of Birth *:  ').fill('2004-03-03');
27
  await page.getByRole('textbox', { name: 'Password *', exact: true }).click();
28
  await page.getByRole('textbox', { name: 'Password *', exact: true }).fill('Bibek@123');
29
  await page.getByRole('textbox', { name: 'Confirm Password *' }).click();
30
  await page.getByRole('textbox', { name: 'Confirm Password *' }).fill('Bibek@1223');
31
  await page.getByRole('checkbox', { name: 'I agree to Jeevee\'s Terms and' }).check();
32
  await page.getByRole('main').getByRole('img').nth(3).click();
33
  await page.getByRole('textbox', { name: 'Confirm Password *' }).click();
34
  await page.getByRole('textbox', { name: 'Confirm Password *' }).press('ArrowLeft');
35
  await page.getByRole('textbox', { name: 'Confirm Password *' }).fill('Bibek@123');
36
  await page.getByRole('button', { name: 'Join Jeevee' }).click();
37
  await page.getByPlaceholder('Verification code').click();
38
  await page.getByPlaceholder('Verification code').fill('941794');
39
  await page.getByPlaceholder('Verification code').press('Enter');
40
  await page.getByRole('button', { name: 'Verify Number' }).click();
41
  await page.getByRole('textbox', { name: 'Password *' }).click();
42
  await page.getByRole('textbox', { name: 'Password *' }).fill('Bibek@123');
43
  await page.getByRole('button', { name: 'Sign In' }).click();
44
  await page.getByRole('textbox', { name: 'First Name *' }).click();
45
  await page.getByRole('textbox', { name: 'First Name *' }).fill('Bibek');
46
  await page.getByRole('textbox', { name: 'Last Name *' }).click();
47
  await page.getByRole('textbox', { name: 'Last Name *' }).fill('Chaudhary');
48
  await page.locator('div').filter({ hasText: /^Not selected$/ }).first().click();
49
  await page.getByRole('menuitem', { name: 'B+', exact: true }).click();
50
  await page.locator('div').filter({ hasText: /^Not selected$/ }).first().click();
51
  await page.getByRole('menuitem', { name: 'MALE', exact: true }).click();
52
  await page.getByRole('button', { name: 'Save Changes' }).click();
53
  await page.getByRole('textbox', { name: 'Email Address' }).click();
54
  await page.getByRole('textbox', { name: 'Email Address' }).fill('nc.bibek@gmail.com');
55
  await page.getByRole('button', { name: 'Save Changes' }).click();
56
  await page.locator('a:nth-child(7)').first().click();
57
  await page.locator('a:nth-child(6)').first().click();
58
  await page.getByRole('link', { name: 'LENOVO IP1 I5-12TH/16GB/512GB' }).click();
59
  await page.getByRole('button', { name: 'Add to Cart' }).click();
60
  await page.locator('div').filter({ hasText: /^My Account$/ }).first().click();
61
  await page.getByText('Logout').click();
62
});
