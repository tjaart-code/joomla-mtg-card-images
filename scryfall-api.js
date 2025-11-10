$(document).ready(function () {
    $(".card-link").hover(function () {
        // Mouse enter - fetch and show tooltip
        var cardName = $(this).data("card-name");
        var apiUrl = "https://api.scryfall.com/cards/named?fuzzy=" + encodeURIComponent(cardName);

        $.get(apiUrl, function (data) {
            var cardTooltip = $(".card-tooltip");
            cardTooltip.find(".card-tooltip-content").html(
                "<img src='" + data.image_uris.normal + "' alt='" + cardName + "'>"
            );
            cardTooltip.show();
        });
    }, 
    function () {
        // Mouse leave - do NOT hide the tooltip (remove this if you want it to persist)
        // Optional: Add a delay before hiding (if needed)
        // setTimeout(() => $(".card-tooltip").hide(), 1000);
    });
});
