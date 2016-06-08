var members,type=0,zxs='';
       function getZxs() {
           $.ajax({
                       type: "POST", //提交方式  
                       data:{select_type:type,select_zxs:zxs},
                       url: "php/zxs-list1.php",
                        error: function(){  
                        alert('Error loading XML document');  
                    },  
                    success: function(data){
                        text(data);
                    }  
                   });
       }


       function text(data){
          members=data.split(",");
          zxs_list();
       }

function pageselectCallback(page_index, jq){
          var items_per_page = $('#items_per_page').val();
          var max_elem = Math.min((page_index+1) * items_per_page, members.length-1);
          
          for(var i=page_index*items_per_page;i<max_elem;i++)
          {
              for(var j=0;j<5;j++) {
              if(i%5==0)
                var zxs_name=members[i];
              else if(i%5==1)
                var zxs_introduce=members[i];
              else if(i%5==2)
                var zxs_job=members[i];
              else if(i%5==3)
                var zxs_price=members[i];
              else if(i%5==4)
                var zxs_volume=members[i];

              if(zxs_job==1)
                  zxs_job="初级造型师";
              else if(zxs_job==2)
                  zxs_job="中级造型师";
              else if(zxs_job==3)
                  zxs_job="高级造型师";
              }

              var index=Math.floor(i%60/5);
              $(".zxs-name").eq(index).html(zxs_name+"-"+zxs_job);
              $(".zxs-introduce").eq(index).html(zxs_introduce);
              $(".zxs-money").eq(index).html(zxs_price);
              $(".zxs-volume").eq(index).html("交易量"+zxs_volume+"笔");
          }
          return false;
      }
      

      function getOptionsFromForm(){
          var opt = {callback: pageselectCallback};
          $("input:text").each(function(){
              opt[this.name] = this.className.match(/numeric/) ? parseInt(this.value) : this.value;
          });
          var htmlspecialchars ={ "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;"}
          $.each(htmlspecialchars, function(k,v){
              opt.prev_text = opt.prev_text.replace(k,v);
              opt.next_text = opt.next_text.replace(k,v);
          })
          return opt;
      }

      function zxs_list() {
          var optInit = getOptionsFromForm();
          $("#Pagination").pagination(members.length-1, optInit);
          
          $("#setoptions").click(function(){
              var opt = getOptionsFromForm();
              $("#Pagination").pagination(members.length-1, opt);
          }); 
      }


      function zxContent() {
        //造型内容选择
        $(".zx-content .row li").click(function() {
            var index=$(".zx-content .row li").index(this);
            type=index-1;
            getZxs();
            $(".zx-content .row li").css({
              background: '#F7EDED'
            });
            $(".zx-content .row li:eq(0)").css({
              background: '#F7ACE1'
            });
            $(this).css({
              background: '#F9DBDB'
            });
          });

        //造型师选择
        $(".zxs-select .row li").click(function() {
          var index=$(".zx-content .row li").index(this);
          if(index!=0) {
            zxs=$(this).html();
          }
            getZxs();
            $(".zxs-select .row li").css({
              background: '#F7EDED'
            });
            $(".zxs-select .row li:eq(0)").css({
              background: '#F7ACE1'
            });
            $(this).css({
              background: '#F9DBDB'
            });

          });
    }

      $(document).ready(function(){
        $(".zx-content .allContent").css({
          background: '#F9DBDB'
        });
          getZxs();
          zxContent();
      });