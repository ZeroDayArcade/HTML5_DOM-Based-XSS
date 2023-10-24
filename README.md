# DOM-Based XSS (Cross-Site Scripting) Demo
A DOM-Based XSS (Cross-Site Scripting) demo to learn about how JavaScript and HTML injection work, and how to prevent them. This demo takes the form of a mock HTML5 Games website that has search functionality and in-game/platform currency. Use the querystring to see what kind of JavaScript you can inject into the page when serving it locally.  


<img width="1036" alt="Screen Shot 2023-10-24 at 3 58 30 PM" src="https://github.com/ZeroDayArcade/HTML5_DOM-Based-XSS/assets/141867962/52d4c2c4-dd04-4d31-8d1e-230015b9468a">  
<br/>  
<br/>  

This is a fictitious website and the games in the search results are not real. The game art used in this demo is from the good people at <a href="https://opengameart.org/">https://opengameart.org/</a>.

For a more in-depth understanding of DOM-Based XSS attacks, see <a href="https://zerodayarcade.com/tutorials/dom-based-xss-attacks">this article</a> from zerodayarcade.com

## To test locally:
Clone repo:
```
git clone https://github.com/ZeroDayArcade/HTML5_DOM-Based-XSS
```
cd into project directory:
```
cd HTML5_DOM-Based-XSS
```
Run a local server:
```
python3 -m http.server 8080
```

Then open the following in your favorite browser. I'd recommend Chrome or Brave:
```
http://localhost:8080
```

From there you can play around with the querystring to see what kind of HTML and JavaScript you can inject into the web page. These types of attacks are often carried out with link-sharing. An unsuspecting user clicks on a link that goes to a domain they trust and may have an account on. The HTML and JavaScript burried within the querystring then gets injected into the page if the developers hadn't properly sanitized the querystring parameters. 

For example:
```
http://localhost:8080/?search=%3Cimg%20src=%22notimage%22%20onerror=%22changePassword();%22%3E
```
This url will cause the `changePassword()` function to be triggered by just landing on the page, even though `changePassword()` is only *intended* to be called when selected in the user profile dropdown.

You can check out more example urls/querystrings in the `examples.txt` file that demonstrate injection with this mock website.

Examples of how to prevent injection are in the comments of the `main.js` file.

<strong><em>Remember to always sanitize or escape user controlled values before rendering them to the DOM or saving them to a database.</em></strong>


