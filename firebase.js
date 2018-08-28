var i = 0;
var backgroundImages = [
  " https://images.unsplash.com/photo-1485395037613-e83d5c1f5290?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=303133965924236f90bd9dc78701e444&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1523875194681-bedd468c58bf?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=89f7259907bafccabeab5ed40f4c9e84&auto=format&fit=crop&w=500&q=60"
];
setInterval(function() {
  $(document.body).css("background-image", "url(" + backgroundImages[i] + ")");
  i++;
  if (i >= backgroundImages.length) {
    i = 0;
  }
}, 3000);
