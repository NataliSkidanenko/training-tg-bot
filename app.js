import express from 'express';
import {PORT, TOKEN} from './config.js';
import {Telegraf} from 'telegraf';
import {getMainMenu} from './keyboard.js';

const app = express();
const bot = new Telegraf(TOKEN);

bot.start((ctx) => {
  ctx.reply('Welcome, bro', getMainMenu());
});

bot.hears('хочу есть', (ctx) => {
  ctx.reply('Так передохни и покушай');
});

bot.command('time', (ctx) => {
  ctx.reply(String(new Date()));
});

bot.hears('Смотивируй меня', (ctx) => {
  ctx.replyWithPhoto(
    'https://img2.goodfon.ru/wallpaper/nbig/7/ec/justdoit-dzhastduit-motivaciya.jpg',
    {
      caption: 'Не вздумай сдаваться!',
    }
  );
});

bot.launch();
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
