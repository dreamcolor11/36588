//初始化
angular.module('app', ['ngMaterial']);
angular.module('app').config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
	// primary
    .primaryPalette('teal', {
		'default': '500',
		'hue-1'  : '300',
		'hue-2'  : '800',
		'hue-3'  : 'A100'
	})
	// accent
	.accentPalette('lime', {
		'default': 'A200',
		'hue-1'  : 'A100',
		'hue-2'  : 'A400',
		'hue-3'  : 'A700'
	})
	// warn
	.warnPalette('pink', {
		'default': '500',
		'hue-1'  : '300',
		'hue-2'  : '800',
		'hue-3'  : 'A100'
	});
});
//擴充標籤
angular.module('app').directive('teamitem', function() {
	return {
		restrict: "E",
		templateUrl: "html/test.html"
	}
});
/*輪播大背景圖*/
angular.module('app').directive('mainbg', function() {
	return {
		restrict: "E",
		templateUrl: "html/mainbg.html"
	}
});
/*左側-logo*/
angular.module('app').directive('logo', function() {
	return {
		restrict: "E",
		templateUrl: "html/logo.html"
	}
});
/*左側-個人資訊*/
angular.module('app').directive('accountinfo', function() {
	return {
		restrict: "E",
		templateUrl: "html/accountinfo.html"
	}
});
/*左側-球類選單*/
angular.module('app').directive('gamemenu', function() {
	return {
		restrict: "E",
		templateUrl: "html/gamemenu.html"
	}
});
/*左側-最新注單*/
angular.module('app').directive('newlist', function() {
	return {
		restrict: "E",
		templateUrl: "html/newlist.html"
	}
});
/*上方-主要選單*/
angular.module('app').directive('topmenu01', function() {
	return {
		restrict: "E",
		templateUrl: "html/topmenu01.html"
	}
});
/*上方右側-會員帳號選單*/
angular.module('app').directive('topmenu02', function() {
	return {
		restrict: "E",
		templateUrl: "html/topmenu02.html"
	}
});

/*window.addEventListener('resize', function() {
   var width = document.clientWidth - 255;
   var dom = document.getElementById("top");
   dom.style.width = width + "px";
});
*/
//Main 功能
angular.module('app').controller('Main', function ($scope, $mdSidenav, $window) {
	//設定初始頁面
		//主要頁面
		$scope.tpl_body       = './html/login.html';
	
	//換頁面 使用 $scope.$emit('changePage', '網址') 切換
	$scope.$on('changePage', function(event, args) {
		$scope.tpl_body       = args;
	});

	/*$scope.$on('resize', function(event, args) {
		var elem = angular.element(document.querySelector('#top'));
		var fixWidth = $window.innerWidth - 255;
		elem.css('width', fixWidth+'px');
	});*/
	
	//當中間段的body include完成後
	$scope.onBodyLoaded = function() {
		
	}
	//程式啟動完成後, 相當於window.onload
	$scope.AppLoaded = function() {
		
	}
	//兩側工具列
	$scope.toggleLeft = function() {
		$mdSidenav("left").toggle();
	}
	$scope.toggleRight = function() {
		$mdSidenav("right").toggle();
	}
	/*$scope.setWidth = function() {
		var elem = angular.element(document.querySelector('#top'));
		var fixWidth = $window.innerWidth - 255;
		elem.css('width', fixWidth+'px');
	};*/
	
});

//頁面 Login 功能
angular.module('app').controller('pageLogin', function ($scope) {
	$scope.login = function() {
		var id = $scope.inputid; //帳號
		var pw = $scope.inputpw; //密碼
		$scope.$emit('changePage', './html/main.html');
		//alert(id + ", " + pw);
	}
});

angular.module('app').controller('pageMain', function ($scope) {
	$scope.user_name    = "會員的姓名";
	$scope.user_credits = "12345678";
	$scope.user_bets    = "8+";
	
	$scope.games = [
		{ name: "MLB棒球1", link: "test" },
		{ name: "MLB棒球2", link: "test" },
		{ name: "MLB棒球3", link: "test" },
		{ name: "MLB棒球4", link: "test" }
	]
});
/*(function(){
	window.onresize = function(event) {
		alert(123);
    	var elem = document.getElementById('top');
		var fixWidth = window.innerWidth - 255;
		elem.css('width', fixWidth+'px');
	};
});*/