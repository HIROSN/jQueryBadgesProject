$(function() {

  $.ajax({
    url: 'https://www.codeschool.com/users/hirosn.json',
    dataType: 'jsonp',
    success: function(response) {
      if (response && response.courses &&
        Array.isArray(response.courses.completed)) {
          var $badges = $('#badges');
          response.courses.completed.forEach(function(item) {
            var $div = $('<DIV></DIV>').addClass('course');
            $div.append($('<H3></H3>').text(item.title));
            $div.append($('<IMG>').attr('src', item.badge));
            $div.append(
              $('<A target="_blank" class="btn btn-primary">See Course</A>')
              .attr('href', item.url));
            $badges.append($div);
          });
      }
    }
  });

});
