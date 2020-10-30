
$(window).on( "load", function() {
        ScrollReveal().reveal('.proj-container',{ delay: 500 })
        //ScrollReveal().reveal('#goodbye-message',{ delay: 500 })

        var $randomnbr = $('.nbr');
        var $timer= 10;
        var $data = 0;
        var letters = ["A", "L", "E", "C", "-", "H", "U", "A", "N", "G", "-", "L", "A", "B", "S"];
        $randomnbr.each(function(){
            var change = Math.round(Math.random()*250);
            $(this).attr('data-change', change)
        });
        function random(){
            return Math.round(Math.random()*9);
        };
        function select(){
            return Math.round(Math.random()*$randomnbr.length);
        };
        function value(){
            $('.nbr:nth-child('+select()+')').html(random());
            $('.nbr:nth-child('+select()+')').attr('data-number', $data);
            $data++;
            $randomnbr.each(function(){
                if(parseInt($(this).attr('data-number')) > parseInt($(this).attr('data-change'))){
                    var index = $('.ltr').index(this);
                    $(this).html(letters[index]);
                    $(this).removeClass('nbr');
                    var $nbrsLeft = $('.nbr');
                    if($nbrsLeft.length == 0){
                        setTimeout(() => {
                            $('.fa-github').css('color','#B1B1B1');
                            $('.fa-linkedin').css('color','#B1B1B1');
                            $('.fa-dev').css('color','#B1B1B1');
                            $('.fa-envelope').css('color','#B1B1B1');
                            $('#logo-container').addClass('animate__animated animate__bounceInDown');
                            $('.fa-angle-double-down').css('color', '#B1B1B1');
                            $('.random').css('color', '#B1B1B1');
                        }, 500)
                    }
                }
            })
        }
        /*
        $(".down-btn").click(function () {
            $('#aboutme-container').scrollIntoView()
        })
        */
        setInterval(value, $timer);
        $("#arrow1").hide();
        $("#arrow2").hide();
        $("#teddy-bio").hide();
        $("#alec-bio").hide();
        $(document).scroll(function() {
            if($(this).scrollTop() >= $('#logo-container').offset().top) {
                $('#arrow1').addClass('animate__animated animate__bounceInLeft').show();
                $("#arrow2").addClass('rotate animate__animated animate__bounceInRight').show();
                $("#teddy-bio").addClass('rotate animate__animated animate__bounceInLeft').show();
                $("#alec-bio").addClass('rotate animate__animated animate__bounceInRight').show();
            }
        });
    
        /*
        
        */
        
        /*
        $("#alecTed").click(function() {
            //$("#arrow1").addClass('animate__animated animate__bounceInLeft').show();
            //$("#arrow2").addClass('rotate animate__animated animate__bounceInRight').show();
            //$("#teddy-bio").addClass('rotate animate__animated animate__bounceInLeft').show();
            //$("#alec-bio").addClass('rotate animate__animated animate__bounceInRight').show();
        }) 
        */
        new CircleType(document.getElementById('curved-text')).radius(200);

        $("#strava-desc").html(
            "<p>The Map on the left displays my cumulative running routes. It is made with leaflet.js along with the mapbox light plug in. The Calender Heatmap on the right is made with D3.js.I Retrieved my personal running data by working with the Strava Api. <br><br> View my Github Repo <a class = \"code-link\" href=\"https://github.com/alec-huang-labs/stravaMapCal\" target=\"_blank\">HERE</a>.</p>")
        $("#calc-desc").html(
            "<p>Scientific Calculator with an interface inspired by computer terminals from the 1980s. Interface is built with React. Utilizes math.js for it's calculations. <br><br> View my Github Repo <a class = \"code-link\" href=\"https://github.com/alec-huang-labs/TerminalCalculator2.0\" target=\"_blank\">HERE</a>.</p>")
        $("#md-desc").html(
            "<p>Preview window will dynamically render the output from a given input written in the Markdown language. Utilitzed marked.js as the markdown parser and compiler.<br><br> View my Github Repo <a class = \"code-link\" href=\"https://github.com/alec-huang-labs/markdownPreviewer\" target=\"_blank\">HERE</a>.</p>")
        $("#quotes-desc").html(
            "<p>First Complete Front-End Project I've ever built!When the Twitter button is pressed, user will be directed to twitter where the tweet will be pre-populated with the text and author of the quote.<br><br> View my Github Repo <a class = \"code-link\" href=\"https://github.com/alec-huang-labs/RandomQuotes\" target=\"_blank\">HERE</a>.</p>")
        $("#site-desc").html(
            "<p>Animation built with JQuery on the landing page along with lots of SVG graphics to give the site a personal feel. A place to display myself (and Teddy) as well as my work to the world.<br><br> View my Github Repo <a class = \"code-link\" href=\"\" target=\"_blank\">HERE</a>.</p>")
    });

/*
$(window).load(function(){
    function showArrow() {
        $('#curved-text').circleType({radius:135});
    }
    setTimeout(()=> showArrow(), 1000)
})
*/

