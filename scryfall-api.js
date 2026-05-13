$(document).ready(function () {
    $(".card-link").hover(function () {
        var cardName = $(this).data("card-name");
        var apiUrl = "https://api.scryfall.com/cards/named?fuzzy=" + encodeURIComponent(cardName);

        $.get(apiUrl, function (data) {
            var cardTooltip = $(".card-tooltip");
            var imageUrl = "";

            // Check if it's a single-faced card
            if (data.image_uris) {
                imageUrl = data.image_uris.normal;
            } 
            // If not, it's likely a double-faced/modal card; get the front face
            else if (data.card_faces && data.card_faces[0].image_uris) {
                imageUrl = data.card_faces[0].image_uris.normal;
            }

            if (imageUrl) {
                cardTooltip.find(".card-tooltip-content").html(
                    "<img src='" + imageUrl + "' alt='" + cardName + "' style='max-width: 300px; display: block;'>"
                );
                cardTooltip.show();
            }
        });
    }, function () {
        // Keep visible on mouse out
    });

    $(document).on("click", function (e) {
        if (!$(e.target).closest(".card-link").length) {
            $(".card-tooltip").hide();
        }
    });
});
