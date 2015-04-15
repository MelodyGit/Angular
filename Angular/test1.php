<!DOCTYPE html>
<html>
<head>
	<meta  charset="UTF-8">
	<title></title>
</head>
<body>
	<script type="text/javascript">
		/*function constfuncs() {
		var funcs = [];
		for (var i = 0; i < 10; i++) {
		funcs[i] = (function (i) {
		    return function(){
		        return i;
		    };
		}(i))
		}	
		return funcs;
		}
		var funcs = constfuncs();
		console.log(funcs[1]());*/
		function constfuncs() {
		var funcs = [];
		for (var i = 0; i < 10; i++) {
		funcs[i] = function () {
		    return i;
		}
		}
		return funcs;
		}
		var funcs = constfuncs();
		alert(funcs[1]());
	</script>
</body>
</html>