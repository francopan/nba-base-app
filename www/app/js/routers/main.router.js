define(["backbone", "../controllers/match.controller"], (
  Backbone,
  MatchController
) => {

  let matchController = new MatchController();

  return Backbone.Router.extend({
    routes: {
      "": "index",
      "matches": "getMatches",
      "matches/:page": "getMatchesPage",
      "match/:id": "getMatch",
      "download/*path": "downloadFile",
    },
    getMatches: function () {
      matchController.getPage();
    },
    getMatchesPage: function(page) {
      matchController.getPageNumber(parseInt(page))
    },
    getMatch: function (id) {
      matchController.getMatch(id);
    }
  });
});
