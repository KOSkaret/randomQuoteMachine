$(document).ready(function(){

  var jsonTable = [
    {quote:"Success is a lousy teacher. It seduces smart people into thinking they can't lose",author:"Bill Gates"},
    {quote:"Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma - which is living with the results of other people's thinking. Don't let the noise of others' opinions drown out your own inner voice. And most important, have the courage to follow your heart and intuition.","author":"Steve Jobs"},
    {quote:"All of the biggest technological inventions created by man - the airplane, the automobile, the computer - says little about his intelligence, but speaks volumes about his laziness.",author:"Mark Kennedy"},
    {quote:"Perfect is the enemy of good.","author":"Voltaire"},
    {quote:"...there are people who try to look as if they are doing a good and thorough job, and then there are the people who actually damn well do it, for its own sake. ",author:" John D. MacDonald, Free Fall in Crimson "},
    {quote:"Build a good name. Keep your name clean. Don’t make compromises, don’t worry about making a bunch of money or being successful — be concerned with doing good work and make the right choices and protect your work. And if you build a good name, eventually, that name will be its own currency.",author:"William S. Burroughs"},
    {quote:"How easy it is to slip. How hard it is to climb. How wise it is to keep in stepAnd never fall behind",author:"Richelle E. Goodrich, Slaying Dragons "}
  ];

  var tempInt = getRandomNmb(jsonTable.length);
  $('#quote').html(jsonTable[tempInt].quote);
  $('#author').html('-' + jsonTable[tempInt].author);


    $('#btn').on('click', function() {
      var int = getRandomNmb(jsonTable.length);
      console.log(int);
      $('#quote').html(jsonTable[int].quote);
      $('#author').html('-' + jsonTable[int].author);
    });

    function getRandomNmb(int){
      return Math.floor(Math.random() * int);
    }
});
