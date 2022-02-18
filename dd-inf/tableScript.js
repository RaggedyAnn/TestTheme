var txtFile = new XMLHttpRequest();
txtFile.onload = function() {
    allText = txtFile.responseText;
    allTextLines = allText.split(/\r\n|\n/);
    for(var i = 1; i < allTextLines.length; i++) {
      elements = allTextLines[i].split(",");
      document.getElementById("tabelsetup").innerHTML += '<a href="#' + i + '">' + elements[0] + '</a><br/>';
    }
    document.getElementById("tabelsetup").innerHTML += '<hr>';

    for(var i = 1; i < allTextLines.length; i++) {
        elements = allTextLines[i].split(",");
        document.getElementById("tabelsetup").innerHTML += '<h2 id=' + i + '>' + elements[0] + '</h2>';
        document.getElementById("tabelsetup").innerHTML += '<br/><table><tr><td><img src="' + elements[1] + '" alt="' + elements[0] + '"' + 'style="width: 200px;" /></td> <td><p>' + elements[2] + '<br/><b>' + elements[3]; + '</b></p></td></tr></table><br/>';
    }
}

txtFile.open("get", "DDLabTabel.csv", true);
txtFile.send();
