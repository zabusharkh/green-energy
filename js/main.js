(function () {

    "use strict";

    /*
    ---------------------------------
    DECLARING AND ASSIGNING VARIABLES
    --------------------------------- */

    /* 
    Declare variables:
    masthead (HTML container storing 
    the current slide - slide-show part)

    slides (array of elements storing 
    all slides - slide-show part)

    buttons (collected list of 
    3 buttons in array - main content hide/reveal part)

    contents (array of 3 elements - contents 
    in main content hide/reveal part)

    container (HTML element that will get a content
    from array contents)

    i (variable to be used as index-pointer 
    inside loops for slide-show part)

    k (variable to be used as index-pointer
    inside loops for hide/reveal content part) */

    var masthead, slides, buttons, contents, container, i, k;


    /*
    -----------------------
    START CODING SLIDE-SHOW
    -----------------------

    /* 
    Access empty div with the 
    class "mh-image" (look at the HTML structure 
    above), and pass the reference
    to variable masthead */
    masthead = document.querySelector(".mh-image");
    /* 
    Assign 4 elements to array slides
    (slide-show content) */
    slides = [
   "<figure><div><img src=\"./img/slide1.jpg\" alt=\"slide 1\"></div><figcaption>Solar Systems</figcaption></figure>",
    "<figure><div><img src=\"./img/slide2.jpg\" alt=\"slide 2\"></div><figcaption>Hybrid Cars</figcaption></figure>",
    "<figure><div><img src=\"./img/slide3.jpg\" alt=\"slide 3\"></div><figcaption>Wind Generators</figcaption></figure>",
    "<figure><div><img src=\"./img/slide4.jpg\" alt=\"slide 4\"></div><figcaption>Home green energgy</figcaption></figure>"
]
    /* 
    Define function fadeOut. This function will 
    make currently displayed slide disappear. */
    function fadeOut() {

        /* 
        Use style object with property opacity 
        on masthead and set it to 0. */
        masthead.style.opacity = 0;
        /* 
        End function fadeOut. */
    }

    /* 
    Use i as index pointer for the array slides.
    Assign i with initial value 0. */
    i = 0;
    /* 
    Define function runSlides. 
    This function will loop through the array slides. */
    function runSlides() {
        /* 
        Set opacity of masthead to 1.
        Make sure masthead is visible 
        (use style object and opacity on masthead). */
        masthead.style.opacity = 1;
        /* 
        Check the value of i.
        If the value of i is greater than 3 
        (3 is index of fourth slide),
        reset the value of i to 0 
        (slide-show starts over). */
        if (i === 4) {
            i = 0;
        }

        /* 
        Use i to pass the next in line slide 
        from array slides to masthead. */
        masthead.innerHTML = slides[i];
        /* 
        Increment i. */
        i += 1;
        /* 
        Use setTimeOut() to call function fadeout 
        after 5 seconds.(Slide will remain displayed 
        for 5s and then, function fadeOut 
        will make it disappear). */
        setTimeout(fadeOut, 5000);
        /* 
End function runSlides. */
    }

    /*
    Call function runSlides. This will display 
    the first slide as the web page is loaded. */
    runSlides();
    /* 
    Use setInterval() to call function 
    runSlides every 6 seconds.
    (Function runSlides is 
    a slide-show "engine"). */
    var myVar = setInterval(function () {
        runSlides()
    }, 6000);

    /*
    -------------------------------------
    START CODING REVEAL-HIDE MAIN-CONTENT
    -------------------------------------
    HTML Structure:
    <main>
      <div class="box">
        <h1>Heading ...</h1>
        <ul>
          <li><span class="btn" id="active">Chrome</span></li>
          <li><span class="btn">Firefox</span></li>
          <li><span class="btn">Opera</span></li>
        </ul>
        <div class="container"></div>
      </div>
    </main> */


    /* 
    Collect all buttons in array buttons. 
                                           
    Have all contents in array contents. 

    Access div with the class "container"
    and pass the reference to variable container.*/
    buttons = document.querySelectorAll(".btn");
    contents = ["<figure class=\"detailed\"><img src=\"./img/solar.jpg\" alt=\"Solar\"><figcaption><h4 class=\"solution\">Install a Solar Array</h4>Solar panels, or photovoltaic cells, are one of the best ways to reduce pollution and lower your electricity expenses (if you have the cash to spend). The average cost of installation for the typical solar array comes in at around $30,000, before green energy tax credits, rebates, and incentives, which help you recoup much of the initial expense.</figcaption></figure>", "<figure class=\"detailed\"><img src=\"./img/wind.jpg\" alt=\"Wind\"><figcaption><h4 class=\"solution\">Install a Wind Generator</h4>When you think of wind generators, the first thing that comes to mind is likely the huge windmill farms found offshore and in the windswept plains of the western United States. But did you know that you can actually purchase smaller versions of these massive power generators?<br><br>The costs of a home wind generator vary greatly. Some have built their own wind generators with off-the-shelf parts from their local hardware stores. Others have purchased kits or paid for professional installation to supplement the power purchased from their local electrical grid.</figcaption></figure>", "<figure class=\"detailed\"><img src=\"./img/rain.jpg\" alt=\"Rain\"><figcaption><h4 class=\"solution\">Install a Rainwater Harvesting System</h4>Rain collector systems are extremely simple mechanical systems that connect to a gutter system or other rooftop water collection network and store rain water in a barrel or cistern for later non-potable use (like watering plants, flushing toilets, and irrigation). These systems are extremely inexpensive, provided you purchase and assemble the rain collection equipment yourself. If you pay a contractor to install the rain collection system, it could cost you anywhere from several hundred dollars and up.</figcaption></figure>"];

    container = document.querySelector(".container");
    /*
    Pass the value of the first array-element of array contents
    to container (use innerHTML on container). */
    container.innerHTML = contents[0];
    /* 
    Define function handleClick 
    (pass event object to function) */
    function handleClick(ev) {
        /* 
        Loop through buttons array and
        use removeAttribute() to remove 
        id with the value active from an HTML element 
        that contains this id (use hasAttribute() in if-statement to check). */
        for (k = 0; k < buttons.length; k += 1) {
            if (buttons[k].hasAttribute("id")) {
                buttons[k].removeAttribute("id");
            }
        }
        /* 
        Use innerHTML on ev.target to check which button
        was clicked. Based on this, display corresponding array 
        element inside <div class="container"></div> */
        console.log(ev.target.getAttribute("class"));
        if (ev.target.getAttribute("class") === "fa fa-sun-o") {
            container.innerHTML = contents[0];
        } else if (ev.target.getAttribute("class") === "fa fa-modx") {
            container.innerHTML = contents[1];
        } else {
            container.innerHTML = contents[2];
        }
        /*
        Add the class active to clicked list item (use ev.target) */
        ev.target.parentElement.setAttribute("id", "active");
        /* 
        End function handleClick. */
    }

    /* 
    Loop through buttons array and 
    register handleClick to listen for "click" event 
    on any button from array buttons. */
    for (k = 0; k < buttons.length; k += 1) {
        buttons[k].addEventListener("click", handleClick);
    }
}());