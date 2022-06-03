'use strict';

const ads = document.querySelector('.ads');
ads.remove();
const items = document.querySelector('.items');
const firstItem = document.querySelector('.item_one');
const secondItem = document.querySelector('.item_two');
const thirdItem = document.querySelector('.item_three');
const fourthItem = document.querySelector('.item_four');
const fifthItem = document.querySelector('.item_five');
const sixthItem = document.querySelector('.item_six');

items.prepend(firstItem);
firstItem.after(secondItem);
secondItem.after(thirdItem);

const secondItemTitle = secondItem.querySelector('h2');
const thirdItemTitle = thirdItem.querySelector('h2');
const fifthItemTitle = fifthItem.querySelector('h2');
const sixthItemTitle = sixthItem.querySelector('h2');
const secondItemImg = secondItem.querySelector('img');
const fifthItemImg = fifthItem.querySelector('img');
const sixthItemImg = sixthItem.querySelector('img');

secondItemTitle.remove();
fifthItemTitle.remove();
sixthItemTitle.remove();

secondItemImg.after(fifthItemTitle);
sixthItemImg.after(secondItemTitle);
fifthItemImg.after(sixthItemTitle);


const secondItems = secondItem.querySelectorAll('.props__item');
secondItems[3].remove();
const fourthItems = fourthItem.querySelectorAll('.props__item');
fourthItems[2].after(secondItems[3]);
const sixthItems = sixthItem.querySelectorAll('.props__item');
sixthItems[8].remove();
sixthItems[9].remove();
secondItems[8].after(sixthItems[8], sixthItems[9]);
const thirdItems = thirdItem.querySelector('.props__list');
const fifthItems = fifthItem.querySelector('.props__list');
thirdItems.remove();
fifthItems.remove();
thirdItemTitle.after(fifthItems);
sixthItemTitle.after(thirdItems);
