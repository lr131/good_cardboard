var Menu = {
  
  el: {
    ham: $('.nav'),
    menuTop: $('.nav-top'),
    menuMiddle: $('.nav-middle'),
    menuBottom: $('.nav-bottom')
  },
  
  init: function() {
    Menu.bindUIactions();
  },
  
  bindUIactions: function() {
    Menu.el.ham
        .on(
          'click',
        function(event) {
        Menu.activateMenu(event);
        event.preventDefault();
      }
    );
  },
  
  activateMenu: function() {
    Menu.el.menuTop.toggleClass('nav-top-click');
    Menu.el.menuMiddle.toggleClass('nav-middle-click');
    Menu.el.menuBottom.toggleClass('nav-bottom-click'); 
  }
};

Menu.init();