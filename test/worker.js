
onmessage = function (evt) {
    var data = evt.data,
        id = data.id;

    switch (id) {
        case 'add': {
            var num = data.num,
                rs = 0;

            for (var i = 0; i < num; i++) {
                rs += i;
            }
            data.rs = rs;
            postMessage(data);
            break;
        }
        case 'sub': {
            var num = data.num,
                rs = 0;

            for (var i = 0; i < num; i++) {
                rs -= i;
            }
            data.rs = rs;
            postMessage(data);
            break;
        }
    }
};
