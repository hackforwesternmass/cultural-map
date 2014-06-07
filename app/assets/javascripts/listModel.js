// # listModel.js
/**
 * Created with IntelliJ IDEA.
 * User: jbroglio
 * Date: 6/7/14
 * Time: 6:22 PM
 * To change this template use File | Settings | File Templates.
 */

var locListID='landmark-titles';
function ListModel(){
    var self=this,
        locations=[];

    $.getJSON('landmarks.json').done(function(data) {
        locations = data;
        if (locations) {
            $(locListID).html('<ul>');
            $.each(locations, function (k, v) {
                $(locListID).append('<li>' + location[0].title + '</li>');
            });
            $(locListID).html('</ul>');
        }
    })

}