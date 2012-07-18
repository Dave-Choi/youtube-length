youtube-length
================

Bookmarklet to add video duration to YouTube links on the current page.

Visit [the project page](http://dave-choi.github.com/youtube-length/) for the bookmarklet link that you can drag to your bookmarks bar.  Just click, and any YouTube links on the current page will have the length of the video added to it.

While browsing reddit, I thought it would be nice to know how long a video is going to be before clicking on the link.  Google provides that data in an XML meta file that this script fetches and traverses.

The length of the video is appended to the link text in parentheses in H:MM:SS, format, or a shorter format if appropriate.

If the XML data isn't available, you're out of luck.  This will be the case if the linked video is private, the user account has been terminated, etc.