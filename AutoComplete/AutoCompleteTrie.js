export default class AutoCompleteTrie {
  constructor(value = "") {
    this.value = value;
    this.children = {};
    this.endOfWord = false; // flag for end of word
  }

  addWord(word) {
    let mynode = this;
    for (const char of word) {
      if (!mynode.children[char]) {
        mynode.children[char] = new AutoCompleteTrie(char);
      }
      mynode = mynode.children[char];
    }
    mynode.endOfWord = true;
  }

  findWord(word) {
    let mynode = this;
    for (const char of word) {
      if (!mynode.children[char]) {
        return false;
      }
      mynode = mynode.children[char];
    }
    return mynode.endOfWord;
  }

  _getRemainingTree(prefix, node) {
    for (const char of prefix) {
      if (!node.children[char]) {
        throw new Error(`${prefix} not in dictionary`);
      }
      node = node.children[char];
    }
    return node;
  }

  _allWordsHelper(prefix, node, allWords) {
    if (node.endOfWord) {
      allWords.push(prefix);
    }
    for (const char in node.children) {
      this._allWordsHelper(prefix + char, node.children[char], allWords);
    }
  }

  predictWords(prefix) {
    const lastNode = this._getRemainingTree(prefix, this);
    if (!lastNode) return [];
    const allWords = [];
    this._allWordsHelper(prefix, lastNode, allWords);
    return allWords;
  }
}

// const trie = new AutoCompleteTire();
// trie.addWord("cat");
// trie.addWord("car");
// trie.addWord("carbon");
// trie.addWord("cart");

// console.log(trie.findWord("car")); // true
// console.log(trie.predictWords("car")); // ["car", "carbon", "cart"]
