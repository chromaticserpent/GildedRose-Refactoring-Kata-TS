import { GildedRose } from '../app/gilded-rose';
import { Item } from '../app/item'
import { ItemCategory } from '../app/item-category-enum';

const items = [
  new Item("+5 Dexterity Vest", 10, 20), //
  new Item("Aged Brie", 2, 0, ItemCategory.APPRECIATING_ITEMS), //
  new Item("Elixir of the Mongoose", 5, 7, ItemCategory.DEPRECIATING_ITEMS), //
  new Item("Sulfuras, Hand of Ragnaros", 0, 80, ItemCategory.ASSETS), //
  new Item("Sulfuras, Hand of Ragnaros", -1, 80, ItemCategory.ASSETS),
  new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20, ItemCategory.SPECIAL_ITEMS),
  new Item("Backstage passes to a TAFKAL80ETC concert", 10, 49, ItemCategory.SPECIAL_ITEMS),
  new Item("Backstage passes to a TAFKAL80ETC concert", 5, 49, ItemCategory.SPECIAL_ITEMS),
  // this conjured item does not work properly yet
  new Item("Conjured Mana Cake", 3, 6, ItemCategory.DEPRECIATING_ITEMS)
];

const gildedRose = new GildedRose(items);

let days: number = 2;
if (process.argv.length > 2) {
    days = +process.argv[2];
  }

for (let i = 0; i < days; i++) {
  console.log("-------- day " + i + " --------");
  console.log("name, sellIn, quality");
  items.forEach(element => {
    console.log(element.name + ' ' + element.sellIn + ' ' + element.quality);

  });
  console.log();
  gildedRose.updateQuality();
}
