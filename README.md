## [DD Lab Faciliteter og Udstyr](https://raggedyann.github.io/TestTheme/dd-inf/)
&nbsp;
## [Audiodesign Faciliteter og Udstyr](https://raggedyann.github.io/TestTheme/audiodesign/)

<p id="demo"></p>

<script type="text/javascript">
var txtFile = new XMLHttpRequest();
txtFile.onload = function() {
    allText = txtFile.responseText;
    allTextLines = allText.split(/\r\n|\n/);

    for(var i = 0; i < allTextLines.length; i++) {
        document.getElementById("demo").innerHTML += allTextLines[i];
        document.getElementById("demo").innerHTML += '<br/>';
        elements = allTextLines[i].split(",");
        document.getElementById("demo").innerHTML += '## ' + elements[0];
        document.getElementById("demo").innerHTML += '<br/><table><tr><td><img src="' + elements[1] + '" alt="' + elements[0] + '"' + 'style="width: 200px;" /></td> <td><p>' + elements[2] + '<br/><b>' + elements[3]; + '</b></p></td></tr></table><br/>';
    }
}

txtFile.open("get", "test2.csv", true);
txtFile.send();
</script>
