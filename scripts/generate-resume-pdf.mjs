import { chromium } from "playwright";
import { fileURLToPath } from "url";
import path from "path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.resolve(__dirname, "..", "dist");
const resumeHtml = path.join(distDir, "resume", "index.html");
const outputPdf = path.join(distDir, "resume.pdf");

async function generateResumePDF() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    deviceScaleFactor: 1,
    colorScheme: "light",
  });
  const page = await context.newPage();

  await page.goto(`file://${resumeHtml}`, { waitUntil: "domcontentloaded" });

  // Fix root-relative asset paths that don't resolve with file:// protocol
  await page.evaluate((baseDir) => {
    document.querySelectorAll("link[rel=stylesheet], script[src]").forEach((el) => {
      const attr = el.tagName === "LINK" ? "href" : "src";
      const val = el.getAttribute(attr);
      if (val && val.startsWith("/")) {
        el.setAttribute(attr, `file://${baseDir}${val}`);
      }
    });
  }, distDir);

  await page.waitForLoadState("networkidle");

  await page.evaluate(() => {
    const btn = document.querySelector("[onclick]");
    if (btn?.textContent?.includes("Save as PDF")) btn.remove();
    const dl = document.querySelector("a[href*='resume.pdf']");
    if (dl) dl.closest("div")?.remove();
  });

  await page.pdf({
    path: outputPdf,
    format: "A4",
    margin: { top: "0.5in", right: "0.5in", bottom: "0.5in", left: "0.5in" },
    printBackground: false,
    displayHeaderFooter: false,
    preferCSSPageSize: false,
  });

  await browser.close();
  console.log("✓ Resume PDF generated at dist/resume.pdf");
}

generateResumePDF().catch((err) => {
  console.error("Failed to generate resume PDF:", err);
  process.exit(1);
});
