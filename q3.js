
        var init = (function() {
            var counter = 0;
            return function() {
                return counter += 1;
            }
        })();

        function func() {
            document.getElementById("ctr").innerHTML = init();
        }
