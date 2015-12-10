/**
 * Created by allenbklj on 12/9/15.
 */
angular.module('incidentApp',['ngMaterial']).controller('IncidentController',function($rootScope,$scope,$mdDialog){
    $scope.criticalCustomers = [
        {id:'1',name:'Lin',status:'pending',problem:'issue1',date:'12/03/2015',reason:'NA',next:'NA'},
        {id:'2',name:'Chris',status:'pending',problem:'issue2',date:'11/03/2015',reason:'NA',next:'NA'},
        {id:'3',name:'Amy',status:'pending',problem:'issue3',date:'10/03/2015',reason:'NA',next:'NA'},
        {id:'4',name:'Allen',status:'pending',problem:'issue4',date:'11/13/2015',reason:'NA',next:'NA'},
        {id:'5',name:'Susan',status:'pending',problem:'issue5',date:'12/08/2015',reason:'NA',next:'NA'},
        {id:'6',name:'Robin',status:'pending',problem:'issue6',date:'09/17/2015',reason:'NA',next:'NA'},
        {id:'7',name:'Lily',status:'pending',problem:'issue7',date:'08/24/2015',reason:'NA',next:'NA'},
        {id:'8',name:'Lucy',status:'pending',problem:'issue8',date:'07/23/2015',reason:'NA',next:'NA'},
        {id:'9',name:'Laura',status:'pending',problem:'issue9',date:'06/13/2015',reason:'NA',next:'NA'},
        {id:'10',name:'Kim',status:'pending',problem:'issue10',date:'12/03/2015',reason:'NA',next:'NA'}
    ];
    $scope.hotCustomers = [
        {name:'li',status:'pending',problem:'issue1',date:'12/03/2015',reason:'NA',next:'NA'},
        {name:'li',status:'pending',problem:'issue2',date:'11/03/2015',reason:'NA',next:'NA'},
        {name:'li',status:'pending',problem:'issue3',date:'10/03/2015',reason:'NA',next:'NA'},
        {name:'li',status:'pending',problem:'issue4',date:'11/13/2015',reason:'NA',next:'NA'},
        {name:'li',status:'pending',problem:'issue5',date:'12/08/2015',reason:'NA',next:'NA'},
        {name:'li',status:'pending',problem:'issue6',date:'09/17/2015',reason:'NA',next:'NA'},
        {name:'li',status:'pending',problem:'issue7',date:'08/24/2015',reason:'NA',next:'NA'},
        {name:'li',status:'pending',problem:'issue8',date:'07/23/2015',reason:'NA',next:'NA'},
        {name:'li',status:'pending',problem:'issue9',date:'06/13/2015',reason:'NA',next:'NA'},
        {name:'li',status:'pending',problem:'issue10',date:'12/03/2015',reason:'NA',next:'NA'}
    ];
    $scope.cases = [{
        customerId:'9',
        incidentId:'Incident11',
        issue:'network issue',
        description:'While REST stands for Representational State Transfer, which is an architectural style for networked hypermedia applications, it is primarily used to build Web services that are lightweight, maintainable, and scalable. A service based on REST is called a RESTful service',
        reason:'The architectural properties of REST are realized by applying specific interaction constraints to components, connectors, and data elements.[4][6] One can characterise applications conforming to the REST constraints described in this section as "RESTful".[2] If a service violates any of the required constraints, it cannot be considered RESTful. Complying with these constraints, and thus conforming to the REST architectural style, enables any kind of distributed hypermedia system to have desirable non-functional properties, such as performance, scalability, simplicity, modifiability, visibility, portability, and reliability.',
        targetDate:'2days'
    },{
        customerId:'9',
        incidentId:'Incident12',
        issue:'client issue',
        description:'ddddd',
        reason:'rrrrr',
        targetDate:'2days'
    },{
        customerId:'9',
        incidentId:'Incident13',
        issue:'server issue',
        description:'ddddd',
        reason:'rrrrr',
        targetDate:'2days'
    }];
    $scope.types = ['CAP','HOT'];
    $scope.remove = function(type){
        console.log(type);
        if(confirm('are you sure to delete the cases?')){
            if(type === 'CAP'){
                $scope.criticalCustomers = $scope.criticalCustomers.filter(function(ele){
                    return ele.delete !== true;
                });
            }else if(type === 'HOT'){
                $scope.hotCustomers = $scope.hotCustomers.filter(function(ele){
                    return ele.delete !== true;
                });
            }
        }

    };
    $scope.getDetail = function(customer,ev){
        var id = customer.id;
        $rootScope.details = $scope.cases.filter(function(ele){
            return ele.customerId === id;
        });
        //$rootScope.$emit('detail',$scope.details);
        $mdDialog.show({
            title:customer.name,
            parent:angular.element(document.body),
            clickOutsideToClose:true,
            templateUrl:'../detail.html',
            controller:detailController,
            targetEvent:ev
        })
    };
});

function detailController($scope,$rootScope){
    //$rootScope.$on('detail',function(e,result){
    //    $scope.details = result;
    //    console.log($scope.details);
    //})
    $scope.details = $rootScope.details;
    console.log($scope.details);
}