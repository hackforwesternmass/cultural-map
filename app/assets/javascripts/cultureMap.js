var CM = {

  parallax: function() {
    var ev = {
      scrollTop: document.body.scrollTop || document.documentElement.scrollTop
    };
    ev.ratioScrolled = ev.scrollTop / (document.body.scrollHeight - document.documentElement.clientHeight);
    this.render(ev);
  },

  render: function(ev) {
    var t = ev.scrollTop;
    var y = Math.round(t * 1 / 4) - 0;
    var x = Math.round(t * -1 / 4) - 0;
    var coords = '50% ' + x + 'px';

    jQuery('#hero-home').css('background-position', coords);
  },

  viewMap: function() {
    $('#list-view').hide();
    $('#map-canvas').show();
  },

  viewList: function() {
    $('#map-canvas').hide();

    //

    $('#list-view').show();
  }
};
