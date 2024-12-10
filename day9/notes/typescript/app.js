"use strict";
const coords = [
    [1, 2], [1, -3]
];
const coords1 = [
    [1, [1, 2]], [1, [3, 4]]
];
coords[0][1];
// literals
let direction;
let responseCode;
var Size;
(function (Size) {
    Size[Size["Small"] = 0] = "Small";
    Size[Size["Medium"] = 1] = "Medium";
    Size[Size["Large"] = 2] = "Large";
})(Size || (Size = {}));
let size = Size.Small;
if (size === Size.Small) {
    console.log("Size Small");
}
