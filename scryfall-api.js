$(document).ready(function () {
    $(".card-link").hover(function () {
      var cardName = $(this).data("card-name");
      var apiUrl = "https://api.scryfall.com/cards/named?fuzzy=" + encodeURIComponent(cardName);

      $.get(apiUrl, function (data) {
        // Handle the API response and display card information in the tooltip
        var cardTooltip = $(".card-tooltip");
        cardTooltip.find(".card-tooltip-content").html(
          "<img src='" + data.image_uris.normal + "' alt='" + cardName + "'>"
        ); // Removed the paragraph with card text
        cardTooltip.show();
      });
    }, function () {
      // Hide the tooltip when the user moves the mouse away
      $(".card-tooltip").hide();
    });
});
