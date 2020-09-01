define([
  "../collections/team.collection",
  "../views/team-list.view",
  "../views/team.view",
  "../models/team.model"
], (TeamCollection, TeamListView, TeamView, Team) => {
  let teamController = function TeamController() {
    teamController.prototype.teams = new TeamCollection();
    teamController.prototype.apiHeaders = {
      "x-rapidapi-key": "1ff61dbd37msha92c1bc11eeea7bp1b3cdcjsnc6850808e820",
      "x-rapidapi-host": "free-nba.p.rapidapi.com",
    };

    teamController.prototype.callbackPageSuccess = function (collection) {
      return new TeamListView({ collection: collection });
    };

    teamController.prototype.callbackPageError = function (e) {
      return console.error(" Service request failure: " + e);
    };

    teamController.prototype.getTeam = (_id) => {
      let model = new Team({ id: _id });
      return model.fetch({
        headers: this.apiHeaders,
        success: (model) => {
          new TeamView({ model: model });
        },
        error: (e) => this.callbackPageError(e),
      });
    };

    teamController.prototype.getPage = () => {
      return this.teams.fetch({
        headers: this.apiHeaders,
        success: (a) => this.callbackPageSuccess(a),
        error: (e) => this.callbackPageError(e),
      });
    };

    teamController.prototype.getNextPage = () => {
      return this.teams.getNextPage({
        headers: this.apiHeaders,
        success: (a) => this.callbackPageSuccess(a),
        error: (e) => this.callbackPageError(e),
      });
    };

    teamController.prototype.getPageNumber = (pageNumber) => {
      this.teams.getPage(pageNumber, {
        headers: this.apiHeaders,
        success: (a) => this.callbackPageSuccess(a),
        error: (e) => this.callbackPageError(e),
      });
    };
  };
  return teamController;
});
