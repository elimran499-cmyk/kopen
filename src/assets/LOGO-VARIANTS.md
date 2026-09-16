# Logo variants

`iptv-koning-logo.png` is the artwork as supplied: gold crown, navy "IPTV",
orange "Koning", grey tagline, drawn on a solid white plate at 1000×250.

Three variants are derived from it and committed alongside it, because the
white plate cannot sit on the tinted canvas and the navy glyphs disappear on
the dark footer:

| File | How it is made | Used by |
| --- | --- | --- |
| `iptv-koning-logo-trans.png` | near-white pixels keyed to alpha, with a feathered band over the antialiased glyph edges | `<Logo />` on light backgrounds |
| `iptv-koning-logo-light.png` | the transparent version, with dark blue-dominant pixels (navy text, grey tagline) turned white | `<Logo inverted />` on dark backgrounds |
| `iptv-koning-crown.png` | the transparent version cropped to the crown and trimmed to its bounding box | `<LogoMark />` in the splash intro |

The crown and the orange "Koning" keep their delivered colours in every
variant — only the white plate and the navy are touched.

To regenerate after replacing the source artwork, re-run the keying script
described above against the new `iptv-koning-logo.png`.
