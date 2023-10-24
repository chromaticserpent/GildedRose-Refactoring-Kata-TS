import { GildedRose } from '../app/gilded-rose';
import { ItemsSeed } from './ItemsSeed';

const gildedRose = new GildedRose(ItemsSeed);

let days: number = 2;
if (process.argv.length > 2) {
    days = +process.argv[2];
  }

for (let i = 0; i < days; i++) {
  console.log("-------- day " + i + " --------");
  console.log("name, sellIn, quality");
  ItemsSeed.forEach(element => {
    console.log(element.name + ' ' + element.sellIn + ' ' + element.quality);

  });
  console.log();
  gildedRose.updateQuality();
}
