var iframe = window.getElementsByTagName("iframe")[0];
alert("Frame title: " + iframe.contentWindow.title);


<iframe src="page.html" width="500" height="300">
  <p>Your browser does not support iframes.</p>
</iframe>