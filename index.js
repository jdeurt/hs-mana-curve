module.exports = (costs = [], max = 8) => {
    if(costs.length > 8) {
        for(var i = 8; i < costs.length; i++) {
            costs[7] += costs[i];
        }
        costs = costs.slice(0, 8);
    }
    var curve = "";
    for(var layer = 0; layer < max; layer++) {
        costs.forEach(cost => {
            if(cost > max-1-layer) curve += "█ ";
            else if(cost == 0 && layer == max-1) curve += "_ ";
            else curve += "  ";
        });
        curve += "\n";
    }
    curve += "0 1 2 3 4 5 6 7+";
    return curve;
};
