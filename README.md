# hs-mana-curve
A simple module that generates a text-based mana curve graph based on an array of card costs.

### Instalation
```
npm i hs-mana-curve --save
```

### Parameters
```
parameter (default value): description
```
* costs ([]): An array of integers that represent the amount of cards with a cost equal to their index.
* max (8): The maximum amount of cards that will be shown in the curve before it gets capped out.
* mode ("expanded"): Either `expanded` or `compressed`. Determines how to curve will look.
* showAmt (false): Whether or not to show the amount of cards for each mana cost at the top of each bar.

### How to use
```js
var manaCurve = require("hs-mana-curve");

var cardCosts = [0, 3, 6, 0, 6, 4, 3, 4, 2, 0, 2];
//card costs taken from https://www.hearthpwn.com/decks/1082636-spiteful-lady-in-white
//array indexes are based on mana cost so like array[cost] = amount of cards with that cost

var curveCap = 8;
//how high the module counts cards with a certain mana cost before they get capped off

var curve = manaCurve(cardCosts, curveCap, "compressed", false);

/*Output:
              █ 
    █   █     █ 
  ▄ █   █ █ ▄ █ 
_ █ █ _ █ █ █ █ 
0 1 2 3 4 5 6 7+
*/
```
