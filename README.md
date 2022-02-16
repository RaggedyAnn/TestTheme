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
        elements = allTextLines[i].split(",");
        document.getElementsbyId("demo").innerHTML += '##';
        document.getElementsbyId("demo").innerHTML += elements[0];
        document.getElementById("demo").innerHTML += '<br><table><tr><td><img src="';
        document.getElementById("demo").innerHTML += elements[1];
        document.getElementById("demo").innerHTML += '" alt="';
        document.getElementById("demo").innerHTML += elements[0];
        document.getElementById("demo").innerHTML += '" style="width: 200px;"/></td> <td><p>';
        document.getElementById("demo").innerHTML += elements[2];
        document.getElementById("demo").innerHTML += ' <br><b>';
        document.getElementById("demo").innerHTML += elements[3];
        document.getElementById("demo").innerHTML += '</b></p></td></tr></table><br>';
    }
}

txtFile.open("get", "test2.csv", true);
txtFile.send();
</script>
