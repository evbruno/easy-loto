define(
	['knockout'],

	function (ko) {
    return {
        getHello: function () {
        		//console.log("jquery " + jq);
        		console.log("knockout " + ko);
        		
            return 'Hello World ' + new Date();
        }
    };

});