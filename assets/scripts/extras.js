$(function() {
  if (typeof homeScreenButtons !== 'undefined') {
    $(homeScreenButtons).each(function (i, v) {
      var link = $("<a>", {
        class: "btn-subscribe-home animated bounceIn",
        id: "hs-btn-" + i,
        href: v.url,
        text: v.name
      });
      if (v.class) {
        link.addClass(v.class);
      }
      if (v.target) {
        link.attr("target", v.target);
      }
      if (v.title) {
        link.attr("title", v.title);
      }
      link.appendTo("#btn-panel-home")
    });
  }

  if (typeof githubUsername !== 'undefined') {
    $("#github-sidebar-items").removeClass("u-hide");

    $.get("https://api.github.com/users/"+githubUsername+"/repos?sort=pushed", function (data) {
      var repoCount = data.length;
      var displayNum = repoCount;
      if (typeof reposToDisplay !== 'undefined' && Number.isInteger(reposToDisplay)) {
        displayNum = reposToDisplay;
      }

      var displayNumText = displayNum == repoCount ? repoCount : displayNum;

      $('<span>', {
        text: 'Displaying '+displayNumText+' of '+repoCount+' repos'
      }).appendTo('#widget-github-bottom');

      $(data).each(function (i, v) {
        if (i >= displayNum) {
          return;
        }

        var div = $('<div>', {
          class: 'sidebar-post',
          id: 'sidebar-post'+i
        });

        var githubLink = $('<a>', {
          class: 'github-repos sidebar-post--link',
          href: v.html_url,
          target: '_blank'
        });

        var span = $('<span>', {
          class: 'sidebar-post--border',
          text: i+1
        });

        var title = $('<h3>', {
          class: 'sidebar-post--title',
          text: v.name
        });

        span.appendTo(githubLink);
        title.appendTo(githubLink);
        githubLink.appendTo(div);
        div.appendTo("#github-repo-container");
      });
    }, "json");
  }

});
