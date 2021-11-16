import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import GiphyService from './js/giphy-service.js';

$('#search').click(function(){
  const searchResults = $('#input').val();
  $('#input').val("");
  let promise = GiphyService.getGif(searchResults);
  promise.then(function(response) {
    const body = JSON.parse(response);
    $('.showGifs').html(`<iframe src="${body.data[0].embed_url}" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>`);      
  }, function(error) {
    $('.showErrors').text(`There was an error processing your request: ${error}`);
  });
});

$('#trending').click(function(){
  let promise = GiphyService.getTrending();
  promise.then(function(response) {
    const body = JSON.parse(response);
    $('.trendingGifs').html(`<iframe src="${body.data[0].embed_url}" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>`);
  }, function(error) {
    $('.showErrors').text(`There was an error processing your request: ${error}`);
  });
});

$('#random').click(function(){
  let promise = GiphyService.getRandom();
  promise.then(function(response) {
    const body = JSON.parse(response);
    $('.randomGifs').html(`<iframe src="${body.data.embed_url}" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>`);
  }, function(error) {
    $('.showErrors').text(`There was an error processing your request: ${error}`);
  });
});