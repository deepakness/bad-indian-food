---
layout: layouts/base.html
title: Indian Food Items Banned by EU
metadescription: A collection of multiple Indian food items banned by EU due to them containing harmful toxins.
date: 2024-04-29
pagination:
    data: collections.foods
    size: 1500
    alias: foods
---

After [@SudiptoDoc tweeted](https://twitter.com/SudiptoDoc/status/1784441173417054283) about multiple Indian products containing toxins and then being banned by the EU, we got the [list](https://webgate.ec.europa.eu/rasff-window/screen/search?searchQueries=eyJkYXRlIjp7InN0YXJ0UmFuZ2UiOiIiLCJlbmRSYW5nZSI6IiJ9LCJjb3VudHJpZXMiOnsibm90aWZpY2F0aW9uQ291bnRyeSI6W1sxLDVdLFs3XSxbOSwxMF0sWzEyXSxbMTRdLFsxOCwxOV0sWzIxXSxbMjRdLFsyN10sWzI5XSxbMzFdLFszNiwzOF0sWzQyXSxbNTIsNjNdLFs1MjZdXSwib3JpZ2luQ291bnRyeSI6W1s1MTE4XV19LCJ0eXBlIjp7fSwibm90aWZpY2F0aW9uU3RhdHVzIjp7Im5vdGlmaWNhdGlvblN0YXR1cyI6W1sxXV19LCJwcm9kdWN0Ijp7fSwicmlzayI6eyJoYXphcmRDYXRlZ29yeSI6W1syMTc4MiwyMTgwN10sWzI2NTgwLDI2NTgxXSxbMjY2MDJdLFsyNjg0NV1dfSwicmVmZXJlbmNlIjoiIiwic3ViamVjdCI6IiIsInBhZ2VTaXplIjoyNX0%3D) in the CSV format and published everything on this site.

🎉 Currently, there are 1,234 items in the list with risk decisions from <mark>serious</mark>, <mark>potentially serious</mark>, <mark>not serious</mark>, <mark>no risk</mark>, <mark>potential risk</mark>, and <mark>undecided</mark>.

<div>
<table>
<thead>
<tr>
    <th><small>Subject</small></th>
    <th><small>Food Category</small></th>
    <th><small>Mentioned Toxins</small></th>
    <th><small>Notifying Country</small></th>
    <th><small>Risk</small></th>
</tr>
</thead>
{% for food in foods %}
<tr>
    <td><small><strong><a href="{{ food.url }}">{{ food.data.title }}</a></strong></small></td>
    <td><small>{{ food.data.better_category }}</small></td>
    <td><small>{{ food.data.toxins }}</small></td>
    <td><small>{{ food.data.notifying_country }}</small></td>
    <td><small>{{ food.data.risk_decision | capitalize }}</small></td>
</tr>
{% endfor %}
</table>

<!-- Pagination links -->
{% if pagination.href.next %}
    <a class="contrast" role="button" href="{{ pagination.href.next }}">→</a>
{% endif %}
{% if pagination.href.previous %}
    <a class="contrast" role="button" href="{{ pagination.href.previous }}">←</a>
{% endif %}
</div>