$(".share").hover(
  () => {
    // over
    $(".share-btns")
      .css({
        display: "flex",
      })
      .hover(
        () => {
          // over
          $(".share-btns").css({
            display: "flex",
          });
        },
        () => {
          // out
          $(".share-btns").css({
            display: "none",
          });
        }
      );
  },
  () => {
    // out
    $(".share-btns").css({
      display: "none",
    });
  }
);
