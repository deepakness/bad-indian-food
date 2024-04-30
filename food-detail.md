---
pagination:
    data: foods
    size: 1
    alias: food
    addAllPagesToCollections: true
layout: layouts/post.html
tags: foods
permalink: "/{{ food.reference | slugify }}-{{ food.meta_title | slugify }}/"
templateEngineOverride: md, liquid
breadcrumb: "All Foods"
breadcrumbLink: "/"
date: 2024-04-29
eleventyComputed:
    title: "{{ food.meta_title }}"
    metatitle: "{{ food.meta_title }}"
    metadescription: "{{ food.meta_description }}"
    foodcategory: "{{ food.category }}"
    toxins: "{{ food.toxins }}"
    notifying_country: "{{ food.notifying_country }}"
    subject: "{{ food.subject }}"
    better_category: "{{ food.better_category }}"
    hazards: "{{ food.hazards }}"
    risk_decision: "{{ food.risk_decision }}"
---

{{ food.description }}

<a href="https://webgate.ec.europa.eu/rasff-window/screen/search?searchQueries=eyJkYXRlIjp7InN0YXJ0UmFuZ2UiOiIiLCJlbmRSYW5nZSI6IiJ9LCJjb3VudHJpZXMiOnsibm90aWZpY2F0aW9uQ291bnRyeSI6W1sxLDVdLFs3XSxbOSwxMF0sWzEyXSxbMTRdLFsxOCwxOV0sWzIxXSxbMjRdLFsyN10sWzI5XSxbMzFdLFszNiwzOF0sWzQyXSxbNTIsNjNdLFs1MjZdXSwib3JpZ2luQ291bnRyeSI6W1s1MTE4XV19LCJ0eXBlIjp7fSwibm90aWZpY2F0aW9uU3RhdHVzIjp7Im5vdGlmaWNhdGlvblN0YXR1cyI6W1sxXV19LCJwcm9kdWN0Ijp7fSwicmlzayI6eyJoYXphcmRDYXRlZ29yeSI6W1syMTc4MiwyMTgwN10sWzI2NTgwLDI2NTgxXSxbMjY2MDJdLFsyNjg0NV1dfSwicmVmZXJlbmNlIjoiIiwic3ViamVjdCI6IiIsInBhZ2VTaXplIjoyNX0%3D" role="button">Visit Official Site</a>

<table>
  <thead>
    <tr>
      <th>Type</th>
      <th>Detail</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Reference Number</td>
      <td>{{ food.reference }}</td>
    </tr>
    <tr>
      <td>Category (type)</td>
      <td>{{ food.category }} ({{ food.type }})</td>
    </tr>
    <tr>
      <td>Subject</td>
      <td>{{ food.subject }}</td>
    </tr>
    <tr>
      <td>Brand Name</td>
      <td>{{ food.brand }}</td>
    </tr>
    <tr>
      <td>Mentioned Toxins</td>
      <td>{{ food.toxins }}</td>
    </tr>
    <tr>
      <td>Notifying Country</td>
      <td>{{ food.notifying_country }}</td>
    </tr>
    <tr>
      <td>Notification Classification</td>
      <td>{{ food.classification }}</td>
    </tr>
    <tr>
      <td>Risk Decision</td>
      <td>{{ food.risk_decision }}</td>
    </tr>
    <tr>
      <td>Distribution</td>
      <td>{{ food.distribution }}</td>
    </tr>
    <tr>
      <td>For Attention</td>
      <td>{{ food.forAttention }}</td>
    </tr>
    <tr>
      <td>For Follow-up</td>
      <td>{{ food.forFollowUp }}</td>
    </tr>
    <tr>
      <td>Operator</td>
      <td>{{ food.operator }}</td>
    </tr>
    <tr>
      <td>Possible Hazards</td>
      <td>{{ food.hazards }}</td>
    </tr>
    <tr>
      <td>Origin</td>
      <td>{{ food.origin }}</td>
    </tr>
  </tbody>
</table>

<p><small>🕰️ {{ food.date }}</small></p>

You can learn more about these notifications at the [RASFF Window](https://webgate.ec.europa.eu/rasff-window/screen/search?searchQueries=eyJkYXRlIjp7InN0YXJ0UmFuZ2UiOiIiLCJlbmRSYW5nZSI6IiJ9LCJjb3VudHJpZXMiOnsibm90aWZpY2F0aW9uQ291bnRyeSI6W1sxLDVdLFs3XSxbOSwxMF0sWzEyXSxbMTRdLFsxOCwxOV0sWzIxXSxbMjRdLFsyN10sWzI5XSxbMzFdLFszNiwzOF0sWzQyXSxbNTIsNjNdLFs1MjZdXSwib3JpZ2luQ291bnRyeSI6W1s1MTE4XV19LCJ0eXBlIjp7fSwibm90aWZpY2F0aW9uU3RhdHVzIjp7Im5vdGlmaWNhdGlvblN0YXR1cyI6W1sxXV19LCJwcm9kdWN0Ijp7fSwicmlzayI6eyJoYXphcmRDYXRlZ29yeSI6W1syMTc4MiwyMTgwN10sWzI2NTgwLDI2NTgxXSxbMjY2MDJdLFsyNjg0NV1dfSwicmVmZXJlbmNlIjoiIiwic3ViamVjdCI6IiIsInBhZ2VTaXplIjoyNX0%3D) site in detail and [click here](/) to explore more food items.