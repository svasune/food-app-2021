var NumberOfWords = 30

var words = new BuildArray(NumberOfWords)

// Use the following variables to 
// define your random words:
words[1] = "picos"
words[2] = "lazanijos"
words[3] = "moliūgų sriubos"
words[4] = "salotų"
words[5] = "nebūti išalkęs"
words[6] = "kinų maisto"
words[7] = "daržovių troškinio"
words[8] = "makarų"
words[9] = "košės"
words[10] = "žuvies"
words[11] = "mėsos"
words[12] = "guacamolės su Nachos"
words[13] = "brokolių"
words[14] = "keptų ryžių"
words[15] = "šaltibarsčių"
words[16] = "blynų"
words[17] = "čili sriubos"
words[18] = "dešrainio"
words[19] = "spagečių"
words[20] = "falafelių"
words[21] = "močiutės kotletų"
words[22] = "humuso"
words[23] = "sušių"
words[24] = "kiaušinienės"
words[25] = "dešrelių"
words[26] = "daržovių"
words[27] = "kugelio"
words[28] = "burokėlių salotų"
words[29] = "keptų ryžių"
words[30] = "cepelinų"
words[31] = "nenorėti"
words[32] = "sūrelio"

function BuildArray(size){
this.length = size
for (var i = 1; i <= size; i++){
this[i] = null}
return this
}

function PickRandomWord(frm) {
// Generate a random number between 1 and NumberOfWords
var rnd = Math.ceil(Math.random() * NumberOfWords)

// Display the word inside the text box
frm.WordBox.value = words[rnd]
}