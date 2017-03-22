/**
 * Created by mxiaoxi on 17/03/2017.
 */
// module.export={};
//
// function printAvatar() {
//     console.log("Avatar is a good movie!");
// }
//
// function printGreatwall() {
//     console.log("Great wall is a bad movie");
// }

module.exports = function () {
    return {
        printGreatWall: function () {
            console.log("Great wall is a bad movie");
        },

        printAvatar: function () {
            console.log('Avatar is a good movie!');
        },
        favMovie: "Up!"
    }

}
