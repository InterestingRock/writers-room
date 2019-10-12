"use strict"

var newAchieve = {
  Milestone: function (name, description, reward) {
    this.name = name,
    this.description = description,
    this.unlocked = false
  },
  Other: function (name, flavour, requirement, reward) {
    this.name = name,
    this.flavour = flavour,
    this.requirement = requirement,
    this.reward = reward,
    this.unlocked = false
  },
}
var newEquip = {
  Auto: function (displayName, buttonId, equipId, rate, upBaseCost) {
    this.bought = false;
    this.buttonId = buttonId
    this.equipId = equipId
    this.level = 0
    this.name = displayName
    this.on = true;
    this.rate = rate
    this.upBaseCost = upBaseCost
  },
  Multiplier: function (displayName, buttonId, equipId, upBaseCost){
    this.bought = false;
    this.buttonId = buttonId
    this.equipId = equipId
    this.level = 1
    this.name = displayName
    this.multiplier = 1
    this.upBaseCost = upBaseCost
  },
  Other: function (displayName, buttonId) {
    this.bought = false;
    this.buttonId = buttonId
    this.name = displayName
  }
}

var thisRun = {
  alphaArray: [
    "A", "B", "C", 'D', 'E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',
    "A", "B", "C", 'D', 'E','F','G','H','I','K','L','M','N','O','P','R','S','T','U','V','W','Y',
    "A", "B", "C", 'D', 'E','F','G','H','I','K','L','M','N','O','P','R','S','T','U','V','W','Y',
    "A", "B", "C", 'D', 'E','F','G','H','I','K','L','M','N','O','P','R','S','T','U','V','W','Y',
    "A", "B", "C", 'D', 'E','F','G','H','I','K','L','M','N','O','P','R','S','T','U','V','W','Y',
    "A", "B", "C", 'D', 'E','F','G','H','I','K','L','M','N','O','P','R','S','T','U','V','W','Y',
    "A", "B", "C", 'D', 'E','F','G','H','I','K','L','M','N','O','P','R','S','T','U','V','W','Y',
    "A", "E", "I", "O", "U", "A", "E", "I", "O", "U", "A", "E", "I", "O", "U",
    "A", "E", "I", "O", "U", "A", "E", "I", "O", "U", "A", "E", "I", "O", "A",
    "A", "E", "I", "O", "A", "E", "I", "O",  "E",  "E"
  ],
  letters: [],
  lettersPC: 1,
  letterBoxLimit: 100,
  uniqueWords : [],
  swords: 0,
  awords: 0,
  lwords: 0,
  jwords: 0,
  money: 0,
  published: {
     poem: {
      name: " Poem",
      amount: 0,
      baseRate: 0.01,
      level: 1,
      listID: "poemTitles",
      description: "Filled with cleverly constructed couplets that bring your readers to tears. Too bad readers of poetry are few.",
      titles: [],
      upNames: ["Rhyme Machyme",                     "Alliteration Allocator", "Meter-Maker"],
      upBaseCost: 50,
      upDesc:  ["Forces rhyming into your writing.", "Perfect for poeting",    "forEX amPLE anI amBIC penTA meTER"]
    },
     child: {
      name: " Children's Book",
      amount: 0,
      baseRate: 0.2,
      level: 1,
      listID: "childTitles",
      description: "Children will read anything, even something written by you. Just make sure they can read it.",
      titles: [],
      upNames: ["Illustrator", "Rainbow Scales"],
      upBaseCost: 100,
      upDesc: ["It turns out children like books with pictures. Who knew.", ""]
    },
     story: {
      name: " Short Story",
      amount: 0,
      baseRate: 1.5,
      level: 1,
      listID: "storyTitles",
      description: "Like the snacks of literature, short stories are popular amongst those who insist they read but just cannot find the time.",
      titles: [],
      upNames: ["Random Twister"],
      upBaseCost: 500,
      upDesc: []
    },
     journ: {
      name: " Academic Journal Artical",
      amount: 0,
      baseRate: 20,
      level: 1,
      listID: "journTitles",
      description: "By using Brobdingnagian words, such as ubiquitous or circumscription, in addition to a convoluted sentence structure that seems to go in circles, one's journal article can appear convincingly academic even to a post-doctoral university researcher.",
      titles: [],
      upNames: [],
      upBaseCost: 2000,
      upDesc: []
    },
     novel: {
      name: " Novel",
      amount: 0,
      baseRate: 400,
      level: 1,
      listID: "novelTitles",
      description: "Filled with relatable characters living interesting lives, readers despebaseRately pick up novels to vicariously experience excitement.",
      titles: [],
      upNames: [],
      upBaseCost: 10000,
      upDesc: []
    },
     text:{
      name: " Textbook",
      amount: 0,
      baseRate: 5000,
      level: 1,
      listID: "textTitles",
      description: "To write an overpriced compulsory textbook - now that is the dream.",
      titles: [],
      upNames: [],
      upBaseCost: 75000,
      upDesc: []
    },
     series:{
      name: " Book Series",
      amount: 0,
      baseRate: 25000,
      level: 1,
      listID: "seriesTitles",
      description: "As long it never ends, you're guaranteed a steady income.",
      titles: [],
      upNames: [],
      upBaseCost: 250000,
      upDesc: []
    },
     ency: {
      name: "n Encyclopaedia Set",
      amount: 0,
      baseRate: 303000,
      level: 1,
      listID: "encyTitles",
      description: "There's nothing like an encyclopaedia set sitting on one's shelf to make one look well-read, and boy, people are willing to pay anything to look well-read.",
      titles: [],
      upNames: [],
      upBaseCost: 10000000,
      upDesc: []
    }
  },
  holy: {
    name: " The History of Everything",
    amount: 0,
    baseRate: 1,
    level: 0,
    description: "For a book that contains everything there is to know about the universe, it's incredibly succinct.",
    cost: 7000000
  },
  purchased: {
    wordsPW: new newEquip.Multiplier ("Copycat", "wPWButton", "wPWEquip", 2),
    clicksPC: new newEquip.Multiplier ("Over-Compensating Mouse", "clickPCButton", "clickPCEquip", 1),
    expandBox: new newEquip.Multiplier ("Box Enhancer","expandButton", "expandEquip", 10),
    ran: new newEquip.Auto ("Dart", "ranButton", "ranEquip", 1, 4),
    ranS: new newEquip.Auto ("Educated Ant", "ranSButton", "ranSEquip", 1, 5),
    ranA: new newEquip.Auto ("Sparklers", "ranAButton", "ranAEquip", 1, 6),
    ranL: new newEquip.Auto ("Curious Kangaroo", "ranLButton", "ranLEquip", 1, 7),
    ranJ: new newEquip.Auto ("Sesquipedaliac", "ranJButton", "ranJEquip", 1, 8),
    speS: new newEquip.Auto ("speS", "speSButton", "speSEquip", 1, 5),
    speA: new newEquip.Auto ("speA", "speAButton", "speAEquip", 1, 6),
    speL: new newEquip.Auto ("speL", "speLButton", "speLEquip", 1, 7),
    speJ: new newEquip.Auto ("speJ", "speJButton", "speJEquip", 1, 8),
    ranLetter: new newEquip.Auto ("Bouncy Ball", "ranLetterButton", "ranlEq", 1, 1),
    goodLetter: new newEquip.Other ("Fingerprinter", "goodLetterButton", "goodlEq", 1, 2),
    empty: new newEquip.Other (" Lever", "lever"),
    sort: new newEquip.Other ("Shelving Shelf", "shelf"),
    shift: new newEquip.Other ("Obedient Beaver","beaver"),
    shuffle: new newEquip.Other (" Huge Boot", "boot"),
  },
  tick: {
    rate: {
      ran: 10000,
      spe: 10000,
      ranl: 1000,
      goodl: 5000,
    },
    baseCost: {
      ran: 100,
      spe: 100,
      ranl: 100,
      goodl: 100
    },
    level: {
      ran: 1,
      spe: 1,
      ranl: 1,
      goodl: 1
    }
  },
  total: {
    hourWords: 0,
    hourShort: 0,
    hourAve: 0,
    hourLong: 0,
    hourJumbo: 0,
    hourRan: 0,
    letters: 0,
    lettersThrown: 0,
    money: 0,
    published: 0,
    purchased: 0,
    selfLetters: 0,
    selfWords: 0,
    started: Date.now(),
    time: 0,
    words: 0, //words earned over whole game
    swords: 0,
    awords: 0,
    lwords: 0,
    jwords: 0
  },
  wordsPW: 1
}
var lifetime = {
  prestiges: 0,
  achieves: {
    fullBox: new newAchieve.Other("Your Box is Bursting","You know that letters are useless when they're not words, right?","Fill your Letter Box to capacity","Can now purchase Lever"),
    abcs: new newAchieve.Other("Now you know your ABCs", "Next time won't you sing with me?", "Have at least one of each letter in your letter box", "Can now purchase Shelving Shelf"),
    letters: [
      new newAchieve.Milestone ("letters1", "Can now purchase Huge Boot"),
      new newAchieve.Milestone ("Working Mouse", "desc", "reward",),
      new newAchieve.Milestone ("letters3", "desc", "reward"),
      new newAchieve.Milestone ("letters4", "desc", "reward"),
      new newAchieve.Milestone ("letters5", "desc", "reward"),
      new newAchieve.Milestone ("letters6", "desc", "reward"),
      new newAchieve.Milestone ("letters7", "desc", "reward"),
      new newAchieve.Milestone ("letters8", "desc", "reward"),
      new newAchieve.Milestone ("letters9", "desc", "reward")
    ],
    money: [
      new newAchieve.Milestone ("First Dollar", "Don't get paint on it.", "reward"),
      new newAchieve.Milestone ("money2", "desc", "reward"),
      new newAchieve.Milestone ("money3", "desc", "reward"),
      new newAchieve.Milestone ("name", "desc", "reward"),
      new newAchieve.Milestone ("name", "desc", "reward"),
      new newAchieve.Milestone ("name", "desc", "reward"),
      new newAchieve.Milestone ("name", "desc", "reward"),
      new newAchieve.Milestone ("name", "desc", "reward"),
      new newAchieve.Milestone ("name", "desc", "reward"),
      new newAchieve.Milestone ("name", "desc", "reward")
    ],
    words: [
      new newAchieve.Milestone ("Baby Shoes", " words", "Awww", "Has made six words", ""),
      new newAchieve.Milestone ("A Haiku and a Half", " words", "Such Typing. Wow. Much Word.", "Made 25 words", "Unlocks Words of the Hour."),
      new newAchieve.Milestone ("The Very Hungry Caterpillar"," words", "", "Made 200 words", ""),
      new newAchieve.Milestone ("A High School Englsh Essay", " words", "It's almost impressive!", "Made 1000 words", ""),
      new newAchieve.Milestone ("The Veldt", " words", "", "Made 5000 words", ""),
      new newAchieve.Milestone ("Charlie and the Chocolate Factory", " words", "", "Made 30,000 words", ""),
      new newAchieve.Milestone ("Great Expectations", " words", "", "Made 160,000 words", ""),
      new newAchieve.Milestone ("Harry Potter", " words", "", "Made 1,000,000 words", ""),
      new newAchieve.Milestone ("totalWords9", " words", "desc", "Made 5,000,000 words", ""),
      new newAchieve.Milestone ("title", " words", "desc", "Made 25,000,000 words", ""),
      new newAchieve.Milestone ("title", " words", "desc", "Made 125,000,000 words", ""),
      new newAchieve.Milestone ("title", " words", "desc", "Made 625,000,000 words", ""),
      new newAchieve.Milestone ("title", " words", "desc", "Made 2.5 billion words", "")
    ],
    uniqueWords: [
      new newAchieve.Milestone ("made 10 uniques", " words in your vocabulary", "desc", "reward"),
      new newAchieve.Milestone ("Vocabulary of a two-year-old", " words in your vocabulary", "Your readers are very impressed with the different combinations of phrases you make with such limited words.", "Can now purchase Obedient Beaver"),
      new newAchieve.Milestone ("Green Eggs and Ham", " words in your vocabulary", "desc", "reward"),
      new newAchieve.Milestone ("Cat in the Hat", " words in your vocabulary", "desc", "reward"),
      new newAchieve.Milestone ("uniques5", " words in your vocabulary", "desc", "reward"),
      new newAchieve.Milestone ("uniques6", " words in your vocabulary", "desc", "reward"),
      new newAchieve.Milestone ("uniques7", " words in your vocabulary", "desc", "reward"),
      new newAchieve.Milestone ("uniques8", " words in your vocabulary", "desc", "reward")
    ],
  },
  total: {
    hourWords: 0,
    hourShort: 0,
    hourAve: 0,
    hourLong: 0,
    hourJumbo: 0,
    hourRan: 0,
    letters: 0,
    lettersThrown: 0,
    money: 0,
    selfLetters: 0,
    selfWords: 0,
    started: Date.now(),
    words: 0, //words earned over whole game
    swords: 0,
    awords: 0,
    lwords: 0,
    jwords: 0
  }
}

