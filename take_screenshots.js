const puppeteer = require('puppeteer-core');
const fs = require('fs');
const path = require('path');

const chromePath = fs.existsSync('C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe')
  ? 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe'
  : 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';

const screenshotsDir = path.join(__dirname, 'screenshots');
if (!fs.existsSync(screenshotsDir)) {
  fs.mkdirSync(screenshotsDir, { recursive: true });
}

async function run() {
  console.log('Launching browser with executable:', chromePath);
  const browser = await puppeteer.launch({
    executablePath: chromePath,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu']
  });

  const baseUrl = 'http://127.0.0.1:5173';

  // 1. Desktop Full Home Page
  console.log('Capturing 01_home_desktop_full.png...');
  let page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto(baseUrl + '/', { waitUntil: 'networkidle0' });
  await new Promise(r => setTimeout(r, 1000));
  await page.screenshot({
    path: path.join(screenshotsDir, '01_home_desktop_full.png'),
    fullPage: true
  });
  await page.close();

  // 2. Desktop Hero Viewport (1440x900)
  console.log('Capturing 02_home_desktop_hero_1440x900.png...');
  page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto(baseUrl + '/', { waitUntil: 'networkidle0' });
  await new Promise(r => setTimeout(r, 1000));
  await page.screenshot({
    path: path.join(screenshotsDir, '02_home_desktop_hero_1440x900.png'),
    fullPage: false
  });
  await page.close();

  // 3. Mobile Full Home Page (375w)
  console.log('Capturing 03_home_mobile_full_375w.png...');
  page = await browser.newPage();
  await page.setViewport({ width: 375, height: 812, isMobile: true, hasTouch: true });
  await page.goto(baseUrl + '/', { waitUntil: 'networkidle0' });
  await new Promise(r => setTimeout(r, 1000));
  await page.screenshot({
    path: path.join(screenshotsDir, '03_home_mobile_full_375w.png'),
    fullPage: true
  });
  await page.close();

  // 4. Mobile Hero Viewport (375x812)
  console.log('Capturing 04_home_mobile_hero_375x812.png...');
  page = await browser.newPage();
  await page.setViewport({ width: 375, height: 812, isMobile: true, hasTouch: true });
  await page.goto(baseUrl + '/', { waitUntil: 'networkidle0' });
  await new Promise(r => setTimeout(r, 1000));
  await page.screenshot({
    path: path.join(screenshotsDir, '04_home_mobile_hero_375x812.png'),
    fullPage: false
  });
  await page.close();

  // 5. About Page Desktop
  console.log('Capturing 05_about_desktop.png...');
  page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto(baseUrl + '/about', { waitUntil: 'networkidle0' });
  await new Promise(r => setTimeout(r, 1000));
  await page.screenshot({
    path: path.join(screenshotsDir, '05_about_desktop.png'),
    fullPage: true
  });
  await page.close();

  // 6. Services Page Desktop
  console.log('Capturing 06_services_desktop.png...');
  page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto(baseUrl + '/services', { waitUntil: 'networkidle0' });
  await new Promise(r => setTimeout(r, 1000));
  await page.screenshot({
    path: path.join(screenshotsDir, '06_services_desktop.png'),
    fullPage: true
  });
  await page.close();

  // 7. Products Page Desktop
  console.log('Capturing 07_products_desktop.png...');
  page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto(baseUrl + '/products', { waitUntil: 'networkidle0' });
  await new Promise(r => setTimeout(r, 1000));
  await page.screenshot({
    path: path.join(screenshotsDir, '07_products_desktop.png'),
    fullPage: true
  });
  await page.close();

  // 8. Contact Page Desktop
  console.log('Capturing 08_contact_desktop.png...');
  page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto(baseUrl + '/contact', { waitUntil: 'networkidle0' });
  await new Promise(r => setTimeout(r, 1000));
  await page.screenshot({
    path: path.join(screenshotsDir, '08_contact_desktop.png'),
    fullPage: true
  });
  await page.close();

  await browser.close();
  console.log('All 8 screenshots successfully captured and saved to screenshots/');
}

run().catch(err => {
  console.error('Screenshot error:', err);
  process.exit(1);
});
