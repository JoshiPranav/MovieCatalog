describe('Filters', function(){ 
    beforeEach(module('app')); 
    describe('subString',function(){ 
        var substring;
        beforeEach(inject(function($filter){
            subString = $filter('subString',{});
        }));
        it('Should Pass: Get substring based on start and end index', function(){
            var str = "Hello world!";
            var res = subString(str,1,4);
            expect(res).toBe('ello'); //pass
        });
    });
});