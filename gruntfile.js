module.exports = function (grunt) {
  require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    cssmin: {
      sitecss: {
        options: {
          banner: "",
        },
        files: {
          "dist/app/style/main.css": ["www/app/style/main.css"],
        },
      },
    },
    requirejs: {
      compile: {
        options: {
          baseUrl: "./www",
          name: "app/js/lib/almond",
          mainConfigFile: "www/app.js",
          include: ["app/js/main.js", "app.js"],
          out: "dist/app/js/main.js",
          optimize: "none",
        },
      },
    },
    copy: {
      main: {
        src: "www/index.html",
        dest: "dist/index.html",
        options: {
          process: function (content, srcpath) {
            content = content.replace(
              "app/js/lib/require.js",
              "app/js/main.js"
            );
            return content.replace('data-main="app"', "");
          },
        },
      },
      fonts: {
        expand: true,
        cwd: "www/app/fonts/",
        src: "*.TTF",
        dest: "dist/app/fonts/",
      },
      bootstrapCSS: {
        expand: true,
        cwd: "www/app/style/bootstrap/",
        src: "*.min.css",
        dest: "dist/app/style/bootstrap/",
      },
      bootstrapCSSMap: {
        expand: true,
        cwd: "www/app/style/bootstrap/",
        src: "*.css.map",
        dest: "dist/app/style/bootstrap/",
      },
    },
    uglify: {
      options: {
        mangle: {
          reserved: ["jQuery", "Backbone", "$", "_"],
        },
      },
      main: {
        files: {
          "dist/app/js/main.js": ["dist/app/js/main.js"],
        },
      },
    },
  });

  grunt.registerTask("default", ["requirejs", "uglify", "cssmin", "copy"]);
  grunt.registerTask("beautify", ["requirejs", "cssmin", "copy"]);
};
