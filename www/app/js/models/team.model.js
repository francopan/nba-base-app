define(["backbone"], function (Backbone) {
  return Backbone.Model.extend({
    urlRoot: "https://free-nba.p.rapidapi.com/teams",
    /**
     * @author franco.pan
     * @returns Team model with default values for each attribute
     */
    defaults: function () {
      return {
        id: 0,
        abbreviation: null,
        city: null,
        conference: null,
        division: null,
        full_name: null,
        name: null
      };
    },
  });
});
