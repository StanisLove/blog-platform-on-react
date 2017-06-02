//import nightmare from 'nightmare';
import visit from '../src/helpers/visit';

describe('When visit the homepage', () => {

  it('Welcomes the user', async () => {
    let page = visit('/');
    let text = await page.evaluate(() => (document.body.textContent)).end();

    expect(text).toContain('SupaBlog');
  });

  //it('likes post on homepage', async () => {
  //  let page = visit('/');
  //  let beforeClickCount = await page.evaluate(() =>
  //    document.querySelector('.like-count .label')
  //  ).end();
  //  const afterClickCount = await page.click('.like-count').evaluate(() =>
  //    document.querySelector('.like-count .label')
  //  ).end();

  //  expect(afterClickCount).toEqual(`${++beforeClickCount}`);
  //});

  it('likes post on homepage', () => {
    async function clickCount() {
      return await page.evalueate(() =>
        document.querySelector('.like-count .label')
    let page = visit('/');
    let beforeClickCount = await page.evaluate(() =>
      document.querySelector('.like-count .label')
    ).end();
    const afterClickCount = await page.click('.like-count').evaluate(() =>
      document.querySelector('.like-count .label')
    ).end();

    expect(afterClickCount).toEqual(`${++beforeClickCount}`);
  });
});
