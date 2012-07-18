youtube-length
================

Bookmarklet to add video duration to YouTube links on the current page.

I was taking a break from work and skimming reddit, and thinking it would be nice to know how long a video is going to be before clicking on the link.  Google provides that data in an XML meta file that this script fetches and traverses.

The length of the video is appended to the link text in parentheses in H:MM:SS, format, or a shorter format if appropriate.

If the XML data isn't available, you're out of luck.  This will be the case if the linked video is private, the user account has been terminated, etc.