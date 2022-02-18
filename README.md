## [DD Lab Faciliteter og Udstyr](https://raggedyann.github.io/TestTheme/dd-inf/)
&nbsp;
## [Audiodesign Faciliteter og Udstyr](https://raggedyann.github.io/TestTheme/audiodesign/)

<section id="demo" markdown="block"></section>

<script type="text/javascript">
var txtFile = new XMLHttpRequest();
txtFile.onload = function() {
    allText = txtFile.responseText;
    allTextLines = allText.split(/\r\n|\n/);
    for(var i = 1; i < allTextLines.length; i++) {
      elements = allTextLines[i].split(",");
      document.getElementById("demo").innerHTML += '<a href="#' + i + '">' + elements[0] + '</a><br/>';
    }
    document.getElementById("demo").innerHTML += '<hr>';

    for(var i = 1; i < allTextLines.length; i++) {
        elements = allTextLines[i].split(",");
        document.getElementById("demo").innerHTML += '<h2 id=' + i + '>' + elements[0] + '</h2>';
        document.getElementById("demo").innerHTML += '<br/><table><tr><td><img src="' + elements[1] + '" alt="' + elements[0] + '"' + 'style="width: 200px;" /></td> <td><p>' + elements[2] + '<br/><b>' + elements[3]; + '</b></p></td></tr></table><br/>';
    }
}

txtFile.open("get", "test2.csv", true);
txtFile.send();
</script>