const totalWords = function adding() {return thisRun.swords + thisRun.awords + thisRun.lwords + thisRun.jwords}

var poemCost = function () {return Math.floor(5 * Math.pow(1 + thisRun.published.poem.amount/100, thisRun.published.poem.level))}
var childCost = function () {return Math.floor(50 * Math.pow(1 + thisRun.published.child.amount/150, thisRun.published.child.level))}
var storyCost= function () {return Math.floor(2000 * Math.pow(1 + thisRun.published.story.amount/100, thisRun.published.story.level))}
var journCost = function () {return Math.floor(10000 * Math.pow(1 + thisRun.published.journ.amount/150, thisRun.published.journ.level))}
var novelCost = function () {return Math.floor(80000 * Math.pow(1 + thisRun.published.novel.amount/100, thisRun.published.novel.level))}
var textCost = function () {return Math.floor(200000 * Math.pow(1 + thisRun.published.text.amount/150, thisRun.published.text.level))}
var seriesCost = function () {return Math.floor(1400000 * Math.pow(1 + thisRun.published.series.amount/100, thisRun.published.series.level))}
var encyCost = function () {return Math.floor(6000000 * Math.pow(1 + thisRun.published.ency.amount/150, thisRun.published.ency.level))}

function save() {
  thisRun.lastTick = Date.now()
  localStorage.setItem("thisRun", JSON.stringify(thisRun))
  localStorage.setItem("lifetime", JSON.stringify(lifetime))
}
function clearSave() {
  localStorage.removeItem("lifetime")
  localStorage.removeItem("thisRun")
}
function load() {
  var loadThisRun = JSON.parse(localStorage.getItem("thisRun"))
  var loadLifetime = JSON.parse(localStorage.getItem("lifetime"))
  function checkDataAndUpdate() {
    if (loadThisRun !== undefined) {thisRun = loadThisRun}
    if (loadLifetime !== undefined) {lifetime = loadLifetime}
  }
  checkDataAndUpdate()
  let wasOffFor = Date.now() - thisRun.lastTick
  thisRun.lastTick = Date.now()
  displayAll()
}




//============misc========================================================================
function RNG(min, max) {
  return Math.floor(Math.random() * (max-min) + min);
}

function show(id) {
  document.getElementById(id).className = "visible"
}
function hide(id) {
  document.getElementById(id).className = "invisible"
}

function makeNote(text) {
  var li = document.createElement("li");
  var inputValue = text;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  var list = document.getElementById("notes");
  list.insertBefore(li, list.childNodes[0]);
  if (list.childNodes.length > 15) {
    for (let i = 16; i < list.childNodes.length; i++) {
      list.removeChild(list.childNodes[i])
    }
  }
}


function fuckingArrays(amount) {
  thisRun.swords += 7e10
  thisRun.awords += 7e9
  thisRun.lwords += 7e8
  thisRun.jwords += 7e7
  dispCurrent()
}

function fuckingArrays2() {
  thisRun.money+=10000
  dispCurrent()
}
function add101Uniques() {
  uniqueWords.push(valid2)
}
function returnPurchased() {
  newWordsOfHour()
}

//nav bars
function toggle(id) {
  if (document.getElementById(id).className == "invisible") {
    document.getElementById(id).className = "visible"
  }
  else {
    document.getElementById(id).className = "invisible"
  }
}
function showPublish() {
  document.getElementById("publish").className = "flex";
  hide("purchase")
  hide("equipment")

}
function showPurchase() {
  document.getElementById("publish").className = "invisible";
  document.getElementById("purchase").className = "flexColumn rightFlex";
  document.getElementById("equipment").className = "invisible"
}
function showEquipment() {
  hide("publish")
  hide("purchase")
  document.getElementById("equipment").className = "visible"
}
function showCurrent() {
  document.getElementById("current").className = "visible";
  document.getElementById("stats").className = "invisible";
  document.getElementById("options").className = "invisible";

}
function showStats() {
  document.getElementById("current").className = "invisible";
  document.getElementById("stats").className = "visible";
  document.getElementById("options").className = "invisible";

}
function showOptions() {
  document.getElementById("current").className = "invisible";
  document.getElementById("stats").className = "invisible";
  document.getElementById("options").className = "visible";
}

function focusInput() {
  document.getElementById("newWord").focus()
}

