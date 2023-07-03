import { Block } from './Block.ts';

export function render(query: string, block: Block) {
  const root = document.querySelector(query);

  if (!root) {
    throw new Error('Нет такого элемента');
  }

  // Можно завязаться на реализации вашего класса Block
  root.appendChild(block.getContent()!);

  block.dispatchComponentDidMount();

  return root;
}
