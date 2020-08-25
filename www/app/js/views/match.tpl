
<div class="card fade-in">
    <div class="card-body">
        <h5 class="card-title"><%= attributes.home_team.abbreviation %> (<%=attributes.home_team_score%>) vs (<%=attributes.visitor_team_score%>) <%= attributes.visitor_team.abbreviation %></h5>
        <h6 class="card-subtitle mb-2 text-muted"><%=attributes.home_team.name %> vs <%= attributes.visitor_team.name %></h6>
    </div>
</div>
<div id="match-stats" class="mt-2"></div>
