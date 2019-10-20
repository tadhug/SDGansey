function getVolunteer(clicked){
    var sdg = clicked.getAttribute('sdg');
    var extraSearch={
        score_sdg1: " eliminate poverty",
        score_sdg2: " feed the needy",
        score_sdg3: " health care",
        score_sdg4: " teaching",
        score_sdg5: " gender equality",
        score_sdg6: " clean water",
        score_sdg7: " clean energy",
        score_sdg8: " economic development",
        score_sdg9: " construction",
        score_sdg10: " reduce enequality",
        score_sdg11: " sustainable cities",
        score_sdg12: " recycling",
        score_sdg13: " climate action",
        score_sdg15: " enviromentnal protection",
        score_sdg16: " legal justice"
      };
    var search = document.getElementById('input').value+" volunteering"+extraSearch[sdg];
    window.open('https://www.google.com/search?='+encodeURIComponent(search));
}