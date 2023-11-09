// TrieNode for each character in tree
class TrieNode {
  constructor() {
    this.children = {};
    this.endOfWord = false;
  }
}

var Trie = function () {
  this.root = new TrieNode();
};

/**
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
  let curr = this.root;
  for (const c of word) {
    // If the character hasn't been inputted into tree yet
    if (!curr.children[c]) {
      curr.children[c] = new TrieNode();
    }
    curr = curr.children[c]; // Move to next character
  }
  curr.endOfWord = true; // At end of loop, curr is at last char so mark it as end of word
};

/**
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
  let curr = this.root;

  // Go through each char in word. If a char doesn't exist, return false. Otherwise, go to next child
  for (const c of word) {
    if (!curr.children[c]) return false;
    curr = curr.children[c];
  }

  return curr.endOfWord; // Verify that this is the end of the word and further characters don't remain
};

/**
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
  curr = this.root;

  // Go through each char in word. If a char doesn't exist, return false. Otherwise, go to next child
  for (const c of prefix) {
    if (!curr.children[c]) return false;
    curr = curr.children[c];
  }
  return true;
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
