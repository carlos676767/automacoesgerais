const puppeteer = require("puppeteer");

const pesquisarVideoYt = async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto("https://www.youtube.com");
  await page.type("input[id = 'search']", "Awful Things feat. Lil Tracy");
  const searchResultSelector = "button[id = 'search-icon-legacy']";
  await page.waitForSelector(searchResultSelector);
  await page.click(searchResultSelector);

  const searchResultSelector2 = "a[id = 'video-title']";
  await page.waitForSelector(searchResultSelector2);
  await page.click(searchResultSelector2);

  const obterUrl = page.url();

  //manda para a pagina que aonde vai ser feito donwload
  const page2 = await browser.newPage();
  await page2.goto("https://ssyoutube.one/pt/");

  await page2.type("input", obterUrl);

  //clica no botao e faz o donwload
  const botaoPequisar = "button[id = 'btn-submit']";
  await page2.waitForSelector(botaoPequisar);
  await page2.click(botaoPequisar);

  //clica no segundo botao e faz o donwload
  const botaoDonwload = "button[class = 'btn btn-sm btn-success']";
  await page2.waitForSelector(botaoDonwload);
  await page2.click(botaoDonwload);
};

pesquisarVideoYt();
