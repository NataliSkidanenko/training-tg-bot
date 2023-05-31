import {Markup} from 'telegraf';

// import {Markup} from 'telegraf/typings/markup';

export function getMainMenu() {
  return Markup.keyboard([['Мои задачи', 'Удалить задачу'], ['Смотивируй меня']]).resize();
}
