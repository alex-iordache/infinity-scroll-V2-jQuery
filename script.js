let ready = true;

const getImages = function () {
  $.ajax({
    type: "GET",
    url: "https://api.unsplash.com/photos/random/",
    data: {
      client_id: "X1Ec7n9tv9nfhc_CXoMiJFpggrQQAaaiT2estWnl0Uw",
      count: 30,
    },
    success: function (response) {
      response.forEach((el) => {
        const $image = $(
          `<a href=${el.links.html} target="_blank"><img src=${el.urls.regular} alt=${el.alt_description}></a>`
        );

        $(".image-container").append($image);
        $(".loader").hide();
        ready = true;
      });
    },
  });
};

getImages();

$(window).on("scroll", function () {
  if (
    window.scrollY >= document.body.offsetHeight - 1000 - window.innerHeight &&
    ready
  ) {
    ready = false;
    getImages();
  }
});
