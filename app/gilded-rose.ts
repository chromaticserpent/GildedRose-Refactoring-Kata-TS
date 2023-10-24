
import { Item } from './item'
import { ItemToCategoryMap } from './item-to-category-map';
import { ItemCategory } from './item-category-enum';

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality() {
      for (let i = 0; i < this.items.length; i++) {
        const item = this.items[i]
        const itemCategory = ItemToCategoryMap.get(this.items[i].name)

        switch(itemCategory) {
          // items like "Aged Brie" appreciate in quality by 1 each day
          case ItemCategory.APPRECIATING_ITEMS:
            this.increaseQuality(item)
            break;

          // items like "+5 Dexterity Vest" and "Elixir of the Mongoose" depreciate in quality by 1 each day
          case ItemCategory.DEPRECIATING_ITEMS:
            this.decreaseQuality(item)
            break;

          // items like "Sulfuras, Hand of Ragnaros" have their quality unaltered at 80 no matter what
          case ItemCategory.ASSETS:
            break;

          // special items like "Backstage passes to a TAFKAL80ETC concert" gradually appreciate in quality 
          // until the date of the concert, and then have 0 quality
          case ItemCategory.SPECIAL_ITEMS:
            if(item.sellIn > 10){
              this.increaseQuality(item)
            }
            if(item.sellIn <= 10 && item.sellIn > 5){
              this.increaseQuality(item, 2)
            }
            if(item.sellIn <= 5 && item.sellIn > 0){
              this.increaseQuality(item, 3)
            }
            if(item.sellIn <= 0){
              item.quality = 0
            }
            break;

          // conjured items depreciate in quality twice as fast
          case ItemCategory.CONJURED_ITEMS:
            this.decreaseQuality(item, 2)
            break;
        }
        item.sellIn = item.sellIn - 1
      }
  
      return this.items;
    }

  private increaseQuality(item: Item, increaseRate: number = 1) {
    const newQualityValue = item.quality + increaseRate
    item.quality = newQualityValue >= 50 ? 50 : newQualityValue
  }

  private decreaseQuality(item: Item, decreaseRate: number = 1) {
    const newQualityValue = item.quality - decreaseRate
    item.quality = newQualityValue <= 0 ? 0 : newQualityValue
  }
}
