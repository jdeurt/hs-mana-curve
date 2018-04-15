# hs-mana-curve
A simple module that generates a text-based mana curve graph based on an array of card costs.

## How to use
```js
var manaCurve = require("hs-mana-curve");

var cardCosts = [0, 3, 6, 0, 6, 4, 3, 4, 2, 0, 2];
//card costs taken from https://www.hearthpwn.com/decks/1082636-spiteful-lady-in-white

var curveCap = 8;

var curve = manaCurve(cardCosts, curveCap);

/*Output:
              █ 
              █ 
    █   █     █ 
    █   █     █ 
    █   █ █   █ 
  █ █   █ █ █ █ 
  █ █   █ █ █ █ 
_ █ █ _ █ █ █ █ 
0 1 2 3 4 5 6 7+
*/
```
