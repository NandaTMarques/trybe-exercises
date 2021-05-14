let peca = 'queen';
if (peca.toLowerCase() === "king") {
    console.log("The King is the most important piece of chess, his capture is the only objective of the game. He can move 1 square in the vertical, horizontal or diagonal direction.")
}else if (peca.toLowerCase() === "queen") {
    console.log("The Queen can move in any direction (horizontal, vertical or diagonal) and any number of squares. The only thing she can't do is jump over other pieces. The Queen can capture any of the opponent's pieces.")
}else if (peca.toLowerCase() === "bishop") {
    console.log("The bishop's movement is oblique, moving in straight lines on the diagonals of the chessboard.")
}else if (peca.toLowerCase() === "knight") {
    console.log("The Knight has a special movement that looks like the letter L. The knight is the only chess piece that can skip other pieces.")
}else if (peca.toLowerCase() === "pawn"){
    console.log ("The Pawn only moves forward, being the only piece that does not move backwards. On the first move of each pawn he can advance 1 or 2 squares. From the second move of each pawn, it will move only one square.")
}else if (peca.toLowerCase() === "rook"){
    console.log("The Rook moves back and forth, to the right and to the left, as many squares as you want, but it cannot skip any other piece.")
}else {
    console.log("Invalid piece. Try again!")
}