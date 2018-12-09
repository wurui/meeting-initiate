define(['oxjs'],function(OXJS){
  return {
    init:function($mod){
    	$('form',$mod).on('submit',function(e){
    		var dat=OXJS.formToJSON(this)
    		if(dat.starttime){
                dat.starttime=(new Date(dat.starttime)).getTime()
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
    			}
    		});
    		return false;
    	})
    }
  }
})