//displays
function dispCurrent() {
  //money
  document.getElementById("moneyCount").innerText     = "You currently have $"+ thisRun.money.toFixed(2) + "."
  //publish
  document.getElementById("poemCount").innerText      = thisRun.published.poem.amount
  document.getElementById("childrenCount").innerText  = thisRun.published.child.amount
  document.getElementById("storyCount").innerText     = thisRun.published.story.amount
  document.getElementById("journalCount").innerText   = thisRun.published.journ.amount
  document.getElementById("novelCount").innerText     = thisRun.published.novel.amount
  document.getElementById("textbookCount").innerText  = thisRun.published.text.amount
  document.getElementById("seriesCount").innerText    = thisRun.published.series.amount
  document.getElementById("encyCount").innerText      = thisRun.published.ency.amount
  for (var work in thisRun.published) {
    if (thisRun.published.hasOwnProperty(work)){
      document.getElementById(thisRun.published[work].listID).innerText = thisRun.published[work].titles.join(`
        `)
      let id = work + "Earnings"
      let thing = thisRun.published[work]
      document.getElementById(id).innerText = thing.baseRate*thing.amount*thing.level
    }
  }
  document.getElementById("totalWordCount").innerText = "You currently have " + totalWords() + " words.";
  document.getElementById("wordCount").innerHTML =
  "These include: <ul> <li>" + thisRun.swords + " short words.</li> <li> " +
  thisRun.awords + " average-length words.</li> <li> " +
  thisRun.lwords + " long words.</li> <li>" +
  thisRun.jwords + " jumbo words.</li> </ul>"
  //Purchased
}
function dispStats() {
  //stats
  document.getElementById("statsLet").innerText     = thisRun.total.letters
  document.getElementById("statsSelfL").innerText   = thisRun.total.selfLetters
  document.getElementById("statsLetT").innerText    = thisRun.total.lettersThrown

  document.getElementById("statsWor").innerText   = thisRun.total.words
  document.getElementById("statsSho").innerText   = thisRun.total.swords
  document.getElementById("statsAve").innerText   = thisRun.total.awords
  document.getElementById("statsLon").innerText   = thisRun.total.lwords
  document.getElementById("statsJum").innerText   = thisRun.total.jwords

  document.getElementById("statsPub").innerText     = thisRun.total.published
  document.getElementById("statsPur").innerText     = thisRun.total.purchased
  document.getElementById("statsMon").innerText     = thisRun.total.money.toFixed(2)

  document.getElementById("statsShoHR").innerText   = thisRun.total.hourShort
  document.getElementById("statsAveHR").innerText   = thisRun.total.hourAve
  document.getElementById("statsLonHR").innerText   = thisRun.total.hourLong
  document.getElementById("statsJumHR").innerText   = thisRun.total.hourJumbo
  document.getElementById("statsRanHR").innerText   = thisRun.total.hourRan
  //achieves
    //letters
  function dispAchieves() {
    function achieveType(type, listID) {
      for (let i = 0; i < lifetime.achieves[type].length; i++) {
        if (lifetime.achieves[type][i].unlocked) {
          document.getElementById(listID).innerText = ""
          hide ("noAchieves")
          let achNode = document.createElement("li")
          let achName = document.createTextNode(lifetime.achieves[type][i].name);
          achNode.appendChild(achName)
          document.getElementById(listID).appendChild(achNode)
          let div = document.createElement("div")
          div.setAttribute("class", "description")
          let t2 = document.createTextNode("hey look, you got this achievement, congrats.") //add descriptions?
          let u2 = div.appendChild(t2)
          document.getElementById(listID).appendChild(div)
        }
      }
    }
    function achieveOther(achievement, listID) {
      if (lifetime.achieves[achievement].unlocked) {
        hide ("noAchieves")
        document.getElementById(listID).innerText = lifetime.achieves[achievement].name
        let div = document.createElement("div")
        div.setAttribute("class", "description")
        let t2 = document.createTextNode("hey look, you got this achievement, congrats.") //add descriptions?
        let u2 = div.appendChild(t2)
        document.getElementById(listID).insertAdjacentElement('afterend', div)
      }
    }
    achieveType("letters", "letterAchieves")
    achieveType("money", "moneyAchieves")
    achieveType("words", "wordsAchieves")
    achieveType("uniqueWords", "uniquesAchieves")
    achieveOther("fullBox", "fullBoxAch")
    achieveOther("abcs", "ABCsAch")

  }
  dispAchieves()
  //uniques
  let uniquesAlpha = thisRun.uniqueWords.sort()
  document.getElementById("uniques").innerText = uniquesAlpha.join(", ")
  document.getElementById("uniqueAmount").innerText = thisRun.uniqueWords.length
  document.getElementById("statsWor").innerText     = thisRun.total.words
  document.getElementById("statsSelfW").innerText   = thisRun.total.selfWords
}
//function dispOptions() {}
function dispPublish() {
  function displayPublishButtons (button, workBefore) {
    if (thisRun.published[workBefore].amount > 0) {
      show(button)
    }
  }
  if (totalWords() > 0) {
    show ("poem")
  }
  if (thisRun.published.ency.amount > 2) {
    show("encyUp")
  }
  displayPublishButtons ("children", "poem")
  displayPublishButtons ("story", "child")
  displayPublishButtons ("journal", "story")
  displayPublishButtons ("novel", "journ")
  displayPublishButtons ("textbook", "novel")
  displayPublishButtons ("series", "text")
  displayPublishButtons ("ency", "series")
  document.getElementById("poemCost").innerText     = "Cost: Any " + poemCost() + " words"
  document.getElementById("childrenCost").innerText = "Cost: " + childCost() + " short words"
  document.getElementById("storyCost").innerText    = "Cost: Any " + storyCost() + " words"
  document.getElementById("journalCost").innerText  = "Cost: " + journCost() + " average words"
  document.getElementById("novelCost").innerText    = "Cost: Any " + novelCost() + " words"
  document.getElementById("textbookCost").innerText = "Cost: " + textCost() + " long words"
  document.getElementById("seriesCost").innerText   = "Cost: Any " + seriesCost() + " words"
  document.getElementById("encyCost").innerText     = "Cost: " + encyCost() + " jumbo words"
  document.getElementById("poemDescr").innerText = thisRun.published.poem.description
  document.getElementById("childDescr").innerText = thisRun.published.child.description
  document.getElementById("storyDescr").innerText = thisRun.published.story.description
  document.getElementById("journalDescr").innerText = thisRun.published.journ.description
  document.getElementById("novelDescr").innerText = thisRun.published.novel.description
  document.getElementById("textDescr").innerText = thisRun.published.text.description
  document.getElementById("seriesDescr").innerText = thisRun.published.series.description
  document.getElementById("encyDescr").innerText = thisRun.published.ency.description
  function dispUpCost(item, upID, nextUpCostId) {
    if(item.amount/10 >= item.level) {
      show(upID)
      let upCost = item.upBaseCost * Math.pow(5, item.level)
      document.getElementById(nextUpCostId).innerText = upCost
    }
  }
  dispUpCost(thisRun.published.poem, "poemUp", "poemUpC")
  dispUpCost(thisRun.published.child, "childUp", "childUpC")
  dispUpCost(thisRun.published.story, "storyUp", "storyUpC")
  dispUpCost(thisRun.published.journ, "journUp", "journUpC")
  dispUpCost(thisRun.published.novel, "novelUp", "novelUpC")
  dispUpCost(thisRun.published.text, "textUp", "textUpC")
  dispUpCost(thisRun.published.series, "seriesUp", "seriesUpC")
  dispUpCost(thisRun.published.ency, "encyUp", "encyUpC")
}
function dispEquip() {
  for (let key in thisRun.purchased) {
    if (thisRun.purchased.hasOwnProperty(key)) {
      if (key !== "empty" && key !== "shuffle" && key !== "sort" && key !== "shift" && key !== "goodLetter") {
        if (thisRun.purchased[key].bought === true){
          show (thisRun.purchased[key].equipId)
        }
      }
    }
  }
  if (thisRun.purchased.ranS.bought) {
    show ("autoRanTick")
  }
  if (thisRun.purchased.speS.bought) {
    show ("autoSpeTick")
  }
  document.getElementById("clicksPCName").innerText = thisRun.purchased.clicksPC.name
  document.getElementById("wordsPWName").innerText = thisRun.purchased.wordsPW.name
  document.getElementById("clicksPCRUp").innerText = thisRun.purchased.clicksPC.upBaseCost * Math.pow(5, thisRun.purchased.clicksPC.level)
  document.getElementById("wordsPWRUp").innerText = thisRun.purchased.wordsPW.upBaseCost * Math.pow(5, thisRun.purchased.wordsPW.level)
  document.getElementById("ranLetterRUp").innerText = thisRun.purchased.ranLetter.upBaseCost * Math.pow(5, thisRun.purchased.ranLetter.level)
  document.getElementById("ranLetterTdown").innerText = thisRun.tick.baseCost.ranl * Math.pow(50, thisRun.tick.level.ranl)
  document.getElementById("boxUp").innerText = thisRun.purchased.expandBox.upBaseCost * Math.pow(2.5, thisRun.purchased.expandBox.level)
  document.getElementById("ranRUp").innerText = thisRun.purchased.ran.upBaseCost * Math.pow(15, thisRun.purchased.ran.level)
  document.getElementById("ransRUp").innerText = thisRun.purchased.ranS.upBaseCost * Math.pow(15, thisRun.purchased.ranS.level)
  document.getElementById("ranaRUp").innerText = thisRun.purchased.ranA.upBaseCost * Math.pow(15, thisRun.purchased.ranA.level)
  document.getElementById("ranlRUp").innerText = thisRun.purchased.ranL.upBaseCost * Math.pow(15, thisRun.purchased.ranL.level)
  document.getElementById("ranjRUp").innerText = thisRun.purchased.ranJ.upBaseCost * Math.pow(15, thisRun.purchased.ranJ.level)
  document.getElementById("ranTdown").innerText = thisRun.tick.baseCost.ran * Math.pow(50, thisRun.tick.level.ran)
  document.getElementById("speSRUp").innerText = thisRun.purchased.speS.upBaseCost * Math.pow(25, thisRun.purchased.speS.level)
  document.getElementById("speARUp").innerText = thisRun.purchased.speA.upBaseCost * Math.pow(25, thisRun.purchased.speA.level)
  document.getElementById("speLRUp").innerText = thisRun.purchased.speL.upBaseCost * Math.pow(25, thisRun.purchased.speL.level)
  document.getElementById("speJRUp").innerText = thisRun.purchased.speJ.upBaseCost * Math.pow(25, thisRun.purchased.speJ.level)
  document.getElementById("speTdown").innerText = thisRun.tick.baseCost.spe * Math.pow(60, thisRun.tick.level.spe)
  if (thisRun.purchased.speS.word !== undefined) {
    document.getElementById("currentspeS").innerText = thisRun.purchased.speS.word
  }
  if (thisRun.purchased.speA.word !== undefined) {
    document.getElementById("currentspeA").innerText = thisRun.purchased.speA.word
  }
  if (thisRun.purchased.speL.word !== undefined) {
    document.getElementById("currentspeL").innerText = thisRun.purchased.speL.word
  }
  if (thisRun.purchased.speJ.word !== undefined) {
    document.getElementById("currentspeJ").innerText = thisRun.purchased.speJ.word
  }
}
function dispPurchase() {
  for (let x in thisRun.purchased) {
    if (thisRun.purchased.hasOwnProperty(x)) {
      if (thisRun.purchased[x].bought) {
        hide(thisRun.purchased[x].buttonId)
      }
    }
  }
}
function dispCentre() {
  var doesHaveAlphabet = false
  var lettersString = thisRun.letters.join(' ')
  document.getElementById("lettersBox").innerHTML = lettersString
  function findAlphabet () {
    if (lifetime.achieves.abcs.tracker == undefined) {
      lifetime.achieves.abcs.tracker = ["A", "B", "C", 'D', 'E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
    }
    for (let i = 0; i < lifetime.achieves.abcs.tracker.length; i++) {
      if (thisRun.letters.indexOf(lifetime.achieves.abcs.tracker[i]) > 0) {
        lifetime.achieves.abcs.tracker.splice (i, 1)
      }
    }
    if (lifetime.achieves.abcs.tracker.length == 0) {
      if(!lifetime.achieves.abcs.unlocked) {
        lifetime.achieves.abcs.unlocked = true
        makeNote("ACHIEVEMENT UNLOCKED: You made all of the letters in the alphabet!")
        show("shelf")
      }
    }
  }
  if (!lifetime.achieves.abcs.unlocked){
    findAlphabet()
  }
  document.getElementById("lettersCount").innerHTML = thisRun.letters.length
  document.getElementById('letterBoxSize').textContent = Math.floor(thisRun.letterBoxLimit) + "."
  if (thisRun.total.words > 25) {
    show("wordOfHr")
  }
}
function displayAll() {
  dispCurrent()
  dispStats()
  //dispOptions()
  dispPublish()
  dispEquip()
  dispPurchase()
  dispCentre()
}

//letters ====================================================================

function getLetter(amount) {
  if (thisRun.letters.length >= thisRun.letterBoxLimit) {
    makeNote ("Your Letter Box is full! Make more room by making words or expanding your Letter Box.")
    if (!lifetime.achieves.fullBox.unlocked) {
      lifetime.achieves.fullBox.unlocked = true
      makeNote("ACHIEVEMENT UNLOCKED! You filled up the letterbox! Lever is now unlocked, buy it in the 'Purchase' tab")
      show('lever')
    }
  }
  else if (thisRun.letterBoxLimit-thisRun.letters.length > amount) {
    for (let i = 0; i < amount; i++) {
      let x = RNG(thisRun.alphaArray.length-1,0);
      thisRun.letters.push(thisRun.alphaArray[x])
    }
    thisRun.total.letters += amount
    thisRun.total.selfLetters += amount
    lifetime.total.letters += amount
    lifetime.total.selfLetters += amount
  }
  else {
    let spaceLeftInBox = thisRun.letterBoxLimit-thisRun.letters.length
    for (let i = 0; i < spaceLeftInBox; i++) {
      let x = RNG(thisRun.alphaArray.length-1,0);
      thisRun.letters.push(thisRun.alphaArray[x])
    }
    thisRun.total.letters += spaceLeftInBox
    thisRun.total.selfLetters += spaceLeftInBox
    lifetime.total.letters += spaceLeftInBox
    lifetime.total.selfLetters += spaceLeftInBox
    makeNote ("Your Letter Box is full! Make more room by making words or expanding your Letter Box.")
    if (!lifetime.achieves.fullBox.unlocked) {
      lifetime.achieves.fullBox.unlocked = true
      makeNote("ACHIEVEMENT UNLOCKED! You filled up the letterbox! Lever is now unlocked, buy it in the 'Purchase' tab")
      show('lever')
    }
  }
  dispCentre()
  dispStats()
}
function getRandomLetter(amount) {
  if (thisRun.purchased.goodLetter.bought) {
    var alphaPool = thisRun.alphaArray
  }
  else {
    var alphaPool = ["A", "B", "C", 'D', 'E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
  }
  if (thisRun.letters.length >= thisRun.letterBoxLimit) {
    if (!lifetime.achieves.fullBox.unlocked) {
      lifetime.achieves.fullBox.unlocked = true
      makeNote("ACHIEVEMENT UNLOCKED! You filled up the letterbox! Lever is now unlocked, buy it in the 'Purchase' tab")
      show('lever')
    }
  }
  else if (thisRun.letterBoxLimit-thisRun.letters.length > amount){
    for (let i = 0; i < amount; i++){
      let x = RNG(0, alphaPool.length-1);
      thisRun.letters.push(alphaPool[x])
    }
    thisRun.total.letters += amount
    lifetime.total.letters += amount
  }
  else {
    let spaceLeftInBox = thisRun.letterBoxLimit-thisRun.letters.length
    for (let i = 0; i < spaceLeftInBox; i++) {
      let x = RNG(0, alphaPool.length-1);
      thisRun.letters.push(alphaPool[x])
    }
    thisRun.total.letters += spaceLeftInBox
    lifetime.total.letters += spaceLeftInBox
    if (!lifetime.achieves.fullBox.unlocked) {
      lifetime.achieves.fullBox.unlocked = true
      show('lever')
    }
  }
  dispCentre()
  dispStats()
}

function emptyBox() {
  if (thisRun.letters.length === 0) {
    makeNote("Your letter box is already empty.")
  }
  else if (thisRun.purchased.empty.bought) {
    thisRun.total.lettersThrown += thisRun.letters.length
    lifetime.total.lettersThrown += thisRun.letters.length
    document.getElementById("statsLetT").innerText = thisRun.total.lettersThrown
    thisRun.letters = [];
    makeNote("You used a lever to empty your letter box.")
    dispCurrent()
    dispCentre()
  }
  else {
    makeNote("You try tip the box, but it's too heavy to budge. Perhaps you should buy something to amplify your power.")
  }
}
function shuffleLetters() {
  if (thisRun.letters.length < 2) {
    makeNote("There's no point shuffling if you have less than two letters.")
  }
  else if (thisRun.purchased.shuffle.bought) {
    let lastLetterIndex = thisRun.letters.length-1;
    while (lastLetterIndex > 1) {
      let lastLetter = thisRun.letters[lastLetterIndex];
      let randomLetterIndex = RNG(0, lastLetterIndex);
      thisRun.letters[lastLetterIndex] = thisRun.letters[randomLetterIndex];
      thisRun.letters[randomLetterIndex] = lastLetter;
      lastLetterIndex--
    }
    makeNote("You put on a giant boot and kick the box several times, shuffling the letters inside.")
    dispCurrent()
    dispCentre()
  }
  else {
    makeNote("You try to shake up the box, but it doesn't budge. Perhaps you should buy something to amplify your power.")
  }
}
function sortLetters() {
  if (thisRun.letters.length === 0) {
    makeNote("You have no letters to sort")
  }
  else if (thisRun.purchased.sort.bought) {
    thisRun.letters.sort()
    makeNote("The Shelving Shelf kindly sorted your letter box for you.")
    dispCurrent()
    dispCentre()
  }
  else {
    makeNote("You consider starting to sort your box but it got overwhelming too fast and you give up.")
  }
}

//words =========================================================================

var sWordHour = ""
var sProgress = []
var aWordHour = ""
var aProgress = []
var lWordHour = ""
var lProgress = []
var jWordHour = ""
var jProgress = []
var rWordHour = ""
var rProgress = []

function toggleWordOfHour() {
  switch(document.getElementById('hrLength').innerText) {
    case "Short":
    document.getElementById('hrLength').innerText = "Average";
    document.getElementById('sChosenWord').className = "invisible hrlyWord";
    document.getElementById('aChosenWord').className = "visible hrlyWord";
    document.getElementById('lChosenWord').className = "invisible hrlyWord";
    document.getElementById('jChosenWord').className = "invisible hrlyWord";
    document.getElementById('rChosenWord').className = "invisible hrlyWord"; break;
    case "Average":
    document.getElementById('hrLength').innerText = "Long";
    document.getElementById('sChosenWord').className = "invisible hrlyWord";
    document.getElementById('aChosenWord').className = "invisible hrlyWord";
    document.getElementById('lChosenWord').className = "visible hrlyWord";
    document.getElementById('jChosenWord').className = "invisible hrlyWord";
    document.getElementById('rChosenWord').className = "invisible hrlyWord"; break;
    case "Long":
    document.getElementById('hrLength').innerText = "Jumbo";
    document.getElementById('sChosenWord').className = "invisible hrlyWord";
    document.getElementById('aChosenWord').className = "invisible hrlyWord";
    document.getElementById('lChosenWord').className = "invisible hrlyWord";
    document.getElementById('jChosenWord').className = "visible hrlyWord";
    document.getElementById('rChosenWord').className = "invisible hrlyWord"; break;
    case "Jumbo":
    document.getElementById('hrLength').innerText = "Random";
    document.getElementById('sChosenWord').className = "invisible hrlyWord";
    document.getElementById('aChosenWord').className = "invisible hrlyWord";
    document.getElementById('lChosenWord').className = "invisible hrlyWord";
    document.getElementById('jChosenWord').className = "invisible hrlyWord";
    document.getElementById('rChosenWord').className = "visible hrlyWord"; break;
    case "Random":
    document.getElementById('hrLength').innerText = "Short";
    document.getElementById('sChosenWord').className = "visible hrlyWord";
    document.getElementById('aChosenWord').className = "invisible hrlyWord";
    document.getElementById('lChosenWord').className = "invisible hrlyWord";
    document.getElementById('jChosenWord').className = "invisible hrlyWord";
    document.getElementById('rChosenWord').className = "invisible hrlyWord"; break;
  }
}
function newWordsOfHour () {
  var validSho = valid[0].concat(valid[2],valid[1])
  var validAve = valid[5].concat(valid[6],valid[3],valid[4])
  var validLon = valid[9].concat(valid[7],valid[10],valid[8])
  var validJum = valid[13].concat(valid[14],valid[11],valid[12])
  sWordHour = validSho[RNG(0,validSho.length-1)]
  aWordHour = validAve[RNG(0,validAve.length-1)]
  lWordHour = validLon[RNG(0,validLon.length-1)]
  jWordHour = validJum[RNG(0,validJum.length-1)]
  switch (RNG(1,4)) {
    case 1: rWordHour = validSho[RNG(0,validSho.length-1)]; break;
    case 2: rWordHour = validAve[RNG(0,validAve.length-1)]; break;
    case 3: rWordHour = validLon[RNG(0,validLon.length-1)]; break;
    case 4: rWordHour = validjum[RNG(0,validJum.length-1)]; break;
    default: console.log("something went wrong")
  }
  sProgress = []
  aProgress = []
  lProgress = []
  jProgress = []
  rProgress = []
  //DISPLAYING
  let swhLetters = sWordHour.split("")
  let awhLetters = aWordHour.split("")
  let lwhLetters = lWordHour.split("")
  let jwhLetters = jWordHour.split("")
  let rwhLetters = rWordHour.split("")
  for (let i = 0; i < swhLetters.length; i++) {
    sProgress.push("_")
  }
  for (let i = 0; i < awhLetters.length; i++) {
    aProgress.push("_")
  }
  for (let i = 0; i < lwhLetters.length; i++) {
    lProgress.push("_")
  }
  for (let i = 0; i < jwhLetters.length; i++) {
    jProgress.push("_")
  }
  for (let i = 0; i < rwhLetters.length; i++) {
    rProgress.push("_")
  }
  document.getElementById("sChosenWord").innerHTML = sProgress.join(" ")
  document.getElementById("aChosenWord").innerHTML = aProgress.join(" ")
  document.getElementById("lChosenWord").innerHTML = lProgress.join(" ")
  document.getElementById("jChosenWord").innerHTML = jProgress.join(" ")
  document.getElementById("rChosenWord").innerHTML = rProgress.join(" ")
  show('wordOfHr')
}

var newWord = document.getElementById("newWord");
newWord.addEventListener("keyup", function(event) {
  event.preventDefault();
  if (event.keyCode === 32) {
    document.getElementById('checkWord').click();
  }
  if (event.keyCode === 13) {
    document.getElementById('checkWord').click();
  }
  if (thisRun.purchased.shift.bought) {
    if (event.keyCode === 16) {
      getLetter(thisRun.lettersPC * thisRun.purchased.clicksPC.multiplier)
    }
  }
});

function checkWord() {
  let word = document.getElementById("newWord").value;
  let trimword = word.trim();
  let upword = trimword.toUpperCase();
  let upwordBold = upword;
  let upwordLetters = upword.split("");
  let plus  = /\+/;
  let minus = /\-/;
  let asterisk = /\*/;
  let hashtag = /^\#/;
  let notLetter = /\W/;
  let wordLength = upword.length;
  let amount = thisRun.purchased.wordsPW.multiplier * thisRun.wordsPW
  function isUnique (w) {
    var notUnique = thisRun.uniqueWords.includes(w,0);
    if (!notUnique) {
      thisRun.uniqueWords[thisRun.uniqueWords.length] = upword
      var isUniqueMessages1 =[
        //remember spaces after
        "Great work! ",
        "Congrats! ",
        "Seems a bit short, but ",
        "About time you learned a new word;  ",
        "Ayy ",
        "",
      ]
      var isUniqueMessages2 = [
        //remember spaces at beginning. Currently not used.
        " has been added to your vocabulary",
      ]
      makeNote(isUniqueMessages1[RNG(0,isUniqueMessages1.length)] + upwordBold + " has been added to your vocabulary.")
    };
    //cleanup
  };
  var lettersBoxPass = true
  function lettersBoxCheck() {
    var tempArr = thisRun.letters.slice()
    for (let i = 0; i < upword.length; i++) {
      if (tempArr.indexOf(upword[i]) > -1) {
        tempArr.splice(tempArr.indexOf(upword[i]),1)
        lettersBoxPass = true
      }
      else {
        lettersBoxPass = false
        break;
      }
    }
  }
  lettersBoxCheck();
  function letterings() {
      for (let p=0; p < upword.length; p++) {
        thisRun.letters.splice(thisRun.letters.indexOf(upwordLetters[p]),1)
        dispCurrent();
        dispCentre()
        let splace = sWordHour.indexOf(upwordLetters[p])
        if (splace > -1) {
          sProgress.splice(splace, 1, upwordLetters[p],)
        }
        let aplace = aWordHour.indexOf(upwordLetters[p])
        if (aplace > -1) {
          aProgress[aplace] = upwordLetters[p]
        }
        let lplace = lWordHour.indexOf(upwordLetters[p])
        if (lplace > -1) {
          lProgress[lplace] = upwordLetters[p]
        }
        let jplace = jWordHour.indexOf(upwordLetters[p])
        if (jplace > -1) {
          jProgress[jplace] = upwordLetters[p]
        }
        let rplace = rWordHour.indexOf(upwordLetters[p])
        if (rplace > -1) {
          rProgress[rplace] = upwordLetters[p]
        }
        document.getElementById("sChosenWord").innerHTML = sProgress.join(" ")
        document.getElementById("aChosenWord").innerHTML = aProgress.join(" ")
        document.getElementById("lChosenWord").innerHTML = lProgress.join(" ")
        document.getElementById("jChosenWord").innerHTML = jProgress.join(" ")
        document.getElementById("rChosenWord").innerHTML = rProgress.join(" ")
    }
  }
  if (upword.search(plus) + upword.search('=') > -2) {
    makeNote("Sorry, but your algebraic expression, " + upwordBold + ", " + "is not a word.")
  }
  else if (upword === "") {
    makeNote ("You need to type something.")
  }
  else if (upword === "ENTER WORD HERE") {
    makeNote ("You need to type something.")
  }
  else if (upword.search('[0-9]') > -1) {
    makeNote ("Your attempt at spelling " + upwordBold + "has a number in it. Real words do not.")
  }
  else if (upword.search("S'$") > -1) {
    makeNote ("Your so-called word " + upwordBold + " is rejected. Take your plural possessive nouns and leave.")
  }
  else if (upword.search("N'T$") + upword.search("'LL$") + upword.search("'D$") + upword.search("'VE$") + upword.search("'RE$") + upword.search("I'M") > -6) {
    makeNote ("No contractions like " + upwordBold + ". Your readers demand words in their entirety.")
  }
  else if (upword.search("'") > -1) {
    makeNote ("Your so-called word, " + upwordBold + "has been rejected because no one likes apostrophes.")
  }
  else if (upword.search(minus) > -1) {
    makeNote("No hyphens. Readers like words that can stand on their own, not codependant ones like " + upwordBold + ".")
  }
  else if (upword.search(" ") > -1) {
    makeNote ("One word at a time, please. You typed" + upwordBold + ".")
  }
  else if (upword.search(hashtag) > -1) {
    makeNote ("Sorry, this game does not support tags. Go take your " + upwordBold + "Instatwit or something.")
  }
  else if (upword.search(notLetter) > -1) {
    makeNote ("Really? " + upwordBold + "? Are you trying to genebaseRate a password?")
  }
  else if (lettersBoxPass === false) {
    makeNote("You don't have the letters to make " + upword + ". Get more letters by pressing the big button!")
  }
  else {
    function zeroOr(number) {
      return (isNaN(number) ? 0 : number)
    }
    if (upword == sWordHour) {
      var tenPercent = Math.floor(0.07 * thisRun.swords)
      let sbonus = amount + zeroOr(tenPercent)
      thisRun.swords += sbonus
      makeNote("Hoaray! You made the Short Word of the Hour and got " + sbonus + " short words!")
      thisRun.total.words += sbonus
      thisRun.total.selfWords++
      thisRun.total.hourWords++
      thisRun.total.hourShort++
      thisRun.total.wordsShort += sbonus
      letterings()
    }
    else if (upword == aWordHour) {
      var tenPercent = Math.floor(0.09 * thisRun.awords)
      let abonus = amount + zeroOr(tenPercent)
      thisRun.awords += abonus
      makeNote("Great work! You made the Average Word of the Hour and got " + abonus + " average words!")
      thisRun.total.words += abonus
      thisRun.total.selfWords++
      thisRun.total.hourWords++
      thisRun.total.hourAve++
      thisRun.total.wordsAve += abonus
      letterings()
    }
    else if (upword == lWordHour) {
      var tenPercent = Math.floor(0.11 * thisRun.lwords)
      let lbonus = amount + zeroOr(tenPercent)
      thisRun.lwords+=lbonus
      makeNote("Clapclapclap! You made the Long Word of the Hour and got " + lbonus + " long words!")
      thisRun.total.words += lbonus
      thisRun.total.selfWords++
      thisRun.total.hourWords++
      thisRun.total.hourLong++
      thisRun.total.wordsLong += lbonus
      letterings()
    }
    else if (upword == jWordHour) {
      var tenPercent = Math.floor(0.13 * thisRun.jwords)
      let jbonus = amount + zeroOr(tenPercent)
      thisRun.jwords+=jbonus
      makeNote("Amazing job! You made the Jumbo Word of the Hour and got " + jbonus + " jumbo words!")
      thisRun.total.words += jbonus
      thisRun.total.selfWords++
      thisRun.total.hourWords++
      thisRun.total.hourJumbo++
      thisRun.total.wordsJumbo += jbonus
      letterings()
    }
    else if (upword == rWordHour) {
      var tenPercent = 0.04 * totalWords
      let rbonus = Math.floor((4 + zeroOr(tenPercent))/4)
      thisRun.swords += rbonus
      thisRun.awords += rbonus
      thisRun.lwords += rbonus
      thisRun.jwords += rbonus
      makeNote("Lucky guess! You made the Random Word of the Hour and got " + rbonus + " random words!")
      thisRun.total.words += rbonus*4
      thisRun.total.selfWords ++
      thisRun.total.hourWords ++
      thisRun.total.hourRan ++
      lifetime.total.words += rbonus*4
      lifetime.total.selfWords ++
      lifetime.total.hourWords ++
      lifetime.total.hourRan ++
      letterings()
    }
    else {
      let isWord = valid[upword.length-1].includes(upword,0)
      if (!isWord) {
        makeNote ("Oh no, " + upwordBold + " is not a real word.")
      }
      else if (upword.length < 4) {
        isUnique (upword);
        makeNote("You got a short word!")
        thisRun.swords += amount
        thisRun.total.words += amount
        thisRun.total.selfWords += amount
        thisRun.total.wordsShort += amount
        lifetime.total.selfWords += amount;
        lifetime.total.wordsShort +=amount;
        letterings()
      }
      else if (upword.length < 8) {
        isUnique (upword);
        makeNote("You got an average word!")
        thisRun.awords += amount
        thisRun.total.words += amount
        thisRun.total.selfWords += amount
        thisRun.total.wordsAve += amount
        lifetime.total.selfWords += amount;
        lifetime.total.wordsAve +=amount;
        letterings()
      }
      else if (upword.length < 12){
        isUnique (upword);
        makeNote("You got a long word!")
        thisRun.lwords += amount
        thisRun.total.words += amount
        thisRun.total.selfWords += amount
        thisRun.total.wordsLong += amount
        lifetime.total.selfWords += amount;
        lifetime.total.wordsLong +=amount;
        letterings()
      }
      else if (upword.length < 16) {
        isUnique (upword);
        makeNote("You got a jumbo word!")
        thisRun.jwords += amount
        thisRun.total.words += amount
        thisRun.total.selfWords += amount
        thisRun.total.jwords += amount
        lifetime.total.selfWords += amount;
        lifetime.total.jwords +=amount;
        lettering()
      }
      else if (upword == "supercalifragilisticexpialidocious") {
        isUnique (upword);
        makeNote ("Wow! You found the only word over fifteen letters we accept!")
        thisRun.jwords += amount
        thisRun.total.words += amount
        thisRun.total.selfWords += amount
        thisRun.total.jwords += amount
        lifetime.total.selfWords += amount;
        lifetime.total.jwords += amount;
        lettering()
      }
      else if (upword.length > 15) {
        makeNote ("Sorry, this word" + upword + " is too long. This game only accepts words 15 letters or shorter.")
      }
      else {
        makeNote("IDK why your word, " + upword + " didn't work.")
      }
    }
  }
  document.getElementById('newWord').value = "";
  dispCurrent();
  dispPublish()
  dispStats()
};



//publish====================================================================================================
function newPublish(ulId,titleString) {
  let li = document.createElement("li")
  let t = document.createTextNode(titleString);
  let u = li.appendChild(t)
  document.getElementById(ulId).appendChild(li)
}

function randomTitle(preString,minWords,maxWords,ulId,array) {
  var titleDraft = []
  let xx = RNG(minWords,maxWords)
  for (let i=0; i<xx; i++) {
    titleDraft.push(thisRun.uniqueWords[RNG(0,thisRun.uniqueWords.length)])
  }
  var title = preString + titleDraft.join(" ").toLowerCase()
  array.push(title);
}

function publish (thing, workCost, workTitle, workList) {
  let thingCost = workCost()
  if (totalWords() >= thingCost) {
    makeNote("You used " + thingCost + " words to publish a" + thing.name)
    thing.amount++;
    thisRun.total.published++
    lifetime.total.published++
    document.getElementById("statsPub").innerText     = thisRun.total.published
    if (thisRun.swords <= thingCost) {
      thingCost -= thisRun.swords
      thisRun.swords = 0
      if (thisRun.awords <= thingCost) {
        thingCost -= thisRun.awords
        thisRun.awords = 0
        if (thisRun.lwords <= thingCost) {
          thingCost -= thisRun.lwords
          thisRun.lwords = 0
          thisRun.jwords -= thingCost
        }
        else {thisRun.lwords -= thingCost}
      }
      else {thisRun.awords -= thingCost}
    }
    else {thisRun.swords -= thingCost}
    var title
    randomTitle("",1,5,workList, thing.titles)
    hide ("noPub")
    show(workList)
  }
  else {
    makeNote ("You don't have enough words to write a" + thing.name + ". Make more by typing in the Words box.")
  }
  dispCurrent()
  dispPublish()
}
function publishChild() {
  let thingCost = childCost()
  if (thisRun.swords >= thingCost) {
    makeNote("You used " + thingCost + " words to publish a" + thisRun.published.child.name)
    thisRun.published.child.amount++;
    thisRun.total.published++
    lifetime.total.published++
    document.getElementById("statsPub").innerText     = thisRun.total.published
    thisRun.swords -= thingCost
    var title
    randomTitle("",1,6,childList, thisRun.published.child.titles)
    hide ("noPub")
    show('childList')
  }
  else {
    makeNote ("You don't have enough words to write a" + thisRun.published.child.name + ". Make more by typing in the Words box.")
  }
  dispCurrent()
  dispPublish()
}
function publishJourn() {
  let thingCost = journCost()
  if ((totalWords() - thisRun.swords) >= thingCost) {
    makeNote("You used " + thingCost + " words to publish a" + thisRun.published.journ.name)
    thisRun.published.journ.amount++;
    thisRun.total.published++
    lifetime.total.published++
    document.getElementById("statsPub").innerText     = thisRun.total.published
    if (thisRun.awords <= thingCost) {
      thingCost -= thisRun.awords
      thisRun.awords = 0
      if (thisRun.lwords <= thingCost) {
        thingCost -= thisRun.lwords
        thisRun.lwords = 0
        thisRun.jwords -= thingCost
      }
      else {thisRun.lwords -= thingCost}
    }
    else {thisRun.awords -= thingCost}
    var title
    randomTitle("The Effects of ",1,5,journList, thisRun.published.journ.titles)
    hide ("noPub")
    show('journList')
  }
  else {
    makeNote ("You don't have enough words to write a" + thisRun.published.journ.name + ". Make more by typing in the Words box.")
  }
  dispCurrent()
  dispPublish()
}
function publishText() {
  let thingCost = textCost()
  if ((thisRun.lwords + thisRun.jwords) >= thingCost) {
    makeNote("You used " + thingCost + " words to publish a" + thisRun.published.text.name)
    thisRun.published.text.amount++;
    thisRun.total.published++
    lifetime.total.published++
    document.getElementById("statsPub").innerText     = thisRun.published.total.published
    if (thisRun.lwords <= thingCost) {
      thingCost -= thisRun.lwords
      thisRun.lwords = 0
      thisRun.jwords -= thingCost
    }
    else {thisRun.lwords -= thingCost}
    var title;
    var titlepres = ["Studying ", "The Principles of ", "Handbook of ", "Understanding ", "Introduction to ", "Fourth Edition of ", "Eleventh Edition of ", "Essential ", "A Global Approach to ", "Advanced ", "Essentials of ", "Fundamental ", "Politics and " ]
    randomTitle(titlepres[RNG(0,titlepres.length-1)],1,3, textList, thisRun.published.text.titles)
    hide ("noPub")
    show('textList')
  }
  else {
    makeNote ("You don't have enough words to write a" + thisRun.published.text.name + ". Make more by typing in the Words box.")
  }
  dispCurrent()
  dispPublish()
}
function publishEncy() {
  let thingCost = encyCost()
  if (thisRun.jwords >= thingCost) {
    makeNote("You used " + thingCost + " words to publish a" + thisRun.published.ency.name)
    thisRun.published.ency.amount++;
    thisRun.total.published++
    lifetime.total.published++
    document.getElementById("statsPub").innerText     = thisRun.total.published
    thisRun.jwords -= thingCost
    var title
    randomTitle("Encyclopaedia of ",1,2,encyList, thisRun.published.ency.titles)
    hide ("noPub")
    show('encyList')
  }
  else {
    makeNote ("You don't have enough words to write a" + thisRun.published.ency.name + ". Make more by typing in the Words box.")
  }
  dispCurrent()
  dispPublish()
}

function levelUp(item) {
  let upCost = item.upBaseCost * Math.pow(5, item.level)
  if (thisRun.money >= upCost) {
    thisRun.money -= upCost;
    item.level++
    makeNote("Sweet as, more people want to buy your " + item.name)
    dispPublish()
    dispCurrent()
  }
  else {
    makeNote("You're too poor to make your " + item.name + " worth more.")
  }
}

//Purchase=============================================================================================

function buy(item, cost) {
  if (thisRun.money >= cost){
    makeNote("You bought a " + item.name + " for $" + cost.toFixed(2) + "!")
    item.bought = true
    thisRun.money -= cost;
    hide(item.buttonId)
  }
  else {
    makeNote("You don't have enough money to buy a " + item.name + " :(")
  }
  dispCurrent()
  dispPurchase()
  dispEquip()
}

 var equip = {
  toggle: function(thingInQuotes) {
    if (thisRun.purchased[thingInQuotes].on) {
      thisRun.purchased[thingInQuotes].on = false
      makeNote("Your " + thisRun.purchased[thingInQuotes].name + "is now off")
    }
    else {
      thisRun.purchased[thingInQuotes].on = true
            makeNote("Your " + thisRun.purchased[thingInQuotes].name + "is now on")
    }
    dispEquip()
  },
  level: function(thingInQuotes) { //trigger when increase rate
    if (thisRun.money >= thisRun.purchased[thingInQuotes].upBaseCost) {
      thisRun.purchased[thingInQuotes].level++
      makeNote("Hey, your " + thingInQuotes + " got upgraded.  Nice!")
    }
    else {
      makeNote("You need more money to upgrade your " + thingInQuotes + " mate.")
    }
    dispEquip()
  },
  downTick: function(thingInQuotes) {
    if (thisRun.money >= thisRun.tick.baseCost[thingInQuotes]) {
      if(thisRun.tick.rate[thingInQuotes] >= 200) {
        thisRun.tick.rate[thingInQuotes]-= 100
        thisRun.tick.level[thingInQuotes]++
      }
      else {
        makeNote("ticks maxed")
      }
    }
    else {
      makeNote("You don't have enough money to decrease ticks.")
    }
    dispEquip()
  },
  speCheck: function (minLetters, maxLetters, varSpe, inputID, noteID) {
    let w = document.getElementById(inputID).value
    let x = w.trim();
    let attempt = x.toUpperCase();
    if (attempt == "") {
      document.getElementById(noteID).innerText = "You didn't type anything."
    }
    else if (attempt.length < minLetters) {
      document.getElementById(noteID).innerText = "Too Short!"
    }
    else if (attempt.length > maxLetters) {
      document.getElementById(noteID).innerText = "Too long"
    }
    else {
      if (thisRun.uniqueWords.indexOf(attempt) > -1) {
        thisRun.purchased[varSpe]["word"] = attempt
        dispEquip()
        document.getElementById(noteID).innerText = "Woop! now looking for " + thisRun.purchased[varSpe].word
      }
      else {
        document.getElementById(noteID).innerText = "That word ain't in your dictionary man."
      }
    }
  },
  expandBox: function () {
    if (thisRun.money >= thisRun.purchased.expandBox.upBaseCost * thisRun.purchased.expandBox.level) {
      thisRun.letterBoxLimit += 25
      thisRun.purchased.expandBox.level++
      makeNote("You enhanced your box! You can now collect 25 more letters")
      dispCentre()
      dispEquip()
    }
    else {
      makeNote("You don't have enough money to enhance your box!")
    }
  }
}

//====================Ticks==============================================
var tickCounter = 0

window.setInterval(function masterTick () {
  function moneyTick(){
    if (tickCounter % 20 === 0) {
      let earn = 0
      for (let key in thisRun.published) {
        if (thisRun.published.hasOwnProperty(key)) {
          earn += thisRun.published[key].baseRate * (thisRun.published[key].level) * thisRun.published[key].amount
        }
      }
      thisRun.money += earn
      thisRun.total.money += earn
      dispCurrent()
      dispStats()
    }
  }
  function ranlTick() {
    if (tickCounter % (thisRun.tick.rate.ranl/50) === 0 &&
    thisRun.purchased.ranLetter.bought && thisRun.purchased.ranLetter.on) {
      getRandomLetter(thisRun.purchased.ranLetter.rate * Math.pow(2,thisRun.purchased.ranLetter.level))
    }
  }
  function ranTick() {
    let noValidRanWord = ""
    if (tickCounter % (thisRun.tick.rate.ran/50) === 0) {
      function getRandomWord (item, min, max) {
        var lengthArr = thisRun.uniqueWords.filter(x => x.length >= min && x.length <= max);
        if (lengthArr.length > 0) {
          let x = RNG(0,lengthArr.length)
          function lettersBoxCheck() {
            var tempRanArr = thisRun.letters.slice()
            for (let i = 0; i < lengthArr[x].length; i++) {
              if (tempRanArr.indexOf(lengthArr[x][i]) < 0) {
                return false;
              }
              else {
                tempRanArr.splice(tempRanArr.indexOf(lengthArr[x][i]),1)
              }
            }
            return true;
          }
          if (lettersBoxCheck()) {
            let l = lengthArr[x].length
            if (l < 4) {
              thisRun.swords += thisRun.purchased[item].rate * thisRun.purchased[item].level
              thisRun.total.swords += thisRun.purchased[item].rate * thisRun.purchased[item].level
              lifetime.total.swords += thisRun.purchased[item].rate * thisRun.purchased[item].level
            }
            else if (l < 8) {
              thisRun.awords += thisRun.purchased[item].rate * thisRun.purchased[item].level
              thisRun.total.awords += thisRun.purchased[item].rate * thisRun.purchased[item].level
              lifetime.total.awords += thisRun.purchased[item].rate * thisRun.purchased[item].level
            }
            else if (l < 12) {
              thisRun.lwords += thisRun.purchased[item].rate * thisRun.purchased[item].level
              thisRun.total.lwords += thisRun.purchased[item].rate * thisRun.purchased[item].level
              lifetime.total.lwords += thisRun.purchased[item].rate * thisRun.purchased[item].level
            }
            else {
              thisRun.jwords += thisRun.purchased[item].rate * thisRun.purchased[item].level
              thisRun.total.jwords += thisRun.purchased[item].rate * thisRun.purchased[item].level
              lifetime.total.jwords += thisRun.purchased[item].rate * thisRun.purchased[item].level
            }
            var awordLetters = lengthArr[x].split("")
            for (let p=0; p < awordLetters.length; p++) {
              thisRun.letters.splice(thisRun.letters.indexOf(awordLetters[p]),1)
            }
            makeNote ("Your " + item + " made the word '" + lengthArr[x] + "'.")
            thisRun.total.words += thisRun.purchased[item].rate * thisRun.purchased[item].level
            lifetime.total.words += thisRun.purchased[item].rate * thisRun.purchased[item].level
          }
          else {
            makeNote ("Your " + item + " tried to make '" + lengthArr[x] + "' but you didn't have the letters :( ")
          }
        }
        else {
          noValidRanWord += " ," + item
        }
      }
      if (thisRun.purchased.ranJ.bought && thisRun.purchased.ranJ.on){
        getRandomWord(thisRun.purchased.ranJ.name, 12, 15)
      }
      if (thisRun.purchased.ranL.bought && thisRun.purchased.ranL.on){
        getRandomWord(thisRun.purchased.ranL.name, 8, 11)
      }
      if (thisRun.purchased.ranA.bought && thisRun.purchased.ranA.on){
        getRandomWord(thisRun.purchased.ranA.name, 4, 7)
      }
      if (thisRun.purchased.ranS.bought && thisRun.purchased.ranS.on){
        getRandomWord(thisRun.purchased.ranS.name, 1, 3)
      }
      if (thisRun.purchased.ran.bought && thisRun.purchased.ran.on){
        getRandomWord(thisRun.purchased.ran.name, 1, 15)
      }
      if (noValidRanWord.length > 1) {
        makeNote("You don't have any words in your vocabulary that " + noValidRanWord  + " can find.")
      }
      dispCurrent();
      dispCentre()
    }
  }
  function speTick() {
    if (tickCounter % (thisRun.tick.rate.spe/50) === 0) {
        function boxCheck(wordVar) {
          let boxCheckerArr = thisRun.letters.slice()
          for (let i = 0; i < wordVar; i++) {
            if (boxCheckerArr.indexOf(wordVar[i]) > -1) {
              boxCheckerArr.splice(boxCheckerArr.indexOf(wordVar[i]),1)
              }
            else {
              return false
            }
            return true
          }
        }
        if (thisRun.purchased.speJ.bought && thisRun.purchased.speJ.on && thisRun.purchased.speJ.word !== undefined){
          if (boxCheck(thisRun.purchased.speJ.word)) {
            for (let j = 0; j < thisRun.purchased.speJ.word; j++) {
              thisRun.letters.splice(boxCheckerArr.indexOf(thisRun.purchased.speJ.word[j]),1)
              makeNote ("SpeJ successful! Found " + thisRun.purchased.speJ.word)
            }
            thisRun.jwords += thisRun.purchased.speJ.rate * thisRun.purchased.speJ.level
            lifetime.jwords += thisRun.purchased.speJ.rate * thisRun.purchased.speJ.level
            dispCurrent();
            dispCentre()
          }
        }
        if (thisRun.purchased.speL.bought && thisRun.purchased.speL.on && thisRun.purchased.speL.word !== undefined){
          if (boxCheck(thisRun.purchased.speL.word)) {
            for (let j = 0; j < thisRun.purchased.speL.word; j++) {
              thisRun.letters.splice(boxCheckerArr.indexOf(thisRun.purchased.speL.word[j]),1)
              makeNote ("SpeL successful! Found " + thisRun.purchased.speL.word)
            }
            thisRun.lwords += thisRun.purchased.speL.rate * thisRun.purchased.speJ.level
            lifetime.lwords += thisRun.purchased.speL.rate * thisRun.purchased.speJ.level
            dispCurrent();
            dispCentre()
          }
        }
        if (thisRun.purchased.speA.bought && thisRun.purchased.speA.on && thisRun.purchased.speA.word !== undefined){
          if (boxCheck(thisRun.purchased.speA.word)) {
            for (let j = 0; j < thisRun.purchased.speA.word; j++) {
              thisRun.letters.splice(boxCheckerArr.indexOf(thisRun.purchased.speA.word[j]),1)
              makeNote ("SpeA successful! Found " + thisRun.purchased.speA.word)
            }
            thisRun.awords += thisRun.purchased.speA.rate * thisRun.purchased.speJ.level
            lifetime.awords += thisRun.purchased.speA.rate * thisRun.purchased.speJ.level
            dispCurrent();
            dispCentre()
          }
        }
        if (thisRun.purchased.speS.bought && thisRun.purchased.speS.on && thisRun.purchased.speS.word !== undefined){
        if (boxCheck(thisRun.purchased.speS.word)) {
          for (let j = 0; j < thisRun.purchased.speS.word; j++) {
            thisRun.letters.splice(boxCheckerArr.indexOf(thisRun.purchased.speS.word[j]),1)
            makeNote ("SpeS successful! Found " + thisRun.purchased.speS.word)
          }
          thisRun.swords += thisRun.purchased.speS.rate * thisRun.purchased.speJ.level
          lifetime.swords += thisRun.purchased.speS.rate * thisRun.purchased.speJ.level
          dispCurrent();
          dispCentre()
        }
      }
    }
  }
  function achieveCheck() {
    let milestonesWords = [25, 500, 2500, 15000, 1e5, 1e6, 1e7, 1e8, 1e9, 1e10, 1e11, 1e12, 1e13]
    for (let i = 0; i < milestonesWords.length; i++) {
      if (lifetime.achieves.words[i].unlocked) {
        if (thisRun.total.words >= milestonesWords[i]) {
          lifetime.achieves.words[i].unlocked = true
          makeNote("ACHIEVEMENT UNLOCKED: You've made " + milestonesLetters[i] + "words!")
        }
        break;
      }
    }
    let milestonesLetters = [100, 500, 2500, 15000, 1e6, 1e7, 1e8, 1e9, 1e10]
    for (let i = 0; i < milestonesLetters.length; i++) {
      if (!lifetime.achieves.letters[i].unlocked) {
        if (thisRun.total.letters >= milestonesLetters[i]) {
          lifetime.achieves.letters[i].unlocked = true
          makeNote("ACHIEVEMENT UNLOCKED: You've made " + milestonesWords[i] + "letters!")
          dispStats()
        }
        break;
      }
    }
    let milestonesUniques = [10, 50, 200, 500, 1000, 1500, 2500, 5000]
    for (let j = 0; j < milestonesUniques.length; j++) {
      if (!lifetime.achieves.uniqueWords[j].unlocked) {
        if (thisRun.uniqueWords.length >= milestonesUniques[j]) {
          lifetime.achieves.uniqueWords[j].unlocked = true
          makeNote("ACHIEVEMENT UNLOCKED: You've made " + milestonesUniques[j] + " Unique words!")
        }
        break;
      }
    }
    let milestonesMoney = [1, 100, 1e5, 1e7, 1e9, 1e11, 1e13, 1e15, 1e16, 1e18]
    for (let k = 0; k < milestonesMoney.length; k++) {
      if (!lifetime.achieves.money[k].unlocked) {
        if (thisRun.total.money >= milestonesMoney[k]) {
          lifetime.achieves.money[k].unlocked = true
          makeNote("ACHIEVEMENT UNLOCKED: You've made " + milestonesMoney[k] + " dollars!")
        }
        break;
      }
    }
    dispStats()
  }
  function allOfTheAbove(){
    moneyTick()
    ranlTick()
    ranTick()
    speTick()
    achieveCheck()
    tickCounter++
    if (tickCounter > 12000) {
      tickCounter = 0
      save()
    }
  }
  allOfTheAbove()
}, 50)
