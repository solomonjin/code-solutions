class TrieNode {
  constructor() {
    this.children = {};
    this.word = false;
  }
}

var WordDictionary = function () {
  this.root = new TrieNode();
};

/**
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function (word) {
  let curr = this.root;
  for (const c of word) {
    if (!curr.children[c]) {
      curr.children[c] = new TrieNode();
    }
    curr = curr.children[c];
  }
  curr.word = true;
};

/**
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function (word) {
  const dfs = (j, root) => {
    let curr = root;
    for (let i = j; i < word.length; i++) {
      const c = word[i];
      if (c === '.') {
        for (const child of Object.keys(curr.children)) {
          if (dfs(i + 1, curr.children[child])) return true;
        }
        return false;
      } else {
        if (!curr.children[c]) return false;
        curr = curr.children[c];
      }
    }
    return curr.word;
  }
  return dfs(0, this.root);
};

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */
