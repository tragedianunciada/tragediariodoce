var userID = '137059877@N03'
var nanoGalleryStyle = {
    thumbnailGutterWidth : 0,
    thumbnailGutterHeight : 0,
    thumbnailWidth: 'auto',
    thumbnailHeight: 350,
    thumbnailLabel: {
      displayDescription: true,
      descriptionMaxLength: 80,
      hideIcons: true,
    },
    breadcrumbAutoHideTopLevel: true,
    colorScheme: 'light'
}

FlickrGallery = function (userID) {
  this.userID = userID;
  this.APIKey = '2f0e634b471fdb47446abcb9c5afebdc';

  FlickrGallery.prototype.buildGallery = function (photoset, style) {
    var flickrAttrs = {
        kind:'flickr',
        userID: userID,
        photoset: photoset
    }

    return $.extend(flickrAttrs, style);
  }

  FlickrGallery.prototype.buildFlickrCall = function() {
    return 'https://api.flickr.com/services/rest/?method=flickr.photosets.getList&api_key=' + this.APIKey + '&user_id=' + this.userID + '&format=json&nojsoncallback=1';
  }

  FlickrGallery.prototype.findPhotoSets = function(cb) {

    $.get( this.buildFlickrCall(), function(data) {
        data.photosets.photoset.forEach(cb);
    }).fail(function() {
        
      })
  }

}

var flickrGallery = new FlickrGallery(userID)

jQuery(document).ready(function () {

  function takeHash() { return location.hash.slice(1); }

  function urlIsHashed() {
    return takeHash() && takeHash().indexOf("nanoGallery") == -1
  }

  function galleryByHash(hash) {
    $("#galeria").append("<div id=" + hash + "></div>");
    $('#' + hash).nanoGallery(flickrGallery.buildGallery(hash, nanoGalleryStyle));
  }

  flickrGallery.findPhotoSets(function( photoset, index ) {
      var anchor = '#' + photoset.id;
      $('.site-sub-nav section').append('<a href=' + anchor + '>' + photoset.title._content + '</a>')
      $(document).on('click', "a[href='" + anchor + "']", function () {
        $("#galeria div").remove();
        galleryByHash(photoset.id);
      });

      if (index === 0) {
        galleryByHash(photoset.id);
      }
  });

  if (urlIsHashed()) {
    galleryByHash(takeHash());
  }

});
