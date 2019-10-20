var obj = {};
        var goals={
          score_sdg1: "<img class='sml' src='/static/images/Goal01.png'>",
          score_sdg2: "<img class='sml' src='/static/images/Goal02.png'>",
          score_sdg3: "<img class='sml' src='/static/images/Goal03.png'>",
          score_sdg4: "<img class='sml' src='/static/images/Goal04.png'>",
          score_sdg5: "<img class='sml' src='/static/images/Goal05.png'>",
          score_sdg6: "<img class='sml' src='/static/images/Goal06.png'>",
          score_sdg7: "<img class='sml' src='/static/images/Goal07.png'>",
          score_sdg8: "<img class='sml' src='/static/images/Goal08.png'>",
          score_sdg9: "<img class='sml' src='/static/images/Goal09.png'>",
          score_sdg10: "<img class='sml' src='/static/images/Goal10.png'>",
          score_sdg11: "<img class='sml' src='/static/images/Goal11.png'>",
          score_sdg12: "<img class='sml' src='/static/images/Goal12.png'>",
          score_sdg13: "<img class='sml' src='/static/images/Goal13.png'>",
          score_sdg15: "<img class='sml' src='/static/images/Goal15.png'>",
          score_sdg16: "<img class='sml' src='/static/images/Goal16.png'>"
        };

function update(){
    document.getElementsByClassName("owl-carousel")[0].style.display="none";
    var html = "<h1>Overall Score</h1><h2>"+obj[document.getElementById('input').value]['score_sdgi'];
    if(obj[document.getElementById('input').value][str] > 90){
      html+=" A";
      html+="</h2>";
      html+='<div id="green"></div>'
      // document.body.style.background = 'green';
    } 
    else if(obj[document.getElementById('input').value]['score_sdgi'] >= 80){
      html+=" B";
      html+="</h2>";
      html+='<div id="yellow"></div>'
      // document.body.style.background = 'yellow';
    } 
    else if(obj[document.getElementById('input').value]['score_sdgi'] >= 70){
      html+=" C";
      html+="</h2>";
      html+='<div id="orange"></div>'
      // document.body.style.background = 'orange';
    } 
    else if(obj[document.getElementById('input').value]['score_sdgi'] >= 60){
      html+=" D";
      html+="</h2>";
      html+='<div id="red"></div>'
      // document.body.style.background = 'red';
    } else{
      html+=" F";
      html+="</h2>";
      html+='<div id="black"></div>'
      // document.body.style.background='black';
      // document.body.style.color='white';
    }
        html+="</h2>";
    html+="<table><tr><th>Category</th><th>Percentage</th><th>Grade</th></tr>"
    for(var i=1; i<=16; i++){
      if(i==14)continue;
        var str = "score_sdg"+i;
        //html +="<p>"+goals[str]+": "+obj[document.getElementById('input').value][str]+"</p>";
        html+="<tr><td>"+goals[str]+"</td><td>"+obj[document.getElementById('input').value][str]+"</td><td>";
        if(obj[document.getElementById('input').value][str] > 90) html+="A";
        else if(obj[document.getElementById('input').value][str] > 80) html+="B";
        else if(obj[document.getElementById('input').value][str] > 70) html+="C";
        else if(obj[document.getElementById('input').value][str] > 60) html+="D";
        else html+="F";
        html+="</td></tr>";
    }
    document.getElementById('display').innerHTML=html;
   //document.getElementById('display').innerHTML="<p>"+obj[document.getElementById('input').value]['score_sdgi']+"</p>";
}
$(document).ready(function() {
    $.ajax({
      type: "GET",
      url: "2019USCitiesIndexResults.csv",
      dataType: "text",
      success: function(data) {
          processData(data);
      }
    });
});
  
  function processData(allText) {
    allTextParsed = allText.replace(/['"\\]+/g, '');
    var allTextLines = allTextParsed.split(/\r\n|\n/);
    //console.log(allTextLines);
    var titles = allTextLines[0].split(",");
    console.log(titles);
    for(var i=1; i<allTextLines.length; i++){
      var line = allTextLines[i].split(",");
      var cities = line[0].split("-");
      for(var j=0;j<cities.length;j++){
          obj[cities[j].replace(/["]+/g, '')]={};
          for(var k=2; k<line.length;k++){
              (obj[cities[j].replace(/["]+/g, '')])[titles[k-1]]=line[k];
          }
      }
    }
    console.log(obj);
  }