
function test1(a, a) {
    total = 10;
}
test1(5, 10);

(function () {
    "use strict";
    try {
        let total = 10;
        console.log("Strict OK");
    } catch (e) {
        console.log(e);
    }
})();
