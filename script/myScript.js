// external js: flickity.pkgd.js

var $gallery = $('.gallery').flickity({
    // options...
});

var $galleryNav = $('.gallery-nav');
var $galleryNavCells = $galleryNav.find('.gallery-cell');

$galleryNav.on('click', '.gallery-cell', function (event) {
    var index = $(event.currentTarget).index();
    $gallery.flickity('select', index);
});

var flkty = $gallery.data('flickity');
var navTop = $galleryNav.position().top;
var navCellHeight = $galleryNavCells.height();
var navHeight = $galleryNav.height();

$gallery.on('cellSelect', function () {
    // set selected nav cell
    $galleryNav.find('.is-nav-selected').removeClass('is-nav-selected');
    var $selected = $galleryNavCells.eq(flkty.selectedIndex).addClass('is-nav-selected');
    // scroll nav
    var scrollY = $selected.position().top +
        $galleryNav.scrollTop() - ( navHeight + navCellHeight ) / 2;
    $galleryNav.animate({
        scrollTop: scrollY
    });
});
