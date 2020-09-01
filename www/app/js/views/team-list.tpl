
<h5>Choose your team:</h5>
<div class="card-columns">
     <% models.forEach(function(team) { %>
        <div class="card ">
            <div class="card-body">
                <h3><a href="/#team/<%=team.attributes.id %>"><%=team.attributes.full_name %></a></h3>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="exampleRadios" id="<%= team.attributes.id %>" value="<%= team.attributes.id %>"
                    <%= localStorage.getItem('myTeam') == team.attributes.id.toString() ? 'checked' : ''  %>>
                    <label class="form-check-label" for="<%= team.attributes.id %>">This is my team</label>
                </div>
            </div>
        </div>
     <% }) %>
</div>

