const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

let storyText = '今日は華氏１度で外は寒かった。:insertx:は出かけた。:inserty:に着いた。:insertz:体重50ポンドの:insertx:は驚いたが、梅子は驚かなかった。:inserty:ではよくあることだった。';
let insertX = ['スヌーピー','ミッキー','マイメロ'];
let insertY = ['ディズニーランド','USJ','東京タワー'];
let insertZ = ['雀がたくさん飛んでいた。','空からチョコレートが降ってきた。','生の大根をかじっている人がいた。'];

randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;

  let xItem = randomValueFromArray(insertX);
  let yItem = randomValueFromArray(insertY);
  let zItem = randomValueFromArray(insertZ);

  newStory = newStory.replaceAll(':insertx:',xItem);
  newStory = newStory.replaceAll(':inserty:',yItem);
  newStory = newStory.replaceAll(':insertz:',zItem);

  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace('梅子',name);
  }

  if(document.getElementById("ja").checked) {
    const weight = Math.round((94-32) * 5 / 9) + 'kg';
    const temperature =  '摂氏'+Math.round(300*0.0714286);
    newStory = newStory.replace('華氏１',temperature);
    newStory = newStory.replace('50ポンド',weight);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
