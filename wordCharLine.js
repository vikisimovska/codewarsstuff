// http://www.codewars.com/kata/5286a298f8fc1b7667000c1c/train/javascript

function DocumentParser(reader)
{
  this.reader = reader;
  this.reset();
}

DocumentParser.prototype.reset = function()
{
  this.wordCount = 0;
  this.charCount = 0;
  this.lineCount = 0;
};

DocumentParser.prototype.parse = function()
{
  // TODO: Code Here!
};
