import { ItemCategory } from "./item-category-enum"

export const ItemToCategoryMap = new Map<string, ItemCategory>([
    ["+5 Dexterity Vest", ItemCategory.DEPRECIATING_ITEMS], // Since the nature of this item is not specified it will be a depreciating item by default 
    ["Aged Brie", ItemCategory.APPRECIATING_ITEMS],
    ["Elixir of the Mongoose", ItemCategory.DEPRECIATING_ITEMS],
    ["Sulfuras, Hand of Ragnaros", ItemCategory.ASSETS],
    ["Backstage passes to a TAFKAL80ETC concert", ItemCategory.SPECIAL_ITEMS],
    ["Conjured Mana Cake", ItemCategory.CONJURED_ITEMS]
])