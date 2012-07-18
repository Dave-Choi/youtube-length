youtube-length
================

Bookmarklet to add video duration to YouTube links on the current page.

Drag the following link to your bookmarks bar, and click it to have the video lengths added to the link text.
<a href="javascript:var%20s%20=%20document.createElement('script');document.body.appendChild(s);s.src='http://dave-choi.github.com/youtube-length/javascripts/youtubeLength.min.js';void(0);">YouTube Length</a>

While browsing reddit, I thought it would be nice to know how long a video is going to be before clicking on the link.  Google provides that data in an XML meta file that this script fetches and traverses.

The length of the video is appended to the link text in parentheses in H:MM:SS, format, or a shorter format if appropriate.

If the XML data isn't available, you're out of luck.  This will be the case if the linked video is private, the user account has been terminated, etc.