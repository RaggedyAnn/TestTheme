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
    }
    document.getElementById("demo").innerHTML += allTextLines[0];
}
}

txtFile.open("get", "test.csv", true);
txtFile.send();
</script>
