jQuery(document).ready(function( $ ) {

  // Smooth scroll for the menu and links with .scrollto classes
  $('.smothscroll').on('click', function(e) {
    e.preventDefault();
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      if (target.length) {

        $('html, body').animate({
          scrollTop: target.offset().top - 62
        }, 1500, 'easeInOutExpo');
      }
    }
  });

  $('.carousel').carousel({
    interval: 3500
  });

  // JavaScript Chart
  var doughnutData = [{
      value: 92,
      color: "#1abc9c"
    },
    {
      value: 8,
      color: "#ecf0f1"
    }
  ];
  var myDoughnut = new Chart(document.getElementById("cc").getContext("2d")).Doughnut(doughnutData);

  // Bootstrap Chart
  var doughnutData = [{
    value: 70,
    color: "#1abc9c"
  },
  {
    value: 30,
    color: "#ecf0f1"
  }
  ];
  var myDoughnut = new Chart(document.getElementById("bootstrap").getContext("2d")).Doughnut(doughnutData);

  // WordPress Chart
  var doughnutData = [{
    value: 75,
    color: "#1abc9c"
  },
  {
    value: 25,
    color: "#ecf0f1"
  }
  ];
  var myDoughnut = new Chart(document.getElementById("Javascript").getContext("2d")).Doughnut(doughnutData);

  // HTML Chart
  var doughnutData = [{
    value: 80,
    color: "#1abc9c"
  },
  {
    value: 20,
    color: "#ecf0f1"
  }
  ];
  var myDoughnut = new Chart(document.getElementById("html").getContext("2d")).Doughnut(doughnutData);

  // Photoshop Chart
  var doughnutData = [{
    value: 80,
    color: "#1abc9c"
  },
  {
    value: 20,
    color: "#ecf0f1"
  }
  ];
  var myDoughnut = new Chart(document.getElementById("photoshop").getContext("2d")).Doughnut(doughnutData);

  // Illustrator Chart
  var doughnutData = [{
    value: 80,
    color: "#1abc9c"
  },
  {
    value: 20,
    color: "#ecf0f1"
  }
  ];
  var myDoughnut = new Chart(document.getElementById("illustrator").getContext("2d")).Doughnut(doughnutData);



var doughnutData = [{
  value: 70,
  color: "#1abc9c"
},
{
  value: 30,
  color: "#ecf0f1"
}
];
var myDoughnut = new Chart(document.getElementById("phpMysql").getContext("2d")).Doughnut(doughnutData);

var doughnutData = [{
  value: 70,
  color: "#1abc9c"
},
{
  value: 30,
  color: "#ecf0f1"
}
];
var myDoughnut = new Chart(document.getElementById("algo").getContext("2d")).Doughnut(doughnutData);


var doughnutData = [{
  value: 70,
  color: "#1abc9c"
},
{
  value: 30,
  color: "#ecf0f1"
}
];
var myDoughnut = new Chart(document.getElementById("cp").getContext("2d")).Doughnut(doughnutData);
});
