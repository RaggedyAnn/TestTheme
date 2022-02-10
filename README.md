## [DD Lab Faciliteter og Udstyr](https://raggedyann.github.io/TestTheme/dd-inf/)
&nbsp;
## [Audiodesign Faciliteter og Udstyr](https://raggedyann.github.io/TestTheme/audiodesign/)

<script type="text/javascript">
var allText =[];
var allTextLines = [];
var Lines = [];

var txtFile = new XMLHttpRequest();
txtFile.open("GET", "test.csv", true);
txtFile.onreadystatechange = function()
{
    allText = txtFile.responseText;
    allTextLines = allText.split(/\r\n|\n/);
};

document.write(allTextLines);<br>
document.write(allText);<br>
document.write(txtFile);<br>
</script>
