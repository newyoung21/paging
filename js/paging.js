'use strict'
// 参数
// current -> 当前页
// total -> 总页数
// show -> 显示多少页面 
// select -> 分页列表容器
function Paging(current,total,show,select){
	this.init(current,total,show,select);
}
 Paging.prototype = {
	//初始化 
	init: function(current,total,show,select){
		this.current = current;
		this.total = total;
		this.show = show;
		this.select = select;
		this.bind();
	},
	//构建分页列表
	bind: function(){
		var tos = Math.floor(this.show/2), //当前页放中间的换算 
			begin,//分页列表开始位置，从第几页开始
			end;//分页列表最后位置，显示到第几页
		if(this.current<=tos){
			begin = 1;
			end = begin+this.show;
			this.createLi(begin,end);
		}else if(this.current+tos>this.total){
			begin = this.total-this.show+1;
			end = begin+this.show;
			this.createLi(begin,end);
		}else{
			begin = this.current-tos,
			end = begin+this.show;
			this.createLi(begin,end);
		}
		
	},
	//创建li元素添加到分页列表
	createLi: function(begin,end){
		//判断是否显示第一页
		if(begin>1){
			var first = $("<li><a href='#/1'>首页</a></li>");
			$(this.select).append(first);
		}
		//判断是否显示上一页
		if(this.current>1){
			var prve = $("<li><a href='#/"+(this.current-1)+"'>&laquo;</a></li>");
			$(this.select).append(prve);
		}
		//遍历显示页	
		for(var i = begin; i < end; i++){
			if(i == this.current){
				var liElemnet =$("<li class='active'><a href='#/"+i+"'>"+i+"</a></li>");
			}else{
				var liElemnet =$("<li><a href='#/"+i+"'>"+i+"</a></li>");
			}
			$(this.select).append(liElemnet);
		}
		//判断是否显示下一页
		if(this.current<this.total){
			var next = $("<li><a href='#/"+(this.current+1)+"'>&raquo;</a></li>");
			$(this.select).append(next);
		}
		//判断是否显示尾页
		if(end<=this.total){
			var last = $("<li><a href='#/"+(this.total)+"'>尾页</a></li>");
			$(this.select).append(last);
		}
	}
}
