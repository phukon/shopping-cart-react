# React Context + Typescript Practice

<p align='center'>I wanted to brush up my React + Typescript skills and what better way to do so <br/>than by delving into contexts and diving deep into the data flow?</p>
<img src='https://github.com/phukon/shopping-cart-react/assets/60285613/52cff078-7c9a-4ab3-86eb-0026cbd4e5b7'alt="store screenshot"/>

---
- Used best practices for using Context (abstraction using custom hooks)
- Items are listed in the `/store` route. 
- Items can be added doing which the cart `🛒` icon with the total number of items in the cart appears.
- This cart `🛒` icon can be clicked to reveal a sidebar that gives the summary of the items, prices and quantities.
- A navigation bar and three routes

## Nuances

Writing types was the fun part. Here are the types I wrote for the `Shopping Cart Context`

### Types

```typescript
type TShoppingCartProviderProps = {
  children: ReactNode;
};

type TShoppingCartContext = {
  openCart: () => void;
  closeCart: () => void;
  getItemQuantity: (id: number) => number;
  increaseCartQuantity: (id: number) => void;
  decreaseCartQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
  cartQuantity: number;
  cartItems: TCartItem[];
};

type TCartItem = {
  id: number;
  quantity: number;
};
```
