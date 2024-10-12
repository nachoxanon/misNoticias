/* Place your JavaScript in this file */

//$('document').ready(pais);

/////////////DIV BOTONES FIJO////////////////

// When the user scrolls the page, execute myFunction
window.onscroll = function () { myFunction() };

// Get the div botones
var divBotones = document.getElementById("botones");

// Get the offset position of the navbar
var sticky = divBotones.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    divBotones.classList.add("sticky");
  } else {
    divBotones.classList.remove("sticky");
  }
}

//BOTONES
$('#but20minutos').on('click', function () {
  $('#20minutos').show();
  $('#elpais, #abc, #elmundo, #theobjetive, #ld').hide();
  $(this).addClass("butClick");
  $('button').not(this).removeClass("butClick");
  location.href = "#inicio";
});

$('#butElPais').on('click', function () {
  $('#elpais').show();
  $('#20minutos, #abc, #elmundo, #theobjetive, #ld').hide();
  $(this).addClass("butClick");
  $('button').not(this).removeClass("butClick");
  location.href = "#inicio";
});

$('#butAbc').on('click', function () {
  $('#abc').show();
  $('#20minutos, #elpais, #elmundo, #theobjetive, #ld').hide();
  $(this).addClass("butClick");
  $('button').not(this).removeClass("butClick");
  location.href = "#inicio";
});

$('#butElMundo').on('click', function () {
  $('#elmundo').show();
  $('#20minutos, #elpais, #abc, #theobjetive, #ld').hide();
  $(this).addClass("butClick");
  $('button').not(this).removeClass("butClick");
  location.href = "#inicio";
});

$('#butTheObjetive').on('click', function () {
  $('#theobjetive').show();
  $('#20minutos, #elpais, #abc, #elmundo, #ld').hide();
  $(this).addClass("butClick");
  $('button').not(this).removeClass("butClick");
  location.href = "#inicio";
});

$('#butLD').on('click', function () {
  $('#ld').show();
  $('#20minutos, #elpais, #abc, #elmundo, #theobjetive').hide();
  $(this).addClass("butClick");
  $('button').not(this).removeClass("butClick");
  location.href = "#inicio";
});

//////////////////////////////////////////////
////////////////IMPORTAR DATOS////////////////
//////////////////////////////////////////////


////////////////  20MINUTOS  ///////////////////////
fetch('https://api.codetabs.com/v1/proxy?quest=www.20minutos.es/')
  .then(
    function (response) {
      // Examine the text in the response
      response.text().then(function (data) {
        $('#20minutos').html($(data).find('h1 a'));
        // $('#20minutos a').after('</br>');
        $('#20minutos > a').wrap('<p></p>');
        //$('#20minutos a').prepend('>');
        $('#20minutos span, #20minutos img').remove();
        $('a').each(function () {
          const $this = $(this);
          if ($this.html().replace(/\s|&nbsp;/g, '').length === 0)
            $this.remove();
        });
        //console.log(data)
      });
    }
  )

///////////////////  ELPAIS  ///////////////////
fetch('https://api.codetabs.com/v1/proxy/?quest=https://elpais.com/')
  .then(
    function (response) {
      // Examine the text in the response
      response.text().then(function (data) {
        $('#elpais').html($(data).find('div.z.z-hi a, div.z.z-fe a'));
        $('#elpais .c_a_a').remove();
        //$('#elpais .b_h_t').remove();
        $('#elpais img').remove();
        $('#elpais video').remove();
        $('#elpais svg').remove();
        $('#elpais a').wrap('<p></p>');

        //$('#elPais a').after('<br>')
        //console.log(data)
      });
    }
  )

///////////////////  ABC  //////////////////////////
fetch('https://api.codetabs.com/v1/proxy?quest=http://www.abc.es')
  .then(
    function (response) {
      // Examine the text in the response
      response.text().then(function (data) {
        $('#abc').html($(data).find('div .voc-info-container a'));
        $('#abc a').wrap('<p></p>');
        //$('#abc a').after('<br></br>')
        //console.log(data)
      });
    }
  )

/////////////////////  elTiempo  ////////////////////
fetch('https://api.codetabs.com/v1/proxy/?quest=https://www.eltiempo.es/noticias')
  .then(
    function (response) {
      // Examine the text in the response
      response.text().then(function (data) {
        $('#elmundo').html($(data).find('.mt-3 a'));
        $('.v-image, span, .v-card__subtitle').remove();
        //web=data;
        console.log(data)
      });
    }
  )


////////////////////  THE OBJETIVE  ///////////////////
fetch('https://api.codetabs.com/v1/proxy?quest=https://theobjective.com/')
  .then(
    function (response) {
      // Examine the text in the response
      response.text().then(function (data) {
        $('#theobjetive').html($(data).find('h2>a'));
        $('#theobjetive a').wrap('<p></p>');
        $('h2').contents().unwrap().wrap('<p/>');
        //web=data;
        // console.log(data)
      });
    }
  )

////////////////////  LD  ///////////////////
fetch('https://api.codetabs.com/v1/proxy?quest=https://www.libertaddigital.com/')
  .then(
    function (response) {
      // Examine the text in the response
      response.text().then(function (data) {
        $('#ld').html($(data).find('article>a'));
        $('#ld h2').replaceWith(function () {
          return $("<p>", { html: $(this).html() });
        });
        $('#ld div').replaceWith(function () {
          return $("<i>", { html: $(this).html() });
        });
        $('figure').remove();

      });
    }
  )



