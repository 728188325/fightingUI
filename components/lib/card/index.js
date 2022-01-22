import FtCard from './src/card.vue';

FtCard.install = function (Vue) {
  Vue.component(FtCard.name, FtCard);
};

export default FtCard;
