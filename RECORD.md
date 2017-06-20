record.md
Team Yellow

##Day 1, June 19th Progress:
Morning: We sat down to rite out our speck, our proposal and do a sketch of our proposed site.
Almost by instinct, we decided to work on Bookbag, our simple book reccomendation website.
We all made wireframes by hand and for the mobile website first, then desktop. Tinytort's design of the website is the best.

### Afternoon:
We sat down to look into the following API's
1. Amazon -- While Amazon could solve our problems quickly, nobody wanted to pay $30 a month for it. We're all too dang poor for that. It also seems to use XML more. Ew.
..* UPDATE: Apparently they misunderstood the prompts. We may be able to use it after all. They only have to pay if they go over 1 million hits a month. I think we'll be OK. TasteDive still seems like less hassle.
2. Google Books - Impressive API. It does allow us to find ISBN
3. TasteDive - We thankfully found TasteDive as a replacement for Amazon. While not perfect, it will give us a free API key and return similar books/titles/authors as JSON instead of XML. We are limited to 150 searches/hr
4. [ISBNdb] (http://isbndb.com/api/v2/docs)  - This could still prove useful. And free, from what I can tell.

Thankfully, we had the great Amy, a CodeFellows mentor, to come in and help us out ith troubleshooting and push us in the right direction.
I hope that we can use a combination of the TasteDive [TD] call and Google API [GAPI] to ping a book title, grab the first two results that aren't the same as the original query and then use GAPI's embed feature to load up a potential book. Or at least the first few pages.
  So yeah, we seem to be on the right track. Planning today, working on building tomorrow.

  Amy has been an invaluable help. A shame she won't be available until Wednesday. But at least that we have a written diagram and a clear plan of attack for tomorrow. 

##Day 2, June 20th Progress:
###Morning:
 The very first thing we decided to do this morning was mob server.js for the idea of everything we could need. We focused on server.js and using lab14 as a general guide.
 Around 10 am, Will came by to help us out. He told us to cut down on the amount of code we were doing and just focus on very static methods. For some reason, even our simplest, hard-coded response is ging us "Unexexpted: <" from Postman. We should be getting back Jack London's _Call of the Wild_.

 For 20 minutes, we tried poking around the TD server and got HTML only. Then Will suggested we try poking at Github using the code from lab14 in an effort to . At 10:37, we got a positive response to the github API by putting a / at the end of `api.github.com/users/results/`. So the issue seems to be the exact nature of the request isn't something wrong with express, but with the exact nature of the string being passed to the TasteDive API.

  We created a SuperAgent for node. documentation: https://www.npmjs.com/package/superagent
   It's a super API that allows us to make an AJAX call much easier. npm i superagent and we made it a requirement CONST in our server.js file.  Also, Andrew Potter is a good driver. Will++ for helping us out so much. Sarah Joy said that several other people have had the same problem as well.
  We fixed this problem by 11 am. 
 
 ###Afternoon:
   Now is the appropriate time to panic.

##Day 4, June 22th Progress:
HOORAY! AMY IS BACK!


##Day 4, June 22th Progress:

##Day 5, June 23th Progress: