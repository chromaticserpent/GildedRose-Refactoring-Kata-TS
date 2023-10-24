// Introducing item categories for the ease of item management 
// Brie will fall into the category of appreciating items
// Elixirs and Mana Cakes will fall into depreciating items
// Sulfuras, which is not to sold will be an asset
// And concert tickets will have their own category of special items

export enum ItemCategory {
    APPRECIATING_ITEMS = 'appreciating_items',
    DEPRECIATING_ITEMS = 'depreciating_items',
    ASSETS = 'assets',
    SPECIAL_ITEMS = 'special_items',
    CONJURED_ITEMS = 'conjured_items'
}