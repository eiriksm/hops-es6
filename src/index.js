'use strict';

const knownHopsAlpha = {
  'centennial': 10
};

export default class {
  constructor(name, alpha = null) {
    this.name = name;
    if (!alpha) {
      // Normalize name.
      var index = name.toLowerCase();
      alpha = knownHopsAlpha[index];
    }
    this.alpha = alpha;
  }
  getAlpha() {
    return this.alpha;
  }
}

