define(["backbone"], function (Backbone) {
    return Backbone.Model.extend({
      urlRoot: "https://free-nba.p.rapidapi.com/stats",
      /**
     * @author franco.pan
     * @returns Match Stats model with default values for each attribute
     */
      defaults: function () {
        return {
            id:0,
            ast:0,
            blk:1,
            dreb:2,
            fg3_pct:0.2,
            fg3a:5,
            fg3m:1,
            fg_pct:0.333,
            fga:9,
            fgm:3,
            ft_pct:0,
            fta:0,
            ftm:0,
            game:null,
            min:"20:08",
            oreb:0,
            pf:0,
            player:null,
            pts:7,
            reb:2,
            stl:0,
            team:null,
            turnover:2
        };
      },
    });
  });
  