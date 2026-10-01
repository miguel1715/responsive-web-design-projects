# Responsive Web Design — Projects (freeCodeCamp)

Projects completed as part of freeCodeCamp’s **Responsive Web Design** certification (HTML and CSS).

They're here as a record of where I started — this was
the beginning of my road into programming, and it was intimidating at first,
especially trying to understand how CSS actually works.

Some of these were simply what the course required to complete a section, even though they still made me struggle and taught me a lot. Two
of them weren't. The **Product Landing Page** is a real page for a friend's business,
built to showcase a product she was selling. The **Personal Portfolio** was the
final project of the certification, and it's where I present my work —
it'll keep getting updated as I learn more.

## Completed projects

| Project | Live | Code | Notes |
|---|---|---|---|
| Survey Form | [demo](https://photography-form.netlify.app) | [source](./survey-form/) | |
| Tribute Page | [demo](https://tribute-page-tommy.netlify.app) | [source](./tribute-page/) | |
| Technical Documentation Page | [demo](https://technical-css-doc-page.netlify.app) | [source](./technical-documentation-page/) | |
| Product Landing Page | [demo](https://lumuscandles.netlify.app) | [source](./product-landing-page/) | Built for a real client |
| Personal Portfolio | [demo](https://miguel-cruz-dev.netlify.app) | [source](./personal-portfolio/) | Final project of the certification |

## Tech Used

HTML and CSS. No frameworks or libraries.

## What I Learned

- Most layout problems turn out to be a property set on the wrong element —
  `justify-content` and `align-items` belong on the parent, not the child
- Setting a fixed `height` early is what makes a layout impossible to fix later;
  width you set, height you let happen
- `* { outline: 1px solid red; }` at the top of a stylesheet shows every box on
  the page — most layout problems become obvious the moment you can see where
  the boxes actually are
- Padding compounds at every nesting level, so one or two boxes should carry
  the spacing and the rest get zero
- `letter-spacing` adds the space after the last letter too, which pushes
  centred text off-centre
- Doing layout and styling in the same pass is what gets you lost — get every
  box in the right place with no colour at all, then decorate
- Five minutes sketching the boxes on paper saves an hour of guessing in CSS
- Nobody warns you that CSS can make you spend two hours
  fighting over four pixels
