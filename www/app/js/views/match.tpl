<div class="card-columns" id="match-list">
    <% models.forEach(function(match) { %>
        <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title"><%= match.attributes.home_team.abbreviation %> (<%=match.attributes.home_team_score%>) vs (<%=match.attributes.visitor_team_score%>) <%= match.attributes.visitor_team.abbreviation %></h5>
            <h6 class="card-subtitle mb-2 text-muted"><%=match.attributes.home_team.name %> vs <%= match.attributes.visitor_team.name %></h6>
            <p class="card-text"></p>
            <a href="#" class="card-link">Card link</a>
            <a href="#" class="card-link">Another link</a>
        </div>
        </div>
    <% }) %>
</div>
<ul class="pagination">
    <li class="page-item"><a class="page-link" href="#">Previous</a></li>
    <li class="page-item"><a class="page-link" href="#matches/">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item"><a class="page-link" href="#">Next</a></li>
</ul>
