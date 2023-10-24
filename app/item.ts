import { ItemCategory } from "./item-category-enum";

export class Item {
    name: string;
    sellIn: number;
    quality: number;
    category?: ItemCategory;
  
    constructor(name, sellIn, quality, category?) {
      this.name = name;
      this.sellIn = sellIn;
      this.quality = quality;
      // Feels like depreciating items is the most safe default category
      this.category = category ? category : ItemCategory.DEPRECIATING_ITEMS 
    }
  }