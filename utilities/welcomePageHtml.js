const welcomePageHtml = `<h2 id="api-reference">API Reference</h2>
<h4 id="get-all-books">Get all books</h4>
<pre><code class="lang-http">  <span class="hljs-meta">GET</span> /api/<span class="hljs-keyword">books</span>
</code></pre>
<h4 id="get-book">Get book</h4>
<pre><code class="lang-http">  <span class="hljs-attribute">GET</span> /api/items/<span class="hljs-symbol">$</span>{id}</span>
</code></pre>
<table>
<thead>
<tr>
<th style="text-align:left">Parameter</th>
<th style="text-align:left">Type</th>
<th style="text-align:left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><code>id</code></td>
<td style="text-align:left"><code>string</code></td>
<td style="text-align:left"><strong>Required</strong>. Id of item to fetch</td>
</tr>
</tbody>
</table>
<h4 id="post-a-book">Post a book</h4>
<pre><code class="lang-http">  POST <span class="hljs-regexp">/api/</span>books
</code></pre>
<p>To post a book. One needs to have following information about the book:</p>
<ul>
<li>title</li>
<li>author</li>
<li>price</li>
<li>publisher</li>
<li>description</li>
<li>datePublished</li>
<li>genre</li>
<li>url</li>
</ul>
<h4 id="update-a-book">Update a book</h4>
<pre><code class="lang-http">  <span class="hljs-keyword">PUT</span> /api/books/<span class="hljs-symbol">$</span>{id}
</code></pre>
<p>To update the book, and id must be provided. Along with that body must have the all information about the updated book.</p>
<h4 id="delete-a-book">Delete a book</h4>
<pre><code class="lang-http">  <span class="hljs-keyword">DELETE</span> <span class="hljs-regexp">/api/</span>books<span class="hljs-regexp">/<span class="hljs-symbol">$</span>{id}'</span>
</code></pre>
`;

module.exports = welcomePageHtml;
