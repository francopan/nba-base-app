define(["../collections/match.collection","../collections/stats.collection", "../views/match-list.view","../views/match.view","../views/match-stats.view", "../models/match.model"], (
    MatchCollection,
    StatsCollection, 
    MatchListView,
    MatchView,
    MatchStatsView,
    Match,
) => {

    let matchController = function MatchController(){
        matchController.prototype.matches = new MatchCollection();
        matchController.prototype.stats = new StatsCollection();
        matchController.prototype.apiHeaders = {
            "x-rapidapi-key":
            "1ff61dbd37msha92c1bc11eeea7bp1b3cdcjsnc6850808e820",
            "x-rapidapi-host": "free-nba.p.rapidapi.com",
        };

        matchController.prototype.callbackPageSuccess = function (collection) {
            return new MatchListView({ collection: collection });
        }
    
        matchController.prototype.callbackPageError = function (e) {
            return console.error(" Service request failure: " + e);
        }

        matchController.prototype.getMatch = (_id) => {
            let model = new Match({ "id": _id });
            return model.fetch({
                headers: this.apiHeaders,
                success: (model) => {
                    new MatchView({ model: model })
                    this.stats.fetch({
                        ifModified: false,
                        data: $.param({"game_ids[]": `${_id}`}),
                        headers: this.apiHeaders,
                        success: (model2) => {
                            new MatchStatsView({ model: model2 });
                        },
                        error: (e) => this.callbackPageError(e)
                    })
                },
                error: (e) => this.callbackPageError(e),
            });
        };

        matchController.prototype.getPage = (id) => {  
            this.matches.state["team_ids\[\]"] = id;
            return this.matches.fetch({
                headers: this.apiHeaders,
                success: (a) => this.callbackPageSuccess(a),
                error: (e) => this.callbackPageError(e),
            });
        };
    
        matchController.prototype.getNextPage = () => {
            return this.matches.getNextPage({
                headers: this.apiHeaders,
                success: (a) => this.callbackPageSuccess(a),
                error: (e) => this.callbackPageError(e),
            });
        };

        matchController.prototype.getPageNumber = (pageNumber) => {
            this.matches.getPage(pageNumber, {
                headers: this.apiHeaders,
                success: (a) => this.callbackPageSuccess(a),
                error: (e) => this.callbackPageError(e),
            });
        }
    
    }
    return matchController;
});