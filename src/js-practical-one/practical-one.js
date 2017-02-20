

    function doThing (callback) {

        callback.call(null, 'a error', 'a value');
    }


    // doThing() defined elsewhere
    function foo (callback) {

        doThing( function (err, res) {
            // og issue, didn't prevent callback from firing twice...
            if (err) {

                callback(err);

            } else {

                callback(null, res);
            }
        });
    }

    foo( function (err, res){

        console.log( 'Done!. err=', err, ' : res = ', res );
    });