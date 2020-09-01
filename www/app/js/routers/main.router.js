define(["backbone", "../controllers/match.controller", "../controllers/team.controller", "../views/menu.view", "../models/menu.model", "../views/home.view"], (
  Backbone,
  MatchController,
  TeamController,
  MenuView,
  MenuModel,
  HomeView
) => {
  let matchController = new MatchController();
  let teamController = new TeamController();

  return Backbone.Router.extend({
    routes: {
      "matches": "getMatches",
      "matches/team/:id": "getMatchsByTeam",
      "match/:id": "getMatch",
      "teams": "getTeams",
      "team/:id": "getTeam",
      "" : "getHome"
    },
    /**
     * Get a page of games/matches and render its contents
     * @author franco.pan
     */
    getMatches: function () {
      this.cleanListeners();
      matchController.getPage(null);
    },
    /**
     * Get a page of games/matches of a team and render its contents
     * @author franco.pan
     */
    getMatchsByTeam: function (id) {
      this.cleanListeners();
      matchController.getPage(id);
    },
    /**
     * Get a specific match and displays its stats.
     * @param id The id number of a match
     * @author franco.pan
     */
    getMatch: function (id) {
      this.cleanListeners();
      matchController.getMatch(id);
    },
    /**
     * Get a page of teams and render its contents
     * @author franco.pan
     */
    getTeams: function () {
      this.cleanListeners();
      teamController.getPage();
    },
    /**
     * Get a specific match and displays its stats.
     * @param id The id number of a match
     * @author franco.pan
     */
    getTeam: function (id) {
      this.cleanListeners();
      teamController.getTeam(id);
    },
    getHome: function () {
      this.cleanListeners();
      console.log("a");
      new HomeView();
    },
    /**
     * This is a jerry-rig/gambiarra so that the pages that are infinite-loading do not override other templates.
     * It replaces the previous app-outlet with a clone that does not contains listeners.
     * The app-outlet is the default parent element that renders the application contents. 
     * @author franco.pan
     */
    cleanListeners() {
      // Instantiate menu
      let menu = new MenuModel();
      new MenuView({model: menu});

      // Empty Main Content
      let old_element = document.getElementById("router-applet");
      let new_element = old_element.cloneNode(true);
      new_element.innerHTML = `
        <div class="row">
          <div class="col-sm-12">
            <div class="spinner-border " role="status">
                <span class="sr-only">Loading...</span>
            </div>
          </div>
        </div>`; // Displays a loading spinner. This content will be removed/overriden when the actual content is loaded.
      old_element.parentNode.replaceChild(new_element, old_element);
    },
  });
});
