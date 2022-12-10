const Portfolio = function () {
    function makeWords() {
        var words = [
            {
                text: "X++",
                weight: 12.3
            }, {
                text: "Microsft Power Platform",
                weight: 8
            }, {
                text: "JavaScript",
                weight: 14
            }, {
                text: "C++",
                weight: 3
            }, {
                text: "Azure",
                weight: 7
            }, {
                text: "Cloud Computing",
                weight: 10
            }, {
                text: "React",
                weight: 9
            }, {
                text: "Microsft Dynamics 365 F&O",
                weight: 15
            }, {
                text: "NodeJS",
                weight: 7
            }
        ];
        return words;
    }

    function makeWordCloud(words) {
        $('.teaching-domains').jQCloud(words, { delay: 140 });
    }

    function displayWordCloud() {
        var count = 1;
        $(window).on('scroll', function () {
            var y_scroll_pos = window.pageYOffset;
            var scroll_pos_test = 2700; // set to whatever you want it to be
            var words = makeWords();
            if (y_scroll_pos > scroll_pos_test && count <= 1) {
                makeWordCloud(words);
                count++;
            }
        });
    }

    function designForm() {
        $("#my-modal form").addClass("my-form");
    }

    function typeAnimation() {
        Typed.new("#writing-text", {
            strings: [
                "am a Software Engineer.", "am a Flutter Developer.", "am an Android Developer.", "Solve Problems."
            ],
            // Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
            stringsElement: null,
            // typing speed
            typeSpeed: 5,
            contentType: 'text',
            callback: function () {
                $("#writing-text").css({ "color": "#fff", "background-color": "#00ADB5" });
            },
            preStringTyped: function () { },
            onStringTyped: function () { }
        });
    }

    return {
        displayWordCloud: displayWordCloud,
        typeAnimation: typeAnimation
    }

}();


Portfolio.displayWordCloud();
Portfolio.typeAnimation();
