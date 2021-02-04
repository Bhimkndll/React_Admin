




  function waitForElement(querySelector, timeout=0){
    const startTime = new Date().getTime();
    return new Promise((resolve, reject)=>{
        const timer = setInterval(()=>{
            const now = new Date().getTime();
            if(document.querySelector(querySelector)){
                clearInterval(timer);
                resolve();
            }else if(timeout && now - startTime >= timeout){
                clearInterval(timer);
                reject();
            }
        },100);
    });
}


waitForElement("li.has-child",1500000000).then(function(){
    $("li.has-child").addClass("testtesttesttest");


  $("li.has-child > a").after('<div class="child-menu-btn fa fa-plus"></div>');

  $(".cm-menu-btn").click(function () {
    $(".cm-menu-inner").slideToggle();
    $(".cm-menu-inner > ul ul.menu-ul").slideUp();
    $(".child-menu-btn").removeClass("fa-minus");
  });

  $(".child-menu-btn").click(function () {
    //do this to its sub menu
    $(this).next("ul.menu-ul").slideToggle();
    $(this).toggleClass("fa-minus");

    //do this to all other sub menu excluding the one that was clicked
    $(this).parent("li").siblings().children("ul.menu-ul").slideUp();
    $(this)
      .parent("li")
      .siblings()
      .children(".child-menu-btn")
      .removeClass("fa-minus");
    $(this)
      .parent("li")
      .siblings()
      .children()
      .find(".child-menu-btn")
      .removeClass("fa-minus");


    $(this)
      .next("ul.menu-ul")
      .children("li.has-child")
      .find("ul.menu-ul")
      .slideUp();
    $(this)
      .next("ul.menu-ul")
      .children("li.has-child")
      .find(".child-menu-btn")
      .removeClass("fa-minus");
  });
}).catch(()=>{
    alert("element did not load in 3 seconds");
});


