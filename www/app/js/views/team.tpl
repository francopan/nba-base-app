<div class="card fade-in">
    <div class="card-body">
        <h5 class="card-title"><%= attributes.full_name %></h5>
        <h6 class="card-subtitle mb-2 text-muted"><%=attributes.abbreviation %></h6>
        <ul>
            <li>City: <%= attributes.city %></li>
            <li>Conference: <%= attributes.conference %></li>
            <li>Division: <%= attributes.division %></li>
        </ul>
        <a href="/#matches/team/<%= attributes.id %>">List Matches</a>
    </div>
</div>
<div id="match-stats" class="mt-2"></div>
