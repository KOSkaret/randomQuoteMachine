$(document).ready(function(){

  var jsonTable = [
    {quote:"Success is a lousy teacher. It seduces smart people into thinking they can't lose",author:"Bill Gates"},
    {quote:"Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma - which is living with the results of other people's thinking. Don't let the noise of others' opinions drown out your own inner voice. And most important, have the courage to follow your heart and intuition.","author":"Steve Jobs"},
    {quote:"All of the biggest technological inventions created by man - the airplane, the automobile, the computer - says little about his intelligence, but speaks volumes about his laziness.",author:"Mark Kennedy"},
    {quote:"Perfect is the enemy of good.","author":"Voltaire"},
    {quote:"...there are people who try to look as if they are doing a good and thorough job, and then there are the people who actually damn well do it, for its own sake. ",author:" John D. MacDonald, Free Fall in Crimson "},
    {quote:"Build a good name. Keep your name clean. Don’t make compromises, don’t worry about making a bunch of money or being successful — be concerned with doing good work and make the right choices and protect your work. And if you build a good name, eventually, that name will be its own currency.",author:"William S. Burroughs"},
    {quote:"How easy it is to slip. How hard it is to climb. How wise it is to keep in step. And never fall behind",author:"Richelle E. Goodrich, Slaying Dragons "}
  ];


  updateQuote(jsonTable);

    $('#btn').on('click', function() {
      updateQuote(jsonTable);
    });

    function tweetable(quote, author){
      if((139 - author.length) < quote.length ){
      return (quote.slice(0,(136 - author.length)) + "... " + author).replace(/\s/g,"%20");
    }
      else{
        return (quote + "%20" + author).replace(/\s/g,"%20");}
    }

    function updateQuote(table){
      var int = Math.floor(Math.random() *table.length);
      var author = '-' + table[int].author;
      var quote = table[int].quote;

      $('#quote').html(quote);
      $('#author').html(author);
      $('#twitter-share-button').html('<a href="https://twitter.com/intent/tweet?text=' + tweetable(quote,author) + '" target="_blank" ><div class="btn" id="twitter-share-button"><i class="fa fa-twitter" aria-hidden="true"></i></div></a>')
    }
});
