// Borrowed with slide modification from https://www.quora.com/Yammer/How-can-I-mark-all-messages-as-read/answer/Nate-Haug-1

var goBack = function() {
   history.back();
   setTimeout(clickLink, 400);

}

var clickLink = function() {
var $element = jQuery("[class='yj-inbox-list-container yj-inbox-unread-list'] li:first a");
var $moreLink = jQuery('#moreButton button');
if ($element.length) {
   $element.click();
   setTimeout(goBack, 400);
}
else if ($moreLink.length) {
   $moreLink.click();
   setTimeout(clickLink, 1000);
}

}

clickLink();
