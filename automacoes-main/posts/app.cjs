const puppeteer = require("puppeteer");
const robot = require("robotjs");

const postsIntagram = async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto("https://www.instagram.com");

  //usuario aqui
  const dadosEmailSenha =
    "input[aria-label='Phone number, username, or email']";
  await page.waitForSelector(dadosEmailSenha);
  await page.click(dadosEmailSenha);
  await page.type(dadosEmailSenha, "informe seu usuario"); //informe seu usuario

  //passe sua senha aqui
  const senha = "input[aria-label='Password']";
  await page.waitForSelector(senha);
  await page.click(senha);
  await page.type(senha, "tfrfedr4edr"); //informe sua senha

  //botao para logar
  const botao = "button[type='submit']";
  await page.waitForSelector(botao);
  await page.click(botao);

  //seleciona o post
  const notNow = "svg[aria-label='New post']";
  await page.waitForSelector(notNow);
  await page.click(notNow);

  //clica para faer o post
  const post = "button._acan";
  await page.waitForSelector(post);
  await page.click(post);

  // Selecionar o primeiro elemento correspondente ao seletor
  await page.waitForSelector(
    "body > div.x1n2onr6.xzkaem6 > div.x9f619.x1n2onr6.x1ja2u2z > div > div.x1uvtmcs.x4k7w5x.x1h91t0o.x1beo9mf.xaigb6o.x12ejxvf.x3igimt.xarpa2k.xedcshv.x1lytzrv.x1t2pt76.x7ja8zs.x1n2onr6.x1qrby5j.x1jfb8zj > div > div > div > div > div > div > div > div.xdl72j9.x1iyjqo2.xs83m0k.x15wfb8v.x3aagtl.xqbdwvv.x6ql1ns.x1cwzgcd > div.x6s0dn4.x78zum5.x5yr21d.xl56j7k.x1n2onr6.xh8yej3 > div > div > div.x9f619.xjbqb8w.x78zum5.x168nmei.x13lgxp2.x5pf9jr.xo71vjh.xqui205.x1n2onr6.x1plvlek.xryxfnj.x1c4vz4f.x2lah0s.x1q0g3np.xqjyukv.x6s0dn4.x1oa3qoh.x1nhvcw1 > div"
  );
  await page.click(
    "body > div.x1n2onr6.xzkaem6 > div.x9f619.x1n2onr6.x1ja2u2z > div > div.x1uvtmcs.x4k7w5x.x1h91t0o.x1beo9mf.xaigb6o.x12ejxvf.x3igimt.xarpa2k.xedcshv.x1lytzrv.x1t2pt76.x7ja8zs.x1n2onr6.x1qrby5j.x1jfb8zj > div > div > div > div > div > div > div > div.xdl72j9.x1iyjqo2.xs83m0k.x15wfb8v.x3aagtl.xqbdwvv.x6ql1ns.x1cwzgcd > div.x6s0dn4.x78zum5.x5yr21d.xl56j7k.x1n2onr6.xh8yej3 > div > div > div.x9f619.xjbqb8w.x78zum5.x168nmei.x13lgxp2.x5pf9jr.xo71vjh.xqui205.x1n2onr6.x1plvlek.xryxfnj.x1c4vz4f.x2lah0s.x1q0g3np.xqjyukv.x6s0dn4.x1oa3qoh.x1nhvcw1 > div"
  );

  mexerWindows();


  await page.waitForSelector( "body > div.x1n2onr6.xzkaem6 > div.x9f619.x1n2onr6.x1ja2u2z > div > div.x1uvtmcs.x4k7w5x.x1h91t0o.x1beo9mf.xaigb6o.x12ejxvf.x3igimt.xarpa2k.xedcshv.x1lytzrv.x1t2pt76.x7ja8zs.x1n2onr6.x1qrby5j.x1jfb8zj > div > div > div > div > div > div > div > div._ap97 > div > div > div > div._ac7b._ac7d > div > div");
  await page.click("body > div.x1n2onr6.xzkaem6 > div.x9f619.x1n2onr6.x1ja2u2z > div > div.x1uvtmcs.x4k7w5x.x1h91t0o.x1beo9mf.xaigb6o.x12ejxvf.x3igimt.xarpa2k.xedcshv.x1lytzrv.x1t2pt76.x7ja8zs.x1n2onr6.x1qrby5j.x1jfb8zj > div > div > div > div > div > div > div > div._ap97 > div > div > div > div._ac7b._ac7d > div > div" );

  await page.waitForSelector("body > div.x1n2onr6.xzkaem6 > div.x9f619.x1n2onr6.x1ja2u2z > div > div.x1uvtmcs.x4k7w5x.x1h91t0o.x1beo9mf.xaigb6o.x12ejxvf.x3igimt.xarpa2k.xedcshv.x1lytzrv.x1t2pt76.x7ja8zs.x1n2onr6.x1qrby5j.x1jfb8zj > div > div > div > div > div > div > div > div._ap97 > div > div > div > div._ac7b._ac7d > div > div");
  await page.click("body > div.x1n2onr6.xzkaem6 > div.x9f619.x1n2onr6.x1ja2u2z > div > div.x1uvtmcs.x4k7w5x.x1h91t0o.x1beo9mf.xaigb6o.x12ejxvf.x3igimt.xarpa2k.xedcshv.x1lytzrv.x1t2pt76.x7ja8zs.x1n2onr6.x1qrby5j.x1jfb8zj > div > div > div > div > div > div > div > div._ap97 > div > div > div > div._ac7b._ac7d > div > div" );


  
 


  //sua postagem aqui
  const postagemConteudo ='body > div.x1n2onr6.xzkaem6 > div.x9f619.x1n2onr6.x1ja2u2z > div > div.x1uvtmcs.x4k7w5x.x1h91t0o.x1beo9mf.xaigb6o.x12ejxvf.x3igimt.xarpa2k.xedcshv.x1lytzrv.x1t2pt76.x7ja8zs.x1n2onr6.x1qrby5j.x1jfb8zj > div > div > div > div > div > div > div > div.x15wfb8v.x3aagtl.x6ql1ns.x78zum5.xdl72j9.x1iyjqo2.xs83m0k.x13vbajr.x1ue5u6n > div.xhk4uv.x26u7qi.xy80clv.x9f619.x78zum5.x1n2onr6.x1f4304s > div > div > div > div._ac2p > div:nth-child(2) > div > div.x6s0dn4.x78zum5.x1n2onr6.xh8yej3 > div.xw2csxc.x1odjw0f.x1n2onr6.x1hnll1o.xpqswwc.xl565be.x5dp1im.xdj266r.x11i5rnm.xat24cr.x1mh8g0r.x1w2wdq1.xen30ot.x1swvt13.x1pi30zi.xh8yej3.x5n08af.notranslate > p';
  await page.waitForSelector(postagemConteudo);
  await page.click(postagemConteudo);
  await page.type(postagemConteudo, "esta e uma postagem sobre animais"); //coloque sua postagem aqui



  await page.waitForSelector('body > div.x1n2onr6.xzkaem6 > div.x9f619.x1n2onr6.x1ja2u2z > div > div.x1uvtmcs.x4k7w5x.x1h91t0o.x1beo9mf.xaigb6o.x12ejxvf.x3igimt.xarpa2k.xedcshv.x1lytzrv.x1t2pt76.x7ja8zs.x1n2onr6.x1qrby5j.x1jfb8zj > div > div > div > div > div > div > div > div._ap97 > div > div > div > div._ac7b._ac7d > div > div');
  await page.click('body > div.x1n2onr6.xzkaem6 > div.x9f619.x1n2onr6.x1ja2u2z > div > div.x1uvtmcs.x4k7w5x.x1h91t0o.x1beo9mf.xaigb6o.x12ejxvf.x3igimt.xarpa2k.xedcshv.x1lytzrv.x1t2pt76.x7ja8zs.x1n2onr6.x1qrby5j.x1jfb8zj > div > div > div > div > div > div > div > div._ap97 > div > div > div > div._ac7b._ac7d > div > div');


};

//mover o mouse para cima da tela
const mexerWindows = () => {
  robot.typeString("C:\\Users\\Administrator\\Downloads\\animais"); //informe o diretorio de sua pasta, obs so deixe as imagens
  robot.keyTap("enter");
  robot.moveMouse(388, 238);
  robot.mouseClick();
  robot.keyTap("down");
  robot.keyTap('a', ['control']);
  robot.keyTap("enter");
};

postsIntagram();
