var obj = {};
        var goals={
          score_sdg1: "<img onclick='getVolunteer(this);' class='sml' sdg='score_sdg1' src='/images/Goal01.png'>",
          score_sdg2: "<img onclick='getVolunteer(this);' class='sml' sdg='score_sdg2' src='/images/Goal02.png'>",
          score_sdg3: "<img onclick='getVolunteer(this);' class='sml' sdg='score_sdg3' src='/images/Goal03.png'>",
          score_sdg4: "<img onclick='getVolunteer(this);' class='sml' sdg='score_sdg4' src='/images/Goal04.png'>",
          score_sdg5: "<img onclick='getVolunteer(this);' class='sml' sdg='score_sdg5' src='/images/Goal05.png'>",
          score_sdg6: "<img onclick='getVolunteer(this);' class='sml' sdg='score_sdg6' src='/images/Goal06.png'>",
          score_sdg7: "<img onclick='getVolunteer(this);' class='sml' sdg='score_sdg7' src='/images/Goal07.png'>",
          score_sdg8: "<img onclick='getVolunteer(this);' class='sml' sdg='score_sdg8' src='/images/Goal08.png'>",
          score_sdg9: "<img onclick='getVolunteer(this);' class='sml' sdg='score_sdg9' src='/images/Goal09.png'>",
          score_sdg10: "<img onclick='getVolunteer(this);' class='sml' sdg='score_sdg10' src='/images/Goal10.png'>",
          score_sdg11: "<img onclick='getVolunteer(this);' class='sml' sdg='score_sdg11' src='/images/Goal11.png'>",
          score_sdg12: "<img onclick='getVolunteer(this);' class='sml' sdg='score_sdg12' src='/static/images/Goal12.png'>",
          score_sdg13: "<img onclick='getVolunteer(this);' class='sml' sdg='score_sdg13' src='/static/images/Goal13.png'>",
          score_sdg15: "<img onclick='getVolunteer(this);' class='sml' sdg='score_sdg15' src='/static/images/Goal15.png'>",
          score_sdg16: "<img onclick='getVolunteer(this);' class='sml' sdg='score_sdg16' src='/static/images/Goal16.png'>"
        };

function update(){
    document.getElementsByClassName("owl-carousel")[0].style.display="none";
    var html = "<h1>Overall Score</h1><h2>"+obj[document.getElementById('input').value.toLowerCase()]['score_sdgi']+"<div ";
    if(obj[document.getElementById('input').value.toLowerCase()]['score_sdgi'] > 90){
        html+='id="Green"><h2>';
        html+=" A";
        html+="</h2>";
        html +='</div>'
      // document.body.style.background = 'green';
    } 
    else if(obj[document.getElementById('input').value.toLowerCase()]['score_sdgi'] >= 80){
        html+='id="Yellow"><h2>';
        html+=" B";
        html+="</h2>";
        html +='</div>'
      // document.body.style.background = 'yellow';
    } 
    else if(obj[document.getElementById('input').value.toLowerCase()]['score_sdgi'] >= 70){
        html+='id="orange"><h2>';
        html+=" C";
        html+="</h2>";
        html +='</div>'
      // document.body.style.background = 'orange';
    } 
    else if(obj[document.getElementById('input').value.toLowerCase()]['score_sdgi'] >= 60){
      html+='id="red"><h2>';
      html+=" D";
      html+="</h2>";
      html +='</div>'
      // document.body.style.background = 'red';
    } else{
        html+='id="black"><h2>';
        html+=" F";
        html+="</h2>";
        html +='</div>'
      // document.body.style.background='black';
      // document.body.style.color='white';
    }
    html+="<table><tr><th>Category</th><th>Percentage</th><th>Grade</th></tr>"
    for(var i=1; i<=16; i++){
      if(i==14)continue;
        var str = "score_sdg"+i;
        //html +="<p>"+goals[str]+": "+obj[document.getElementById('input').value][str]+"</p>";
        html+="<tr><td>"+goals[str]+"</td><td>"+obj[document.getElementById('input').value.toLowerCase()][str]+"</td><td>";
        if(obj[document.getElementById('input').value][str] > 90) html+="A";
        else if(obj[document.getElementById('input').value.toLowerCase()][str] > 80) html+="B";
        else if(obj[document.getElementById('input').value.toLowerCase()][str] > 70) html+="C";
        else if(obj[document.getElementById('input').value.toLowerCase()][str] > 60) html+="D";
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
          obj[(cities[j].replace(/["]+/g, '')).toLowerCase()]={};
          for(var k=2; k<line.length;k++){
              (obj[(cities[j].replace(/["]+/g, '')).toLowerCase()])[titles[k-1]]=line[k];
          }
      }
    }
    console.log(obj);
  }