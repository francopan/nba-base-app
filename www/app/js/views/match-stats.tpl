<div class="card-columns">
     <% models.forEach(function(stats) { %>
        <div class="card">
            <div class="card-body">
                <h3><%=stats.attributes.player.first_name %> <%=stats.attributes.player.last_name %></h3>
                <img class="rounded mw-100 border-bottom mb-2" src="https://nba-players.herokuapp.com/players/<%=stats.attributes.player.last_name%>/<%=stats.attributes.player.first_name%>"/>
                <h5>Player Info</h5>
                <table class="table table-sm mt-2">
                    <tr><th scope="col">Attribute</th><th scope="col">Value</th></tr>
                    <tr><td>Weight:</td><td><%=stats.attributes.player.weight_pounds %> pounds</td></tr>
                    <tr><td>Position:</td><td><%=stats.attributes.player.position %></td></tr>
                    <tr><td>Height:</td><td><%=stats.attributes.player.height_feet %> ft, <%=stats.attributes.player.height_inches %> in</td></tr>
                </table>
                <h5>Match Stats</h5>
                <table class="table table-sm">
                    <tr><th scope="col">Attribute</th><th scope="col">Value</th></tr>
                    <tr><td>Assistances:</td><td><%=stats.attributes.ast %></td></tr>
                    <tr><td>Blocks:</td><td><%=stats.attributes.blk %></td></tr>
                    <tr><td>Three Points Field Goals Percentage</td><td><%=stats.attributes.fg3_pct %></td></tr>
                    <tr><td>Three Points Field Goals Attempted</td><td><%=stats.attributes.fg3a %></td></tr>
                    <tr><td>Three Points Field Goals Made</td><td><%=stats.attributes.fg3m %></td></tr>
                    <tr><td>Field Goals Percentage</td><td><%=stats.attributes.fg_pct %></td></tr>
                    <tr><td>Field Goals Attempted:</td><td><%=stats.attributes.fga %></td></tr>
                    <tr><td>Field Goals Made:</td><td><%=stats.attributes.fgm %></td></tr>
                    <tr><td>Free Throws Percentage:</td><td><%=stats.attributes.ft_pct %></td></tr>
                    <tr><td>Free Throws Attempted:</td><td><%=stats.attributes.fta %></td></tr>
                    <tr><td>Free Throws Made:</td><td><%=stats.attributes.ftm %></td></tr>
                    <tr><td>Minutes Played:</td><td><%=stats.attributes.min %></td></tr>
                    <tr><td>Offensive Rebounds</td><td><%=stats.attributes.oreb %></td></tr>
                    <tr><td>Deffensive Rebounds:</td><td><%=stats.attributes.dreb %></td></tr>
                    <tr><td>Personal Fouls:</td><td><%=stats.attributes.pf %></td></tr>
                    <tr><td>Points:</td><td><%=stats.attributes.pts %></td></tr>
                    <tr><td>Rebounds:</td><td><%=stats.attributes.reb %></td></tr>
                    <tr><td>Steals:</td><td><%=stats.attributes.stl %></td></tr>
                    <tr><td>Team:</td><td><%=stats.attributes.team.name %></td></tr>
                    <tr><td>Turnover:</td><td><%=stats.attributes.turnover %></td></tr>
                </table>
            </div>
        </div>
     <% }) %>
</div>