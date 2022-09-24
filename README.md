# scafold

Yes, I can't spell, but changing the name would be admitting defeat.  I just need to find an acronym.

This repo is a "framework" of sorts for TypeScript projects.  It was extracted from the over-engineered client side architecture I built for flowconverter.net

It is build around the following odd ideas:
 - No libraries, as few dependencies as possible.
 - The framework is part of the codebase, rather than a dependancy.  Extend, Modify, and Own, rather than Use, Work-Around, and Keep Up-to-Date.
 - One codebase for server and client.  Test objects in the environment they will be used (Browser, Server, or Both) 
 - One Big Message Bus for Everything. (this is probably a mistake, but I'm curious how and when it will start sucking). 
 - No templating language, a `UIComponent` is just a javascript class which builds and modifies its HTML elements.
