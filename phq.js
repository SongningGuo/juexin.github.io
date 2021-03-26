
'use strict' ;

var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {

      $scope.type = true;
        $scope.flag = false;
        $scope.show_result = false;
        $scope.show_desc = false;
        $scope.show_q_desc = false;

        $scope.carname = "抑郁量表（PHQ-9）";
        $scope.texttitle = "1、做事时提不起劲或没有兴趣";
        var vm = $scope.vm = {};
        var texttitles = $scope.texttitles = [
            "1、做事时提不起劲或没有兴趣",
            "2、感到心情低落 ，沮丧或绝望",
            "3、入睡困难，睡不安稳或睡眠过多",
            "4、感觉疲倦或没有活力",
            "5、食欲不振或吃太多",
            "6、觉得自己很糟或觉得自己很失败，或让自己或家人失望",
            "7、对事物专注有困难，例如阅读报纸或看电视时",
            "8、动作或说话速度缓慢到别人已经察觉，或正好相反——烦躁或坐立不安、动来动去更胜于平常",
            "9、有不如死掉或用某种方式伤害自己的念头"
        ];
        var scroes = $scope.scroes = [];
        var page = $scope.page = 0;

        vm.values = [
            {title:  '完全不会' , scroe: 0,code:0},
            {title:  '几天' , scroe: 1,code:1},
            {title:  '一半以上的日子' , scroe: 2,code:2},
            {title:  '几乎每天' , scroe: 3,code:3}
        ];
        vm.selection = vm.values[0];    //默认显示第二个


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
        $scope.scroe = totlescroe;
        if (totlescroe<5){
            $scope.result = "您的测评结果为：正常";
        }else if(5<=totlescroe && totlescroe<10){
            $scope.result = "您可能是轻度抑郁";
           $scope.show_desc = true;
        }else if(10<=totlescroe && totlescroe<15){
            $scope.result = "您可能是中度抑郁";
           $scope.show_desc = true;
        }else if(15<=totlescroe && totlescroe<20){
            $scope.result = "您可能是中重度抑郁";
           $scope.show_desc = true;
        }else if(20<=totlescroe){
            $scope.result = "您可能是重度抑郁";
           $scope.show_desc = true;
        }
    };

    $scope.again = function() {
        window.location.reload();
    };

});
