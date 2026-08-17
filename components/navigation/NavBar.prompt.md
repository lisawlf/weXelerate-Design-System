The site's sticky header — chrome-density glass, 60px tall, bottom hairline, wordmark left and ghost-pill CTA right.

```jsx
<NavBar items={[{label:'Programs',hasMenu:true},{label:'Ecosystem'},{label:'Events'}]} activeItem="Programs" cta="Get in touch" />
```

Intentional addition: the source documents `nav-link` and describes the bar as the reference glass implementation, so the bar is packaged for reuse.
