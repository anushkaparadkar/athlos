var i = 0;
var backgroundImages = [
  "https://images.unsplash.com/photo-1502481686408-d428268c24ff?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=dbd7cc7ed7090d2cefe1d922b7d19377&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1523875194681-bedd468c58bf?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=89f7259907bafccabeab5ed40f4c9e84&auto=format&fit=crop&w=500&q=60"
];
setInterval(function() {
  $(document.body).css("background-image", "url(" + backgroundImages[i] + ")");
  i++;
  if (i >= backgroundImages.length) {
    i = 0;
  }
}, 2000);

var text = "Athlos";
