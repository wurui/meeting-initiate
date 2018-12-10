define(['oxjs'],function(OXJS){
    /*
    window.datechange=function(el){
        console.log(el.value)
    }
    var parseTimeString=function(s){

        var splt=s.split(' '),
        datestr=splt[0],
        timestr=splt[1],
        datesplt=datestr && datestr.split('-'),
        timesplt=timestr && timestr.split(':'),
        y=datesplt[0],
        M=datesplt[1],
        d=datesplt[2],
        H=timesplt && timesplt[0],
        m=timesplt &&timesplt[1],
        s=timesplt && parentInt(timesplt[2]);
        debugger
        var date=new Date();
        //console.log(date)
        if(y){
            date.setFullYear(y-0)
        }
        if(M){
            date.setMonth(M-0)
        }
        if(d){
            date.setDate(d-0)
        }
        if(H){
            date.setHours(H-0)
        }
        if(m){
            date.setMinutes(m-0)
        }
        if(s){
            date.setSeconds(s-0)
        }
        //console.log(date)
        return date.getTime()


    };*/
  return {
    init:function($mod){
        //console.log(new Date('2018-12-12 12:23:34.123'.replace(/\-/g,'/')))

    	$('form',$mod).on('submit',function(e){
    		var dat=OXJS.formToJSON(this);

            
    		if(dat.starttime){
                //'2018-12-12 12:23:34.123'
                dat.starttime=(new Date(dat.starttime.split('.')[0].replace(/\-/g,'/'))).getTime()
            }
    		$mod.OXPost({
    			'user-event':$.extend({
    				$inserter:'default'
    			},dat)
    		},function(r){
    			//history.back();
    			var r=r && r[0];
    			if(r.error){
    				OXJS.toast('[操作失败]'+r.error)
    			}else{
    				OXJS.toast('提交成功')
                    if(r && r.body && r.body.LINK){
                        location.href=r.body.LINK.after
                    }
                    
    			}
    		});
    		return false;
    	})
    }
  }
})
