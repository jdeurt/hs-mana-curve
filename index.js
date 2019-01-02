/*
    I'm going to be completely honest I have no fucking idea how any of this works anymore
*/

/**
 * Generates a deck mana curve string.
 * @param {Array<number>} costs An array representing the amount of cards for each mana cost. Indexed by mana cost.
 * @param {number} max Maximum amount of cards shown in the curve before they're cut off.
 * @param {"expanded"|"compressed"} mode Determines how the curve will look. Expanded is taller than compressed.
 * @param {boolean} showAmt Whether to show the amount of cards for that mana cost above each column.
 * @returns {string}
 */
module.exports = (costs = [], max = 8, mode = "expanded", showAmt = false) => {
    var modes = ["expanded", "compressed"];
    if(modes.indexOf(mode) < 0) throw new Error("Invalid mode specified.");
    if(costs.length > 8) {
        for(var i = 8; i < costs.length; i++) {
            costs[7] += costs[i];
        }
        costs = costs.slice(0, 8);
    }
    var curve = "";
    if(showAmt) {
        costs.forEach(cost => {
            curve += cost+" ";
        });
        curve += "\n";
        curve += "- - - - - - - -";
        curve += "\n";
    }
    if(mode == modes[0]) {
        for(var layer = 0; layer < max; layer++) {
            costs.forEach(cost => {
                if(cost > max-1-layer) curve += "█ ";
                else if(cost == 0 && layer == max-1) curve += "_ ";
                else curve += "  ";
            });
            curve += "\n";
        }
    }
    else if(mode == modes[1]) {
        for(var layer = 0; layer < max; layer += 2) {
            costs.forEach(cost => {
                if(cost >= max-layer) {
                    curve += "█ ";
                }
                else if(cost == max-layer-1) {
                    curve += "▄ ";
                }
                else if(cost == 0 && layer == max-2) curve += "_ ";
                else curve += "  ";
            });
            curve += "\n";
        }
    }
    curve += "0 1 2 3 4 5 6 7+";
    return curve;
};
