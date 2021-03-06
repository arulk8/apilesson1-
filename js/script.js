
function loadData() {

    var $body = $('body');
    var $wikiElem = $('#wikipedia-links');
    var $nytHeaderElem = $('#nytimes-header');
    var $nytElem = $('#nytimes-articles');
    var $greeting = $('#greeting');

    // clear out old data before new request
    $wikiElem.text("");
    $nytElem.text("");
   var streets = $('#street').val();
   var cities =$('#city').val();
   var addr = streets+','+ cities;
   
   //$body.append('<p> '+ addr +' </p>');
    // load streetview

    // YOUR CODE GOES HERE!
    var googlemapurl = 'https://maps.googleapis.com/maps/api/streetview?size=600x300&location='+ addr +'&key=AIzaSyArpgp1MhKgPjXnjFCM4Fk6XoPycFsPSKc';
   $body.append('<img class="bgimg" src= "'+ googlemapurl +'">');
    return false;

var nyturl = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?q='+ cities +'&sort=newest&api-key=af6a39a346a54184bd8ba93317663eb0&fl=headline,snippet,web_url';

$.getJSON( nyturl, function( data ) {
  $nytHeaderElem.text('New York Times Article About' + cities);

  var articles =data.response.docs;
  for(var i= 0; i< articles.length; i++)
  {
    var article =articles[i];
   $nytElem.append('<li class="article">'+'<a href="'+ article.Web_url +'">'+article.headline.main+'</a>'+'<p>'+ article.snippet +'<p>'+'</li>');
  }
 

});
}
$('#form-container').submit(loadData);
