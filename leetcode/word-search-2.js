// TrieNode class to keep track of our prefix tree
class TrieNode {
  constructor() {
    this.children = {};
    this.isWord = false;
  }

  addWord(word) {
    let curr = this;
    for (const c of word) {
      if (!curr.children[c]) {
        curr.children[c] = new TrieNode();
      }
      curr = curr.children[c];
    }
    curr.isWord = true;
  }
}

var findWords = function (board, words) {
  // Create a prefix tree with given list of words
  const root = new TrieNode();
  for (const word of words) {
    root.addWord(word);
  }

  const [rows, cols] = [board.length, board[0].length];
  const res = new Set();

  const dfs = (r, c, node, word) => {
    if (r < 0 || c < 0                      // Base cases. Check if out of bounds
      || r >= rows || c >= cols           // or if the space has been visited
      || board[r][c] === '*'              // or if current letter is even in the prefix tree/part of word
      || !node.children[board[r][c]]
    ) {
      return;
    }
    const char = board[r][c];               // Store current char
    board[r][c] = '*';                      // Mark current tile as visited to avoid revisits/loops
    node = node.children[char];             // Progress in prefix tree
    word += char                            // Add the new letter to our current word
    if (node.isWord) res.add(word);         // If we reached the end of a word, add it to results

    // Perform DFS in each direction
    dfs(r + 1, c, node, word);
    dfs(r - 1, c, node, word);
    dfs(r, c + 1, node, word);
    dfs(r, c - 1, node, word);

    // Unmark the visited square so it can be visited again in new iterations
    board[r][c] = char;
  }

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      dfs(r, c, root, '');
    }
  }
  return Array.from(res);
};
