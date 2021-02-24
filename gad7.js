
'use strict' ;

var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
    $scope.type = true;
    $scope.flag = false;
    $scope.show_result = false;
    $scope.show_desc = false;
    $scope.show_q_desc = false;

    $scope.carname = "广泛性焦虑自评量表（GAD-7）";
    $scope.texttitle = "1、感觉紧张、焦虑或急切";
    var  vm = $scope.vm = {};
    var texttitles = $scope.texttitles = [
        "1、感觉紧张、焦虑或急切",
        "2、不能够停止或控制担忧",
        "3、对各种各样的事情担忧过多",
        "4、很难放松下来",
        "5、由于不安而无法静坐",
        "6、变得容易烦恼或急躁",
        "7、感到似乎将有可怕的事情发生而害怕"];
    var  scroes = $scope.scroes = [];
    var  page = $scope.page = 0;

    vm.values = [
        {title:  '完全不会' , scroe: 0,code:0},
        {title:  '几天' , scroe: 1,code:1},
        {title:  '一半以上的日子' , scroe: 2,code:2},
        {title:  '几乎每天' , scroe: 3,code:3}
    ];
    vm.selection = vm.values[0];    //默认显示第二个
    $scope.gad = function() {
        window.location.href="gad7.html";
    };

    $scope.sas = function() {
        window.location.href="sas.html";
    };
    $scope.phq = function() {
        window.location.href="phq.html";
    };

    $scope.pre = function() {
        if (page==0){
            return ;
        }
        page = page-1;
        vm.selection = vm.values[scroes[page]];
        $scope.texttitle = texttitles[page];
        scroes.splice(page, 1);
        console.log(scroes);
    };

    $scope.next = function() {
        scroes.push(vm.selection.scroe);
        console.log(scroes);
        page = page+1;
        $scope.texttitle = texttitles[page];
        vm.selection = vm.values[0];
        if (page==texttitles.length-1){
            $scope.type = false;
            $scope.flag = true;
            return ;
        }
    };

    $scope.commit = function() {
        $scope.flag = false;
        $scope.show_result = true;
        var totlescroe = vm.selection.scroe;
        //数组数据遍历
        angular.forEach(scroes, function (v, k) {
            totlescroe = totlescroe+v;
        });
        if(scroes.length == 6){
            $scope.scroe = totlescroe;
            if (totlescroe<5){
                $scope.result = "您的测评结果为：正常";
            }else if(5<=totlescroe && totlescroe<10){
                $scope.result = "您可能是轻度焦虑症";
               $scope.show_q_desc = true;
            }else if(10<=totlescroe && totlescroe<15){
                $scope.result = "您可能是中度焦虑症";
               $scope.show_desc = true;
            }else if(15<=totlescroe){
                $scope.result = "您可能是重度焦虑症";
               $scope.show_desc = true;
            }
        }else if(scroes.length == 19){
            var sas_scroe = parseInt(totlescroe*1.25);
            $scope.scroe = sas_scroe;
            if (0<=sas_scroe && sas_scroe<50){
                $scope.result = "您的测评结果为：正常";
            }else if(50<=sas_scroe && sas_scroe<60){
               $scope.show_q_desc = true;
                $scope.show_q_desc = "您可能是轻度焦虑症";
            }else if(60<=sas_scroe && sas_scroe<70){
                $scope.result = "您可能是中度焦虑症";
               $scope.show_desc = true;
            }else if(70<=sas_scroe){
                $scope.result = "您可能是重度焦虑症";
               $scope.show_desc = true;
            }
        }else{

        }

    };

    $scope.again = function() {
        window.location.reload();
    };

    $scope.begain_sas = function() {
        $scope.type = true;
        $scope.flag = false;
        $scope.show_result = false;
        $scope.show_desc = false;
        $scope.show_q_desc = false;

        $scope.carname = "焦虑自评量表（SAS）";
        $scope.texttitle = "1、我觉得比平常容易紧张和着急(焦虑)。";
        vm = $scope.vm = {};
        texttitles = $scope.texttitles = [
            "1、我觉得比平常容易紧张和着急(焦虑)",
            "2、我无缘无故地感到害怕(害怕)",
            "3、我容易心里烦乱或觉得惊恐(惊恐)",
            "4、我觉得我可能将要发疯(发疯感)",
            "5、我觉得一切都很好，也不会发生什么不幸(不幸预感)",
            "6、我手脚发抖打颤(手足颤抖)",
            "7、我因为头痛，颈痛和背痛而苦恼(躯体疼痛)",
            "8、我感觉容易衰弱和疲乏(乏力)",
            "9、我觉得心平气和，并且容易安静坐着(能静坐)",
            "10、我觉得心跳很快(心慌)",
            "11、我因为一阵阵头晕而苦恼(头昏)",
            "12、我有晕倒发作或觉得要晕倒似的(晕厥感)",
            "13、我呼气吸气都感到很容易(呼吸情况)",
            "14、我手脚麻木和刺痛(手足刺痛)",
            "15、我因为胃痛和消化不良而苦恼(胃痛或消化不良)",
            "16、我常常要小便(尿意频数)",
            "17、我的手常常是干燥温暖的(多汗)",
            "18、我脸红发热(面部潮红)",
            "19、我容易入睡并且一夜睡得很好(睡眠状况)",
            "20、我做恶梦",
        ];
        scroes = $scope.scroes = [];
        page = $scope.page = 0;

        vm.values = [
            {title:  '没有或很少时间有' , scroe: 1,code:0},
            {title:  '有时有' , scroe: 2,code:1},
            {title:  '大部分时间有' , scroe: 3,code:2},
            {title:  '绝大部分或全部时间都有' , scroe: 4,code:3}
        ];
        vm.selection = vm.values[0];    //默认显示第二个
    };

});
