<ul class="navbar-nav mr-auto">
    <% attributes.menu.forEach(function(menuItem) { %>
        <li class="nav-item <%= '/' + window.location.hash == menuItem.path ? 'active':'not-active' %>">
            <a class="nav-link " href="<%= menuItem.path %>">
                <%= menuItem.value %>
            </a>
        </li>
    <% }) %>
</ul>