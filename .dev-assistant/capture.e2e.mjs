
import { chromium } from 'playwright';

const route = process.argv[2] ?? '/';
const baseURL = process.env.PLAYWRIGHT_BASE_URL ?? 'http://localhost:3000';

const browser = await chromium.launch();
const page = await browser.newPage();

await page.goto(baseURL + route, { waitUntil: 'domcontentloaded' });

const title = await page.title();

const elements = await page.evaluate(() => {
  const norm = (v) => (v ?? '').toString().trim() || null;

  const isVisible = (el) => {
    const style = window.getComputedStyle(el);
    const rect = el.getBoundingClientRect();
    return (
      style &&
      style.visibility !== 'hidden' &&
      style.display !== 'none' &&
      rect.width > 0 &&
      rect.height > 0
    );
  };

  const pick = (el) => {
    const tag = el.tagName.toLowerCase();
    const role = el.getAttribute('role');
    const id = el.getAttribute('id');
    const nameAttr = el.getAttribute('name');
    const typeAttr = el.getAttribute('type');
    const placeholder = el.getAttribute('placeholder');
    const testId = el.getAttribute('data-testid');

    const aria = el.getAttribute('aria-label');
    let label = aria;

    if (!label && id) {
      const lbl = document.querySelector('label[for="' + CSS.escape(id) + '"]');
      if (lbl) label = (lbl.textContent || '').trim();
    }

    if (!label && tag === 'button') {
      label = (el.textContent || '').trim();
    }

    return {
      tag,
      role: norm(role),
      label: norm(label),
      placeholder: norm(placeholder),
      id: norm(id),
      nameAttr: norm(nameAttr),
      typeAttr: norm(typeAttr),
      testId: norm(testId)
    };
  };

  return Array.from(document.querySelectorAll('input, button, select, textarea, a[href]'))
    .filter(isVisible)
    .slice(0, 120)
    .map(pick);
});

await browser.close();

process.stdout.write(JSON.stringify({ route, title, elements }, null, 2));
