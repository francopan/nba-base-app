define(["backbone"], function (Backbone) {
  return Backbone.Model.extend({
    /**
     * @author franco.pan
     * @returns Menu model with default values for each attribute
     */
    defaults: function () {
      return {
        menu: [
          {
            value: "Home",
            path: "/",
          },
          {
            value: "Matches",
            path: "/#matches",
          },
          {
            value: "Teams",
            path: "/#teams",
          },
        ],
      };
    },
  });
});
