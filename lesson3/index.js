'use strict';
const changeList = () => {
    const list = document.querySelector('.list');
  const addText = () => {
    const itemText = prompt('Введите текст');
    console.log(itemText);
    const item = document.createElement('li');
    if (itemText !== null && itemText !== 'exit') {
      if (itemText === '' || itemText.includes('\u0020')) {
        addText();
      } else if (itemText === 'del') {
        list.lastChild.remove();
        addText();
      } else if (itemText === 'clear') {
        while (list.firstChild) {
          list.removeChild(list.firstChild);
        }
        addText();
      } else {
      list.append(item);
      item.innerText = itemText;
      addText();
      }
    }
    if (itemText === 'exit' || itemText === null) {
      return;
    }
  };
  addText();
};
changeList();
