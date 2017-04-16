$(function() {

  $.ajax({
    url: 'https://www.codeschool.com/users/hirosn.json',
    dataType: 'jsonp',
    success: function(response) {
      if (!response || !response.courses) { return; }
      if (!Array.isArray(response.courses.completed)) { return; }
      response.courses.completed.forEach(function(item) {
        $('#badges').append(
          $('<DIV class="course"></DIV>')
          .append($('<H3></H3>').text(item.title))
          .append($('<IMG>').attr('src', item.badge))
          .append(
            $('<A target="_blank" class="btn btn-primary">See Course</A>')
            .attr('href', item.url)
          )
        );
      });
    }
  });

});
