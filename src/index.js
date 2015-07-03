'use strict';

const knownHopsAlpha = {
  'admiral': 11,
  'ahtanum': 5.8,
  'amarillo': 6.5,
  'boadicea': 7,
  'bobek': 3.0,
  'bramling': 7.5,
  'bravo': 13,
  'brewers gold': 7.5,
  'bullion': 7,
  'cascade': 6.5,
  'celeia': 4.7,
  'centennial': 10,
  'challenger': 7.6,
  'chinook': 12.6,
  'citra': 11,
  'cluster': 6.7,
  'columbus': 16,
  'crystal': 5,
  'east kent golding': 4.4,
  'ella': 15,
  'eroica': 12,
  'first gold': 8.1,
  'fuggle': 4.0,
  'fuggles oregon': 3.1,
  'galaxy': 15.5,
  'galena': 13,
  'goldings': 5.7,
  'hallertau aroma': 7.0,
  'hallertauer': 6.6,
  'hallertauer mittelfruh': 5,
  'hallertauer tradition': 6,
  'herald': 11,
  'herkules': 16,
  'hersbrucker': 2.1,
  'horizon': 13,
  'jenny': 12,
  'kazbek': 5.6,
  'liberty': 4.3,
  'magnum': 14,
  'mosaic': 12,
  'motueka': 7,
  'mt. hood': 4.1,
  'nelson sauvin': 12,
  'northdown': 8.4,
  'northern brewer': 7.8,
  'nugget': 13,
  'opal': 6.7,
  'pacific gem': 17,
  'perle': 6.4,
  'phoenix': 10,
  'pilgrim': 11,
  'polaris': 19,
  'pride of ringwood': 9,
  'progress': 6,
  'saaz': 2.8,
  'santiam': 5.5,
  'saphir': 4.6,
  'simcoe': 13,
  'smaragd': 4,
  'sorachi ace': 12,
  'sovereign': 6,
  'spalt select': 5,
  'sterling': 5.7,
  'strisselsspalt': 1.8,
  'styrian golding': 4.0,
  'summer': 6,
  'summit': 18,
  'sylva': 7.5,
  'target': 10,
  'taurus': 16,
  'tettnanger': 3.8,
  'tomahawk': 15.8,
  'topaz': 16,
  'tradition': 5.5,
  'triskel': 7.3,
  'vanguard': 5.5,
  'vic secret': 16,
  'whitbread golding variety': 8.3,
  'williamette': 4.9,
  'zeus': 15,
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
  getKnownHops() {
    return knownHopsAlpha;
  }
  getAlpha() {
    return this.alpha;
  }
}

