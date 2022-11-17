There are slightly different approaches possible here:

-   Add `"transformers": {"rawurl:*": []}` to the .parcelrc, then `pipeline` is available in the resolver and can be used for matching. (That's how it implemented here at the moment)
-   Without that transformers declaration, check for `dependency.specifier.startsWith("rawurl:")` as the pipeline isn't parsed in that case.
