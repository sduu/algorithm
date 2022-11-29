function solution(board) {
    while (board.flat().indexOf(1) >= 0) {
        const index = board.flat().indexOf(1);
        const column = ~~(index / board[0].length);
        const row = index % board[0].length;
        board = board.map((v, i) => {
            if (Math.abs(i - column) <= 1) {
                return v.map((v2, i2) => {
                    if (i === column && i2 === row) return 3;
                    if (Math.abs(i2 - row) <= 1 && v2 === 0) return 2;
                    return v2;
                });
            }
            return v;
        });
    }

    return board.flat().reduce((a, c) => (c === 0 ? a + 1 : a), 0);
}