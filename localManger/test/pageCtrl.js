(function($,window) {
    var $scrollElem = $('html, body'),
        $win = $(window),
        isIE6 = !-[1,] && !window.XMLHttpRequest,
        isMac = window.navigator.platform.toLowerCase().indexOf('mac') > -1;

    var PageCtrl = function(options) {
        this.init.call(this, options);
    };

    PageCtrl.prototype = {
		constructor:PageCtrl,   //重新指定构造函数
        init: function(options) {
			this.opts=$.extend({},{
				isWheel	: true,  //是否支持滚轮事件
				loop:false,   //是否循环
				duration:1000,     //页面切换时间
				easing:"swing",   //页面切换缓冲方式
				hash:"page"  //hash值名称
			},options);
            this.curIndex = 0;
			this.nextNum = 0;
            this.wrapper = this.opts.wrapper;
			if(!this.wrapper) return false;
            this.pages = this.wrapper.find('[data-page]');
			this.anchors=this.opts.sideNav;
            this.pageCount = this.pages.length;
            this.scrollTop = 0;
            this.isScroll = true;
			this.clientHeight=0;
            this.time = null;
			this._initPage();
			if(this.opts.isWheel){
				this._bindEvent();	
			}
			this._changePage();
			if(this.anchors){
				this._sideNav();	
			}
        },

        /**
         * 根据当前scrollTop，计算curIndex
         * 浏览器刷新会记录scrollTop，所以不能确定curIndex === 0
         * @private
         */
        _initPage: function() {
			var self = this;
			this.initAnimate();
			self._resize.call(self);
			window.onresize=function(){
				self._resize.call(self);
				self._rePos.call(self);		
			}
			
			window.onhashchange=function(){  //hash值变化时自动定位页面，低版本ie不支持
				self._hashLoad();
			}
			self._hashLoad();//页面刷新后加载
			
			
        },
		
		
		/**
         * 根据hash值定位页面
         * @private
         */
		_hashLoad:function(){
			var self = this;
			// 通过hash值初始化定位页面
			var hashNum=window.location.hash.replace("#"+self.opts.hash,"");
			if(!hashNum||hashNum>self.pageCount) hashNum=1;  //如果获取的hash值为空或者超过总页数，则加载第一个页面
			hashNum=hashNum-1;
			$scrollElem.animate({scrollTop: self.pages.eq(hashNum).offset().top},1);
			this.preAnimate(hashNum);
			this.pages.addClass('animate-exit').eq(hashNum).removeClass("animate-exit").addClass('animate-enter');
			//视觉差动画
			for(var i=0;i<=hashNum;i++){
				if(self.pages.eq(i).find("[data-visionDiff]").length!=0){
					self.pages.eq(i).find("[data-visionDiff]").css({"top":self.clientHeight*0.6*(hashNum-i)},self.opts.duration,self.opts.easing);
				}
			}
			if(self.anchors){
				self.anchors.removeClass('hover').eq(hashNum).addClass('hover');
			}
			self.curIndex=hashNum;	
		},
		
		
		/**
         * 重新计算尺寸
         * @private
         */
		_resize:function(){
			this.clientHeight=document.documentElement.clientHeight||document.body.clientHeight;
			this.pages.css({"height":this.clientHeight});
			if(this.clientHeight>710&&this.clientHeight<=900){
				document.getElementsByTagName("body")[0].className="less_h900";
			}else if(this.clientHeight<=710){
				document.getElementsByTagName("body")[0].className="less_h710";
			}else{
				document.getElementsByTagName("body")[0].className="";			
			}
			
		},
		
		/**
         * 重新定位
         * @private
         */
		_rePos:function(){
			var self = this;
			var curTop=self.pages.eq(self.curIndex).offset().top;
			$scrollElem.stop().animate({scrollTop: curTop});
		},

        /**
         * 滚轮事件绑定
         * @private
         */
        _bindEvent: function() {
            var self = this;
			if (window.addEventListener) {
				window.addEventListener('DOMMouseScroll', function(event) {self.scroll.call(self, event)}, false);
				window.addEventListener('mousewheel', function(event) {
					self.scroll.call(self, event);
				}, false);
				window.addEventListener('MozMousePixelScroll', function(event) {
					event.preventDefault();
				}, false);
			} else {
				document.onmousewheel = function() {
					self.scroll.call(self);
				};
			}
		},
		
		/**
         * changepage事件绑定
         * @private
         */
		_changePage:function(){
			var self = this;
			
            var topDelta = isIE6 ? 0 : 0,
                animateName = isMac ? 'mac' : 'pc';

            var animateFn = {
                mac: function(scrollTop) {
					if(self.anchors){
						self.anchors.removeClass('hover').eq(self.curIndex).addClass('hover');
					}
					
					//视觉差动画
					for(var i=0;i<=self.curIndex;i++){
						if(self.pages.eq(i).find("[data-visionDiff]").length!=0){
							self.pages.eq(i).find("[data-visionDiff]").animate({"top":self.clientHeight*0.6*(self.curIndex-i)},self.opts.duration,self.opts.easing);
						}
					}
					
					$scrollElem.animate({
						scrollTop: scrollTop
					}, self.opts.duration,self.opts.easing, function() {
						setTimeout(function() {
							self.pages.eq(self.curIndex).trigger('enter');
						}, 500);
					});
                },
                pc: function(scrollTop) {
					if(self.anchors){
						self.anchors.removeClass('hover').eq(self.curIndex).addClass('hover');
					}
					
					//视觉差动画
					for(var i=0;i<=self.curIndex;i++){
						if(self.pages.eq(i).find("[data-visionDiff]").length!=0){
							self.pages.eq(i).find("[data-visionDiff]").animate({"top":self.clientHeight*0.6*(self.curIndex-i)},self.opts.duration,self.opts.easing);
						}
					}
					
					$scrollElem.animate({
						scrollTop: scrollTop
					}, self.opts.duration,self.opts.easing, function() {
						self.pages.eq(self.curIndex).trigger('enter');
					});
                }
            };
            self.wrapper.on('changepage', function(event, data) {
                var $nextPage = self.pages.eq(data.nextIndex);
                self.scrollTop = $nextPage.offset().top;
                self.scrollTop -= topDelta;
                animateFn[animateName](self.scrollTop);
            });

            // pages 进入/退出事件
            self.pages.on('enter', function() {
                var $this = $(this);
                self.onEnter($this.index());
            });
            self.pages.on('exit', function() {
                var $this = $(this);
                self.onExit($this.index());
            });
        },
		
		/**
         * 侧边导航绑定
         * @private
         */
		_sideNav:function(){
		 	var self = this;
			var _anchor=self.anchors;
			_anchor.click(function(){
				if($(this).index()==self.curIndex) return;
				if (self.isScroll) return;
                self.isScroll = true;
				self.nextNum=$(this).index();
				self.pages.eq(self.curIndex).trigger('exit');
			})
		},
		
		//滚轮滚动方法
        scroll: function(event) {
            var oEvent = event || window.event;
            if (oEvent.preventDefault) {
                oEvent.preventDefault();
            } else {
                oEvent.returnValue = false;
            }
			
			if (this.isScroll) {
                return;
            }
            this.isScroll = true;
            var self = this;
            var curIndex = 0,
			delta = oEvent.wheelDelta ? oEvent.wheelDelta : -oEvent.detail;
			
            if (delta < 0) {
				if(!self.opts.loop&&self.curIndex==self.pageCount - 1){
					self.isScroll=false;
					return;
				}
                curIndex = Math.min((self.curIndex + 1), self.pageCount - 1);
				if(self.opts.loop&&self.curIndex==self.pageCount - 1){
					curIndex=0;
				}
            } else {
				if(self.curIndex==0){
					self.isScroll=false;
					return;
				}
                curIndex = Math.max((self.curIndex - 1), 0);
            }
			self.nextNum=curIndex;
			self.pages.eq(self.curIndex).trigger('exit');
        },
		
		
		//进入和离开一个page后的操作
        onEnter: function(index) {
            this.pages.eq(index).addClass('animate-enter').removeClass('animate-exit');
			this.preAnimate.call(this,index); //进入一屏后的回调函数，返回进入屏的索引
			window.location.hash=this.opts.hash+(index+1); //进入一个页面后hash值改变
        },
        onExit: function(index,oEvent) {
           this.pages.eq(index).removeClass('animate-enter').addClass('animate-exit');
		   this.preAnimate.call(this,index,true);  //退出一屏时的回调函数，返回退出当前屏的索引
        },
		
		/**
         * 执行js动画方法
         * @private
         */
		preAnimate:function(index,direct){
			var stack=this.setAnimate.call(this,index,direct);
			this.exeAnimate.call(this,stack,direct);
            
		},
		
		
		/**
         * 通过data属性获取页面中动画的参数
         * @private
		 * @param  index--传入页面索引，direct--进出场标记，为真表示出场，不填或为假表示进场
		 * @return 一个页面内所有动画的数组
         */
		setAnimate:function(index,direct){
			var ele=this.pages.eq(index);
            var eles = $("[data-order]", ele);
            var stack = [];
			
            $.each(eles, function (i, n) {
                var $this = $(this);
                var attrJson;
				if(!direct){
					attrJson = $this.attr("data-attrEnter");	
				}else{
					attrJson = $this.attr("data-attrExit");
				}
				
                var order = $this.attr("data-order");
                var o = {
                    ele: $this,
                    attrJson: attrJson,
                    duration: parseInt($this.attr("data-duration")) || 0,
                    delay: parseInt($this.attr("data-delay")) || 0
                }
                stack[order-1] = o;
            });	
			return stack;
		},
		
		
		/**
         * 初始化动画元素，将其设置为动画结束时的状态
         * @private
         */
		initAnimate:function(){
			var self=this;
			for(var i=0;i<self.pageCount;i++){
				var stack=self.setAnimate.call(self,i,true);
				$.each(stack,function(i,n){
					var pros = '{'+n.attrJson+'}';
					n.ele.css($.parseJSON(pros));	
				})
			}
				
		},
		
		
		/**
         * 执行动画方法
		 * @param  stack--动画数组，direct--是否为出场
         * @private
         */
		exeAnimate:function(stack,direct){
			var self=this;
			
			//如果该页面没有动画则返回
			if(stack.length==0){
				if(direct){  //进场则换屏
					self.setIndex(self.nextNum);
				}else{      //出厂完设置滚动参数
					self.isScroll=false;
				}
				return;
			}
			
			var maxNum=self.maxNum(stack);  //获取一个页面内delay和duration的和最大的索引，当执行完该动画后换页
			$.each(stack, function (i, n) {
                if (n) {
                    var pros = '{'+n.attrJson+'}';
                    setTimeout(function () {
                        n.ele.stop().animate($.parseJSON(pros), n.duration,function(){
							if(maxNum==i&&direct){
								self.setIndex(self.nextNum);
							}
							if(maxNum==i&&!direct){
								self.isScroll=false;
							}
						});
                    }, n.delay);
                }
            });	
		},
		
		/*求最后执行完动画的*/
		maxNum:function(arr){
			var temp=0,index=0;
			for(var i=0;i<arr.length;i++){
				if(arr[i].duration+arr[i].delay>temp){
					temp=arr[i].duration+arr[i].delay;
					index=i;
				}	
			}
			return index;	
		},
		
		//设定当前index值，绑定改变page的事件
        setIndex: function(index) {
            var prevIndex = this.curIndex;
            this.curIndex = index;
            this.wrapper.trigger('changepage', {
                prevIndex: prevIndex,
                nextIndex: index
            });
        }
    };
	
	//将构造函数挂在到window下（外部可以调用，实例化）
	window.PageCtrl=PageCtrl;

})(jQuery, window);