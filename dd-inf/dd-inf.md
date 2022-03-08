---
theme: jekyll-theme-minimal
title: "Digital Design og Informationsvidenskab"
permalink: /dd-inf/
---
# DD Lab Udstyr og faciliteter

## Indhold

<section id="tabelsetup"></section>

<script type="text/javascript">
var txtFile = new XMLHttpRequest();
txtFile.onload = function() {
    allText = txtFile.responseText;
    allTextLines = allText.split(/\r\n|\n/);
    var overskrift = "overskrift";
    for(var i = 1; i < allTextLines.length-1; i++) {
      elements = allTextLines[i].split(",");
      if (elements[0] === overskrift){
        document.getElementById("tabelsetup").innerHTML += '<a href="#' + i + '">' + elements[1] + '</a><br/>';
      }
    }
    document.getElementById("tabelsetup").innerHTML += '<br/><hr>';

    for(var i = 1; i < allTextLines.length-1; i++) {
        elements = allTextLines[i].split(",");
        if (elements[0] === overskrift){
          document.getElementById("tabelsetup").innerHTML += '<h1 id=' + i + '>' + elements[1] + '</h1>';
        } else {
          document.getElementById("tabelsetup").innerHTML += '<h3>' + elements[0] + '</h3>';
          document.getElementById("tabelsetup").innerHTML += '<br/><table><tr><td>' + '<img src="' + elements[1] + '" alt="' + elements[0] + '"' + 'style="width: 200px;" /></td> <td><p>' + elements[2] + '<br/><b>' + elements[3]; + '</b></p></td></tr></table><br/>';
        }

    }
}

txtFile.open("get", "DDLabTabel.csv", true);
txtFile.send();
</script>
