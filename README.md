# 分页组件
### 写了一个简单的分页组件,源码引用了bootstrap样式,和jQuery
### 使用方法

#### 1.在页面添加容器标签

		<ul class="pagination"></ul>

#### 2.只需实例化 Paging函数，且传入四个参数
		current ：当前页
		total : 总页数
		show : 显示多少页
		select : 选择容器(添加分页列表)

####3.把下面这段代码添加到页面中，就可以使用了

	<script>
		var page = new Paging(5,20,5,'.pagination')
	</script>
	

	 
