---
layout: layouts/base.html
title: Explore the fascinating bug world
description: Your premier destination for concise, insightful information on the fascinating world of bugs. Discover, learn and explore the buzz now!
date: 2023-07-17
pagination:
    data: collections.foods
    size: 20
    alias: foods
---

Welcome!!!

<div>
{% for food in foods %}
<article>
    <div>
        <h3><a href="{{ food.url }}">{{ food.data.title }}</a></h3>
        <p>{{ food.data.metadescription }}</p>
    </div>
</article>
{% endfor %}

<!-- Pagination links -->
{% if pagination.href.next %}
    <a class="contrast" role="button" href="{{ pagination.href.next }}">→</a>
{% endif %}
{% if pagination.href.previous %}
    <a class="contrast" role="button" href="{{ pagination.href.previous }}">←</a>
{% endif %}
</div>