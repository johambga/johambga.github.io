var pres = document.getElementById('apropostext');

var typewriter = new Typewriter(pres, {
  delay: 120
});

typewriter.typeString('Bienvenue ! ')
    .pauseFor(1000)
    .deleteAll(50)
    .typeString('CREATIF<br>POLYVALENT<br>A L\'ECOUTE')
    .pauseFor(1500)
    .start();


var firsttext = document.getElementById('firstext');

var typewriter = new Typewriter(firsttext, {
  delay: 50
});

typewriter.typeString('Bienvenue sur mon portfolio !<br>')
    .pauseFor(500)
    .deleteAll(50)
    .typeString('Pour commencer la navigation scroller ou utiliser les flèches<br><a href="#realisations"><i class="fas fa-arrow-down"></i></a>')
    .pauseFor(1500)
    .start();

