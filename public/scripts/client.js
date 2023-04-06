/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

//hide the validation span at the begining
$("#validation").hide();

// Creates tweet posts 
const createTweetElement = function (tweet) {
  const tweetDate = new Date(tweet.created_at)
  const relativeTime = timeago.format(tweetDate);

  //escape insecure text
  const escape = function (str) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };

  /*
  generates an article element with appropriate values and returns back html element as string.
  */
  const $tweetData = `<article class="tweets">
  <header class="tweet-header"> 
  <span><img class="avatar" src=${tweet.user.avatars} alt="Avater" width="30" height="30"/> ${tweet.user.name}</span>
  <span class="tweet-username"> ${tweet.user.handle}</span>
  </header>
  <p>${escape(tweet.content.text)}</p>
  <footer class="tweet-footer">
        <hr />
        <span class="footer-span">
          <span>${relativeTime}</span>
          <span class="icons">
            <a href=""><i class="fa-solid fa-flag"></i></a>
            <a href=""><i class="fa-solid fa-retweet"></i></a>
            <a href=""><i class="fa-solid fa-heart"></i></a>
          </span>
        </span>
      </footer>
 </article>`;

  return $tweetData;
}

//definition for tweets rendering function
const renderTweets = function (tweets) {
  $('#tweets-container').empty();

  // loops through tweets
  let $tweetData = "";
  for (let tweet of tweets) {
    // calls createTweetElement for each tweet 
    $tweetData += createTweetElement(tweet);

  }

  // takes return value and appends it to the tweets container
  $('#tweets-container').append($tweetData);

}
// jquery fetch function to load and render data from server. Calls /tweet from the server with GET method 
const loadTweets = function () {
  fetch("http://localhost:8080/tweets")
    .then(response => response.json())
    .then(data => {

      renderTweets(data.reverse());
    })
    .catch(error => console.log(error));
}
loadTweets();


$(document).ready(function () {
  //event handler for the form submission
  $("#new-tweet").submit(function (event) {

    event.preventDefault();
    const tweet = $("#tweet-text").val();
    /*
    checks if tweet is empty. 
    push the error text into the span with appropriate message.
    makes the validator elements handler visible.
    */
    if (tweet === "") {
      $("#error").text("Tweet Required! Please Write somthing.");
      $("#validation").show()

      // checks if the tweet length is more than allowed
    } else if (tweet.length > 140) {
      $("#error").text("Tweets exceedes the limit ");
      $("#validation").show();
    } else {
      //if all good, submit the form data to the server.
      $("#validation").hide();
      $.ajax({
        type: 'POST',
        url: '/tweets',
        data: $(this).serialize(),
        success: function (data) {
          loadTweets();
        }
      });
    }

  });

});