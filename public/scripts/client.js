/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


$(document).ready(function () {

  const renderTweets = function (tweets) {
    // loops through tweets
    // calls createTweetElement for each tweet
    // takes return value and appends it to the tweets container
    for (let tweet of tweets) {
      const element = createTweetElement(tweet);
      $('#tweets').prepend(element);

    }
  };

  const createTweetElement = function (tweet) {

    let $tweet = /* Your code for creating the tweet element */
      // ...
      `<article class="tweet" id="tweetz">
          <header>
            <div class="image-username">
              <img src="${tweet.user.avatars}">
              <span class="author">${tweet.user.name}</span>
            </div>
            <span class="handle">${tweet.user.handle}</span>
          </header>
          <p class="tweet-status">${tweet.content.text}</p>
          <footer>
            <span>${tweet.created_at}</span>
            <div class="feed-icons">
              <i class="fas fa-flag"></i>
              <i class="fas fa-retweet"></i>
              <i class="fas fa-heart"></i>
            </div>
          </footer>
        </article>`;

    return $tweet;
  };

  const loadTweets = function () {

    $.ajax('/tweets', {
      dataType: 'json',
      method: 'GET',
    })
      .then((result) => {
        renderTweets(result);
      });
  };

  loadTweets();



  $("form").on("submit", function (event) {
    event.preventDefault();

    const data = $('#tweet-text').val();

    if (data.trim() === '') {
      alert("This field cannot be empty");
    } else if (data.length > 140) {
      alert("Character limit is 140");
    } else {

      let url = '/tweets/';

      $.ajax({
        url: url,
        method: "POST",
        data: $(this).serialize()
      })
        .then(loadTweets());
    }
  });
});