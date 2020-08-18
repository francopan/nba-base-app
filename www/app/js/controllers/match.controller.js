define(["../collections/match.collection", "../views/match.view"], (
    MatchCollection, 
    MatchView
) => {

    let matchController = function MatchController(){
        matchController.prototype.matches = new MatchCollection();
        matchController.prototype.apiHeaders = {
            "x-rapidapi-key":
            "1ff61dbd37msha92c1bc11eeea7bp1b3cdcjsnc6850808e820",
            "x-rapidapi-host": "free-nba.p.rapidapi.com",
        };

        matchController.prototype.callbackPageSuccess = function (collection) {
            var page =  new MatchView({ collection: collection });
        }
    
        matchController.prototype.callbackPageError = function (e) {
            return console.error(" Service request failure: " + e);
        }

        matchController.prototype.getPage = () => {  
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