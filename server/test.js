var zhihu = require('zhihu');
var name = 'shanelau';

zhihu.User.info(name).then(function(user) {
    console.log(user);
});
