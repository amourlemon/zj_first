function cuid(opt) {
    switch(opt) {
        case 'add': {
            return function(data, add) {
            
                add(data);
                // break;
            }
        }
        case 'delete': {
            return function(data) {
                console.log('进行了delete操作' + data);
                // break;
            }
        }
    }
}
var option = 'add';
cuid(option)('张三', add);
function add(data) {
    console.log('进行了add1操作' + data);
}